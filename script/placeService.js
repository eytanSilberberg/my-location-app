'use strict'
var gLocations
let map
let marker

function moveToLocation(lat, lng) {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: { lat: lat, lng: lng },
    });
    marker = new google.maps.Marker({
        position: { lat: lat, lng: lng },
        map: map,
    });
    addListeners()
}


function saveLocation(ev) {
    var locationName = prompt('name the location')
    let newPlace = {
        locationTitle: locationName,
        lat: ev.latLng.lat(),
        lng: ev.latLng.lng()
    }
    gLocations.push(newPlace)
    _saveLocationsToStorage()

}


function _saveLocationsToStorage() {
    saveToStorage(STORAGE_KEY_MAP, gLocations)
}

function getLocations() {
    return loadFromStorage(STORAGE_KEY_MAP) || []

}



function deleteLocation(locName) {
    var requestedLocationIdx = gLocations.findIndex(location => location.locationTitle === locName)
    gLocations.splice(requestedLocationIdx, 1)
    _saveLocationsToStorage()
}

function getAsCSV() {
    let csvStr = `LocationName,Lat,Lng`
    const locations = getLocations()
    locations.forEach(location => {
        const csvLine = `\n${location.locationTitle}, ${location.lat},${location.lng}`;
        csvStr += csvLine
    })
    return csvStr
}