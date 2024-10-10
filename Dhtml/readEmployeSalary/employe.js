var employeInfo= () =>{
 var empObj={
    name:document.querySelector("#employeName").value,
    age:document.querySelector("#employeAge").value,
    department:document.querySelector("#employeDepartment").value,
    bSalary:document.querySelector("#employeBSalary").value,

    // tSalary:getEmpSalary(empObj.bSalary)
    
        
    };
    empObj.tSalary=getEmpSalary(empObj)
    console.log(empObj.tSalary)

   

}
var getEmpSalary=(userObj) =>{
    userObj.pf=userObj.bSalary*0.12
    getTaxamount(userObj)
   return  userObj.bSalary + userObj.pf + userObj.tax


}
var getTaxamount=(Obj)=>{
    if(Obj.bSalary>50000){
        Obj.tax=userObj.bSalary*0.30
    }else{
        Obj.tax=0
    }
    return Obj
}