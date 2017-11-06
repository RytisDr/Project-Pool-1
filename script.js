///////////////////FUNCTIONS FOR EACH INPUT WINDOW IN THE FORM/////////////////////
function myFName() {
    let x = document.getElementById("name").value;
    let nameInput = document.getElementById("name");
    if (x == "") {
        nameInput.classList.add("inputIncorrect");
    } else {
        nameInput.classList.add("inputCorrect");
    }
}
function myLastName() {
    let x = document.getElementById("lName").value;
    let lNameInput = document.getElementById("lName");
    if (x == "") {
        lNameInput.classList.add("inputIncorrect");
    } else {
        lNameInput.classList.add("inputCorrect");
    }
}
function myAge() {
    let x = document.getElementById("age").value;
    let ageInput = document.getElementById("age");
    if (isNaN(x) || x < 1 || x > 100) {
        ageInput.classList.add("inputIncorrect");
    } else {
        ageInput.classList.add("inputCorrect");
    }
}
function myShoeSize() {
    let x = document.getElementById("size").value;
    let sizeInput = document.getElementById("size");
    if (isNaN(x) || x < 35 || x > 50) {
        sizeInput.classList.add("inputIncorrect");
    } else {
        sizeInput.classList.add("inputCorrect");
    }
}

function myPostCode() {
    let x = document.getElementById("postal").value;
    let postInput = document.getElementById("postal");
    //if (isNaN(x) || x < 1000 || x > 9999) { ///switched to 4 digits requirement instead/////////////////////////////////////
    if (isNaN(x) || x.length!=4) {
        postInput.classList.add("inputIncorrect");
    } else {
        postInput.classList.add("inputCorrect");
    }
}
function myEmail() {
    let x = document.getElementById("email").value;
    let emailInput = document.getElementById("email");
    if (x.includes("@") && x.includes(".")) {

       emailInput.classList.add("inputCorrect");

    } else {
       emailInput.classList.add("inputIncorrect");
    }
}
function myCredit(){
    let x = document.getElementById("CreditNumber").value;
    let cNumberInput = document.getElementById("CreditNumber");
    let y = document.getElementById("creditDate").value;
    let expDateInput = document.getElementById("creditDate");
    let z = document.getElementById("securityCode").value;
    let secCodeInput = document.getElementById("securityCode");
    if (isNaN(x)  || x.length!=16) {
        cNumberInput.classList.add("inputIncorrect");
    } else {
        cNumberInput.classList.add("inputCorrect");
    }
    if (y.includes("/")){
        expDateInput.classList.add("inputCorrect");
    } else {
        expDateInput.classList.add("inputIncorrect");
    }
    if (isNaN(z)  || z.length!=3) {
        secCodeInput.classList.add("inputIncorrect");
    } else {
        secCodeInput.classList.add("inputCorrect");
    }
}
//// BUTTON STARTS THE CHECK OFF ALL WINDOWS////////
document.querySelector("button").addEventListener('click', start);
function start(){
    //FUNCTIONS TO CHANGE COLORS OF BORDERS OF INPUTS/// I CAN'T MAKE THIS WORK FOR ALL INPUTS////////////
    let wrong = document.querySelectorAll('.inputIncorrect');
    let right = document.querySelectorAll('.inputCorrect');
    wrong.forEach(function(el){
        el.classList.remove('inputIncorrect');

    })
    right.forEach(function(el){
        el.classList.remove('inputCorrect');
    })
    if(right.length==9){
        alert("Congratulations! Your Yeezys are on the way!");
    }
    myFName();
    myLastName();
    myAge();
    myShoeSize();
    myPostCode();
    myEmail();
    myCredit();
}
