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

			var datatable = $('#kt_datatable_presence_academic_emp_all').KTDatatable({
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
					field: 'Nama Pegawai',
					title: 'Nama Pegawai',
					width: 230
				},
				{
					field: 'StatusMasuk',
					title: 'Status Masuk',
					width: 60,
					template: function (row) {
						var status = {
							0: { 'title': 'BELUM', 'class': 'label-light-primary' },
							1: { 'title': 'HADIR', 'class': 'label-light-success' },
							2: { 'title': 'IZIN', 'class': 'label-light-warning' },
							3: { 'title': 'ALPHA', 'class': 'label-light-danger' }
						};
						return '<span class="label label-lg font-weight-bold ' + status[row.StatusMasuk].class + ' label-inline">' + status[row.StatusMasuk].title + '</span>';
					}
				},
				{
					field: 'Waktu Masuk',
					title: 'Waktu Masuk',
					width: 60
				},
				{
					field: 'Telat Masuk',
					title: 'Telat Masuk',
					width: 60
				},

				{
					field: 'Waktu Pulang',
					title: 'Waktu Pulang',
					width: 60
				},
				{
					field: 'StatusPulang',
					title: 'Status Pulang',
					width: 60,
					template: function (row) {
						var status = {
							0: { 'title': 'BELUM', 'class': 'label-light-primary' },
							1: { 'title': 'HADIR', 'class': 'label-light-success' },
							2: { 'title': 'IZIN', 'class': 'label-light-warning' },
							3: { 'title': 'ALPHA', 'class': 'label-light-danger' }
						};
						return '<span class="label label-lg font-weight-bold ' + status[row.StatusPulang].class + ' label-inline">' + status[row.StatusPulang].title + '</span>';
					}
				},
				{
					field: 'Telat Pulang',
					title: 'Telat Pulang',
					width: 60
				},

				{
					field: 'Tanggal',
					title: 'Tanggal',
					width: 80,
				},
				{
					field: 'TA',
					title: 'TA',
					width: 70,
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

			$('#kt_datatable_search_in').on('change', function () {
				datatable.search($(this).val().toLowerCase(), 'StatusMasuk');
			});
			$('#kt_datatable_search_out').on('change', function () {
				datatable.search($(this).val().toLowerCase(), 'StatusPulang');
			});
			$('#kt_datatable_search_date').on('change', function () {
				datatable.search($(this).val().toLowerCase(), 'Tanggal');
			});
			$('#kt_datatable_search_schoolyear').on('change', function () {
				datatable.search($(this).val().toLowerCase(), 'TA');
			});

			$('#kt_datatable_search_in', '#kt_datatable_search_out', '#kt_datatable_search_date', '#kt_datatable_search_schoolyear').selectpicker();
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
