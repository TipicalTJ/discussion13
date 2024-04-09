// Challenge 1 Script

let heading = document.querySelector("h1")
console.log(heading)

heading.addEventListener("load", function () {
    console.log("Page loaded")
    heading.className = "heading";
})

document.querySelector("body").addEventListener("dblclick", function () {
    let newDate = new Date()
    
    window.alert("newDate")
})