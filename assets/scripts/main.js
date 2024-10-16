async function getAllData() {
    const response = await fetch("https://openapi.programming-hero.com/api/peddy/pets");
    const data = await response.json();
    displayData(data.pets);
};

getAllData(); //after page loads call the all pets api

function displayData(data) {
    const container = document.getElementById("cards__container");
    container.innerHTML = "";
    if (!data.length) {
        container.classList.remove("grid");
        container.innerHTML = `<div class="h-96 bg-base_content/5 rounded-3xl w-full p-5 flex justify-center items-center flex-col md:p-10 md:h-screen">
                            <div>
                                <img src="assets/images/error.webp" alt="error">
                            </div>
                                <div class="text-center mt-6 md:mt-8">
                                    <h2 class="text-xl text-base_content font-bold md:text-3xl">No Information Available</h2>
                                    <p class="text-base max-w-xl text-base_content mt-3">This section currently does not contain any data or content. Please check back later for updates or relevant information</P>
                                </div>
                        </div>`;
    }
    data.forEach(item => {
        container.classList.remove("grid");
        container.classList.add("grid");
        container.innerHTML += `<div class="p-5 border rounded-xl inline-block">
                    <div> 
                        <img class="w-full h-[160px] rounded-xl object-cover" src="${item.image}" alt="">
                    </div>
                    <div class="mt-6">
                        <h3 class="text-lg font-bold text-base_content md:text-xl">${item.pet_name}</h3>
                        <ul class="space-y-2 mt-2">
                            <li class="flex items-center gap-2">
                                <svg class="w-5 h-5 stroke-base_content_secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-grid"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
                                <span class="text-base text-base_content_secondary">Breed: ${item.breed ? item.breed : "Not Available"}</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <svg class="w-5 h-5 stroke-base_content_secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
                                <span class="text-base text-base_content_secondary">Birth: ${item.date_of_birth ? item.date_of_birth.slice(0, 4) : "Not Available"}</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <clipPath id="clip2081_51">
                                            <rect id="Frame" rx="-0.500000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
                                        </clipPath>
                                    <g opacity="0.700000">
                                        <rect id="Frame" rx="-0.500000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
                                        <g clip-path="url(#clip2081_51)">
                                            <path id="Vector" d="M10 11.66L10 17.5" stroke="#131313" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                                            <path id="Vector" d="M7.5 15L12.5 15" stroke="#131313" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                                            <path id="Vector" d="M12.35 5.97C12.98 6.6 13.33 7.44 13.33 8.33C13.33 9.21 12.98 10.06 12.35 10.69C11.73 11.31 10.88 11.66 10 11.66C9.11 11.66 8.26 11.31 7.64 10.69C7.01 10.06 6.66 9.21 6.66 8.33C6.66 7.44 7.01 6.6 7.64 5.97C8.26 5.35 9.11 5 10 5C10.88 5 11.73 5.35 12.35 5.97Z" stroke="#131313" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round"/>
                                            <path id="Vector" d="M12.5 2.5C12.5 3.16 12.23 3.79 11.76 4.26C11.29 4.73 10.66 5 10 5C9.33 5 8.7 4.73 8.23 4.26C7.76 3.79 7.5 3.16 7.5 2.5" stroke="#131313" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                                        </g>
                                    </g>
                                </svg>                  
                                <span class="text-base text-base_content_secondary">Gender: ${item.gender ? item.gender : "Not Available"}</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <svg class="w-5 h-5 stroke-base_content_secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dollar-sign"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>          
                                <span class="text-base text-base_content_secondary">Price: ${item.price ? item.price + "$" : "Not Available"}</span>
                            </li>
                        </ul>
                        <div id="buttons__container" class="flex items-center justify-between flex-wrap gap-y-6 mt-6 md:mt-8"> 
                            <button class="like__btn btn px-6 bg-base_100 border hover:bg-gray-100"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-thumbs-up"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/></svg></button>
                            <button class="adopt__btn text-lg font-bold text-primary btn bg-base_100 border hover:bg-gray-100" onclick="document.getElementById('my_modal_3').showModal()">Adopt</button>
                            <button id="${item.petId}" class="details__btn text-lg font-bold text-primary btn bg-base_100 border hover:bg-gray-100">Details</button>
                        </div>
                    </div>
                </div>`;
    });

    //pet liked button
    const likeButtons = document.querySelectorAll(".like__btn");
    likeButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            const imgContainer = document.getElementById("liked__image__container");
            imgContainer.innerHTML += `<img class="w-full h-[120px] object-cover rounded-lg" src="${btn.parentElement.parentElement.parentElement.children[0].children[0].src}" alt="">`
        });
    });

    //adopt button
    const adoptButtons = document.querySelectorAll(".adopt__btn");
    adoptButtons.forEach(btn => {
        btn.addEventListener("click", function (event) {
            const countdown = document.getElementById("countdown");
            let count = 3;
            countdown.innerText = count;
            const intervalId = setInterval(displayCountDown, 1000)
            function displayCountDown() {
                count--;
                if (count > 0) {
                    countdown.innerText = count;
                };
                if (count === 0) {
                    document.getElementById("my_modal_3").close();
                    event.target.setAttribute("disabled", "true");
                    event.target.setAttribute("disabled", "true");
                    event.target.innerText = "Adopted";
                    clearInterval(intervalId);
                };
            };
        });
    });

    getClickedDetailsButtonId();
    displaySortByPrice(data);
};


//get clicked details button id
function getClickedDetailsButtonId() {
    const detailsButtons = document.querySelectorAll(".details__btn");
    detailsButtons.forEach(item => {
        item.addEventListener("click", function (event) {
            getDataByPetId(event.target.id);
        });
    });
};

//fetch data by pet id 
async function getDataByPetId(id) {
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`);
    const data = await response.json();
    displayDetailsModal(data.petData);
};

//display the details modal
function displayDetailsModal(data) {
    const detailsModal = document.getElementById("details__modal");
    detailsModal.innerHTML = `
        <dialog id="my_modal_1" class="modal">
        <div class="modal-box">
            <div class="h-[150px] md:h-[320px]">
                <img class="w-full h-full object-cover rounded-lg" src="${data.image}" alt="">
            </div>
            <div class="mt-6">
                <h3 class="text-lg font-bold text-base_content md:text-xl">${data.pet_name}</h3>
                <div class="flex items-start flex-col gap-2 mt-3 md:flex-row md:gap-20 md:mt-4">
                    <ul class="space-y-2">
                        <li class="flex items-center gap-2">
                            <svg class="w-5 h-5 stroke-base_content_secondary" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-layout-grid">
                                <rect width="7" height="7" x="3" y="3" rx="1" />
                                <rect width="7" height="7" x="14" y="3" rx="1" />
                                <rect width="7" height="7" x="14" y="14" rx="1" />
                                <rect width="7" height="7" x="3" y="14" rx="1" />
                            </svg>
                            <span class="text-base text-base_content_secondary">Breed: ${data.breed ? data.breed : "Not Available"}</span>
                        </li>
                        <li class="flex items-center gap-2">
                            <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <clipPath id="clip2081_51">
                                    <rect id="Frame" rx="-0.500000" width="19.000000" height="19.000000"
                                        transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0" />
                                </clipPath>
                                <g opacity="0.700000">
                                    <rect id="Frame" rx="-0.500000" width="19.000000" height="19.000000"
                                        transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0" />
                                    <g clip-path="url(#clip2081_51)">
                                        <path id="Vector" d="M10 11.66L10 17.5" stroke="#131313"
                                            stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round"
                                            stroke-linecap="round" />
                                        <path id="Vector" d="M7.5 15L12.5 15" stroke="#131313" stroke-opacity="1.000000"
                                            stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round" />
                                        <path id="Vector"
                                            d="M12.35 5.97C12.98 6.6 13.33 7.44 13.33 8.33C13.33 9.21 12.98 10.06 12.35 10.69C11.73 11.31 10.88 11.66 10 11.66C9.11 11.66 8.26 11.31 7.64 10.69C7.01 10.06 6.66 9.21 6.66 8.33C6.66 7.44 7.01 6.6 7.64 5.97C8.26 5.35 9.11 5 10 5C10.88 5 11.73 5.35 12.35 5.97Z"
                                            stroke="#131313" stroke-opacity="1.000000" stroke-width="1.500000"
                                            stroke-linejoin="round" />
                                        <path id="Vector"
                                            d="M12.5 2.5C12.5 3.16 12.23 3.79 11.76 4.26C11.29 4.73 10.66 5 10 5C9.33 5 8.7 4.73 8.23 4.26C7.76 3.79 7.5 3.16 7.5 2.5"
                                            stroke="#131313" stroke-opacity="1.000000" stroke-width="1.500000"
                                            stroke-linejoin="round" stroke-linecap="round" />
                                    </g>
                                </g>
                            </svg>
                            <span class="text-base text-base_content_secondary">Gender: ${data.gender ? data.gender : "Not Available"}</span>
                        </li>
                        <li class="flex items-center gap-2">
                            <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <clipPath id="clip2081_51">
                                    <rect id="Frame" rx="-0.500000" width="19.000000" height="19.000000"
                                        transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0" />
                                </clipPath>
                                <g opacity="0.700000">
                                    <rect id="Frame" rx="-0.500000" width="19.000000" height="19.000000"
                                        transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0" />
                                    <g clip-path="url(#clip2081_51)">
                                        <path id="Vector" d="M10 11.66L10 17.5" stroke="#131313"
                                            stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round"
                                            stroke-linecap="round" />
                                        <path id="Vector" d="M7.5 15L12.5 15" stroke="#131313" stroke-opacity="1.000000"
                                            stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round" />
                                        <path id="Vector"
                                            d="M12.35 5.97C12.98 6.6 13.33 7.44 13.33 8.33C13.33 9.21 12.98 10.06 12.35 10.69C11.73 11.31 10.88 11.66 10 11.66C9.11 11.66 8.26 11.31 7.64 10.69C7.01 10.06 6.66 9.21 6.66 8.33C6.66 7.44 7.01 6.6 7.64 5.97C8.26 5.35 9.11 5 10 5C10.88 5 11.73 5.35 12.35 5.97Z"
                                            stroke="#131313" stroke-opacity="1.000000" stroke-width="1.500000"
                                            stroke-linejoin="round" />
                                        <path id="Vector"
                                            d="M12.5 2.5C12.5 3.16 12.23 3.79 11.76 4.26C11.29 4.73 10.66 5 10 5C9.33 5 8.7 4.73 8.23 4.26C7.76 3.79 7.5 3.16 7.5 2.5"
                                            stroke="#131313" stroke-opacity="1.000000" stroke-width="1.500000"
                                            stroke-linejoin="round" stroke-linecap="round" />
                                    </g>
                                </g>
                            </svg>
                            <span class="text-base text-base_content_secondary">Vaccinated status: ${data.vaccinated_status ? data.vaccinated_status : "Not Available"}</span>
                        </li>
                    </ul>
                    <ul class="space-y-2">
                        <li class="flex items-center gap-2">
                            <svg class="w-5 h-5 stroke-base_content_secondary" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24" fill="none" stroke-width="1.25" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-calendar">
                                <path d="M8 2v4" />
                                <path d="M16 2v4" />
                                <rect width="18" height="18" x="3" y="4" rx="2" />
                                <path d="M3 10h18" />
                            </svg>
                            <span class="text-base text-base_content_secondary">Birth: ${data.date_of_birth ? data.date_of_birth.slice(0, 4) : "Not Available"}</span>
                        </li>
                        <li class="flex items-center gap-2">
                            <svg class="w-5 h-5 stroke-base_content_secondary" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25"
                                stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dollar-sign">
                                <line x1="12" x2="12" y1="2" y2="22" />
                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                            </svg>
                            <span class="text-base text-base_content_secondary">Price: ${data.price ? data.price + "$" : "Not Available"}</span>
                        </li>
                    </ul>
                </div>
                <div class="mt-5 md:mt-8">
                    <h3 class="text-base text-base_content font-bold">Details Information</h3>
                    <p class="text-base text-base_content_secondary">${data.pet_details}</p>
                </div>
            </div>
            <div class="modal-action">
                <form class="w-full" method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn w-full border border-primary bg-primary/10 text-primary hover:bg-primary hover:text-primary_content">Close</button>
                </form>
            </div>
        </div>
    </dialog>
    `;

    document.getElementById("my_modal_1").showModal(); //and finally show the modal

};

//sort by price
function displaySortByPrice(data) {
    const descendingOrder = data.sort(function (a, b) {
        return a.price - b.price;
    }).reverse()
    document.getElementById("sort__by__price__btn").addEventListener("click", function () {
        //disabled the button
        document.getElementById("sort__by__price__btn").setAttribute("disabled", "true");
        setTimeout(() => {
            document.getElementById("sort__by__price__btn").removeAttribute("disabled", "true");
        },2000)
        //display loading
        document.getElementById("loading__container").classList.remove("hidden");
        document.getElementById("main__cards__container").classList.add("hidden");
        loading();
        //sending descending order data
        displayData(descendingOrder);
    });
};