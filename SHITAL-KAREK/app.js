var main = document.querySelector("#main")
var crsr = document.querySelector(".cursor")

// dets == gives information about when the mouse moving whats ghatnayae gat rhi uske sath  dets.x x axis pr mouse kitna use ho rha hai dets.y y axis pr kitna mouse use ho rha hai

main.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
})