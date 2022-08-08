var KTDatatablesSearchOptionsAdvancedSearch = function () {

	$.fn.dataTable.Api.register('column().title()', function () {
		return $(this.header()).text().trim();
	});

	var initTable1 = function () {
		var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
			"Juli", "Agustus", "September", "Oktober", "November", "Desember"];
		// begin first table
		var table = $('#kt_datatable_present_month').DataTable({
			responsive: true,
			// Pagination settings
			dom: `<'row'<'col-sm-12'tr>>
			<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,
			// read more: https://datatables.net/examples/basic_init/dom.html

			lengthMenu: [5, 10, 25, 50],
			pageLength: 10,
			ordering: false,
			language: {
				'lengthMenu': 'Display _MENU_',
			},
			headerCallback: function (row, data, start, end, display) {
				row.getElementsByTagName('th')[0].innerHTML = `
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
				url: HOST_URL + 'employee/employe/presence/get_data_presence_month',
				type: 'POST',
				data: {
					// parameters for custom backend script demo
					columnsDef: [
						'id_pegawai', 'nama_lengkap', 'hadir_masuk', 'izin_masuk', 'alpha_masuk', 'hadir_pulang',
						'izin_pulang', 'alpha_pulang', 'telat_masuk', 'telat_pulang', 'bulan', 'tahun_ajaran'],
				},
			},
			columns: [
				{ data: 'id_pegawai' },
				{ data: 'nama_lengkap' },
				{ data: 'hadir_masuk' },
				{ data: 'izin_masuk' },
				{ data: 'alpha_masuk' },
				{ data: 'hadir_pulang' },
				{ data: 'izin_pulang' },
				{ data: 'alpha_pulang' },
				{ data: 'telat_masuk' },
				{ data: 'telat_pulang' },
				{ data: 'bulan' },
				{ data: 'tahun_ajaran' },
			],
			columnDefs: [
				{
					targets: 0,
					orderable: false,
					width: '22',
					checkboxes: {
						'selectRow': false
					},
					render: function (data, type, full, meta) {
						return '<label class="checkbox checkbox-single checkbox-primary mb-0">\
						<input type="checkbox" value="' + data + '" class="dt-checkboxes checkable"/>\
						<span></span>\
					</label>';
					},
				},
				{
					targets: 1,
					render: function (data, type, full, meta) {

						if (data === '' || data === null || data === '0') {
							return 'Kosong';
						} else {
							return '<b>' + data + '</b>';
						}
					},
				},
				{
					targets: 10,
					render: function (data, type, full, meta) {

						if (data === '' || data === null || data === '0') {
							return 'Kosong';
						} else {
							return '<span class="label label-lg font-weight-bold label-light-info label-inline">' + months[data] + '</span>';
						}
					},
				},
			],
		});

		$('#frm-excel').on('submit', function () {
			var rows_selected = table.column(0).checkboxes.selected();
			document.getElementById('id_check_excel').value = rows_selected.join(",");
		});

		var filter = function () {
			var val = $.fn.dataTable.util.escapeRegex($(this).val());
			table.column($(this).data('col-index')).search(val ? val : '', false, false).draw();
		};

		$('#kt_search').on('click', function (e) {
			e.preventDefault();
			var params = {};
			$('.datatable-input').each(function () {
				var i = $(this).data('col-index');
				if (params[i]) {
					params[i] += '|' + $(this).val();
				}
				else {
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


//# sourceMappingURL=advanced-search.js.map
