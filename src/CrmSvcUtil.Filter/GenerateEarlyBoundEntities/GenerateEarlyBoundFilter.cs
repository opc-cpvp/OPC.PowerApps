using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Xrm.Sdk.Metadata;
using System.Xml.Linq;
using System.Xml.Serialization;
using Microsoft.Crm.Services.Utility;
using System.IO;

namespace CrmSvcUtil.Filter.GenerateEarlyBoundEntities
{
    /// <summary>
    /// CodeWriterFilter for CrmSvcUtil filters entites, attributes etc.. based on a set of custom rules
    /// </summary>
    public class GenerateEarlyBoundFilter : ICodeWriterFilterService
    {
        private Filter _filter;

        private ICodeWriterFilterService _defaultService = null;

        public GenerateEarlyBoundFilter(ICodeWriterFilterService defaultService)
        {
            _defaultService = defaultService;
            LoadFilterData();
        }

        /// <summary>
        /// loads the entity filter data from the filter.xml file
        /// </summary>
        private void LoadFilterData()
        {
            XmlSerializer serializer = new XmlSerializer(typeof(Filter));

            using (FileStream fs = new FileStream("filter.xml", FileMode.Open))
            {
                _filter = (Filter)serializer.Deserialize(fs);
            }
        }

        /// <summary>
        /// Use the blacklist to make sure we don't generate these entities
        /// Black listed entities with specified fields will only apply to the fields themselves
        /// </summary>
        /// <returns>Whether we generate the entity or not</returns>
        public bool GenerateEntity(EntityMetadata entityMetadata, IServiceProvider services)
        {
            //Console.WriteLine($"Any?: {_blackList.BlackListedEntities.Entities.Any()}");
            if (!_filter.BlackListedEntities?.Entities?.Any() ?? false) return _defaultService.GenerateEntity(entityMetadata, services);

            // Check if the entity is entirely black listed (in the black list and no fields specified)
            var toBlackList = _filter
                .BlackListedEntities.Entities.Any(x => x.Name.Equals(entityMetadata.LogicalName, StringComparison.OrdinalIgnoreCase) && x.Fields is null);

            if (toBlackList) return false;

            return _defaultService.GenerateEntity(entityMetadata, services);
        }

        /// <summary>
        /// Generates the Attribute if it's not specified in the black list
        /// </summary>
        /// <returns>Whether we generate the attribute or not</returns>
        public bool GenerateAttribute(AttributeMetadata attributeMetadata, IServiceProvider services)
        {
            // No black listed entities, transfer the decision to the default service
            if (!_filter.BlackListedEntities?.Entities?.Any() ?? false) _defaultService.GenerateAttribute(attributeMetadata, services);

            // Check if the entity the attribute belongs to is in the blacklist
            var blackListedEntity = _filter.BlackListedEntities.Entities
                .FirstOrDefault(x => x.Name.Equals(attributeMetadata?.EntityLogicalName, StringComparison.OrdinalIgnoreCase));

            // Is the current attribute blacklisted?
            if (blackListedEntity?.Fields.FirstOrDefault(x => x.Equals(attributeMetadata?.LogicalName, StringComparison.OrdinalIgnoreCase)) != null)
            {
                return false;
            }

            return _defaultService.GenerateAttribute(attributeMetadata, services);
        }

        public bool GenerateOption(OptionMetadata optionMetadata, IServiceProvider services)
        {
            return _defaultService.GenerateOption(optionMetadata, services);
        }

        public bool GenerateOptionSet(OptionSetMetadataBase optionSetMetadata, IServiceProvider services)
        {
            return _defaultService.GenerateOptionSet(optionSetMetadata, services);
        }

        public bool GenerateRelationship(RelationshipMetadataBase relationshipMetadata, EntityMetadata otherEntityMetadata, IServiceProvider services)
        {
            return _defaultService.GenerateRelationship(relationshipMetadata, otherEntityMetadata, services);
        }

        public bool GenerateServiceContext(IServiceProvider services)
        {
            return _defaultService.GenerateServiceContext(services);
        }
    }
}
