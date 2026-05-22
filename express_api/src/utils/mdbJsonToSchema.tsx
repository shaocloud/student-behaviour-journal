import mongoose from 'mongoose';

const { Schema } = mongoose;

/**
 * property
 *  - type
 *  - required?
 *  - properties?
 *    - 
 */

interface PropertyStructure{
    type: string;
    required: string[];
    properties? : PropertyStructure[];
}

interface JsonStructure extends PropertyStructure{
    $schema: string;
    $defs: Object;
}

/**
 * Given a MongoDB constructed json, convert it to a mongoose Schema object
 */
export const jsonToSchema = (json : JsonStructure): typeof Schema => {
    let keyList = []
    if ('required' in json)
    {
        keyList = json.required;
    }

    return new Schema(json)
}