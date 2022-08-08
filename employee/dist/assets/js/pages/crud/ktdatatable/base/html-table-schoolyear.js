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

            var datatable = $('#kt_datatable_schoolyear').KTDatatable({
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
                        field: 'Nama Tahun Ajaran',
                        title: 'Nama Tahun Ajaran',
                        width: 200
                    },
                    {
                        field: 'Semester',
                        title: 'Semester',
                        width: 100,
                        autoHide: false,
                        // callback function support for column rendering
                        template: function (row) {
                            var status = {
                                ganjil: {
                                    'title': 'Ganjil',
                                    'class': ' label-light-success'
                                },
                                genap: {
                                    'title': 'Genap',
                                    'class': ' label-light-info'
                                }
                            };
                            return '<span class="label font-weight-bold label-lg ' + status[row.Semester].class + ' label-inline">' + status[row.Semester].title + '</span>';
                        },
                    },
                    {
                        field: 'Status',
                        title: 'Status',
                        width: 100,
                        textAlign: 'center'
                    },
                ]
            });

            $('#kt_datatable_search_smt').on('change', function () {
                datatable.search($(this).val().toLowerCase(), 'Semester');
            });

            $('#kt_datatable_search_smt').selectpicker();
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