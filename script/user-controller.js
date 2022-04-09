function onInitUserPage() {
    renderUserPage()
}

function onSubmitForm(ev) {

    ev.preventDefault()
    submitForm()
    checkNextBirthday()
    var hoursUntilBirthday = checkNextBirthday()
    console.log(hoursUntilBirthday)
    renderUserPage()
}

function renderAge(el) {
    console.log(el.value)
    document.querySelector('.age-display').innerText = el.value
}

function renderUserPage() {
    var pageInfo = loadFromStorage(STORAGE_KEY_USER)
    if (!pageInfo) return
    var elBody = document.querySelector('body')
    var bodyStyle = elBody.style
    bodyStyle.backgroundColor = pageInfo.bgcClr
    bodyStyle.color = pageInfo.fontClr
}