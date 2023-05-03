function CriarFormulario() {
    const form = document.getElementById("root");

    form.innerHTML =
        `<div>   
        <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required>
            </div>
            <div>
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" required>
            </div>
            <div>
            <label for="cell">Telefone:</label>
            <input type="text" id="cell" name="cell" required>
            </div>
            <div>
            <button type="submit">Enviar Email</button>`;
}

function EnviarEmail() {
    var nome = document.getElementById('nome').value;
	var telefone = document.getElementById('cell').value;

	var email = document.getElementById('email').value;

	var corpoEmail = 'Nome: ' + nome + '%0D%0A';
	corpoEmail += 'Telefone: ' + telefone + '%0D%0A';
    corpoEmail += 'E-mail: ' + email + '%0D%0A';
    corpoEmail += 'Desejo entrar em contato com você para mais informações dos serviços';

	var linkEmail = 'mailto:nataliamello@hotmail.com';
	linkEmail += '?subject=Contato pelo Formulário do GlowUP';
	linkEmail += '&body=' + corpoEmail;



	window.location.href = linkEmail;
}