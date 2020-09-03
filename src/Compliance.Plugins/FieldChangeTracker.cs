namespace Compliance.Plugins
{
    public class FieldChangeTracker
    {
        public FieldChangeTracker(string fieldLogicalName, string fieldLabelEnglish, string fieldLabelFrench)
        {
            FieldLogicalName = fieldLogicalName;
            FieldLabelEnglish = fieldLabelEnglish;
            FieldLabelFrench = fieldLabelFrench;
        }

        /// <summary>
        /// The logical name of the field in dynamics
        /// </summary>
        public string FieldLogicalName { get; set; }

        /// <summary>
        /// Given readable lable to identtify the field, used in the change phrase by default
        /// </summary>
        public string FieldLabelEnglish { get; set; }
        public string FieldLabelFrench { get; set; }

        /// <summary>
        /// Phrase which will be used to show the change. Will contain at some point the old and new value for the changed field to be injected with a string format.
        /// </summary>
        public string ChangePhraseEnglish { get; set; } = "{0} has changed {1} from {2} to {3}.";
        public string ChangePhraseFrench { get; set; } = "{0} a changé {1} de {2} à {3}.";

        /// <summary>
        /// Formats the change phrase to inject it with the old and new values for the field
        /// </summary>
        /// <param name="oldValue">Old value of the field that has just been changed</param>
        /// <param name="newValue">New value of the field that has just been changed</param>
        /// <returns>The formatted change phrase with the old and new value for the field</returns>
        public string GetChangePhraseEnglish(string user, string oldValue, string newValue, params string[] otherValues) => string.Format(ChangePhraseEnglish, user, FieldLabelEnglish, oldValue, newValue, otherValues);
        public string GetChangePhraseFrench(string user, string oldValue, string newValue, params string[] otherValues) => string.Format(ChangePhraseFrench, user, FieldLabelFrench, oldValue, newValue, otherValues);
    }
}
