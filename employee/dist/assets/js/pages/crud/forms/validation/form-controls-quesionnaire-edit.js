/******/ (() => {
  // webpackBootstrap
  var __webpack_exports__ = {};
  /*!********************************************************************!*\
     !*** ../demo1/src/js/pages/crud/forms/validation/form-controls.js ***!
     \********************************************************************/
  // Class definition
  var KTFormControls = (function () {
    // Private functions
    var _question;

    var _initPertanyaan = function () {
      var validation;
      var form = KTUtil.getById("kt_add_questionaire_form_edit");
      validation = FormValidation.formValidation(form, {
        fields: {
          nama_kuisioner_edit: {
            validators: {
              notEmpty: {
                message: "Nama Kuisioner diperlukan",
              },
            },
          },
          tgl_mulai_edit: {
            validators: {
              notEmpty: {
                message: "Tanggal Mulai diperlukan",
              },
            },
          },
          tgl_berakhir_edit: {
            validators: {
              notEmpty: {
                message: "Tanggal Berakhir diperlukan",
              },
            },
          },
          th_ajaran_edit: {
            validators: {
              notEmpty: {
                message: "Tahun Ajaran diperlukan",
              },
            },
          },
          persentase_personal_edit: {
            validators: {
              notEmpty: {
                message: "Persentase Personal diperlukan",
              },
              integer: {
                message: "Inputan harus Angka",
                // The default separators
                thousandsSeparator: ".",
                decimalSeparator: ".",
              },
              between: {
                min: 1,
                max: 100,
                message: "Nilai Persentase harus antara 1 sampai 100",
              },
            },
          },
          persentase_sejawat_edit: {
            validators: {
              notEmpty: {
                message: "Persentase Sejawat diperlukan",
              },
              integer: {
                message: "Inputan harus Angka",
                // The default separators
                thousandsSeparator: ".",
                decimalSeparator: ".",
              },
              between: {
                min: 1,
                max: 100,
                message: "Nilai Persentase harus antara 1 sampai 100",
              },
            },
          },
          persentase_atasan_edit: {
            validators: {
              notEmpty: {
                message: "Persentase Atasan diperlukan",
              },
              integer: {
                message: "Inputan harus Angka",
                // The default separators
                thousandsSeparator: ".",
                decimalSeparator: ".",
              },
              between: {
                min: 1,
                max: 100,
                message: "Nilai Persentase harus antara 1 sampai 100",
              },
            },
          },
          persentase_bawahan_edit: {
            validators: {
              notEmpty: {
                message: "Persentase Bawahan diperlukan",
              },
              integer: {
                message: "Inputan harus Angka",
                // The default separators
                thousandsSeparator: ".",
                decimalSeparator: ".",
              },
              between: {
                min: 1,
                max: 100,
                message: "Nilai Persentase harus antara 1 sampai 100",
              },
            },
          },
          nilai_penilaian_max_edit: {
            validators: {
              notEmpty: {
                message: "Penilaian Max diperlukan",
              },
              integer: {
                message: "Inputan harus Angka",
                // The default separators
                thousandsSeparator: "",
                decimalSeparator: "",
              },
              between: {
                min: 1,
                max: 100,
                message: "Opsi Penilaian harus antara 1 sampai X",
              },
            },
          },
          deskripsi_kuisioner_edit: {
            validators: {
              notEmpty: {
                message: "Deskripsi Kuisioner diperlukan",
              },
            },
          }
        },

        plugins: {
          trigger: new FormValidation.plugins.Trigger(),
          bootstrap: new FormValidation.plugins.Bootstrap(),
        },
      });

      _question.on("submit", function (e) {
        e.preventDefault(); // cegah reload halaman
        if (validation) {
          validation.validate().then(function (status) {
            if (status === "Valid") {
              let form_data = new FormData(form);

              $.ajax({
                url: `${HOST_URL}/employee/master/questionnaire/edit_questionnaire`,
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
        _question = $("#kt_add_questionaire_form_edit");
        _initPertanyaan();
      },
    };
  })();

  jQuery(document).ready(function () {
    KTFormControls.init();
  });

  /******/
})();
//# sourceMappingURL=form-controls.js.map
