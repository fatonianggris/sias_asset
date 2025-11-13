/******/ (() => {
  // webpackBootstrap
  var __webpack_exports__ = {};
  /*!********************************************************************!*\
     !*** ../demo1/src/js/pages/crud/forms/validation/form-controls.js ***!
     \********************************************************************/
  // Class definition
  var KTFormControls = (function () {
    var _question_edit;
    // Private functions
    var _initPertanyaanEdit = function () {
      var validation;
      var form = KTUtil.getById("kt_form_edit_question");
      validation = FormValidation.formValidation(form, {
        fields: {
          tipe_pertanyaan_edit: {
            validators: {
              notEmpty: {
                message: "Tipe Pertanyaan diperlukan",
              },
            },
          },
          isi_pertanyaan_edit: {
            validators: {
              notEmpty: {
                message: "Isi Pertanyaan diperlukan",
              },
            },
          },
        },

        plugins: {
          //Learn more: https://formvalidation.io/guide/plugins
          trigger: new FormValidation.plugins.Trigger(),
          // Bootstrap Framework Integration
          bootstrap: new FormValidation.plugins.Bootstrap(),
        },
      });

      _question_edit.on("submit", function (e) {
        e.preventDefault(); // cegah reload halaman
        if (validation) {
          validation.validate().then(function (status) {
            if (status === "Valid") {
              let form_data = new FormData(form);

              $.ajax({
                url: `${HOST_URL}/employee/master/questionnaire/edit_question`,
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
        _question_edit = $("#kt_form_edit_question");
        _initPertanyaanEdit();
      },
    };
  })();

  jQuery(document).ready(function () {
    KTFormControls.init();
  });

  /******/
})();
//# sourceMappingURL=form-controls.js.map
