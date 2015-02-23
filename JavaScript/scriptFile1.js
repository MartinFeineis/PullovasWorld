pulloverFollower = [{ "firstPulli" :  "Martin"  , "surPulli" : "da Pullova" }]


function sendThePullova(){
firstname = document.getElementById("firstPulli").value;
surname = document.getElementById("surPulli").value;
PulliMemArray =  { "firstPulli" :  firstname  , "surPulli" : surname}
pulloverFollower.push(PulliMemArray)
console.log(pulloverFollower)
jasonsPulli = JSON.stringify(localStorage.pulloverFollower + PulliMemArray)
};

function enoughPullies() {

	window.close()
}



function parseJSONpullies (){
concatedPullies = new String()

partOne = "<table>"
for (var i =0; i<pulloverFollower.length; i++ ) {
partTwo = "<tr><td> " + pulloverFollower[i].firstPulli.toString() + "</td><td>" +pulloverFollower[i].surPulli.toString()+ "</td>"
concatedPullies = concatedPullies + partTwo;
}
partThree = "</table> <input type=\"submit\" value=\"Enough Pullies\" onClick=\"enouoghPullies()\">"
wholeString = partOne + concatedPullies + partThree;

// confirm(wholeString)

var myWindow = window.open('listOfPullies.html','PullovasList');
    myWindow.document.write(wholeString);
}

