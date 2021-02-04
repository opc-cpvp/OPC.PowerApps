using FluentAssertions;
using FakeXrmEasy;
using Microsoft.Xrm.Sdk;
using Moq;
using Xunit;
using System.IO;
using System;
using System.Threading.Tasks;

namespace Compliance.Plugins.Tests
{
    public class TemplatePluginTests
    {
        private static TemplatePlugin pluginInstance = null;
        private static Mock<SharePointService> mockSharePointService = null;

        public static Mock<SharePointService> MockSharePointService =>
            mockSharePointService ?? (mockSharePointService = new Mock<SharePointService>());

        public static TemplatePlugin PluginInstance =>
            pluginInstance ?? (pluginInstance = new TemplatePlugin(MockSharePointService.Object));

        public class when_executing_the_plugin: IDisposable
        {
            private ParameterCollection inputs = new ParameterCollection {
                    { "TemplatePath", "" },
                    { "XMLData", "" },
                    { "CaseFolderPath", "" },
                    { "AccessToken", "" },
                    { "DocumentName", "" },
                    { "SharePointSiteUrl", "" }};

            public when_executing_the_plugin()
            {
                MockSharePointService.Setup(x => x.GetDocumentAsStream(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>()))
                                 .ReturnsAsync(() => new MemoryStream());

                MockSharePointService. Setup(x => x.AddFileToSharePoint(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>(), It.IsAny<byte[]>()))
                                 .Returns(Task.CompletedTask);

                MockSharePointService.Setup(x => x.GenerateDocumentFromTemplate(It.IsAny<Stream>(), It.IsAny<string>()))
                                 .Returns(() => new byte[] { });
            }

            public void Dispose()
            {
                MockSharePointService.Invocations.Clear();
            }

            [Fact(DisplayName = "it should retrieve the template")]
            public void it_should_retrieve_the_template()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                pluginContext.InputParameters = inputs;
                pluginContext.MessageName = PluginMessage.GenerateDocumentFromTemplate;

                // Act
                context.ExecutePluginWith(pluginContext, PluginInstance);

                // Assert
                MockSharePointService.Verify(x => x.GetDocumentAsStream(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>()), Times.Once());
            }

            [Fact(DisplayName = "it should generate the document")]
            public void it_should_generate_the_document()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                pluginContext.InputParameters = inputs;
                pluginContext.MessageName = PluginMessage.GenerateDocumentFromTemplate;

                // Act
                context.ExecutePluginWith(pluginContext, PluginInstance);

                // Assert
                MockSharePointService.Verify(x => x.GenerateDocumentFromTemplate(It.IsAny<Stream>(), It.IsAny<string>()), Times.Once());
            }

            [Fact(DisplayName = "it should add the document to sharepoint")]
            public void it_should_add_the_document_to_sharepoint()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                pluginContext.InputParameters = inputs;
                pluginContext.MessageName = PluginMessage.GenerateDocumentFromTemplate;

                // Act
                context.ExecutePluginWith(pluginContext, PluginInstance);

                // Assert
                MockSharePointService.Verify(x => x.AddFileToSharePoint(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>(), It.IsAny<byte[]>()), Times.Once());
            }

            [Fact(DisplayName = "it should throw an InvalidPluginExecutionException if there's an exception when retrieving the template")]
            public void it_should_throw_an_InvalidPluginExecutionException_if_there_is_an_exception_when_retrieving_the_template()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                pluginContext.InputParameters = inputs;
                pluginContext.MessageName = PluginMessage.GenerateDocumentFromTemplate;

                MockSharePointService.Setup(x => x.GetDocumentAsStream(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>()))
                                 .ThrowsAsync(new Exception());

                // Act
                Action executePluginWith = () => context.ExecutePluginWith(pluginContext, PluginInstance);

                // Assert
                executePluginWith.Should().Throw<InvalidPluginExecutionException>();
            }

            [Fact(DisplayName = "it should throw an InvalidPluginExecutionException if there's an exception when generating the document")]
            public void it_should_throw_an_InvalidPluginExecutionException_if_there_is_an_exception_when_generating_the_document()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                pluginContext.InputParameters = inputs;
                pluginContext.MessageName = PluginMessage.GenerateDocumentFromTemplate;

                MockSharePointService.Setup(x => x.GenerateDocumentFromTemplate(It.IsAny<Stream>(), It.IsAny<string>()))
                                 .Throws(new Exception());

                // Act
                Action executePluginWith = () => context.ExecutePluginWith(pluginContext, PluginInstance);

                // Assert
                executePluginWith.Should().Throw<InvalidPluginExecutionException>();
            }

            [Fact(DisplayName = "it should throw an InvalidPluginExecutionException if there's an exception when sending the file to sharepoint")]
            public void it_should_throw_an_InvalidPluginExecutionException_if_there_is_an_exception_when_sending_the_file_to_sharepoint()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                pluginContext.InputParameters = inputs;
                pluginContext.MessageName = PluginMessage.GenerateDocumentFromTemplate;

                MockSharePointService.Setup(x => x.AddFileToSharePoint(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>(), It.IsAny<byte[]>()))
                                 .ThrowsAsync(new Exception());

                // Act
                Action executePluginWith = () => context.ExecutePluginWith(pluginContext, PluginInstance);

                // Assert
                executePluginWith.Should().Throw<InvalidPluginExecutionException>();
            }

            [Fact(DisplayName = "it should send a trace log if there's an exception when retrieving the template")]
            public void it_should_send_a_trace_log_if_there_is_an_exception_when_retrieving_the_template()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                pluginContext.InputParameters = inputs;
                pluginContext.MessageName = PluginMessage.GenerateDocumentFromTemplate;

                MockSharePointService.Setup(x => x.GetDocumentAsStream(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>()))
                                 .ThrowsAsync(new Exception());

                // Act
                Action executePluginWith = () => context.ExecutePluginWith(pluginContext, PluginInstance);

                // Assert
                executePluginWith.Should().Throw<InvalidPluginExecutionException>();
                context.GetFakeTracingService().DumpTrace().Should().ContainAll("Exception", "Inner Exception", "Stack Trace");
            }

            [Fact(DisplayName = "it should send a trace log if there's an exception when generating the document")]
            public void it_should_send_a_trace_log_if_there_is_an_exception_when_generating_the_document()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                pluginContext.InputParameters = inputs;
                pluginContext.MessageName = PluginMessage.GenerateDocumentFromTemplate;

                MockSharePointService.Setup(x => x.GenerateDocumentFromTemplate(It.IsAny<Stream>(), It.IsAny<string>()))
                                 .Throws(new Exception());

                // Act
                Action executePluginWith = () => context.ExecutePluginWith(pluginContext, PluginInstance);

                // Assert
                executePluginWith.Should().Throw<InvalidPluginExecutionException>();
                context.GetFakeTracingService().DumpTrace().Should().ContainAll("Exception", "Inner Exception", "Stack Trace");
            }

            [Fact(DisplayName = "it should send a trace log if there's an exception when sending the file to sharepoint")]
            public void it_should_send_a_trace_log_if_there_is_an_exception_when_sending_the_file_to_sharepoint()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                pluginContext.InputParameters = inputs;
                pluginContext.MessageName = PluginMessage.GenerateDocumentFromTemplate;

                MockSharePointService.Setup(x => x.AddFileToSharePoint(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>(), It.IsAny<byte[]>()))
                                 .ThrowsAsync(new Exception());

                // Act
                Action executePluginWith = () => context.ExecutePluginWith(pluginContext, PluginInstance);

                // Assert
                executePluginWith.Should().Throw<InvalidPluginExecutionException>();
                context.GetFakeTracingService().DumpTrace().Should().ContainAll("Exception", "Inner Exception", "Stack Trace");
            }
        }
    }
}