// Coutries Name, capital, flag using forEach function.


var xhr = new XMLHttpRequest ();

xhr.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);

xhr.onload = function(){
  if(xhr.status>=200 && xhr.status <300){
    var arr = JSON.parse(this.response);
   
    
    arr.forEach(country => {

      document.write(`
      Country name: ${country.name} <br />
      Capital : ${country.capital} <br />
      Flag : ${country.flag}<br/><br/>`)
      
    });
    
    
  }
  else
  {
    console.log("Data not Available");
  }
};

xhr.send();