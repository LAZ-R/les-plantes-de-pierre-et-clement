import * as DATA_ITEMS from '../../data/plants.data.js';
import * as DATA_COMMON from '../../data/common.data.js';
import * as SERVICE_PWA from '../../pwa.service.js';

const ID = new URLSearchParams(window.location.search).get('id');
const item = DATA_ITEMS.getItemById(ID);
const pageTitle = item.scientificName;

const renderView = () => {

    SERVICE_PWA.setHTMLTitle(pageTitle);

    const page = document.createElement('div');

    const h1Title = document.createElement('h1');
    h1Title.setAttribute('class', 'item-price');
    h1Title.innerHTML = item.scientificName;
    page.appendChild(h1Title)
        
    page.appendChild(document.createElement('p')).innerHTML =
        '<i>"'+item.commonName+'"</i>';

    const itemContainer = document.createElement('div');
    itemContainer.setAttribute('class', 'item-container');

    let imgDiv = '';
    if (item.photos.length != 0) {
        imgDiv = '<div id="imgDiv" class="item-details-image" style="background-image: url(./images/plants/' + item.photos[0] + ');"></div>'
    } else {
        imgDiv = '<div id="imgDiv" class="item-details-image" style="background-image: url(./images/plants/noPictureFound.png); background-size: 50%; background-repeat: no-repeat;"></div>'
    }

    itemContainer.innerHTML = imgDiv;

    const itemDetails = document.createElement('div');
    itemDetails.setAttribute('class', 'item-details');

        const itemOriginDetails = document.createElement('div');
        itemOriginDetails.setAttribute('class', 'detail');
        itemOriginDetails.innerHTML = 'Origine : ';

            const itemOrigin = document.createElement('p');
            itemOrigin.setAttribute('class', 'detail-text');
            itemOrigin.innerHTML = '<span class="detail-highlight">' + item.area + '</span>';

            itemOriginDetails.appendChild(itemOrigin);
        
        itemDetails.appendChild(itemOriginDetails);

        const itemExpositionDetails = document.createElement('div');
        itemExpositionDetails.setAttribute('class', 'detail');
        itemExpositionDetails.innerHTML = 'Exposition : ';

            const itemExposition = document.createElement('p');
            itemExposition.setAttribute('class', 'detail-text');
            itemExposition.innerHTML = 'de <span class="detail-highlight">' + item.sunExposure.min + '</span> à <span class="detail-highlight">' + item.sunExposure.max + '</span>';

            itemExpositionDetails.appendChild(itemExposition);
        
        itemDetails.appendChild(itemExpositionDetails);

        const itemTemperatureDetails = document.createElement('div');
        itemTemperatureDetails.setAttribute('class', 'detail');
        itemTemperatureDetails.innerHTML = 'Température : ';

            const itemTemperature = document.createElement('p');
            itemTemperature.setAttribute('class', 'detail-text');
            itemTemperature.innerHTML = 'de <span class="detail-highlight">' + item.temperature.min + '°C</span> à <span class="detail-highlight">' + item.temperature.max + '°C</span>';

            itemTemperatureDetails.appendChild(itemTemperature);
        
        itemDetails.appendChild(itemTemperatureDetails);

        const itemSoilDetails = document.createElement('div');
        itemSoilDetails.setAttribute('class', 'detail');
        itemSoilDetails.innerHTML = 'Substrat : ';

            const itemSoil = document.createElement('p');
            itemSoil.setAttribute('class', 'detail-text');

            for (let index = 0; index < item.soil.length; index++) {
                const element = item.soil[index];

                const itemSoilElement = document.createElement('span');
                itemSoilElement.setAttribute('class', 'detail-highlight');
                itemSoilElement.innerHTML = element;

                itemSoil.appendChild(itemSoilElement);

                if (index != item.soil.length - 1) {
                    const separator = document.createElement('span');
                    separator.setAttribute('class', 'separator');
                    separator.innerHTML = '|';

                    itemSoil.appendChild(separator);
                }
            }

            itemSoilDetails.appendChild(itemSoil);
        
        itemDetails.appendChild(itemSoilDetails);

        const itemHumidityDetails = document.createElement('div');
        itemHumidityDetails.setAttribute('class', 'detail');
        itemHumidityDetails.innerHTML = 'Humidité : ';

            const itemAirHumidity = document.createElement('p');
            itemAirHumidity.setAttribute('class', 'detail-text');
            itemAirHumidity.innerHTML = 'Air : de <span class="detail-highlight">' + item.humidity.air.min + '%</span> à <span class="detail-highlight">' + item.humidity.air.max + '%</span>';

            itemHumidityDetails.appendChild(itemAirHumidity);

            const itemSoilHumidity = document.createElement('p');
            itemSoilHumidity.setAttribute('class', 'detail-text');
            if (item.soil == DATA_COMMON.SOIL.EPIPHYTE) {
                itemSoilHumidity.innerHTML = 'Substrat : <span class="detail-highlight">' + item.humidity.soil.min + '</span>';
            } else {
                itemSoilHumidity.innerHTML = 'Substrat : de <span class="detail-highlight">' + item.humidity.soil.min + '</span> à <span class="detail-highlight">' + item.humidity.soil.max + '</span>';
            }
            
            itemHumidityDetails.appendChild(itemSoilHumidity);
        
        itemDetails.appendChild(itemHumidityDetails);

        const itemMultiplicationDetails = document.createElement('div');
        itemMultiplicationDetails.setAttribute('class', 'detail');
        itemMultiplicationDetails.innerHTML = 'Multiplication : ';

            const itemMultiplication = document.createElement('p');
            itemMultiplication.setAttribute('class', 'detail-text');

            for (let index = 0; index < item.multiplication.length; index++) {
                const element = item.multiplication[index];

                const itemMultiplicationElement = document.createElement('span');
                itemMultiplicationElement.setAttribute('class', 'detail-highlight');
                itemMultiplicationElement.innerHTML = element;

                itemMultiplication.appendChild(itemMultiplicationElement);

                if (index != item.multiplication.length - 1) {
                    const separator = document.createElement('span');
                    separator.setAttribute('class', 'separator');
                    separator.innerHTML = '|';

                    itemMultiplication.appendChild(separator);
                }
            }

            itemMultiplicationDetails.appendChild(itemMultiplication);
        
        itemDetails.appendChild(itemMultiplicationDetails);

            '<div class="detail">Substrat : ' +
                '<p class="detail-text"><span class="detail-highlight">' + item.soil + '</span></p>' +
            '</div>' +

            '<div class="detail">Humidité : ' +
                '<p class="detail-text">Air : de <span class="detail-highlight">' + item.humidity.air.min + '%</span> à <span class="detail-highlight">' + item.humidity.air.max + '%</span></p>' +
                '<p class="detail-text">Substrat : de <span class="detail-highlight">' + item.humidity.soil.min + '</span> à <span class="detail-highlight">' + item.humidity.soil.max + '</span></p>' +
            '</div>' +

            '<div class="detail">Multiplication : ' +
                '<p class="detail-text"><span class="detail-highlight">' + item.multiplication + '</span></p>' +
            '</div>' +
        '</div>';
    itemContainer.appendChild(itemDetails);

    page.appendChild(itemContainer);
    
    document.getElementById('main').appendChild(page);
}

const changePhotos = (index) => {
    const imgDiv = document.getElementById('imgDiv');
    imgDiv.setAttribute('style', 'background-image: url(./images/plants/' + item.photos[index] + ');');
    index ++;
    if (index == item.photos.length) {
        index = 0;
    }
    setTimeout(() => {
        changePhotos(index);
    }, 4000);
}

renderView();
if (item.photos.length != 0) {
    changePhotos(0);
}