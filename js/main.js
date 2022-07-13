function callback(e)
{
	const fullJson = JSON.parse(e);
	var resultBody = document.body.getElementsByClassName("result-body")[0];
	resultBody.innerHTML = "";
	
	for (let i = 0; i < fullJson.posts.length; i++)
	{
		if (fullJson.posts[i].sample.url != "null")
		{
			resultBody.innerHTML += "<div class=\"result\"><img class=\"result-image\" src=\"" + fullJson.posts[i].sample.url + "\"><div class=\"result-link\">" + fullJson.posts[i].sample.url + "</div></div>";
		}
		else if (fullJson.sources.length > 0)
		{
			if (fullJson.sources[0].startsWith("https://www.twitter"))
			{
				resultBody.innerHTML += "<div class=\"result\"><img class=\"result-image\" src=\"" + fullJson.posts[i].sources[0] + "." + fullJson.posts[i].file.ext + "\"><div class=\"result-link\">" + fullJson.posts[i].sources[0] + "." + fullJson.posts[i].file.ext + "</div></div>";
			}
			else
			{
				resultBody.innerHTML += "<div class=\"result\"><img class=\"result-image\" src=\"" + fullJson.posts[i].sources[0] + "\"><div class=\"result-link\">" + fullJson.posts[i].sources[0] + "</div></div>";
			}
		}
		else
		{
			resultBody.innerHTML += "<div class=\"result\">Could not find image.</div>";
		}
	}
}

function srch(cbk)
{
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function()
	{
		if (xhr.readyState == 4 && xhr.status == 200)
			cbk(xhr.responseText);
	}
	var srchText = document.getElementById("sb").value;
	xhr.open("GET", "https://e621.net/posts.json?limit=24&tags=" + srchText, true);
	xhr.send();
}

function search()
{
	srch(callback);
}
