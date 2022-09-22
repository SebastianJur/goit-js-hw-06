const ulList = document.getElementById("categories");

const categoriesCollection = ulList.querySelectorAll("li.item");

console.log(`Number of categories: ${categoriesCollection.length}`);

for (let categoriesCollectionItem of categoriesCollection) {
  
  console.log(
    `Category: ${categoriesCollectionItem.querySelector("h2").innerText}`
  );
  console.log(
    `Elements: ${categoriesCollectionItem.getElementsByTagName("li").length}`
  );
}
