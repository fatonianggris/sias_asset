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

            var datatable = $('#kt_datatable_announcement').KTDatatable({
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
                        field: 'Judul Pengumuman',
                        title: 'Judul Pengumuman',
                        width: 300
                    },
                    {
                        field: 'Kategori',
                        title: 'Kategori',
                        width: 100,
                        autoHide: false,
                        // callback function support for column rendering
                        template: function (row) {
                            var status = {
                                1: {
                                    'title': 'RENDAH',
                                    'class': 'label-light-info'
                                },
                                2: {
                                    'title': 'NORMAL',
                                    'class': 'label-light-success'
                                },
                                3: {
                                    'title': 'TINGGI',
                                    'class': 'label-light-warning'
                                }

                            };
                            return '<span class="label font-weight-bold label-lg ' + status[row.Kategori].class + ' label-inline">' + status[row.Kategori].title + '</span>';
                        },
                    },
                    {
                        field: 'Tujuan',
                        title: 'Tujuan',
                        width: 100,
                        autoHide: false,
                        // callback function support for column rendering
                        template: function (row) {
                            var status = {
                                1: {
                                    'title': 'SISWA',
                                    'class': 'label-light-warning'
                                },
                                2: {
                                    'title': 'PEGAWAI',
                                    'class': 'label-light-success'
                                }
                            };
                            return '<span class="label font-weight-bold label-lg ' + status[row.Tujuan].class + ' label-inline">' + status[row.Tujuan].title + '</span>';
                        },
                    },
                    {
                        field: 'Deskripsi',
                        title: 'Deskripsi',
                        width: 340
                    },
                    {
                        field: 'TH',
                        title: 'TH',
                        width: 100
                    },
                ]
            });

            $('#kt_datatable_search_category').on('change', function () {
                datatable.search($(this).val().toLowerCase(), 'Kategori');
            });
            $('#kt_datatable_search_destination').on('change', function () {
                datatable.search($(this).val().toLowerCase(), 'Tujuan');
            });

            $('#kt_datatable_search_category', '#kt_datatable_search_destination').selectpicker();
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