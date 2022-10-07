const share = document.getElementById('share');
const fig = document.getElementById('fig');
const close = document.getElementById('close');

share.addEventListener('click', () => {
    share.classList.toggle('active');
    fig.classList.toggle('active');
})

close.addEventListener('click', () => {
    fig.classList.remove('active');
})