export default function createWindowCard() {

  let footer = document.getElementById("footer");
  let windowCard = document.createElement("div");
  windowCard.id = "wrapperCards";
  windowCard.classList.add("wrapperCards");
  windowCard.classList.add("container");
  document.body.insertBefore(windowCard, footer)

}