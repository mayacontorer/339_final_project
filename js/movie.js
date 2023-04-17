let image = document.querySelectorAll("img");
let content = document.querySelector(".about");

window.addEventListener("load", function(){
    content.classList.add("center");
})

for(var i=0; i < image.length; i++){
    let current_image = image[i];
    let image_alt = current_image.alt;
    let image_url = current_image.src;
    current_image.addEventListener("click", function(){
        console.log(image_alt);
        document.body.style.backgroundImage = "url('"+ image_url + "')";
    })
}