var request  = new XMLHttpRequest();

request.open('GET','https://restcountries.com/v3.1/all',true)
    
request.send();
    
request.onload = function () 
{ //onload event=> to loading the page 
    
var data = JSON.parse(request.response)
for (let i=0; i < data.length; i++){
    console.log(i+1, data[i].name.common);
    console.log(i+1, data[i].region);
    console.log(i+1, data[i].subregion);
    console.log(i+1, data[i].population);
}};