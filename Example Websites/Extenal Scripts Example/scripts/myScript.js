/***************************************************************************
 * 
 * AUTHOR: R. Anderson
 * DATE: 25/06/2026
 * PURPOSE: Script with functions for the online voting website.
 * 
 * VERSION  | DATE     | WHO | COMMENTS
 * ------------------------------------------------------------------------
 * 0.1      | 25/06/26 | RJ   | Initial version
 * 0.2      | 26/06/26 | RJ   | Add exception handling to the Vote function
 * 
 ***************************************************************************/

function Vote()
{
	// Generates all of the candidates as a list with an identifiying number that is used for voting.

	var selection = parseInt(document.getElementById("IDSelection").value);
	
	try {
		document.getElementById("errorMessage").innerHTML = "";
//		if (selection > candidates.length)
//		{
			//if (selection < candidates.length)
			//{
				candidates[selection].votes = candidates[selection].votes + 1;
				//document.getElementById("IDOutput").innerHTML = "";	
				document.getElementById("IDSelection").value = "";

				Tally();
			//}
			//else {
				
			//}
//		}
	}
	catch {
		document.getElementById("errorMessage").innerHTML = "Error with value input.";
	}
}

function Tally()
{
	// Generates a list with a tally of votes for each candidate including mentioning the current winner/leader.

	var winner = 1;
	var resultList = "<h2>Current Results</h2>";
	for (i = 1; i < candidates.length; i++)
	{
		resultList = resultList + ("Candidate " + candidates[i].name + " has received " + candidates[i].votes + " votes.<br/>");
		if (candidates[i].votes > candidates[winner].votes)
		{
			winner = i;
		}
	}
	resultList = resultList + ("<br/>The leading candidate is " + candidates[winner].name + ".");
	document.getElementById("IDOutput").innerHTML = resultList;
}

var candidates = [{name: "dummy",       votes: 0},
				  {name: "John Brown",  votes: 0},
				  {name: "Maggie May",  votes: 0},
				  {name: "Henry Lee",   votes: 0},
				  {name: "Peggy Sue",   votes: 0},
				  {name: "Bette Davis", votes: 0}];

var candidateList = "";

for (i = 1; i < candidates.length; i++)
{
	candidateList = candidateList + (i + ". " + candidates[i].name + "<br/>");
}

document.getElementById("IDCandidates").innerHTML = candidateList;

console.log("Hello from JavaScript!");