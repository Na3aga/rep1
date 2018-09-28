
var listData = [
  "http://www.google.com",
  "http://www.google.com",
  "http://www.google.com",
  "http://www.google.com",
  "http://www.google.com",
  "http://www.google.com"
]
var listElement = document.getElementById("linkList");

var numberOfListItems = listData.length;
for (var i = 0; i < numberOfListItems; ++i) {
    // create an item for each one
    var listItem = document.createElement('li');

    // Add the item text
    listItem.innerHTML = "<a href=\""+listData[i]+"\" >"+i+"</a>";

    // Add listItem to the listElement
    listElement.appendChild(listItem);
}