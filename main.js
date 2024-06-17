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

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    if (nameInput.value === '') {
        lastNameError.innerHTML = '<p>This field is required</p>'
        firstNameError.innerHTML = '<p>This field is required</p>'
        emailError.innerHTML = '<p>This field is required</p>'
        msgError.innerHTML = '<p>This field is required</p>'

        setTimeout(() => lastNameError.remove(), 3000)
        setTimeout(() => firstNameError.remove(), 3000)
        setTimeout(() => emailError.remove(), 3000)
        setTimeout(() => msgError.remove(), 3000)
        setTimeout(() => quryError.remove(), 3000)

          error.classList.add('.error')

    }
   let selected= false
   radioButtons.forEach(radio => {
    if (radio.checked) {
      selected = true
    }
})
if (!selected) {
  quryError.innerHTML = '<p>Please select a query type</p>'
console.log('please select')
}else{
  quryError.innerHTML = ' '

}
  if (!capchaInput.checked) {
    capchaError.innerHTML = '<p>To submit this form please consent to being contacted</p>'
    setTimeout(() => capchaError.remove(), 3000)

  }else if(capchaInput.checked) {
    capchaError.innerHTML = ''
  } 
  document.querySelector('body').innerHTML = '<h1>Please refresh your page</h1>'
})