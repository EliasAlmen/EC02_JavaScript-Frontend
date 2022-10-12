'use strict';

const onSubmit = event => {
    event.preventDefault()
    validate(event)
}

const validate = (event) => {
    switch(event.type) {
        case 'keyup':
            validateElement(event.target)
            break;

        case 'submit':
            for(let element of event.target)
                validateElement(element)
            break;
    }
}

const validateElement = (element) => {
    if (element.required) {
        let label = document.getElementById(`${element.id}-label`).innerText
        let error = ""
        let success = ""
        switch(element.type) {
            case 'text':
                if (!isNullOrEmpty(element.value)) {
                    console.log(element.value);
                    if (!isMinLength(element.value, element.dataset.requiredMin)) {
                        error = `Your ${label.toLocaleLowerCase()} must contain at least ${element.dataset.requiredMin} letters.`
                    }
                    if (!isNameValid(element.value)) {
                        error = `Your ${label.toLocaleLowerCase()} cannot contain numbers or special characters`
                    }
                    if (checkIfWhiteSpace(element.value)) {
                        error = `Your ${label.toLocaleLowerCase()} cannot start with a whitespace`
                    } 
                    if (isMinLength(element.value, element.dataset.requiredMin) && isNameValid(element.value) && !checkIfWhiteSpace(element.value)) {
                        success = `Looks good!`
                    }
                } else {
                    error = `You must enter a ${label.toLocaleLowerCase()}`
                }
                break;
            case 'email':
                if (!isNullOrEmpty(element.value)) {
                    console.log(element.value);
                    // if (checkIfWhiteSpace(element.value)) {
                    //     error = `Your ${label.toLocaleLowerCase()} cannot start with a whitespace`
                    // }  && !checkIfWhiteSpace(element.value)
                    if (!isEmailValid(element.value)) {
                        error = `Your ${label.toLocaleLowerCase()} must be valid. (eg. example@domain.com)`
                    }
                    if (isEmailValid(element.value)) {
                        success = `Looks good!`
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
                    if (isMinLength(element.value, element.dataset.requiredMin)) {
                        success = `Looks good!`
                    }
                } else {
                    error = `You must enter a ${label.toLocaleLowerCase()}`
                }
                break;
        }
        document.getElementById(`${element.id}-error`).innerText = error
        document.getElementById(`${element.id}-success`).innerText = success
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

const checkIfWhiteSpace = (whitespace) => {
    const regEx = /^\s/
    if (regEx.test(whitespace))
        return true
    
    return false
}

const isEmailValid = (email) => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (regEx.test(email))
        return true
    
    return false
}

const isNameValid = (name) => {
    const regEx = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
    if (regEx.test(name))
        return true
    return false
}
