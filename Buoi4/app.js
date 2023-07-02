import Hello from "./Hello.js";
import Login from "./Login.js";
import Register from "./Register.js";

class App {
  container;
  component;

  constructor(container) {
    this.container = container;
  }

  changeComponent(component) {
    this.component = component;
    this.component.render(this.container);
  }

  showNotification(message, success) {
    const notification = document.getElementById("notification");
    if (success) {
        notification.style.backgroundColor = "#198754";
    } else {
        notification.style.backgroundColor = "#dc3444";
    }
    notification.textContent = message;
    notification.classList.add("show");
    setTimeout(function () {
      notification.classList.remove("show");
    }, 3000); // Hide after 3 seconds
  }
}

const container = document.getElementById("app");

const login = new Login();
const app = new App(container);
app.changeComponent(login);

export default app;
