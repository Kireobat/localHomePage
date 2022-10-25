document.addEventListener("mousemove", (event) =>{
    let x = event.clientX - 10;
    let y = event.clientY - 15;
    console.log("Mouse X: " + event.clientX + " Mouse Y: " + event.clientY);
    //circle.style.transform = "translate(" + x + "px, " + y + "px)";
})