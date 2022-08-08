/******/ (() => { // webpackBootstrap
    var __webpack_exports__ = {};
    /*!********************************************************************!*\
     !*** ../demo1/src/js/pages/crud/forms/validation/form-controls.js ***!
     \********************************************************************/
// Class definition
    var KTFormControls = function () {
        // Private functions
        var _form;

        var _initPegawai = function () {
            const form = document.getElementById('kt_add_contact_form');
            const fv = FormValidation.formValidation(
                    form,
                    {
                        fields: {
                            nomor_telephone: {
                                validators: {
                                    notEmpty: {
                                        message: 'Nomor Telepon Kantor diperlukan'
                                    },
                                    integer: {
                                        message: 'Inputan harus Angka',
                                        // The default separators
                                        thousandsSeparator: '',
                                        decimalSeparator: ''
                                    },

                                }
                            },
                            no_handphone: {
                                validators: {
                                    notEmpty: {
                                        message: 'Nomor Handphone Kantor diperlukan'
                                    },
                                    integer: {
                                        message: 'Inputan harus Angka',
                                        // The default separators
                                        thousandsSeparator: '',
                                        decimalSeparator: ''
                                    },
                                }
                            },
                            email: {
                                validators: {
                                    notEmpty: {
                                        message: 'Email Kantor diperlukan'
                                    }

                                }
                            },
                            provinsi: {
                                validators: {
                                    notEmpty: {
                                        message: 'Provinsi diperlukan'
                                    }
                                }
                            },
                            kabupaten_kota: {
                                validators: {
                                    notEmpty: {
                                        message: 'Kabupaten/Kota diperlukan'
                                    }
                                }
                            },
                            kecamatan: {
                                validators: {
                                    notEmpty: {
                                        message: 'Kecamatan diperlukan'
                                    }
                                }
                            },
                            kelurahan_desa: {
                                validators: {
                                    notEmpty: {
                                        message: 'Kelurahan/Desa diperlukan'
                                    }
                                }
                            },
                            url_website: {
                                validators: {
                                    notEmpty: {
                                        message: 'URL Website Kantor diperlukan'
                                    }, uri: {
                                        message: 'Alamat URL tidak valid'
                                    }

                                }
                            },
                            alamat: {
                                validators: {
                                    notEmpty: {
                                        message: 'Alamat Kantor diperlukan'
                                    }

                                }
                            },
                            jam_kerja: {
                                validators: {
                                    notEmpty: {
                                        message: 'Jam Kerja Kantor diperlukan'
                                    }

                                }
                            },
                            akun_instagram: {
                                validators: {
                                    uri: {
                                        message: 'Alamat URL tidak valid'
                                    }
                                }
                            },
                            akun_facebook: {
                                validators: {
                                    uri: {
                                        message: 'Alamat URL tidak valid'
                                    }
                                }
                            },
                            akun_twitter: {
                                validators: {
                                    uri: {
                                        message: 'Alamat URL tidak valid'
                                    }
                                }
                            },
                            akun_youtube: {
                                validators: {
                                    uri: {
                                        message: 'Alamat URL tidak valid'
                                    }
                                }
                            }
                        },
                        plugins: {
                            trigger: new FormValidation.plugins.Trigger(),
                            submitButton: new FormValidation.plugins.SubmitButton(),
                            defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
                            bootstrap: new FormValidation.plugins.Bootstrap()
                        }
                    }
            );

            _form.on('submit', function (wizard) {
                if (fv) {
                    fv.validate().then(function (status) {
                        if (status == 'Valid') {
                            KTApp.blockPage({
                                overlayColor: '#FFA800',
                                state: 'warning',
                                size: 'lg',
                                opacity: 0.1,
                                message: 'Silahkan Tunggu...'
                            });
                            form.submit(); // Submit form
                        } else {
                            Swal.fire({
                                text: "Mohon Maaf, kemungkinan terjadi kesalahan pada pengisian Anda, Mohon menginputkan dengan benar.",
                                icon: "error",
                                buttonsStyling: false,
                                confirmButtonText: "Oke!",
                                customClass: {
                                    confirmButton: "btn font-weight-bold btn-primary"
                                }
                            }).then(function () {
                                KTUtil.scrollTop();
                            });
                        }
                    });
                }
            });
        };

        return {
            // public functions
            init: function () {
                _form = $('#kt_form');
                _initPegawai();
            }
        };
    }();

    jQuery(document).ready(function () {
        KTFormControls.init();
    });

    /******/
})();
//# sourceMappingURL=form-controls.js.map