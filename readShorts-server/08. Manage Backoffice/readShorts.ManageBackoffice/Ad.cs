//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace readShorts.ManageBackoffice
{
    using System;
    using System.Collections.Generic;
    
    public partial class Ad
    {
        public long RecordKey { get; set; }
        public string CompanyName { get; set; }
        public int Interval { get; set; }
        public string AdPath { get; set; }
        public string AdBody { get; set; }
        public Nullable<long> LUShortAgeRestrictionKey { get; set; }
        public Nullable<long> LUSysInterfacelanguageKey { get; set; }
        public Nullable<long> LUCountryKey { get; set; }
        public System.DateTime CreatedTimeStamp { get; set; }
        public System.DateTime LastUpdateTimeStamp { get; set; }
        public bool IsRowDeleted { get; set; }
        public int CreatedUserKey { get; set; }
        public int LastUpdateUserKey { get; set; }
    }
}
