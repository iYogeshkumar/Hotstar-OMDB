let slideimagedata= JSON.parse(localStorage.getItem("imagebanner"))

console.log(slideimagedata);
let i=1;
let slideshow = document.getElementById("slideshow");
let img = document.createElement("img");
img.src = slideimagedata[0];
slideshow.append(img)

setInterval(function(){
    if(i==slideimagedata.length){
        i=0
    }

    let image = slideimagedata[i]
    slideshow.innerHTML = null;

    let img = document.createElement("img");
    img.src = image

    slideshow.append(img);
    i++;
}, 3000);