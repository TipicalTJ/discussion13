window.addEventListener("load", function() {
    let text = document.querySelectorAll("figcaption")[1].innerHTML;
    window.alert(text);
});

document.querySelector("img").addEventListener("mouseover", function(event) {
    console.log(event)
    // document.querySelector("body").style.backgroundImage = 
});