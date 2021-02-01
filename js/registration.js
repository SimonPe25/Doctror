function isEmail() {
    var str = document.getElementById("email").value;
    var status = document.getElementById("status");
    var re = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
    if (re.test(str)) status.innerHTML = "Адрес правильный";
    else status.innerHTML = "Адрес неверный";
    if (isEmpty(str)) status.innerHTML = "Поле пустое";
}
function isEmpty(str) {
    return (str == null) || (str.length == 0);
}
// Получить модель
// var modal = document.getElementById('id01');

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.getElementById("my_modal");
var btn = document.getElementById("btn_modal_window");
var span = document.getElementsByClassName("close_modal_window")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// function create_card(e){
//     e.preventDefault()
//     let createForm = document.getElementById("create_card");
//     let clientsName = createForm["clients_name"].value ;
//     let clientsAge = createForm["clients_age"].value; 
//     let clientsWeight = createForm["clients_weight"].value;
//     let clientsInformation = createForm["clients_information"].value;
//     let clientsVisit = createForm["last_visit"].value;
//     let clientsPressure = createForm["clients_pressure"].value;
//     let clientsDisease = createForm["clients_disease"].value;
    
//     var selind = document.getElementById("type_of_doctor").options.selectedIndex;
//     var doc = document.getElementById("type_of_doctor").options[selind].text;
//     var val = document.getElementById("type_of_doctor").options[selind].value;

//     var selind = document.getElementById("type_of_priority").options.selectedIndex;
//     var priority = document.getElementById("type_of_priority").options[selind].text;
//     var val = document.getElementById("type_of_priority").options[selind].value; 

//     console.log("Name:" + clientsName);
//     console.log("Age:" + clientsAge);
//     console.log("Weight:" + clientsWeight); 
//     console.log("Doctor:" + doc);
//     console.log("Priority:" + priority);
//     console.log("Last visit:" + clientsVisit);
//     console.log("Information about visition:" + clientsInformation);
//     console.log("Pressure:" + clientsPressure);
//     console.log("Past diseases of the cardiovascular system:" + clientsDisease);

//     var container = document.getElementById("container_card");
//     var card = document.createElement("div");

//     var cardName = document.createElement("h1");
//     var cardText = document.createTextNode("Card");
//     cardName.appendChild(cardText);
//     card.appendChild(cardName);

//     var name = document.createElement("h2");
//     var nameText = document.createTextNode("Name: " +clientsName);
//     name.appendChild(nameText);
//     card.appendChild(name);

//     var age = document.createElement("h2");
//     var ageText = document.createTextNode("Age: " + clientsAge);
//     age.appendChild(ageText);
//     card.appendChild(age);

//     var info = document.createElement("h2");
//     var informationText = document.createTextNode("Information about visition: " + clientsInformation);
//     info.appendChild(informationText);
//     card.appendChild(info);

//     var disease = document.createElement("h2");
//     var diseaseText = document.createTextNode("Past diseases of the cardiovascular system: " + clientsDisease);
//     disease.appendChild(diseaseText);
//     card.appendChild(disease);

//     var doctor = document.createElement("h2");
//     var docText = document.createTextNode("Doctor: " + doc);
//     doctor.appendChild(docText);
//     card.appendChild(doctor);

//     var priorityType = document.createElement("h2");
//     var priorityText = document.createTextNode("Priority: " + priority);
//     priorityType.appendChild(priorityText);
//     card.appendChild(priorityType);

//     var lastVisit = document.createElement("h2");
//     var clientsVisitText = document.createTextNode("Last visit: " + clientsVisit);
//     lastVisit.appendChild(clientsVisitText);
//     card.appendChild(lastVisit);

//     var clientsWeightType = document.createElement("h2");
//     var clientsWeightText = document.createTextNode("Weight: " + clientsWeight);
//     clientsWeightType.appendChild(clientsWeightText);
//     card.appendChild(clientsWeightType);

//     var clientsPressureType = document.createElement("h2");
//     var clientsPressureText = document.createTextNode("Pressure: " + clientsPressure);
//     clientsPressureType.appendChild(clientsPressureText);
//     card.appendChild(clientsPressureType);

//     card.classList.add("cards_style");
//     container.appendChild(card);

// }
