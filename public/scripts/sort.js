function sortItem(selection) {
  let sortOption = selection.options[selection.selectedIndex].value;

  // Will set innerHTML after sort
  let itemContainer = document.querySelector("#content  ul");
  console.log("ul: ", itemContainer);

  let listItems = document.querySelectorAll("#content > div > ul > li");
  console.log("li: ", listItems);

  let filteredItems = [];

  for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].querySelector("h3") != null) {
      filteredItems.push(listItems[i]);
    }
  }

  for (let i = 0; i < filteredItems.length; i++)
    console.log(listItems[i].querySelector("h3"));

  if (sortOption === "ascending") {
    filteredItems.sort((a, b) => {
      let _a = a.querySelector("h3 > a").innerHTML;
      let _b = b.querySelector("h3 > a").innerHTML;

      return _a.localeCompare(_b);
    });
  } else {
    filteredItems.sort((a, b) => {
      let _a = a.querySelector("h3 > a").innerHTML;
      let _b = b.querySelector("h3 > a").innerHTML;

      return _b.localeCompare(_a);
    });
  }

  itemContainer.innerHTML = "";
  for (let i = 0; i < filteredItems.length; i++) {
    itemContainer.appendChild(filteredItems[i]);
  }
}
