import { Schema, model } from 'mongoose';
const studentSchema = new Schema({
    id: String,
    name: String,
    age: Number,
    grade: Number,
    behaviourHistory: String
},{
    timestamps: true
});

const behEventSchema = new Schema({
    date: String,
    type: String,
    description: String
},{
    timestamps: true
});

const Student = model('Student', studentSchema);
const BehEvent = model('BehEvent', behEventSchema);

export { Student, BehEvent };