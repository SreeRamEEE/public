const animals={
animal:[
    {
        catagery:"vield Animals",
        names:["elephant","tiger","lion"],

    },
    {
        catagery:"pet Animals",
        names:["cow","Dog","cat"]
        
    }]
}
let x=""

for(let i in animals.animal){

    
  x+="<li>"+ animals.animal[i].catagery+"</li>"
    for(let j in animals.animal[i].names){

      x+= animals.animal[i].names[j]+"<br>"
    }
}
document.getElementById("content").innerHTML=x;