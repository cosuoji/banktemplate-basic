let checkingViewButton = document.getElementById("checkingViewSign")
let savingsViewButton = document.getElementById("savingsViewSign")
let checkingText = document.getElementById('checkingBalance')
let savingsText = document.getElementById('savingsBalance')
let logout = document.getElementById("logout")
let placeholder = checkingText.innerHTML
let savingsPlaceholder = savingsText.innerHTML


checkingViewButton.addEventListener("click", e=>{
   //checkingText.innerHTML = "$***,***.**";
    if(checkingText.innerHTML === "$***,***.**"){
        checkingText.innerHTML = placeholder
    } 
    else {
        checkingText.innerHTML = "$***,***.**"
    }
})

savingsViewButton.addEventListener("click", e=>{
    console.log("text")
   //checkingText.innerHTML = "$***,***.**";
    if(savingsText.innerHTML === "$***,***.**"){
        savingsText.innerHTML = savingsPlaceholder
    } 
    else {
        savingsText.innerHTML = "$***,***.**"
    }
})

logout.addEventListener("click", _ =>{
    returnPage()
})

function returnPage(){
    window.location.href = "index.html"
}