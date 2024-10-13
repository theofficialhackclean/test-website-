const body = document.querySelector("body");
const main = document.querySelector(".main");
const rateSeries = document.querySelector(".rateSeries");
const btn_Rated = document.querySelector(".btn_Rated");

/*
window.addEventListener("load", () => {

    JSON.parse(localStorage.getItem('loginData'));

    btn_Account.replaceChildren(img_profile);
    btn_Login.replaceWith(btn_Logout);
    btn_Logout.style = "display: block";
    modal_Login.style = "display: none";
    rateSeries.style = "display: block";
    btn_Rated.style = "display: block";

})*/

/*btn_Logout.addEventListener("click", () => {
    localStorage.removeItem('loginData');
    const img_profile = document.querySelector("img");
    const btn_Account = document.querySelector(".btn_Account");  
    console.log(btn_Account);
    btn_Logout.replaceWith(btn_Login);
    btn_Logout.style = "display: none";
    modal_Login.style = "display: none";
    rateSeries.style = "display: none";
    btn_Rated.style = "display: none";
    data.user = "";

})*/

// RESPONSIVE MENU
const header = document.querySelector(".header");
const container_Header = document.querySelector(".container_Header");
const esplora_Btn = document.querySelector(".esplora_Btn");
const menu_Container = document.querySelector(".menu_Container");
const category_Btn = document.querySelector(".category_Btn");
const subMenu_Category = document.querySelector(".subMenu_Category");
const arrowDown_Btn_Category = document.querySelector(".arrowDown_Btn_Category");
const arrowUp_Btn_Category = document.querySelector(".arrowUp_Btn_Category");
const btn_Close_Menu = document.querySelector(".btn_Close_Menu");
const btn_Search = document.querySelector(".btn_Search");
const btn_Close_Search = document.querySelector(".btn_Close_Search");
const search_Bar = document.querySelector(".search_Bar");
const btn_Account = document.querySelector(".btn_Account");
const menu_Account = document.querySelector(".menu_Account");
const btn_Close_Menu_Account = document.querySelector(".btn_Close_Menu_Account");

esplora_Btn.addEventListener("click", () => {
    esplora_Btn.style = "display: none";
    btn_Search.style = "display: none";
    menu_Container.style = "display: flex";
    menu_Account.style = "display: none";
    header.append(menu_Container);
});

btn_Close_Menu.addEventListener("click", () => {
    esplora_Btn.style = "display: flex";
    btn_Search.style = "display: flex";
    menu_Container.style = "display: none";
});

category_Btn.addEventListener("click", () => {
    subMenu_Category.style = "display: flex";
    arrowUp_Btn_Category.style = "display: block";
    arrowDown_Btn_Category.style = "display: none";
});

arrowUp_Btn_Category.addEventListener("click", () => {
    subMenu_Category.style = "display: none";
    arrowUp_Btn_Category.style = "display: none";
    arrowDown_Btn_Category.style = "display: block";
});

btn_Search.addEventListener("click", () => {
    search_Bar.style = "display: flex";
    btn_Close_Search.style = "display: flex";
    btn_Search.style = "display: none";
    esplora_Btn.style = "display: none";
    btn_Account.style = "display: none";
    menu_Account.style = "display: none";
});

btn_Close_Search.addEventListener("click", () => {
    search_Bar.style = "display: none";
    btn_Close_Search.style = "display: none";
    btn_Search.style = "display: flex";
    esplora_Btn.style = "display: flex";
    btn_Account.style = "display: flex";
});

btn_Account.addEventListener("click", () => {
    menu_Account.style = "display: flex";
    esplora_Btn.style = "display: flex";
    btn_Search.style = "display: flex";
    menu_Container.style = "display: none";
    header.append(menu_Account);
});

btn_Close_Menu_Account.addEventListener("click", () => {
    menu_Account.style = "display: none";
    esplora_Btn.style = "display: flex";
    btn_Search.style = "display: flex";
});

// END RESPONSIVE MENU

// HERO SECTION
const url_popularSeries = "https://api.themoviedb.org/3/tv/popular?api_key=735bb0297a3005a4acf5d01890f3249f&language=en";
const container_Hero = document.querySelector(".container_Hero");
const container_modal_PopularSeries = document.createElement("div");
const modal_PopularSeries = document.createElement("div");
const btnModal_PopularSeries = document.createElement("button");
const btnCloseModal = document.createElement("button");
const iconModalBtn = document.createElement("i");
const iconCloseModalBtn = document.createElement("i");

container_modal_PopularSeries.className = "container_modal_PopularSeries";
modal_PopularSeries.className = "modal_PopularSeries";
btnModal_PopularSeries.className = "btnModal_PopularSeries";
btnCloseModal.className = ".btnCloseModal";
iconModalBtn.className = "fa-solid fa-play";
iconCloseModalBtn.className = "fa-solid fa-circle-xmark iconCloseModalBtn";

btnModal_PopularSeries.append(iconModalBtn);
btnCloseModal.append(iconCloseModalBtn);
modal_PopularSeries.append(btnCloseModal);

btnModal_PopularSeries.addEventListener("click", () => {
    modal_PopularSeries.style = "display: flex";
    body.style = "overflow-y: hidden";
    btnCloseModal.style = "display: block";
    container_modal_PopularSeries.append(modal_PopularSeries);
    body.append(container_modal_PopularSeries);
    container_modal_PopularSeries.style = "display: flex";
});

btnCloseModal.addEventListener("click", () => {
    modal_PopularSeries.style = "display: none";
    body.style = "overflow-y: visible";
    btnModal_PopularSeries.append(iconModalBtn);
    btnCloseModal.append(iconCloseModalBtn);
    modal_PopularSeries.append(btnCloseModal);
    container_modal_InfoSeries.style = "display: none";
    container_modal_PopularSeries.style = "display: none";
});

fetch(url_popularSeries)
    .then((res) => res.json())
    .then((res) => HERO_SerieTv(res));

const HERO_SerieTv = (data) => {
    const container_hero_Series = document.createElement("div");
    const img_hero_Series = document.createElement("img");
    const container_InfoModal = document.createElement("div");
    const idSeries = data.results[0].id;

    container_hero_Series.className = "container_hero_Series";
    container_InfoModal.className = "container_InfoModal";
    img_hero_Series.className = "img_hero_Series";

    img_hero_Series.setAttribute("src", "https://image.tmdb.org/t/p/original/" + data.results[0].backdrop_path);
    img_hero_Series.setAttribute("alt", data.results[0].name);

    container_hero_Series.append(img_hero_Series, btnModal_PopularSeries, modal_PopularSeries);
    container_Hero.append(container_hero_Series);

    // MODAL CARD
    const name_PopularSeries = document.createElement("h2");
    const overview_PopularSeries = document.createElement("p");
    const img_PopularSeries = document.createElement("img");
    const voteAverage_PopularSeries = document.createElement("span");
    const voteCount_PopularSeries = document.createElement("span");

    const container_Play = document.createElement("div");
    const text_Play = document.createElement("a");
    const btn_Play = document.createElement("i");

    name_PopularSeries.className = "name_PopularSeries";
    overview_PopularSeries.className = "overview_PopularSeries";
    img_PopularSeries.className = "img_PopularSeries";
    voteAverage_PopularSeries.className = "voteAverage_PopularSeries";
    voteCount_PopularSeries.className = "voteCount_PopularSeries";
    container_Play.className = "container_Play";
    text_Play.className = "text_Play";
    btn_Play.className = "fa-solid fa-play btn_Play";

    name_PopularSeries.textContent = data.results[0].name;
    overview_PopularSeries.textContent = data.results[0].overview;
    if (overview_PopularSeries.outerHTML === "<p class=\"overview_PopularSeries\"></p>") {
        overview_PopularSeries.innerHTML = "DESCRIPTION NOT UPDATED";
    }
    voteAverage_PopularSeries.textContent = "Average rating: " + data.results[0].vote_average + "/10";
    voteCount_PopularSeries.textContent = "Total votes: " + data.results[0].vote_count;
    text_Play.setAttribute("href", `http://127.0.0.1:5500/tv-series.html?id=${idSeries}`);
    text_Play.textContent = "Play";

    text_Play.append(btn_Play);
    container_Play.append(text_Play);
    container_InfoModal.append(btnCloseModal, name_PopularSeries, overview_PopularSeries, voteAverage_PopularSeries, voteCount_PopularSeries, container_Play, rated_Form);
    modal_PopularSeries.append(container_InfoModal);

    img_PopularSeries.setAttribute("src", "https://image.tmdb.org/t/p/original/" + data.results[0].poster_path);
    img_PopularSeries.setAttribute("alt", data.results[0].name);
    modal_PopularSeries.append(img_PopularSeries);
};
