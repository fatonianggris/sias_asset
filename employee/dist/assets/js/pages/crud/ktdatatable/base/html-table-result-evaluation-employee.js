/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  var __webpack_exports__ = {};
  /*!*****************************************************************!*\
	 !*** ../demo1/src/js/pages/crud/ktdatatable/base/html-table.js ***!
	 \*****************************************************************/

  // Class definition

  var KTDatatableHtmlTableDemo = (function () {
    // Private functions

    // demo initializer
    var demo = function () {
      var datatable = $(
        "#kt_datatable_result_questionnaire_employee"
      ).KTDatatable({
        data: {
          pageSize: "10",
        },
        search: {
          input: $("#kt_datatable_search_query"),
          key: "generalSearch",
        },
        toolbar: {
          items: {
            pagination: { pageSizeSelect: [10, 50, 100] },
          },
        },
        layout: {
          class: "datatable-bordered datatable-head-custom table-sm",
          scroll: true,
          height: 1000,
          footer: false,
        },
        checkbox: true,
        columns: [
          {
            field: "Nama Pegawai",
            title: "Nama Pegawai",
            width: 190,
          },
          {
            field: "Jabatan",
            title: "Jabatan",
            width: 69,
          },
          {
            field: "jumlah_personal_penilai",
            title: "jumlah_personal_penilai",
            width: 1,
            visible: false,
          },
          {
            field: "jumlah_sejawat_penilai",
            title: "jumlah_sejawat_penilai",
            width: 0,
            visible: false,
          },
          {
            field: "jumlah_atasan_penilai",
            title: "jumlah_atasan_penilai",
            width: 0,
            visible: false,
          },
          {
            field: "jumlah_bawahan_penilai",
            title: "jumlah_bawahan_penilai",
            width: 0,
            visible: false,
          },
          {
            field: "jumlah_hasil_personal_penilai",
            title: "jumlah_hasil_personal_penilai",
            width: 0,
            visible: false,
          },
          {
            field: "jumlah_hasil_sejawat_penilai",
            title: "jumlah_hasil_sejawat_penilai",
            width: 0,
            visible: false,
          },
          {
            field: "jumlah_hasil_atasan_penilai",
            title: "jumlah_hasil_atasan_penilai",
            width: 0,
            visible: false,
          },
          {
            field: "jumlah_hasil_bawahan_penilai",
            title: "jumlah_hasil_bawahan_penilai",
            width: 0,
            visible: false,
          },
          {
            field: "Nilai Personal",
            title: "Nilai Personal",
            width: 90,
            template: function (row) {
              var status;
              if (row["jumlah_personal_penilai"] > 0) {
                if (row["Nilai Personal"] == 0) {
                  status =
                    '<span class="label label-md font-weight-bolder label-danger label-inline">' +
                    "BELUM DINILAI" +
                    "</span>";
                } else {
                  status = "<b>" + row["Nilai Personal"] + "</b>";
                }
              } else {
                status =
                  '<span class="label label-md font-weight-bolder label-dark label-inline">' +
                  "TIDAK DINILAI" +
                  "</span>";
              }
              return status;
            },
          },
          {
            field: "Nilai Sejawat",
            title: "Nilai Sejawat",
            width: 90,
            template: function (row) {
              var status;
              if (row["jumlah_sejawat_penilai"] > 0) {
                if (row["Nilai Sejawat"] == 0) {
                  status =
                    '<span class="label label-md font-weight-bolder label-danger label-inline">' +
                    "BELUM DINILAI" +
                    "</span>";
                } else {
                  status = "<b>" + row["Nilai Sejawat"] + "</b>";
                }
              } else {
                status =
                  '<span class="label label-md font-weight-bolder label-dark label-inline">' +
                  "TIDAK DINILAI" +
                  "</span>";
              }
              return status;
            },
          },
          {
            field: "Nilai Atasan",
            title: "Nilai Atasan",
            width: 90,
            template: function (row) {
              var status;
              if (row["jumlah_atasan_penilai"] > 0) {
                if (row["Nilai Atasan"] == 0) {
                  status =
                    '<span class="label label-md font-weight-bolder label-danger label-inline">' +
                    "BELUM DINILAI" +
                    "</span>";
                } else {
                  status = "<b>" + row["Nilai Atasan"] + "</b>";
                }
              } else {
                status =
                  '<span class="label label-md font-weight-bolder label-dark label-inline">' +
                  "TIDAK DINILAI" +
                  "</span>";
              }
              return status;
            },
          },
          {
            field: "Nilai Bawahan",
            title: "Nilai Bawahan",
            width: 90,
            template: function (row) {
              var status;
              if (row["jumlah_bawahan_penilai"] > 0) {
                if (row["Nilai Bawahan"] == 0) {
                  status =
                    '<span class="label label-md font-weight-bolder label-danger label-inline">' +
                    "BELUM DINILAI" +
                    "</span>";
                } else {
                  status = "<b>" + row["Nilai Bawahan"] + "</b>";
                }
              } else {
                status =
                  '<span class="label label-md font-weight-bolder label-dark label-inline">' +
                  "TIDAK DINILAI" +
                  "</span>";
              }
              return status;
            },
          },
          {
            field: "Rata Rata",
            title: "Rata Rata",
            width: 73,
            template: function (row) {
              var status;
              if (row["Rata Rata"] == 0) {
                status =
                  '<span class="label label-md font-weight-bolder label-warning label-inline">' +
                  "KALKULASI" +
                  "</span>";
              } else {
                status = "<b>" + row["Rata Rata"] + "</b>";
              }

              return status;
            },
          },
          {
            field: "Predikat",
            title: "Predikat",
            width: 70,
            template: function (row) {
              var status;
              if (row["Predikat"] == "-" || row["Predikat"] == "") {
                status =
                  '<span class="label label-md font-weight-bolder label-warning label-inline">' +
                  "KALKULASI" +
                  "</span>";
              } else {
                status = "<b>" + row["Predikat"] + "</b>";
              }

              return status;
            },
          },
          {
            field: "Hasil Evaluasi",
            title: "Hasil Evaluasi",
            width: 94,
            template: function (row) {
              var status = {
                0: { title: "BELUM KELUAR", class: "label-danger" },
                1: { title: "SUDAH KELUAR", class: "label-success" },
              };
              return (
                '<span class="label label-md font-weight-bolder ' +
                status[row["Hasil Evaluasi"]].class +
                ' label-inline">' +
                status[row["Hasil Evaluasi"]].title +
                "</span>"
              );
            },
          },
          {
            field: "Aksi",
            title: "Aksi",
            width: 40,
          },
        ],
      });

      var count_data = null;

      datatable.on("datatable-on-check datatable-on-uncheck", function (e) {
        var checkedNodes = $.makeArray(
          datatable
            .getSelectedRecords()
            .find('.checkbox-single > [type="checkbox"]')
            .map(function (i, chk) {
              return $(chk).val();
            })
        );
        count_data = checkedNodes.join(",");
      });

      $("#frm-excel").on("submit", function () {
        document.getElementById("id_check_excel").value = count_data;
      });

      $("#kt_datatable_search_grade").on("change", function () {
        datatable.search($(this).val().toLowerCase(), "Level");
      });
      $("#kt_datatable_search_type_emp").on("change", function () {
        datatable.search($(this).val().toLowerCase(), "Pegawai");
      });
      $("#kt_datatable_search_personal").on("change", function () {
        datatable.search($(this).val().toLowerCase(), "Personal");
      });
      $("#kt_datatable_search_sejawat").on("change", function () {
        datatable.search($(this).val().toLowerCase(), "Sejawat");
      });
      $("#kt_datatable_search_atasan").on("change", function () {
        datatable.search($(this).val().toLowerCase(), "Atasan");
      });
      $(
        "#kt_datatable_search_grade",
        "#kt_datatable_search_type_emp",
        "#kt_datatable_search_personal",
        "#kt_datatable_search_sejawat",
        "#kt_datatable_search_atasan"
      ).selectpicker();
    };

    return {
      // Public functions
      init: function () {
        // init dmeo
        demo();
      },
    };
  })();

  jQuery(document).ready(function () {
    KTDatatableHtmlTableDemo.init();
  });

  /******/
})();
//# sourceMappingURL=html-table.js.map
