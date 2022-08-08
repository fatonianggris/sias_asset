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

			var datatable = $('#kt_datatable_presence_academic_emp_all_month').KTDatatable({
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
					width: 10,
					selector: true,
					textAlign: 'center',
				},
				{
					field: 'Nama Pegawai',
					title: 'Nama Pegawai',
					width: 190
				},
				{
					field: 'Hadir Masuk',
					title: 'Hadir Masuk',
					width: 55
				},
				{
					field: 'Izin Masuk',
					title: 'Izin Masuk',
					width: 60
				},
				{
					field: 'Alpha Masuk',
					title: 'Alpha Masuk',
					width: 55
				},

				{
					field: 'Hadir Pulang',
					title: 'Hadir Pulang',
					width: 55
				},

				{
					field: 'Izin Pulang',
					title: 'Izin Pulang',
					width: 55
				},

				{
					field: 'Alpha Pulang',
					title: 'Alpha Pulang',
					width: 55
				},
				{
					field: 'Telat Masuk',
					title: 'Telat Masuk',
					width: 55
				},

				{
					field: 'Telat Pulang',
					title: 'Telat Pulang',
					width: 55
				},
				{
					field: 'Bulan',
					title: 'Bulan',
					width: 60,
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

			$('#kt_datatable_search_month').on('change', function () {
				datatable.search($(this).val().toLowerCase(), 'Bulan');
			});
			$('#kt_datatable_search_schoolyear').on('change', function () {
				datatable.search($(this).val().toLowerCase(), 'TA');
			});

			$('#kt_datatable_search_month', '#kt_datatable_search_schoolyear').selectpicker();
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
