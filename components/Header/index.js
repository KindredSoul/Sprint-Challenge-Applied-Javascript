// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
	let header = document.createElementNS("div");
	let headerDate = document.createElementNS("span");
	let headerH1 = document.createElementNS("h1");
	let headerTemp = document.createElementNS("span");

	header.appendChild(headerDate);
	header.appendChild(headerH1);
	header.appendChild(headerTemp);

	headerDate.textContent = "SMARCH 28, 2019";
	headerH1.textContent = "Lambda Times";
	headerTemp.textContent = "98°";

	header.classList.add("header");
	headerDate.classList.add("date");
	headerTemp.classList.add("temp");

	return header;
}

const headerContainer = document.querySelector(".header-container");
headerContainer.appendChild(Header);
