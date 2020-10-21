using System.Collections.Generic;

namespace CrmSvcUtil.Filter.GenerateEarlyBoundEntities
{
    public class BlackListedEntity
    {
        public string Name { get; set; }
        public HashSet<string> Fields { get; set; }
    }
}
