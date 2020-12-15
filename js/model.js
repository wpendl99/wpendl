class Visitor {
    constructor(id, firstName, lastName="", street="", city="", state="", zip="", number="", email="", findOptions=""){
        if(typeof(firstName) == "string"){
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.street = street;
            this.city = city;
            this.state = state;
            this.zip = zip;
            this.number = number;
            this.email = email;
            this.findOptions = findOptions
        } else {
            let dict = firstName
            this.id = id;
            this.firstName = dict["firstName"];
            this.lastName = dict["lastName"];
            this.street = dict["street"];
            this.city = dict["city"];
            this.state = dict["state"];
            this.zip = dict["zip"];
            this.number = dict["number"];
            this.email = dict["email"];
            this.findOptions = dict["findOptions"];
        }
        
    }

    get fullName(){
        return this.firstName + " " + this.lastName
    }
    get fullAddress(){
        return this.street + ", " + this.city + " " + this.state + ", " + this.zip
    }
 }
 
visitors = [ 
    new Visitor(1,"Ken","Jenson","1234 W. Main St.","Mapleton","Utah","84664","(801) 444-5555","ken@gmail.com",{google:true,yahoo:false,friend:true}, "notes"),
    new Visitor(2,"Ben","Jenson","1234 W. Main St.","Mapleton","Utah","84664","(801) 444-5555","ben@gmail.com",{google:true,yahoo:false,friend:false}, "notes")
];


function modelAddVisitor(visitor) {
    //adds new visitor object to your array
    visitors.push(visitor)
}

function getID(){
    let high = 0
    for(let i of visitors){
        if(i.id > high){
            high = i.id
        }
    }
    return high
}

function modelDeleteVisitor(id) {
    //removes visitor object with given 'id' from array
    let temp = findVisitor(id);

    if(confirm("Are you sure you want to delete " + temp.fullName + " from the Visitor Log?")){
        if(visitors.length == 1){
            visitors.pop();
        } else {
            for(let i of range(visitors.length - 1)){
                if(visitors[i].id == id){
                    visitors.splice(i, 1)
                }
            }
        }
    }

    renderTable()
}


function findVisitor(id) {
    //returns visitor object with given 'id' from array
    for(let i of visitors){
        if(i.id == id){
            return i
        }
    }
}
/*
function findVisitorIndex(id) {//returns index in the array of the visitor object with given 'id'.  Handy when trying to delete an object}
*/