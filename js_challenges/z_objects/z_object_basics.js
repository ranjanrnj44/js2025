/*
1. Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.

*/
let person = {};
person.name = 'John';
person.surname = 'Smith';
person.name = 'Pete';
delete person.name;
console.log(person); // we will have only surname


/*
2. Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

Should work like that:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
*/
let schedule1 = {};
let schedule2 = {name: "Max", surname: "Karupu"};

function isEmpty(obj){
 return Object.keys(obj).length > 0 ? false : true;
}
isEmpty(schedule1);
isEmpty(schedule2);



/*
3. We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.
*/
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function getSum(obj){
    let sum = 0;
    if(Object.keys(obj).length){
        for(key in obj){
            sum+=obj[key]
        }
        return sum;
    }
    return false;
}

getSum(salaries);



/*
4. Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

For instance:

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

P.S. Use typeof to check for a number here.
*/
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj){
    if(Object.keys(obj).length){
        for(key in obj){
            typeof obj[key] === "number" ? obj[key] *= 2 : obj[key]
        }
        return obj;
    }
    return false;
}

multiplyNumeric(menu);