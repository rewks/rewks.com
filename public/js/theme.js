const themeButtonLight = document.getElementById('themeButtonLight');
const themeButtonDark = document.getElementById('themeButtonDark');

themeButtonDark.addEventListener('click', function() {
    localStorage.theme = 'dark';
    setTheme();
});


themeButtonLight.addEventListener('click', function() {
    localStorage.theme = 'light';
    setTheme();
});

function setTheme() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            themeButtonDark.classList.add('hidden');
            themeButtonLight.classList.remove('hidden');
    } else {
            document.documentElement.classList.remove('dark');
            themeButtonLight.classList.add('hidden');
            themeButtonDark.classList.remove('hidden');
    }
}

setTheme();