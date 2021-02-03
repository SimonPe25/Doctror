export function openModal(modal,span,selectDoctor,selectPriority,visitPurpose,name,shortDescription,bodyMassIndex,pastDiseases,pressure,age,lastVisit){
    const btnHeader = document.getElementById("btn_modal_window");

    btnHeader.onclick = function () {
        modal.style.display = "block";
    }
    
    span.onclick = function () {
        modal.style.display = "none";
        pressure.value = "";
        shortDescription.value = "";
        selectPriority.value = "Choose the priority";
        name.value = "";
        bodyMassIndex.value = "";
        pastDiseases.value = "";
        age.value = "";
        visitPurpose.value = "";
        selectDoctor.value = "Choose the doctor";
    }
    
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            pressure.value = "";
            shortDescription.value = "";
            selectPriority.value = "Choose the priority";
            name.value = "";
            bodyMassIndex.value = "";
            pastDiseases.value = "";
            age.value = "";
            visitPurpose.value = "";
            selectDoctor.value = "Choose the doctor";
        }
    }
}