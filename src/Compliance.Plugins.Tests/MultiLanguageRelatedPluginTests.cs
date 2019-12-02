using System;
using Compliance.Plugins.Entities;
using FakeXrmEasy;
using FluentAssertions;
using Microsoft.Xrm.Sdk;
using Xunit;

namespace Compliance.Plugins.Tests
{
    public class MultiLanguageRelatedPluginTests
    {
        public class when_retrieving_multilanguage_relateditem
        {
            public opc_topic GetMockedMultiLanguageEntity()
            {
                return new opc_topic
                {
                    Id = Guid.NewGuid(),
                    opc_name = "Artificial Intelligence|Intelligence Artificielle",
                    opc_nameenglish = "Artificial Intelligence",
                    opc_namefrench = "Intelligence Artificielle",
                    opc_themeid = new EntityReference() { Name = "Technology|Technologie" }
                };
            }

            [Fact]
            public void opc_name_should_be_french_when_ui_is_french()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();
                var multiLanguageEntity = GetMockedMultiLanguageEntity();
                var outputs = new ParameterCollection { { "BusinessEntity", multiLanguageEntity } };
                var expectedName = "Technologie";

                pluginContext.OutputParameters = outputs;
                pluginContext.MessageName = "Retrieve";
                pluginContext.SharedVariables.Add("UserLocaleId", 1036);

                // Act
                context.ExecutePluginWith<MultiLanguageRelatedPlugin>(pluginContext);

                // Assert
                multiLanguageEntity.opc_themeid.Name.Should().Be(expectedName);
            }

            [Fact]
            public void opc_name_should_be_english_when_ui_is_english()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();
                var multiLanguageEntity = GetMockedMultiLanguageEntity();
                var outputs = new ParameterCollection { { "BusinessEntity", multiLanguageEntity } };
                var expectedName = "Technology";

                pluginContext.OutputParameters = outputs;
                pluginContext.MessageName = "Retrieve";
                pluginContext.SharedVariables.Add("UserLocaleId", 1033);

                // Act
                context.ExecutePluginWith<MultiLanguageRelatedPlugin>(pluginContext);

                // Assert
                multiLanguageEntity.opc_themeid.Name.Should().Be(expectedName);
            }
        }

        public class when_retrieving_multiple_multilanguage_relateditem
        {
            public EntityCollection GetMultiLanguageEntityCollection()
            {
                EntityCollection entityCollectionTopics = new EntityCollection();

                entityCollectionTopics.Entities.Add(new opc_topic
                {
                    Id = Guid.NewGuid(),
                    opc_name = "Artificial Intelligence|Intelligence Artificielle",
                    opc_nameenglish = "Artificial Intelligence",
                    opc_namefrench = "Intelligence Artificielle",
                    opc_themeid = new EntityReference() { Name = "Technology|Technologie" },
                    opc_theme_topics_themeid = new opc_theme { opc_nameenglish = "Technology", opc_namefrench = "Technologie" }
                });

                entityCollectionTopics.Entities.Add(new opc_topic
                {
                    Id = Guid.NewGuid(),
                    opc_name = "The Service|Le Service",
                    opc_nameenglish = "The Service",
                    opc_namefrench = "Le Service",
                    opc_themeid = new EntityReference() { Name = "Public Services|Services Publiques" },
                    opc_theme_topics_themeid = new opc_theme { opc_nameenglish = "Public Services", opc_namefrench = "Services Publiques" }
                });

                return entityCollectionTopics;
            }

            [Fact]
            public void opc_names_should_be_french_when_ui_is_french()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();
                var multiLanguageEntityCollection = GetMultiLanguageEntityCollection();
                var outputs = new ParameterCollection { { "BusinessEntityCollection", multiLanguageEntityCollection } };

                pluginContext.OutputParameters = outputs;
                pluginContext.MessageName = "RetrieveMultiple";
                pluginContext.SharedVariables.Add("UserLocaleId", 1036);

                // Act
                context.ExecutePluginWith<MultiLanguageRelatedPlugin>(pluginContext);

                // Assert
                foreach (opc_topic multiLanguageEntity in multiLanguageEntityCollection.Entities)
                {
                    multiLanguageEntity.opc_themeid.Name.Should().Be(multiLanguageEntity.opc_theme_topics_themeid.opc_namefrench);
                }
            }

            [Fact]
            public void opc_names_should_be_english_when_ui_is_english()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();
                var multiLanguageEntityCollection = GetMultiLanguageEntityCollection();
                var outputs = new ParameterCollection { { "BusinessEntityCollection", multiLanguageEntityCollection } };

                pluginContext.OutputParameters = outputs;
                pluginContext.MessageName = "RetrieveMultiple";
                pluginContext.SharedVariables.Add("UserLocaleId", 1033);

                // Act
                context.ExecutePluginWith<MultiLanguageRelatedPlugin>(pluginContext);

                // Assert
                foreach (opc_topic multiLanguageEntity in multiLanguageEntityCollection.Entities)
                {
                    multiLanguageEntity.opc_themeid.Name.Should().Be(multiLanguageEntity.opc_theme_topics_themeid.opc_nameenglish);
                }
            }
        }
    }
}


