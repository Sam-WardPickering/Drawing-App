// const canvas = document.getElementById("drawpad");

window.addEventListener("load", () => {
    
const canvas = document.querySelector("#drawpad")
const ctx = canvas.getContext ("2d")

canvas.height = window.innerHeight
canvas.width = window.innerWidth

let painting = false

function startPosition(){
    painting = true
}

function endPosition(){
    painting = false
}

function draw(e){
    if(!painting) return
    ctx.lineWidth = 10 
    ctx.lineCap = ("round")
    ctx.lineTo(e.clientX, e.clientY)
    ctx.stroke
}

canvas.addEventListener("mouseDown", startPosition);
canvas.addEventListener("mouseUp", endPosition);
canvas.addEventListener("draw", draw);

});

// doing this to save changes on github

