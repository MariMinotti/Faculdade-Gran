const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
    if (document.body.classList.contains('light-theme')) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        switcher.textContent = "Claro";
    } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        switcher.textContent = "Escuro";
    }
});


