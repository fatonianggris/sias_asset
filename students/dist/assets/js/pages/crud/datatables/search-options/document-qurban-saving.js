/******/ (() => { // webpackBootstrap
    /******/ 	"use strict";
	var __webpack_exports__ = {};
	/*!*******************************************************************************!*\
	 !*** ../demo1/src/js/pages/crud/datatables/search-options/advanced-search.js ***!
	 \*******************************************************************************/

	var KTDatatablesSearchOptionsAdvancedSearch = function () {

		$.fn.dataTable.Api.register('column().title()', function () {
			return $(this.header()).text().trim();
		});

		var initTable1 = function () {
			// begin first table
			var table = $('#kt_datatable').DataTable({
				responsive: true,
				// Pagination settings
				dom: `<'row'<'col-sm-12'tr>>
			<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,
				// read more: https://datatables.net/examples/basic_init/dom.html
				language: {
					'lengthMenu': 'Display _MENU_',
				},
				headerCallback: function (row, data, start, end, display) {
					row.getElementsByTagName('th')[0].innerHTML = `
                    `;
				},
				lengthMenu: [[-1], ["All"]],
				pageLength: -1,
				searchDelay: 500,
				scrollY: '60vh',
				scrollX: true,
				scrollCollapse: true,
				processing: true,
				columnDefs: [
					{
						targets: 0,
						orderable: false,
						width: '0',
						checkboxes: {
							'selectRow': false
						},
						render: function (data, type, full, meta) {
							return ``;
						},
					},
					{
						targets: 1,
						title: 'TRANSAKSI',
						width: '200',
						render: function (data, type, full, meta) {
							var output;
							var nominal;
							if (parseInt(full[7].split('.').join("")) !== 0) {
								nominal = full[7];
							} else if (parseInt(full[8].split('.').join("")) !== 0) {
								nominal = full[8];
							}
							output = `
                                <div class="d-flex align-items-center">
                                    <div class="">
                                        <span class="text-warning font-weight-boldest text-hover-primary">` + full[1] + `</span><br>
                                        <span class="text-danger font-weight-boldest font-size-xs"> Rp.` + nominal + ` </span>
										<span class="text-dark font-weight-bolder font-size-xs">- ` + full[5] + `</span>
                                    </div>
                                </div>`;
							return output;
						},
					},
					{
						targets: 2,
						title: 'STATUS',
						width: '80',
						render: function (data, type, full, meta) {
							var status = {
								1: { 'title': 'KREDIT', 'class': 'label-light-success' },
								2: { 'title': 'DEBET', 'class': 'label-light-warning' },
							};
							if (typeof status[data] === 'undefined') {
								return data;
							}
							return '<span class="label label-lg font-weight-bolder ' + status[data].class + ' label-inline">' + status[data].title + '</span>';
						},
					},
					{
						targets: 3,
						width: '30',
						render: function (data, type, full, meta) {
							var status = {
								1: { 'title': 'KB', 'class': 'label-light-primary' },
								2: { 'title': 'TK', 'class': 'label-light-success' },
								3: { 'title': 'SD', 'class': 'label-light-warning' },
								4: { 'title': 'SMP', 'class': 'label-light-danger' },
								6: { 'title': 'DC', 'class': 'label-light-default' },
							};
							if (typeof status[data] === 'undefined') {
								return data;
							}
							return '<span class="label label-lg font-weight-bold ' + status[data].class + ' label-inline">' + status[data].title + '</span>';
						},
					},
					{
						targets: 4,
						width: '80',
						orderable: false,
					},
					{
						targets: 5,
						width: '100',
						orderable: false,
					},
					{
						targets: 6,
						width: '50',
						orderable: false,
					},
					{
						targets: 7,
						width: '80',
						orderable: false,
						render: function (data, type, full, meta) {
							var nominal;
							var class_name;
							if (parseInt(full[7].split('.').join("")) !== 0) {
								nominal = full[7];
								class_name = "text-success";
							} else {
								nominal = 0;
								class_name = "text-dark";
							}
							return '<span class="font-weight-bolder ' + class_name + '">' + nominal + '</span>';
						},
					},
					{
						targets: 8,
						width: '80',
						orderable: false,
						render: function (data, type, full, meta) {
							var nominal;
							var class_name;
							if (parseInt(full[8].split('.').join("")) !== 0) {
								nominal = full[8];
								class_name = "text-danger";
							} else {
								nominal = 0;
								class_name = "text-dark";
							}
							return '<span class="font-weight-bolder ' + class_name + '">' + nominal + '</span>';
						},
					},
					{
						targets: 9,
						width: '80',
						orderable: false,
					},

				],
			});

			$('#kt_search').on('click', function (e) {
				e.preventDefault();
				var params = {};
				$('.datatable-input').each(function () {
					var i = $(this).data('col-index');
					if (params[i]) {
						params[i] += '|' + $(this).val();
					} else {
						params[i] = $(this).val();
					}

				});

				$.each(params, function (i, val) {
					// apply search params to datatable
					table.column(i).search(val ? val : '', false, false);
				});
				table.table().draw();
			});


			$('#kt_reset').on('click', function (e) {
				e.preventDefault();
				$('.datatable-input').each(function () {
					$(this).val('');
					table.column($(this).data('col-index')).search('', false, false);
				});
				table.table().draw();
			});

			//
			//            $('#frm-excel').on('submit', function () {
			//                var rows_selected = table.column(0).checkboxes.selected();
			//                document.getElementById('id_check_excel').value = rows_selected.join(",");
			//            });

			//                $('#frm-form').on('submit', function () {
			//                    document.getElementById('id_check_form').value = count_data;
			//                });
			//
			//                $('#frm-files').on('submit', function () {
			//                    document.getElementById('id_check_files').value = count_data;
			//                });


		};

		return {
			//main function to initiate the module
			init: function () {
				initTable1();
			},

		};

	}();

	jQuery(document).ready(function () {
		KTDatatablesSearchOptionsAdvancedSearch.init();
	});

	/******/
})()
	;
//# sourceMappingURL=advanced-search.js.map
