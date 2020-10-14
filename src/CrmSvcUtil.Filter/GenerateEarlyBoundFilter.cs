using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Xrm.Sdk.Metadata;
using System.Xml.Linq;
using Microsoft.Crm.Services.Utility;

namespace CrmSvcUtil.Filter
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

        //list of entity names to generate classes for.
        private HashSet<BlackListedEntity> _blackListedEntities = new HashSet<BlackListedEntity>();

        //reference to the default service.
        private ICodeWriterFilterService _defaultService = null;

        /// <summary>
        /// constructor
        /// </summary>
        /// <param name="defaultService">default implementation</param>
        public GenerateEarlyBoundBoundFilter(ICodeWriterFilterService defaultService)
        {
            this._defaultService = defaultService;
            LoadFilterData();
        }

        /// <summary>
        /// loads the entity filter data from the filter.xml file
        /// </summary>
        private void LoadFilterData()
        {
            XElement xml = XElement.Load("filter.xml");
            XElement entitiesElement = xml.Element("black-listed-entities");
            Console.WriteLine(entitiesElement);
            foreach (XElement entityElement in entitiesElement.Elements("entity"))
            {
                Console.WriteLine(entityElement);
                Console.WriteLine(entityElement);

                BlackListedEntity blackListedEntity = null;
                if (entityElement.Attributes().Any(x => x.Name.LocalName.Equals("name", StringComparison.OrdinalIgnoreCase)))
                {
                    blackListedEntity = new BlackListedEntity() { Name = entityElement.Attributes().First(x => x.Name.LocalName.Equals("name", StringComparison.OrdinalIgnoreCase)).Value };

                    Console.WriteLine($"Black listed entity: {blackListedEntity.Name}");
                }

                if (blackListedEntity != null)
                {
                    foreach (XElement entityField in entityElement.Elements("field"))
                    {
                        Console.WriteLine(entityField);
                        var fieldValue = entityField?.Value;
                        if (fieldValue is null)
                        {
                            Console.WriteLine("Null value");
                            continue;
                        }

                        if (blackListedEntity.Fields is null) blackListedEntity.Fields = new HashSet<string>();

                        Console.WriteLine($"Black listed field added: {entityField?.Value}");
                        blackListedEntity.Fields.Add(entityField?.Value);
                    }

                    _blackListedEntities.Add(blackListedEntity);
                }
            }

            Console.WriteLine($"Anything?: {_blackListedEntities.Any()}");
        }

        /// <summary>
        /// Use the blacklist to make sure we don't generate these entities
        /// </summary>
        public bool GenerateEntity(EntityMetadata entityMetadata, IServiceProvider services)
        {

            //return true;
            //return _defaultService.GenerateEntity(entityMetadata, services);

            //Console.WriteLine(_blackListedEntities.Any());

            // No black listed entities, transfer the decision to the default service
            Console.WriteLine($"Entering...");

            if (_blackListedEntities is null || !_blackListedEntities.Any()) return _defaultService.GenerateEntity(entityMetadata, services);

            Console.WriteLine($"Checking...");


            // Check if any entites are entirely black listed (no fields specified)
            var toBlackList = !_blackListedEntities.Any(x => (x.Name?.Equals(entityMetadata?.LogicalName ?? "", StringComparison.OrdinalIgnoreCase) ?? false) && x.Fields is null);
            Console.WriteLine($"To black list: {toBlackList}");

            if (!toBlackList) throw new Exception("T check the stuff");
            return toBlackList;
        }

        public bool GenerateAttribute(AttributeMetadata attributeMetadata, IServiceProvider services)
        {
            // TODO: Trouble with this when calling the default behaviour (_defaultService.GenerateAttribute(attributeMetadata, services);, so for now, return true works but generates invalid code too

            Console.WriteLine($"Entering Generate attribute...");

            try
            {
                // No black listed entities, transfer to decision to the default service
                if (!_blackListedEntities.Any()) return true;//return _defaultService.GenerateAttribute(attributeMetadata, services);

                // Check if the entity the attribute belongs to is in the blacklist
                var blackListedEntity = _blackListedEntities.FirstOrDefault(x => x.Name?.Equals(attributeMetadata?.EntityLogicalName ?? "", StringComparison.OrdinalIgnoreCase) ?? false);

                // Check if the attribute is specified in the black listed entity, if so, don't generate it
                if (blackListedEntity?.Fields?.Contains(attributeMetadata?.LogicalName ?? "") ?? false) return false;

                return true;// _defaultService.GenerateAttribute(attributeMetadata, services);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString() + (e.InnerException?.ToString() ?? ""));
                return false;
            }
        }

        // All other methods just use default implementation:

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
