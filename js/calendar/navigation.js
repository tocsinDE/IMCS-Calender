function init()
{
	global_month = month_names[new Date().getMonth()];
	global_year = new Date().getYear() + 1;
	if(year < 1900)
		year += 1900;
	document.getElementById("month-year").innerHTML = month + " " + year;
}
