// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// let topicData = axios
// 	.get("https://lambda-times-backend.herokuapp.com/topics")
// 	.then(results => {
// 		let topicData = results.data.topics;
// 		console.log(topicData);

// 		let topic = topicData.forEach(topic => {
// 			let topicName = topic;
// 			console.log(topicName);
// 			return topicName;
// 		});
// 		console.log(topic);

// 		// resultsData.forEach(data => {
//             // 	console.log(newTab(data));
//             // 	topics.appendChild(newTab(data));
//             // });
// 	})
// 	.catch(error => {
// 		console.log(error);
// 	});
let cardData = axios
	.get("https://lambda-times-backend.herokuapp.com/articles")
	.then(results => {
		let articleData = results.data.articles;
		console.log(articleData);

		for (let key in articleData) {
			console.log(key);
			console.log(articleData[key]);
			let cardData = articleData[key];
			cardData.forEach(data => {
				console.log(newCard(data));
				cardsContainer.appendChild(newCard(data));
			});
		}
	})
	.catch(error => {
		console.log(error);
	});

const newCard = data => {
	let card = document.createElement("div");
	let cardHeadline = document.createElement("div");
	let cardAuthor = document.createElement("div");
	let authorImgContainer = document.createElement("div");
	let authorImg = document.createElement("img");
	let authorName = document.createElement("span");

	card.appendChild(cardHeadline);
	card.appendChild(cardAuthor);
	cardAuthor.appendChild(authorImgContainer);
	authorImgContainer.appendChild(authorImg);
	cardAuthor.appendChild(authorName);

	cardHeadline.textContent = data.headline;
	authorImg.src = `${data.authorPhoto}`;
	authorName.textContent = `By ${data.authorName}`;

	card.classList.add("card");
	cardHeadline.classList.add("headline");
	cardAuthor.classList.add("author");
	authorImgContainer.classList.add("img-container");

	return card;
};

let cardsContainer = document.querySelector(".cards-container");
