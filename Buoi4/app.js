import Hello from './Hello.js'
import Login from './Login.js'
import Register from './Register.js'

class App {
    container
    component

    constructor(container) {
        this.container = container;
    }

    changeComponent(component) {

        this.component = component;
        this.component.render(this.container);
    }
}

const container = document.getElementById("app");

const login = new Login();
const app = new App(container);
app.changeComponent(login);

export default app