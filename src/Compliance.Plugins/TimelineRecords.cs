using System;

namespace Compliance.Plugins
{
    /// <summary>
    /// Classes used to deserialize and serialize timeline json through plugins
    /// </summary>

    [Serializable]
    public class TimelineRecords
    {
        public TimelineEntity[] Entities { get; set; }
        public bool MoreRecords { get; set; }
        public string PagingCookie { get; set; }
        public string MinActiveRowVersion { get; set; }
        public int TotalRecordCount { get; set; }
        public bool TotalRecordCountLimitExceeded { get; set; }
        public string EntityName { get; set; }
    }

    public class TimelineEntity
    {
        public string LogicalName { get; set; }
        public string Id { get; set; }
        public TimelineAttribute[] Attributes { get; set; }
        public object EntityState { get; set; }
        public Formattedvalue[] FormattedValues { get; set; }
        public object[] RelatedEntities { get; set; }
        public string RowVersion { get; set; }
        public object[] KeyAttributes { get; set; }
    }

    public class TimelineAttribute
    {
        public string Key { get; set; }
        public dynamic Value { get; set; }
    }

    public class Formattedvalue
    {
        public string Key { get; set; }
        public object Value { get; set; }
    }

}