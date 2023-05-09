const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const submitButton = document.querySelector('button[type="submit"]');

form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';

    setTimeout(() => {
    const usernameValue = usernameInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    if (usernameValue === '' || passwordValue === '') {
        alert('Please enter both a username and password.');
        submitButton.innerHTML = 'Log in'; 
        return;
    }

    form.submit();
    }, 2000); 
});
