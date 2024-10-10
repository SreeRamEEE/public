
pDetails=[]
var templete ;

// http://localhost:8081/AJAX/Axios.getmethod/products.json

var detailsGenerator=(productDetails)=>{
    productDetails.discountPrice=productDetails.actualPrice-((productDetails.actualPrice*productDetails.DiscountPercent)/100)
;//   var   templete=document.querySelector("#productTemplete").innerHTML;


  $(".productContent").append(templete(productDetails))

};
 templete = Handlebars.compile(document.querySelector("#productTemplete").innerHTML);
// axios.get("http://localhost:8081/AJAX/Axios.getmethod/products.json").then((response)=>{
    // external liberary path
    axios.get("http://localhost:8081/get/productList").then((response)=>{ 
        console.log(response);
        $(".loadingBlock").hide()
        var details=response.data.pDetails
        for(i=0;i<details.length;i++){
            detailsGenerator(details[i]);
        }
}).catch((err)=>{
    console.log(err);
    $(".errorBlock").show()
    $(".loadingBlock").hide()
    console.log("error");

})


