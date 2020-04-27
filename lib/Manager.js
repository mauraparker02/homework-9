// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee= require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
    super (name, id, email)
    this.role= "Manager"; 
    this.officeNumber= officeNumber; 
    }
    getRole(){
        return this.role; 
    }; 
};

// const Joe= new Manager("joe", 22, "joe@joe.com", "(111)-111-1111")

// console.log(Joe); 

module.exports= Manager; 