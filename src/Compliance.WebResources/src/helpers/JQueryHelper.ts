export class JQueryHelper {
    static initSelectElements(): void {
        // Options for the select elements. The onchange make sure it's a single select and closes the dropdown when a choice is made.
        const options: MultiSelectOptions = {
            optionClass: () => "select-option",
            onChange: modifiedOption => {
                modifiedOption.parent().multiselect("deselectAll");
                modifiedOption.parent().multiselect("select", modifiedOption.val(), false);
                $(".multiselect-container.dropdown-menu.show").removeClass("show");
            }
        };

        // Initialize select elements using bootstrap's multiselect.
        // I'm using the multiselect library on single select elements to simplify how the save method of checklistcontrol works for select/multiselect and to have the same style.
        $(".form-control.select").multiselect(options);

        // Initialize multiselect elements using bootstrap's multiselect
        $(".form-control.multiselect").multiselect({
            optionClass: () => "select-option"
        });

        // This puts the Select/Multiselect on it's on line and the
        $(".multiselect-native-select").css({ display: "block" });

        // This puts a border and left align the text like the other fields
        $(".multiselect.btn").css({
            border: "1px solid #ced4da",
            "border-radius": ".25rem",
            "text-align": "left"
        });

        // This make the field take the whole width like the other fields. This also make sure that the options are always displayed on one line.
        $(".multiselect.btn").parent().css({
            width: "100%"
        });
    }
}
