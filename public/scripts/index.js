const buttonConvert = document.querySelector("#page-home main #convert_button")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")

buttonConvert.addEventListener("click", () => {
    modal.classList.remove("hide")
})

close.addEventListener("click", () => {
    modal.classList.add("hide")
})


// const buttonCopy = document.querySelector(#modal #copy_button)
// document.getElementById(buttonCopy).addEventListener(“click”, function(){

//     document.getElementById(“texto”).select();
    
//     document.execCommand(‘copy’);
    
//     });

console.log("ola")
