﻿using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Runtime.Caching;
using System.Threading;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace readShorts.Web.Filters
{
    public class APICacheAttribute : ActionFilterAttribute
    {
        // cache length in seconds
        private int _timespan;

        // client cache length in seconds
        private int _clientTimeSpan;

        // cache for anonymous users only?
        private bool _anonymousOnly;

        // cache key
        private string _cachekey;

        // cache repository
        private static readonly ObjectCache WebApiCache = MemoryCache.Default;

        public APICacheAttribute(int timespan, int clientTimeSpan, bool anonymousOnly)
        {
            _timespan = timespan;
            _clientTimeSpan = clientTimeSpan;
            _anonymousOnly = anonymousOnly;
        }

        private bool _isCacheable(HttpActionContext ac)
        {
            if (_timespan > 0 && _clientTimeSpan > 0)
            {
                if (_anonymousOnly)
                    if (Thread.CurrentPrincipal.Identity.IsAuthenticated)
                        return false;
                if (ac.Request.Method == HttpMethod.Get) return true;
            }
            else
            {
                throw new InvalidOperationException("Wrong Arguments");
            }
            return false;
        }

        private CacheControlHeaderValue setClientCache()
        {
            var cachecontrol = new CacheControlHeaderValue();
            cachecontrol.MaxAge = TimeSpan.FromSeconds(_clientTimeSpan);
            cachecontrol.MustRevalidate = true;
            return cachecontrol;
        }

        public override void OnActionExecuting(HttpActionContext ac)
        {
            if (ac != null)
            {
                if (_isCacheable(ac))
                {
                    var keys = ac.Request.RequestUri.ParseQueryString().ToString();

                    _cachekey = ac.Request.RequestUri.AbsolutePath + ":" + keys;
                    if (WebApiCache.Contains(_cachekey))
                    {
                        var val = (string)WebApiCache.Get(_cachekey);
                        if (val != null)
                        {
                            ac.Response = ac.Request.CreateResponse();
                            ac.Response.Content = new StringContent(val);
                            var contenttype = (MediaTypeHeaderValue)WebApiCache.Get(_cachekey + ":response-ct");
                            if (contenttype == null)
                                contenttype = new MediaTypeHeaderValue(_cachekey.Split(':')[1]);
                            ac.Response.Content.Headers.ContentType = contenttype;
                            ac.Response.Headers.CacheControl = setClientCache();
                            return;
                        }
                    }
                }
            }
            else
            {
                throw new ArgumentNullException("actionContext");
            }
        }

        public override void OnActionExecuted(HttpActionExecutedContext actionExecutedContext)
        {
            if (!(WebApiCache.Contains(_cachekey)))
            {
                var body = actionExecutedContext.Response.Content.ReadAsStringAsync().Result;
                WebApiCache.Add(_cachekey, body, DateTime.Now.AddSeconds(_timespan));
                WebApiCache.Add(_cachekey + ":response-ct", actionExecutedContext.Response.Content.Headers.ContentType, DateTime.Now.AddSeconds(_timespan));
            }
            if (_isCacheable(actionExecutedContext.ActionContext))
                actionExecutedContext.ActionContext.Response.Headers.CacheControl = setClientCache();
        }
    }
}