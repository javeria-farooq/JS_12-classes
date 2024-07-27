/*// car template
class Car {
    constructor(brand, mileAge) {
        this.brand = brand
        this.mileAge = mileAge
    }

    start() {
        return(`${this.brand} is starting...`)
    }

    stop(){
        return(`${this.brand} has stopped.`)
    }
}

let fortuner = new Car('fortuner', 8)
console.log(fortuner)
console.log(fortuner.start())
console.log(fortuner.stop())

let lexus = new Car('lexus', 10)
console.log(lexus)
console.log(lexus.start())
console.log(lexus.stop())

let toyota = new Car('toyota', 15)
console.log(toyota)
console.log(toyota.start())
console.log(toyota.stop())*/

/*//parent template
class parent {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    work() {
        console.log('parents working...')
    }
}

class mother extends parent{
    constructor(name, age) {
        super(name, age)
        this.gender = 'female'
    }
    cook() {
        console.log('mother cooks food.')
    }
    dusting() {
        console.log('dusting...')
    }
}

let motherObj = new mother('yasmeen', 42)
console.log(motherObj)
motherObj.work()
motherObj.cook()
motherObj.dusting()

class father extends parent{
    constructor(name, age) {
        super(name, age)
        this.gender = 'male'
    }

    job() {
        console.log('father is going to a job')
    }
}

let fatherObj = new father('farooq', 50)
console.log(fatherObj)
fatherObj.work()
fatherObj.job()*/

/*//person template
class Person {
    constructor(name) {
        this.name = name
        this.species = 'homo sapiens'
    }

    eat() {
        return(`${this.name} can eat.`)
    }

    sleep() {
        return(`${this.name} can sleep.`)
    }

    walk() {
        return(`${this.name} can walk.`)
    }
}

let personObj = new Person('javeria')
console.log(personObj)
console.log(personObj.eat())
console.log(personObj.sleep())
console.log(personObj.walk())

class Engineer extends Person{
    constructor(name, department) {
        super(name)
        this.department = department
    }

    work() {
        return `${this.name} solving problems and building something new.`
    }
}

let engineer = new Engineer('daniyal nagori', 'software engineer')
console.log(engineer)
console.log(engineer.eat())
console.log(engineer.sleep())
console.log(engineer.walk())
console.log(engineer.work())

class Doctor extends Person{
    constructor(name, spiciality) {
        super(name)
        this.spiciality = spiciality
    }

    work() {
        return `${this.name} is curing patients.`
    }
}

let doctor = new Doctor('ahmed', 'skin specialist')
console.log(doctor)
console.log(doctor.eat())
console.log(doctor.sleep())
console.log(doctor.walk())
console.log(doctor.work())*/

//practice question
let data = 'secret information'

class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    viewData() {
        console.log(`${this.name}! data = ${data}.`)
    }
}

let user1 = new User('javeria', 'javeria@gmail.com')
console.log(user1)
user1.viewData()

let user2 = new User('aliza', 'aliza@gmail.com')
console.log(user2)
user2.viewData()

let user3 = new User('afnan', 'afnan@gmail.com')
console.log(user3)
user3.viewData()

class Admin extends User{
    constructor(name, email) {
        super(name, email)
    }

    editData() {
        console.log(`${this.name}! You can edit your data.`)
        data = 'edit college data'
        console.log(`${this.name}! Now the data is : ${data}`)
    }
}

let admin1 = new Admin('admin 1', 'admin1@gmail.com')
console.log(admin1)
admin1.viewData()
admin1.editData()

let admin2 = new Admin('admin 2', 'admin2@gmail.com')
console.log(admin2)
admin2.viewData()
admin2.editData()

let admin3 = new Admin('admin 3', 'admin3@gmail.com')
console.log(admin3)
admin3.viewData()
admin3.editData()