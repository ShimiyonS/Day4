var request  = new XMLHttpRequest();

request.open('GET','https://restcountries.com/v3.1/all',true)
    
request.send();
    
request.onload = function () 
{ //onload event=> to loading the page 
    
var data = JSON.parse(request.response)
for (let i=0; i < data.length; i++){
    console.log(data[i].flag);

}
// console.log(data[0].flag);
}