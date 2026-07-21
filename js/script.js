const contactBtn = document.getElementById("contactBtn");

const contactWindow = document.getElementById("contactWindow");

const overlay = document.getElementById("overlay");

const closeBtn = document.getElementById("closeBtn");

contactBtn.onclick = () => {

    contactWindow.style.display = "block";

    overlay.style.display = "block";

}

closeBtn.onclick = closeWindow;

overlay.onclick = closeWindow;

function closeWindow(){

    contactWindow.style.display = "none";

    overlay.style.display = "none";

}
