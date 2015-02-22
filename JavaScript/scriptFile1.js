pulloverFollower = [{ "firstPulli" :  "Martin"  , "surPulli" : "da Pullova" }]
concatedPullies = new String()

function sendThePullova(){
firstname = document.getElementById("firstPulli").value;
surname = document.getElementById("surPulli").value;
PulliMemArray =  { "firstPulli" :  firstname  , "surPulli" : surname}
pulloverFollower.push(PulliMemArray)
console.log(pulloverFollower)
jasonsPulli = JSON.stringify(localStorage.pulloverFollower + PulliMemArray)
};


function parseJSONpullies (pulloverFollower){


partOne = "<table>"
for (var i =0; i<pulloverFollower.length; i++ ) {
partTwo = "<tr><td> " + pulloverFollower[i].firstPulli.toString() + "</td><td>" +pulloverFollower[i].surPulli.toString()+ "</td>"
concatedPullies = concatedPullies + partTwo;
}
partThree = "</table>"
wholeString = partOne + concatedPullies + partThree;

console.log(wholeString)

 

}