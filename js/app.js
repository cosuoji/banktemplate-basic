let userSection = document.getElementById("username")
let passwordSection = document.getElementById("password")
let submitButton = document.getElementById("submit")
let rejectMessage = document.getElementById("rejectSection")



submitButton.addEventListener("click", e =>{
    e.preventDefault()
    if(userSection.value !== "test" || passwordSection.value !== "test"){
        rejectMessage.innerHTML = "Username/Password not correct"
        errorClearSection()
    }

    else {
        nextPage()
        clearSection()
    }
   
})


function nextPage(){
    window.location.href = "./dashboard.html"
}


function clearSection(){
    userSection.value = ""
    passwordSection.value = ""
    rejectMessage.innerHTML = ''
}

function errorClearSection(){
    userSection.value = ""
    passwordSection.value = ""
}