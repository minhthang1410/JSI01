class Person {
    constructor (name, age) {//tham số khởi tạo
        this.name = name;
        this.age = age;
    }

    sayHello() { //hàm bên trong class gọi là phương thức
        console.log("Hello my name is " + this.name + " - " + this.age);
    }
}

class Asians extends Person {
    constructor(name, age, skin_color) {
        super(name, age);
        this.skin_color = skin_color;
    }
}

class Student extends Person {
    constructor (name, age, grade, class_name) {
        super(name, age);
        this.grade = grade;
        this.class_name = class_name;
    }

    sayHello() {
        super.sayHello();
        console.log("I study at MindX and my classname is " + this.class_name);
    }
}

// let student = new Student("Thắng", 25, "JSI", "TL-JSI01");
// console.log(student);
// student.sayHello();
class Animal {
    constructor (name, species, age) {
        this.name = name;
        this.species = species;
        this.age = age;
    }

    sayHello() {
        console.log("My name is " + this.name + " - " + this.species);
    }

    birthday() {
        this.age++;
        console.log("Happy birthday");
    }
}

class MyForm {
    constructor () {
        this.input = document.createElement("input");
        this.button = document.createElement("button");

        this.button.innerText = "Get Form";
        this.button.addEventListener("click", (e) => {
            e.preventDefault();
            alert(this.input.value);
        })
    }

    render(container) {
        const div = document.createElement("div");
        div.appendChild(this.input);
        div.appendChild(this.button);
        container.appendChild(div);
    }
}

const app = document.getElementById("app");
const btnAddForm = document.getElementById("addForm");

btnAddForm.addEventListener("click", () => {
    const myForm = new MyForm();
    myForm.render(app);
})