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

            var datatable = $('#kt_datatable_question').KTDatatable({
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
                columns: [
                    {
                        field: '#',
                        title: '#',
                        sortable: false,
                        width: 20,
                        selector: true,
                        textAlign: 'center',
                    },
                    {
                        field: 'Tipe',
                        title: 'Tipe',
                        width: 140,
                        autoHide: false,
                        // callback function support for column rendering
                        template: function (row) {
                            var status = {
                                1: {
                                    'title': 'Pendagogik',
                                    'class': 'label-light-info'
                                },
                                2: {
                                    'title': 'Kepribadian',
                                    'class': 'label-light-primary'
                                },
                                3: {
                                    'title': 'Sosial',
                                    'class': 'label-light-success'
                                },
                                4: {
                                    'title': 'Profesional',
                                    'class': 'label-light-warning'
                                },
                                5: {
                                    'title': 'Spiritual & Karakter',
                                    'class': 'label-light-danger'
                                }
                            };
                            return '<span class="label font-weight-bold label-lg ' + status[row.Tipe].class + ' label-inline">' + status[row.Tipe].title + '</span>';
                        },
                    },
                    {
                        field: 'Isi Pertanyaan',
                        title: 'Isi Pertanyaan',
                        width: 780
                    },
                    {
                        field: 'Aksi',
                        title: 'Aksi',
                        width: 60
                    }
                ]
            });

            $('#kt_datatable_search_type').on('change', function () {
                datatable.search($(this).val().toLowerCase(), 'Tipe');
            });

            $('#kt_datatable_search_type').selectpicker();
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