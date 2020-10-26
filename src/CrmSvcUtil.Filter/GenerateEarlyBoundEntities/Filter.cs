using System;
using System.Collections.Generic;
using System.Xml.Serialization;

namespace CrmSvcUtil.Filter.GenerateEarlyBoundEntities
{
    public class Filter
    {
        public BlackListedEntities BlackListedEntities { get; set; }
    }

    public class BlackListedEntities
    {
        [XmlElement("Entity")]
        public List<Entity> Entities { get; set; }
    }

    public class Entity
    {
        [XmlAttribute]
        public string Name { get; set; }
        [XmlElement("Field")]
        public List<string> Fields { get; set; }
    }
}
