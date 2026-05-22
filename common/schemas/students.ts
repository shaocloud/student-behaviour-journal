const StudentObject = {
    id: String,
    name: String,
    age: Number,
    grade: Number,
    behaviourHistory: [String]
}

const BehEventObject = {
    date: Date,
    type: String,
    description: String,
    summary: String
}

export class Student{
    id : string;
    name: string;
    age: number;
    grade: number;
    behaviourHistory: string;

    constructor(init?: Partial<Student>) {
        Object.assign(this, init);
    }
}

export class Behaviour{
    date : datetime;
    type : string;
    description : string;
    summary : string;

    constructor(init?: Partial<Student>) {
        Object.assign(this, init);
    }
}