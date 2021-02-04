using System;
using System.Collections.Generic;
using Compliance.Entities;
using FakeXrmEasy;
using FakeXrmEasy.Extensions;
using FluentAssertions;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Xunit;

namespace Compliance.Plugins.Tests
{
    public class MultiLanguagePluginTests
    {
        private const string Prefix = "|^|";
        private const string Separator = "|";
        private const string LanguageKey = "uilanguageid";

        public class when_creating_multilanguageitem
        {
            public EntityMetadata GetMockedMultiLanguageMetadata()
            {
                var metadata = new EntityMetadata { LogicalName = opc_theme.EntityLogicalName };

                metadata.SetAttribute(new StringAttributeMetadata { LogicalName = "opc_name" });
                metadata.SetAttribute(new StringAttributeMetadata { LogicalName = "opc_nameenglish" });
                metadata.SetAttribute(new StringAttributeMetadata { LogicalName = "opc_namefrench" });

                return metadata;
            }

            [Fact(DisplayName = "translated fields should be set")]
            public void translated_fields_should_contain_data()
            {
                // Arrange
                var context = new XrmFakedContext();
                var metadata = GetMockedMultiLanguageMetadata();

                context.InitializeMetadata(metadata);

                var theme = new opc_theme { opc_islocalizable = true, opc_nameenglish = "Technology", opc_namefrench = "Technologie" };

                // Act
                context.ExecutePluginWithTarget<MultiLanguagePlugin>(theme);

                // Assert
                var expected = $"{Prefix}{string.Join(Separator, new[] { theme.opc_nameenglish, theme.opc_namefrench })}";
                theme.opc_name.Should().Be(expected);
            }
        }

        public class when_updating_multilanguageitem
        {
            public EntityMetadata GetMockedMultiLanguageMetadata()
            {
                var metadata = new EntityMetadata { LogicalName = opc_theme.EntityLogicalName };

                metadata.SetAttribute(new StringAttributeMetadata { LogicalName = "opc_name" });
                metadata.SetAttribute(new StringAttributeMetadata { LogicalName = "opc_nameenglish" });
                metadata.SetAttribute(new StringAttributeMetadata { LogicalName = "opc_namefrench" });

                return metadata;
            }

            [Fact(DisplayName = "translated fields should change")]
            public void translated_fields_should_change()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();
                var metadata = GetMockedMultiLanguageMetadata();

                context.InitializeMetadata(metadata);

                var preImageTheme = new opc_theme { opc_islocalizable = true, opc_name = $"{Prefix}Technology|Technologee", opc_nameenglish = "Technology", opc_namefrench = "Technologee" };
                var targetTheme = new opc_theme { opc_namefrench = "Technologie" };

                var previous = preImageTheme.opc_name;

                pluginContext.PreEntityImages.Add("PreImage", preImageTheme);
                pluginContext.InputParameters.Add(InputParameter.Target, targetTheme);
                pluginContext.MessageName = PluginMessage.Update;

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                var expected = $"{Prefix}{string.Join(Separator, new[] { preImageTheme.opc_nameenglish, targetTheme.opc_namefrench })}";
                targetTheme.opc_name.Should().NotBe(previous);
                targetTheme.opc_name.Should().Be(expected);
            }
        }

        public class when_retrieving_multilanguageitem
        {
            [Fact(DisplayName = "fields shouldn't be translated if opc_islocalizable is false")]
            public void fields_should_be_english_when_the_ui_is_english()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var theme = new opc_theme { opc_islocalizable = false, opc_name = $"{Prefix}Technology{Separator}Technologie" };
                var expected = theme.opc_name;

                pluginContext.OutputParameters.Add(OutputParameter.BusinessEntity, theme);
                pluginContext.MessageName = PluginMessage.Retrieve;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.English);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                theme.opc_name.Should().Be(expected);
            }

            [Fact(DisplayName = "translated fields should be English when UI is English")]
            public void translated_fields_should_be_english_when_the_ui_is_english()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var theme = new opc_theme { opc_islocalizable = true, opc_name = $"{Prefix}Technology{Separator}Technologie", opc_nameenglish = "Technology" };

                pluginContext.OutputParameters.Add(OutputParameter.BusinessEntity, theme);
                pluginContext.MessageName = PluginMessage.Retrieve;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.English);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                var expected = theme.opc_nameenglish;
                theme.opc_name.Should().Be(expected);
            }

            [Fact(DisplayName = "translated fields should be French when UI is French")]
            public void translated_fields_should_be_french_when_the_ui_is_french()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var theme = new opc_theme { opc_islocalizable = true, opc_name = $"{Prefix}Technology{Separator}Technologie", opc_namefrench = "Technologie" };

                pluginContext.OutputParameters.Add(OutputParameter.BusinessEntity, theme);
                pluginContext.MessageName = PluginMessage.Retrieve;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.French);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                var expected = theme.opc_namefrench;
                theme.opc_name.Should().Be(expected);
            }

            [Fact(DisplayName = "translated fields should fallback to English when UI is French and the value is empty")]
            public void translated_fields_should_fallback_to_english_when_the_ui_is_french_and_the_value_is_empty()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var theme = new opc_theme { opc_islocalizable = true, opc_name = $"{Prefix}Technology{Separator}", opc_nameenglish = "Technology" };

                pluginContext.OutputParameters.Add(OutputParameter.BusinessEntity, theme);
                pluginContext.MessageName = PluginMessage.Retrieve;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.French);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                var expected = theme.opc_nameenglish;
                theme.opc_name.Should().Be(expected);
            }

            [Fact(DisplayName = "translated fields should fallback to French when UI is English and the value is empty")]
            public void translated_fields_should_fallback_to_french_when_the_ui_is_english_and_the_value_is_empty()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var theme = new opc_theme { opc_islocalizable = true, opc_name = $"{Prefix}{Separator}Technologie", opc_namefrench = "Technologie" };

                pluginContext.OutputParameters.Add(OutputParameter.BusinessEntity, theme);
                pluginContext.MessageName = PluginMessage.Retrieve;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.English);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                var expected = theme.opc_namefrench;
                theme.opc_name.Should().Be(expected);
            }
        }

        public class when_retrieving_multiple_multilanguageitem
        {
            [Fact(DisplayName = "fields shouldn't be translated if opc_islocalizable is false")]
            public void fields_should_be_english_when_the_ui_is_english()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var themes = new EntityCollection();
                themes.Entities.Add(new opc_theme { opc_islocalizable = false, opc_name = $"{Prefix}Technology{Separator}Technologie" });
                themes.Entities.Add(new opc_theme { opc_islocalizable = false, opc_name = $"{Prefix}Public Services{Separator}Services Publiques" });

                pluginContext.OutputParameters.Add(OutputParameter.BusinessEntityCollection, themes);
                pluginContext.MessageName = PluginMessage.RetrieveMultiple;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.English);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                foreach (opc_theme theme in themes.Entities)
                    theme.opc_name.Should().StartWith(Prefix);
            }

            [Fact(DisplayName = "translated fields should be English when UI is English")]
            public void translated_fields_should_be_english_when_the_ui_is_english()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var themes = new EntityCollection();
                themes.Entities.Add(new opc_theme { opc_islocalizable = true, opc_name = $"{Prefix}Technology{Separator}Technologie", opc_nameenglish = "Technology" });
                themes.Entities.Add(new opc_theme { opc_islocalizable = true, opc_name = $"{Prefix}Public Services{Separator}Services Publiques", opc_nameenglish = "Public Services" });

                pluginContext.OutputParameters.Add(OutputParameter.BusinessEntityCollection, themes);
                pluginContext.MessageName = PluginMessage.RetrieveMultiple;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.English);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                foreach (opc_theme theme in themes.Entities)
                {
                    var expected = theme.opc_nameenglish;
                    theme.opc_name.Should().Be(expected);
                }
            }

            [Fact(DisplayName = "translated fields should be French when UI is French")]
            public void translated_fields_should_be_french_when_the_ui_is_french()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var themes = new EntityCollection();
                themes.Entities.Add(new opc_theme { opc_islocalizable = true, opc_name = $"{Prefix}Technology{Separator}Technologie", opc_namefrench = "Technologie" });
                themes.Entities.Add(new opc_theme { opc_islocalizable = true, opc_name = $"{Prefix}Public Services{Separator}Services Publiques", opc_namefrench = "Services Publiques" });

                pluginContext.OutputParameters.Add(OutputParameter.BusinessEntityCollection, themes);
                pluginContext.MessageName = PluginMessage.RetrieveMultiple;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.French);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                foreach (opc_theme theme in themes.Entities)
                {
                    var expected = theme.opc_namefrench;
                    theme.opc_name.Should().Be(expected);
                }
            }

            [Fact(DisplayName = "translated fields should fallback to English when UI is French and the value is empty")]
            public void translated_fields_should_fallback_to_english_when_the_ui_is_french_and_the_value_is_empty()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var themes = new EntityCollection();
                themes.Entities.Add(new opc_theme { opc_islocalizable = true, opc_name = $"{Prefix}Technology{Separator}", opc_nameenglish = "Technology" });
                themes.Entities.Add(new opc_theme { opc_islocalizable = true, opc_name = $"{Prefix}Public Services{Separator}", opc_nameenglish = "Public Services" });

                pluginContext.OutputParameters.Add(OutputParameter.BusinessEntityCollection, themes);
                pluginContext.MessageName = PluginMessage.RetrieveMultiple;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.French);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                foreach (opc_theme theme in themes.Entities)
                {
                    var expected = theme.opc_nameenglish;
                    theme.opc_name.Should().Be(expected);
                }
            }

            [Fact(DisplayName = "translated fields should fallback to French when UI is English and the value is empty")]
            public void translated_fields_should_fallback_to_french_when_the_ui_is_english_and_the_value_is_empty()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var themes = new EntityCollection();
                themes.Entities.Add(new opc_theme { opc_islocalizable = true, opc_name = $"{Prefix}{Separator}Technologie", opc_namefrench = "Technologie" });
                themes.Entities.Add(new opc_theme { opc_islocalizable = true, opc_name = $"{Prefix}{Separator}Services Publiques", opc_namefrench = "Services Publiques" });

                pluginContext.OutputParameters.Add(OutputParameter.BusinessEntityCollection, themes);
                pluginContext.MessageName = PluginMessage.RetrieveMultiple;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.English);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                foreach (opc_theme theme in themes.Entities)
                {
                    var expected = theme.opc_namefrench;
                    theme.opc_name.Should().Be(expected);
                }
            }
        }

        public class when_retrieving_multilanguage_relateditem
        {
            [Fact(DisplayName = "translated fields should be English when UI is English")]
            public void translated_fields_should_be_english_when_ui_is_english()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var topic = new opc_topic { opc_themeid = new EntityReference { Name = $"{Prefix}Technology{Separator}Technologie" } };

                pluginContext.OutputParameters.Add(OutputParameter.BusinessEntity, topic);
                pluginContext.MessageName = PluginMessage.Retrieve;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.English);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                var expected = "Technology";
                topic.opc_themeid.Name.Should().Be(expected);
            }

            [Fact(DisplayName = "translated fields should be French when UI is French")]
            public void translated_fields_should_be_french_when_ui_is_french()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var topic = new opc_topic { opc_themeid = new EntityReference { Name = $"{Prefix}Technology{Separator}Technologie" } };

                pluginContext.OutputParameters.Add(OutputParameter.BusinessEntity, topic);
                pluginContext.MessageName = PluginMessage.Retrieve;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.French);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                var expected = "Technologie";
                topic.opc_themeid.Name.Should().Be(expected);
            }

            [Fact(DisplayName = "translated fields should fallback to English when UI is French and the value is empty")]
            public void translated_fields_should_fallback_to_english_when_the_ui_is_french_and_the_value_is_empty()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var topic = new opc_topic { opc_themeid = new EntityReference { Name = $"{Prefix}Technology{Separator}" } };

                pluginContext.OutputParameters.Add(OutputParameter.BusinessEntity, topic);
                pluginContext.MessageName = PluginMessage.Retrieve;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.French);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                var expected = "Technology";
                topic.opc_themeid.Name.Should().Be(expected);
            }

            [Fact(DisplayName = "translated fields should fallback to French when UI is English and the value is empty")]
            public void translated_fields_should_fallback_to_french_when_the_ui_is_english_and_the_value_is_empty()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var topic = new opc_topic { opc_themeid = new EntityReference { Name = $"{Prefix}{Separator}Technologie" } };

                pluginContext.OutputParameters.Add(OutputParameter.BusinessEntity, topic);
                pluginContext.MessageName = PluginMessage.Retrieve;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.English);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                var expected = "Technologie";
                topic.opc_themeid.Name.Should().Be(expected);
            }
        }

        public class when_retrieving_multiple_multilanguage_relateditem
        {
            [Fact(DisplayName = "translated fields should be English when UI is English")]
            public void translated_fields_should_be_english_when_ui_is_english()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var topics = new EntityCollection();
                topics.Entities.Add(new opc_topic
                {
                    opc_themeid = new EntityReference() { Name = $"{Prefix}Technology{Separator}Technologie" },
                    opc_theme_topics_themeid = new opc_theme { opc_nameenglish = "Technology" }
                });

                topics.Entities.Add(new opc_topic
                {
                    opc_themeid = new EntityReference() { Name = $"{Prefix}Public Services{Separator}Services Publiques" },
                    opc_theme_topics_themeid = new opc_theme { opc_nameenglish = "Public Services" }
                });

                pluginContext.OutputParameters.Add(OutputParameter.BusinessEntityCollection, topics);
                pluginContext.MessageName = PluginMessage.RetrieveMultiple;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.English);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                foreach (opc_topic topic in topics.Entities)
                    topic.opc_themeid.Name.Should().Be(topic.opc_theme_topics_themeid.opc_nameenglish);
            }

            [Fact(DisplayName = "translated fields should be French when UI is French")]
            public void translated_fields_should_be_french_when_ui_is_french()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var topics = new EntityCollection();
                topics.Entities.Add(new opc_topic
                {
                    opc_themeid = new EntityReference() { Name = $"{Prefix}Technology{Separator}Technologie" },
                    opc_theme_topics_themeid = new opc_theme { opc_namefrench = "Technologie" }
                });

                topics.Entities.Add(new opc_topic
                {
                    opc_themeid = new EntityReference() { Name = $"{Prefix}Public Services{Separator}Services Publiques" },
                    opc_theme_topics_themeid = new opc_theme { opc_namefrench = "Services Publiques" }
                });

                pluginContext.OutputParameters.Add(OutputParameter.BusinessEntityCollection, topics);
                pluginContext.MessageName = PluginMessage.RetrieveMultiple;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.French);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                foreach (opc_topic topic in topics.Entities)
                    topic.opc_themeid.Name.Should().Be(topic.opc_theme_topics_themeid.opc_namefrench);
            }

            [Fact(DisplayName = "translated fields should fallback to English when UI is French and the value is empty")]
            public void translated_fields_should_fallback_to_english_when_the_ui_is_french_and_the_value_is_empty()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var topics = new EntityCollection();
                topics.Entities.Add(new opc_topic
                {
                    opc_themeid = new EntityReference() { Name = $"{Prefix}Technology{Separator}" },
                    opc_theme_topics_themeid = new opc_theme { opc_nameenglish = "Technology" }
                });

                topics.Entities.Add(new opc_topic
                {
                    opc_themeid = new EntityReference() { Name = $"{Prefix}Public Services{Separator}" },
                    opc_theme_topics_themeid = new opc_theme { opc_nameenglish = "Public Services" }
                });

                pluginContext.OutputParameters.Add(OutputParameter.BusinessEntityCollection, topics);
                pluginContext.MessageName = PluginMessage.RetrieveMultiple;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.French);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                foreach (opc_topic topic in topics.Entities)
                    topic.opc_themeid.Name.Should().Be(topic.opc_theme_topics_themeid.opc_nameenglish);
            }

            [Fact(DisplayName = "translated fields should fallback to French when UI is English and the value is empty")]
            public void translated_fields_should_fallback_to_french_when_the_ui_is_english_and_the_value_is_empty()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var topics = new EntityCollection();
                topics.Entities.Add(new opc_topic
                {
                    opc_themeid = new EntityReference() { Name = $"{Prefix}{Separator}Technologie" },
                    opc_theme_topics_themeid = new opc_theme { opc_namefrench = "Technologie" }
                });

                topics.Entities.Add(new opc_topic
                {
                    opc_themeid = new EntityReference() { Name = $"{Prefix}{Separator}Services Publiques" },
                    opc_theme_topics_themeid = new opc_theme { opc_namefrench = "Services Publiques" }
                });

                pluginContext.OutputParameters.Add(OutputParameter.BusinessEntityCollection, topics);
                pluginContext.MessageName = PluginMessage.RetrieveMultiple;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.English);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                foreach (opc_topic topic in topics.Entities)
                    topic.opc_themeid.Name.Should().Be(topic.opc_theme_topics_themeid.opc_namefrench);
            }
        }

        public class when_retrieving_multilanguage_expandedproperties
        {
            [Fact(DisplayName = "translated fields should be English when UI is English")]
            public void translated_fields_should_be_english_when_ui_is_english()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var topic = new opc_topic
                {
                    opc_theme_topics_themeid = new opc_theme { opc_name = $"{Prefix}Computer Science{Separator}Informatique" }
                };

                pluginContext.OutputParameters.Add(OutputParameter.BusinessEntity, topic);
                pluginContext.MessageName = PluginMessage.Retrieve;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.English);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                var expected = "Computer Science";
                topic.opc_theme_topics_themeid.opc_name.Should().Be(expected);
            }

            [Fact(DisplayName = "translated fields should be French when UI is French")]
            public void translated_fields_should_be_french_when_ui_is_french()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var topic = new opc_topic
                {
                    opc_theme_topics_themeid = new opc_theme { opc_name = $"{Prefix}Computer Science{Separator}Informatique" }
                };

                pluginContext.OutputParameters.Add(OutputParameter.BusinessEntity, topic);
                pluginContext.MessageName = PluginMessage.Retrieve;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.French);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                var expected = "Informatique";
                topic.opc_theme_topics_themeid.opc_name.Should().Be(expected);
            }

            [Fact(DisplayName = "translated fields should fallback to English when UI is French and the value is empty")]
            public void translated_fields_should_fallback_to_english_when_the_ui_is_french_and_the_value_is_empty()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var topic = new opc_topic
                {
                    opc_theme_topics_themeid = new opc_theme { opc_name = $"{Prefix}Computer Science{Separator}" }
                };

                pluginContext.OutputParameters.Add(OutputParameter.BusinessEntity, topic);
                pluginContext.MessageName = PluginMessage.Retrieve;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.French);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                var expected = "Computer Science";
                topic.opc_theme_topics_themeid.opc_name.Should().Be(expected);
            }

            [Fact(DisplayName = "translated fields should fallback to French when UI is English and the value is empty")]
            public void translated_fields_should_fallback_to_french_when_the_ui_is_english_and_the_value_is_empty()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var topic = new opc_topic
                {
                    opc_theme_topics_themeid = new opc_theme { opc_name = $"{Prefix}{Separator}Informatique" }
                };

                pluginContext.OutputParameters.Add(OutputParameter.BusinessEntity, topic);
                pluginContext.MessageName = PluginMessage.Retrieve;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.English);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                var expected = "Informatique";
                topic.opc_theme_topics_themeid.opc_name.Should().Be(expected);
            }
        }

        public class when_retrieving_timeline_records
        {
            public class TimelineRecordTransform
            {
                public Language Language { get; set; }
                public string Initial { get; set; }
                public string Expected { get; set; }
            }

            public static IEnumerable<object[]> TimelineRecordTransforms
            {
                get
                {
                    return new[]
                    {
                        // Single occurences of multilangual strings
                        new object[] { new TimelineRecordTransform() {
                            Language = Language.English,
                            Initial = "Should not be modified \"|^|Test English|Test French\" should not be modified",
                            Expected = "Should not be modified \"Test English\" should not be modified"
                        }},
                        new object[] { new TimelineRecordTransform() {
                            Language = Language.French,
                            Initial = "Should not be modified \"|^|Test English|Test French\" should not be modified",
                            Expected = "Should not be modified \"Test French\" should not be modified"
                        }},

                        // Multi occurence of multilangual strings
                        new object[] { new TimelineRecordTransform() {
                            Language = Language.English,
                            Initial = "Should not be modified \"|^|Test English|Test French\" should not be modified \"|^|Test English|Test French\" test",
                            Expected = "Should not be modified \"Test English\" should not be modified \"Test English\" test"
                        }},
                        new object[] { new TimelineRecordTransform() {
                            Language = Language.French,
                            Initial = "Should not be modified \"|^|Test English|Test French\" should not be modified \"|^|Test English|Test French\" test",
                            Expected = "Should not be modified \"Test French\" should not be modified \"Test French\" test"
                        }},

                        // Strings with escaped quotes should still be changed properly
                        new object[] { new TimelineRecordTransform() {
                            Language = Language.English,
                            Initial = "Should not be modified \"|^|Test \\\" English|Test French\" should not be modified \"|^|Test \\\" English|Test \\\" French\" test",
                            Expected = "Should not be modified \"Test \\\" English\" should not be modified \"Test \\\" English\" test"
                        }},
                        new object[] { new TimelineRecordTransform() {
                            Language = Language.French,
                            Initial = "Should not be modified \"|^|Test \\\" English|Test \\\" French\" should not be modified \"|^|Test \\\" English|Test \\\" French\" test",
                            Expected = "Should not be modified \"Test \\\" French\" should not be modified \"Test \\\" French\" test"
                        }},
                    };
                }
            }

            [Theory(DisplayName = "TimelineWallRecords should display in the correct language"), MemberData(nameof(TimelineRecordTransforms))]
            public void timeline_records_strings_should_turn_to_correct_language(TimelineRecordTransform timelineRecordTransform)
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();
                var outputs = new ParameterCollection { { OutputParameter.TimelineWallRecords, timelineRecordTransform.Initial } };

                pluginContext.OutputParameters = outputs;
                pluginContext.MessageName = PluginMessage.RetrieveTimelineWallRecords;
                pluginContext.SharedVariables.Add(LanguageKey, (int)timelineRecordTransform.Language);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                pluginContext.OutputParameters[OutputParameter.TimelineWallRecords].Should().Be(timelineRecordTransform.Expected);
            }

            [Fact(DisplayName = "TimelineWallRecords should not throw when null")]
            public void timeline_records_should_not_throw_when_null()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();
                var outputs = new ParameterCollection { { OutputParameter.TimelineWallRecords, null } };

                pluginContext.OutputParameters = outputs;
                pluginContext.MessageName = PluginMessage.RetrieveTimelineWallRecords;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.English);

                // Act
                var ex = Record.Exception(() => context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext));

                // Assert
                Assert.Null(ex);
            }
        }
    }
}


