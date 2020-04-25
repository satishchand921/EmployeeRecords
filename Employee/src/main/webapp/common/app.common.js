function getFormattedURL(url, replaceValue)
{
	return url.replace(url.substring(url.indexOf("{"), url.indexOf("}") + 1), replaceValue);
}