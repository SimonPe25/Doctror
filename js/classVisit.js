class Visit {
    constructor(options){
        this.visitPurpose = options.visitPurpose;/*цель визита*/
        this.shortDescription = options.shortDescription;/*краткое описание*/
        this.urgency = options.urgency;/*срочность визита*/
        this.fullName = options.fullName;/*ФИО*/
        this.done = options.done;
    }
}

class Cardiologist extends Visit{
    constructor(options){
        super(options);
        this.normalPressure = options.normalPressure;/*обычное давление*/
        this.bodyMassIndex = options.bodyMassIndex;/*индекс массы тела*/ 
        this.pastDiseases = options.pastDiseases;/*перенесенные заболевания сердечно-сосудистой системы*/
        this.age = options.age;/*возраст*/
    }
}

class Dentist extends Visit{
    constructor(options){
        super(options);
        this.lastVisit = options.lastVisit;/*дата последнего посещения*/
    }
}

class Therapist extends Visit{
    constructor(options){
        super(options);
        this.age = options.age;/*возраст*/
    }
}

function createVisit(){
    const URI = "https://ajax.test-danit.com/api/cards";
    const button_send = document.getElementById("create_card");

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
    
    doctor.addEventListener("change",() => {
        if(doctor.value === "Cardiologist"){
            clientsPressure.type = "text";
            bodyMassIndex.type = "text";
            clientsDisease.type = "text";
            age.type = "text";
            lastVisit.type = "hidden";
        }else if(doctor.value === "Dentist"){
            lastVisit.type = "text";
            clientsPressure.type = "hidden";
            bodyMassIndex.type = "hidden";
            clientsDisease.type = "hidden";
            age.type = "hidden";
        }else if(doctor.value === "Therapist"){
            age.type = "text";
            clientsPressure.type = "hidden";
            bodyMassIndex.type = "hidden";
            clientsDisease.type = "hidden";
            lastVisit.type = "hidden";
        }else{
            clientsPressure.type = "hidden";
            bodyMassIndex.type = "hidden";
            clientsDisease.type = "hidden";
            age.type = "hidden";
            lastVisit.type = "hidden";
        }
    })

    button_send.addEventListener("submit",(e) => {
        const my_modal = document.getElementById("my_modal");
        my_modal.style.display = "none";
        e.preventDefault();
        if(doctor.value === "Cardiologist"){
            const patient = new Cardiologist({
                visitPurpose: `${visitPurpose.value}`,
                shortDescription: `${shortDescription.value}`,
                urgency: `${priority.value}`,
                fullName:`${fullName.value}`,
                normalPressure:`${clientsPressure.value}`,
                bodyMassIndex:`${bodyMassIndex.value}`,
                pastDiseases:`${clientsDisease.value}`,
                age:`${age.value}`,
                done:"Open"
            });
            return fetch(URI,{
                headers:{
                    "Content-Type": "application/json",
                    Authorization: "Bearer 52770517-a12b-4007-9006-ae99ad6c4788",
                },
                method:"POST",
                body: JSON.stringify(patient),
            }).then((response) => response.json()).then((data) => {
                console.log(data);
                clientsPressure.value = "";
                shortDescription.value = "";
                priority.value = "Priority";
                fullName.value = "";
                bodyMassIndex.value = "";
                clientsDisease.value = "";
                age.value = "";
                visitPurpose.value = "";
                doctor.value = "Doctor";
            });
        }else if(doctor.value === "Dentist"){
            const patient = new Dentist({
                visitPurpose: `${visitPurpose.value}`,
                shortDescription: `${shortDescription.value}`,
                urgency: `${priority.value}`,
                fullName:`${fullName.value}`,
                done:"Open",
                lastVisit:`${lastVisit.value}`,
            });
            return fetch(URI,{
                headers:{
                    "Content-Type": "application/json",
                    Authorization: "Bearer 52770517-a12b-4007-9006-ae99ad6c4788",
                },
                method:"POST",
                body: JSON.stringify(patient),
            }).then((response) => response.json()).then((data) => {
                console.log(data);
                visitPurpose.value = "";
                shortDescription.value = "";
                priority.value = "Priority";
                fullName.value = "";
                lastVisit.value = "";
                doctor.value = "Doctor";
            });
        }else if(doctor.value === "Therapist"){
            const patient = new Therapist({
                visitPurpose: `${visitPurpose.value}`,
                shortDescription: `${shortDescription.value}`,
                urgency: `${priority.value}`,
                fullName:`${fullName.value}`,
                done:"Open",
                age:`${age.value}`,
            });
            return fetch(URI,{
                headers:{
                    "Content-Type": "application/json",
                    Authorization: "Bearer 52770517-a12b-4007-9006-ae99ad6c4788",
                },
                method:"POST",
                body: JSON.stringify(patient),
            }).then((response) => response.json()).then((data) => {
                console.log(data);
                visitPurpose.value = "";
                shortDescription.value = "";
                priority.value = "Priority";
                fullName.value = "";
                age.value = "";
                doctor.value = "Doctor";
            });
        } 
    })
}
createVisit();

