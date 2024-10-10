const personDetails={
    user_name:"Sriram",
    age:21,
    city:"Hyd",
    villge_name:"Manimeswaram"
}

// console.log(personDetails.age)

const {user_name:name,age,city,villge_name:vilage}=personDetails;

console.log(name)
console.log(age)


const numbers=[2,4];

const[a,b]=numbers;

console.log(a)