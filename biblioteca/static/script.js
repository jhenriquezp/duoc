const loginForm = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue.length < 4 || usernameValue.length > 16) {
    alert("El nombre de usuario debe tener entre 4 y 16 caracteres.");
    return;
  }

  if (!/^[a-zA-Z0-9]+$/.test(usernameValue)) {
    alert("El nombre de usuario solo puede contener letras y números.");
    return;
  }

  if (passwordValue.length < 8 || passwordValue.length > 16) {
    alert("La contraseña debe tener entre 8 y 16 caracteres.");
    return;
  }

  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/.test(passwordValue)) {
    alert(
      "La contraseña debe tener al menos una letra mayúscula, una letra minúscula y un número."
    );
    return;
  }

  alert(`Bienvenido, ${usernameValue}!`);

  // Redirigir a la página "principal"
  window.location.href = "principal.html";

  // Mostrar el nombre de usuario en la página principal
document.getElementById('username').textContent = localStorage.getItem('username')
});


