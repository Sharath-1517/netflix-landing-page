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
        input_err.classList.add('membership__error_active');
    }else {
        input_err.classList.remove('membership__error_active');
    };
}

function doNothing(event) {
    event.preventDefault();
}

document.addEventListener('DOMContentLoaded', function() {
    var accordionHeaders = document.querySelectorAll('.accordion__header');
  
    accordionHeaders.forEach(function(header) {
      header.addEventListener('click', function() {
        var accordionContent = this.nextElementSibling;
        var img = this.querySelector('.img');
        var isActive = this.classList.contains('active');
  
        // Toggle active class
        this.classList.toggle('active');
  
        // Toggle content visibility
        if (isActive) {
          accordionContent.classList.remove("accordion__content_active");
          img.classList.remove('img_active');
        } else {
            accordionContent.classList.add("accordion__content_active");
            img.classList.add('img_active');
        }
      });
    });
  });
  