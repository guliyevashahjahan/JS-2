let opacity = document.querySelector("#opacity");
let border = document.querySelector("#borderRadius");

let images = document.querySelectorAll("img");

opacity.addEventListener("input",function () {
    localStorage.setItem("opacity", opacity.value)
images.forEach(img=>{
    img.style.opacity = localStorage.getItem("opacity")
})
})
 

borderRadius.addEventListener("input", function() {
    localStorage.setItem("borderRadius", borderRadius.value)
    images.forEach(img=>{
        img.style.borderRadius =localStorage.getItem("borderRadius")+"%"
    })
})
onload = ()=>{
    images.forEach(img=>{
        img.style.borderRadius =localStorage.getItem("borderRadius")+"%"
        img.style.opacity = localStorage.getItem("opacity")
    })
    opacity.value = localStorage.getItem("opacity")
    borderRadius.value  = localStorage.getItem("borderRadius")
}