class Modal {
    constructor(options){
        this.visitPurpose = options.visitPurpose;/*цель визита*/
        this.shortDescription = options.shortDescription;/*краткое описание*/
        this.urgency = options.urgency;/*срочность визитика*/
        this.fullName = options.fullName;/*ФИО*/
    }
}

class Cardiologist extends Modal{
    constructor(options){
        super(options);
        this.normalPressure = options.normalPressure;/*обычное давление*/
        this.bodyMassIndex = options.bodyMassIndex;/*индекс массы тела*/ 
        this.pastDiseases = options.pastDiseases;/*перенесенные заболевания сердечно-сосудистой системы*/
        this.age = options.age;/*возраст*/
    }
}

class Dentist extends Modal{
    constructor(options){
        super(options);
        this.lastVisit = options.lastVisit;/*дата последнего посещения*/
    }
}

class Therapist extends Modal{
    constructor(options){
        super(options);
        this.age = options.age;/*возраст*/
    }
}