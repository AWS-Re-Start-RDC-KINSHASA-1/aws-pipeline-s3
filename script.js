document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validation des informations de connexion (c'est un exemple simple)
    if (username === 'user' && password === 'pass') {
        // Si les informations sont correctes, vous pouvez rediriger l'utilisateur vers une autre page
        window.location.href = 'dashboard.html';
    } else {
        // Sinon, affichez un message d'erreur
        document.getElementById('error-message').innerText = 'Invalid username or password';
    }
});
