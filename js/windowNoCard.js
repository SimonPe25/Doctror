export default function windowNoCard() {
    let mainSearch = document.getElementById("footer");
    let fistEnterUser = document.createElement("div");
    fistEnterUser.id = "alertDiv";
    fistEnterUser.classList.add("alert");
    fistEnterUser.classList.add("alert-danger");
    fistEnterUser.setAttribute("role", "alert")
    fistEnterUser.textContent = "No items have been added, press login";
    document.body.insertBefore(fistEnterUser, mainSearch)
}

