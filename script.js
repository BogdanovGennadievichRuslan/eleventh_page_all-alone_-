burgerMenu.onclick = function burgerMenu() {
    let header = document.getElementById('header');

    if (header.className === 'header') {
        header.className = 'header header-hamburger';
    } else {
        header.className = 'header';
    }
}