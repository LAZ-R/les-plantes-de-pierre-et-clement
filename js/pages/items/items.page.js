import * as SERVICE_PWA from '../../pwa.service.js';
import * as DATA_ITEMS from "../../data/plants.data.js";
import * as COMPONENT_ITEMS_GRID from "../../components/itemsGridContainer/itemsGridContainer.component.js"
import * as COMPONENT_ITEM_PAD from "../../components/itemPad/itemPad.component.js"

const itemList = DATA_ITEMS.getItems();
const pageTitle = 'Nos Plantes';

const renderView = () => {

    SERVICE_PWA.setHTMLTitle(pageTitle);

    const page = document.createElement('div');
    page.appendChild(document.createElement('h1')).innerHTML =
        pageTitle;

    const gridContainer = COMPONENT_ITEMS_GRID.render();

    itemList.forEach(item => {
         gridContainer.appendChild(COMPONENT_ITEM_PAD.render(item, './details.html?' + 'id=' + item.id));
    });

    page.appendChild(gridContainer);
    
    document.getElementById('main').appendChild(page);
}

renderView();
