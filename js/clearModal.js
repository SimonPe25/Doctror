export function clearModal (selectDoctor,selectPriority,visitPurpose,name,shortDescription,bodyMassIndex,pastDiseases,pressure,age,lastVisit,modal) {
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
    pressure.type = "hidden";
    bodyMassIndex.type = "hidden";
    pastDiseases.type = "hidden";
    age.type = "hidden";
    lastVisit.type = "hidden";
};