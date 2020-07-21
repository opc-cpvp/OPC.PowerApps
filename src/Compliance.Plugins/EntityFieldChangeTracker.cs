using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compliance.Plugins
{
    public class EntityChangeTracker
    {
        public string EntityLogicalName { get; set; }
        public List<FieldChangeTracker> TrackedFields { get; set; }
    }
}
