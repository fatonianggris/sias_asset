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

            var datatable = $('#kt_datatable_position').KTDatatable({
                data: {
                    saveState: {cookie: false},
                    pageSize: 5
                },
                search: {
                    input: $('#kt_datatable_search_query'),
                    key: 'generalSearch',
                },
                layout: {
                    class: 'datatable-bordered datatable-head-custom',
                },
                columns: [{
                        field: 'Nama Jabatan',
                        title: 'Nama Jabatan',
                        width: 180
                    },
                    {
                        field: 'Level',
                        title: 'Level',
                        width: 150,
                        autoHide: false,
                        // callback function support for column rendering
                        template: function (row) {
                            var status = {
                                0: {
                                    'title': 'Admin',
                                    'class': 'label-light-primary'
                                },
                                1: {
                                    'title': 'Jabatan Internal',
                                    'class': 'label-light-warning'
                                },
                                2: {
                                    'title': 'Jabatan Fungsional',
                                    'class': 'label-light-info'
                                },
                                3: {
                                    'title': 'Jabatan Eksternal',
                                    'class': 'label-light-success'
                                }
                            };
                            return '<span class="label font-weight-bold label-lg ' + status[row.Level].class + ' label-inline">' + status[row.Level].title + '</span>';
                        },
                    },
                    {
                        field: 'Tingkat',
                        title: 'Tingkat',
                        width: 100,
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
                            return '<span class="label font-weight-bold label-lg ' + status[row.Tingkat].class + ' label-inline">' + status[row.Tingkat].title + '</span>';
                        },
                    },
                    {
                        field: 'Tanggal',
                        title: 'Tanggal',
                        width: 150,
                        template: function (row) {
                            return '<span class="label font-weight-bold label-lg label-light-default label-inline">' + row.Tanggal + '</span>';
                        }
                    },
                ]
            });

            $('#kt_datatable_search_position').on('change', function () {
                datatable.search($(this).val().toLowerCase(), 'Level');
            });

            $('#kt_datatable_search_grade').on('change', function () {
                datatable.search($(this).val().toLowerCase(), 'Tingkat');
            });

            $('#kt_datatable_search_position,kt_datatable_search_grade').selectpicker();
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

    /******/ })()
        ;
//# sourceMappingURL=html-table.js.map