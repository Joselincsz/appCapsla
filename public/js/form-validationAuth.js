  $(function() {

    // Validar el formulario de registro de usuario
    $("#loginForm").validate({
      rules: {
        contraseña: {
          required: true,
          minlength: 5
        },
        correo: {
          required: true,
          email: true
        },
        agree: "required"
      },
      messages: { 
        contraseña: {
          required: "Ingrese una contraseña",
          minlength: "Su contraseña debe tener al menos 5 caracteres"
        },
        correo: "Ingrese una dirección de correo electrónico válida",
        curpre: "Por favor, ingresa una CURP válida", // Mensaje para CURP
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



