import { openModal } from "./openModal.js"
import { forWork } from "./classVisit.js";

export function modalCreateCard() {
    
    //ПЕРЕМЕННЫЕ
    const root = document.getElementById("root");

    const modal = document.createElement("div");
    const modalContent = document.createElement("div");
    const span = document.createElement("span");
    const img = document.createElement("img");
    const title = document.createElement("h1");
    const form = document.createElement("form");

    const selectDoctor = document.createElement("select");
    const doctor = document.createElement("option");
    const cardiologist = document.createElement("option");
    const dentist = document.createElement("option");
    const therapist = document.createElement("option");

    const selectPriority = document.createElement("select");
    const priority = document.createElement("option");
    const high = document.createElement("option");
    const normal = document.createElement("option");
    const low = document.createElement("option");

    //INPUTS
    const name = document.createElement("input");
    const visitPurpose = document.createElement("input");
    const shortDescription = document.createElement("input");

    const pressure = document.createElement("input");
    const pastDiseases = document.createElement("input");
    const bodyMassIndex = document.createElement("input");
    const age = document.createElement("input");
    const lastVisit = document.createElement("input");
    const information = document.createElement("input");

    const btn = document.createElement("input");

    //СТИЛИЗАЦИЯ
    modal.id = "my_modal";
    modal.classList = "modal";

    modalContent.classList = "modal_content";

    span.classList = "close_modal_window";

    img.classList = "cancel";
    img.src = "./img/cansel.png";

    title.classList = "card-title";
    title.textContent = "Card"

    form.id = "create_card";

    selectDoctor.id = "type_of_doctor";
    selectDoctor.classList = "form-select form-select-lg mb-3";

    doctor.textContent = "Choose the doctor";
    cardiologist.value = "Cardiologist";
    dentist.value = "Dentist";
    therapist.value = "Therapist";
    cardiologist.textContent = "Cardiologist";
    dentist.textContent = "Dentist";
    therapist.textContent = "Therapist";

    selectPriority.id = "priority";
    selectPriority.classList = "form-select form-select-lg mb-3";

    priority.textContent = "Choose the priority";
    high.value = "High";
    normal.value = "Normal";
    low.value = "Low";
    high.textContent = "High";
    normal.textContent = "Normal";
    low.textContent = "Low";

    name.type = "text";
    name.placeholder = "Full name"
    name.id = "fullName";
    name.required = true;
    name.classList = "modal_input";

    visitPurpose.type = "text";
    visitPurpose.placeholder = "Visit purpose"
    visitPurpose.id = "visitPurpose";
    visitPurpose.required = true;
    visitPurpose.classList = "modal_input";


    shortDescription.type = "text";
    shortDescription.placeholder = "Short description"
    shortDescription.id = "shortDescription";
    shortDescription.required = true;
    shortDescription.classList = "modal_input";

    pressure.type = "hidden";
    pressure.placeholder = "Pressure"
    pressure.id = "clients_pressure";
    pressure.required = true;
    pressure.classList = "modal_input";

    pastDiseases.type = "hidden";
    pastDiseases.placeholder = "Past diseases"
    pastDiseases.id = "clients_disease";
    pastDiseases.required = true;
    pastDiseases.classList = "modal_input";

    bodyMassIndex.type = "hidden";
    bodyMassIndex.placeholder = "bodyMassIndex"
    bodyMassIndex.id = "bodyMassIndex";
    bodyMassIndex.required = true;
    bodyMassIndex.classList = "modal_input";

    age.type = "hidden";
    age.placeholder = "Age"
    age.id = "age";
    age.required = true;
    age.classList = "modal_input";

    lastVisit.type = "hidden";
    lastVisit.placeholder = "Last Visit"
    lastVisit.id = "last_visit";
    lastVisit.required = true;
    lastVisit.classList = "modal_input";

    information.type = "hidden";
    information.placeholder = "Information"
    information.id = "clients_information";
    information.required = true;
    information.classList = "modal_input";

    btn.type = "submit";
    btn.value = "Send";
    btn.classList = "bg-success text-white border-0";
    btn.id = "button_send";
    //ВЫВОД НА ЭКРАН 
    span.append(img);
    selectDoctor.append(doctor, cardiologist, dentist, therapist);
    selectPriority.append(priority, high, normal, low);
    form.append(selectDoctor, selectPriority, name, visitPurpose, shortDescription, pressure, pastDiseases, bodyMassIndex, age, lastVisit, information, btn);
    modalContent.append(span, title, form);
    modal.append(modalContent);
    root.append(modal);

    forWork(selectDoctor, form);

    openModal(selectDoctor, selectPriority, visitPurpose, name, shortDescription, bodyMassIndex, pastDiseases, pressure, age, lastVisit, modal, span);

}