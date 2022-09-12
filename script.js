const form = document.getElementById("form_id");
const submit = document.getElementById("submit_id");
const input = document.querySelectorAll("input");
const error = document.getElementsByClassName("error");
let comonError = document.getElementById("error_msg5");
let firstName = document.getElementById("fname_id");
let secondName = document.getElementById("lname_id");
let email = document.getElementById("email_id");
let password = document.getElementById("pswd_id");

// console.log(input);
let i;



form.addEventListener("submit",formSubmission)

function formSubmission(event){
    // console.log(event);
    event.preventDefault();

    for(i=0;i<input.length;i++){

        if(input[i].value.length == 0){
            console.log("hacked");
            input[i].style.border = "2px solid red";
            comonError.style.display = "block";   
        }
    }

}

//first name validation

let firstNameValue;  
let fregName = /^[a-zA-Z]+$/;

firstName.addEventListener("keyup",firstNameValidation)

function firstNameValidation(){
    firstNameValue = firstName.value;
    console.log(firstNameValue);
    if(!firstNameValue.match(fregName)){
        document.getElementById("error_img1").style.display = "block";
        document.getElementById("error_msg1").innerHTML = "enter valid name"
    }

    else if (firstNameValue.length == 0){
        document.getElementById("error_msg1").innerHTML = " Name cannot be empty"
    }
    else{
       
    }   
}

 firstName.addEventListener("focusout",firstNameValidation);



 //second name validation

let secondNameValue;  
let lregName = /^[a-zA-Z]+$/;

secondName.addEventListener("keyup",secondNameValidation)

function secondNameValidation(){
    secondNameValue = secondName.value;
    console.log(secondNameValue);
    if(!secondNameValue.match(lregName)){
        document.getElementById("error_img2").style.display = "block";
        document.getElementById("error_msg2").innerHTML = "enter valid name"
    }

    else if (secondNameValue.length == 0){
        document.getElementById("error_msg2").innerHTML = "Name cannot be empty"
    }
    else{
       
    }   
}

secondName.addEventListener("focusout",secondNameValidation);


//email validation

let emailValue;  
let Emailreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

email.addEventListener("keyup",emailValidation)

function emailValidation(){
    emailValue = email.value;
    console.log(emailValue);
    if(!emailValue.match(Emailreg)){
        document.getElementById("error_img3").style.display = "block";
        document.getElementById("error_msg3").innerHTML = "enter valid email id"
    }

    else if (emailValue.length == 0){
        document.getElementById("error_msg3").innerHTML = "cannot be empty"
    }
    else{
       
    }   
}

email.addEventListener("focusout",emailValidation);

// password validation

password.addEventListener("keyup",passwordValidation)

passwordValue = password.value;

function passwordValidation(){
    var error_msg4 = []

    if (passwordValue.length < 8) {
        error_msg4.push("Your password must be at least 8 characters")
  }
  if (passwordValue.search(/[a-z]/) < 0) {
       error_msg4.push("Your password must contain at least one lowercase letter.")
  }
  if (passwordValue.search(/[A-Z]/) < 0) {
      error_msg4.push("Your password must contain at least one uppercase letter.")
  }
//   if (passwordValue.search(/[0-9]/) < 0) {
//       error_msg4.push("Your password must contain at least one digit.")
//   }
//   if(passwordValue.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:\-]/) < 0) {
//     error_msg4.push("Your password must contain at least one special character.")
//   }
    
  if (error_msg4.length > 0) {
    document.getElementById("error_msg4").innerHTML = error_msg4.join("<br>")
    return false;
  }
  return true;
}