namespace Compliance.Plugins
{
    public class FieldChangeTracker
    {
        public FieldChangeTracker(string fieldLogicalName, string fieldLabel)
        {
            FieldLogicalName = fieldLogicalName;
            FieldLabel = fieldLabel;
        }
        /// <summary>
        /// The logical name of the field in dynamics
        /// </summary>
        public string FieldLogicalName { get; set; }
        /// <summary>
        /// Given readable lable to identtify the field, used in the change phrase by default
        /// </summary>
        public string FieldLabel { get; set; }
        /// <summary>
        /// Phrase which will be used to show the change. Will contain at some point the old and new value for the changed field to be injected with a string format.
        /// </summary>
        public string ChangePhrase { get; set; } = "The {0} has been changed from {1} to {2}.";

        /// <summary>
        /// Formats the change phrase to inject it with the old and new values for the field
        /// </summary>
        /// <param name="oldValue"></param>
        /// <param name="newValue"></param>
        /// <returns>The formatted chnage phrase with the old and new value for the field</returns>
        public string GetChangePhrase(string oldValue, string newValue) => string.Format(ChangePhrase, FieldLabel, oldValue, newValue);
    }
}
