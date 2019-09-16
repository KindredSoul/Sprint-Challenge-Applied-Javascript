// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let tabData = axios
	.get("https://lambda-times-backend.herokuapp.com/topics")
	.then(results => {
		console.log(results);
		let resultsData = results.data.topics;
		console.log(resultsData);
		resultsData.forEach(data => {
			console.log(newTab(data));
			topics.appendChild(newTab(data));
		});
	})
	.catch(error => {
		console.log(error);
	});

const newTab = topic => {
	let tab = document.createElement("div");
	tab.textContent = topic;
	tab.classList.add("tab");
	return tab;
};

let topics = document.querySelector(".topics");

console.log(tabData);
