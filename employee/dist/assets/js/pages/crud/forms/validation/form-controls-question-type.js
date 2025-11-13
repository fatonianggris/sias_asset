/******/ (() => {
  // webpackBootstrap
  var __webpack_exports__ = {};
  /*!********************************************************************!*\
     !*** ../demo1/src/js/pages/crud/forms/validation/form-controls.js ***!
     \********************************************************************/
  // Class definition
  var KTFormControls = (function () {
    // Private functions
    var _initTipe = function () {
      FormValidation.formValidation(
        document.getElementById("kt_form_add_question_type"),
        {
          fields: {
            nama_tipe_pertanyaan: {
              validators: {
                notEmpty: {
                  message: "Nama Tipe Pertanyaan diperlukan",
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
        _initTipe();
      },
    };
  })();

  jQuery(document).ready(function () {
    KTFormControls.init();
  });

  /******/
})();
//# sourceMappingURL=form-controls.js.map
