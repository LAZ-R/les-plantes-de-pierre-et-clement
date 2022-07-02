export const render = () => {
    const year = new Date().getFullYear();
    const footer = document.createElement('footer');
    footer.innerHTML =
        '<div>' +
            '&copy; ' + year + ' - v 1.0 - <a href="https://laz-r.github.io/">laz_R</a> - <a href="./about.html">About</a>' +
        '</div>';

    document.getElementById('body').appendChild(footer);
}