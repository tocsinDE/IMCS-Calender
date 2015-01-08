function getEventByDate(day, month, year)
{
	var date = String(day) + String(month) + String(year);
	var result = "";
	for(var i = 0; i < data.length; ++i)
	{
		var data_date = data[i]["date"]["day"] + data[i]["date"]["month"] + data[i]["date"]["year"];
		if(data_date == date)
		{
			result += data[i]["name"];// + " " + data[i].category[0]);
		//	for(var j = 1; j < data[i].category.length; ++j)
		//		document.write(" " + data[i].category[j]);
			result += "<br>";
		}
	}
	return result;
}
