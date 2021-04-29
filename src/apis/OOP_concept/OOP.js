//it uses classes
//create object from those classes which will act like entities
//all classes in JS have one constructor function
//each classes will execute every time we initiate new instances of that object
// we use the Class keyword to create a class,
//constructor is a default function inside each class

class Animal{
    constructor(category){
        //the constructor function will have a scope level of this class
        //we can use the new keyword to create instances of this object
    }
}

new Animal('lion');


class Humans{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
//only methods of this class have access to class variables
    info(){
        return console.log(this)
    }
}

//new instances of the human class
let Gaurav = new Humans('Gaurav', 24, 'Male');
let Nishi = new Humans ('Nishi', 23, 'Female')

Gaurav.info()
Nishi.info()

//INHERITANCE IMPLEMENTATION USING THE EXTEND KEYWORD
class Teacher extends Humans{
    //Teacher class inherits the properties of Humans class
    constructor(name, age, gender, subject, grade){
        //inside the constructor function, call the super function
        super(name, age, gender);
        //and pass the parameters required for the parent class (Teacher)
        this.subject=subject;
        this.grade=grade;

    }
    info(){
        console.log(this);
    }
}

let teacher = new Teacher('Joshua', 24, 'Male', 'Science', 'A')

//PROTOTYPES AND PROTOTYPICAL INHERITANCE
//whenever we creare a function, the javascript engine adds a prototype property to the function
//this prototype property is an object that has a constructor property by default
//the constructor points back to the parent functions. the function can be seen by calling functionName.prototype

function PersonName(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function(){
        return [this.firstName, this.lastName].join(' ')
    }
}
PersonName.prototype