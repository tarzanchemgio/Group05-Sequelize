function sortItem(selection) {
	let sortOption = selection.options[selection.selectedIndex].value;
	// console.log(
	// 	`Options selected: ${selection.options[selection.selectedIndex].value}`
	// );

	// Will set innerHTML after sort
	let itemContainer = document.querySelector("#content ul");

	let listItems = document
		.getElementById("content")
		.querySelectorAll("ul > li");

	let filteredItems = [];
	// console.log(`listItem: ${listItems}`);
	for (let i = 0; i < listItems.length; i++) {
		// console.log(listItems[i].querySelector("h3"));

		if (listItems[i].querySelector("h3") != null) {
			filteredItems.push(listItems[i]);
		}
	}

	// console.log(`After filter:`);
	// for (let i = 0; i < filteredItems.length; i++) {
	// 	console.log(filteredItems[i]);
	// }

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
	console.log(`After sort:`);
	for (let i = 0; i < filteredItems.length; i++) {
		// console.log(filteredItems[i].querySelector("h3 > a").innerHTML);

		itemContainer.appendChild(filteredItems[i]);
	}

	// itemContainer.innerHTML = filteredItems;
}

// let select = document.querySelector("#sort-select");
// select.onchange = sort(select);
