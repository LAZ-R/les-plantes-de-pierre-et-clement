export const render = () => {
    const header = document.createElement('header');
    header.innerHTML =
        '<img src="./images/logo-blanc.png" class="header-logo" alt="app logo" />' +
        '<nav class="header-nav">' +
            '<ul class="header-nav-ul">' +
                '<li class="header-nav-item">' +
                    '<a href="./index.html">Accueil</a>' +
                '</li>' +
                '<li class="header-nav-item">' +
                    '<a href="./items.html">Plantes</a>' +
                '</li>' +
            '</ul>' +
        '</nav>';

    document.getElementById('body').insertBefore(header, document.getElementById('main'));
}