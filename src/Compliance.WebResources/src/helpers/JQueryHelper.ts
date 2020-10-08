
export class JQueryHelper {
    static initSelectElements(): void {
        let options: MultiSelectOptions = {
            optionClass: () => { return "select-option"; },
            onChange: (option) => {
                var values: any[] = [];
                option.parent().children("option").each(function () {
                    if ($(this).val() !== option.val()) {
                        values.push($(this).val());
                    }
                });
                option.parent().multiselect('deselect', values);
                $('.multiselect-container.dropdown-menu.show').removeClass("show");
            }
        };
        $('.form-control.multiselect').multiselect({ optionClass: () => { return "select-option"; } });
        $('.form-control.select').multiselect(options);
        $('.multiselect-native-select').css({ display: "block" });
        $('.multiselect.btn').css({
            border: "1px solid #ced4da",
            "border-radius": ".25rem",
            "text-align": "left"
        });
        $('.multiselect.btn').parent().css({
            width: "100%"
        });

    }
}
