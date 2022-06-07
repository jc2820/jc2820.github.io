import { items } from "./items.js";

const createItems = (data) => {
  let container = document.getElementById("listContainer");

  data.map((item) => {
    const itemTemplate = `
        <a href=${item.mainLink} rel="noopener noreferrer" target="_blank">${item.title}</a>
        <p>${item.description}</p>
    `;

    let thisItem = document.createElement("div");
    thisItem.className = "list-item";
    thisItem.innerHTML = itemTemplate;
    container.appendChild(thisItem);
  });
};

document.onload = createItems(items);
