var month_names = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
function getDays(month, year)
{
	return new Date(year, month + 1, 0).getDate();
}
function getDayOffset(month, year)
{
	var day = new Date(year, month, 1).getDay() - 1; //0 = Sunday, 1 = Monday, ....
	if(day < 0)
		day = 7 + day;
	return day;
}
function getWeeks(month, year)
{
	var numberOfDays = getDays(month, year);
	var offset = getDayOffset(month, year);
	var numberOfWeeks = Math.ceil((numberOfDays + offset) / 7);
	return numberOfWeeks;
}
function getCurCalPageFromString(head)
{
	var result = new Array(2);
	month_name = head.split(" ")[0];
	var i = 0;
	while(month_name != month_names[i] && i < 12)
		++i;
	result[1] = head.split(" ")[1];
	result[0] = i;
	return result;
}
function getCategories()
{
	var elements = document.getElementsByTagName("label");
	var categories = new Array();
	for(var i = 0; i < elements.length; ++i)
	{
		var checkbox = elements[i].getElementsByTagName("input")[0];
		if(checkbox.getAttribute("type") == "checkbox")
		{
			if(checkbox.checked)
			{
				categories.push(elements[i].textContent);
			}
		}
	}
	return categories;
}
function getAllCategories()
{
	var elements = document.getElementsByTagName("label");
	var categories = new Array();
	for(var i = 0; i < elements.length; ++i)
	{
		var checkbox = elements[i].getElementsByTagName("input")[0];
		if(checkbox.getAttribute("type") == "checkbox")
		{
			categories.push(elements[i].textContent);
		}
	}
	return categories;
}
function compareArrayElements(c1, c2)
{
	for(var i = 0; i < c1.length; ++i)
	{
		for(var j = 0; j < c2.length; ++j)
		{
			if(c1[i] == c2[j])
				return true;
		}
	}
	return false;
}
