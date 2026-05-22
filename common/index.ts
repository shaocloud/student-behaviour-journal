// refer to
// https://github.com/thdk/TS3-projects-references-example

import * as Student from './schemas/students';
import * as Movie from './schemas/movies';

export default {
    ...Student,
    ...Movie,
};