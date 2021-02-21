import { clearModal } from "./clearModal.js";
import token from "./tokenVerification.js";
import wathCards from "./wathCard.js"

const cardDiv = document.createElement("div");
cardDiv.classList = "card-div";
cardDiv.id = "card-div";

class Visit {

    constructor(options) {
        this.visitPurpose = options.visitPurpose;
        this.shortDescription = options.shortDescription;
        this.urgency = options.urgency;
        this.fullName = options.fullName;
        this.doctor = options.doctor;
        this.done = options.done;
    }

    render(id) {
        let root = document.getElementById("root");
        let div = document.createElement("div");
        div.setAttribute("id", "cardVisit" + id);
        div.classList = "card-div";
        let form = this.renderBase(id);
        div.append(form);
        root.appendChild(div);
    }

    addButtons(form, id) {
        let editButton = document.createElement("input");
        editButton.setAttribute("class", "btn btn-warning")
        editButton.setAttribute("type", "button");
        editButton.setAttribute("value", "Edit");
        editButton.setAttribute("id", "editButton" + id);
        editButton.setAttribute("data-id", id);
        let saveButton = document.createElement("input");
        saveButton.setAttribute("class", "btn btn-success ms-2")
        saveButton.setAttribute("type", "submit");
        saveButton.setAttribute("value", "Save");
        editButton.setAttribute("id", "saveButton" + id);
        editButton.setAttribute("data-id", id);
        let deleteButton = document.createElement("input");
        deleteButton.setAttribute("class", "btn btn-danger ms-2")
        deleteButton.setAttribute("type", "button");
        deleteButton.setAttribute("value", "Delete");
        deleteButton.setAttribute("id", "deleteButton" + id);
        deleteButton.setAttribute("data-id", id);
        form.addEventListener("submit", e => saveChanges(e));
        editButton.addEventListener("click", e => editVisit(e));
        deleteButton.addEventListener("click", e => deleteVisit(e));
        form.appendChild(editButton);
        form.appendChild(saveButton);
        form.appendChild(deleteButton);
    }

    renderField(form, id, classes, fieldName, inputType, labelText, fieldValue) {
        let fieldLabel = document.createElement("h4");
        let fieldLabelText = document.createTextNode(labelText);
        let fieldInput = document.createElement("input");
        fieldInput.setAttribute("type", inputType);
        fieldInput.setAttribute("disabled", "true");
        fieldInput.setAttribute("value", fieldValue);
        fieldInput.setAttribute("id", fieldName + id);
        fieldInput.setAttribute("data-id", id);
        fieldInput.setAttribute("class", classes)
        fieldLabel.appendChild(fieldLabelText);
        fieldLabel.appendChild(fieldInput);
        form.appendChild(fieldLabel);
    }

    renderBase(id) {
        let form = document.createElement("form");
        form.setAttribute("id", "formCard" + id);
        form.setAttribute("data-id", id);
        form.setAttribute("data-doctor", this.doctor);
        form.classList.add("card-body");
        this.addButtons(form, id);
        this.renderField(form, id, "input", "inputName", "text", "Name: ", this.fullName);
        this.renderField(form, id, "input", "inputPriority", "text", "Priority: ", this.urgency);
        this.renderField(form, id, "input", "inputVisitPurpose", "text", "Title: ", this.visitPurpose);
        this.renderField(form, id, "input", "inputShortDescription", "text", "Short description: ", this.shortDescription);
        this.renderField(form, id, "input", "inputDoctor", "text", "Doctor: ", this.doctor);
        return form;
    }

    sendCreateRequest(patient) {
        fetch("https://ajax.test-danit.com/api/cards", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${clientSecret}`
            },
            body: JSON.stringify(patient)
        })
            .then(response => response.json())
            .then(response => {
                this.render(response.id);
                token();
            });
    }
}

class Cardiologist extends Visit {
    constructor(options) {
        super(options);
        this.normalPressure = options.normalPressure;
        this.bodyMassIndex = options.bodyMassIndex;
        this.pastDiseases = options.pastDiseases;
        this.age = options.age;
    }

    render(id) {
        let root = document.getElementById("root")
        let div = document.createElement("div");
        div.setAttribute("id", "cardVisit" + id);
        div.classList = "card";
        let form = super.renderBase(id);
        super.renderField(form, id, "input", "inputPressure", "text", "Pressure : ", this.normalPressure);
        super.renderField(form, id, "input", "inputDiseases", "text", "Past diseases : ", this.pastDiseases);
        super.renderField(form, id, "input", "inputBodyMassIndex", "text", "Pressure : ", this.bodyMassIndex);
        super.renderField(form, id, "input", "inputAge", "text", "Age: ", this.age);
        div.append(form);
        cardDiv.append(div)
        root.appendChild(cardDiv);
    }
}

class Dentist extends Visit {
    constructor(options) {
        super(options);
        this.lastVisit = options.lastVisit;
    }

    render(id) {
        let root = document.getElementById("root")
        let div = document.createElement("div");
        div.setAttribute("id", "cardVisit" + id);
        div.classList = "card";
        let form = super.renderBase(id);
        super.renderField(form, id, "input", "inputLastVisit", "text", "Last visit: ", this.lastVisit);
        div.append(form);
        cardDiv.append(div)
        root.appendChild(cardDiv);
    }
}

class Therapist extends Visit {
    constructor(options) {
        super(options);
        this.age = options.age;
    }

    render(id) {
        let root = document.getElementById("root")
        let div = document.createElement("div");
        div.setAttribute("id", "cardVisit" + id);
        div.classList = "card";
        let form = super.renderBase(id);
        super.renderField(form, id, "input", "inputAge", "text", "Age: ", this.age);
        div.append(form);
        cardDiv.append(div)
        root.appendChild(cardDiv);
    }
}



let userPasswordGet = localStorage.getItem('Uncaught SyntaxError')
let userPassword1 = userPasswordGet.replace(/[?]/gi, 0);


let clientSecret = localStorage.getItem('token');
let userLogin = localStorage.getItem('login')
let userPassword = userPassword1;


fetch("https://ajax.test-danit.com/api/cards/login", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
        // 'Authorization': `Bearer ${clientSecret}`
    },
    body: JSON.stringify({ email: userLogin, password: userPassword })
})
    .then(response => response.text())
    .then(token => clientSecret = token)
    .then(() => {
        fetch("https://ajax.test-danit.com/api/cards", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${clientSecret}`
            }
        })
            .then(response => response.json())
            .then(response => {
                response.forEach(resp => {
                    let patient;
                    switch (resp.doctor) {
                        case "Cardiologist": patient = new Cardiologist(resp); break;
                        case "Dentist": patient = new Dentist(resp); break;
                        case "Therapist": patient = new Therapist(resp); break;
                        default: patient = new Visit(resp);
                    }
                    patient.render(resp.id);
                });
            });
    });

function editVisit(e) {
    let button = e.target;
    let id = button.getAttribute("data-id");
    let doctor = button.parentNode.getAttribute("data-doctor");
    document.getElementById("inputName" + id).removeAttribute("disabled");
    document.getElementById("inputPriority" + id).removeAttribute("disabled");
    document.getElementById("inputVisitPurpose" + id).removeAttribute("disabled");
    document.getElementById("inputShortDescription" + id).removeAttribute("disabled");

    switch (doctor) {
        case "Cardiologist":
            document.getElementById("inputPressure" + id).removeAttribute("disabled");
            document.getElementById("inputDiseases" + id).removeAttribute("disabled");
            document.getElementById("inputBodyMassIndex" + id).removeAttribute("disabled");
            document.getElementById("inputAge" + id).removeAttribute("disabled");
            break;
        case "Dentist":
            document.getElementById("inputLastVisit" + id).removeAttribute("disabled");
            break;
        case "Therapist":
            document.getElementById("inputAge" + id).removeAttribute("disabled");
            break;
        default: return;
    }
}

function saveChanges(e) {
    e.preventDefault();
    let form = e.target;
    let id = form.getAttribute("data-id");
    let doctor = form.getAttribute("data-doctor");
    let patient;
    let inputName = document.getElementById("inputName" + id);
    inputName.setAttribute("disabled", "true");
    let inputPriority = document.getElementById("inputPriority" + id);
    inputPriority.setAttribute("disabled", "true");
    let inputVisitPurpose = document.getElementById("inputVisitPurpose" + id);
    inputVisitPurpose.setAttribute("disabled", "true");
    let inputShortDescription = document.getElementById("inputShortDescription" + id);
    inputShortDescription.setAttribute("disabled", "true");

    switch (doctor) {
        case "Cardiologist":
            let inputPressure = document.getElementById("inputPressure" + id);
            inputPressure.setAttribute("disabled", "true");
            let inputDiseases = document.getElementById("inputDiseases" + id);
            inputDiseases.setAttribute("disabled", "true");
            let inputBMI = document.getElementById("inputBodyMassIndex" + id);
            inputBMI.setAttribute("disabled", "true");
            let inputAge = document.getElementById("inputAge" + id);
            inputAge.setAttribute("disabled", "true");
            patient = new Cardiologist({
                visitPurpose: `${inputVisitPurpose.value}`,
                shortDescription: `${inputShortDescription.value}`,
                urgency: `${inputPriority.value}`,
                fullName: `${inputName.value}`,
                normalPressure: `${inputPressure.value}`,
                bodyMassIndex: `${inputBMI.value}`,
                pastDiseases: `${inputDiseases.value}`,
                age: `${inputAge.value}`,
                done: "Open",
                doctor: doctor
            });
            break;

        case "Dentist":
            let inputLastVisit = document.getElementById("inputLastVisit" + id);
            inputLastVisit.setAttribute("disabled", "true");
            patient = new Therapist({
                visitPurpose: `${inputVisitPurpose.value}`,
                shortDescription: `${inputShortDescription.value}`,
                urgency: `${inputPriority.value}`,
                fullName: `${inputName.value}`,
                done: "Open",
                lastVisit: `${inputLastVisit.value}`,
                doctor: doctor
            });
            break;

        case "Therapist":
            let inputAgeT = document.getElementById("inputAge" + id);
            inputAgeT.setAttribute("disabled", "true");
            patient = new Dentist({
                visitPurpose: `${inputVisitPurpose.value}`,
                shortDescription: `${inputShortDescription.value}`,
                urgency: `${inputPriority.value}`,
                fullName: `${inputName.value}`,
                done: "Open",
                age: `${inputAgeT.value}`,
                doctor: doctor
            });
            break;
        default: return;
    }

    fetch(`https://ajax.test-danit.com/api/cards/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${clientSecret}`
        },
        body: JSON.stringify(patient)
    });
}

function deleteVisit(e) {
    let button = e.target;
    let id = button.getAttribute("data-id");
    let visitCard = document.getElementById("cardVisit" + id);
    fetch(`https://ajax.test-danit.com/api/cards/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${clientSecret}`
        }
    })
        .then(response => { visitCard.parentNode.removeChild(visitCard); token(); });

}

export function createVisit(e) {
    e.preventDefault();
    let patient;
    const doctor = document.getElementById("type_of_doctor");
    const priority = document.getElementById("priority");
    const visitPurpose = document.getElementById("visitPurpose");
    const fullName = document.getElementById("fullName");
    const shortDescription = document.getElementById("shortDescription");
    const bodyMassIndex = document.getElementById("bodyMassIndex");
    const clientsDisease = document.getElementById("clients_disease");
    const clientsPressure = document.getElementById("clients_pressure");
    const age = document.getElementById("age");
    const lastVisit = document.getElementById("last_visit");
    const my_modal = document.getElementById("my_modal");
    my_modal.style.display = "none";
    if (doctor.value === "Cardiologist") {
        patient = new Cardiologist({
            visitPurpose: `${visitPurpose.value}`,
            shortDescription: `${shortDescription.value}`,
            urgency: `${priority.value}`,
            doctor: `${doctor.value}`,
            fullName: `${fullName.value}`,
            normalPressure: `${clientsPressure.value}`,
            bodyMassIndex: `${bodyMassIndex.value}`,
            pastDiseases: `${clientsDisease.value}`,
            age: `${age.value}`,
            done: "Open",
            doctor: doctor.value
        });
    } else if (doctor.value === "Dentist") {
        patient = new Dentist({
            visitPurpose: `${visitPurpose.value}`,
            shortDescription: `${shortDescription.value}`,
            urgency: `${priority.value}`,
            fullName: `${fullName.value}`,
            done: "Open",
            lastVisit: `${lastVisit.value}`,
            doctor: doctor.value
        });
    } else if (doctor.value === "Therapist") {
        patient = new Therapist({
            visitPurpose: `${visitPurpose.value}`,
            shortDescription: `${shortDescription.value}`,
            urgency: `${priority.value}`,
            fullName: `${fullName.value}`,
            done: "Open",
            age: `${age.value}`,
            doctor: doctor.value
        });
    }
    patient.sendCreateRequest(patient);
    clearModal(doctor, priority, visitPurpose, fullName, shortDescription, bodyMassIndex, clientsDisease, clientsPressure, age, lastVisit, my_modal);
    token();
}

function onDoctorChange() {
    const doctor = document.getElementById("type_of_doctor");
    const bodyMassIndex = document.getElementById("bodyMassIndex");
    const clientsDisease = document.getElementById("clients_disease");
    const clientsPressure = document.getElementById("clients_pressure");
    const age = document.getElementById("age");
    const lastVisit = document.getElementById("last_visit");

    if (doctor.value === "Cardiologist") {
        clientsPressure.type = "text";
        bodyMassIndex.type = "text";
        clientsDisease.type = "text";
        age.type = "number";
        lastVisit.type = "hidden";
    } else if (doctor.value === "Dentist") {
        lastVisit.type = "date";
        clientsPressure.type = "hidden";
        bodyMassIndex.type = "hidden";
        clientsDisease.type = "hidden";
        age.type = "hidden";
    } else if (doctor.value === "Therapist") {
        age.type = "number";
        clientsPressure.type = "hidden";
        bodyMassIndex.type = "hidden";
        clientsDisease.type = "hidden";
        lastVisit.type = "hidden";
    } else {
        clientsPressure.type = "hidden";
        bodyMassIndex.type = "hidden";
        clientsDisease.type = "hidden";
        age.type = "hidden";
        lastVisit.type = "hidden";
    }
}
export function forWork(doctor, form) {
    form.addEventListener("submit", (e) => createVisit(e));
    doctor.addEventListener("change", () => onDoctorChange());
}
