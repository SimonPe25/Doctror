import { filterObj } from "./filterObj.js";
const token = localStorage.getItem("token");

export function filter(searchInput, btn, select1, select2, URI) {
    btn.addEventListener("click", search1)
    function search1() {
        return fetch(URI, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: "GET",
        }).then((response) => {
            return response.json();
        }).catch((error) => {
            console.log(error)
        }).then((data) => {
            const cards = document.getElementsByClassName("card");
            for (let i = 0; i < cards.length; i++) {
                cards[i].classList.add("d-none");
            }
            filterObj(searchInput, data, select2, select1)
        }).catch((error) => console.log(error));
    }
};
