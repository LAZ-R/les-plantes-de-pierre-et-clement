import * as COMPONENT_FOOTER from '../../components/footer/footer.component.js'
import * as SERVICE_PWA from '../../pwa.service.js';

const pageTitle = 'Les Plantes de Pierre & Clément';

const renderView = () => {

    SERVICE_PWA.setHTMLTitle(pageTitle);
    
    const page = document.createElement('div');
    page.appendChild(document.createElement('h1')).innerHTML =
        'Salut !';
    page.appendChild(document.createElement('p')).innerHTML =
        'Bienvenue sur le site qui regroupe toutes nos plantes, ansi que des informations pour bien s\'en occuper';
        page.appendChild(document.createElement('p')).innerHTML =
        'Pour chaque plante sont documentés :' +
        '<ul>'+
            '<li>l\'origine</li>' +
            '<li>l\'exposition lumineuse</li>' +
            '<li>la température de conservation</li>' +
            '<li>le type de substrat</li>' +
            '<li>les taux d\'humidité (aérien et terrestre)</li>' +
            '<li>les techniques de multiplication</li>' +
        '</ul>';

    const plantsButton = document.createElement('button');
    plantsButton.setAttribute('class', 'primary-button');
    plantsButton.addEventListener('click', () => {
        window.open('./items.html', '_self');
    })
    plantsButton.innerHTML = 'Découvrir nos plantes';

    page.appendChild(plantsButton);
    
    document.getElementById('main').appendChild(page);
}

renderView();
COMPONENT_FOOTER.render();