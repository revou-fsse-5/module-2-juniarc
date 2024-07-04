const IS_DARK_MODE = 'isDarkMode';
const DARK_THEME_CLASS = 'dark-theme'

const burgerBtn =  document.querySelector('#burgerBtn');
const headerNav = document.querySelector('#headerNavigation');
const closeBtn = document.querySelector('#closeBtn');
const searchBtn = document.querySelector('#searchBtn');
const searchNav = document.querySelector('#searchNav');
const signupModal = document.querySelector('#modalSignupForm');
const signupBtn = document.querySelector('#signupBtn');
const closeFormBtn = document.querySelector('#closeFormBtn');
const themeBtn = document.querySelector('#themeBtn');

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

/* Mode Configuration */

// Check avaibility localStorage
function isStorageExist() {
    if (typeof (Storage) === undefined ){
        alert('Your browser did not support local storage');
        return false;
    }
    return true;
}

themeBtn.addEventListener('click', () => {
    if(document.body.classList.contains(DARK_THEME_CLASS)) {
        document.body.classList.remove(DARK_THEME_CLASS);
        localStorage.setItem(IS_DARK_MODE, false);
    } else {
        document.body.classList.add(DARK_THEME_CLASS);
        localStorage.setItem(IS_DARK_MODE, true)
    }
});

document.addEventListener('DOMContentLoaded', () => {
    if(isStorageExist()) {
        const getModeFromStorage = localStorage.getItem(IS_DARK_MODE);
    if (getModeFromStorage === 'true') {
        document.body.classList.add(DARK_THEME_CLASS);
    }
    }
});
