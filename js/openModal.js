import { clearModal } from "./clearModal.js";

export function openModal(selectDoctor,selectPriority,visitPurpose,name,shortDescription,bodyMassIndex,pastDiseases,pressure,age,lastVisit,modal,span){
    const btnHeader = document.getElementById("btn_modal_window");

    btnHeader.onclick = function () {
        modal.style.display = "block";
    }
    
    span.onclick = function () {
        clearModal(selectDoctor,selectPriority,visitPurpose,name,shortDescription,bodyMassIndex,pastDiseases,pressure,age,lastVisit,modal,span);
    }
    
    window.onclick = function (event) {
        if (event.target == modal) {
            clearModal(selectDoctor,selectPriority,visitPurpose,name,shortDescription,bodyMassIndex,pastDiseases,pressure,age,lastVisit,modal,span);
        }
    }
}