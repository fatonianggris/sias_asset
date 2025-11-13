/******/ (() => {
  // webpackBootstrap
  var __webpack_exports__ = {};
  /*!********************************************************************!*\
     !*** ../demo1/src/js/pages/crud/forms/validation/form-controls.js ***!
     \********************************************************************/
  // Class definition
  var KTFormControls = (function () {
    // Private functions
    var _initPredicate = function () {
      FormValidation.formValidation(
        document.getElementById("kt_form_add_predicate_value"),
        {
          fields: {
            nilai_minimal: {
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
            nilai_maksimal: {
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
            label_nilai: {
              validators: {
                notEmpty: {
                  message: "Label Nilai diperlukan",
                },
              },
            },
          },

          plugins: {
            //Learn more: https://formvalidation.io/guide/plugins
            trigger: new FormValidation.plugins.Trigger(),
            // Bootstrap Framework Integration
            bootstrap: new FormValidation.plugins.Bootstrap(),
            // Validate fields when clicking the Submit button
            submitButton: new FormValidation.plugins.SubmitButton(),
            defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
          },
        }
      );
    };

    return {
      // public functions
      init: function () {
        _initPredicate();
      },
    };
  })();

  jQuery(document).ready(function () {
    KTFormControls.init();
  });

  /******/
})();
//# sourceMappingURL=form-controls.js.map
