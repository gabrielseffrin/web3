'use strict';


let login = document.getElementById('logar').onclick = () => {

    let email = document.getElementById('inputEmail').value + '';
    let acao = document.getElementById('acao');
    switch (email) {
        case 'programador@gmail.com':
            window.location.href = '/app/pages/perfil/perfil.html';
            acao.innerHTML = '<p>b</p>';
            break;

        case 'rh@rh.com':
            window.location.href = '/app/pages/rh/rh.html';
            break;

        case 'chefe@gmail.com':
            window.location.href = '/app/pages/chefe/chefe.html';
            break;

        default:
            window.alert('Login Errado');
            break;
    }

};

/*
function isNameValid() {
   let name = document.getElementById('inputName').value;

    if (!name.match('[A-Z][a-z].* [A-Z][a-z].*'))
        window.alert('Nome Inválido');
}
*/