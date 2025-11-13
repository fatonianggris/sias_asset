/******/ (() => {
  // webpackBootstrap
  var __webpack_exports__ = {};
  /*!********************************************************************!*\
     !*** ../demo1/src/js/pages/crud/forms/validation/form-controls.js ***!
     \********************************************************************/
  // Class definition
  var KTFormControls = (function () {
    // Private functions
    var _question_type_edit;

    var _initPredicateEdit = function () {
      var validation;
      var form = KTUtil.getById("kt_form_edit_predicate_value");
      validation = FormValidation.formValidation(form, {
        fields: {
          nilai_minimal_edit: {
            validators: {
              notEmpty: {
                message: "Nilai Minimal diperlukan",
              },
              integer: {
                message: "Inputan harus Angka",
                // The default separators
                thousandsSeparator: "",
                decimalSeparator: "",
              },
            },
          },
          nilai_maksimal_edit: {
            validators: {
              notEmpty: {
                message: "Nilai Maksimal diperlukan",
              },
              integer: {
                message: "Inputan harus Angka",
                // The default separators
                thousandsSeparator: "",
                decimalSeparator: "",
              },
            },
          },
          predikat_abjad: {
            validators: {
              notEmpty: {
                message: "Predikat Abjad diperlukan",
              },
              regexp: {
                regexp: /^[A-Za-z\s]+$/,
                message: "Inputan harus huruf",
              },
              stringLength: {
                min: 1,
                max: 1,
                message: "inputan harus 1 karakter",
              },
            },
          },
          label_nilai_edit: {
            validators: {
              notEmpty: {
                message: "Label Nilai diperlukan",
              },
            },
          },
        },

        plugins: {
          trigger: new FormValidation.plugins.Trigger(),
          bootstrap: new FormValidation.plugins.Bootstrap(),
        },
      });

      _question_type_edit.on("submit", function (e) {
        e.preventDefault(); // cegah reload halaman
        if (validation) {
          validation.validate().then(function (status) {
            if (status === "Valid") {
              let form_data = new FormData(form);

              $.ajax({
                url: `${HOST_URL}/employee/master/questionnaire/edit_predicate_value`,
                type: "POST",
                data: form_data,
                processData: false,
                contentType: false,
                dataType: "json",
                success: function (res) {
                  if (res.status) {
                    Swal.fire("Sukses", res.message, "success").then(() => {
                      location.reload();
                    });
                  } else {
                    Swal.fire("Gagal", res.message, "error");
                  }
                },
                error: function (xhr, status, error) {
                  Swal.fire("Error", "Terjadi kesalahan server!", "error");
                },
              });
            } else {
              Swal.fire({
                text: "Mohon Maaf, kemungkinan terjadi kesalahan pada pengisian Anda, Mohon menginputkan dengan benar.",
                icon: "error",
                buttonsStyling: false,
                confirmButtonText: "Oke!",
                customClass: {
                  confirmButton: "btn font-weight-bold btn-primary",
                },
              }).then(function () {
                KTUtil.scrollTop();
              });
            }
          });
        }
      });
    };

    return {
      // public functions
      init: function () {
        _question_type_edit = $("#kt_form_edit_predicate_value");
        _initPredicateEdit();
      },
    };
  })();

  jQuery(document).ready(function () {
    KTFormControls.init();
  });

  /******/
})();
//# sourceMappingURL=form-controls.js.map
