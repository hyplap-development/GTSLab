"use strict";
var KTAccountSettingsProfileDetails = function() {
	var e, t;
	return {
		init: function() {
			(e = document.getElementById("kt_account_profile_details_form")) && (e.querySelector("#kt_account_profile_details_submit"), t = FormValidation.formValidation(e, {
				fields: {
					name: {
						validators: {
							notEmpty: {
								message: "Name is required"
							}
						}
					},
					
					phone: {
						validators: {
							notEmpty: {
								message: "Contact phone number is required"
							}
						}
					},
				},
				plugins: {
					trigger: new FormValidation.plugins.Trigger,
					submitButton: new FormValidation.plugins.SubmitButton,
					bootstrap: new FormValidation.plugins.Bootstrap5({
						rowSelector: ".fv-row",
						eleInvalidClass: "",
						eleValidClass: ""
					})
				}
			}),e.addEventListener("click", (function(e) {
                e.preventDefault(), t && t.validate().then((function(e) {
                    "Valid" == t && Swal.fire({
                        text: "All is cool! Now you submit this form",
                        icon: "success",
                        buttonsStyling: !1,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn btn-primary"
                        }
                    }).then((function() {
                        KTUtil.scrollTop()
                    }))
                }))
            })))
		}
	}
}();
KTUtil.onDOMContentLoaded((function() {
	KTAccountSettingsProfileDetails.init()
}));