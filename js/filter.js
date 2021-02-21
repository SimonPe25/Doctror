import { filterObj } from "./filterObj.js"

let clientSecret = localStorage.getItem('token');

export function filter(searchInput, btn, select1, select2, URI = "https://ajax.test-danit.com/api/cards") {
    btn.addEventListener("click", search1)
    function search1() {
        return fetch("https://ajax.test-danit.com/api/cards", {
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${clientSecret}`,
            },
            method: "GET",
        }).then((response) => {
            console.log(response);
            return response.json();
        }).catch((error) => {
            console.log(error)
        }).then((data) => {
            console.log(data)
            const cards = document.getElementsByClassName("card");
            for (let i = 0; i < cards.length; i++) {
                cards[i].classList.add("d-none");
            }
            filterObj(searchInput, data, select2, select1)
        }).catch((error) => console.log(error));
    }
};
