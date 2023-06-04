class Hello {
    h1_hello

    constructor(message) {
        this.h1_hello = document.createElement("h1");
        this.h1_hello.innerText = message;
    }

    render(container) {
        container.appendChild(this.h1_hello);
    }
}

export default Hello