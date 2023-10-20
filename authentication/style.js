document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    

    if (username === 'raghul') {
        if (password=='raghul1100') {
            alert('Login successful!');
            window.location.href = 'index.html'; // Redirect to welcome page
        } else {
            alert('Invalid password. Please try again.');
        }
    } else {
        alert('Invalid username. Please try again.');
    }
});

document.getElementById('signupButton').addEventListener('click', function() {
    var uppercase = /[A-Z]/;
    var specialChar= /[!@#$%^&*(),.?":{}|<>]/;
    var lowercase=/[a-z]/;

    if (password.length >= 10 && uppercase.test(password) && specialChar.test(password) && lowercase.test(password)) {
        alert('Sign up successful!');
    } else {
        alert('Please check you password!!');
    }
});
