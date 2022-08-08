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

            var datatable = $('#kt_datatable_account').KTDatatable({
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
                        field: 'Nama Akun',
                        title: 'Nama Akun',
                        width: 280,
                        textAlign: 'center',
                        autoHide: false
                    },
                    {
                        field: 'Role',
                        title: 'Role',
                        width: 100,
                        template: function (row) {
                            var status = {
                                1: {
                                    'title': 'ADMIN',
                                    'class': 'label-light-success'
                                },
                                2: {
                                    'title': 'PETUGAS',
                                    'class': 'label-light-primary'
                                }
                            };
                            return '<span class="label font-weight-bold label-lg ' + status[row.Role].class + ' label-inline">' + status[row.Role].title + '</span>';
                        },
                    },
                    {
                        field: 'Email',
                        title: 'Email',
                        width: 230,
                    },
                    {
                        field: 'Nomor Handphone',
                        title: 'Nomor Handphone',
                        width: 150,
                    },
                    {
                        field: 'Tanggal',
                        title: 'Tanggal',
                        textAlign: 'center',
                        width: 120,
                        template: function (row) {
                            return '<span class="label font-weight-bold label-lg label-light-default label-inline">' + row.Tanggal + '</span>';
                        }
                    },
                    {
                        field: 'Aksi',
                        title: 'Aksi',
                        width: 150,
                    },
                ]
            });

            $('#kt_datatable_search_role').on('change', function () {
                datatable.search($(this).val().toLowerCase(), 'Role');
            });

            $('#kt_datatable_search_role').selectpicker();
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