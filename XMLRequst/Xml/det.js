var Url ="https://restcountries.com/v2/all"
var request = new XMLHttpRequest();

request.open("GET",Url);
request.send();

request.onload=function(){
    var result=JSON.parse(request.response);
    for(let i = 0 ; i< result.length ; i++){
        console.log(result[i].name);
        console.log(result[i].region);
        console.log(result[i].subregion); 
        console.log(result[i].population);
    }
}