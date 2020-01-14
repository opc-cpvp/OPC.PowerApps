// =====================================================================
//
//  This file is part of the Microsoft Dynamics CRM SDK Code Samples.
//
//  Copyright (C) Microsoft Corporation.  All rights reserved.
//
//  This source code is intended only as a supplement to Microsoft
//  Development Tools and/or online documentation.  See these other
//  materials for detailed information regarding Microsoft code samples.
//
//  THIS CODE AND INFORMATION ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY
//  KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
//  IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
//  PARTICULAR PURPOSE.
//
// =====================================================================
//<snippetNamingService>
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text.RegularExpressions;
using Microsoft.Crm.Services.Utility;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;

namespace CrmSvcUtil.Filter.GenerateOptionSetEnums
{
    /// <summary>
    /// Implement this class if you want to provide your own logic for building names that
    /// will appear in the generated code.
    /// </summary>
    public sealed class NamingService : INamingService
    {
        private INamingService DefaultNamingService { get; set; }

        /// <summary>
        /// This field keeps track of the number of times that options with the same
        /// name would have been defined.
        /// </summary>
        private Dictionary<OptionSetMetadataBase, Dictionary<string, int>> OptionNames;

        public NamingService(INamingService namingService)
        {
            DefaultNamingService = namingService;
            OptionNames = new Dictionary<OptionSetMetadataBase,
                Dictionary<string, int>>();
        }

        /// <summary>
        /// Provide a new implementation for finding a name for an OptionSet. If the
        /// OptionSet is not global, we want the name to be the concatenation of the Entity's
        /// name and the Attribute's name.  Otherwise, we can use the default implementation.
        /// </summary>
        public string GetNameForOptionSet(
            EntityMetadata entityMetadata, OptionSetMetadataBase optionSetMetadata,
            IServiceProvider services)
        {
            // Ensure that the OptionSet is not global before using the custom
            // implementation.
            if (optionSetMetadata.IsGlobal.HasValue && !optionSetMetadata.IsGlobal.Value)
            {
                // Find the attribute which uses the specified OptionSet.
                var attribute =
                    (from a in entityMetadata.Attributes
                     where a.AttributeType == AttributeTypeCode.Picklist
                     && ((EnumAttributeMetadata)a).OptionSet.MetadataId
                         == optionSetMetadata.MetadataId
                     select a).FirstOrDefault();

                // Check for null, since statuscode attributes on custom entities are not
                // global, but their optionsets are not included in the attribute
                // metadata of the entity, either.
                if (attribute != null)
                {
                    // Concatenate the name of the entity and the name of the attribute
                    // together to form the OptionSet name.
                    return string.Format("{0}{1}",
                        DefaultNamingService.GetNameForEntity(entityMetadata, services),
                        DefaultNamingService.GetNameForAttribute(
                            entityMetadata, attribute, services));
                }
            }

            return DefaultNamingService.GetNameForOptionSet(
                entityMetadata, optionSetMetadata, services);
        }

        #region other INamingService Methods

        public string GetNameForAttribute(
            EntityMetadata entityMetadata, AttributeMetadata attributeMetadata,
            IServiceProvider services)
        {
            return DefaultNamingService.GetNameForAttribute(
                entityMetadata, attributeMetadata, services);
        }

        public string GetNameForEntity(
            EntityMetadata entityMetadata, IServiceProvider services)
        {
            return DefaultNamingService.GetNameForEntity(entityMetadata, services);
        }

        public string GetNameForEntitySet(
            EntityMetadata entityMetadata, IServiceProvider services)
        {
            return DefaultNamingService.GetNameForEntitySet(entityMetadata, services);
        }

        public string GetNameForMessagePair(
            SdkMessagePair messagePair, IServiceProvider services)
        {
            return DefaultNamingService.GetNameForMessagePair(messagePair, services);
        }

        /// <summary>
        /// Handles building the name for an Option of an OptionSet.
        /// </summary>
        public string GetNameForOption(OptionSetMetadataBase optionSetMetadata,
            OptionMetadata optionMetadata, IServiceProvider services)
        {
            var name = DefaultNamingService.GetNameForOption(optionSetMetadata,
                optionMetadata, services);
            Trace.TraceInformation(string.Format("The name of this option is {0}",
                name));
            name = EnsureValidIdentifier(name);
            name = EnsureUniqueOptionName(optionSetMetadata, name);
            return name;
        }

        /// <summary>
        /// Checks to make sure that the name begins with a valid character. If the name
        /// does not begin with a valid character, then add an underscore to the
        /// beginning of the name.
        /// </summary>
        private static string EnsureValidIdentifier(string name)
        {
            // Check to make sure that the option set begins with a word character
            // or underscore.
            var pattern = @"^[A-Za-z_][A-Za-z0-9_]*$";
            if (!Regex.IsMatch(name, pattern))
            {
                // Prepend an underscore to the name if it is not valid.
                name = string.Format("_{0}", name);
                Trace.TraceInformation(string.Format("Name of the option changed to {0}",
                    name));
            }
            return name;
        }

        /// <summary>
        /// Checks to make sure that the name does not already exist for the OptionSet
        /// to be generated.
        /// </summary>
        private string EnsureUniqueOptionName(OptionSetMetadataBase metadata, string name)
        {
            if (OptionNames.ContainsKey(metadata))
            {
                if (OptionNames[metadata].ContainsKey(name))
                {
                    // Increment the number of times that an option with this name has
                    // been found.
                    ++OptionNames[metadata][name];

                    // Append the number to the name to create a new, unique name.
                    var newName = string.Format("{0}_{1}",
                        name, OptionNames[metadata][name]);

                    Trace.TraceInformation(string.Format(
                        "The {0} OptionSet already contained a definition for {1}. Changed to {2}",
                        metadata.Name, name, newName));

                    // Call this function again to make sure that our new name is unique.
                    return EnsureUniqueOptionName(metadata, newName);
                }
            }
            else
            {
                // This is the first time this OptionSet has been encountered. Add it to
                // the dictionary.
                OptionNames[metadata] = new Dictionary<string, int>();
            }

            // This is the first time this name has been encountered. Begin keeping track
            // of the times we've run across it.
            OptionNames[metadata][name] = 1;

            return name;
        }

        public string GetNameForRelationship(
            EntityMetadata entityMetadata, RelationshipMetadataBase relationshipMetadata,
            EntityRole? reflexiveRole, IServiceProvider services)
        {
            return DefaultNamingService.GetNameForRelationship(
                entityMetadata, relationshipMetadata, reflexiveRole, services);
        }

        public string GetNameForRequestField(
            SdkMessageRequest request, SdkMessageRequestField requestField,
            IServiceProvider services)
        {
            return DefaultNamingService.GetNameForRequestField(
                request, requestField, services);
        }

        public string GetNameForResponseField(
            SdkMessageResponse response, SdkMessageResponseField responseField,
            IServiceProvider services)
        {
            return DefaultNamingService.GetNameForResponseField(
                response, responseField, services);
        }

        public string GetNameForServiceContext(IServiceProvider services)
        {
            return DefaultNamingService.GetNameForServiceContext(services);
        }

        #endregion
    }
}
//</snippetNamingService>
