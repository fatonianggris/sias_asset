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

			var datatable = $('#kt_datatable_student').KTDatatable({
				data: {
					pageSize: "10",
				},
				search: {
					input: $('#kt_datatable_search_query'),
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
				columns: [{
					field: '#',
					title: '#',
					sortable: false,
					width: 20,
					selector: true,
					textAlign: 'center',
				},
				{
					field: 'Nama Siswa',
					title: 'Nama Siswa',
					width: 240
				},
				{
					field: 'NISN',
					title: 'NISN',
					width: 80
				},
				{
					field: 'JK',
					title: 'JK',
					width: 30,
					template: function (row) {
						if (row.JK === "" || row.JK === null) {
							return '<span class="label font-weight-bold label-lg label-light-danger label-inline">?</span>';
						} else {
							var status = {
								1: { 'title': 'L', 'class': 'label-light-primary' },
								2: { 'title': 'P', 'class': 'label-light-warning' }
							};
							return '<span class="label label-lg font-weight-bold ' + status[row.JK].class + ' label-inline">' + status[row.JK].title + '</span>';
						}
					}
				},
				{
					field: 'Level',
					title: 'Level',
					width: 60,
					autoHide: false,
					// callback function support for column rendering
					template: function (row) {
						var status = {
							1: {
								'title': 'KB',
								'class': 'label-light-info'
							},
							2: {
								'title': 'TK',
								'class': 'label-light-primary'
							},
							3: {
								'title': 'SD',
								'class': 'label-light-success'
							},
							4: {
								'title': 'SMP',
								'class': 'label-light-warning'
							},
							5: {
								'title': 'SMA',
								'class': 'label-light-danger'
							}

						};
						return '<span class="label font-weight-bold label-lg ' + status[row.Level].class + ' label-inline">' + status[row.Level].title + '</span>';
					},
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
					field: 'Jalur',
					title: 'Jalur',
					width: 70,
					template: function (row) {
						var status = {
							1: { 'title': 'Reguler', 'class': 'label-light-info' },
							2: { 'title': 'ICP', 'class': ' label-light-success' },
						};
						return '<span class="label label-lg font-weight-bold ' + status[row.Jalur].class + ' label-inline">' + status[row.Jalur].title + '</span>';
					}
				},
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
					field: 'Status',
					title: 'Status',
					width: 70,
					template: function (row) {
						var status = {
							0: { 'title': 'NONAKTIF', 'class': 'label-light-danger' },
							1: { 'title': 'AKTIF', 'class': ' label-light-success' },
							2: { 'title': 'LULUS', 'class': ' label-light-warning' },
							3: { 'title': 'KELUAR', 'class': ' label-light-danger' },
						};
						return '<span class="label label-lg font-weight-bold ' + status[row.Status].class + ' label-inline">' + status[row.Status].title + '</span>';
					}
				},
				{
					field: 'TA',
					title: 'TA',
					width: 100,
				}
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
			$('#kt_datatable_search_gender').on('change', function () {
				datatable.search($(this).val().toLowerCase(), 'JK');
			});

			$('#kt_datatable_search_status_student').on('change', function () {
				datatable.search($(this).val().toLowerCase(), 'Status');
			});

			$('#kt_datatable_search_gender', '#kt_datatable_search_status_student').selectpicker();

		};

		return {
			// Public functions
			init: function () {
				// init dmeo
				demo();
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
