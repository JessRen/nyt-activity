var apiKey = "dd01107108ce4661987554bdbef9635d"
var queryUrl = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=florida&page=1&sort=newest&api-key=" + apiKey;


	$.ajax({
		url: queryUrl,
		method: "GET"
	}).done(function(results){
		var data = results.response.docs;
			
		for(i = 0; i < data.length; i++) {
			var headLines = data[i].headline.main;
			console.log(data[i].headline.main);
			$("#headlines").append(headLines+ "<br>")
		}
	})