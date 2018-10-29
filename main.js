const overlay = document.querySelector('.overlay');

const hide = document.querySelector('#hide');
hide.addEventListener('click', () => {
    overlay.classList.remove('show');
});

const show = document.querySelector('#show');
show.addEventListener('click', () => {
    overlay.classList.add('show');
});