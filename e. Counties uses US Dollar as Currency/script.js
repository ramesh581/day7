// Print the country which uses US Dollars as currency.



var xhr = new XMLHttpRequest ();

xhr.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);

xhr.onload = function(){
  if(xhr.status>=200 && xhr.status <300){
    var arr = JSON.parse(this.response);
   
    
    var USD = arr.filter((country) => 
    {
      
        return country.currencies[0].code == "USD" ;
        
      });
      for (let i = 0; i < USD.length; i++) {
        
       document.write(`
       ${[i+1]})<br />
        Country name : ${USD[i].name} <br />
        Currency : ${USD[i].currencies[0].code} <br /><br />`);
      }
      
    
  }
  else
  {
    document.write("Data not Available");
  }
};

xhr.send();