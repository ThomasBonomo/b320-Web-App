function callback(e)
{
	const fullJson = JSON.parse(e);
	var resultBody = document.body.getElementsByClassname("result-body")[0];
	resultBody.innerHTML = "";
	
	for (let i = 0; i < fullJson.posts.length; i++)
	{
		if (fullJson.posts[i].sample.url != "null")
		{
			resultBody.innerHTML += "<div class=\"result\"><img class=\"result-image\" src=\"" + fullJson.posts[i].sample.url + "\"><div class=\"result-link\">" + fullJson.posts[i].sample.url + "</div></div>";
		}
		else if (fullJson.sources.length > 0)
		{
			
		}
	}
}