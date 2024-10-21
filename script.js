const form = document.getElementById('cadastroForm');
const tabelaCorpo = document.getElementById('cadastroTableBody');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    const novaLinha = document.createElement('tr');
    const celulaNome = document.createElement('td');
    celulaNome.textContent = nome;
    const celulaEmail = document.createElement('td');
    celulaEmail.textContent = email;

    novaLinha.appendChild(celulaNome);
    novaLinha.appendChild(celulaEmail);
    tabelaCorpo.appendChild(novaLinha);
    form.reset();
});
