var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var subjectError = document.getElementById('subject-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var names = document.getElementById('contact-name').value;

    if(names.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }

    if(!names.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Enter full Name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #159924;"></i>';
    return true;

}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #159924;"></i>';
    return true;
}
function validateSubject(){
    var subject = document.getElementById('contact-subject').value;
    var required = 5;
    
    if (subject.length < 5 || subject.length > 20) {
    subjectError.innerHTML = 'minimum 5 to 20 characters long.';
    return false;
}
    subjectError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #159924;"></i>';
    return true; 

}
function validateMessage(){
    var message = document.getElementById('contact-message').value;

    if(message.length == 0){
        messageError.innerHTML = 'Enter the message';
        return false;
    }
    if(message.length < 10){
        messageError.innerHTML = 'minimum 10 charecters';
        messageError.innerHTML = 'Enter the message';
        return false;

    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #159924;"></i>';
}


function validateForm(){
    if(!validateName() || !validateEmail() || !validateSubject() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fill all blocks correctly';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
 
}