const form = document.querySelector('.login-form');

// Валідація
form.firstElementChild.innerHTML = '<input type="email" name="email" required="required" />';

form.firstElementChild.nextElementSibling.innerHTML = '<input type="password" name="password" required minlength="6" maxlength="12" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number."/>';



form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  console.log(formData);
  formData.forEach((value, name) => {
    console.log('onFormSubmit -> name', name);
      console.log('onFormSubmit -> value', value);
      
  });
    
  this.reset();  
}
