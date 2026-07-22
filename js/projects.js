const images = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const close = document.getElementById("close");

const prev = document.getElementById("prev");

const next = document.getElementById("next");

let current = 0;

function openImage(index){

    current=index;

    lightbox.style.display="flex";

    lightboxImage.src=images[current].src;

}

images.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        openImage(index);

    });

});

close.onclick=()=>{

    lightbox.style.display="none";

};

lightbox.onclick=(e)=>{

    if(e.target===lightbox)

        lightbox.style.display="none";

};

next.onclick=()=>{

    current++;

    if(current>=images.length)

        current=0;

    lightboxImage.src=images[current].src;

};

prev.onclick=()=>{

    current--;

    if(current<0)

        current=images.length-1;

    lightboxImage.src=images[current].src;

};

document.addEventListener("keydown",(e)=>{

    if(lightbox.style.display!=="flex")

        return;

    if(e.key==="Escape")

        lightbox.style.display="none";

    if(e.key==="ArrowRight")

        next.click();

    if(e.key==="ArrowLeft")

        prev.click();

});
