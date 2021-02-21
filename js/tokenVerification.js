export default function token() {

    let clientSecret = localStorage.getItem('token');
    fetch("https://ajax.test-danit.com/api/cards", {
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${clientSecret}`,
        },
        method: "GET"
    }).then((response) => response.json().then((data) => {
        const card = document.getElementsByClassName("card");
        const del = document.getElementById("alertDiv")
        const alert = document.getElementsByClassName("alert alert-danger")[0];

        if (data.length == 0) {
            // cardDiv.style.display = "none"
            del.classList.remove("d-none")
        } else if (data.length !== 0) {
            // cardDiv.style.display = "grid";
            del.classList.add("d-none")
        }
    }))
}
