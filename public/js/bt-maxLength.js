(function($) {
  'use strict';
  $('#defaultconfig').maxlength({
    warningClass: "badge mt-1 badge-success",
    limitReachedClass: "badge mt-1 badge-danger"
  });

  $('#defaultconfig-2').maxlength({
    alwaysShow: true,
    threshold: 10, // Número de caracteres permitido (asumimos 10 dígitos para el teléfono)
    warningClass: "badge mt-1 badge-success",
    limitReachedClass: "badge mt-1 badge-danger",
    separator: '/', // Eliminamos el 'of' que se usaba anteriormente
    preText: 'Solo se admiten números ', // Modificamos el texto para advertir sobre los números
    postText: '', // No necesitamos un texto adicional, ya que el mensaje principal es suficiente
    validate: true
  });

  // Aseguramos que solo se puedan ingresar números en el campo #defaultconfig-2
  $('#defaultconfig-2').on('input', function(event) {
    // Solo permite números
    this.value = this.value.replace(/[^0-9]/g, '');
  });

  // Modificar #defaultconfig-3 para aceptar solo números telefónicos
  $('#defaultconfig-3').maxlength({
    alwaysShow: true,
    threshold: 10, // Número de caracteres permitido (asumimos 10 dígitos para el teléfono)
    warningClass: "badge mt-1 badge-success",
    limitReachedClass: "badge mt-1 badge-danger",
    separator: '/', // Eliminamos el 'of' que se usaba anteriormente
    preText: 'Solo se admiten números ', // Modificamos el texto para advertir sobre los números
    postText: '', // No necesitamos un texto adicional, ya que el mensaje principal es suficiente
    validate: true
  });

  // Aseguramos que solo se puedan ingresar números en el campo #defaultconfig-3
  $('#defaultconfig-3').on('input', function(event) {
    // Solo permite números
    this.value = this.value.replace(/[^0-9]/g, '');
  });

  $('#maxlength-textarea').maxlength({
    alwaysShow: true,
    warningClass: "badge mt-1 badge-success",
    limitReachedClass: "badge mt-1 badge-danger"
  });
})(jQuery);

