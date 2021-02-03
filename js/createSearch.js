import {filter} from "./filter.js"

export function createSearch(){

    const URI = "https://ajax.test-danit.com/api/cards";
    /*root*/
    const root = document.getElementById("root");

    /*блок в котором находиться фильтр*/
    const search = document.createElement("div");

    /*input для поиска по заголовкам*/
    const searchInput = document.createElement("input");

    /*select для фильтра выполненых задач*/
    const select1 = document.createElement("select");
    const all1 = document.createElement("option");
    const open = document.createElement("option");
    const done = document.createElement("option");

    /*select для фильтра по срочности*/
    const select2 = document.createElement("select");
    const all2 = document.createElement("option");
    const high = document.createElement("option");
    const normal = document.createElement("option");
    const low = document.createElement("option");

    /*кнопка для поиска*/
    const btn = document.createElement("button");

    search.classList = "search";

    /*input для поиска по заголовку*/
    searchInput.placeholder = "Search by title";
    searchInput.id = "search";
    searchInput.type = "text";
    searchInput.name = "q";
    searchInput.classList = "form-control mt-5 w-50 p-3 mb-5";
    searchInput.autocomplete = "off"

    /*select для фильтрации выполненых задач*/
    select1.classList = "form-select form-select-lg mb-5 w-25 p-2 bg-light ms-5 mt-5";
    all1.textContent = "All";
    open.textContent = "Open";
    done.textContent = "Done"

    /*select для фильтрации по срочности*/
    select2.classList = "form-select form-select-lg mb-5 w-25 p-2 bg-light ms-5 mt-5";
    all2.textContent = "All";
    high.textContent = "High";
    normal.textContent = "Normal";
    low.textContent = "Low";

    /*кнопка поиска*/
    btn.textContent = "Search";
    btn.type = "button"
    // btn.classList = "btn w-12 ms-5 mt-3";
    btn.classList = "btn btn-primary btn-lg ms-5 mb-5 mt-5";

    /*div в root*/
    root.append(search);

    /*options в select*/
    select1.append(all1,open,done);
    select2.append(all2,high,normal,low);

    /*и всё на страницу*/
    search.append(searchInput,select1,select2,btn);

    filter(searchInput,btn,select1,select2,URI);
};




