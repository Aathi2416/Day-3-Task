// Step 01: 
var request = new XMLHttpRequest();
// Step 02: 
request.open("GET", "https://restcountries.com/v2/all");
// Step 03: 
request.send();
//Step 04: 
request.onload = function () {
    var result = JSON.parse(request.response);
    console.log(result);
//step 05: 
for(var i = 0; i < result.length; i++){
    var countryName = result[i].name.common;
    var region = result[i].region;
    var subregion = result[i].subregion;
    var population = result[i].population;
console.log("countryName:"+countryName);
console.log("region:"+region);
console.log("subregion:"+subregion);
console.log("population:"+population);

}
}



