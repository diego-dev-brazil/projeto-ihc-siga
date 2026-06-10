function entrarSistema() {
    document.getElementById('tela-login').style.display = 'none';
    document.getElementById('tela-painel').style.display = 'block';
}

function sairSistema() {
    document.getElementById('tela-painel').style.display = 'none';
    document.getElementById('tela-login').style.display = 'flex';
}

document.getElementById('alternador-tema').addEventListener('click', function() {
    document.body.classList.toggle('modo-escuro');
    const icone = this.querySelector('i');
    if (document.body.classList.contains('modo-escuro')) {
        icone.classList.remove('fa-moon');
        icone.classList.add('fa-sun');
    } else {
        icone.classList.remove('fa-sun');
        icone.classList.add('fa-moon');
    }
});