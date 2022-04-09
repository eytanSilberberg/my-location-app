'use strict'
function onInitHomePage() {
    var userInfo = loadFromStorage(STORAGE_KEY_USER)
    var hoursUntilBirthday = checkNextBirthday()
    console.log(hoursUntilBirthday)
    renderHomePage(hoursUntilBirthday)

}

// function onInitUserPage() {
//     renderUserPage()
// }

// function onSubmitForm(ev) {

//     ev.preventDefault()
//     submitForm()
//     checkNextBirthday()
//     var hoursUntilBirthday = checkNextBirthday()
//     console.log(hoursUntilBirthday)
//     renderUserPage()
// }

// function renderAge(el) {
//     console.log(el.value)
//     document.querySelector('.age-display').innerText = el.value
// }

function renderHomePage(hours) {
    var elBody = document.querySelector('body')
    var colorsForPage = getColors()
    elBody.querySelector('.hours-until-birthday').innerText = hours
    elBody.style.backgroundColor = colorsForPage.bgc
    elBody.style.color = colorsForPage.fontColor
}

// function renderUserPage() {
//     var pageInfo = loadFromStorage(STORAGE_KEY_USER)
//     if (!pageInfo) return
//     var elBody = document.querySelector('body')
//     var bodyStyle = elBody.style
//     bodyStyle.backgroundColor = pageInfo.bgcClr
//     bodyStyle.color = pageInfo.fontClr
// }





// 'AIzaSyDF4FHaxqJUZ9tPSbkNlkdl2ZSZPhQS4no'