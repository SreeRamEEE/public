


//Sort();
const sortnumbers=[2,4,6,8,10,12,15];
console.log(sortnumbers.sort((a,b)=>{
    if(a-b>0){
        return 1
    }else if(a-b<0){
        return -1
    }

    return 0
    
}));


//filter

const flterNumbers=[8,12,16,15,6,7,9,3];

    const resultArray=flterNumbers.filter((item)=>{
        if(item%2===0){
            return item;
        }
    });

    // console.log(resultArray)

    const filterPersonsList=[
        {name:"Sriram",age:31,isActive:true},
        {name:"Gopu",age:30,isActive:true},
        {name:"Khyathi",age:23,isActive:true},
        {name:"Nagesh",age:24,isActive:false}];
    const resultList=filterPersonsList.filter((item)=>{
        if(item.isActive){
            return item;
        }
    });

    console.log(resultList)




    //map()


    const mapArray=[ {name:"Sriram",age:31,isActive:true},
    {name:"Gopu",age:30,isActive:true},
    {name:"Khyathi",age:23,isActive:true},
    {name:"Nagesh",age:24,isActive:false}];

    const resultMap=mapArray.map((item)=>{
        if(item.isActive){
            return {...item,city:"Hyd"}
        }
      return item;
    });

    console.log(resultMap);


    //find();



    const findArray=[ 
        {name:"Nagesh",age:24,isActive:false},
        {name:"Khyathi",age:23,isActive:false},
        {name:"Sriram",age:31,isActive:false},
    {name:"Gopu",age:30,isActive:true},
   
   ];


    const activeData=findArray.find((item)=>{
        if(item.isActive){
            return item;
        }
    });

    console.log(activeData);


    //some()


    const someArray=[ 
        {name:"Nagesh",age:24,isActive:false},
        {name:"Khyathi",age:23,isActive:false},
        {name:"Sriram",age:31,isActive:false},
    {name:"Gopu",age:30,isActive:false},
   
   ];

   const resultSomeArray=someArray.some((item)=>{
    if(item.isActive){
        return item;
    }
   });

   console.log(resultSomeArray)






