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
        private const string LanguageKey = "uilanguageid";

        public class when_creating_multilanguageitem
        {
            public opc_theme GetMockedMultiLanguageEntity()
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

            public EntityMetadata GetMockedMultiLanguageMetadata()
            {
                var metadata = new EntityMetadata
                {
                    LogicalName = "opc_theme"
                };

                metadata.SetAttribute(new StringAttributeMetadata { LogicalName = "opc_name" });
                metadata.SetAttribute(new StringAttributeMetadata { LogicalName = "opc_nameenglish" });
                metadata.SetAttribute(new StringAttributeMetadata { LogicalName = "opc_namefrench" });

                return metadata;
            }

            [Fact(DisplayName = "translated fields should contain data")]
            public void translated_fields_should_contain_data()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();
                var metadata = GetMockedMultiLanguageMetadata();

                context.InitializeMetadata(metadata);

                var theme = GetMockedMultiLanguageEntity();

                var inputs = new ParameterCollection { { InputParameter.Target, theme } };

                pluginContext.InputParameters = inputs;
                pluginContext.MessageName = PluginMessage.Create;

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                theme.opc_name.Should().NotBeNullOrWhiteSpace();
            }

            [Fact(DisplayName = "translated fields should contain both languages")]
            public void translated_fields_should_contain_both_languages()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();
                var metadata = GetMockedMultiLanguageMetadata();

                context.InitializeMetadata(metadata);

                var theme = GetMockedMultiLanguageEntity();
                var expectedName = $"{Prefix}{theme.opc_nameenglish}|{theme.opc_namefrench}";

                var inputs = new ParameterCollection { { InputParameter.Target, theme } };

                pluginContext.InputParameters = inputs;
                pluginContext.MessageName = PluginMessage.Create;

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                theme.opc_name.Should().Be(expectedName);
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

            public EntityMetadata GetMockedMultiLanguageMetadata()
            {
                var metadata = new EntityMetadata
                {
                    LogicalName = "opc_theme"
                };

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

                var oldName = "Technology|Technologie";
                var multiLanguageEntity = GetMockedMultiLanguageEntity();

                var inputs = new ParameterCollection { { InputParameter.Target, multiLanguageEntity } };

                pluginContext.InputParameters = inputs;
                pluginContext.MessageName = PluginMessage.Update;

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                multiLanguageEntity.opc_name.Should().NotBe(oldName);
            }

            [Fact(DisplayName = "translated fields should be modified")]
            public void translated_fields_should_be_modified()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();
                var metadata = GetMockedMultiLanguageMetadata();

                context.InitializeMetadata(metadata);

                var multiLanguageEntity = GetMockedMultiLanguageEntity();
                var expectedName = $"{Prefix}{multiLanguageEntity.opc_nameenglish}|{multiLanguageEntity.opc_namefrench}";

                var inputs = new ParameterCollection { { InputParameter.Target, multiLanguageEntity } };

                pluginContext.InputParameters = inputs;
                pluginContext.MessageName = PluginMessage.Update;

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                multiLanguageEntity.opc_name.Should().Be(expectedName);
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

            [Fact(DisplayName = "translated fields should be french when UI is french")]
            public void translated_fields_should_be_french_when_the_ui_is_in_french()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var multiLanguageEntity = GetMockedMultiLanguageEntity();
                var expectedName = multiLanguageEntity.opc_namefrench;

                var outputs = new ParameterCollection { { OutputParameter.BusinessEntity, multiLanguageEntity } };

                pluginContext.OutputParameters = outputs;
                pluginContext.MessageName = PluginMessage.Retrieve;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.French);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                multiLanguageEntity.opc_name.Should().Be(expectedName);
            }

            [Fact(DisplayName = "translated fields should be english when UI is english")]
            public void translated_fields_should_be_english_when_the_ui_is_in_english()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var multiLanguageEntity = GetMockedMultiLanguageEntity();
                var expectedName = multiLanguageEntity.opc_nameenglish;

                var outputs = new ParameterCollection { { OutputParameter.BusinessEntity, multiLanguageEntity } };

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

            [Fact(DisplayName = "translated fields should be french when UI is in french")]
            public void translated_fields_should_be_french_when_ui_is_french()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();
                var multiLanguageEntityCollection = GetMultiLanguageEntityCollection();

                var outputs = new ParameterCollection { { OutputParameter.BusinessEntityCollection, multiLanguageEntityCollection } };

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

            [Fact(DisplayName = "translated fields should be english when UI is english")]
            public void translated_fields_should_be_english_when_ui_is_english()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();
                var multiLanguageEntityCollection = GetMultiLanguageEntityCollection();

                var outputs = new ParameterCollection { { OutputParameter.BusinessEntityCollection, multiLanguageEntityCollection } };

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

            [Fact(DisplayName = "translated fields should be french when UI is french")]
            public void translated_fields_should_be_french_when_ui_is_french()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();
                var multiLanguageEntity = GetMockedMultiLanguageEntity();
                var outputs = new ParameterCollection { { OutputParameter.BusinessEntity, multiLanguageEntity } };
                var expectedName = "Technologie";

                pluginContext.OutputParameters = outputs;
                pluginContext.MessageName = PluginMessage.Retrieve;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.French);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                multiLanguageEntity.opc_themeid.Name.Should().Be(expectedName);
            }

            [Fact(DisplayName = "translated fields should be english when UI is english")]
            public void translated_fields_should_be_english_when_ui_is_english()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();
                var multiLanguageEntity = GetMockedMultiLanguageEntity();
                var outputs = new ParameterCollection { { OutputParameter.BusinessEntity, multiLanguageEntity } };
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

            [Fact(DisplayName = "translated fields should be french when UI is french")]
            public void translated_fields_should_be_french_when_ui_is_french()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();
                var multiLanguageEntityCollection = GetMultiLanguageEntityCollection();
                var outputs = new ParameterCollection { { OutputParameter.BusinessEntityCollection, multiLanguageEntityCollection } };

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

            [Fact(DisplayName = "translated fields should be english when UI is english")]
            public void translated_fields_should_be_english_when_ui_is_english()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();
                var multiLanguageEntityCollection = GetMultiLanguageEntityCollection();
                var outputs = new ParameterCollection { { OutputParameter.BusinessEntityCollection, multiLanguageEntityCollection } };

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

        public class when_retrieving_multilanguage_expandedproperties
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
                    opc_theme_topics_themeid = new opc_theme
                    {
                        Id = Guid.NewGuid(),
                        opc_islocalizable = true,
                        opc_name = $"{Prefix}Computer Science|Informatique",
                        opc_nameenglish = "Computer Science",
                        opc_namefrench = "Informatique",
                    }
                };
            }

            [Fact(DisplayName = "translated fields should be french when UI is french")]
            public void translated_fields_should_be_french_when_ui_is_french()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();
                var multiLanguageEntity = GetMockedMultiLanguageEntity();
                var outputs = new ParameterCollection { { OutputParameter.BusinessEntity, multiLanguageEntity } };
                var expectedName = "Informatique";

                pluginContext.OutputParameters = outputs;
                pluginContext.MessageName = PluginMessage.Retrieve;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.French);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                multiLanguageEntity.opc_theme_topics_themeid.opc_name.Should().Be(expectedName);
            }

            [Fact(DisplayName = "translated fields should be english when UI is english")]
            public void translated_fields_should_be_english_when_ui_is_english()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();
                var multiLanguageEntity = GetMockedMultiLanguageEntity();
                var outputs = new ParameterCollection { { OutputParameter.BusinessEntity, multiLanguageEntity } };
                var expectedName = "Computer Science";

                pluginContext.OutputParameters = outputs;
                pluginContext.MessageName = PluginMessage.Retrieve;
                pluginContext.SharedVariables.Add(LanguageKey, (int)Language.English);

                // Act
                context.ExecutePluginWith<MultiLanguagePlugin>(pluginContext);

                // Assert
                multiLanguageEntity.opc_theme_topics_themeid.opc_name.Should().Be(expectedName);
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


