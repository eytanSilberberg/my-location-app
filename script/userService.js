'use strict'
function createUser(email, bgcClr, fontClr, dob, time, age) {
    var newUser = {
        email,
        bgcClr,
        fontClr,
        dob,
        time,
        age
    }
    saveToStorage(STORAGE_KEY_USER, newUser)

}

function submitForm() {
    console.log('gh')
    var birthdayDB = loadFromStorage(STORAGE_KEY_BIRTHDAY) || {}
    // 
    var newUser = {}
    const els = document.querySelectorAll('[data-form]')
    // 
    els.forEach(target => {
        console.log(target.name)
        if (target.name === 'dob') birthdayDB.dob = target.value
        if (target.name === 'time') birthdayDB.time = target.value
        newUser[target.name] = target.value
    })
    createUser(newUser.email, newUser.colorBgc, newUser.colorFont, newUser.dob, newUser.time, newUser.age)
    saveToStorage(STORAGE_KEY_BIRTHDAY, birthdayDB)
}

function checkNextBirthday() {
    var birthdayDB = loadFromStorage(STORAGE_KEY_BIRTHDAY)
    if (!birthdayDB.dob || !birthdayDB.time) return
    var dobStr = `${birthdayDB.dob} ${birthdayDB.time}`
    var birthday = new Date(dobStr)
    var currDateTimeStamp = Date.now()
    var currDate = new Date(currDateTimeStamp)

    birthday.setFullYear(currDate.getFullYear())
    if (birthday.getTime() <= currDate.getTime()) birthday.setFullYear(birthday.getFullYear() + 1)
    var hoursUntilBirthday = getNextBirthday(birthday, currDate)
    return hoursUntilBirthday
}

function getNextBirthday(bDay, currDate) {
    const seconds = 1000
    const minute = seconds * 60
    const hour = minute * 60
    const day = hour * 24
    var diff = bDay.getTime() - currDate.getTime()
    const hoursUntilBirthday = Math.floor(diff / hour)
    return hoursUntilBirthday
}


function getColors() {
    const info = _getFromStorage(STORAGE_KEY_USER)
    const bgc = info.bgcClr
    const fontColor = info.fontClr
    return { bgc, fontColor }
}


function _getFromStorage(key) {
    return loadFromStorage(key)
}

