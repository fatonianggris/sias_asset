var KTDatatablesSearchOptionsAdvancedSearch = (function () {
  $.fn.dataTable.Api.register("column().title()", function () {
    return $(this.header()).text().trim();
  });

  var initTable1 = function () {
    // begin first table

    var start = moment().subtract(29, "days");
    var end = moment();

    var lstart;
    var lend;

    function call_today(start, end) {
      $("#kt_daterangepicker_6 .form-control").val(
        start.format("DD/MM/YYYY") + " - " + end.format("DD/MM/YYYY")
      );

      lstart = start.format("YYYY-MM-DD");
      lend = end.format("YYYY-MM-DD");
    }

    call_today(moment().subtract(29, "days"), moment());

    $("#kt_daterangepicker_6").daterangepicker(
      {
        buttonClasses: " btn",
        applyClass: "btn-primary",
        cancelClass: "btn-secondary",
        startDate: start,
        endDate: end,
        ranges: {
          Today: [moment(), moment()],
          Yesterday: [
            moment().subtract(1, "days"),
            moment().subtract(1, "days"),
          ],
          "Last 7 Days": [moment().subtract(6, "days"), moment()],
          "Last 30 Days": [moment().subtract(29, "days"), moment()],
          "This Month": [moment().startOf("month"), moment().endOf("month")],
          "Last Month": [
            moment().subtract(1, "month").startOf("month"),
            moment().subtract(1, "month").endOf("month"),
          ],
        },
      },
      call_today
    );

    $("#kt_daterangepicker_6").on(
      "apply.daterangepicker",
      function (ev, picker) {
        table.ajax.reload();
      }
    );

    $("kt_daterangepicker_6").on(
      "cancel.daterangepicker",
      function (ev, picker) {
        table.table().reload();
      }
    );

    var table = $("#kt_datatable_present").DataTable({
      responsive: true,
      // Pagination settings
      dom: `<'row'<'col-sm-12'tr>>
			<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,
      // read more: https://datatables.net/examples/basic_init/dom.html

      lengthMenu: [5, 10, 25, 50],
      pageLength: 10,
      ordering: false,
      language: {
        lengthMenu: "Display _MENU_",
      },
      headerCallback: function (row, data, start, end, display) {
        row.getElementsByTagName("th")[0].innerHTML = `
				<label class="checkbox checkbox-single">
					<input type="checkbox" value="" class="group-checkable"/>
					<span></span>
				</label>`;
      },
      searchDelay: 500,
      processing: true,
      serverSide: true,
      checkbox: true,
      ajax: {
        url: HOST_URL + "employee/employe/presence/get_data_presence_day",
        type: "POST",
        data: function (d) {
          // <-- d diberikan otomatis oleh DataTables
          d.start_date = lstart;
          d.end_date = lend;
          d.columnsDef = [
            "id_absensi_pegawai",
            "nama_lengkap",
            "status_absensi_masuk",
            "jam_masuk",
            "jam_masuk_telat",
            "status_absensi_pulang",
            "jam_pulang",
            "jam_pulang_telat",
            "tgl_format",
            "tahun_ajaran",
          ];
        },
      },
      columns: [
        { data: "id_absensi_pegawai" },
        { data: "nama_lengkap" },
        { data: "status_absensi_masuk" },
        { data: "jam_masuk" },
        { data: "jam_masuk_telat" },
        { data: "status_absensi_pulang" },
        { data: "jam_pulang" },
        { data: "jam_pulang_telat" },
        { data: "tgl_format" },
      ],
      columnDefs: [
        {
          targets: 0,
          orderable: false,
          width: "22",
          checkboxes: {
            selectRow: false,
          },
          render: function (data, type, full, meta) {
            return (
              '<label class="checkbox checkbox-single checkbox-primary mb-0">\
						<input type="checkbox" value="' +
              data +
              '" class="dt-checkboxes checkable"/>\
						<span></span>\
					</label>'
            );
          },
        },
        {
          targets: 1,
          width: "280",
          render: function (data, type, full, meta) {
            if (data === "" || data === null || data === "0") {
              return "<b>TIDAK DITEMUKAN</b>";
            } else {
              return "<b>" + data + "</b>";
            }
          },
        },
        {
          targets: 2,
          render: function (data, type, full, meta) {
            var status = {
              0: { title: "BELUM", class: "label-light-primary" },
              1: { title: "HADIR", class: "label-light-success" },
              2: { title: "IZIN", class: "label-light-warning" },
              3: { title: "ALPHA", class: "label-light-danger" },
            };
            if (typeof status[data] === "undefined" || status[data] === null) {
              return data;
            }
            return (
              '<span class="label label-lg font-weight-bold ' +
              status[data].class +
              ' label-inline">' +
              status[data].title +
              "</span>"
            );
          },
        },
        {
          targets: 3,
          render: function (data, type, full, meta) {
            if (data === "" || data === null || data === "0") {
              return "00:00";
            } else {
              return data;
            }
          },
        },
        {
          targets: 4,
          render: function (data, type, full, meta) {
            if (data === "" || data === null || data === "0") {
              return "00:00";
            } else {
              return data;
            }
          },
        },
        {
          targets: 5,
          render: function (data, type, full, meta) {
            var status = {
              0: { title: "BELUM", class: "label-light-primary" },
              1: { title: "HADIR", class: "label-light-success" },
              2: { title: "IZIN", class: "label-light-warning" },
              3: { title: "ALPHA", class: "label-light-danger" },
            };
            if (typeof status[data] === "undefined" || status[data] === null) {
              return data;
            }
            return (
              '<span class="label label-lg font-weight-bold ' +
              status[data].class +
              ' label-inline">' +
              status[data].title +
              "</span>"
            );
          },
        },
        {
          targets: 6,
          render: function (data, type, full, meta) {
            if (data === "" || data === null || data === "0") {
              return "00:00";
            } else {
              return data;
            }
          },
        },
        {
          targets: 7,
          render: function (data, type, full, meta) {
            if (data === "" || data === null || data === "0") {
              return "00:00";
            } else {
              return data;
            }
          },
        },
      ],
    });

    $("#frm-excel").on("submit", function () {
      var rows_selected = table.column(0).checkboxes.selected();
      document.getElementById("id_check_excel").value = rows_selected.join(",");
    });

    var filter = function () {
      var val = $.fn.dataTable.util.escapeRegex($(this).val());
      table
        .column($(this).data("col-index"))
        .search(val ? val : "", false, false)
        .draw();
    };

    $("#kt_search").on("click", function (e) {
      e.preventDefault();
      var params = {};
      $(".datatable-input").each(function () {
        var i = $(this).data("col-index");
        if (params[i]) {
          params[i] += "|" + $(this).val();
        } else {
          params[i] = $(this).val();
        }
      });
      $.each(params, function (i, val) {
        // apply search params to datatable
        table.column(i).search(val ? val : "", false, false);
      });
      table.table().draw();
    });

    $("#kt_reset").on("click", function (e) {
      e.preventDefault();
      $(".datatable-input").each(function () {
        $(this).val("");
        table.column($(this).data("col-index")).search("", false, false);
      });
      table.table().draw();
    });

    $("#kt_datepicker_table").datepicker({
      todayHighlight: true,
      format: "dd/mm/yyyy",
      templates: {
        leftArrow: '<i class="la la-angle-left"></i>',
        rightArrow: '<i class="la la-angle-right"></i>',
      },
    });
  };

  return {
    //main function to initiate the module
    init: function () {
      initTable1();
    },
  };
})();

jQuery(document).ready(function () {
  KTDatatablesSearchOptionsAdvancedSearch.init();
});

//# sourceMappingURL=advanced-search.js.map
