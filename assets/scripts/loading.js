function loading() {
    setTimeout(() => {
        const loading = document.getElementById("loading__container");
        loading.classList.add("hidden");
        const mainCardsContainer = document.getElementById("main__cards__container");
        mainCardsContainer.classList.remove("hidden");
    }, 2000);
};

loading();