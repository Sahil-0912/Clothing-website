const unameRejex = /^[a-z A-Z .]*$/ 
var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const emailRejex = 
document.querySelector('#logindata').addEventListener('click',() => {
    const unameemail = document.querySelector('#unameemail').value
    const Password = document.querySelector('#Password').value

    // span 
    const uname_Error = document.querySelector('#uname_Error')
    const password_Error = document.querySelector('#password_Error')


    if(unameemail==""){
        uname_Error.innerHTML = "Enter the UserNamme or Email..."
    }else if(!unameRejex.test(unameemail)){
        uname_Error.innerHTML = "Enter the Valid UserName or Email...."
    }else{
        uname_Error.innerHTML = " "
    }

    if(Password==""){
        password_Error.innerHTML = "Enter the Password..."
    }else if(!Password.test(Password)){
        password_Error.innerHTML = "Enter the Correct Password...."
    }else{
        password_Error.innerHTML = " "
    }

})