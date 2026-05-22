import mongoose from 'mongoose';
const { Schema } = mongoose;

import Common from '@common/types'
const { Student, Movie } = Common;
console.log("Hello ", Student)

const MovieSchemaObject = {
    awards: {
        nominations : Number,
        text: String,
        wins: Number
    },
    imdb: {
        id: Number,
        rating: {
            type: Schema.Types.Union,
            of: [Schema.Types.Double, String]
        },
        votes: {
            type: Schema.Types.Union,
            of: [Number, String]
        }
    },
    lastupdated: String,
    num_mflix_comments: Number,
    title: String,
    type: String,
    year: Number,

    cast: [String],
    countries: [String],
    directors: [String],
    fullplot: String,
    genres: [String],
    languages: [String],
    metacritic: Number,
    plot: String,
    poster: String,
    rated: String,
    released: String,
    runtime: Number,
    tomatoes: {

        lastUpdated: String,
        viewer: {
            numReviews: Number,
            meter: Number,
            rating: Schema.Types.Double
        },

        boxOffice: String,
        consensus: String,
        critic: {
            meter: Number,
            numReviews: Number,
            rating: Schema.Types.Double
        },
        dvd: String,
        fresh: Number,
        production: Number,
        rotten: Number,
        website: String

    },
    writers: [String]
};

const StudentSchemaObject = {
    id : String,
    name: String,
    age: Number,
    grade: Number,
    behaviourHistory: [{ type: Schema.Types.ObjectId, ref: 'behaviours'}]
}

const BehSchemaObject = {
    date: Date,
    type: String,
    description: String,
    summary: String,
    students: [{ type: Schema.Types.ObjectId, ref: 'students'}]
}

const movieSchema = new Schema( Movie, {collection: 'movies'} );
export const movieModel = mongoose.model('Movie', movieSchema);

const studentSchema = new Schema( Student, {collection: 'students'} );
export const studentModel = mongoose.model('Student', studentSchema);