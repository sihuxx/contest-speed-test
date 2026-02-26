const ctx = canvas.getContext("2d")
let painting = false

function start() {
    painting = true
    ctx.beginPath()
}
function stop() {
    painting = false
}
function move(e) {
    const x = e.offsetX
    const y = e.offsetY
    if(!painting) {
        ctx.moveTo(x, y)
    } else {
        ctx.lineTo(x, y)
        ctx.stroke()
    }
}

saveBtn.addEventListener("click", () => {
    const a = document.createElement('a')
    a.href = canvas.toDataURL("image/png")
    a.download = 'image.png'
    a.click()
})
clearBtn.addEventListener("click", () => {
    clearRect(0, 0, 500, 500)
})

canvas.addEventListener("mousemove", move)
canvas.addEventListener("mousedown", start)
canvas.addEventListener("mouseup", stop)
canvas.addEventListener("mouseleave", stop)