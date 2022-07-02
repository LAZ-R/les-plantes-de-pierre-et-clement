export const render = (item, route) => {
    const itemPad = document.createElement('a');
    itemPad.setAttribute('class', 'item-pad');
    itemPad.setAttribute('href', route);
    if (item.photos.length != 0) {
        itemPad.innerHTML = 
        '<div class="item-pad-image" style="background-image: url(./images/plants/' + item.photos[0] + ');" alt="item-depiction"></div>' +
        '<span class="item-pad-name">' + item.commonName + '</span>';
    } else {
        itemPad.innerHTML = 
        '<div class="item-pad-image" style="background-image: url(./images/plants/noPictureFound.png); background-size: 50%; background-repeat: no-repeat;" alt="item-depiction"></div>' +
        '<span class="item-pad-name">' + item.commonName + '</span>';
    }
    
    return itemPad;
}