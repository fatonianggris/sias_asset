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
      var datatable = $("#kt_datatable_evalution_leader").KTDatatable({
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
          height: 600,
          footer: false,
        },
        checkbox: true,
        columns: [
          {
            field: "Nama Penilai",
            title: "Nama Penilai",
            width: 210,
          },
          {
            field: "Jabatan Penilai",
            title: "Jabatan Penilai",
            width: 95,
          },
          {
            field: "Tingkat Penilai",
            title: "Tingkat Penilai",
            width: 80,
            autoHide: false,
            // callback function support for column rendering
            template: function (row) {
              var status = {
                0: {
                  title: "ADMIN",
                  class: "label-light-primary",
                },
                1: {
                  title: "DC/KB/TK",
                  class: "label-light-primary",
                },
                3: {
                  title: "SD",
                  class: "label-light-success",
                },
                4: {
                  title: "SMP",
                  class: "label-light-warning",
                },
                5: {
                  title: "SMA",
                  class: "label-light-danger",
                },
                6: {
                  title: "UMUM",
                  class: "label-light-info",
                },
              };
              return (
                '<span class="label font-weight-bold label-lg ' +
                status[row["Tingkat Penilai"]].class +
                ' label-inline">' +
                status[row["Tingkat Penilai"]].title +
                "</span>"
              );
            },
          },
          {
            field: "Nama Dinilai",
            title: "Nama Dinilai",
            width: 210,
          },
          {
            field: "Jabatan Dinilai",
            title: "Jabatan Dinilai",
            width: 95,
          },
          {
            field: "Tingkat Dinilai",
            title: "Tingkat Dinilai",
            width: 80,
            autoHide: false,
            // callback function support for column rendering
            template: function (row) {
              var status = {
                0: {
                  title: "ADMIN",
                  class: "label-light-primary",
                },
                1: {
                  title: "DC/KB/TK",
                  class: "label-light-primary",
                },
                3: {
                  title: "SD",
                  class: "label-light-success",
                },
                4: {
                  title: "SMP",
                  class: "label-light-warning",
                },
                5: {
                  title: "SMA",
                  class: "label-light-danger",
                },
                6: {
                  title: "UMUM",
                  class: "label-light-info",
                },
              };
              return (
                '<span class="label font-weight-bold label-lg ' +
                status[row["Tingkat Dinilai"]].class +
                ' label-inline">' +
                status[row["Tingkat Dinilai"]].title +
                "</span>"
              );
            },
          },
          {
            field: "Penilaian",
            title: "Penilaian",
            width: 80,
            template: function (row) {
              var status = {
                0: { title: "PERSONAL", class: "label-light-success" },
                1: { title: "SEJAWAT", class: " label-light-warning" },
                2: { title: "ATASAN", class: " label-light-info" },
                3: { title: "BAWAHAN", class: " label-light-primary" },
              };
              return (
                '<span class="label label-lg font-weight-bold ' +
                status[row.Penilaian].class +
                ' label-inline">' +
                status[row.Penilaian].title +
                "</span>"
              );
            },
          },
          {
            field: "Status",
            title: "Status",
            width: 103,
            template: function (row) {
              var status = {
                0: { title: "BELUM DINILAI", class: "label-light-danger" },
                1: { title: "SUDAH DINILAI", class: " label-light-success" },
              };
              return (
                '<span class="label label-lg font-weight-bold ' +
                status[row.Status].class +
                ' label-inline">' +
                status[row.Status].title +
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

      $("#kt_datatable_search_grade_penilai").on("change", function () {
        datatable.search($(this).val().toLowerCase(), "tingkatpenilai");
      });

      $("#kt_datatable_search_grade_dinilai").on("change", function () {
        datatable.search($(this).val().toLowerCase(), "tingkatdinilai");
      });

      $("#kt_datatable_search_type_eval").on("change", function () {
        datatable.search($(this).val().toLowerCase(), "Penilaian");
      });

      $("#kt_datatable_search_stat").on("change", function () {
        datatable.search($(this).val().toLowerCase(), "Status");
      });
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
