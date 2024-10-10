console.log("Objects")
// Way-1 to create object
const personObj={
    name:"Khyathi",
    age:23
}
//console.log(personObj);

// Way-2
const personObj1= new Object({
    city:"Hyd",
    collge:"SSR Degree College, Machilipatnam" ,
    parentDetails:{
        mother_name:"Manga Devi",
        father_name:"Siddiah",
        villageDetails:{
            name:"Manimeswaram"
        }
    }
});

//console.log(personObj1);



const persnFullDetails={...personObj1,...personObj};
const copyPersonFullDetails={
    ...persnFullDetails,
    parentDetails:{...persnFullDetails.parentDetails,
        villageDetails:{...persnFullDetails.parentDetails.villageDetails}}};

     //   console.log(JSON.parse(JSON.stringify(persnFullDetails)))


// const copyPersonFullDetails=Object.assign({...persnFullDetails})

// const copyPersonFullDetails=JSON.parse(JSON.stringify(persnFullDetails))

copyPersonFullDetails.parentDetails.villageDetails.name="Kanuru";


console.log(copyPersonFullDetails);
console.log(persnFullDetails);

const personObj2= Object.assign({name:"Sriram",age:31});

const freezeObj=Object.freeze({name:"Sriram",age:31});

const createObj=Object.create(persnFullDetails);

console.log(createObj.name)

// const tstObj=Object.freeze(persnFullDetails)
freezeObj.city="Hyd";

const normalObj={name:"Sriram",age:31,"first-name":2}
normalObj.city="Hyd";
console.log(normalObj["first-name"])
console.log(normalObj["city"])

let sampleObj={
    name:"Sriram",
    age:31
}
sampleObj={...sampleObj,city:"Hyd"}



 console.log(sampleObj);


 //Object extension using spread operator -start

 var personsList=[{name:"Sriram",age:31},{name:"Khyathi",age:23},{name:"Nagesh",age:24}];

 personsList=personsList.map((item)=>{

    if(item.name==="Khyathi"){
        return {...item,city:"Hyd"}
    }

    return item;

 });

 console.log(personsList)


 //Object extension using spread operator -end


 // Prototype based object creation -start

 function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  

  Person.prototype.nationaliy="Indian";

  Person.prototype.name=function(){
    return this.firstName + this.lastName;
  }
  const myFather = new Person("John", "Doe", 50, "blue");


  console.log(myFather)

  console.log(myFather.name())


  // Prototype based object creation - end



// Object key, value, entries methods -start

  const childDetail={
    name:"Sriram",
    age:31,
    city:"Hyd"
  };



  console.log(Object.entries(childDetail))
  console.log(Object.keys(childDetail))
  console.log(Object.values(childDetail))
//   it display in the form of arrays []


  Object.entries(childDetail).forEach((item)=>{
    console.log(`Key Name :"${item[0]}" and value "${item[1]}"`)
  })

Object.values(childDetail).forEach((item)=>{
    console.log(item)
})

Object.keys(childDetail).forEach((item)=>{
    console.log(item)
})



  
// Object key, value, entries methods -end





const createfamily=Object.create({
    name:'khyahi',
    age:"42"
})


console.log(createfamily);




const deepcopy={
  name:"hanush",
  surname:"gopu",
  parents:{
    mother:"khyathi",
    father:"sriram",

    grandParents:{
      grandFather:"raju",
      grandmother:"Lakshmi"
    }

  }
}



const copyOfDeepCopy={...deepcopy,parents:{...deepcopy.parents,grandParents:{
  ...deepcopy.parents.grandParents
}}};
// const copyOfDeepCopy=deepcopy;

copyOfDeepCopy.parents.mother="khyathi_prathi"
console.log(deepcopy)
console.log(copyOfDeepCopy)















