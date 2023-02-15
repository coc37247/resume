//Collin Curtis

var mainUrl = "https://webrequestsserverbethel.azurewebsites.net/api/favoritecharacters";

var index;

simpleSuccess = (data)  => {
	document.getElementById("results").innerHTML = JSON.stringify(data);
}

runForcePull = () => { //runGet

	var response = fetch(mainUrl).then(response => {
		return response.json();
	}).then(responseJson => {
		document.getElementById("ViewDate").innerHTML = '';
		simpleSuccess(responseJson);
	});
}

runForceRead = () => {

	var response = fetch(mainUrl).then(response => {
		return response.json();
	
	}).then(responseJson => {
	});

	fetch(mainUrl).then(response => response.json())
		.then(responseJson => {
			
			var arrayLength = responseJson.favoriteCharacters.length;

			console.log(arrayLength);
			index = Math.floor(Math.random() * arrayLength);
			
			console.log(index);


		return	fetch(mainUrl + "/" + index)
				
		})
		.then(response => response.json())
				.then(responseJson => {
					document.getElementById("views").innerHTML = '';
					document.getElementById("results").innerHTML = "Index Selected: " + index;
					console.log(index);
					simpleSuccess(responseJson);
				});
}

runForcePush = () => { //runPost

	fetch(mainUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json" // mime-types
		},
		body: JSON.stringify({
			FirstName: document.getElementById("FirstName").value,
			LastName: document.getElementById("LastName").value,
			FavoriteCharacter: document.getElementById("FavoriteCharacter").value
		})
	}).then(response => {
		document.getElementById("views").innerHTML = '';
		return response.json();
	}).then(responseJson => {
		simpleSuccess(responseJson);
	});
}


runForceInsight = () => { //runGet

	var response = fetch(mainUrl + "/" + index + "/views").then(response => {
		return response.json();
	}).then(responseJson => {
		simpleSuccess(responseJson);
	});
}


runWatchMovies = () => { //POST

	fetch(mainUrl, {
        method: "POST", 
        haeders: {
            "Content-Type": "application/json"
    },
        body: JSON.stringify({
            ViewDate: document.getElementById("ViewDate").value
    })
    }).then(response => {
		document.getElementById("views").innerHTML = '';
        return response.json();
    }).then(responseJson =>  {
        simpleSuccess(resopnseJson);
    });
}


window.onload = function() {
	document.getElementById("forcePullButton").onclick = runForcePull;
	document.getElementById("forceReadButton").onclick = runForceRead;
	document.getElementById("forcePushButton").onclick = runForcePush;
	document.getElementById("forceInsightButton").onclick = runForceInsight;
	document.getElementById("watchMoviesButton").onclick = runWatchMovies;
}