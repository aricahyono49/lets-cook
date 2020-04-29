// import "./style.css";
import "./customElement/bottom-navigasi.js";
import "./customElement/foods-menu.js";
import "./customElement/img-brand.js";
import "./customElement/search-food.js";
import "./customElement/slide-show.js";
import "./customElement/top-navigasi.js";
import $ from "jquery";
import Makanan from "./Makanan.js";
import Menu from "./Menu.js";

window.$ = $;

$(document).ready(function () {
    const apiKey = "apiKey=78fa457f4af34e99b03a06451520249e";
    const menu = new Menu(apiKey);

    menu.pencarianMakanan();
    menu.halamanMakananAsal();
    menu.halamanUtama();

 });

