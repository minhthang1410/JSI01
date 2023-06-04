class NhanVien {
    id
    name
    luong_can_ban
    chuc_vu
    he_so_luong

    constructor(id, name, luong_can_ban, chuc_vu, he_so_luong) {
        this.chuc_vu = chuc_vu;
        this.name = name;
        this.id = id;
        this.he_so_luong = he_so_luong;
        this.luong_can_ban = luong_can_ban;
    }

    sayHello() {
        console.log("Tên tôi là " + this.name + ", Chức vụ của tôi là " + this.chuc_vu);
    }
}

class CEO extends NhanVien {

    constructor(id, name, luong_can_ban, chuc_vu, he_so_luong) {
        super(id, name, luong_can_ban, chuc_vu, he_so_luong);
    }

    sign(code) {
        console.log("Hop dong " + code + " da duoc ky !!");
    }

    sayHello() {
        super.sayHello();
    }
}

class Accountant extends NhanVien {

    constructor(id, name, luong_can_ban, chuc_vu, he_so_luong) {
        super(id, name, luong_can_ban, chuc_vu, he_so_luong);
    }

    cal_salaray(employee) {
        const salary = employee.luong_can_ban * employee.he_so_luong;
        console.log("Luong cua " + employee.name + " la " + salary);
    }

    sayHello() {
        super.sayHello();
    }
}

class Dev extends NhanVien {
    programing_lang

    constructor(id, name, luong_can_ban, chuc_vu, he_so_luong, programing_lang) {
        super(id, name, luong_can_ban, chuc_vu, he_so_luong);
        this.programing_lang = programing_lang;
    }

    code_JS(string) {
        console.log(`alert("${string}")`);
    }

    sayHello() {
        super.sayHello();
    }
}

let thang = new Dev(1, "Thắng", 3000000, "Lập trình viên", 4, "Python, Js, Java, PHP");
let ceo = new CEO(2, "CEO", 3000000, "Giám đốc kinh doanh", 10);
let accountant = new Accountant(3, "Như", 3000000, "Kế toán viên", 3.5);

// console.log(thang);
// console.log(ceo);
// console.log(accountant);

// thang.sayHello();
// accountant.sayHello();
// ceo.sayHello();

accountant.cal_salaray(thang)
accountant.cal_salaray(ceo)
accountant.cal_salaray(accountant)