document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Signup successful!');
    window.location.href = './signin.html';
});
