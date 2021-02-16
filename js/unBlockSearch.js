
export default function unBlockSearch() {
    let btnRemove = document.getElementsByClassName(`search`)[0];
    let modalRemove = document.getElementById("modalLogin");
    // let loginRename = document.getElementsById("login");
    btnRemove.style.opacity = 1;
    modalRemove.classList.remove("active");
}
