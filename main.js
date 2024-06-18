const submitBtn = document.querySelector('#submitBtn')
const capchaError = document.querySelector('#capchaError')
const msgError = document.querySelector('#msgError')
const quryError = document.querySelector('#quryError')
const emailError = document.querySelector('#emailError')
const lastNameError = document.querySelector(' #lastNameError')
const firstNameError = document.querySelector(' #firstNameError')
const nameInput = document.querySelector('#nameInput')
const error = document.querySelector('.error')
const capchaInput = document.querySelector('#capchaInput')
const generalEnqiryInput = document.querySelector('#generalEnqiryInput')
const radioButtons = document.querySelectorAll('input[name="option"]')
const form = document.querySelector('form')
const emailInput = document.querySelector('#emailInput')
const message = document.querySelector('#message')

form.addEventListener('submit' , (e)=> {
  e.preventDefault();
  if (validateform()) {
    alert('Form successfully Submitted');
    form.reset();
  }
})
function validateform() {
  let isValid = true;

  //Validate FirstName
  if (nameInput.value.trim() === '') {
    firstNameError.innerHTML = '<p>This Field is required</p>'
    lastNameError.innerHTML = '<p>This Field is required</p>'
    error.classList.add('.error')
    isValid = false
    setTimeout(() => lastNameError.remove(), 3000)
        setTimeout(() => firstNameError.remove(), 3000)
  }else {
    firstNameError.innerHTML = ''
    lastNameError.innerHTML = ''
  }
  //Validate Email
  const emailPattern = /^[a-zA-z0-9._%+-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,}$/;
  if ((emailInput.value.trim() === '')) {
    emailError.innerHTML = '<p>This Field is required </p>'
    error.classList.add('.error') 
    isValid = false
           setTimeout(() => emailError.remove(), 3000)

  }else if( (!emailPattern.test(emailInput.value.trim()))){
    emailError.innerHTML = '<p>Enter a valid email address</p>'
    error.classList.add('.error') 
    isValid = false
           setTimeout(() => emailError.remove(), 3000)
  }else {
    emailError.innerHTML = ''

  }
  //validate message
  if (message.value.trim() === '') {
    msgError.innerHTML = '<p>This Field is required</p>'
    error.classList.add('.error')
    isValid = false
         setTimeout(() => msgError.remove(), 3000)

  }else {
    msgError.innerHTML = ''
  }
  let selected= false
     radioButtons.forEach(radio => {
      if (radio.checked) {
        selected = true
      }
  })
  if (!selected) {
    quryError.innerHTML = '<p>Please select a query type</p>'
  setTimeout(() => quryError.remove(), 3000)

  }else{
    quryError.innerHTML = ' '
  
  }
    if (!capchaInput.checked) {
      capchaError.innerHTML = '<p>To submit this form please consent to being contacted</p>'
      setTimeout(() => capchaError.remove(), 3000)
  
    }else if(capchaInput.checked) {
      capchaError.innerHTML = ''
    } 
    return isValid
}
