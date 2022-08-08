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
                        title: 'Nama & NIS',
                        width: '200',
                        render: function (data, type, full, meta) {
                            var output;
                            output = `
                                <div class="d-flex align-items-center">                                   
                                    <div class="ml-3">
                                        <span class="text-warning font-weight-boldest text-hover-primary">` + full[1] + `</span>
                                        <span class="text-dark-75 font-weight-bold line-height-sm font-size-sm d-block pb-2">(` + full[3] + `)</span>
                                        
                                    </div>
                                </div>`;

                            return output;
                        },
                    },
                    {
                        targets: 2,
                        width: '80',
                        render: function (data, type, full, meta) {
                            var status = {
                                1: {'title': 'DIUPLOAD', 'class': 'label-light-success'},
                                0: {'title': 'DIPROSES', 'class': 'label-light-warning'},
                            };
                            if (typeof status[data] === 'undefined') {
                                return data;
                            }
                            return '<span class="label label-lg font-weight-bold ' + status[data].class + ' label-inline">' + status[data].title + '</span>';
                        },
                    },
                    {
                        targets: 3,
                        width: '10',
                        visible: false,
                    },
                    {
                        targets: 4,
                        width: '30',
                        render: function (data, type, full, meta) {
                            var status = {
                                1: {'title': 'KB', 'class': 'label-light-primary'},
                                2: {'title': 'TK', 'class': 'label-light-success'},
                                3: {'title': 'SD', 'class': 'label-light-warning'},
                                4: {'title': 'SMP', 'class': 'label-light-danger'},
                                5: {'title': 'SMA', 'class': 'label-light-default'},
                            };
                            if (typeof status[data] === 'undefined') {
                                return data;
                            }
                            return '<span class="label label-lg font-weight-bold ' + status[data].class + ' label-inline">' + status[data].title + '</span>';
                        },
                    },
                    {
                        targets: 5,
                        width: '80',
                        orderable: false,
                    },
                    {
                        targets: 6,
                        width: '100',
                        orderable: false,
                    },
                    {
                        targets: 8,
                        width: '80',
                        render: function (data, type, full, meta) {
                            var status = {
                                GANJIL: {'title': 'GANJIL', 'class': 'label-light-warning'},
                                GENAP: {'title': 'GENAP', 'class': 'label-light-success'},
                            };
                            if (typeof status[data] === 'undefined') {
                                return data;
                            }
                            return '<span class="label label-lg font-weight-bold ' + status[data].class + ' label-inline">' + status[data].title + '</span>';
                        },
                    },
                    {
                        targets: -1,
                        title: 'Aksi',
                        width: '50',
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

    /******/ })()
        ;
//# sourceMappingURL=advanced-search.js.map