/*class toyotaCar {
    fullName = 'javeria'
    age = 20
    
    start(){
        console.log("start")
    }

    stop() {
        console.log("stop")
    }

    setBrand() {
        this.brandName = "fortuner"
    }
}

let fortuner = new toyotaCar()
console.log(fortuner)

fortuner.setBrand()
console.log(fortuner.setBrand)
fortuner.start()

console.log(fortuner)*/

/*constructor */

/*console.log("constructor:")

class toyotaCar2 {
    constructor(brand, mileAge) {
        this.brand = brand
        this.mileAge = mileAge
    }
}

console.log(toyotaCar2)
console.log(constructor)

let fortuner2 = new toyotaCar2("fortuner", 10)
console.log(fortuner2)
console.log("constructor = ",fortuner2.constructor)
let lexus2 = new toyotaCar2()
console.log(lexus2)
lexus2.brand = 'javeria'*/

/*extends: */

/*class parent {
    hello() {
        console.log("hello")
    }
}

class child extends parent{}

let obj = new child()
console.log(obj)*/

/*class person {
    constructor(name) {
        this.name = name
        this.species  = "homo sapiens"
    }
    eat() {
        console.log("eat")
    }

    sleep() {
        console.log("sleep")
    }
}

class engineer extends person {
    constructor(name) {
        super(name)
    }
    work() {
        super.eat()
        console.log("solve problems, build something...")
    }
}

let personObj = new person("javeria")
console.log(`person object = `)
console.log(personObj)

let engObj = new engineer("javeria")
console.log(`Engineer object = `)
console.log(engObj)*/

/*practice question */

/*let data = 'secret information';

class user {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    viewData() {
        console.log(`data = ${data}`)
    }
}

let stu1 = new user('javeria', 'javeria@gmail.com')
let stu2 = new user('afnan', 'afnan@gmail.com')
let stu3 = new user('aliza', 'aliza@gmail.com')
console.log(stu1)
console.log(stu2)
console.log(stu3)

class admin extends user {
    constructor(name, email) {
        super(name, email)
    }
    editData() {
        data = 'edit college data'
       console.log(`data = ${data}`)       
    }
}

let teach1 = new admin('admin 1', 'admin1@clg.com')
let teach2 = new admin('admin 2', 'admin2@clg.com')
console.log(teach1)
console.log(teach2)*/