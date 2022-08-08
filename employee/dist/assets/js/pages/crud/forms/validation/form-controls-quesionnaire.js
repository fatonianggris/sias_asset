/******/ (() => { // webpackBootstrap
    var __webpack_exports__ = {};
    /*!********************************************************************!*\
     !*** ../demo1/src/js/pages/crud/forms/validation/form-controls.js ***!
     \********************************************************************/
// Class definition
    var KTFormControls = function () {
        // Private functions
        var _initKelas = function () {
            FormValidation.formValidation(
                    document.getElementById('kt_form_kuisioner'),
                    {
                        fields: {
                            nama_kuisioner: {
                                validators: {
                                    notEmpty: {
                                        message: 'Nama Kuisioner diperlukan'
                                    }
                                }
                            },
                            tgl_mulai: {
                                validators: {
                                    notEmpty: {
                                        message: 'Tanggal Mulai diperlukan'
                                    }
                                }
                            },
                            tgl_berakhir: {
                                validators: {
                                    notEmpty: {
                                        message: 'Tanggal Berakhir diperlukan'
                                    }
                                }
                            },
                            th_ajaran: {
                                validators: {
                                    notEmpty: {
                                        message: 'Tahun Ajaran diperlukan'
                                    }
                                }
                            },
                            persentase_personal: {
                                validators: {
                                    notEmpty: {
                                        message: 'Persentase Personal diperlukan'
                                    },
                                    integer: {
                                        message: 'Inputan harus Angka',
                                        // The default separators
                                        thousandsSeparator: '',
                                        decimalSeparator: ''
                                    },
                                    between: {
                                        min: 1,
                                        max: 100,
                                        message: 'Nilai Persentase harus antara 1 sampai 100',
                                    },
                                }
                            },
                            persentase_sejawat: {
                                validators: {
                                    notEmpty: {
                                        message: 'Persentase Sejawat diperlukan'
                                    },
                                    integer: {
                                        message: 'Inputan harus Angka',
                                        // The default separators
                                        thousandsSeparator: '',
                                        decimalSeparator: ''
                                    },
                                    between: {
                                        min: 1,
                                        max: 100,
                                        message: 'Nilai Persentase harus antara 1 sampai 100',
                                    },
                                }
                            },
                            persentase_atasan: {
                                validators: {
                                    notEmpty: {
                                        message: 'Persentase Atasan diperlukan'
                                    },
                                    integer: {
                                        message: 'Inputan harus Angka',
                                        // The default separators
                                        thousandsSeparator: '',
                                        decimalSeparator: ''
                                    },
                                    between: {
                                        min: 1,
                                        max: 100,
                                        message: 'Nilai Persentase harus antara 1 sampai 100',
                                    },
                                }
                            },
                            nilai_penilaian_max: {
                                validators: {
                                    notEmpty: {
                                        message: 'Penilaian Max diperlukan'
                                    },
                                    integer: {
                                        message: 'Inputan harus Angka',
                                        // The default separators
                                        thousandsSeparator: '',
                                        decimalSeparator: ''
                                    },
                                }
                            },
                            tunjangan_kinerja: {
                                validators: {
                                    notEmpty: {
                                        message: 'Tunjangan Kinerja diperlukan'
                                    },
                                    integer: {
                                        message: 'Inputan harus Angka',
                                        // The default separators
                                        thousandsSeparator: '',
                                        decimalSeparator: ''
                                    },
                                }
                            },
                            tipe_penilaian: {
                                validators: {
                                    notEmpty: {
                                        message: 'Tipe Penilian diperlukan'
                                    }
                                }
                            },
                            deskripsi_kuisioner: {
                                validators: {
                                    notEmpty: {
                                        message: 'Deskripsi Kuisioner diperlukan'
                                    }
                                }
                            },
                        },

                        plugins: {//Learn more: https://formvalidation.io/guide/plugins
                            trigger: new FormValidation.plugins.Trigger(),
                            // Bootstrap Framework Integration
                            bootstrap: new FormValidation.plugins.Bootstrap(),
                            // Validate fields when clicking the Submit button
                            submitButton: new FormValidation.plugins.SubmitButton(),
                            // Submit the form when all fields are valid
                            defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
                        }
                    }
            );
        };

        return {
            // public functions
            init: function () {
                _initKelas();
            }
        };
    }();

    jQuery(document).ready(function () {
        KTFormControls.init();
    });

    /******/
})();
//# sourceMappingURL=form-controls.js.map