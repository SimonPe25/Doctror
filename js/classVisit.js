export class Visit {
    constructor(options){
        this.visitPurpose = options.visitPurpose;/*цель визита*/
        this.shortDescription = options.shortDescription;/*краткое описание*/
        this.urgency = options.urgency;/*срочность визита*/
        this.fullName = options.fullName;/*ФИО*/
        this.done = options.done;
    }
}

export class Cardiologist extends Visit{
    constructor(options){
        super(options);
        this.normalPressure = options.normalPressure;/*обычное давление*/
        this.bodyMassIndex = options.bodyMassIndex;/*индекс массы тела*/ 
        this.pastDiseases = options.pastDiseases;/*перенесенные заболевания сердечно-сосудистой системы*/
        this.age = options.age;/*возраст*/
    }
}

export class Dentist extends Visit{
    constructor(options){
        super(options);
        this.lastVisit = options.lastVisit;/*дата последнего посещения*/
    }
}

export class Therapist extends Visit{
    constructor(options){
        super(options);
        this.age = options.age;/*возраст*/
    }
}

