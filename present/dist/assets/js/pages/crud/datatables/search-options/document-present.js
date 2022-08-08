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
                order: [[1, 'desc']],
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
                        title: 'Nama & Tanggal',
                        width: '200',
                        render: function (data, type, full, meta) {

                            var output;

                            var stateNo = KTUtil.getRandomInt(0, 6);
                            var states = [
                                'success',
                                'danger',
                                'success',
                                'warning',
                                'dark',
                                'primary',
                                'info'];

                            var state = states[stateNo];
                            let date = new Date(full[9]);
                            let day = date.toLocaleString('id-ID', {weekday: 'long'});

                            output = `
                                <div class="d-flex align-items-center">
                                    <div class="symbol symbol-50 symbol-light-` + state + `" flex-shrink-0">
                                        <div class="symbol-label font-size-h5">` + full[1].substring(0, 1) + `</div>
                                    </div>
                                    <div class="ml-3">
                                        <span class="text-dark-75 font-weight-bold line-height-sm d-block pb-2">` + day + `,` + full[9].toString().split("-").reverse().join("/") + `</span>
                                        <span class="text-warning text-hover-primary">` + full[1] + `</span>
                                    </div>
                                </div>`;

                            return output;
                        },
                    },
                    {
                        targets: 2,
                        width: '100',
                        render: function (data, type, full, meta) {
                            var status = {
                                0: {'title': 'BELUM', 'class': 'label-light-primary'},
                                1: {'title': 'HADIR', 'class': ' label-light-success'},
                                2: {'title': 'IZIN', 'class': ' label-light-warning'},
                                3: {'title': 'ALPHA ', 'class': ' label-light-danger'},

                            };
                            if (typeof status[data] === 'undefined') {
                                return data;
                            }
                            return '<span class="label label-lg font-weight-bold ' + status[data].class + ' label-inline">' + status[data].title + '</span>';
                        },
                    },
                    {
                        targets: 5,
                        width: '100',
                        render: function (data, type, full, meta) {
                            var status = {
                                0: {'title': 'BELUM', 'class': 'label-light-primary'},
                                1: {'title': 'HADIR', 'class': ' label-light-success'},
                                2: {'title': 'IZIN', 'class': ' label-light-warning'},
                                3: {'title': 'ALPHA ', 'class': ' label-light-danger'},

                            };
                            if (typeof status[data] === 'undefined') {
                                return data;
                            }
                            return '<span class="label label-lg font-weight-bold ' + status[data].class + ' label-inline">' + status[data].title + '</span>';
                        },
                    },

                    {
                        targets: 8,
                        width: '100',
                        visible: false,
                    },
                    {
                        targets: 9,
                        width: '100',
                        visible: false,
                    },
                    {
                        targets: 10,
                        width: '100',
                        orderable: false,
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
                console.log(params);
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
            var arrows = {
                leftArrow: '<i class="la la-angle-left"></i>',
                rightArrow: '<i class="la la-angle-right"></i>'
            }
            $("#kt_datepicker_date").datepicker({
                todayHighlight: true,
                orientation: "bottom left",
                templates: arrows,
                format: 'dd/mm/yyyy'
            }).css('z-index', 4000);
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