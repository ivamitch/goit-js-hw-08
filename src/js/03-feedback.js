import throttle from "lodash.throttle";
import '../css/common.css';
import '../css/03-feedback.css';

const STORAGE_KEY = 'form-data';
let formData = {};

const refs = {
    form: document.querySelector('.feedback-form')
};

refs.form.addEventListener('submit', onFormSubmit);
window.addEventListener('load', onLoad);

refs.form.addEventListener('input', throttle(e => {
    const {name, value} = e.target;
    formData[name] =value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 2000)
);

function onFormSubmit(e) {
    e.preventDefault();
    e.target.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
    formData = {};
};

function onLoad(e) {
    try {
        const savedData = localStorage.getItem(STORAGE_KEY);
        if (!savedData) return;
        formData = JSON.parse(savedData)
    } catch (error) {
        console.log(error.message)
    }
};
