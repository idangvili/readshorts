!function(e){"use strict";var o="socialshare",i="Socialshare",t=["facebook","facebook-messenger","twitter","linkedin","google","pinterest","tumblr","reddit","stumbleupon","buffer","digg","delicious","vk","pocket","wordpress","flipboard","xing","hackernews","evernote","whatsapp","telegram","viber","skype","email","ok"],a=function(){var o=[{provider:"email",conf:{subject:"",body:"",to:"",cc:"",bcc:"",trigger:"click"}},{provider:"facebook",conf:{url:"",text:"",media:"",type:"",via:"",to:"",from:"",ref:"",display:"",source:"",caption:"",redirectUri:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"facebook-messenger",conf:{url:""}},{provider:"twitter",conf:{url:"",text:"",via:"",hashtags:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"linkedin",conf:{url:"",text:"",description:"",source:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"reddit",conf:{url:"",text:"",subreddit:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"vk",conf:{url:"",text:"",media:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"ok",conf:{url:"",text:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"digg",conf:{url:"",text:"",media:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"delicious",conf:{url:"",text:"",media:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"stumbleupon",conf:{url:"",text:"",media:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"pinterest",conf:{url:"",text:"",media:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"google",conf:{url:"",text:"",media:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"tumblr",conf:{url:"",text:"",media:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"buffer",conf:{url:"",text:"",via:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"pocket",conf:{url:"",text:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"flipboard",conf:{url:"",text:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"hackernews",conf:{url:"",text:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"wordpress",conf:{url:"",text:"",media:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"xing",conf:{url:"",text:"",media:"",follow:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"evernote",conf:{url:"",text:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"whatsapp",conf:{url:"",text:""}},{provider:"telegram",conf:{url:"",text:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"viber",conf:{url:"",text:""}},{provider:"skype",conf:{url:"",text:"",trigger:"click",popupHeight:600,popupWidth:500}}];return{configure:function(i){var a,r,s,h,c=0,p=0,n=e.injector(["ng"]).get("$log");if(i&&i.length>0)for(;c<i.length;c+=1)if(i[c].provider&&t.indexOf(i[c].provider)>-1){for(;p<o.length;p+=1)if(h=o[p],h&&h.provider&&i[c].provider===h.provider){for(a=Object.keys(h.conf),r=0;r<a.length;r+=1)s=a[r],s&&i[c].conf[s]&&(h.conf[s]=i[c].conf[s]);p=0;break}}else n.warn("Invalid provider at element "+c+" with name:"+i[c].provider)},$get:function(){return o}}},r=function(e,o){var i;o.socialshareType&&"feed"===o.socialshareType?(i="https://www.facebook.com/dialog/feed?",o.socialshareVia&&(i+="&app_id="+encodeURIComponent(o.socialshareVia)),o.socialshareRedirectUri&&(i+="&redirect_uri="+encodeURIComponent(o.socialshareRedirectUri)),o.socialshareUrl&&(i+="&link="+encodeURIComponent(o.socialshareUrl)),o.socialshareTo&&(i+="&to="+encodeURIComponent(o.socialshareTo)),o.socialshareDisplay&&(i+="&display="+encodeURIComponent(o.socialshareDisplay)),o.socialshareRef&&(i+="&ref="+encodeURIComponent(o.socialshareRef)),o.socialshareFrom&&(i+="&from="+encodeURIComponent(o.socialshareFrom)),o.socialshareDescription&&(i+="&description="+encodeURIComponent(o.socialshareDescription)),o.socialshareText&&(i+="&name="+encodeURIComponent(o.socialshareText)),o.socialshareCaption&&(i+="&caption="+encodeURIComponent(o.socialshareCaption)),o.socialshareMedia&&(i+="&picture="+encodeURIComponent(o.socialshareMedia)),o.socialshareSource&&(i+="&source="+encodeURIComponent(o.socialshareSource)),e.open(i,"Facebook","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)):o.socialshareType&&"send"===o.socialshareType?(i="https://www.facebook.com/dialog/send?",o.socialshareVia&&(i+="&app_id="+encodeURIComponent(o.socialshareVia)),o.socialshareRedirectUri&&(i+="&redirect_uri="+encodeURIComponent(o.socialshareRedirectUri)),o.socialshareUrl&&(i+="&link="+encodeURIComponent(o.socialshareUrl)),o.socialshareTo&&(i+="&to="+encodeURIComponent(o.socialshareTo)),o.socialshareDisplay&&(i+="&display="+encodeURIComponent(o.socialshareDisplay)),o.socialshareRef&&(i+="&ref="+encodeURIComponent(o.socialshareRef)),e.open(i,"Facebook","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)):e.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(o.socialshareUrl||e.location.href),"Facebook","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},s=function(e,o){var i="mailto:";o.socialshareTo&&(i+=encodeURIComponent(o.socialshareTo)),i+="?",o.socialshareBody&&(i+="body="+o.socialshareBody),o.socialshareSubject&&(i+="&subject="+encodeURIComponent(o.socialshareSubject)),o.socialshareCc&&(i+="&cc="+encodeURIComponent(o.socialshareCc)),o.socialshareBcc&&(i+="&bcc="+encodeURIComponent(o.socialshareBcc)),e.open(i,"_self")},h=function(e,o,i){var t="fb-messenger://share?link="+encodeURIComponent(o.socialshareUrl||e.location.href);i.attr("href",t)},c=function(e,o){var i="https://www.twitter.com/intent/tweet?";o.socialshareText&&(i+="text="+encodeURIComponent(o.socialshareText)),o.socialshareVia&&(i+="&via="+encodeURIComponent(o.socialshareVia)),o.socialshareHashtags&&(i+="&hashtags="+encodeURIComponent(o.socialshareHashtags)),i+="&url="+encodeURIComponent(o.socialshareUrl||e.location.href),e.open(i,"Twitter","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},p=function(e,o){e.open("https://plus.google.com/share?url="+encodeURIComponent(o.socialshareUrl||e.location.href),"Google+","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},n=function(e,o){var i="https://www.reddit.com/";i+=o.socialshareSubreddit?"r/"+o.socialshareSubreddit+"/submit?url=":"submit?url=",o.socialsharePopupWidth<900&&(o.socialsharePopupWidth=900),o.socialsharePopupHeight<650&&(o.socialsharePopupHeight=650),e.open(i+encodeURIComponent(o.socialshareUrl||e.location.href)+"&title="+encodeURIComponent(o.socialshareText),"Reddit","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},l=function(e,o){e.open("https://www.stumbleupon.com/submit?url="+encodeURIComponent(o.socialshareUrl||e.location.href)+"&title="+encodeURIComponent(o.socialshareText),"StumbleUpon","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},d=function(e,o){var i="https://www.linkedin.com/shareArticle?mini=true";i+="&url="+encodeURIComponent(o.socialshareUrl||e.location.href),o.socialshareText&&(i+="&title="+encodeURIComponent(o.socialshareText)),o.socialshareDescription&&(i+="&summary="+encodeURIComponent(o.socialshareDescription)),o.socialshareSource&&(i+="&source="+encodeURIComponent(o.socialshareSource)),e.open(i,"Linkedin","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},u=function(e,o){e.open("https://www.pinterest.com/pin/create/button/?url="+encodeURIComponent(o.socialshareUrl||e.location.href)+"&media="+encodeURIComponent(o.socialshareMedia)+"&description="+encodeURIComponent(o.socialshareText),"Pinterest","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},g=function(e,o){e.open("https://www.digg.com/submit?url="+encodeURIComponent(o.socialshareUrl||e.location.href)+"&title="+encodeURIComponent(o.socialshareText),"Digg","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},f=function(e,o){if(o.socialshareMedia){var i="https://www.tumblr.com/share/photo?source="+encodeURIComponent(o.socialshareMedia);o.socialshareText&&(i+="&caption="+encodeURIComponent(o.socialshareText)),e.open(i,"Tumblr","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)}else e.open("https://www.tumblr.com/share/link?url="+encodeURIComponent(o.socialshareUrl||e.location.href)+"&description="+encodeURIComponent(o.socialshareText),"Tumblr","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},m=function(e,o){var i="https://www.vk.com/share.php?url="+encodeURIComponent(o.socialshareUrl||e.location.href);o.socialshareText&&(i+="&title="+encodeURIComponent(o.socialshareText)),o.socialshareMedia&&(i+="&image="+encodeURIComponent(o.socialshareMedia)),o.socialshareDescription&&(i+="&description="+encodeURIComponent(o.socialshareDescription)),e.open(i,"Vk","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},b=function(e,o){e.open("http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl="+encodeURIComponent(o.socialshareUrl||e.location.href)+"&st.comments="+encodeURIComponent(o.socialshareText),"Ok","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},k=function(e,o){e.open("https://www.delicious.com/save?v=5&noui&jump=close&url="+encodeURIComponent(o.socialshareUrl||e.location.href)+"&title="+encodeURIComponent(o.socialshareText),"Delicious","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},w=function(e,o){var i="https://bufferapp.com/add?";o.socialshareText&&(i+="text="+encodeURIComponent(o.socialshareText)),o.socialshareVia&&(i+="&via="+encodeURIComponent(o.socialshareVia)),i+="&url="+encodeURIComponent(o.socialshareUrl||e.location.href),e.open(i,"Buffer","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},U=function(e,o){var i="https://news.ycombinator.com/submitlink?";o.socialshareText&&(i+="t="+encodeURIComponent(o.socialshareText)+"&"),i+="u="+encodeURIComponent(o.socialshareUrl||e.location.href),e.open(i,"Hackernews","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},P=function(e,o){var i="https://share.flipboard.com/bookmarklet/popout?v=2&";o.socialshareText&&(i+="title="+encodeURIComponent(o.socialshareText)+"&"),i+="url="+encodeURIComponent(o.socialshareUrl||e.location.href),e.open(i,"Flipboard","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},H=function(e,o){var i="https://getpocket.com/save?";o.socialshareText&&(i+="text="+encodeURIComponent(o.socialshareText)+"&"),i+="url="+encodeURIComponent(o.socialshareUrl||e.location.href),e.open(i,"Pocket","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},v=function(e,o){var i="http://wordpress.com/press-this.php?";o.socialshareText&&(i+="t="+encodeURIComponent(o.socialshareText)+"&"),o.socialshareMedia&&(i+="i="+encodeURIComponent(o.socialshareMedia)+"&"),i+="u="+encodeURIComponent(o.socialshareUrl||e.location.href),e.open(i,"Wordpress","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},W=function(e,o){var i="";o.socialshareFollow&&(i="&follow_url="+encodeURIComponent(o.socialshareFollow)),e.open("https://www.xing.com/spi/shares/new?url="+encodeURIComponent(o.socialshareUrl||e.location.href)+i,"Xing","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},R=function(e,o){var i="http://www.evernote.com/clip.action?url="+encodeURIComponent(o.socialshareUrl||e.location.href);o.socialshareText&&(i+="&title="+encodeURIComponent(o.socialshareText)),e.open(i,"Evernote","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},C=function(e,o,i){var t="whatsapp://send?text="+encodeURIComponent(o.socialshareText+" ")+encodeURIComponent(o.socialshareUrl||e.location.href);i.attr("href",t)},I=function(e,o,i){var t="viber://forward?text="+encodeURIComponent(o.socialshareText+" ")+encodeURIComponent(o.socialshareUrl||e.location.href);i.attr("href",t)},x=function(e,o){var i="https://telegram.me/share/url?url="+encodeURIComponent(o.socialshareUrl||e.location.href);o.socialshareText&&(i+="&text="+encodeURIComponent(o.socialshareText)),e.open(i,"Telegram","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},S=function(e,o){var i="https://web.skype.com/share?source=button&url="+encodeURIComponent(o.socialshareUrl||e.location.href);o.socialshareText&&(i+="&text="+encodeURIComponent(o.socialshareText)),e.open(i,"Skype","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},y=["$window",function(e){this.emailShare=s,this.facebookShare=r,this.twitterShare=c,this.stumbleuponShare=l,this.pinterestShare=u,this.googleShare=p,this.bufferShare=w,this.hackernewsShare=U,this.okShare=b,this.deliciousShare=k,this.pocketShare=H,this.vkShare=m,this.flipboardShare=P,this.xingShare=W,this.diggShare=g,this.linkedinShare=d,this.wordpressShare=v,this.telegramShare=x,this.redditShare=n,this.evernoteShare=R,this.tumblrShare=f,this.skypeShare=S,this.share=function(o){switch(o.provider){case"email":this.emailShare(e,o.attrs);break;case"facebook":this.facebookShare(e,o.attrs);break;case"twitter":this.twitterShare(e,o.attrs);break;case"pinterest":this.pinterestShare(e,o.attrs);break;case"ok":this.okShare(e,o.attrs);break;case"vk":this.vkShare(e,o.attrs);break;case"delicious":this.deliciousShare(e,o.attrs);break;case"digg":this.diggShare(e,o.attrs);break;case"google+":this.googleShare(e,o.attrs);break;case"reddit":this.redditShare(e,o.attrs);break;case"hackernews":this.hackernewsShare(e,o.attrs);break;case"skype":this.skypeShare(e,o.attrs);break;case"evernote":this.evernoteShare(e,o.attrs);break;case"pocket":this.pocketShare(e,o.attrs);break;case"tumblr":this.tumblrShare(e,o.attrs);break;case"telegram":this.telegramShare(e,o.attrs);break;case"xing":this.xingShare(e,o.attrs);break;case"buffer":this.bufferShare(e,o.attrs);break;case"stumbleupon":this.stumbleuponShare(e,o.attrs);break;case"linkedin":this.linkedinShare(e,o.attrs);break;case"wordpress":this.wordpressShare(e,o.attrs);break;case"flipboard":this.flipboardShare(e,o.attrs);break;default:return}}}],T=["$window","socialshareConf","Socialshare","$log",function(e,o,i){var a=function(a,r,s){for(var h,c=0,p=(function(){return s.socialshareProvider in z?void z[s.socialshareProvider](e,s,r):!0});c<o.length;c+=1)if(o[c].provider===s.socialshareProvider){h=o[c];break}-1===t.indexOf(h.provider)&&i.warn("Invalid Provider Name : "+s.socialshareProvider),s.socialshareUrl=s.socialshareUrl||h.conf.url,s.socialshareText=s.socialshareText||h.conf.text,s.socialshareMedia=s.socialshareMedia||h.conf.media,s.socialshareType=s.socialshareType||h.conf.type,s.socialshareVia=s.socialshareVia||h.conf.via,s.socialshareTo=s.socialshareTo||h.conf.to,s.socialshareFrom=s.socialshareFrom||h.conf.from,s.socialshareRef=s.socialshareRef||h.conf.ref,s.socialshareDislay=s.socialshareDislay||h.conf.display,s.socialshareSource=s.socialshareSource||h.conf.source,s.socialshareCaption=s.socialshareCaption||h.conf.caption,s.socialshareRedirectUri=s.socialshareRedirectUri||h.conf.redirectUri,s.socialshareTrigger=s.socialshareTrigger||h.conf.trigger,s.socialsharePopupHeight=s.socialsharePopupHeight||h.conf.popupHeight,s.socialsharePopupWidth=s.socialsharePopupWidth||h.conf.popupWidth,s.socialshareSubreddit=s.socialshareSubreddit||h.conf.subreddit,s.socialshareDescription=s.socialshareDescription||h.conf.description,s.socialshareFollow=s.socialshareFollow||h.conf.follow,s.socialshareHashtags=s.socialshareHashtags||h.conf.hashtags,s.socialshareBody=s.socialshareBody||h.conf.body,s.socialshareSubject=s.socialshareSubject||h.conf.subject,s.socialshareCc=s.socialshareCc||h.conf.cc,s.socialshareBcc=s.socialshareBcc||h.conf.bcc,s.socialshareTrigger?r.bind(s.socialshareTrigger,p):p()};return{restrict:"A",link:a}}],z={email:s,facebook:r,"facebook-messenger":h,twitter:c,google:p,reddit:n,stumbleupon:l,linkedin:d,pinterest:u,digg:g,tumblr:f,vk:m,ok:b,delicious:k,buffer:w,hackernews:U,flipboard:P,pocket:H,wordpress:v,xing:W,evernote:R,whatsapp:C,telegram:x,viber:I,skype:S};e.module("720kb.socialshare",[]).provider(o+"Conf",a).service(i,y).directive(o,T)}(angular);