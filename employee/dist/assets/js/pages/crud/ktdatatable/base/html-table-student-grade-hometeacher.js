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

            var datatable = $('#kt_datatable_student_class').KTDatatable({
                data: {
                    pageSize: "10",
                },
                search: {
                    input: $('#kt_datatable_search_query_class'),
                    key: 'generalSearch',
                },
                toolbar: {
                    items: {
                        pagination: {pageSizeSelect: [10, 50, 100]}
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
                        field: 'JK',
                        title: 'JK',
                        width: 30,
                        template: function (row) {
                            if (row.JK === "" || row.JK === null) {
                                return '<span class="label font-weight-bold label-lg label-light-danger label-inline">?</span>';
                            } else {
                                var status = {
                                    1: {'title': 'L', 'class': 'label-light-primary'},
                                    2: {'title': 'P', 'class': 'label-light-warning'}
                                };
                                return '<span class="label label-lg font-weight-bold ' + status[row.JK].class + ' label-inline">' + status[row.JK].title + '</span>';
                            }
                        }
                    },
                   
                    {
                        field: 'Status',
                        title: 'Status',
                        width: 80,
                        template: function (row) {
                            var status = {
                                0: {'title': 'INCLASS', 'class': 'label-light-success'},
                                1: {'title': 'TRANSISI', 'class': 'label-light-danger'}
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

            $('#kt_datatable_search_genderclass').on('change', function () {
                datatable.search($(this).val().toLowerCase(), 'JK');
            });

            $('#kt_datatable_search_genderclass').selectpicker();
        };

        // demo initializer
        var demo2 = function () {

            var datatable = $('#kt_datatable_student_class_transition').KTDatatable({
                data: {
                    pageSize: "500",
                },
                search: {
                    input: $('#kt_datatable_search_query_class'),
                    key: 'generalSearch',
                },
                toolbar: {
                    items: {
                        pagination: {pageSizeSelect: [500, 1000]}
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
                        field: 'JK',
                        title: 'JK',
                        width: 30,
                        template: function (row) {
                            var status = {
                                1: {'title': 'L', 'class': 'label-light-primary'},
                                2: {'title': 'P', 'class': 'label-light-warning'}
                            };
                            return '<span class="label label-lg font-weight-bold ' + status[row.JK].class + ' label-inline">' + status[row.JK].title + '</span>';
                        }
                    },
                    
                    {
                        field: 'Status',
                        title: 'Status',
                        width: 85,
                        template: function (row) {
                            var status = {
                                0: {'title': 'INCLASS', 'class': 'label-light-success'},
                                1: {'title': 'TRANSISI', 'class': 'label-light-danger'}
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

            $('#kt_datatable_search_gendertrans').on('change', function () {
                datatable.search($(this).val().toLowerCase(), 'JK');
            });

            $('#kt_datatable_search_gendertrans').selectpicker();
        };

        return {
            // Public functions
            init: function () {
                // init dmeo
                demo();
                demo2();
            },
        };
    }();

    jQuery(document).ready(function () {
        KTDatatableHtmlTableDemo.init();
    });

    /******/ })()
        ;
//# sourceMappingURL=html-table.js.map
