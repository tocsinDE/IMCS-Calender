function getEventByDate(day, month, year)
{
	var path = "./data.json";
	var data;
	var date = day + month + year;
	$.getJSON(path, function(json)
	{
		data = json;
	})
	.done(function()
	{
		for(var i = 0; i < data.length; ++i)
		{
			var data_date = data[i].date.day + data[i].date.month + data[i].date.year;
			if(data_date == date)
			{
				document.write(data[i].name + " " + data[i].category[0]);
				for(var j = 1; j < data[i].category.length; ++j)
					document.write(" " + data[i].category[j]);
				document.write("<br>");
			}
		}
	})
	.fail(function()
	{
		alert("Error fetching " + path + "!");
	});
}
