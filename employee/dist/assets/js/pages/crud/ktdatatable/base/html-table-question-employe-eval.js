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

			var datatable = $('#kt_datatable_question_employee').KTDatatable({
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
				columns: [
					{
						field: 'Nama Pegawai',
						title: 'Nama Pegawai',
						width: 210
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
						field: 'Jabatan',
						title: 'Jabatan',
						width: 95,
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
									'title': 'KB/TK',
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
								},
								6: {
									'title': 'UMUM',
									'class': 'label-light-info'
								},

							};
							return '<span class="label font-weight-bold label-lg ' + status[row.Level].class + ' label-inline">' + status[row.Level].title + '</span>';
						},
					},
					{
						field: 'Pegawai',
						title: 'Pegawai',
						width: 90,
						template: function (row) {
							var status = {
								1: { 'title': 'Tetap', 'class': 'label-light-success' },
								2: { 'title': 'Tdk Tetap', 'class': ' label-light-warning' },
								3: { 'title': 'Honorer', 'class': ' label-light-danger' },
							};
							return '<span class="label label-lg font-weight-bold ' + status[row.Pegawai].class + ' label-inline">' + status[row.Pegawai].title + '</span>';
						}
					},
					{
						field: 'JP',
						title: 'JP',
						width: 50,
					},
					{
						field: 'Masa Jabatan',
						title: 'Masa Jabatan',
						width: 70,
					},
					{
						field: 'Penilaian',
						title: 'Penilaian',
						width: 90,
						template: function (row) {
							var status = {
								0: { 'title': 'ATASAN', 'class': 'label-light-success' },
								1: { 'title': 'SEJAWAT', 'class': ' label-light-warning' },
								2: { 'title': 'PERSONAL', 'class': ' label-light-info' }
							};
							return '<span class="label label-lg font-weight-bold ' + status[row.Penilaian].class + ' label-inline">' + status[row.Penilaian].title + '</span>';
						}
					},
					{
						field: 'Status',
						title: 'Status',
						width: 95,
						template: function (row) {
							var status = {
								0: { 'title': 'BELUM DIISI', 'class': 'label-light-danger' },
								1: { 'title': 'SUDAH DIISI', 'class': ' label-light-success' }
							};
							return '<span class="label label-lg font-weight-bold ' + status[row.Status].class + ' label-inline">' + status[row.Status].title + '</span>';
						}
					},
					{
						field: 'Aksi',
						title: 'Aksi',
						width: 50,
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
			$('#kt_datatable_search_grade').on('change', function () {
				datatable.search($(this).val().toLowerCase(), 'Level');
			});
			$('#kt_datatable_search_type_emp').on('change', function () {
				datatable.search($(this).val().toLowerCase(), 'Pegawai');
			});
			$('#kt_datatable_search_type_eval').on('change', function () {
				datatable.search($(this).val().toLowerCase(), 'Penilaian');
			});
			$('#kt_datatable_search_stat').on('change', function () {
				datatable.search($(this).val().toLowerCase(), 'Status');
			});

			$('#kt_datatable_search_class', '#kt_datatable_search_grade', '#kt_datatable_search_type_emp', '#kt_datatable_search_type_eval', '#kt_datatable_search_stat').selectpicker();
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
