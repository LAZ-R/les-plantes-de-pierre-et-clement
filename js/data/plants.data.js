import { SUN_EXPOSURE, SOIL, SOIL_HUMIDITY, MULTIPLICATION } from "./common.data.js";

const rawList = [
    {
        id: 0,
        scientificName: 'Chamadorea Elegans',
        commonName: 'Palmier des Montagnes',
        area: 'Amérique du Sud / Centrale',
        sunExposure: {
            min: SUN_EXPOSURE.MI_OMBRE,
            max: SUN_EXPOSURE.LUMINEUX
        },
        temperature: {
            min: '13',
            max: '25'
        },
        soil: [
            SOIL.FRAIS,
            SOIL.DRAINANT
        ],
        humidity: {
            air: {
                min: '60',
                max: '90'
            },
            soil: {
                min: SOIL_HUMIDITY.PEU_HUMIDE,
                max: SOIL_HUMIDITY.LEGEREMENT_HUMIDE
            }
        },
        multiplication: [
            MULTIPLICATION.SEMIS
        ],
        photos: [
            'palmier-montagnes.png'
        ]
    },
    {
        id: 0,
        scientificName: 'Fittonia Albivenis',
        commonName: 'Fittonia',
        area: 'Amérique du Sud',
        sunExposure: {
            min: SUN_EXPOSURE.MI_OMBRE,
            max: SUN_EXPOSURE.LUMINEUX
        },
        temperature: {
            min: '16',
            max: '24'
        },
        soil: [
            SOIL.FRAIS
        ],
        humidity: {
            air: {
                min: '70',
                max: '100'
            },
            soil: {
                min: SOIL_HUMIDITY.LEGEREMENT_HUMIDE,
                max: SOIL_HUMIDITY.HUMIDE
            }
        },
        multiplication: [
            MULTIPLICATION.BOUTURAGE,
            MULTIPLICATION.MARCOTTAGE
        ],
        photos: [
            'fittonia.png'
        ]
    },
    {
        id: 0,
        scientificName: 'Phalaenopsis Philippinensis',
        commonName: 'Orchidée des Philippines',
        area: 'Asie du Sud-Est (Philippines)',
        sunExposure: {
            min: SUN_EXPOSURE.OMBRE_LEGERE,
            max: SUN_EXPOSURE.LUMINEUX
        },
        temperature: {
            min: '15',
            max: '30'
        },
        soil: [
            SOIL.EPIPHYTE
        ],
        humidity: {
            air: {
                min: '50',
                max: '90'
            },
            soil: {
                min: SOIL_HUMIDITY.EPIPHYTE,
                max: SOIL_HUMIDITY.EPIPHYTE
            }
        },
        multiplication: [
            MULTIPLICATION.SEMIS
        ],
        photos: [
            'orchidee-philippines.png'
        ]
    },
    {
        id: 0,
        scientificName: 'Ceropegia Linearis Woodii',
        commonName: 'Woodii',
        area: 'Afrique du Sud',
        sunExposure: {
            min: SUN_EXPOSURE.LUMINEUX,
            max: SUN_EXPOSURE.SOLEIL_DIRECT
        },
        temperature: {
            min: '10',
            max: '25+'
        },
        soil: [
            SOIL.RICHE,
            SOIL.DRAINANT
        ],
        humidity: {
            air: {
                min: '40',
                max: '70'
            },
            soil: {
                min: SOIL_HUMIDITY.SEC,
                max: SOIL_HUMIDITY.PEU_HUMIDE
            }
        },
        multiplication: [
            MULTIPLICATION.BOUTURAGE,
            MULTIPLICATION.MARCOTTAGE
        ],
        photos: [
            'woodii.png'
        ]
    },
    {
        id: 0,
        scientificName: 'Begonia Begonia x Rincifolia \'Immense\'',
        commonName: 'Bégonia Immense',
        area: 'Amérique du Sud',
        sunExposure: {
            min: SUN_EXPOSURE.OMBRE_LEGERE,
            max: SUN_EXPOSURE.LUMINEUX
        },
        temperature: {
            min: '15',
            max: '25+'
        },
        soil: [
            SOIL.RICHE,
            SOIL.DRAINANT
        ],
        humidity: {
            air: {
                min: '60',
                max: '90'
            },
            soil: {
                min: SOIL_HUMIDITY.PEU_HUMIDE,
                max: SOIL_HUMIDITY.LEGEREMENT_HUMIDE
            }
        },
        multiplication: [
            MULTIPLICATION.BOUTURAGE_DE_FEUILLE
        ],
        photos: [
            'begonia-immense.png'
        ]
    },
    {
        id: 0,
        scientificName: 'Ficus Microcarpa',
        commonName: 'Ficus',
        area: 'Asie du Sud-Est',
        sunExposure: {
            min: SUN_EXPOSURE.LUMINEUX,
            max: SUN_EXPOSURE.TRES_LUMINEUX
        },
        temperature: {
            min: '15',
            max: '25+'
        },
        soil: [
            SOIL.FRAIS,
            SOIL.DRAINANT
        ],
        humidity: {
            air: {
                min: '70',
                max: '100'
            },
            soil: {
                min: SOIL_HUMIDITY.PEU_HUMIDE,
                max: SOIL_HUMIDITY.LEGEREMENT_HUMIDE
            }
        },
        multiplication: [
            MULTIPLICATION.BOUTURAGE
        ],
        photos: [
            'ficus-microcarpa.png'
        ]
    },
    {
        id: 0,
        scientificName: 'Epipremnum Aureum',
        commonName: 'Pothos Doré',
        area: 'Asie du Sud-Est',
        sunExposure: {
            min: SUN_EXPOSURE.OMBRE_LEGERE,
            max: SUN_EXPOSURE.LUMINEUX
        },
        temperature: {
            min: '18',
            max: '25'
        },
        soil: [
            SOIL.RICHE,
            SOIL.DRAINANT
        ],
        humidity: {
            air: {
                min: '50',
                max: '80'
            },
            soil: {
                min: SOIL_HUMIDITY.PEU_HUMIDE,
                max: SOIL_HUMIDITY.LEGEREMENT_HUMIDE
            }
        },
        multiplication: [
            MULTIPLICATION.BOUTURAGE
        ],
        photos: [
            'pothos-dore.png'
        ]
    },
    {
        id: 0,
        scientificName: 'Scindapsus Pictus \'Exotica\'',
        commonName: 'Pothos Argenté',
        area: 'Asie du Sud-Est',
        sunExposure: {
            min: SUN_EXPOSURE.OMBRE_LEGERE,
            max: SUN_EXPOSURE.LUMINEUX
        },
        temperature: {
            min: '18',
            max: '25'
        },
        soil: [
            SOIL.RICHE,
            SOIL.DRAINANT
        ],
        humidity: {
            air: {
                min: '50',
                max: '80'
            },
            soil: {
                min: SOIL_HUMIDITY.PEU_HUMIDE,
                max: SOIL_HUMIDITY.LEGEREMENT_HUMIDE
            }
        },
        multiplication: [
            MULTIPLICATION.BOUTURAGE
        ],
        photos: [
            'pothos-argente.png'
        ]
    },
    {
        id: 0,
        scientificName: 'Tradescantia Zebrina',
        commonName: 'Zèbrina',
        area: 'Amérique Centrale',
        sunExposure: {
            min: SUN_EXPOSURE.OMBRE_LEGERE,
            max: SUN_EXPOSURE.LUMINEUX
        },
        temperature: {
            min: '10',
            max: '22'
        },
        soil: [
            SOIL.DRAINANT
        ],
        humidity: {
            air: {
                min: '50',
                max: '80'
            },
            soil: {
                min: SOIL_HUMIDITY.PEU_HUMIDE,
                max: SOIL_HUMIDITY.LEGEREMENT_HUMIDE
            }
        },
        multiplication: [
            MULTIPLICATION.BOUTURAGE,
            MULTIPLICATION.MARCOTTAGE
        ],
        photos: [
            'zebrina.png'
        ]
    },
    {
        id: 0,
        scientificName: 'Chlorophytum Comosum',
        commonName: 'Chlorophytum',
        area: 'Afrique du Sud',
        sunExposure: {
            min: SUN_EXPOSURE.MI_OMBRE,
            max: SUN_EXPOSURE.LUMINEUX
        },
        temperature: {
            min: '15',
            max: '25'
        },
        soil: [
            SOIL.RICHE, 
            SOIL.DRAINANT
        ],
        humidity: {
            air: {
                min: '60',
                max: '90'
            },
            soil: {
                min: SOIL_HUMIDITY.PEU_HUMIDE,
                max: SOIL_HUMIDITY.LEGEREMENT_HUMIDE
            }
        },
        multiplication: [
            MULTIPLICATION.MARCOTTAGE
        ],
        photos: [
            'chlorophytum.png'
        ]
    },
    {
        id: 0,
        scientificName: 'Iresine Herbstii',
        commonName: 'Irésine',
        area: 'Amérique du Sud',
        sunExposure: {
            min: SUN_EXPOSURE.OMBRE_LEGERE,
            max: SUN_EXPOSURE.SOLEIL_DIRECT
        },
        temperature: {
            min: '10',
            max: '25+'
        },
        soil: [
            SOIL.FRAIS,
            SOIL.RICHE
        ],
        humidity: {
            air: {
                min: '60',
                max: '100'
            },
            soil: {
                min: SOIL_HUMIDITY.LEGEREMENT_HUMIDE,
                max: SOIL_HUMIDITY.HUMIDE
            }
        },
        multiplication: [
            MULTIPLICATION.BOUTURAGE,
            MULTIPLICATION.MARCOTTAGE
        ],
        photos: [
            'iresine.png'
        ]
    },
    {
        id: 0,
        scientificName: 'Cordyline Fruticosa',
        commonName: 'Cordyline',
        area: 'Océanie',
        sunExposure: {
            min: SUN_EXPOSURE.LUMINEUX,
            max: SUN_EXPOSURE.TRES_LUMINEUX
        },
        temperature: {
            min: '15',
            max: '25+'
        },
        soil: [
            SOIL.FRAIS,
            SOIL.DRAINANT
        ],
        humidity: {
            air: {
                min: '70',
                max: '100'
            },
            soil: {
                min: SOIL_HUMIDITY.PEU_HUMIDE,
                max: SOIL_HUMIDITY.LEGEREMENT_HUMIDE
            }
        },
        multiplication: [
            MULTIPLICATION.BOUTURAGE
        ],
        photos: []
    }
];

export const getItems = () => {
    let id = 1;
    rawList.forEach(element => {
        element.id = id;
        id += 1;
    });
    return rawList;
}

export const getItemById = (itemId) => {
    let itemReturn;
    getItems().forEach(item => {
        if (item.id == itemId) {
            itemReturn = item;
        }
    });
    return itemReturn;
}