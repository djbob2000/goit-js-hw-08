const STORAGE_KEY = 'feedback-form-state';
let formData = {};
import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onSubmitForm);

const dataInLocalStorage = localStorage.getItem(STORAGE_KEY);
if (dataInLocalStorage) {
  try {
    const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const { email, message } = savedFormData;
    formRef.email.value = email;
    formRef.message.value = message;
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;

  // const { email, message } = evt.target;
  // formData = {
  //   email: email.value,
  //   message: message.value,
  // };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(evt) {
  evt.preventDefault();
  console.log(formData);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
