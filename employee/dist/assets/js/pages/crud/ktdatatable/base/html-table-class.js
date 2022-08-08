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

            var datatable = $('#kt_datatable_class').KTDatatable({
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
                        field: 'NamaKelas',
                        title: 'NamaKelas',
                        width: 180
                    },
                    {
                        field: 'Tingkat',
                        title: 'Tingkat',
                        width: 240,
                        autoHide: false,
                        // callback function support for column rendering
                        template: function (row) {
                            var status = {
                                1: {
                                    'title': 'Kelompok Bermain (KB)',
                                    'class': 'label-light-info'
                                },
                                2: {
                                    'title': 'Taman Kanak-kanak (TK)',
                                    'class': 'label-light-primary'
                                },
                                3: {
                                    'title': 'Sekolah Dasar (SD)',
                                    'class': 'label-light-success'
                                },
                                4: {
                                    'title': 'Sekolah Menengah Pertama (SMP)',
                                    'class': 'label-light-warning'
                                },
                                5: {
                                    'title': 'Sekolah Menengah Atas (SMA)',
                                    'class': 'label-light-danger'
                                },
                                6: {
                                    'title': 'UMUM',
                                    'class': 'label-light-default'
                                }
                            };
                            return '<span class="label font-weight-bold label-lg ' + status[row.Tingkat].class + ' label-inline">' + status[row.Tingkat].title + '</span>';
                        },
                    },
                    {
                        field: 'Tanggal',
                        title: 'Tanggal',
                        width: 90,
                        template: function (row) {
                            return '<span class="label font-weight-bold label-lg label-light-default label-inline">' + row.Tanggal + '</span>';
                        }
                    },
                ]
            });

            $('#kt_datatable_search_class').on('change', function () {
                datatable.search($(this).val().toLowerCase(), 'Tingkat');
            });

            $('#kt_datatable_search_class').selectpicker();
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