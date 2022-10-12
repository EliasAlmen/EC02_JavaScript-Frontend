// console.log(document.getElementsByClassName("button"))

// let a = document.getElementsByClassName("button")

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     addEventListener("click", function(){console.log("hej")});
// }

// a.forEach(a => {
//     addEventListener("click", displayDate);
// });

// a.forEach(button => {
//     addEventListener("click", displayDate);
// });


// function knapp() {
//     var btn = document.getElementsByClassName("button");
//     for (i = 0; i < btn.length; i++) {
//       btn[i].addEventListener("click", function() {
//       console.log("you clicked"); });
//     }
//   }
  
//   window.addEventListener("load",function() {
//     knapp();
//   });

// document.getElementById('contact_form').addEventListener('submit', (e) =>{
//     e.preventDefault()
//     console.log(e);
// })
'use strict';
const onSubmit = event => {
    event.preventDefault()
    for (let element of event.target)
        if (element.required) {
            let label = document.getElementById(`${element.id}-label`).innerText
            let error = ""
            switch(element.type) {
                case 'text':
                    if (!isNullOrEmpty(element.value)) {
                        if (!isMinLength(element.value, element.dataset.requiredMin)) {
                            error = `Your ${label.toLocaleLowerCase()} must contain at least ${element.dataset.requiredMin} letters.`
                        }
                    } else {
                        error = `You must enter a ${label.toLocaleLowerCase()}`
                    }
                    break;
                case 'email':
                    if (!isNullOrEmpty(element.value)) {
                        if (!isMinLength(element.value, element.dataset.requiredMin)) {
                            error = `Your ${label.toLocaleLowerCase()} must contain at least ${element.dataset.requiredMin} letters.`
                        }
                    } else {
                        error = `You must enter an ${label.toLocaleLowerCase()}`
                    }
                    break;
                case 'textarea':
                    if (!isNullOrEmpty(element.value)) {
                        if (!isMinLength(element.value, element.dataset.requiredMin)) {
                            error = `Your ${label.toLocaleLowerCase()} must contain at least ${element.dataset.requiredMin} letters.`
                        }
                    } else {
                        error = `You must enter a ${label.toLocaleLowerCase()}`
                    }
                    break;
            }
            document.getElementById(`${element.id}-error`).innerText = error
        }
}

const isNullOrEmpty = value =>{
    if (value.length === 0)
        return true
    
    return false
}

const isMinLength = (value, minLength = 2) =>{
    if (value.length >= minLength)
        return true

    return false
}

const isEmailValid = (email) => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}
