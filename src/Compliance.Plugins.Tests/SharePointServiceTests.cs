using FluentAssertions;
using Xunit;

namespace Compliance.Plugins.Tests
{
    public class SharePointServiceTests
    {
        private static SharePointService sharepointService = null;

        public static SharePointService SharePointService =>
            sharepointService ?? (sharepointService = new SharePointService());

        public class when_sanitizing_the_document_name
        {
            [Fact(DisplayName = "it should remove all illegal characters")]
            public void it_should_remove_all_illegal_characters()
            {
                // Arrange
                var fakeName = "? f|<a>\\ke *\\\\:<>?/|\"#%' /n%a$m#e:";
                string[] illegalChars = { "*", "\\", ":", "<", ">", "?", "/", "|", "\"", "#", "%", "'" };

                // Act
                fakeName = SharePointService.GetValidDocumentName(fakeName, "");

                // Assert
                fakeName.Should().NotContainAny(illegalChars);
            }
        }
    }
}