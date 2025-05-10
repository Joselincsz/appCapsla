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
    $("#recuperacionForm").validate({
      rules: {
        passrep: {
          required: true,
          minlength: 5
        },
        confirmpass: {
          required: true,
          minlength: 5,
          equalTo: "#passrep"
        },
        curpre: {
          required: true,
          curp: true 
        },
        agree: "required"
      },
      messages: {
        passrep: {
          required: "Ingrese una contraseña",
          minlength: "Su contraseña debe tener al menos 5 caracteres"
        },
        confirmpass: {
          required: "Ingrese una contraseña",
          minlength: "Su contraseña debe tener al menos 5 caracteres",
          equalTo: "Ingrese la misma contraseña que la anterior"
        },
        curpre: "Por favor, ingresa una CURP válida", 
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
})(jQuery);


