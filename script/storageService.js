'use strict'
const STORAGE_KEY_BIRTHDAY = 'birthdayDB'
const STORAGE_KEY_USER = 'userDb'
const STORAGE_KEY_MAP = 'locationsDB'

function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}

