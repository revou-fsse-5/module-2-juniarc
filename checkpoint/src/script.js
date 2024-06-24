const burgerBtn =  document.querySelector('#burgerBtn');
const headerNav = document.querySelector('#headerNavigation');
const closeBtn = document.querySelector('#closeBtn');
const searchBtn = document.querySelector('#searchBtn');
const searchNav = document.querySelector('#searchNav');
const signupModal = document.querySelector('#modalSignupForm');
const signupBtn = document.querySelector('#signupBtn');
const closeFormBtn = document.querySelector('#closeFormBtn');

burgerBtn.addEventListener('click', () => {
    if (searchNav.classList.contains('open')){
        searchNav.classList.remove('open');
        headerNav.classList.toggle('open')
    } else {
        headerNav.classList.toggle('open');
    }
});

closeBtn.addEventListener('click', () => {
    headerNav.classList.remove('open');
});

searchBtn.addEventListener('click', () => {
    searchNav.classList.toggle('open');
});

signupBtn.addEventListener('click', () => {
    signupModal.style.display = 'flex';
    headerNav.classList.remove('open');
});

closeFormBtn.addEventListener('click', () => {
    signupModal.style.display = 'none';
});
