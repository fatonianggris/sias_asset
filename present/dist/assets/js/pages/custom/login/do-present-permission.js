/******/ (() => { // webpackBootstrap
    /******/ 	"use strict";
    var __webpack_exports__ = {};

// Class Definition
    var KTLogin = function () {
        var _login;

        var _handleSignInForm = function () {
            var validation;
            var form = KTUtil.getById('kt_present_permission_form');
            // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
            if (status_selfie == 0) {

                validation = FormValidation.formValidation(
                        form,
                        {
                            fields: {
                                lat: {
                                    validators: {
                                        notEmpty: {
                                            message: 'Lokasi Anda diperlukan, Aktifkan GPS Anda'
                                        },
                                        regexp: {
                                            regexp: /^[0-9s.'"\s-]+$/i,
                                            message: 'Inputan harus berupa angka'
                                        },
                                    }
                                },
                                longt: {
                                    validators: {
                                        notEmpty: {
                                            message: 'Lokasi Anda diperlukan, Aktifkan GPS Anda'
                                        },
                                        regexp: {
                                            regexp: /^[0-9s.'"\s-]+$/i,
                                            message: 'Inputan harus berupa angka'
                                        },
                                    }
                                },
                                keterangan: {
                                    validators: {
                                        notEmpty: {
                                            message: 'Keterangan/Alasan Izin Anda diperlukan'
                                        },
                                    }
                                },
                            },
                            plugins: {
                                trigger: new FormValidation.plugins.Trigger(),
                                submitButton: new FormValidation.plugins.SubmitButton(),
                                bootstrap: new FormValidation.plugins.Bootstrap()
                            }
                        }
                );
            } else {

                validation = FormValidation.formValidation(
                        form,
                        {
                            fields: {
                                lat: {
                                    validators: {
                                        notEmpty: {
                                            message: 'Lokasi Anda diperlukan, Aktifkan GPS Anda'
                                        },
                                        regexp: {
                                            regexp: /^[0-9s.'"\s-]+$/i,
                                            message: 'Inputan harus berupa angka'
                                        },
                                    }
                                },
                                longt: {
                                    validators: {
                                        notEmpty: {
                                            message: 'Lokasi Anda diperlukan, Aktifkan GPS Anda'
                                        },
                                        regexp: {
                                            regexp: /^[0-9s.'"\s-]+$/i,
                                            message: 'Inputan harus berupa angka'
                                        },
                                    }
                                },
                                keterangan: {
                                    validators: {
                                        notEmpty: {
                                            message: 'Keterangan/Alasan Izin Anda diperlukan'
                                        },
                                    }
                                },
                                foto_bukti: {
                                    validators: {
                                        notEmpty: {
                                            message: 'Foto Bukti Izin diperlukan'
                                        },
                                        file: {
                                            extension: 'jpeg,jpg,png',
                                            type: 'image/jpeg,image/png',
                                            maxSize: 5097152,
                                            message: 'Foto Bukti harus berekstensi jpeg,jpg,png dan kurang dari 5Mb'
                                        }
                                    }
                                },
                            },
                            plugins: {
                                trigger: new FormValidation.plugins.Trigger(),
                                submitButton: new FormValidation.plugins.SubmitButton(),
                                bootstrap: new FormValidation.plugins.Bootstrap()
                            }
                        }
                );
            }

            _login.on('submit', function (wizard) {
                if (validation) {
                    validation.validate().then(function (status) {
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

        // Public Functions
        return {
            // public functions
            init: function () {
                _login = $('#kt_form');

                _handleSignInForm();
            }
        };
    }();

// Class Initialization
    jQuery(document).ready(function () {
        KTLogin.init();
    });

    /******/ })()
        ;
//# sourceMappingURL=login-general.js.map