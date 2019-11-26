using System;
using System.Collections.Generic;
using Compliance.Plugins.Entities;
using FakeXrmEasy;
using Microsoft.Xrm.Sdk;
using Xunit;

namespace Compliance.Plugins.Tests
{
    public class MultiLanguagePluginTests
    {
        public class when_creating_multilanguageitem
        {
            public static MultiLanguagePlugin pluginInstance = null;
            public static MultiLanguagePlugin PluginInstance
            {
                get
                {
                    if (pluginInstance is null)
                        pluginInstance = new MultiLanguagePlugin();

                    return pluginInstance;
                }
            }

            [Fact]
            public void opc_name_should_contain_data()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var theme = new opc_theme
                {
                    Id = Guid.NewGuid(),
                    opc_name = "",
                    opc_nameenglish = "Technology",
                    opc_namefrench = "Technologie"
                };

                var inputs = new ParameterCollection { new KeyValuePair<string, object>("Target", theme) };

                pluginContext.InputParameters = inputs;
                pluginContext.MessageName = "Create";

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);
                // Act
                //context.ExecutePluginWithTarget(PluginInstance, theme, "Create");

                // Assert
                Assert.NotEqual(string.Empty, theme.opc_name);
            }

            [Fact]
            public void opc_name_should_contain_both_languages_seperated_by_pipe()
            {
                // Arrange
                var context = new XrmFakedContext();

                var expectedName = "Technology|Technologie";
                var theme = new opc_theme
                {
                    Id = Guid.NewGuid(),
                    opc_name = "",
                    opc_nameenglish = "Technology",
                    opc_namefrench = "Technologie"
                };

                // Act
                context.ExecutePluginWithTarget(PluginInstance, theme, "Create");

                // Assert
                Assert.Equal(expectedName, theme.opc_name);
            }

            [Fact]
            public void should_throw_exception_when_english_name_is_missing()
            {
                // Arrange
                var context = new XrmFakedContext();

                var theme = new opc_theme
                {
                    Id = Guid.NewGuid(),
                    opc_name = "",
                    opc_nameenglish = "",
                    opc_namefrench = "Technologie"
                };

                // Assert
                Assert.Throws<InvalidPluginExecutionException>(() =>
                    context.ExecutePluginWithTarget(PluginInstance, theme, "Create"));
            }

            [Fact]
            public void should_throw_exception_when_french_name_is_missing()
            {
                // Arrange
                var context = new XrmFakedContext();

                var theme = new opc_theme
                {
                    Id = Guid.NewGuid(),
                    opc_name = "",
                    opc_nameenglish = "Technology",
                    opc_namefrench = ""
                };

                // Assert
                Assert.Throws<InvalidPluginExecutionException>(() =>
                    context.ExecutePluginWithTarget(PluginInstance, theme, "Create"));
            }

        }

        public class when_updating_multilanguageitem
        {
            public static MultiLanguagePlugin pluginInstance = null;
            public static MultiLanguagePlugin PluginInstance
            {
                get
                {
                    if (pluginInstance is null)
                        pluginInstance = new MultiLanguagePlugin();

                    return pluginInstance;
                }
            }

            // opc_name should change
            [Fact]
            public void opc_name_should_change()
            {
                // Arrange
                var context = new XrmFakedContext();

                var oldName = "Technology|Technologie";
                var theme = new opc_theme
                {
                    Id = Guid.NewGuid(),
                    opc_name = "Technology|Technologie",
                    opc_nameenglish = "TechnoEng",
                    opc_namefrench = "TechnoFra"
                };

                // Act
                context.ExecutePluginWithTarget(PluginInstance, theme, "Update");

                // Assert
                Assert.NotEqual(oldName, theme.opc_name);
            }

            // opc_name should contain both languages seperated by pipe
            [Fact]
            public void opc_name_should_contain_both_languages_seperated_by_pipe()
            {
                // Arrange
                var context = new XrmFakedContext();

                var expectedName = "TechnoEng|TechnoFra";
                var theme = new opc_theme
                {
                    Id = Guid.NewGuid(),
                    opc_name = "Technology|Technologie",
                    opc_nameenglish = "TechnoEng",
                    opc_namefrench = "TechnoFra"
                };

                // Act
                context.ExecutePluginWithTarget(PluginInstance, theme, "Update");

                // Assert
                Assert.Equal(expectedName, theme.opc_name);
            }
        }

        public class when_retrieving_multilanguageitem
        {
            [Fact]
            public void opc_name_should_be_french_when_ui_is_french()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var expectedName = "Technologie";
                var theme = new opc_theme
                {
                    Id = Guid.NewGuid(),
                    opc_name = "Technology|Technologie",
                    opc_nameenglish = "Technology",
                    opc_namefrench = "Technologie"
                };

                var outputs = new ParameterCollection { new KeyValuePair<string, object>("BusinessEntity", theme) };

                pluginContext.OutputParameters = outputs;
                pluginContext.MessageName = "Retrieve";
                pluginContext.SharedVariables.Add("UserLocaleId", 1036);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                Assert.Equal(expectedName, theme.opc_name);
            }

            [Fact]
            public void opc_name_should_be_english_when_ui_is_english()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var expectedName = "Technology";
                var theme = new opc_theme
                {
                    Id = Guid.NewGuid(),
                    opc_name = "Technology|Technologie",
                    opc_nameenglish = "Technology",
                    opc_namefrench = "Technologie"
                };

                var outputs = new ParameterCollection { new KeyValuePair<string, object>("BusinessEntity", theme) };

                pluginContext.OutputParameters = outputs;
                pluginContext.MessageName = "Retrieve";
                pluginContext.SharedVariables.Add("UserLocaleId", 1033);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                Assert.Equal(expectedName, theme.opc_name);
            }
        }

        public class when_retrieving_multiple_multilanguageitem
        {
            public static EntityCollection EntityCollectionThemes
            {
                get
                {
                    EntityCollection entityCollectionThemes = new EntityCollection();

                    entityCollectionThemes.Entities.Add(new opc_theme { Id = Guid.NewGuid(), opc_nameenglish = "Technology", opc_namefrench = "Technologie", opc_name = "Technology|Technologie" });
                    entityCollectionThemes.Entities.Add(new opc_theme { Id = Guid.NewGuid(), opc_nameenglish = "Public Services", opc_namefrench = "Services Publiques", opc_name = "Public Services|Services Publiques" });

                    return entityCollectionThemes;
                }
            }

            [Fact]
            public void opc_names_should_be_french_when_ui_is_french()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();
                var themeCollection = EntityCollectionThemes;

                var outputs = new ParameterCollection { new KeyValuePair<string, object>("BusinessEntityCollection", themeCollection) };

                pluginContext.OutputParameters = outputs;
                pluginContext.MessageName = "RetrieveMultiple";
                pluginContext.SharedVariables.Add("UserLocaleId", 1036);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                foreach (opc_theme target in themeCollection.Entities)
                {
                    Assert.Equal(target.opc_namefrench, target.opc_name);
                }
            }

            [Fact]
            public void opc_names_should_be_english_when_ui_is_english()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();
                var themeCollection = EntityCollectionThemes;

                var outputs = new ParameterCollection { new KeyValuePair<string, object>("BusinessEntityCollection", themeCollection) };

                pluginContext.OutputParameters = outputs;
                pluginContext.MessageName = "RetrieveMultiple";
                pluginContext.SharedVariables.Add("UserLocaleId", 1033);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                foreach (opc_theme target in themeCollection.Entities)
                {
                    Assert.Equal(target.opc_nameenglish, target.opc_name);
                }
            }
        }
    }
}


