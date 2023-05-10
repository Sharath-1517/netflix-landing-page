const input = document.getElementById('emailInput');
const label = document.getElementById('inputLabel');
const input_err = document.getElementById('input_error');


function showLabel() {

    label.classList.add('labelactive');
    input.focus();

}

function hideLabel() {

    if(input.value === '') {
        label.classList.remove('labelactive');
    }
    
}

function verifyEmail(){

    const res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const regex = res.test(String(input.value).toLowerCase());
    console.log(regex);
    if(!regex){
        input_err.classList.add('erroractive');
    }else {
        input_err.classList.remove('erroractive');
    };
}

function doNothing() {
    event.preventDefault();
}

document.addEventListener("DOMContentLoaded", function() {
    const accordionHeaders = document.querySelectorAll(".accordion__header");
    const span = document.getElementById("accordion_span");

    accordionHeaders.forEach(function(header) {
      header.addEventListener("click", function() {
        this.parentElement.classList.toggle("active");
      });
    });
  }); 