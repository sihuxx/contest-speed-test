const canvas = $("canvas")
const ctx = canvas.getContext("2d")
const saveBtn = $(".save")
const clearBtn = $(".clear")
let painting = false

function stopPainting() {
  painting = false
}
function startPainting() {
  painting = true
  ctx.beginPath()
}
function moveMouse(e) {
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
  const a = document.createElement("a")
  a.href = canvas.toDataURL("image/png")
})