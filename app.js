//require all other javascript child extended constructors from Employee
const inquirer = require("inquirer");
const render = require("./htmlRenderer.js");
const Engineer = require("./Engineer");
const Manager = require("./Manager");
const Intern = require("./Intern");
const fs = require("fs");

//Push objects created with imported Employee constructor class to get object of employee
var employeeArr = []


function start(){
inquirer.prompt(
        
        {
            type: "list",
            message: "Would you like to create a new employee?",
            name:"role",
            choices: ["Manager", "Engineer", "Intern", "Done"]
        }
    )

    .then(function(response) {
        console.log(response)
       if(response.role === "Engineer"){
        console.log("Readying Engineer Profile...");
        createEngineer()
       }else if(response.role === "Done"){
           console.log("rendering")
           render(employeeArr)
            fs.writeFileSync("../index.html", render(employeeArr), "utf-8");
       }
       if(response.role === "Manager"){
        console.log("Readying Manager Profile...");
        createManager()
       }else if(response.role === "Done"){
           console.log("rendering")
           render(employeeArr)
            fs.writeFileSync("../index.html", render(employeeArr), "utf-8");
       }
       if(response.role === "Intern"){
        console.log("Readying Intern Profile...");
        createIntern()
       }else if(response.role === "Done"){
           console.log("rendering")
           render(employeeArr)
            fs.writeFileSync("../index.html", render(employeeArr), "utf-8");
       }
    });
} 

    function createEngineer(){
        inquirer.prompt([
            {
            type: "input",
            message: "What's your name?",
            name:"name" 
            },
            {
            type: "input",
            message: "What's your id?",
            name:"id" 
            },
            {
            type: "input",
            message: "What's your email?",
            name:"email" 
            },
            {
            type: "input",
            message: "What's your username?",
            name:"username" 
            }  
        ]).then(employee=>{
        newEmployee = new Engineer(employee.name, employee.id, employee.email, employee.username);
        console.log("New Employee", newEmployee);
        employeeArr.push(newEmployee);
        console.log(employeeArr);
     
        }).then(()=>{
           start() 
        })
    }

    function createManager(){
        inquirer.prompt([
            {
            type: "input",
            message: "What's your name?",
            name:"name" 
            },
            {
            type: "input",
            message: "What's your id?",
            name:"id" 
            },
            {
            type: "input",
            message: "What's your email?",
            name:"email" 
            },
            {
            type: "input",
            message: "What's your office?",
            name:"office" 
            }
        ]).then(employee=>{
        newEmployee = new Manager(employee.name, employee.id, employee.email, employee.office);
        console.log("New Employee", newEmployee);
        employeeArr.push(newEmployee);
        console.log(employeeArr);
     
        }).then(()=>{
           start() 
        })
    }

    function createIntern(){
        inquirer.prompt([
            {
            type: "input",
            message: "What's your name?",
            name:"name" 
            },
            {
            type: "input",
            message: "What's your id?",
            name:"id" 
            },
            {
            type: "input",
            message: "What's your email?",
            name:"email" 
            },
            {
            type: "input",
            message: "What's your school?",
            name:"school" 
            }
        ]).then(employee=>{
        newEmployee = new Intern(employee.name, employee.id, employee.email, employee.school);
        console.log("New Employee", newEmployee);
        employeeArr.push(newEmployee);
        console.log(employeeArr);
     
        }).then(()=>{
           start() 
        })
    }

    start();















// const Joe= new Manager("joe", 22, "joe@joe.com", "(111)-111-1111")
// console.log(Joe); 



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


//inquierer should prompt user to build an engineering team
//first you want to set up classes for 
    //employee, 
    //parent class of manager, engineer & intern 
        //Employees 
        //  * name
        //  * id
        //  * email
        //  * getName()
        //  * getId()
        //  * getEmail()
        //  * getRole() // Returns 'Employee'
                //manager 
                    // * officeNumber
                    //* getRole() // Overridden to return 'Manager'
                //Engineer 
                    //github // github username 
                    //getGithub()
                    //getRole() // Overridden to return 'Engineer'
                //Intern 
                    //school 
                    //getSchool()    
                    //getRole() // Overridden to return 'Intern'   

        //you must write fs to use a variable 
        //

    // class Employee {
    //     constructor(name, id, email){
    //         this.name= name; 
    //         this.id= id; 
    //         this.email= email; 
    //     }
    //    getname(){
    //        return this.name;
    //    }
    //    getId(){
    //        return this.id; 
    //    }
    //    getEmail(){
    //        return this.email; 
    //    }
    // };

    
    // class Manager extends Employee {
    //     constructor(name, id, email, officeNumber){
    //     super (name, id, email)
    //     this.role= "Manager"; 
    //     this.officeNumber= officeNumber; 
    //     }
    //     getRole(){
    //         return this.role; 
    //     }; 
    // };
