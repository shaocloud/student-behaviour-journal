const movieJson = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "required": [
    "_id",
    "awards",
    "imdb",
    "lastupdated",
    "num_mflix_comments",
    "title",
    "type",
    "year"
  ],
  "properties": {
    "_id": {
      "$ref": "#/$defs/ObjectId"
    },
    "awards": {
      "type": "object",
      "required": [
        "nominations",
        "text",
        "wins"
      ],
      "properties": {
        "nominations": {
          "type": "integer"
        },
        "text": {
          "type": "string"
        },
        "wins": {
          "type": "integer"
        }
      }
    },
    "cast": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "countries": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "directors": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "fullplot": {
      "type": "string"
    },
    "genres": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "imdb": {
      "type": "object",
      "required": [
        "id",
        "rating",
        "votes"
      ],
      "properties": {
        "id": {
          "type": "integer"
        },
        "rating": {
          "anyOf": [
            {
              "$ref": "#/$defs/Double"
            },
            {
              "type": "string"
            }
          ]
        },
        "votes": {
          "type": [
            "integer",
            "string"
          ]
        }
      }
    },
    "languages": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "lastupdated": {
      "type": "string"
    },
    "metacritic": {
      "type": "integer"
    },
    "num_mflix_comments": {
      "type": "integer"
    },
    "plot": {
      "type": "string"
    },
    "poster": {
      "type": "string"
    },
    "rated": {
      "type": "string"
    },
    "released": {
      "$ref": "#/$defs/Date"
    },
    "runtime": {
      "type": "integer"
    },
    "title": {
      "type": "string"
    },
    "tomatoes": {
      "type": "object",
      "required": [
        "lastUpdated",
        "viewer"
      ],
      "properties": {
        "boxOffice": {
          "type": "string"
        },
        "consensus": {
          "type": "string"
        },
        "critic": {
          "type": "object",
          "required": [],
          "properties": {
            "meter": {
              "type": "integer"
            },
            "numReviews": {
              "type": "integer"
            },
            "rating": {
              "$ref": "#/$defs/Double"
            }
          }
        },
        "dvd": {
          "$ref": "#/$defs/Date"
        },
        "fresh": {
          "type": "integer"
        },
        "lastUpdated": {
          "$ref": "#/$defs/Date"
        },
        "production": {
          "type": "string"
        },
        "rotten": {
          "type": "integer"
        },
        "viewer": {
          "type": "object",
          "required": [
            "numReviews"
          ],
          "properties": {
            "meter": {
              "type": "integer"
            },
            "numReviews": {
              "type": "integer"
            },
            "rating": {
              "$ref": "#/$defs/Double"
            }
          }
        },
        "website": {
          "type": "string"
        }
      }
    },
    "type": {
      "type": "string"
    },
    "writers": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "year": {
      "type": [
        "integer",
        "string"
      ]
    }
  },
  "$defs": {
    "ObjectId": {
      "type": "object",
      "properties": {
        "$oid": {
          "type": "string",
          "pattern": "^[0-9a-fA-F]{24}$"
        }
      },
      "required": [
        "$oid"
      ],
      "additionalProperties": false
    },
    "Double": {
      "oneOf": [
        {
          "type": "number"
        },
        {
          "type": "object",
          "properties": {
            "$numberDouble": {
              "enum": [
                "Infinity",
                "-Infinity",
                "NaN"
              ]
            }
          }
        }
      ]
    },
    "Date": {
      "type": "object",
      "properties": {
        "$date": {
          "type": "string",
          "format": "date-time"
        }
      },
      "required": [
        "$date"
      ],
      "additionalProperties": false
    }
  }
}

export class Movie {
    awards!: {
        nominations: number;
        text: string;
        wins: number;
    };

    imdb!: {
        id: number;
        rating: number | string;
        votes: number | string;
    };

    lastupdated!: string;
    num_mflix_comments!: number;
    title!: string;
    type!: string;
    year!: number;

    cast!: string[];
    countries!: string[];
    directors!: string[];
    fullplot!: string;
    genres!: string[];
    languages!: string[];
    metacritic!: number;
    plot!: string;
    poster!: string;
    rated!: string;
    released!: string;
    runtime!: number;

    tomatoes!: {
        lastUpdated: string;

        viewer: {
            numReviews: number;
            meter: number;
            rating: number;
        };

        boxOffice: string;
        consensus: string;

        critic: {
            meter: number;
            numReviews: number;
            rating: number;
        };

        dvd: string;
        fresh: number;
        production: number;
        rotten: number;
        website: string;
    };

    writers!: string[];

    constructor(init?: Partial<Movie>) {
        Object.assign(this, init);
    }
}