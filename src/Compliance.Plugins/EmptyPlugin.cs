using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compliance.Plugins
{
    public partial class EmptyPlugin : PluginBase
    {
        public EmptyPlugin()
            : base(typeof(EmptyPlugin), runAsSystem: true)
        {
        }

        protected override void ExecuteCrmPlugin(LocalPluginContext localContext)
        {
        }
    }
}
