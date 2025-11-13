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
          class: "datatable-bordered datatable-head-custom",
          scroll: true,
          height: 1000,
          footer: false,
        },
        checkbox: true,
        columns: [
          {
            field: "Nama Kuisioner",
            title: "Nama Kuisioner",
            width: 310,
          },
          {
            field: "Jumlah Sejawat Dinilai",
            title: "Jumlah Sejawat Dinilai",
            width: 0,
            visible: false,
          },
          {
            field: "Jumlah Atasan Dinilai",
            title: "Jumlah Atasan Dinilai",
            width: 0,
            visible: false,
          },
          {
            field: "Jumlah Bawahan Dinilai",
            title: "Jumlah Bawahan Dinilai",
            width: 0,
            visible: false,
          },
          {
            field: "Penilaian Personal",
            title: "Penilaian Personal",
            width: 120,
            template: function (row) {
              var status = {
                0: { title: "BELUM MENILAI", class: "label-danger" },
                1: { title: "SUDAH MENILAI", class: "label-success" },
              };
              return (
                '<span class="label label-md font-weight-bolder ' +
                status[row["Penilaian Personal"]].class +
                ' label-inline">' +
                status[row["Penilaian Personal"]].title +
                " " +
                row["Penilaian Personal"] +
                "/1" +
                "</span>"
              );
            },
          },
          {
            field: "Penilaian Sejawat",
            title: "Penilaian Sejawat",
            width: 120,
            template: function (row) {
              var status;
              if (row["Jumlah Sejawat Dinilai"] > 0) {
                if (row["Penilaian Sejawat"] == 0) {
                  status =
                    '<span class="label label-md font-weight-bolder label-danger label-inline">' +
                    "BELUM MENILAI" +
                    " " +
                    row["Penilaian Sejawat"] +
                    "/" +
                    row["Jumlah Sejawat Dinilai"] +
                    "</span>";
                } else if (
                  row["Penilaian Sejawat"] < row["Jumlah Sejawat Dinilai"] &&
                  row["Penilaian Sejawat"] > 0
                ) {
                  status =
                    '<span class="label label-md font-weight-bolder label-warning label-inline">' +
                    "SEDANG MENILAI" +
                    " " +
                    row["Penilaian Sejawat"] +
                    "/" +
                    row["Jumlah Sejawat Dinilai"] +
                    "</span>";
                } else {
                  status =
                    '<span class="label label-md font-weight-bolder label-success label-inline">' +
                    "SUDAH MENILAI" +
                    " " +
                    row["Penilaian Sejawat"] +
                    "/" +
                    row["Jumlah Sejawat Dinilai"] +
                    "</span>";
                }
              } else {
                status =
                  '<span class="label label-md font-weight-bolder label-dark label-inline">' +
                  "TIDAK MENILAI" +
                  "</span>";
              }
              return status;
            },
          },
          {
            field: "Penilaian Atasan",
            title: "Penilaian Atasan",
            width: 120,
            template: function (row) {
              var status;
              if (row["Jumlah Atasan Dinilai"] > 0) {
                if (row["Penilaian Atasan"] == 0) {
                  status =
                    '<span class="label label-md font-weight-bolder label-danger label-inline">' +
                    "BELUM MENILAI" +
                    " " +
                    row["Penilaian Atasan"] +
                    "/" +
                    row["Jumlah Atasan Dinilai"] +
                    "</span>";
                } else if (
                  row["Penilaian Atasan"] < row["Jumlah Atasan Dinilai"] &&
                  row["Penilaian Atasan"] > 0
                ) {
                  status =
                    '<span class="label label-md font-weight-bolder label-warning label-inline">' +
                    "SEDANG MENILAI" +
                    " " +
                    row["Penilaian Atasan"] +
                    "/" +
                    row["Jumlah Atasan Dinilai"] +
                    "</span>";
                } else {
                  status =
                    '<span class="label label-md font-weight-bolder label-success label-inline">' +
                    "SUDAH MENILAI" +
                    " " +
                    row["Penilaian Atasan"] +
                    "/" +
                    row["Jumlah Atasan Dinilai"] +
                    "</span>";
                }
              } else {
                status =
                  '<span class="label label-md font-weight-bolder label-dark label-inline">' +
                  "TIDAK MENILAI" +
                  "</span>";
              }
              return status;
            },
          },
          {
            field: "Penilaian Bawahan",
            title: "Penilaian Bawahan",
            width: 120,
            template: function (row) {
              var status;
              if (row["Jumlah Bawahan Dinilai"] > 0) {
                if (row["Penilaian Bawahan"] == 0) {
                  status =
                    '<span class="label label-md font-weight-bolder label-danger label-inline">' +
                    "BELUM MENILAI" +
                    " " +
                    row["Penilaian Bawahan"] +
                    "/" +
                    row["Jumlah Bawahan Dinilai"] +
                    "</span>";
                } else if (
                  row["Penilaian Bawahan"] < row["Jumlah Bawahan Dinilai"] &&
                  row["Penilaian Bawahan"] > 0
                ) {
                  status =
                    '<span class="label label-md font-weight-bolder label-warning label-inline">' +
                    "SEDANG MENILAI" +
                    " " +
                    row["Penilaian Bawahan"] +
                    "/" +
                    row["Jumlah Bawahan Dinilai"] +
                    "</span>";
                } else {
                  status =
                    '<span class="label label-md font-weight-bolder label-success label-inline">' +
                    "SUDAH MENILAI" +
                    " " +
                    row["Penilaian Bawahan"] +
                    "/" +
                    row["Jumlah Bawahan Dinilai"] +
                    "</span>";
                }
              } else {
                status =
                  '<span class="label label-md font-weight-bolder label-dark label-inline">' +
                  "TIDAK MENILAI" +
                  "</span>";
              }
              return status;
            },
          },
          {
            field: "Hasil Eval",
            title: "Hasil Eval",
            width: 95,
            template: function (row) {
              var status = {
                0: { title: "BELUM KELUAR", class: "label-danger" },
                1: { title: "SUDAH KELUAR", class: "label-success" },
              };
              return (
                '<span class="label label-md font-weight-bolder ' +
                status[row["Hasil Eval"]].class +
                ' label-inline">' +
                status[row["Hasil Eval"]].title +
                "</span>"
              );
            },
          },
          {
            field: "Status Kuisioner",
            title: "Status Kuisioner",
            width: 90,
            template: function (row) {
              var status = {
                0: { title: "BERAKHIR", class: "label-danger" },
                1: { title: "BERLANGSUNG", class: "label-success" },
              };
              return (
                '<span class="label label-md font-weight-bolder ' +
                status[row["Status Kuisioner"]].class +
                ' label-inline">' +
                status[row["Status Kuisioner"]].title +
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
