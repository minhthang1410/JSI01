import app from './app.js'
import Register from './Register.js';
class Login {
    constructor() {
        //Tạo form
        this.formLogin = document.createElement('form');
        this.formLogin.id = 'formLogin';
        //Tạo input, label username
        this.divUsername = document.createElement('div');
        this.labelUsername = document.createElement('label');
        this.labelUsername.innerText = 'Username'
        this.inputUsername = document.createElement('input');
        this.inputUsername.type = 'text';
        this.inputUsername.id = 'username';
        //Tạo input, label password
        this.divPasswd = document.createElement('div');
        this.labelPasswd = document.createElement('label');
        this.labelPasswd.innerText = 'Password'
        this.inputPasswd = document.createElement('input');
        this.inputPasswd.type = 'password';
        this.inputPasswd.id = 'password';
        //Tạo nút submit, register
        this.btnSubmit = document.createElement('button');
        this.btnSubmit.innerText = 'Submit';
        this.btnRegister = document.createElement('button');
        this.btnRegister.innerText = 'Register';
        //Thêm các thẻ html vào thẻ form
        this.divUsername.appendChild(this.labelUsername);
        this.divUsername.appendChild(this.inputUsername);
        this.divPasswd.appendChild(this.labelPasswd);
        this.divPasswd.appendChild(this.inputPasswd);
        this.formLogin.appendChild(this.divUsername);
        this.formLogin.appendChild(this.divPasswd);
        this.formLogin.appendChild(this.btnSubmit);
        this.formLogin.appendChild(this.btnRegister);
    }

    render(container) {
        this.divUsername.classList.add('mb-3');
        this.divPasswd.classList.add('mb-3');
        this.inputUsername.classList.add('form-control');
        this.inputPasswd.classList.add('form-control');
        this.btnSubmit.classList.add('btn');
        this.btnSubmit.classList.add('btn-success');
        this.btnRegister.classList.add('btn');
        this.btnRegister.classList.add('btn-primary');

        this.formLogin.addEventListener('submit', this.login);
        this.btnRegister.addEventListener('click', this.goToRegister);
        container.appendChild(this.formLogin);
    }

    login = (e) => {
        e.preventDefault();
        alert(this.inputUsername.value + '\n' + this.inputPasswd.value);
    }

    goToRegister = (e) => {
        e.preventDefault();
        const register = new Register();
        app.container.innerHTML = "";
        app.changeComponent(register);
    }
}

export default Login