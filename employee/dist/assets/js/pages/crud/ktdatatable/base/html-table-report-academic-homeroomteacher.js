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

			var datatable = $('#kt_datatable_report_academic_homeroom').KTDatatable({
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
					width: 220
				},
				{
					field: 'Email',
					title: 'Email',
					width: 170
				},
				{
					field: 'JK',
					title: 'JK',
					width: 30,
					template: function (row) {
						var status = {
							1: { 'title': 'L', 'class': 'label-light-primary' },
							2: { 'title': 'P', 'class': 'label-light-warning' }
						};
						return '<span class="label label-lg font-weight-bold ' + status[row.JK].class + ' label-inline">' + status[row.JK].title + '</span>';
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
					field: 'TA',
					title: 'TA',
					width: 80,
				},
				{
					field: 'StatusSiswa',
					title: 'StatusSiswa',
					width: 10,
					visible: false,
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
			$('#kt_datatable_search_schoolyear').on('change', function () {
				datatable.search($(this).val().toLowerCase(), 'TA');
			});
			$('#kt_datatable_search_status_student').on('change', function () {
				datatable.search($(this).val().toLowerCase(), 'Kelas');
			});
			$('#kt_datatable_search_status_report').on('change', function () {
				datatable.search($(this).val().toLowerCase(), 'Status');
			});
			$('#kt_datatable_search_status_report', '#kt_datatable_search_gender', '#kt_datatable_search_status_student', '#kt_datatable_search_schoolyear').selectpicker();
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
