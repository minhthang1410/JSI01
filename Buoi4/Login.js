import app from './app.js'
import Register from './Register.js';
class Login {
    constructor() {
        //Tạo form
        this.formLogin = document.createElement('form');
        this.formLogin.id = 'formLogin';
        //Tạo input, label username
        this.divEmail = document.createElement('div');
        this.labelEmail = document.createElement('label');
        this.labelEmail.innerText = 'Email'
        this.inputEmail = document.createElement('input');
        this.inputEmail.type = 'email';
        this.inputEmail.id = 'email';
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
        this.divEmail.appendChild(this.labelEmail);
        this.divEmail.appendChild(this.inputEmail);
        this.divPasswd.appendChild(this.labelPasswd);
        this.divPasswd.appendChild(this.inputPasswd);
        this.formLogin.appendChild(this.divEmail);
        this.formLogin.appendChild(this.divPasswd);
        this.formLogin.appendChild(this.btnSubmit);
        this.formLogin.appendChild(this.btnRegister);
    }

    render(container) {
        this.divEmail.classList.add('mb-3');
        this.divPasswd.classList.add('mb-3');
        this.inputEmail.classList.add('form-control');
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
        let email = this.inputEmail.value;
        let password = this.inputPasswd.value;
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                const token = user.getIdToken();
                console.log(token);
                if (token) {
                    app.showNotification("Đăng nhập thành công", true);
                }
            })
            .catch((error) => {
                app.showNotification(error, false);
            })
        // alert(this.inputUsername.value + '\n' + this.inputPasswd.value);
    }

    goToRegister = (e) => {
        e.preventDefault();
        const register = new Register();
        app.container.innerHTML = "";
        app.changeComponent(register);
    }
}

export default Login