async function getCategoriesData() {
   const response = await fetch("https://openapi.programming-hero.com/api/peddy/categories");
   const data = await response.json();
   return data.categories;
};

async function showCategories() {
   const data = await getCategoriesData();
   const container = document.getElementById("categories__btn__container");
   data.forEach(item => {
      container.innerHTML += `
      <button class="${isClicked(false)}">
      <img class="max-w-10" src="${item.category_icon}" alt="">
      <span class="text-xl font-bold text-base_content md:text-2xl">${item.category}</span>
      </button>
      `;
   });
};

showCategories();

//categories button toggle
let currentClickedBtn = "";
document.getElementById("categories__btn__container").addEventListener("click", function(event) {
   currentClickedBtn.className = isClicked(false);
   if(event.target.tagName === "IMG" || event.target.tagName === "SPAN") {
      event.target.parentElement.className = isClicked(true);
      currentClickedBtn = event.target.parentElement;
   } else if(event.target.tagName === "BUTTON") {
      event.target.className = isClicked(true);
      currentClickedBtn = event.target;
   };
   getCategoriesPetData(currentClickedBtn.innerText); //call the api
});

//buttons styles
function isClicked(boolean) {
   if(boolean) {
      return `w-full flex justify-center items-center gap-4 px-12 py-3 border border-primary rounded-full bg-primary/10 md:w-auto`;
   } else {
      return `w-full border border-transparent flex justify-center items-center gap-4 px-12 py-3 rounded-full hover:bg-gray-100 md:w-auto`;
   };
};


//fetch data by categories 
async function getCategoriesPetData(category) {
   const response = await fetch(` https://openapi.programming-hero.com/api/peddy/category/${category}`);
   const data = await response.json();
   //display loading
   document.getElementById("loading__container").classList.remove("hidden");
   document.getElementById("main__cards__container").classList.add("hidden");
   loading();
   displayData(data.data);
};
