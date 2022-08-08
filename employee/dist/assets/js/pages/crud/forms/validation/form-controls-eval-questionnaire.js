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
            const form = document.getElementById('kt_form_eval_question');
            const fv = FormValidation.formValidation(
                    form,
                    {
                        fields: {
                            'jawaban[]': {
                                validators: {
                                    notEmpty: {
                                        message: 'Jawaban diperlukan'
                                    },
                                    integer: {
                                        message: 'Inputan harus Angka',
                                        // The default separators
                                        thousandsSeparator: '',
                                        decimalSeparator: ''
                                    },
                                    between: {
                                        min: 1,
                                        max: 40,
                                        message: 'Nilai Persentase harus antara 1 sampai 40',
                                    },
                                }
                            },
                        },

                        plugins: {//Learn more: https://formvalidation.io/guide/plugins
                            trigger: new FormValidation.plugins.Trigger(),
                            // Bootstrap Framework Integration
                            bootstrap: new FormValidation.plugins.Bootstrap(), // Validate fields when clicking the Submit button
                            // Submit the form when all fields are valid
                            submitButton: new FormValidation.plugins.SubmitButton(),
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