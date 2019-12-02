using System;
using Compliance.Plugins.Entities;
using FakeXrmEasy;
using FluentAssertions;
using Microsoft.Xrm.Sdk;
using Xunit;

namespace Compliance.Plugins.Tests
{
    public class MultiLanguagePluginTests
    {
        public class when_creating_multilanguageitem
        {
            public opc_theme GetMockedMultiLanguageItem()
            {
                return new opc_theme
                {
                    Id = Guid.NewGuid(),
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
                pluginContext.MessageName = "Create";

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

                var expectedName = "Technology|Technologie";
                var theme = GetMockedMultiLanguageItem();

                var inputs = new ParameterCollection { { "Target", theme } };

                pluginContext.InputParameters = inputs;
                pluginContext.MessageName = "Create";

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
                pluginContext.MessageName = "Create";

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
                pluginContext.MessageName = "Update";

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

                var expectedName = "TechnoEng|TechnoFra";
                var multiLanguageEntity = GetMockedMultiLanguageEntity();

                var inputs = new ParameterCollection { { "Target", multiLanguageEntity } };

                pluginContext.InputParameters = inputs;
                pluginContext.MessageName = "Update";

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                multiLanguageEntity.opc_name.Should().Be(expectedName);

                // TODO: Or is it better this way?
                multiLanguageEntity.opc_name.Should().StartWith(multiLanguageEntity.opc_nameenglish);
                multiLanguageEntity.opc_name.Should().EndWith(multiLanguageEntity.opc_namefrench);
                multiLanguageEntity.opc_name.Should().Contain("|");
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
                pluginContext.MessageName = "Create";

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
                    opc_name = "Technology|Technologie",
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

                var expectedName = "Technologie";
                var multiLanguageEntity = GetMockedMultiLanguageEntity();

                var outputs = new ParameterCollection { { "BusinessEntity", multiLanguageEntity } };

                pluginContext.OutputParameters = outputs;
                pluginContext.MessageName = "Retrieve";
                pluginContext.SharedVariables.Add("UserLocaleId", 1036);

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

                var expectedName = "Technology";
                var multiLanguageEntity = GetMockedMultiLanguageEntity();

                var outputs = new ParameterCollection { { "BusinessEntity", multiLanguageEntity } };

                pluginContext.OutputParameters = outputs;
                pluginContext.MessageName = "Retrieve";
                pluginContext.SharedVariables.Add("UserLocaleId", 1033);

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

                entityCollectionThemes.Entities.Add(new opc_theme { Id = Guid.NewGuid(), opc_nameenglish = "Technology", opc_namefrench = "Technologie", opc_name = "Technology|Technologie" });
                entityCollectionThemes.Entities.Add(new opc_theme { Id = Guid.NewGuid(), opc_nameenglish = "Public Services", opc_namefrench = "Services Publiques", opc_name = "Public Services|Services Publiques" });

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
                pluginContext.MessageName = "RetrieveMultiple";
                pluginContext.SharedVariables.Add("UserLocaleId", 1036);

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
                pluginContext.MessageName = "RetrieveMultiple";
                pluginContext.SharedVariables.Add("UserLocaleId", 1033);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                foreach (opc_theme multiLanguageEntity in multiLanguageEntityCollection.Entities)
                {
                    multiLanguageEntity.opc_name.Should().Be(multiLanguageEntity.opc_nameenglish);
                }
            }
        }
    }
}


