const mercury = data[0]
const venus = data[1]
const earth = data[2]
const mars = data[3]
const jupiter = data[4]
const saturn = data[5]
const uranus = data[6]
const neptune = data[7]
const title = document.getElementById('title')
const description = document.getElementById('text')
const stat1 = document.getElementById('stat1')
const stat2 = document.getElementById('stat2')
const stat3 = document.getElementById('stat3')
const stat4 = document.getElementById('stat4')
const image = document.getElementById('image')
const sourceLink = document.getElementById('source_link')
const root = document.querySelector(":root")
const overview = document.getElementById('overview')
const internal = document.getElementById("internal")
const geology = document.getElementById('surface')
let activePlanet = earth
let activeInfo = overview
let activeInfoString = "overview"


function update(planet) {
    title.innerHTML = planet.name
    stat1.innerHTML = planet.rotation
    stat2.innerHTML = planet.revolution
    stat3.innerHTML = planet.radius
    stat4.innerHTML = planet.temperature
    activePlanet = planet
    updateInfo(activeInfoString, activeInfo)
    root.style.setProperty('--color', planet.color)
}

function updateInfo(info, infoElement){
    document.getElementById("zoom").src = ""
    console.log(activeInfo)
    activeInfo.classList.remove("active")
    description.innerHTML = activePlanet[info].content;
    sourceLink.href = activePlanet[info].source
    activeInfo = infoElement
    activeInfoString = info
    activeInfo.classList.add("active")
    if (info == "structure"){
        image.src = activePlanet.images["internal"]
    }
    else if (info == "geology"){
        image.src = activePlanet.images.planet
        document.getElementById("zoom").src = activePlanet.images["geology"]
    }
    else{
        image.src = activePlanet.images.planet
    }
}
