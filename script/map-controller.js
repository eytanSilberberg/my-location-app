'use strict'

function initMap() {
    var elBody = document.querySelector('body')
    var colorsForPage = getColors()
    elBody.style.backgroundColor = colorsForPage.bgc
    elBody.style.color = colorsForPage.fontColor
    moveToLocation(29.5577, 34.9519)
    gLocations = getLocations()

    renderLocations()
}


function onGetPosition() {
    if (!navigator.geolocation) {
        alert("HTML5 Geolocation is not supported in your browser.");
        return;
    }
    navigator.geolocation.getCurrentPosition(showLocation, handleLocationError);
}
function showLocation(position) {
    moveToLocation(position.coords.latitude, position.coords.longitude);
}

function renderLocations() {
    const locations = getLocations()
    var strHTML = locations.map(location =>
        `<li class="clean-list" onclick="onMoveToLocation(${location.lat},${location.lng})">
        ${location.locationTitle}<button onclick="onDeleteLocation('${location.locationTitle}',event)"> x</button></li>`
    )
    document.querySelector('.locations').innerHTML = strHTML.join('')
}

function onDeleteLocation(locName, ev) {
    ev.stopPropagation()
    deleteLocation(locName)
    renderLocations()
}

function addListeners() {
    map.addListener('click', (mapMouseEvent) => {
        saveLocation(mapMouseEvent)
        renderLocations()

    })
}

function handleLocationError(error) {
    console.log(error)
}

function onMoveToLocation(lat, lng, ev) {

    moveToLocation(lat, lng)
}

function downloadCSV(elLink) {
    const csvContent = getAsCSV()
    // const csvContent = 'Name,Age\nPopo,12\nShraga,30\nToto,19'
    elLink.href = 'data:text/csv;charset=utf-8,' + csvContent
}

