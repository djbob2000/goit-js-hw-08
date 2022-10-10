let formData = {};
const throttle = require('lodash.throttle');

const formRef = document.querySelector('.feedback-form');
formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onSubmitForm);

dataInLocalStorage = localStorage.getItem('feedback-form-state');
if (dataInLocalStorage) {
  try {
    const savedFormData = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );
    const { email, message } = savedFormData;
    formRef.email.value = email;
    formRef.message.value = message;
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

function onFormInput(evt) {
  const { email, message } = evt.currentTarget;

  formData = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitForm(evt) {
  evt.preventDefault();
  console.log(formData);
  evt.currentTarget.reset();
  localStorage.clear();
}
