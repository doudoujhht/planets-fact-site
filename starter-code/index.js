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
const overview1 = document.getElementById('overview-1')
const internal1 = document.getElementById("internal-1")
const geology1 = document.getElementById('surface-1')
const main = document.querySelector("main")
const categorie1 = document.getElementById('categorie-1')
const navList = document.getElementById('nav-list')
let activePlanet = earth
let activeInfo = overview
let activeInfoString = "overview"
let activeInfoMobile = overview1
let ham = true


function update(planet) {
    title.innerHTML = planet.name
    stat1.innerHTML = planet.rotation
    stat2.innerHTML = planet.revolution
    stat3.innerHTML = planet.radius
    stat4.innerHTML = planet.temperature
    activePlanet = planet
    updateInfo(activeInfoString, activeInfo,activeInfoMobile)
    root.style.setProperty('--color', planet.color)
}

function updateInfo(info, infoElement,infoElementMobile){
    document.getElementById("zoom").src = ""
    activeInfo.classList.remove("active")
    activeInfoMobile.classList.remove("active")
    console.log(activeInfoMobile)
    description.innerHTML = activePlanet[info].content;
    sourceLink.href = activePlanet[info].source
    activeInfo = infoElement
    activeInfoString = info
    activeInfoMobile = infoElementMobile
    console.log(activeInfoMobile)
    activeInfo.classList.add("active")
    activeInfoMobile.classList.add("active")
    console.log(activeInfoMobile)
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
    if(window.innerWidth<600){
        main.style.display = "block"
        main.style.opacity = "100"
        categorie1.style.display = "flex"
        categorie1.style.opacity = "100"
        navList.style.display = "none"
        ham = true
    }
}

function nav(){
    if(ham){   main.style.display = "none"
        main.style.opacity = "0"
        categorie1.style.display = "none"
        categorie1.style.opacity = "0"
        navList.style.display = "flex"
        ham = false}
    else{
        main.style.display = "block"
        main.style.opacity = "100"
        categorie1.style.display = "flex"
        categorie1.style.opacity = "100"
        navList.style.display = "none"
        ham = true}
}

window.addEventListener("resize", function(){
    if(window.innerWidth>600){
        navList.style.display = "flex"
        main.style.display = "block"
        categorie1.style.display = "none"
    }
})

