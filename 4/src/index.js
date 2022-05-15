const btn = document.querySelector('.search-button');
const search = document.querySelector('.search-bar');
btn.addEventListener('click',
() => {
    search.classList.toggle('active');
}
)