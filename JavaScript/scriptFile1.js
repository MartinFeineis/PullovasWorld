function sendThePullova(){
var firstname = document.getElementById("firstPulli").value;
var surname = document.getElementById("surPulli").value;
console.log(firstname + "  test  "  +surname);
PulliMemArray =  "{ firstPulli :\""+ firstname + "\" , surPulli :\"" + surname + "\" }";
console.log(PulliMemArray);
jasonsPulli = JSON.stringify(PulliMemArray);
} 