let amigos = [];

// Agregar un nuevo amigo
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  // Validaciones
  if (nombre === "") {
    alert("⚠️ Ingresa un nombre válido.");
    return;
  }

  if (amigos.includes(nombre)) {
    alert("⚠️ Ese nombre ya está en la lista.");
    return;
  }

  amigos.push(nombre);
  input.value = "";
  actualizarLista();
}

// Mostrar la lista de amigos
function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  amigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// Sortear un amigo secreto
function sortearAmigo() {
  if (amigos.length < 2) {
    alert("⚠️ Necesitas al menos 2 participantes para el sorteo.");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const seleccionado = amigos[indice];
  document.getElementById("resultado").textContent = 
    `🎉 El amigo secreto es: ${seleccionado}`;
}
