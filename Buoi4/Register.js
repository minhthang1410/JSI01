import app from "./app.js";
import Login from "./Login.js";

class Register {
    constructor() {
        //Tạo form
        this.formRegister = document.createElement('form');
        this.formRegister.id = 'formRegister';
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
        //Tạo thẻ div email
        this.divEmail = document.createElement('div');
        this.labelEmail = document.createElement('label');
        this.labelEmail.innerText = 'Email'
        this.inputEmail = document.createElement('input');
        this.inputEmail.type = 'email';
        this.inputEmail.id = 'email';
        //Tạo nút submit, register
        this.btnSubmit = document.createElement('button');
        this.btnSubmit.innerText = 'Submit';
        this.btnSubmit.type = 'submit';
        this.btnLogin = document.createElement('button');
        this.btnLogin.innerText = 'Login';
        //Thêm các thẻ html vào thẻ form
        this.divUsername.appendChild(this.labelUsername);
        this.divUsername.appendChild(this.inputUsername);
        this.divPasswd.appendChild(this.labelPasswd);
        this.divPasswd.appendChild(this.inputPasswd);
        this.divEmail.appendChild(this.labelEmail);
        this.divEmail.appendChild(this.inputEmail);

        this.formRegister.appendChild(this.divUsername);
        this.formRegister.appendChild(this.divEmail);
        this.formRegister.appendChild(this.divPasswd);
        this.formRegister.appendChild(this.btnSubmit);
        this.formRegister.appendChild(this.btnLogin);
    }

    render(container) {
        this.divUsername.classList.add('mb-3');
        this.divEmail.classList.add('mb-3');
        this.divPasswd.classList.add('mb-3');
        this.inputUsername.classList.add('form-control');
        this.inputEmail.classList.add('form-control');
        this.inputPasswd.classList.add('form-control');
        this.btnSubmit.classList.add('btn');
        this.btnSubmit.classList.add('btn-success');
        this.btnLogin.classList.add('btn');
        this.btnLogin.classList.add('btn-primary');

        this.formRegister.addEventListener('submit', this.register);
        this.btnLogin.addEventListener('click', this.goToLogin);
        container.appendChild(this.formRegister);
    }

    register = (e) => {
        e.preventDefault();
        let email = this.inputEmail.value;
        let password = this.inputPasswd.value;
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredentials) => {
                if(userCredentials.user) {
                    app.showNotification("Đăng ký thành công", true);
                }
            })
            .catch((error) => {
                app.showNotification(error, false);
            })
        // alert(this.inputUsername.value + '\n' + this.inputEmail.value + '\n' + this.inputPasswd.value);
    }

    goToLogin = (e) => {
        e.preventDefault();
        const login = new Login();
        app.container.innerHTML = '';
        app.changeComponent(login);
    }
}

export default Register