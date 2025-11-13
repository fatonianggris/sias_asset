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
      var form = KTUtil.getById("kt_add_questionaire_form");
      validation = FormValidation.formValidation(form, {
        fields: {
          nama_kuisioner: {
            validators: {
              notEmpty: {
                message: "Nama Kuisioner diperlukan",
              },
            },
          },
          jumlah_penilai_sejawat: {
            validators: {
              notEmpty: {
                message: "Penilai Sejawat diperlukan",
              },
              integer: {
                message: "Inputan harus Angka",
                // The default separators
                thousandsSeparator: "",
                decimalSeparator: "",
              },
              between: {
                min: 1,
                max: 5,
                message: "Jumlah min 1 sampai 5",
              },
            },
          },
          tgl_mulai: {
            validators: {
              notEmpty: {
                message: "Tanggal Mulai diperlukan",
              },
            },
          },
          tgl_berakhir: {
            validators: {
              notEmpty: {
                message: "Tanggal Berakhir diperlukan",
              },
            },
          },
          th_ajaran: {
            validators: {
              notEmpty: {
                message: "Tahun Ajaran diperlukan",
              },
            },
          },
          persentase_personal: {
            validators: {
              notEmpty: {
                message: "Persentase Personal diperlukan",
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
                message: "Nilai Persentase harus antara 1 sampai 100",
              },
            },
          },
          persentase_sejawat: {
            validators: {
              notEmpty: {
                message: "Persentase Sejawat diperlukan",
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
                message: "Nilai Persentase harus antara 1 sampai 100",
              },
            },
          },
          persentase_atasan: {
            validators: {
              notEmpty: {
                message: "Persentase Atasan diperlukan",
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
                message: "Nilai Persentase harus antara 1 sampai 100",
              },
            },
          },
          persentase_bawahan: {
            validators: {
              notEmpty: {
                message: "Persentase Bawahan diperlukan",
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
                message: "Nilai Persentase harus antara 1 sampai 100",
              },
            },
          },
          nilai_penilaian_max: {
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
          deskripsi_kuisioner: {
            validators: {
              notEmpty: {
                message: "Deskripsi Kuisioner diperlukan",
              },
            },
          },
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
            if (status == "Valid") {
              runFrom(0);
              appendLog("Ready — click Start");

              // performStep API
              async function performStep(index) {
                steps[index].status = "running";
                steps[index].progress = 0;
                renderSteps();
                appendLog(`${steps[index].name}: Call API`);
                try {
                  const response = await fetch(apiUrls[index]);
                  if (!response.ok)
                    throw new Error("HTTP Error " + response.status);
                  const data = await response.json();

                  // Simulasi progress bertahap
                  for (let p = 0; p <= 100; p += 10) {
                    if (stopped) throw new Error("Stopped");
                    while (paused) await sleep(100);
                    steps[index].progress = p;
                    renderSteps();
                    await sleep(100);
                  }
                  steps[index].status = "done";
                  steps[index].progress = 100;
                  renderSteps();
                  appendLog(`${steps[index].name}: Done`);
                  console.log("API data step ", index + 1, data.message);
                  if (
                    index === steps.length - 1 &&
                    steps.every((s) => s.status === "done") &&
                    data.status === true
                  ) {
                    appendLog("Generate all evaluation done");
                    Swal.fire({
                      title: "Selesai",
                      text: "Kuisioner Berhasil dibuat, silahkan cek ulang!",
                      icon: "success",
                      confirmButtonText: "Oke!",
                      buttonsStyling: false,
                      customClass: {
                        confirmButton: "btn btn-success font-weight-bold",
                      },
                    }).then(() => {
                      setTimeout(function () {
                        location.reload();
                      }, 1000);
                    });
                  }
                } catch (err) {
                  steps[index].status = "failed";
                  renderSteps();
                  appendLog(`Error ${steps[index].name}: ${err.message}`);
                  throw err;
                }
              }

              async function runFrom(i) {
                // helper validasi kosong/null
                const notEmpty = (v) => v !== null && v !== "";

                // daftar inputan wajib
                const requiredFields = [
                  nama_kuisioner,
                  jumlah_penilai_sejawat,
                  tgl_mulai,
                  tgl_berakhir,
                  th_ajaran,
                  nilai_penilaian_max,
                  persentase_personal,
                  persentase_sejawat,
                  persentase_atasan,
                  persentase_bawahan,
                  deskripsi_kuisioner,
                  csrfHash,
                ];

                if (!requiredFields.every(notEmpty)) {
                  Swal.fire({
                    html: "Opps! Pastikan semua input terisi dengan benar dan tidak boleh kosong.",
                    icon: "error",
                    buttonsStyling: false,
                    confirmButtonText: "Oke!",
                    customClass: {
                      confirmButton: "btn font-weight-bold btn-danger",
                    },
                  }).then(() => KTUtil.scrollTop());
                  return;
                }

                const form_data = new FormData(form);

                $.ajax({
                  url: `${HOST_URL}/employee/master/questionnaire/post_questionnaire`,
                  type: "POST",
                  data: form_data,
                  processData: false, // jangan ubah FormData jadi query string
                  contentType: false, // biar browser set otomatis multipart/form-data
                  dataType: "json", // expect JSON response dari server
                  success: async function (data) {
                    if (data.status) {
                      // jalankan step by step
                      for (let k = i; k < steps.length; k++) {
                        if (stopped) break;
                        if (steps[k].status === "done") continue;
                        try {
                          await performStep(k);
                        } catch (e) {
                          console.error("Step failed:", e);
                          break;
                        }
                      }
                    } else {
                      Swal.fire({
                        html: data.messages,
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Oke!",
                        customClass: {
                          confirmButton: "btn font-weight-bold btn-danger",
                        },
                      }).then(() => KTUtil.scrollTop());
                    }
                  },
                  error: function (xhr, status, error) {
                    Swal.fire({
                      html: "Terjadi kesalahan koneksi: " + error,
                      icon: "error",
                      buttonsStyling: false,
                      confirmButtonText: "Oke!",
                      customClass: {
                        confirmButton: "btn font-weight-bold btn-danger",
                      },
                    }).then(() => KTUtil.scrollTop());
                  },
                });
              }
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
        _question = $("#kt_add_questionaire_form");
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
