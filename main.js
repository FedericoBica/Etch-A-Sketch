const container = document.getElementById("container");
const blackBtn = document.getElementById("blackBtn");
const rainbowBtn = document.getElementById("rainbowBtn");
const color = document.querySelector(".color");
const clearBtn = document.getElementById("clearBtn");
const grid = document.querySelector(".grid");
let sizeEl = document.querySelector(".size")
let size = sizeEl.value

let draw = false

function square(size) {
    container.style.setProperty("--size", size)
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div")
        div.classList.add("pixel")

        div.addEventListener('mouseover', function() {
            if (!draw) return 
            div.style.backgroundColor = color.value
        })

        div.addEventListener('mousedown', function() {
            if (!draw) return 
            div.style.backgroundColor = color.value
        })

        container.appendChild(div)
    }
}

window.addEventListener("mousedown", function() {
    draw = true
})

window.addEventListener("mouseup", function() {
    draw = false
})

function clear(){
    container.innerHTML = ''
    square(size) 
}

clearBtn.addEventListener("click", clear)

sizeEl.addEventListener("change", function() {
    size = sizeEl.value
    clear()
})

square(size)




