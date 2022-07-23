// All the countries from Asia continent /region using Filter function.


var xhr = new XMLHttpRequest ();

xhr.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);

xhr.onload = function(){
  if(xhr.status>=200 && xhr.status <300){
    var arr = JSON.parse(this.response);
    console.log(arr);
    
    var asian = arr.filter((country) => 
    {
      
        return country.region=="Asia";
        
      });
      for (let i = 0; i < asian.length; i++) {
        
        console.log(`
        name: ${asian[i].name}
        region : ${asian[i].region}`);
      }
      
    
  }
  else
  {
    console.log("Data not Available");
  }
};

xhr.send();