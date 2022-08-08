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
            var table = $('#kt_datatable_dpb').DataTable({
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
                        title: 'Nama & NIS',
                        width: '150',
                        render: function (data, type, full, meta) {
                            var output;

                            if (full[2] == "SUKSES") {
                                output = `
                                <div class="d-flex align-items-center">
                                    <div class="symbol symbol-60 symbol-light-success" flex-shrink-0">
                                        <div class="symbol-label font-size-h5">
                                            <span class="svg-icon svg-icon-success svg-icon-2x">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <rect x="0" y="0" width="24" height="24"/>
                                                        <rect fill="#000000" opacity="0.3" x="2" y="2" width="20" height="20" rx="10"/>
                                                        <path d="M6.16794971,14.5547002 C5.86159725,14.0951715 5.98577112,13.4743022 6.4452998,13.1679497 C6.90482849,12.8615972 7.52569784,12.9857711 7.83205029,13.4452998 C8.9890854,15.1808525 10.3543313,16 12,16 C13.6456687,16 15.0109146,15.1808525 16.1679497,13.4452998 C16.4743022,12.9857711 17.0951715,12.8615972 17.5547002,13.1679497 C18.0142289,13.4743022 18.1384028,14.0951715 17.8320503,14.5547002 C16.3224187,16.8191475 14.3543313,18 12,18 C9.64566871,18 7.67758127,16.8191475 6.16794971,14.5547002 Z" fill="#000000"/>
                                                    </g>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="ml-3">
                                        <span class="text-warning font-weight-boldest text-hover-primary">` + full[1] + `</span>
                                        <span class="text-dark-75 font-weight-bold line-height-sm font-size-sm d-block pt-1">(` + full[4] + `)</span>
                                    </div>
                                </div>`;

                            } else if (full[2] == "PROSES") {
                                output = `
                                <div class="d-flex align-items-center">        
                                    <div class="symbol symbol-60 symbol-light-warning" flex-shrink-0">
                                        <div class="symbol-label font-size-h5">
                                            <span class="svg-icon svg-icon-warning svg-icon-2x">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <rect x="0" y="0" width="24" height="24"/>
                                                        <polygon fill="#000000" opacity="0.3" points="5 15 3 21.5 9.5 19.5"/>
                                                        <path d="M13,2 C18.5228475,2 23,6.4771525 23,12 C23,17.5228475 18.5228475,22 13,22 C7.4771525,22 3,17.5228475 3,12 C3,6.4771525 7.4771525,2 13,2 Z M7.16794971,13.5547002 C8.67758127,15.8191475 10.6456687,17 13,17 C15.3543313,17 17.3224187,15.8191475 18.8320503,13.5547002 C19.1384028,13.0951715 19.0142289,12.4743022 18.5547002,12.1679497 C18.0951715,11.8615972 17.4743022,11.9857711 17.1679497,12.4452998 C16.0109146,14.1808525 14.6456687,15 13,15 C11.3543313,15 9.9890854,14.1808525 8.83205029,12.4452998 C8.52569784,11.9857711 7.90482849,11.8615972 7.4452998,12.1679497 C6.98577112,12.4743022 6.86159725,13.0951715 7.16794971,13.5547002 Z" fill="#000000"/>
                                                    </g>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="ml-3">
                                        <span class="text-warning font-weight-boldest text-hover-primary">` + full[1] + `</span>
                                        <span class="text-dark-75 font-weight-bold line-height-sm font-size-sm d-block pt-1">(` + full[4] + `)</span>
                                        
                                    </div>
                                </div>`;
                            } else if (full[2] == "MENUNGGU") {
                                output = `
                                    <div class="d-flex align-items-center">        
                                        <div class="symbol symbol-60 symbol-light-danger" flex-shrink-0">
                                            <div class="symbol-label font-size-h5">
                                                <span class="svg-icon svg-icon-danger svg-icon-2x">
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                            <rect x="0" y="0" width="24" height="24"/>
                                                            <rect fill="#000000" opacity="0.3" x="2" y="2" width="20" height="20" rx="10"/>
                                                            <path d="M6.16794971,14.5547002 C5.86159725,14.0951715 5.98577112,13.4743022 6.4452998,13.1679497 C6.90482849,12.8615972 7.52569784,12.9857711 7.83205029,13.4452998 C8.9890854,15.1808525 10.3543313,16 12,16 C13.6456687,16 15.0109146,15.1808525 16.1679497,13.4452998 C16.4743022,12.9857711 17.0951715,12.8615972 17.5547002,13.1679497 C18.0142289,13.4743022 18.1384028,14.0951715 17.8320503,14.5547002 C16.3224187,16.8191475 14.3543313,18 12,18 C9.64566871,18 7.67758127,16.8191475 6.16794971,14.5547002 Z" fill="#000000" transform="translate(12.000000, 15.499947) scale(1, -1) translate(-12.000000, -15.499947) "/>
                                                        </g>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="ml-3">
                                            <span class="text-warning font-weight-boldest text-hover-primary">` + full[1] + `</span>
                                            <span class="text-dark-75 font-weight-bold line-height-sm font-size-sm d-block pt-1">(` + full[4] + `)</span>
                                            
                                        </div>
                                    </div>`;
                            }

                            return output;
                        },
                    },
                    {
                        targets: 2,
                        width: '70',

                        render: function (data, type, full, meta) {
                            var status = {
                                SUKSES: { 'title': 'LUNAS', 'class': 'label-light-success' },
                                PROSES: { 'title': 'PROSES', 'class': 'label-light-warning' },
                                MENUNGGU: { 'title': 'TUNGGAK', 'class': 'label-light-danger' },
                            };
                            if (typeof status[data] === 'undefined') {
                                return data;
                            }
                            return '<span class="label label-lg font-weight-bold ' + status[data].class + ' label-inline">' + status[data].title + '</span>';
                        },
                    },
                    {
                        targets: 3,
                        width: '90',
                    },
                    {
                        targets: 4,
                        width: '10',
                        visible: false,
                    },
                    {
                        targets: 5,
                        width: '30',
                        render: function (data, type, full, meta) {
                            var status = {
                                'KB': { 'title': 'KB', 'class': 'label-light-primary' },
                                'TK': { 'title': 'TK', 'class': 'label-light-success' },
                                'SD': { 'title': 'SD', 'class': 'label-light-warning' },
                                'SMP': { 'title': 'SMP', 'class': 'label-light-danger' },
                                'SMA': { 'title': 'SMA', 'class': 'label-light-default' },
                            };
                            if (typeof status[data] === 'undefined') {
                                return data;
                            }
                            return '<span class="label label-lg font-weight-bold ' + status[data].class + ' label-inline">' + status[data].title + '</span>';
                        },
                    },
                    {
                        targets: 6,
                        width: '80',
                        orderable: false,
                    },
                    {
                        targets: 7,
                        width: '90',
                        render: function (data, type, full, meta) {
                            var status = {
                                1: { 'title': 'DPB', 'class': 'label-light-success' },
                                2: { 'title': 'DU', 'class': 'label-light-warning' },
                            };
                            if (typeof status[data] === 'undefined') {
                                return data;
                            }
                            return '<span class="label label-lg font-weight-bold ' + status[data].class + ' label-inline">' + status[data].title + '</span>';
                        },
                    },
                    {
                        targets: 11,
                        width: '80',
                        render: function (data, type, full, meta) {
                            var status = {
                                GANJIL: { 'title': 'GANJIL', 'class': 'label-light-warning' },
                                GENAP: { 'title': 'GENAP', 'class': 'label-light-success' },
                            };
                            if (typeof status[data] === 'undefined') {
                                return data;
                            }
                            return '<span class="label label-lg font-weight-bold ' + status[data].class + ' label-inline">' + status[data].title + '</span>';
                        },
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