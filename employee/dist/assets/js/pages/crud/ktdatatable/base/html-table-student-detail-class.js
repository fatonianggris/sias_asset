/******/ (() => { // webpackBootstrap
    /******/ 	"use strict";
	var __webpack_exports__ = {};
	/*!*****************************************************************!*\
	 !*** ../demo1/src/js/pages/crud/ktdatatable/base/html-table.js ***!
	 \*****************************************************************/

	// Class definition

	var KTDatatableHtmlTableDemo = function () {
		// Private functions

		// demo initializer
		var demo = function () {

			var datatable = $('#kt_datatable_report_class').KTDatatable({
				data: {
					pageSize: "10",
				},
				search: {
					input: $('#kt_datatable_search_query_class'),
					key: 'generalSearch',
				},
				toolbar: {
					items: {
						pagination: { pageSizeSelect: [10, 50, 100] }
					}
				},
				layout: {
					class: 'datatable-bordered datatable-head-custom',
					scroll: true,
					height: 600,
					footer: false
				},
				checkbox: true,
				columns: [
					{
						field: 'Kelas',
						title: 'Kelas',
						width: 100,
						template: function (row) {
							if (row.Kelas === "KOSONG") {
								return '<span class="label font-weight-bold label-lg label-light-danger label-inline">KOSONG</span>';
							} else {
								return '<span class="label font-weight-bold label-lg label-light-default label-inline">' + row.Kelas + '</span>';
							}
						}
					},
					{
						field: 'Tingkat',
						title: 'Tingkat',
						width: 70,
						template: function (row) {

							return '<span class="label font-weight-bold label-lg label-light-default label-inline">' + row.Tingkat + '</span>';
						}
					},
					{
						field: 'Status',
						title: 'Status',
						width: 110,
						template: function (row) {
							var status = {
								0: { 'title': 'BELUM UPLOAD', 'class': 'label-light-warning' },
								1: { 'title': 'SUDAH UPLOAD', 'class': ' label-light-success' },
							};
							return '<span class="label label-lg font-weight-bold ' + status[row.Status].class + ' label-inline">' + status[row.Status].title + '</span>';
						}
					},
					{
						field: 'TA',
						title: 'TA',
						width: 80,
					},
				]
			});

			var count_data = null;

			datatable.on(
				'datatable-on-check datatable-on-uncheck',
				function (e) {
					var checkedNodes = $.makeArray(datatable.getSelectedRecords().find('.checkbox-single > [type="checkbox"]').
						map(function (i, chk) {
							return $(chk).val();
						}));
					count_data = checkedNodes.join(',');
				});

			$('#frm-excel').on('submit', function () {
				document.getElementById('id_check_excel').value = count_data;
			});

			$('#kt_datatable_search_genderclass').on('change', function () {
				datatable.search($(this).val().toLowerCase(), 'JK');
			});

			$('#kt_datatable_search_genderclass').selectpicker();
		};

		// demo initializer
		var demo2 = function () {

			var datatable = $('#kt_datatable_presence_class').KTDatatable({
				data: {
					pageSize: "500",
				},
				search: {
					input: $('#kt_datatable_search_query_class'),
					key: 'generalSearch',
				},
				toolbar: {
					items: {
						pagination: { pageSizeSelect: [500, 1000] }
					}
				},
				layout: {
					class: 'datatable-bordered datatable-head-custom',
					scroll: true,
					height: 600,
					footer: false
				},
				checkbox: true,
				columns: [
					{
						field: 'Kelas',
						title: 'Kelas',
						width: 100,
						template: function (row) {
							if (row.Kelas === "KOSONG") {
								return '<span class="label font-weight-bold label-lg label-light-danger label-inline">KOSONG</span>';
							} else {
								return '<span class="label font-weight-bold label-lg label-light-default label-inline">' + row.Kelas + '</span>';
							}
						}
					},
					{
						field: 'Tingkat',
						title: 'Tingkat',
						width: 70,
						template: function (row) {

							return '<span class="label font-weight-bold label-lg label-light-default label-inline">' + row.Tingkat + '</span>';
						}
					},
					{
						field: 'Sakit',
						title: 'Sakit',
						width: 40,
					},
					{
						field: 'Izin',
						title: 'Izin',
						width: 40,
					},
					{
						field: 'Alpha',
						title: 'Alpha',
						width: 45,
					},

					{
						field: 'TA',
						title: 'TA',
						width: 80,
					},
				]
			});

			var count_data = null;

			datatable.on(
				'datatable-on-check datatable-on-uncheck',
				function (e) {
					var checkedNodes = $.makeArray(datatable.getSelectedRecords().find('.checkbox-single > [type="checkbox"]').
						map(function (i, chk) {
							return $(chk).val();
						}));
					count_data = checkedNodes.join(',');
				});

			$('#frm-excel').on('submit', function () {
				document.getElementById('id_check_excel').value = count_data;
			});

			$('#kt_datatable_search_gendertrans').on('change', function () {
				datatable.search($(this).val().toLowerCase(), 'JK');
			});

			$('#kt_datatable_search_gendertrans').selectpicker();
		};

		return {
			// Public functions
			init: function () {
				// init dmeo
				demo();
				demo2();
			},
		};
	}();

	jQuery(document).ready(function () {
		KTDatatableHtmlTableDemo.init();
	});

	/******/
})()
	;
//# sourceMappingURL=html-table.js.map
