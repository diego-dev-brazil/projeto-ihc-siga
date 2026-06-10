function entrarSistema() {
    document.getElementById('tela-login').style.display = 'none';
    document.getElementById('tela-painel').style.display = 'block';
}

function sairSistema() {
    document.getElementById('tela-painel').style.display = 'none';
    document.getElementById('tela-login').style.display = 'flex';
}

function mostrarInicio() {
    document.getElementById('conteudo-inicio').style.display = 'block';
    document.getElementById('conteudo-faq').style.display = 'none';
    document.getElementById('botao-inicio').classList.add('ativo');
    document.getElementById('botao-faq').classList.remove('ativo');
}

function mostrarFaq() {
    document.getElementById('conteudo-inicio').style.display = 'none';
    document.getElementById('conteudo-faq').style.display = 'block';
    document.getElementById('botao-inicio').classList.remove('ativo');
    document.getElementById('botao-faq').classList.add('ativo');
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

new window.VLibras.Widget('https://vlibras.gov.br/app');