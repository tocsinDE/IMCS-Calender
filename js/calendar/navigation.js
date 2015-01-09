function getCurrentMonth()
{
	month = month_names[new Date().getMonth()];
	year = new Date().getYear();
	if(year < 1900)
		year += 1900;
	document.getElementById("month-year").innerHTML = month + " " + year;
}
function nextMonth()
{
	var current_page = document.getElementById("month-year").innerHTML;
	var year_month = getCurCalPageFromString(current_page);
	var month = year_month[0] + 1;
	var year = year_month[1];
	if(month > 11)
	{
		month -= 12;
		year++;
	}
	document.getElementById("month-year").innerHTML = month_names[month] + " " + year;
	drawTable();
}
function previousMonth()
{
	var current_page = document.getElementById("month-year").innerHTML;
	var year_month = getCurCalPageFromString(current_page);
	var month = year_month[0] - 1;
	var year = year_month[1];
	if(month < 0)
	{
		month += 12;
		year--;
	}
	document.getElementById("month-year").innerHTML = month_names[month] + " " + year;
	drawTable();
}
function drawTable()
{
	var current_page = document.getElementById("month-year").innerHTML;
	var year_month = getCurCalPageFromString(current_page);
	var cur_month = year_month[0];
	var cur_year = year_month[1];
	var date = 0;
	var offset = 0;
	var table_data = "";
	for(var week = 0; week < getWeeks(cur_month, cur_year); ++week)
	{
		table_data += "<tr>";
		for(var day = 0; day < 7; ++day)
		{
			while(offset < getDayOffset(cur_month, cur_year))
			{
				table_data += "<td class=\"empty\"></td>";
				++day;
				++offset;
			}
			if(date + 1 > getDays(cur_month, cur_year))
			{
				table_data += "<td class=\"empty\"></td>";
			}
			else
			{
				var date_info = getEventByDate(++date, cur_month, cur_year);
				if(date_info == "")
					table_data += "<td>" + date + "</td>";
				else
					table_data += "<td class=\"hasEvents\" data-toggle=\"tooltip\" data-placement=\"bottom\" data-html=\"true\" data-container=\"body\" title=\"<strong>" + date_info + "</strong>\">" + date + "</td>";
			}
		}
		table_data += "</tr>";
	}
	document.getElementById("calendar").innerHTML = table_data;
}
function init()
{
	getCurrentMonth();
	drawTable();
}
