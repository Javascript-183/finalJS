document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
  
    if (email === storedEmail && password === storedPassword) {
        alert('Login successful!');
       
        window.location.href = 'index.html'; 
    } else {
        alert('Invalid email or password. Please try again.');
    }
  });