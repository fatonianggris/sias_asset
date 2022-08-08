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

            var datatable = $('#kt_datatable_grade').KTDatatable({
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
                        field: 'Nama Tingkat',
                        title: 'Nama Tingkat',
                        width: 200
                    },
                    {
                        field: 'Level',
                        title: 'Level',
                        width: 100,
                        autoHide: false,
                        // callback function support for column rendering
                        template: function (row) {
                            var status = {
                                1: {
                                    'title': 'KB',
                                    'class': ' label-light-success'
                                },
                                2: {
                                    'title': 'TK',
                                    'class': ' label-light-info'
                                },
                                3: {
                                    'title': 'SD',
                                    'class': ' label-light-primary'
                                },
                                4: {
                                    'title': 'SMP',
                                    'class': ' label-light-warning'
                                },
                                5: {
                                    'title': 'SMA',
                                    'class': ' label-light-danger'
                                },
                                6: {
                                    'title': 'UMUM',
                                    'class': ' label-light-default'
                                }
                            };
                            return '<span class="label font-weight-bold label-lg ' + status[row.Level].class + ' label-inline">' + status[row.Level].title + '</span>';
                        },

                    }, {
                        field: 'Tanggal',
                        title: 'Tanggal',
                        width: 150,
                        template: function (row) {
                            return '<span class="label font-weight-bold label-lg label-light-default label-inline">' + row.Tanggal + '</span>';
                        }
                    }

                ]
            });

            $('#kt_datatable_search_grade').on('change', function () {
                datatable.search($(this).val().toLowerCase(), 'Level');
            });

            $('#kt_datatable_search_grade').selectpicker();
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