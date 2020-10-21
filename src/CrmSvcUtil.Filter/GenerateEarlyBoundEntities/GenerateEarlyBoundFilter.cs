using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Xrm.Sdk.Metadata;
using System.Xml.Linq;
using Microsoft.Crm.Services.Utility;

namespace CrmSvcUtil.Filter.GenerateEarlyBoundEntities
{
    /// <summary>
    /// CodeWriterFilter for CrmSvcUtil that reads list of entities from an xml file to
    /// determine whether or not the entity class should be generated.
    /// </summary>
    public class GenerateEarlyBoundBoundFilter : ICodeWriterFilterService
    {
        class BlackListedEntity
        {
            public string Name { get; set; }
            public HashSet<string> Fields { get; set; }
        }

        private HashSet<BlackListedEntity> _blackListedEntities = new HashSet<BlackListedEntity>();

        private ICodeWriterFilterService _defaultService = null;

        public GenerateEarlyBoundBoundFilter(ICodeWriterFilterService defaultService)
        {
            _defaultService = defaultService;
            LoadFilterData();
        }

        /// <summary>
        /// loads the entity filter data from the filter.xml file
        /// </summary>
        private void LoadFilterData()
        {
            XElement xml = XElement.Load("filter.xml");
            XElement entitiesElement = xml.Element("black-listed-entities");

            foreach (XElement entityElement in entitiesElement.Elements("entity"))
            {
                BlackListedEntity blackListedEntity = null;
                if (entityElement.Attributes().Any(x => x.Name.LocalName.Equals("name", StringComparison.OrdinalIgnoreCase)))
                {
                    blackListedEntity = new BlackListedEntity()
                    {
                        Name = entityElement.Attributes().First(x => x.Name.LocalName.Equals("name", StringComparison.OrdinalIgnoreCase)).Value
                    };
                    Console.WriteLine($"Black listed entity added: {blackListedEntity.Name}");
                }

                if (blackListedEntity != null)
                {
                    foreach (XElement entityField in entityElement.Elements("field"))
                    {
                        if (blackListedEntity.Fields is null) blackListedEntity.Fields = new HashSet<string>();

                        Console.WriteLine($"Black listed field added: {entityField?.Value}");
                        blackListedEntity.Fields.Add(entityField?.Value?.ToLower());
                    }

                    _blackListedEntities.Add(blackListedEntity);
                }
            }
        }

        /// <summary>
        /// Use the blacklist to make sure we don't generate these entities
        /// Black listed entities with specified fields will only apply to the fields themselves
        /// </summary>
        /// <returns>Whether we generate the entity or not</returns>
        public bool GenerateEntity(EntityMetadata entityMetadata, IServiceProvider services)
        {
            if (!_blackListedEntities.Any()) return _defaultService.GenerateEntity(entityMetadata, services);

            // Check if the entity is entirely black listed (in the black list and no fields specified)
            var toBlackList = _blackListedEntities
                .Any(x => x.Name.Equals(entityMetadata.LogicalName, StringComparison.OrdinalIgnoreCase) && x.Fields is null);

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
            if (!_blackListedEntities.Any()) _defaultService.GenerateAttribute(attributeMetadata, services);

            // Check if the entity the attribute belongs to is in the blacklist
            var blackListedEntity = _blackListedEntities
                .FirstOrDefault(x => x.Name.Equals(attributeMetadata?.EntityLogicalName, StringComparison.OrdinalIgnoreCase));

            // Is the current attribute blacklisted?
            if (blackListedEntity?.Fields?.Contains(attributeMetadata?.LogicalName?.ToLower() ?? "") ?? false)
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
