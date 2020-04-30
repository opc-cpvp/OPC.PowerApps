using System;
using System.Collections.Generic;
using Compliance.Entities;
using FakeXrmEasy;
using FluentAssertions;
using Microsoft.Xrm.Sdk;
using Xunit;

namespace Compliance.Plugins.Tests
{
    public class MultiLanguagePluginTests
    {
        private const string Prefix = "|^|";
        private const string LanguageKey = "uilanguageid";

        public class when_creating_multilanguageitem
        {
            public opc_theme GetMockedMultiLanguageItem()
            {
                return new opc_theme
                {
                    Id = Guid.NewGuid(),
                    opc_islocalizable = true,
                    opc_name = "",
                    opc_nameenglish = "Technology",
                    opc_namefrench = "Technologie"
                };
            }

            [Fact]
            public void opc_name_should_contain_data()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var theme = GetMockedMultiLanguageItem();

                var inputs = new ParameterCollection { { "Target", theme } };

                pluginContext.InputParameters = inputs;
                pluginContext.MessageName = PluginMessage.Create;

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                theme.opc_name.Should().NotBeNullOrWhiteSpace();
            }

            [Fact]
            public void opc_name_should_contain_both_languages_seperated_by_pipe()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var theme = GetMockedMultiLanguageItem();
                var expectedName = $"{Prefix}{theme.opc_nameenglish}|{theme.opc_namefrench}";

                var inputs = new ParameterCollection { { "Target", theme } };

                pluginContext.InputParameters = inputs;
                pluginContext.MessageName = PluginMessage.Create;

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                theme.opc_name.Should().Be(expectedName);
            }

            [Fact]
            public void should_throw_exception_when_english_name_is_missing()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var theme = GetMockedMultiLanguageItem();

                theme.opc_nameenglish = string.Empty;

                var inputs = new ParameterCollection { { "Target", theme } };

                pluginContext.InputParameters = inputs;
                pluginContext.MessageName = PluginMessage.Create;

                // Act
                Action act = () => context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                act.Should().Throw<InvalidPluginExecutionException>();
            }

            [Fact]
            public void should_throw_exception_when_french_name_is_missing()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var theme = GetMockedMultiLanguageItem();

                theme.opc_namefrench = string.Empty;

                var inputs = new ParameterCollection { { "Target", theme } };

                pluginContext.InputParameters = inputs;
                pluginContext.MessageName = PluginMessage.Create;

                // Act
                Action act = () => context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                act.Should().Throw<InvalidPluginExecutionException>();
            }

        }

        public class when_updating_multilanguageitem
        {
            public opc_theme GetMockedMultiLanguageEntity()
            {
                return new opc_theme
                {
                    Id = Guid.NewGuid(),
                    opc_islocalizable = true,
                    opc_name = "Technology|Technologie",
                    opc_nameenglish = "TechnoEng",
                    opc_namefrench = "TechnoFra"
                };
            }

            // opc_name should change
            [Fact]
            public void opc_name_should_change()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var oldName = "Technology|Technologie";
                var multiLanguageEntity = GetMockedMultiLanguageEntity();

                var inputs = new ParameterCollection { { "Target", multiLanguageEntity } };

                pluginContext.InputParameters = inputs;
                pluginContext.MessageName = PluginMessage.Update;

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                multiLanguageEntity.opc_name.Should().NotBe(oldName);
            }

            // opc_name should contain both languages seperated by pipe
            [Fact]
            public void opc_name_should_contain_both_languages_seperated_by_pipe()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var multiLanguageEntity = GetMockedMultiLanguageEntity();
                var expectedName = $"{Prefix}{multiLanguageEntity.opc_nameenglish}|{multiLanguageEntity.opc_namefrench}";

                var inputs = new ParameterCollection { { "Target", multiLanguageEntity } };

                pluginContext.InputParameters = inputs;
                pluginContext.MessageName = PluginMessage.Update;

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                multiLanguageEntity.opc_name.Should().Be(expectedName);
            }

            [Fact]
            public void should_throw_exception_when_english_name_is_missing()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var multiLanguageEntity = GetMockedMultiLanguageEntity();

                multiLanguageEntity.opc_nameenglish = string.Empty;

                var inputs = new ParameterCollection { { "Target", multiLanguageEntity } };

                pluginContext.InputParameters = inputs;
                pluginContext.MessageName = PluginMessage.Update;

                // Act
                Action act = () => context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                act.Should().Throw<InvalidPluginExecutionException>();
            }

            [Fact]
            public void should_throw_exception_when_french_name_is_missing()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var multiLanguageEntity = GetMockedMultiLanguageEntity();

                multiLanguageEntity.opc_namefrench = string.Empty;

                var inputs = new ParameterCollection { { "Target", multiLanguageEntity } };

                pluginContext.InputParameters = inputs;
                pluginContext.MessageName = PluginMessage.Update;

                // Act
                Action act = () => context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                act.Should().Throw<InvalidPluginExecutionException>();
            }
        }

        public class when_retrieving_multilanguageitem
        {
            public opc_theme GetMockedMultiLanguageEntity()
            {
                return new opc_theme
                {
                    Id = Guid.NewGuid(),
                    opc_islocalizable = true,
                    opc_name = $"{Prefix}Technology|Technologie",
                    opc_nameenglish = "Technology",
                    opc_namefrench = "Technologie"
                };
            }

            [Fact]
            public void opc_name_should_be_french_when_ui_is_french()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var multiLanguageEntity = GetMockedMultiLanguageEntity();
                var expectedName = multiLanguageEntity.opc_namefrench;

                var outputs = new ParameterCollection { { "BusinessEntity", multiLanguageEntity } };

                pluginContext.OutputParameters = outputs;
                pluginContext.MessageName = PluginMessage.Retrieve;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.French);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                multiLanguageEntity.opc_name.Should().Be(expectedName);
            }

            [Fact]
            public void opc_name_should_be_english_when_ui_is_english()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var multiLanguageEntity = GetMockedMultiLanguageEntity();
                var expectedName = multiLanguageEntity.opc_nameenglish;

                var outputs = new ParameterCollection { { "BusinessEntity", multiLanguageEntity } };

                pluginContext.OutputParameters = outputs;
                pluginContext.MessageName = PluginMessage.Retrieve;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.English);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                multiLanguageEntity.opc_name.Should().Be(expectedName);
            }
        }

        public class when_retrieving_multiple_multilanguageitem
        {
            public EntityCollection GetMultiLanguageEntityCollection()
            {
                EntityCollection entityCollectionThemes = new EntityCollection();

                entityCollectionThemes.Entities.Add(new opc_theme { Id = Guid.NewGuid(), opc_nameenglish = "Technology", opc_namefrench = "Technologie", opc_name = $"{Prefix}Technology|Technologie" });
                entityCollectionThemes.Entities.Add(new opc_theme { Id = Guid.NewGuid(), opc_nameenglish = "Public Services", opc_namefrench = "Services Publiques", opc_name = $"{Prefix}Public Services|Services Publiques" });

                return entityCollectionThemes;
            }

            [Fact]
            public void opc_names_should_be_french_when_ui_is_french()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();
                var multiLanguageEntityCollection = GetMultiLanguageEntityCollection();

                var outputs = new ParameterCollection { {"BusinessEntityCollection", multiLanguageEntityCollection} };

                pluginContext.OutputParameters = outputs;
                pluginContext.MessageName = PluginMessage.RetrieveMultiple;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.French);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                foreach (opc_theme multiLanguageEntity in multiLanguageEntityCollection.Entities)
                {
                    multiLanguageEntity.opc_name.Should().Be(multiLanguageEntity.opc_namefrench);
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
                pluginContext.MessageName = PluginMessage.RetrieveMultiple;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.English);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                foreach (opc_theme multiLanguageEntity in multiLanguageEntityCollection.Entities)
                {
                    multiLanguageEntity.opc_name.Should().Be(multiLanguageEntity.opc_nameenglish);
                }
            }
        }

        public class when_retrieving_multilanguage_relateditem
        {
            public opc_topic GetMockedMultiLanguageEntity()
            {
                return new opc_topic
                {
                    Id = Guid.NewGuid(),
                    opc_islocalizable = true,
                    opc_name = $"{Prefix}Artificial Intelligence|Intelligence Artificielle",
                    opc_nameenglish = "Artificial Intelligence",
                    opc_namefrench = "Intelligence Artificielle",
                    opc_themeid = new EntityReference() { Name = $"{Prefix}Technology|Technologie" }
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
                pluginContext.MessageName = PluginMessage.Retrieve;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.French);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

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
                pluginContext.MessageName = PluginMessage.Retrieve;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.English);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

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
                    opc_islocalizable = true,
                    opc_name = $"{Prefix}Artificial Intelligence|Intelligence Artificielle",
                    opc_nameenglish = "Artificial Intelligence",
                    opc_namefrench = "Intelligence Artificielle",
                    opc_themeid = new EntityReference() { Name = $"{Prefix}Technology|Technologie" },
                    opc_theme_topics_themeid = new opc_theme { opc_nameenglish = "Technology", opc_namefrench = "Technologie" }
                });

                entityCollectionTopics.Entities.Add(new opc_topic
                {
                    Id = Guid.NewGuid(),
                    opc_islocalizable = true,
                    opc_name = $"{Prefix}The Service|Le Service",
                    opc_nameenglish = "The Service",
                    opc_namefrench = "Le Service",
                    opc_themeid = new EntityReference() { Name = $"{Prefix}Public Services|Services Publiques" },
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
                pluginContext.MessageName = PluginMessage.RetrieveMultiple;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.French);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

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
                pluginContext.MessageName = PluginMessage.RetrieveMultiple;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.English);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                foreach (opc_topic multiLanguageEntity in multiLanguageEntityCollection.Entities)
                {
                    multiLanguageEntity.opc_themeid.Name.Should().Be(multiLanguageEntity.opc_theme_topics_themeid.opc_nameenglish);
                }
            }
        }
    }
}


