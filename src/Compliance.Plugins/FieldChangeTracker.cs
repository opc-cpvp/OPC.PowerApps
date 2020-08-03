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
        public string ChangePhrase { get; set; } = "{0} has changed {1} from {2} to {3}.";

        /// <summary>
        /// Formats the change phrase to inject it with the old and new values for the field
        /// </summary>
        /// <param name="oldValue"></param>
        /// <param name="newValue"></param>
        /// <returns>The formatted change phrase with the old and new value for the field</returns>
        public string GetChangePhrase(string user, string oldValue, string newValue, params string[] otherValues) => string.Format(ChangePhrase, user, FieldLabel, oldValue, newValue, otherValues);
    }
}
