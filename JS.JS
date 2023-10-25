document.getElementById('loginForm').addEventListener
('submit', function(event){
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

if(username === 'admin' && password === '1234'){
    document.getElementById('message').textContent =
    'Login efetuado com sucesso!';
    window.location = 'index.html'
}else{
    document.getElementById('message').textContent =
    'Senha incorreta!';
} 
})
