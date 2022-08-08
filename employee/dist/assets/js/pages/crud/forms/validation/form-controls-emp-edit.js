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
            const form = document.getElementById('kt_form_pegawai');
            const fv = FormValidation.formValidation(
                    form,
                    {
                        fields: {
                            nik: {
                                validators: {
                                    notEmpty: {
                                        message: 'NIK diperlukan'
                                    },
                                    integer: {
                                        message: 'Inputan harus Angka',
                                        // The default separators
                                        thousandsSeparator: '',
                                        decimalSeparator: ''
                                    },
                                    stringLength: {
                                        max: 16,
                                        min: 16,
                                        message: 'Inputan tidak boleh lebih atau kurang dari 16 digit'
                                    },
                                    remote: {
                                        message: 'NIK telah terdaftar',
                                        method: 'POST',
                                        url: HOST_URL + 'employee/master/employe/check_nik_employee',
                                        data: function () {
                                            return {
                                                nik: form.querySelector('[name="nik"]').value,
                                                id: form.querySelector('[name="id_pegawai"]').value,
                                            };
                                        },
                                    },
                                }
                            },
                            nip: {
                                validators: {
                                    // notEmpty: {
                                    //     message: 'NIP diperlukan'
                                    // },
                                    integer: {
                                        message: 'Inputan harus Angka',
                                        // The default separators
                                        thousandsSeparator: '',
                                        decimalSeparator: ''
                                    },
                                    remote: {
                                        message: 'NIP telah terdaftar',
                                        method: 'POST',
                                        url: HOST_URL + 'employee/master/employe/check_nip_employee',
                                        data: function () {
                                            return {
                                                nip: form.querySelector('[name="nip"]').value,
                                                id: form.querySelector('[name="id_pegawai"]').value,
                                            };
                                        },
                                    }
                                }
                            },
                            nama_lengkap: {
                                validators: {
                                    notEmpty: {
                                        message: 'Nama Lengkap diperlukan'
                                    },
                                    regexp: {
                                        regexp: /^[a-zs'"\s]+$/i,
                                        message: 'Inputan harus berupa huruf'
                                    }

                                }
                            },

                            tempat_lahir: {
                                validators: {
                                    notEmpty: {
                                        message: 'Tempat Lahir diperlukan'
                                    },
                                    regexp: {
                                        regexp: /^[a-zs\s]+$/i,
                                        message: 'Inputan harus berupa huruf'
                                    }

                                }
                            },

                            tanggal_lahir: {
                                validators: {
                                    notEmpty: {
                                        message: 'Tanggal Lahir diperlukan'
                                    }
                                }
                            },

                            email: {
                                validators: {
                                    notEmpty: {
                                        message: 'Email diperlukan'
                                    },
                                    emailAddress: {
                                        message: 'Inputan harus berformat email'
                                    }
                                }
                            },

                            jenis_kelamin: {
                                validators: {
                                    notEmpty: {
                                        message: 'Jenis Kelamin diperlukan'
                                    }
                                }
                            },

                            agama: {
                                validators: {
                                    notEmpty: {
                                        message: 'Agama diperlukan'
                                    }
                                }
                            },

                            warga_negara: {
                                validators: {
                                    notEmpty: {
                                        message: 'Warga Negara diperlukan'
                                    }
                                }
                            },

                            status_nikah: {
                                validators: {
                                    notEmpty: {
                                        message: 'Status Nikah diperlukan'
                                    }
                                }
                            },

                            pendidikan: {
                                validators: {
                                    notEmpty: {
                                        message: 'Pendidikan diperlukan'
                                    }
                                }
                            },
                            spesialisasi: {
                                validators: {
                                    // notEmpty: {
                                    //     message: 'Spesialisasi Lulusan diperlukan'
                                    // },
                                    regexp: {
                                        regexp: /^[a-zs\s]+$/i,
                                        message: 'Inputan harus berupa huruf'
                                    }
                                }
                            },
                            program_keahlian: {
                                validators: {
                                    regexp: {
                                        regexp: /^[a-zs\s]+$/i,
                                        message: 'Inputan harus berupa huruf'
                                    }
                                }
                            },
                            jumlah_anak: {
                                validators: {
                                    notEmpty: {
                                        message: 'Jumlah Anak diperlukan'
                                    },
                                    integer: {
                                        message: 'Inputan harus Angka'
                                    },
                                }
                            },
                            nomor_hp: {
                                validators: {
                                    notEmpty: {
                                        message: 'Nomor HP diperlukan'
                                    },
                                    integer: {
                                        message: 'Inputan harus Angka'
                                    },
                                    stringLength: {
                                        min: 10,
                                        message: 'Inputan tidak boleh kurang dari 10 digit'
                                    }
                                }
                            },
                            jam_pelajaran: {
                                validators: {
                                    // notEmpty: {
                                    //     message: 'Jam Pelajaran diperlukan'
                                    // },
                                    integer: {
                                        message: 'Inputan harus Angka'
                                    }
                                }
                            },
                            jenis_pegawai: {
                                validators: {
                                    notEmpty: {
                                        message: 'Jenis Pegawai diperlukan'
                                    }
                                }
                            },
                            alamat_lengkap: {
                                validators: {
                                    notEmpty: {
                                        message: 'Alamat Lengkap diperlukan'
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
                            rt: {
                                validators: {
                                    notEmpty: {
                                        message: 'RT diperlukan'
                                    },
                                    integer: {
                                        message: 'Inputan harus Angka'
                                    },
                                }
                            },
                            rw: {
                                validators: {
                                    notEmpty: {
                                        message: 'RW diperlukan'
                                    },
                                    integer: {
                                        message: 'Inputan harus Angka'
                                    },
                                }
                            },
                            kodepos: {
                                validators: {
                                    notEmpty: {
                                        message: 'Kodepos diperlukan'
                                    },
                                    integer: {
                                        message: 'Inputan harus Angka'
                                    },
                                }
                            },
                            npwp: {
                                validators: {
                                    regexp: {
                                        regexp: /^[0-9s.-]+$/i,
                                        message: 'Inputan harus berupa Angka dan Karakter tertentu'
                                    }
                                }
                            },
                            nama_wajib_pajak: {
                                validators: {
                                    regexp: {
                                        regexp: /^[a-zs'"\s]+$/i,
                                        message: 'Inputan harus berupa huruf'
                                    }
                                }
                            },
                            tanggal_masuk: {
                                validators: {
                                    notEmpty: {
                                        message: 'Tanggal Masuk diperlukan'
                                    },
                                }
                            },
                            foto_pegawai: {
                                validators: {
                                    file: {
                                        extension: 'jpeg,jpg,png',
                                        type: 'image/jpeg,image/png',
                                        maxSize: 3097152,
                                        message: 'Foto harus berekstensi jpeg,jpg,png dan < 3Mb'
                                    }
                                }
                            },
                            level_tingkat: {
                                validators: {
                                    notEmpty: {
                                        message: 'Level Tingkat diperlukan'
                                    },
                                }
                            },
                            id_jabatan: {
                                validators: {
                                    notEmpty: {
                                        message: 'Jabatan Pegawai diperlukan'
                                    },
                                }
                            },
                            th_ajaran: {
                                validators: {
                                    notEmpty: {
                                        message: 'Tahun Ajaran diperlukan'
                                    },
                                }
                            },
                            password: {
                                validators: {
                                    notEmpty: {
                                        message: 'Password diperlukan'
                                    },
                                    identical: {
                                        compare: function () {
                                            return form.querySelector('[name="cf_password"]').value;
                                        },
                                        message: 'Inputan Password tidak sama dengan inputan Konfirmasi Password'
                                    }
                                }
                            },
                            cf_password: {
                                validators: {
                                    notEmpty: {
                                        message: 'Konfirmasi Password diperlukan'
                                    },
                                    identical: {
                                        compare: function () {
                                            return form.querySelector('[name="password"]').value;
                                        },
                                        message: 'Inputan Konfirmasi Password tidak sama dengan inputan Password'
                                    }
                                }
                            }
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

            $(".ubahpass").bootstrapSwitch();
            var pass_awal = $('input[name="password"]');
            var pass_konf = $('input[name="cf_password"]');

            pass_awal.prop('disabled', true);
            pass_konf.prop('disabled', true);

            fv.disableValidator('password').disableValidator('cf_password');

            $(".ubahpass").on("switchChange.bootstrapSwitch", function (event, state) {
                if (state == true) {
                    fv.enableValidator('password').enableValidator('cf_password');
                    pass_awal.prop('disabled', false);
                    pass_konf.prop('disabled', false);

                } else {
                    fv.disableValidator('password').disableValidator('cf_password');
                    pass_awal.prop('disabled', true);
                    pass_konf.prop('disabled', true);
                    pass_awal.val("");
                    pass_konf.val("");
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