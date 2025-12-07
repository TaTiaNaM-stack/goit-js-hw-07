const form = document.querySelector('.login-form');
form.addEventListener('submit', event => {
    event.preventDefault();
    if (form.elements.email.value === '' || form.elements.password.value === '') {
        alert('All form fields must be filled in');
    } else {
        const formData = {
            email: form.elements.email.value.trim(),
            password: form.elements.password.value.trim(),
        };
        console.log(formData);
        event.currentTarget.reset();
    }
});










                    
