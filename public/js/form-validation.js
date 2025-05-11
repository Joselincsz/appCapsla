$(document).ready(function () {
        const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        //El diccionario Toast guarda algunas confiuraciones para los mensajes toast
        var Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        });

        //Arroba if es una sentencia de laravel y verifica la existencia de la session flash
        //que proviene de la función store del RegisterController
       //@if (session('sessionInsertado') == 'false')
        //Código Java Script para activar el mensaje Toast
       /* Toast.fire({
            icon: 'error',
            title: '{{session('mensaje')}}'
        })
        @endif*/


        $.validator.addMethod(
            //En jQuery Validation, un campo se considera opcional si no tiene el atributo required
            // o si se cumple alguna otra condición que lo haga opcional.
            "regexContrasennia",
            function (value, element) {
                //si optional es true indica que elcomponente contiene un required y el JS de la librearía se encargara de la validación
                //por otro lado regex se encargará
                return this.optional(element) || regex.test(value);
            }
        );

        $.validator.addMethod(
            "compararContrasennias",
            function (value, element) {
                return value == $("#contrasennia").val();
            }
        );

        $(function () {
            $.validator.setDefaults({
                submitHandler: function () {
                    $('#preloader').css('display', 'flex'); // Muestra el preloader
                    $('#signupForm').submit();
                }
            });

            $('#signupForm').validate({
                rules: {
                    firstname: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true,
                    },
                    username: {
                        required: true,
                        minlength: 3
                    },
                    password: {
                        required: true,
                        minlength: 5,
                        regexContrasennia: true
                    },
                    confirm_password: {
                        required: true,
                        minlength: 5,
                        compararContrasennias: true,
                    },
                },
                messages: {
                    firstname: {
                        required: "Ingresa tu nombre completo",
                    },
                    email: {
                        required: "Ingresar tu correo electrónico",
                        email: "Correo electrónico no válido"
                    },
                    username: {
                        required: "Ingresar tu nombre de usuario",
                        minlength: "El nombre de usuario debe tener al meno 3 caracteres"
                    },
                    password: {
                        required: "Ingresar una contraseña",
                        minlength: "La contraseña debe tener al menos 5 caracteres",
                        regexContrasennia: "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.",
                    },
                    confirm_password: {
                        required: "Ingresa la misma contraseña",
                        minlength: "La contraseña debe tener al menos 5 caracteres",
                        compararContrasennias: "Las contraseñas no coinciden."
                    },
                },
                errorElement: 'span',
                errorPlacement: function (error, element) {
                    error.addClass('invalid-feedback');
                    element.closest('.input-group').append(error);
                },
                highlight: function (element, errorClass, validClass) {
                    $(element).addClass('is-invalid');
                },
                unhighlight: function (element, errorClass, validClass) {
                    $(element).removeClass('is-invalid');
                }
            });
        });
    });


/*
(function($) {
  'use strict';

  $.validator.setDefaults({
    submitHandler: function() {
      alert("Formulario enviado!");
    }
  });

  $(function() {
    // Expresión regular para CURP
    const regexCURP = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;

    // Añadir método de validación para CURP
    $.validator.addMethod("curp", function(value, element) {
      return this.optional(element) || regexCURP.test(value);
    }, "Por favor, ingresa una CURP válida.");

    // Validar el formulario de registro de usuario
    $("#signupForm").validate({
      rules: {
        firstname: "required",
        lastname: "required",
        username: {
          required: true,
          minlength: 2
        },
        password: {
          required: true,
          minlength: 5
        },
        confirm_password: {
          required: true,
          minlength: 5,
          equalTo: "#password"
        },
        email: {
          required: true,
          email: true
        },
        curp: {
          required: true,
          curp: true // Validar CURP con la expresión regular
        },
        agree: "required"
      },
      messages: {
        firstname: "Ingresa tu nombre",
        lastname: "Ingresa tu apellido",
        username: {
          required: "Ingrese un nombre de usuario",
          minlength: "Su nombre de usuario debe tener al menos 2 caracteres"
        },
        password: {
          required: "Ingrese una contraseña",
          minlength: "Su contraseña debe tener al menos 5 caracteres"
        },
        confirm_password: {
          required: "Ingrese una contraseña",
          minlength: "Su contraseña debe tener al menos 5 caracteres",
          equalTo: "Ingrese la misma contraseña que la anterior"
        },
        email: "Ingrese una dirección de correo electrónico válida",
        curp: "Por favor, ingresa una CURP válida", // Mensaje para CURP
        agree: "Acepte nuestra política"
      },
      errorPlacement: function(label, element) {
        label.addClass('mt-2 text-danger');
        label.insertAfter(element);
      },
      highlight: function(element, errorClass) {
        $(element).parent().addClass('has-danger');
        $(element).addClass('form-control-danger');
      }
    });
  });
})(jQuery);*/

