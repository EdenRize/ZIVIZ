export const utilService = {
    readJsonFile,
    makeId,
    makeLorem,
    getRandomInt,
    debounce,
    saveToStorage,
    loadFromStorage,
    getScreenSize,
    getWazeLink,
    geMapsLink
}

function readJsonFile(path) {
    const str = fs.readFileSync(path, 'utf8')
    const json = JSON.parse(str)
    return json
}

function makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (size > 0) {
        size--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}


function debounce(func, timeout = 300) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => { func.apply(this, args) }, timeout)
    }
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
}

function getScreenSize(screenSize) {

    if (screenSize < 500) {
        return 'mobile'
    } else if (screenSize >= 500 && screenSize < 630) {
        return 'mid-narrow'
    } else if (screenSize >= 630 && screenSize < 768) {
        return 'narrow'
    } else if (screenSize >= 768 && screenSize < 1024) {
        return 'tablet'
    } else {
        return 'desktop'
    }
}

function getWazeLink(lat, lng) {
    return `https://www.waze.com/live-map/directions?z=10&navigate=yes&to=ll.${lat}%2C${lng}`
}

function geMapsLink(lat, lng) {
    return `https://www.google.com/maps?q=${lat}%20${lng}&iwloc=output=embed&z=10&hl=he`
}