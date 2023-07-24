// Sidebar
if (document.querySelector('.toggle-icon')) {
  const toggleIcon = document.querySelector('.toggle-icon');
  const sidebar = document.querySelector('.sidebar');
  const searchBtn = document.querySelector('.search-box');
  const scrollThreshold = 60; // Cantidad de scroll en píxeles para mostrar el sidebar

  toggleIcon.addEventListener('click', () => {
    sidebar.classList.toggle('close');
  });

  searchBtn.addEventListener('click', () => {
    sidebar.classList.remove('close');
  });

  // Mostrar el sidebar al desplazarse hacia abajo
  function showSidebarOnScroll() {
    if (window.scrollY > scrollThreshold) {
      sidebar.classList.remove('hidden');
    } else {
      sidebar.classList.add('hidden');
    }
  }
  window.addEventListener('scroll', showSidebarOnScroll);
}
// Fin Sidebar

// SwiperJS Card Carousel
if (document.querySelector(".mySwiper")) {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  });
}
// Fin SwiperJS Card Carousel

// PAGINA DE REGISTRARSE.
if (document.getElementById('email')) {
  // Obtener referencias a los campos de correo electrónico y confirmación de correo electrónico
  var emailField = document.getElementById('email');
  var confirmarEmailField = document.getElementById('confirmarEmail');
  var confirmarEmailError = document.querySelector('[data-sb-feedback="confirmarEmail:mismatch"]');

  // Obtener referencias a los campos de contraseña y repetición de contraseña
  var contrasenaField = document.getElementById('contrasena');
  var repetirContrasenaField = document.getElementById('repetirContrasena');
  var repetirContrasenaError = document.querySelector('[data-sb-feedback="repetirContrasena:mismatch"]');

  // Obtener referencias a los campos de nombre y apellido
  var nombreField = document.getElementById('nombre');
  var apellidoField = document.getElementById('apellido');

  // Obtener referencia a los botones de mostrar/ocultar contraseñas
  var mostrarContrasenaBtn = document.getElementById('mostrarContrasenaBtn');
  var mostrarRepetirContrasenaBtn = document.getElementById('mostrarRepetirContrasenaBtn');

  // Función para verificar si los campos de correo electrónico y confirmación de correo electrónico son iguales
  function verificarEmails() {
    if (emailField.value !== confirmarEmailField.value) {
      confirmarEmailField.classList.add('is-invalid');
      confirmarEmailError.style.display = 'block';
      submitButton.disabled = true; // Deshabilitar el botón de enviar
    } else {
      confirmarEmailField.classList.remove('is-invalid');
      confirmarEmailError.style.display = 'none';
      verificarFormulario(); // Verificar el estado del formulario para habilitar o deshabilitar el botón de enviar
    }
  }

  // Función para verificar si los campos de contraseña y repetición de contraseña son iguales
  function verificarContrasenas() {
    if (contrasenaField.value !== repetirContrasenaField.value) {
      repetirContrasenaField.classList.add('is-invalid');
      repetirContrasenaError.style.display = 'block';
      submitButton.disabled = true; // Deshabilitar el botón de enviar
    } else {
      repetirContrasenaField.classList.remove('is-invalid');
      repetirContrasenaError.style.display = 'none';
      verificarFormulario(); // Verificar el estado del formulario para habilitar o deshabilitar el botón de enviar
    }
  }

  // Función para verificar el estado del formulario y habilitar o deshabilitar el botón de enviar
  function verificarFormulario() {
    if (emailField.value === confirmarEmailField.value && contrasenaField.value === repetirContrasenaField.value && nombreField.value !== '' && apellidoField.value !== '' && contrasenaField.value !== '') {
      submitButton.disabled = false; // Habilitar el botón de enviar
    } else {
      submitButton.disabled = true; // Deshabilitar el botón de enviar
    }
  }

  // Función para verificar la validez de la contraseña
  function verificarValidezContrasena() {
    var contrasena = contrasenaField.value;
    var regexLetraMinuscula = /[a-z]/;
    var regexLetraMayuscula = /[A-Z]/;
    var regexNumero = /[0-9]/;

    if (
      contrasena.length >= 8 && // Mínimo de 8 caracteres
      contrasena.length <= 15 && // Máximo de 15 caracteres
      regexLetraMinuscula.test(contrasena) && // Al menos 1 letra minúscula
      regexLetraMayuscula.test(contrasena) && // Al menos 1 letra mayúscula
      regexNumero.test(contrasena) // Al menos 1 número
    ) {
      contrasenaField.classList.remove('is-invalid');
    } else {
      contrasenaField.classList.add('is-invalid');
    }
  }

  // Función para mostrar u ocultar la contraseña
  function mostrarOcultarContrasena() {
    var tipo = contrasenaField.getAttribute('type');
    if (tipo === 'password') {
      contrasenaField.setAttribute('type', 'text');
    } else {
      contrasenaField.setAttribute('type', 'password');
    }
  }

  // Función para mostrar u ocultar la repetición de contraseña
  function mostrarOcultarRepetirContrasena() {
    var tipo = repetirContrasenaField.getAttribute('type');
    if (tipo === 'password') {
      repetirContrasenaField.setAttribute('type', 'text');
    } else {
      repetirContrasenaField.setAttribute('type', 'password');
    }
  }

  // Agregar event listeners para verificar los campos al cambiar su valor
  emailField.addEventListener('input', verificarEmails);
  confirmarEmailField.addEventListener('input', verificarEmails);
  contrasenaField.addEventListener('input', verificarContrasenas);
  repetirContrasenaField.addEventListener('input', verificarContrasenas);
  nombreField.addEventListener('input', verificarFormulario);
  apellidoField.addEventListener('input', verificarFormulario);
  contrasenaField.addEventListener('input', verificarValidezContrasena);
  repetirContrasenaField.addEventListener('input', verificarValidezContrasena);

  // Agregar event listeners para mostrar u ocultar las contraseñas
  mostrarContrasenaBtn.addEventListener('click', mostrarOcultarContrasena);
  mostrarRepetirContrasenaBtn.addEventListener('click', mostrarOcultarRepetirContrasena);

  // Habilitar los botones de mostrar contraseñas al inicio
  mostrarContrasenaBtn.disabled = false;
  mostrarRepetirContrasenaBtn.disabled = false;

  // Habilitar o deshabilitar el botón de envío según la validez de los campos del formulario
  var submitButton = document.getElementById('submitButton');
  var form = document.getElementById('contactForm');

  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add('was-validated');
  });


}







// SERVIDOR

const contactForm = document.getElementById('contactForm');
const submitSuccessMessage = document.getElementById('submitSuccessMessage');
const submitErrorMessage = document.getElementById('submitErrorMessage');

function registrarUsuario() {
  const formData = new FormData(contactForm);

  fetch('https:// ', {
    method: 'POST',
    body: formData
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Hubo un error en el registro.');
      }
      return response.json();
    })
    .then(data => {
      console.log('Registro exitoso:', data);
      mostrarMensajeExito();
    })
    .catch(error => {
      console.error('Error:', error);
      mostrarMensajeError();
    });
}

function mostrarMensajeExito() {
  submitSuccessMessage.classList.remove('d-none');
  submitErrorMessage.classList.add('d-none');
}

function mostrarMensajeError() {
  submitErrorMessage.classList.remove('d-none');
  submitSuccessMessage.classList.add('d-none');
}

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  registrarUsuario();
});