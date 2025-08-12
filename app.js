// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Estado
const amigos = [];

// Referencias a elementos del DOM
const input = document.getElementById('amigo');
const lista = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Agrega un amigo desde el input
function agregarAmigo() {
  const nombre = (input.value || '').trim();

  if (!nombre) {
    alert('Por favor, inserte un nombre.');
    input.focus();
    return;
  }

  amigos.push(nombre);
  input.value = '';
  input.focus();
  actualizarListaAmigos();
  resultado.innerHTML = ''; // limpia el resultado si ya había uno
}

// Pinta la lista de amigos en pantalla
function actualizarListaAmigos() {
  lista.innerHTML = '';
  for (const nombre of amigos) {
    const li = document.createElement('li');
    li.textContent = nombre;
    lista.appendChild(li);
  }
}

// Sortea un amigo al azar y lo muestra
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('No hay amigos para sortear.');
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const elegido = amigos[indice];
  resultado.innerHTML = `<li>${elegido}</li>`;
}

// (Opcional) Enter para agregar rápidamente
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') agregarAmigo();
});
