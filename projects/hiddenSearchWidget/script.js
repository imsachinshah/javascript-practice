const btn = document.querySelector('.btn');
const search = document.getElementById('search');
const input = document.querySelector('input')

btn.addEventListener('click', (e) => {
    search.classList.toggle('active');
    input.focus();
})