// Print the total population of countries using reduce function


var xhr = new XMLHttpRequest ();

xhr.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);

xhr.onload = function(){
  if(xhr.status>=200 && xhr.status <300){
    var arr = JSON.parse(this.response);
   
    
    var total = arr.map(x => x.population)
    .reduce((x,y)=>x+y,0);

    document.write(`The total population of countries : ${total}`);
    
    
  }
  else
  {
    console.log("Data not Available");
  }
};

xhr.send();