const form = document.querySelector('.login-form');
form.addEventListener('submit', event => {
    event.preventDefault();
    if (form.email.value === '' || form.password.value === '') {
        alert('All form fields must be filled in');
    } else {
        const formData = {
            email: form.email.value.trim(),
            password: form.password.value.trim(),
        };
        console.log(formData);
        event.currentTarget.reset();
    }
});










                    
