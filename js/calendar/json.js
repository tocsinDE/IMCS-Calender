function getEventByDate(day, month, year)
{
	var date = String(day) + String(month) + String(year);
	var result = "";
	for(var i = 0; i < data.length; ++i)
	{
		var data_date = data[i]["date"]["day"] + data[i]["date"]["month"] + data[i]["date"]["year"];
		if(data_date == date && compareArrayElements(data[i]["category"], getCategories()))
		{	
			result += data[i]["name"];
			result += "<br>";
		}
	}
	return result;
}

function getDataByDate(day, month, year, categories)
{
	var date = String(day) + String(month) + String(year);
	var result = "<div class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" id=\"modal-" + day + "-" + month + "-" + year +  "\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">X</span></button><h2>Events am " + day + "." +  ++month + "." + year + "</h2></div><div class=\"modal-body\">";
	
	for(var i = 0; i < data.length; ++i)
	{
		var data_date = data[i]["date"]["day"] + data[i]["date"]["month"] + data[i]["date"]["year"];
		if(data_date == date && compareArrayElements(data[i]["category"], getCategories()))
		{
			result +="<p data-toggle=\"collapse\" data-target=\"." + i + "-collapse\"><small>[" + data[i]["category"] + "</small>] <strong>" + data[i]["name"] + "</strong><span class=\"caret\"></span></p><div class=\"collapse " + i + "-collapse\"><p>" + data[i]["time"]["hour"] + ":" + data[i]["time"]["minute"] + " Uhr, " + data[i]["location"] + "<p>" + data[i]["description"] + "</p></div>";
			var hasEvents=1;
		}
	}
	if(hasEvents!=1) result +="Für diesen Tag liegen keine Events vor";
	result += "</div></div></div></div>";
	return result;
}
