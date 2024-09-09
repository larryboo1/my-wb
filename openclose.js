const navbar = document.getElementById("navbar");
const chidera = document.querySelector("#mobile-nav");
const openbtn = document.getElementById("open");
const closebtn = document.getElementById("close");
// console.log("close");


// function closenav() {
//     chidera.style.display = "none";
// }
openbtn.addEventListener("click", ()=>{
    chidera.style.display = "block";

} );

closebtn.addEventListener("click", ()=>{
    chidera.style.display = "none";

    // alert("Are you sure you want to close me!")
} );


