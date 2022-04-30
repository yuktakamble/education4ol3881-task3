
var monthlybasic="$19.99";
var yearlybasic="$199.99";

var monthlyProfessional ="$24.99"
var yearlyProfessional ="$249.99"

var monthlyMaster ="$39.99"
var yearlyMaster ="$399.99"

function togglePrices()
{
  if(document.getElementById("myToggle").checked ){
    document.getElementById("basicPrice").innerText = (monthlybasic);
    document.getElementById("professionalPrice").innerText = (monthlyProfessional);
    document.getElementById("masterPrice").innerText = (monthlyMaster);

  }
  else{
    document.getElementById("basicPrice").innerText = (yearlybasic);
    document.getElementById("professionalPrice").innerText = (yearlyProfessional);
    document.getElementById("masterPrice").innerText = (yearlyMaster);
  }   
}