import React, { useEffect } from 'react';
import QuestionnaireComponent from '../components/QuestionnaireComponent';

const NewPage = () => {

  var listaFormularios = 
  [
    {
      "status": "draft",
      "title": "form 1",
      "resourceType": "Questionnaire",
      "item": [
        {
          "type": "group",
          "linkId": "/X123",
          "text": "Family member",
          "item": [
            {
              "type": "string",
              "linkId": "/X123/X124",
              "text": "Name"
            },
            {
              "type": "group",
              "repeats": true,
              "linkId": "/X123/X125",
              "text": "Surgical History",
              "item": [
                {
                  "type": "date",
                  "linkId": "/X123/X125/X126",
                  "text": "Date"
                },
                {
                  "type": "string",
                  "linkId": "/X123/X125/X127",
                  "text": "Surgery type"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "code": [
        {
          "code": "74728-7",
          "display": "Vital signs, weight, height, head circumference, oximetry, BMI, & BSA panel"
        }
      ],
      "title": "Vital signs, weight, height, head circumference, oximetry, BMI, & BSA panel",
      "resourceType": "Questionnaire",
      "status": "draft",
      "meta": {
        "profile": [
          "http://hl7.org/fhir/4.0/StructureDefinition/Questionnaire"
        ],
        "tag": [
          {
            "code": "lformsVersion: 34.3.1"
          }
        ]
      },
      "item": [
        {
          "type": "decimal",
          "code": [
            {
              "code": "2710-2",
              "display": "SaO2 % BldC Oximetry"
            }
          ],
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
              "valueCoding": {
                "display": "%"
              }
            }
          ],
          "required": false,
          "linkId": "/2710-2",
          "text": "SaO2 % BldC Oximetry"
        },
        {
          "type": "quantity",
          "code": [
            {
              "code": "3141-9",
              "display": "Weight Measured"
            }
          ],
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-unitOption",
              "valueCoding": {
                "display": "lbs"
              }
            },
            {
              "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-unitOption",
              "valueCoding": {
                "display": "kgs"
              }
            }
          ],
          "required": false,
          "linkId": "/3141-9",
          "text": "Weight Measured",
          "initial": [
            {
              "valueQuantity": {
                "unit": "lbs"
              }
            }
          ]
        },
        {
          "type": "decimal",
          "code": [
            {
              "code": "8287-5",
              "display": "Head Circumf OFC by Tape measure"
            }
          ],
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
              "valueCoding": {
                "display": "cm"
              }
            }
          ],
          "required": false,
          "linkId": "/8287-5",
          "text": "Head Circumf OFC by Tape measure"
        },
        {
          "type": "quantity",
          "code": [
            {
              "code": "8302-2",
              "display": "Bdy height"
            }
          ],
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-unitOption",
              "valueCoding": {
                "display": "inches"
              }
            },
            {
              "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-unitOption",
              "valueCoding": {
                "display": "feet"
              }
            },
            {
              "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-unitOption",
              "valueCoding": {
                "display": "centimeters"
              }
            },
            {
              "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-unitOption",
              "valueCoding": {
                "display": "meters"
              }
            }
          ],
          "required": false,
          "linkId": "/8302-2",
          "text": "Bdy height",
          "initial": [
            {
              "valueQuantity": {
                "unit": "inches"
              }
            }
          ]
        },
        {
          "type": "decimal",
          "code": [
            {
              "code": "8310-5",
              "display": "Body temperature"
            }
          ],
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
              "valueCoding": {
                "display": "Cel"
              }
            }
          ],
          "required": false,
          "linkId": "/8310-5",
          "text": "Body temperature"
        },
        {
          "type": "decimal",
          "code": [
            {
              "code": "8462-4",
              "display": "BP dias"
            }
          ],
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
              "valueCoding": {
                "display": "mm[Hg]"
              }
            }
          ],
          "required": false,
          "linkId": "/8462-4",
          "text": "BP dias"
        },
        {
          "type": "decimal",
          "code": [
            {
              "code": "8480-6",
              "display": "BP sys"
            }
          ],
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
              "valueCoding": {
                "display": "mm[Hg]"
              }
            }
          ],
          "required": false,
          "linkId": "/8480-6",
          "text": "BP sys"
        },
        {
          "type": "decimal",
          "code": [
            {
              "code": "8867-4",
              "display": "Heart rate"
            }
          ],
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
              "valueCoding": {
                "display": "{beats}/min"
              }
            }
          ],
          "required": false,
          "linkId": "/8867-4",
          "text": "Heart rate"
        },
        {
          "type": "decimal",
          "code": [
            {
              "code": "9279-1",
              "display": "Resp rate"
            }
          ],
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
              "valueCoding": {
                "display": "{breaths}/min"
              }
            }
          ],
          "required": false,
          "linkId": "/9279-1",
          "text": "Resp rate"
        },
        {
          "type": "decimal",
          "code": [
            {
              "code": "3140-1",
              "display": "BSA Derived"
            }
          ],
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
              "valueCoding": {
                "display": "m2"
              }
            }
          ],
          "required": false,
          "linkId": "/3140-1",
          "text": "BSA Derived"
        },
        {
          "type": "decimal",
          "code": [
            {
              "code": "39156-5",
              "display": "BMI"
            }
          ],
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
              "valueCoding": {
                "display": "kg/m2"
              }
            }
          ],
          "required": false,
          "linkId": "/39156-5",
          "text": "BMI"
        }
      ]
    },
    {
      "code": [
        {
          "code": "55418-8",
          "display": "Weight and Height tracking panel"
        }
      ],
      "title": "Weight and Height tracking panel",
      "resourceType": "Questionnaire",
      "status": "draft",
      "meta": {
        "profile": [
          "http://hl7.org/fhir/4.0/StructureDefinition/Questionnaire"
        ],
        "tag": [
          {
            "code": "lformsVersion: 34.3.1"
          }
        ]
      },
      "item": [
        {
          "type": "decimal",
          "code": [
            {
              "code": "29463-7",
              "display": "Weight"
            }
          ],
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
              "valueCoding": {
                "display": "kg"
              }
            }
          ],
          "required": false,
          "linkId": "/29463-7",
          "text": "Weight"
        },
        {
          "type": "choice",
          "code": [
            {
              "code": "8352-7",
              "display": "Clothing worn during measure"
            }
          ],
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://hl7.org/fhir/questionnaire-item-control",
                    "code": "drop-down",
                    "display": "Drop down"
                  }
                ],
                "text": "Drop down"
              }
            }
          ],
          "required": false,
          "linkId": "/8352-7",
          "text": "Clothing worn during measure",
          "answerOption": [
            {
              "valueCoding": {
                "code": "LA11871-3",
                "display": "Underwear or less"
              }
            },
            {
              "valueCoding": {
                "code": "LA11872-1",
                "display": "Street clothes, no shoes"
              }
            },
            {
              "valueCoding": {
                "code": "LA11873-9",
                "display": "Street clothes & shoes"
              }
            }
          ]
        },
        {
          "type": "decimal",
          "code": [
            {
              "code": "8302-2",
              "display": "Body height"
            }
          ],
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
              "valueCoding": {
                "display": "[in_i]"
              }
            }
          ],
          "required": false,
          "linkId": "/8302-2",
          "text": "Body height"
        },
        {
          "type": "decimal",
          "code": [
            {
              "code": "39156-5",
              "display": "BMI"
            }
          ],
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
              "valueCoding": {
                "display": "kg/m2"
              }
            }
          ],
          "required": false,
          "linkId": "/39156-5",
          "text": "BMI"
        },
        {
          "type": "choice",
          "code": [
            {
              "code": "8361-8",
              "display": "Bdy position with respect to gravity"
            }
          ],
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://hl7.org/fhir/questionnaire-item-control",
                    "code": "drop-down",
                    "display": "Drop down"
                  }
                ],
                "text": "Drop down"
              }
            }
          ],
          "required": false,
          "linkId": "/8361-8",
          "text": "Bdy position with respect to gravity",
          "answerOption": [
            {
              "valueCoding": {
                "code": "LA11868-9",
                "display": "Sitting"
              }
            },
            {
              "valueCoding": {
                "code": "LA11869-7",
                "display": "Lying"
              }
            },
            {
              "valueCoding": {
                "code": "LA11870-5",
                "display": "Standing"
              }
            }
          ]
        }
      ]
    },
    {
      "code": [
        {
          "code": "phr",
          "display": "Personal Health Record"
        }
      ],
      "title": "Personal Health Record",
      "resourceType": "Questionnaire",
      "status": "draft",
      "meta": {
        "profile": [
          "http://hl7.org/fhir/4.0/StructureDefinition/Questionnaire"
        ],
        "tag": [
          {
            "code": "lformsVersion: 34.3.1"
          }
        ]
      },
      "item": [
        {
          "type": "group",
          "code": [
            {
              "code": "conditions",
              "display": "Medical Conditions",
              "system": "Custom"
            }
          ],
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://hl7.org/fhir/questionnaire-item-control",
                    "code": "gtable",
                    "display": "Group Table"
                  }
                ],
                "text": "Group Table"
              }
            }
          ],
          "required": false,
          "repeats": true,
          "linkId": "/conditions",
          "text": "Medical Conditions",
          "item": [
            {
              "type": "open-choice",
              "code": [
                {
                  "code": "condition",
                  "display": "Medical condition",
                  "system": "Custom"
                }
              ],
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  "valueCodeableConcept": {
                    "coding": [
                      {
                        "system": "http://hl7.org/fhir/questionnaire-item-control",
                        "code": "autocomplete",
                        "display": "Auto-complete"
                      }
                    ],
                    "text": "Auto-complete"
                  }
                },
                {
                  "url": "http://lhcforms.nlm.nih.gov/fhir/StructureDefinition/questionnaire-externallydefined",
                  "valueUri": "https://clinicaltables.nlm.nih.gov/api/conditions/v3/search"
                }
              ],
              "required": false,
              "linkId": "/conditions/condition",
              "text": "Medical condition"
            },
            {
              "type": "choice",
              "code": [
                {
                  "code": "cond_status",
                  "display": "Status",
                  "system": "Custom"
                }
              ],
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  "valueCodeableConcept": {
                    "coding": [
                      {
                        "system": "http://hl7.org/fhir/questionnaire-item-control",
                        "code": "drop-down",
                        "display": "Drop down"
                      }
                    ],
                    "text": "Drop down"
                  }
                }
              ],
              "required": false,
              "linkId": "/conditions/cond_status",
              "text": "Status",
              "answerOption": [
                {
                  "valueCoding": {
                    "code": "A",
                    "display": "Active"
                  }
                },
                {
                  "valueCoding": {
                    "code": "I",
                    "display": "Inactive"
                  }
                }
              ]
            },
            {
              "type": "date",
              "code": [
                {
                  "code": "cond_started",
                  "display": "Started",
                  "system": "Custom"
                }
              ],
              "required": false,
              "linkId": "/conditions/cond_started",
              "text": "Started"
            },
            {
              "type": "date",
              "code": [
                {
                  "code": "cond_stopped",
                  "display": "Stopped",
                  "system": "Custom"
                }
              ],
              "required": false,
              "linkId": "/conditions/cond_stopped",
              "text": "Stopped"
            },
            {
              "type": "text",
              "code": [
                {
                  "code": "cond_comment",
                  "display": "Description/Comment",
                  "system": "Custom"
                }
              ],
              "required": false,
              "linkId": "/conditions/cond_comment",
              "text": "Description/Comment"
            }
          ]
        },
        {
          "type": "group",
          "code": [
            {
              "code": "medications",
              "display": "Medications",
              "system": "Custom"
            }
          ],
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://hl7.org/fhir/questionnaire-item-control",
                    "code": "gtable",
                    "display": "Group Table"
                  }
                ],
                "text": "Group Table"
              }
            }
          ],
          "required": false,
          "repeats": true,
          "linkId": "/medications",
          "text": "Medications",
          "item": [
            {
              "type": "open-choice",
              "code": [
                {
                  "code": "med_name",
                  "display": "Medication name",
                  "system": "Custom"
                }
              ],
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  "valueCodeableConcept": {
                    "coding": [
                      {
                        "system": "http://hl7.org/fhir/questionnaire-item-control",
                        "code": "autocomplete",
                        "display": "Auto-complete"
                      }
                    ],
                    "text": "Auto-complete"
                  }
                },
                {
                  "url": "http://lhcforms.nlm.nih.gov/fhir/StructureDefinition/questionnaire-externallydefined",
                  "valueUri": "https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?ef=STRENGTHS_AND_FORMS,RXCUIS"
                }
              ],
              "required": false,
              "linkId": "/medications/med_name",
              "text": "Medication name"
            },
            {
              "type": "choice",
              "code": [
                {
                  "code": "med_status",
                  "display": "Status",
                  "system": "Custom"
                }
              ],
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  "valueCodeableConcept": {
                    "coding": [
                      {
                        "system": "http://hl7.org/fhir/questionnaire-item-control",
                        "code": "drop-down",
                        "display": "Drop down"
                      }
                    ],
                    "text": "Drop down"
                  }
                }
              ],
              "required": false,
              "linkId": "/medications/med_status",
              "text": "Status",
              "answerOption": [
                {
                  "valueCoding": {
                    "code": "A",
                    "display": "Active"
                  }
                },
                {
                  "valueCoding": {
                    "code": "S",
                    "display": "Stopped"
                  }
                }
              ]
            },
            {
              "type": "open-choice",
              "code": [
                {
                  "code": "med_strength",
                  "display": "Strength",
                  "system": "Custom"
                }
              ],
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  "valueCodeableConcept": {
                    "coding": [
                      {
                        "system": "http://hl7.org/fhir/questionnaire-item-control",
                        "code": "drop-down",
                        "display": "Drop down"
                      }
                    ],
                    "text": "Drop down"
                  }
                },
                {
                  "url": "http://lhcforms.nlm.nih.gov/fhirExt/dataControl",
                  "valueString": "[{\"source\":{\"sourceType\":\"INTERNAL\",\"sourceLinkId\":\"/medications/med_name\"},\"construction\":\"ARRAY\",\"dataFormat\":{\"code\":\"value.data.RXCUIS\",\"text\":\"value.data.STRENGTHS_AND_FORMS\"},\"onAttribute\":\"answers\"}]"
                }
              ],
              "required": false,
              "linkId": "/medications/med_strength",
              "text": "Strength",
              "answerOption": []
            },
            {
              "type": "text",
              "code": [
                {
                  "code": "med_instructions",
                  "display": "Instructions",
                  "system": "Custom"
                }
              ],
              "required": false,
              "linkId": "/medications/med_instructions",
              "text": "Instructions"
            },
            {
              "type": "date",
              "code": [
                {
                  "code": "med_started",
                  "display": "Started",
                  "system": "Custom"
                }
              ],
              "required": false,
              "linkId": "/medications/med_started",
              "text": "Started"
            },
            {
              "type": "date",
              "code": [
                {
                  "code": "med_stopped",
                  "display": "Stopped",
                  "system": "Custom"
                }
              ],
              "required": false,
              "linkId": "/medications/med_stopped",
              "text": "Stopped"
            },
            {
              "type": "open-choice",
              "code": [
                {
                  "code": "med_why_stopped",
                  "display": "Why stopped",
                  "system": "Custom"
                }
              ],
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  "valueCodeableConcept": {
                    "coding": [
                      {
                        "system": "http://hl7.org/fhir/questionnaire-item-control",
                        "code": "drop-down",
                        "display": "Drop down"
                      }
                    ],
                    "text": "Drop down"
                  }
                }
              ],
              "required": false,
              "linkId": "/medications/med_why_stopped",
              "text": "Why stopped",
              "answerOption": [
                {
                  "valueCoding": {
                    "code": "STP-1",
                    "display": "Finished the prescription"
                  }
                },
                {
                  "valueCoding": {
                    "code": "STP-2",
                    "display": "Dose change"
                  }
                },
                {
                  "valueCoding": {
                    "code": "STP-3",
                    "display": "Problem gone"
                  }
                },
                {
                  "valueCoding": {
                    "code": "STP-4",
                    "display": "Replaced by better drug"
                  }
                },
                {
                  "valueCoding": {
                    "code": "STP-5",
                    "display": "Could not tolerate side effects"
                  }
                },
                {
                  "valueCoding": {
                    "code": "STP-6",
                    "display": "Didn't work"
                  }
                },
                {
                  "valueCoding": {
                    "code": "STP-7",
                    "display": "Allergy"
                  }
                },
                {
                  "valueCoding": {
                    "code": "STP-8",
                    "display": "Too expensive"
                  }
                },
                {
                  "valueCoding": {
                    "code": "STP-9",
                    "display": "Not covered by insurance"
                  }
                },
                {
                  "valueCoding": {
                    "code": "STP-10",
                    "display": "I don't know"
                  }
                }
              ]
            },
            {
              "type": "date",
              "code": [
                {
                  "code": "med_resupply",
                  "display": "Resupply",
                  "system": "Custom"
                }
              ],
              "required": false,
              "linkId": "/medications/med_resupply",
              "text": "Resupply"
            }
          ]
        },
        {
          "type": "group",
          "code": [
            {
              "code": "allergies",
              "display": "Allergies and Other Dangerous Reactions",
              "system": "Custom"
            }
          ],
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://hl7.org/fhir/questionnaire-item-control",
                    "code": "gtable",
                    "display": "Group Table"
                  }
                ],
                "text": "Group Table"
              }
            }
          ],
          "required": false,
          "repeats": true,
          "linkId": "/allergies",
          "text": "Allergies and Other Dangerous Reactions",
          "item": [
            {
              "type": "open-choice",
              "code": [
                {
                  "code": "allergy_name",
                  "display": "Name",
                  "system": "Custom"
                }
              ],
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  "valueCodeableConcept": {
                    "coding": [
                      {
                        "system": "http://hl7.org/fhir/questionnaire-item-control",
                        "code": "drop-down",
                        "display": "Drop down"
                      }
                    ],
                    "text": "Drop down"
                  }
                }
              ],
              "required": false,
              "linkId": "/allergies/allergy_name",
              "text": "Name",
              "answerOption": [
                {
                  "valueCoding": {
                    "code": "food",
                    "display": "Food allergies"
                  }
                },
                {
                  "valueCoding": {
                    "code": "FOOD-2",
                    "display": "Chocolate"
                  }
                },
                {
                  "valueCoding": {
                    "code": "FOOD-22",
                    "display": "Crab"
                  }
                },
                {
                  "valueCoding": {
                    "code": "FOOD-4",
                    "display": "Egg"
                  }
                },
                {
                  "valueCoding": {
                    "code": "FOOD-5",
                    "display": "Fish"
                  }
                },
                {
                  "valueCoding": {
                    "code": "FOOD-7",
                    "display": "Gluten"
                  }
                },
                {
                  "valueCoding": {
                    "code": "FOOD-19",
                    "display": "Milk"
                  }
                },
                {
                  "valueCoding": {
                    "code": "FOOD-16",
                    "display": "Monosodium Glutamate (MSG)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "FOOD-9",
                    "display": "Peanut"
                  }
                },
                {
                  "valueCoding": {
                    "code": "FOOD-10",
                    "display": "Pork"
                  }
                },
                {
                  "valueCoding": {
                    "code": "FOOD-18",
                    "display": "Sesame"
                  }
                },
                {
                  "valueCoding": {
                    "code": "FOOD-12",
                    "display": "Shellfish"
                  }
                },
                {
                  "valueCoding": {
                    "code": "FOOD-21",
                    "display": "Shrimp"
                  }
                },
                {
                  "valueCoding": {
                    "code": "FOOD-13",
                    "display": "Soy"
                  }
                },
                {
                  "valueCoding": {
                    "code": "FOOD-14",
                    "display": "Tomatoes"
                  }
                },
                {
                  "valueCoding": {
                    "code": "FOOD-17",
                    "display": "Tree Nuts"
                  }
                },
                {
                  "valueCoding": {
                    "code": "FOOD-20",
                    "display": "Wheat"
                  }
                },
                {
                  "valueCoding": {
                    "code": "FOOD-23",
                    "display": "Cochineal extract (Carmine) red dye"
                  }
                },
                {
                  "valueCoding": {
                    "code": "FOOD-24",
                    "display": "FD&C Blue No. 1 dye"
                  }
                },
                {
                  "valueCoding": {
                    "code": "FOOD-25",
                    "display": "FD&C Yellow No. 2 dye"
                  }
                },
                {
                  "valueCoding": {
                    "code": "environmental",
                    "display": "Environmental allergies"
                  }
                },
                {
                  "valueCoding": {
                    "code": "OTHR-18",
                    "display": "Cat"
                  }
                },
                {
                  "valueCoding": {
                    "code": "OTHR-4",
                    "display": "Cockroach"
                  }
                },
                {
                  "valueCoding": {
                    "code": "OTHR-5",
                    "display": "Cold Weather"
                  }
                },
                {
                  "valueCoding": {
                    "code": "OTHR-17",
                    "display": "Dog"
                  }
                },
                {
                  "valueCoding": {
                    "code": "OTHR-6",
                    "display": "Dust Mites"
                  }
                },
                {
                  "valueCoding": {
                    "code": "OTHR-7",
                    "display": "Hay Fever"
                  }
                },
                {
                  "valueCoding": {
                    "code": "OTHR-1",
                    "display": "Iodinated x-ray contrast"
                  }
                },
                {
                  "valueCoding": {
                    "code": "OTHR-2",
                    "display": "Latex"
                  }
                },
                {
                  "valueCoding": {
                    "code": "OTHR-8",
                    "display": "Mold"
                  }
                },
                {
                  "valueCoding": {
                    "code": "OTHR-9",
                    "display": "Nickel"
                  }
                },
                {
                  "valueCoding": {
                    "code": "OTHR-10",
                    "display": "Pet Dander"
                  }
                },
                {
                  "valueCoding": {
                    "code": "OTHR-19",
                    "display": "Pollen"
                  }
                },
                {
                  "valueCoding": {
                    "code": "OTHR-11",
                    "display": "Ragweed"
                  }
                },
                {
                  "valueCoding": {
                    "code": "OTHR-12",
                    "display": "Semen"
                  }
                },
                {
                  "valueCoding": {
                    "code": "OTHR-13",
                    "display": "Sun"
                  }
                },
                {
                  "valueCoding": {
                    "code": "OTHR-3",
                    "display": "Wasp, hornet, bee sting"
                  }
                },
                {
                  "valueCoding": {
                    "code": "medClass",
                    "display": "Medication class allergies"
                  }
                },
                {
                  "valueCoding": {
                    "code": "DRUG-CLASS-1",
                    "display": "ACE Inhibitors"
                  }
                },
                {
                  "valueCoding": {
                    "code": "DRUG-CLASS-2",
                    "display": "Aminoglycosides"
                  }
                },
                {
                  "valueCoding": {
                    "code": "DRUG-CLASS-3",
                    "display": "Antihistamines"
                  }
                },
                {
                  "valueCoding": {
                    "code": "DRUG-CLASS-4",
                    "display": "Benzodiazepines"
                  }
                },
                {
                  "valueCoding": {
                    "code": "DRUG-CLASS-5",
                    "display": "Beta Blockers"
                  }
                },
                {
                  "valueCoding": {
                    "code": "DRUG-CLASS-6",
                    "display": "Calcium Channel Blockers"
                  }
                },
                {
                  "valueCoding": {
                    "code": "DRUG-CLASS-7",
                    "display": "Cephalosporins"
                  }
                },
                {
                  "valueCoding": {
                    "code": "DRUG-CLASS-8",
                    "display": "Diuretics"
                  }
                },
                {
                  "valueCoding": {
                    "code": "DRUG-CLASS-9",
                    "display": "H2 Blockers"
                  }
                },
                {
                  "valueCoding": {
                    "code": "DRUG-CLASS-10",
                    "display": "Insulins"
                  }
                },
                {
                  "valueCoding": {
                    "code": "DRUG-CLASS-11",
                    "display": "Iodine Containing Medications"
                  }
                },
                {
                  "valueCoding": {
                    "code": "DRUG-CLASS-12",
                    "display": "Local Anesthetics"
                  }
                },
                {
                  "valueCoding": {
                    "code": "DRUG-CLASS-13",
                    "display": "Macrolides (like Erythromycin)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "DRUG-CLASS-14",
                    "display": "Muscle Relaxants, Skeletal"
                  }
                },
                {
                  "valueCoding": {
                    "code": "DRUG-CLASS-15",
                    "display": "Narcotic Analgesics"
                  }
                },
                {
                  "valueCoding": {
                    "code": "DRUG-CLASS-16",
                    "display": "Nonsteroidal Anti Inflam. Agents (NSAID)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "DRUG-CLASS-24",
                    "display": "Penicillin and Derivatives"
                  }
                },
                {
                  "valueCoding": {
                    "code": "DRUG-CLASS-17",
                    "display": "Phenothiazines"
                  }
                },
                {
                  "valueCoding": {
                    "code": "DRUG-CLASS-18",
                    "display": "Proton Pump Inhibitors"
                  }
                },
                {
                  "valueCoding": {
                    "code": "DRUG-CLASS-19",
                    "display": "Quinolone Antibiotics"
                  }
                },
                {
                  "valueCoding": {
                    "code": "DRUG-CLASS-20",
                    "display": "Serotonin Re-Uptake Inhibitors"
                  }
                },
                {
                  "valueCoding": {
                    "code": "DRUG-CLASS-21",
                    "display": "Statins"
                  }
                },
                {
                  "valueCoding": {
                    "code": "DRUG-CLASS-22",
                    "display": "Sulfa Drugs"
                  }
                },
                {
                  "valueCoding": {
                    "code": "DRUG-CLASS-23",
                    "display": "Tetracycline"
                  }
                },
                {
                  "valueCoding": {
                    "code": "medication",
                    "display": "Medication allergies"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-57",
                    "display": "ALEVE (Naproxen)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-2",
                    "display": "AMBIEN (Zolpedem)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-97",
                    "display": "Amoxicillin"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-6",
                    "display": "Aspirin (ASA)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-7",
                    "display": "ATIVAN  (Lorazapam)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-8",
                    "display": "ATROVENT  (Ipartropium)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-55",
                    "display": "AVINZA (Morphine)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-9",
                    "display": "Bacitracin"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-10",
                    "display": "BACTRIM  (Sulfamethoxazol/trimethaprim)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-11",
                    "display": "BENADRYL  (Diphenhydramine )"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-13",
                    "display": "BUMEX  (Bumetanide)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-16",
                    "display": "CARDIZEM  (Diltizzam)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-99",
                    "display": "CEFZIL (Cefprozil)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-18",
                    "display": "CIPROFLOXACIN  (Cipro)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-19",
                    "display": "Codeine"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-20",
                    "display": "COLACE (Docusate Sodium)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-21",
                    "display": "COMPAZINE (Prochlorperazine Maleate)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-22",
                    "display": "COUMADIN (Warfarin)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-23",
                    "display": "DALMANE  (Flurazepam)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-52",
                    "display": "DEMEROL (Meperidine)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-88",
                    "display": "DEPAKOTE ER (Valproic Acid)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-26",
                    "display": "DILANTIN (Phenytoin)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-28",
                    "display": "DULCOLAX (Bisacodyl)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-29",
                    "display": "E-MYCIN (Erythromycin)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-30",
                    "display": "GASTROGRAFIN(Diatrizoate Meglumine)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-31",
                    "display": "GLUCOPHAGE (Metformin)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-32",
                    "display": "HALCION (Triazolam)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-33",
                    "display": "HALDOL (Haloperidol)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-35",
                    "display": "HUMALIN (human insulin)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-37",
                    "display": "IMDUR (Isosorbide)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-64",
                    "display": "ISONIAZID (Isoniazide)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-41",
                    "display": "KAYEVELATE (Sodium Polystyrene Sulfonate)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-42",
                    "display": "KLONOPIN (Clonazepam)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-43",
                    "display": "Lactose"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-44",
                    "display": "LASIX (Furosemide)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-45",
                    "display": "LEVAQUIN (Levofloxacin)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-46",
                    "display": "LIBRIUM (Chlordiazepoxide)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-47",
                    "display": "Lidocaine, Local"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-48",
                    "display": "LIPITOR (Atorvastatin)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-49",
                    "display": "LOPRESSOR (Metroprolol)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-50",
                    "display": "LOVENOX (Enoxaparin)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-51",
                    "display": "MELLARIL (Thioridazine)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-36",
                    "display": "MOTRIN/ADVIL (Ibuprofen)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-59",
                    "display": "NORVASC (Amlodipine)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-98",
                    "display": "OMNICEF (Cefdinir)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-96",
                    "display": "Penicillin"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-61",
                    "display": "PEPCID (Famotidine)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-62",
                    "display": "PERMITIL (Fluphenazine)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-65",
                    "display": "PLAVIX (Clopidogrel)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-67",
                    "display": "PREVACID (Lansoprazole)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-68",
                    "display": "PROLIXIN (Fluphenazine)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-70",
                    "display": "REGLAN (Metoclopramide)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-71",
                    "display": "RESTORIL (Temazepam)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-53",
                    "display": "ROBAXIN (Methocarbamol)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-72",
                    "display": "SENOKOT (Senna)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-73",
                    "display": "SERAX (Oxazepam)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-74",
                    "display": "SERENTIL (Mesoridazine)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-66",
                    "display": "SLOW-K (Potassium)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-75",
                    "display": "SOLU MEDROL (Methylprednisolone )"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-77",
                    "display": "STELAZINE (Trifluoperazine)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-79",
                    "display": "SYNTHROID (Thyroxin)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-15",
                    "display": "TEGRETOL (Carbamazepine)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-82",
                    "display": "THORAZINE (Chlorpromazine)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-83",
                    "display": "TOPROL (Metoprolol)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-84",
                    "display": "TRANXENE (Clorazepate)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-85",
                    "display": "TRILAFON (Perphenazie)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-86",
                    "display": "TYLENOL (Acetaminophen)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-25",
                    "display": "VALIUM (Diastat)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-87",
                    "display": "VALIUM (Diazepam)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-89",
                    "display": "VASOTEC (Enalapril)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-90",
                    "display": "VITAMIN K1 (Phytonadione)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-91",
                    "display": "XANAX (Alprazolam)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-92",
                    "display": "ZAROXOLYN (Metolazone)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-93",
                    "display": "ZOLOFT (Sertraline)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-94",
                    "display": "ZOSYN (Piperacillin/Tazobactam)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MED-95",
                    "display": "ZYPREXA (Olanzapine)"
                  }
                }
              ]
            },
            {
              "type": "open-choice",
              "code": [
                {
                  "code": "allergy_reaction",
                  "display": "Reaction",
                  "system": "Custom"
                }
              ],
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  "valueCodeableConcept": {
                    "coding": [
                      {
                        "system": "http://hl7.org/fhir/questionnaire-item-control",
                        "code": "drop-down",
                        "display": "Drop down"
                      }
                    ],
                    "text": "Drop down"
                  }
                }
              ],
              "required": false,
              "linkId": "/allergies/allergy_reaction",
              "text": "Reaction",
              "answerOption": [
                {
                  "valueCoding": {
                    "code": "AL-REACT-19",
                    "display": "Anaphylaxis"
                  }
                },
                {
                  "valueCoding": {
                    "code": "AL-REACT-1",
                    "display": "Stomach cramps and/or pain"
                  }
                },
                {
                  "valueCoding": {
                    "code": "AL-REACT-5",
                    "display": "Diarrhea and/or vomiting"
                  }
                },
                {
                  "valueCoding": {
                    "code": "AL-REACT-13",
                    "display": "Lip, tongue and/or throat swelling"
                  }
                },
                {
                  "valueCoding": {
                    "code": "AL-REACT-21",
                    "display": "Eye swelling, itching and/or watering"
                  }
                },
                {
                  "valueCoding": {
                    "code": "AL-REACT-4",
                    "display": "Coughing and/or wheezing"
                  }
                },
                {
                  "valueCoding": {
                    "code": "AL-REACT-6",
                    "display": "Trouble breathing"
                  }
                },
                {
                  "valueCoding": {
                    "code": "AL-REACT-15",
                    "display": "Sneezing or stuffy nose"
                  }
                },
                {
                  "valueCoding": {
                    "code": "AL-REACT-9",
                    "display": "Hives and/or itching"
                  }
                },
                {
                  "valueCoding": {
                    "code": "AL-REACT-20",
                    "display": "Eczema or other rash"
                  }
                },
                {
                  "valueCoding": {
                    "code": "AL-REACT-23",
                    "display": "Loss of consciousness"
                  }
                },
                {
                  "valueCoding": {
                    "code": "AL-REACT-11",
                    "display": "Confusion"
                  }
                },
                {
                  "valueCoding": {
                    "code": "AL-REACT-7",
                    "display": "Dizziness"
                  }
                },
                {
                  "valueCoding": {
                    "code": "AL-REACT-25",
                    "display": "Rapid pulse"
                  }
                },
                {
                  "valueCoding": {
                    "code": "AL-REACT-8",
                    "display": "Headache"
                  }
                }
              ]
            },
            {
              "type": "date",
              "code": [
                {
                  "code": "allergy_started",
                  "display": "Started",
                  "system": "Custom"
                }
              ],
              "required": false,
              "linkId": "/allergies/allergy_started",
              "text": "Started"
            },
            {
              "type": "text",
              "code": [
                {
                  "code": "allergy_comment",
                  "display": "Comment",
                  "system": "Custom"
                }
              ],
              "required": false,
              "linkId": "/allergies/allergy_comment",
              "text": "Comment"
            }
          ]
        },
        {
          "type": "group",
          "code": [
            {
              "code": "procedures",
              "display": "Major Surgeries and Implants"
            }
          ],
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://hl7.org/fhir/questionnaire-item-control",
                    "code": "gtable",
                    "display": "Group Table"
                  }
                ],
                "text": "Group Table"
              }
            }
          ],
          "required": false,
          "repeats": true,
          "linkId": "/procedures",
          "text": "Major Surgeries and Implants",
          "item": [
            {
              "type": "open-choice",
              "code": [
                {
                  "code": "procedure",
                  "display": "Surgery or Implant",
                  "system": "Custom"
                }
              ],
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  "valueCodeableConcept": {
                    "coding": [
                      {
                        "system": "http://hl7.org/fhir/questionnaire-item-control",
                        "code": "autocomplete",
                        "display": "Auto-complete"
                      }
                    ],
                    "text": "Auto-complete"
                  }
                },
                {
                  "url": "http://lhcforms.nlm.nih.gov/fhir/StructureDefinition/questionnaire-externallydefined",
                  "valueUri": "https://clinicaltables.nlm.nih.gov/api/procedures/v3/search"
                }
              ],
              "required": false,
              "linkId": "/procedures/procedure",
              "text": "Surgery or Implant"
            },
            {
              "type": "date",
              "code": [
                {
                  "code": "procedure_date",
                  "display": "When done",
                  "system": "Custom"
                }
              ],
              "required": false,
              "linkId": "/procedures/procedure_date",
              "text": "When done"
            },
            {
              "type": "text",
              "code": [
                {
                  "code": "procedure_comments",
                  "display": "Comments",
                  "system": "Custom"
                }
              ],
              "required": false,
              "linkId": "/procedures/procedure_comments",
              "text": "Comments"
            }
          ]
        },
        {
          "type": "group",
          "code": [
            {
              "code": "vaccinations",
              "display": "Vaccinations"
            }
          ],
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://hl7.org/fhir/questionnaire-item-control",
                    "code": "gtable",
                    "display": "Group Table"
                  }
                ],
                "text": "Group Table"
              }
            }
          ],
          "required": false,
          "repeats": true,
          "linkId": "/vaccinations",
          "text": "Vaccinations",
          "item": [
            {
              "type": "open-choice",
              "code": [
                {
                  "code": "vaccine_name",
                  "display": "Vaccine name",
                  "system": "Custom"
                }
              ],
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  "valueCodeableConcept": {
                    "coding": [
                      {
                        "system": "http://hl7.org/fhir/questionnaire-item-control",
                        "code": "drop-down",
                        "display": "Drop down"
                      }
                    ],
                    "text": "Drop down"
                  }
                }
              ],
              "required": false,
              "linkId": "/vaccinations/vaccine_name",
              "text": "Vaccine name",
              "answerOption": [
                {
                  "valueCoding": {
                    "code": "adolescentAdult",
                    "display": "Adolescent/Adult"
                  }
                },
                {
                  "valueCoding": {
                    "code": "118",
                    "display": "Cervarix (Human papilloma virus - bivalent)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "62",
                    "display": "Gardasil (Human papilloma virus - quadrivalent)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "114",
                    "display": "Meningococcal (MCV4)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "33",
                    "display": "Pneumococcal 23 (PPSV, pneumonia vaccine)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "115",
                    "display": "Tetanus/Diphtheria/Pertussis (Tdap)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "9",
                    "display": "Tetanus/Diphtheria (Td)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "121",
                    "display": "Zoster (Shingles)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "childhood",
                    "display": "Childhood"
                  }
                },
                {
                  "valueCoding": {
                    "code": "20",
                    "display": "Diphtheria/Tetanus/Pertussis (DTaP)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "17",
                    "display": "Haemophilus influenzae type b (Hib)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "85",
                    "display": "Hepatitis A (pediatric)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "45",
                    "display": "Hepatitis B"
                  }
                },
                {
                  "valueCoding": {
                    "code": "3",
                    "display": "Measles/Mumps/Rubella (MMR)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "94",
                    "display": "Measles/Mumps/Rubella-Varicella (MMRV)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "133",
                    "display": "Pneumococcal 13 (Prevnar13)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "33",
                    "display": "Pneumococcal 23 (for children at high risk)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "10",
                    "display": "Polio, injected (IPV)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "122",
                    "display": "Rotavirus"
                  }
                },
                {
                  "valueCoding": {
                    "code": "21",
                    "display": "Varicella (Chickenpox)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "50",
                    "display": "DTaP-Hib combination"
                  }
                },
                {
                  "valueCoding": {
                    "code": "130",
                    "display": "DTaP-IPV combination"
                  }
                },
                {
                  "valueCoding": {
                    "code": "110",
                    "display": "DTaP-IPV-Hep B combination"
                  }
                },
                {
                  "valueCoding": {
                    "code": "120",
                    "display": "DTaP-IPV-Hib combination"
                  }
                },
                {
                  "valueCoding": {
                    "code": "104",
                    "display": "Hepatitis A-Hepatitis B combination"
                  }
                },
                {
                  "valueCoding": {
                    "code": "51",
                    "display": "Hib-Hepatitis B combination"
                  }
                },
                {
                  "valueCoding": {
                    "code": "flu",
                    "display": "Influenza"
                  }
                },
                {
                  "valueCoding": {
                    "code": "141",
                    "display": "Influenza, injected (Flu)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "140",
                    "display": "Influenza, injected, preservative-free (Flu)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "111",
                    "display": "Influenza, intranasal (FluMist)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "135",
                    "display": "Influenza, high-dose (Flu, for people 65 and older)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "travel",
                    "display": "Travel"
                  }
                },
                {
                  "valueCoding": {
                    "code": "85",
                    "display": "Hepatitis A (adult)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "45",
                    "display": "Hepatitis B (adult)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "134",
                    "display": "Japanese encephalitis (Ixiaro, for people > 16 years old)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "41",
                    "display": "Typhoid, injected"
                  }
                },
                {
                  "valueCoding": {
                    "code": "25",
                    "display": "Typhoid, oral"
                  }
                },
                {
                  "valueCoding": {
                    "code": "18",
                    "display": "Rabies"
                  }
                },
                {
                  "valueCoding": {
                    "code": "37",
                    "display": "Yellow fever (YF)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "uncommon",
                    "display": "Not commonly used or not available in U.S."
                  }
                },
                {
                  "valueCoding": {
                    "code": "24",
                    "display": "Anthrax"
                  }
                },
                {
                  "valueCoding": {
                    "code": "28",
                    "display": "Diphtheria/Tetanus (DT)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "39",
                    "display": "Japanese encephalitis (JE-VAX, not available since May 2011)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "66",
                    "display": "Lyme disease"
                  }
                },
                {
                  "valueCoding": {
                    "code": "5",
                    "display": "Measles"
                  }
                },
                {
                  "valueCoding": {
                    "code": "7",
                    "display": "Mumps"
                  }
                },
                {
                  "valueCoding": {
                    "code": "100",
                    "display": "Pneumococcal 7 (replaced by Pneumococcal 13 in 2010)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "2",
                    "display": "Polio, oral (OPV)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "6",
                    "display": "Rubella"
                  }
                },
                {
                  "valueCoding": {
                    "code": "35",
                    "display": "Tetanus (TT)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "19",
                    "display": "Tuberculosis (BCG)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "75",
                    "display": "Vaccinia (smallpox)"
                  }
                }
              ]
            },
            {
              "type": "date",
              "code": [
                {
                  "code": "vaccine_date",
                  "display": "Date",
                  "system": "Custom"
                }
              ],
              "required": false,
              "linkId": "/vaccinations/vaccine_date",
              "text": "Date"
            },
            {
              "type": "date",
              "code": [
                {
                  "code": "vaccine_next",
                  "display": "Next due",
                  "system": "Custom"
                }
              ],
              "required": false,
              "linkId": "/vaccinations/vaccine_next",
              "text": "Next due"
            },
            {
              "type": "text",
              "code": [
                {
                  "code": "vaccine_comment",
                  "display": "Comment",
                  "system": "Custom"
                }
              ],
              "required": false,
              "linkId": "/vaccinations/vaccine_comment",
              "text": "Comment"
            }
          ]
        },
        {
          "type": "group",
          "code": [
            {
              "code": "contacts",
              "display": "Medical Contacts"
            }
          ],
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://hl7.org/fhir/questionnaire-item-control",
                    "code": "gtable",
                    "display": "Group Table"
                  }
                ],
                "text": "Group Table"
              }
            }
          ],
          "required": false,
          "repeats": true,
          "linkId": "/contacts",
          "text": "Medical Contacts",
          "item": [
            {
              "type": "string",
              "code": [
                {
                  "code": "contact_name",
                  "display": "Name",
                  "system": "Custom"
                }
              ],
              "required": false,
              "linkId": "/contacts/contact_name",
              "text": "Name"
            },
            {
              "type": "open-choice",
              "code": [
                {
                  "code": "contact_type",
                  "display": "Type",
                  "system": "Custom"
                }
              ],
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  "valueCodeableConcept": {
                    "coding": [
                      {
                        "system": "http://hl7.org/fhir/questionnaire-item-control",
                        "code": "drop-down",
                        "display": "Drop down"
                      }
                    ],
                    "text": "Drop down"
                  }
                }
              ],
              "required": false,
              "linkId": "/contacts/contact_type",
              "text": "Type",
              "answerOption": [
                {
                  "valueCoding": {
                    "code": "ALLE",
                    "display": "Allergist"
                  }
                },
                {
                  "valueCoding": {
                    "code": "CARD",
                    "display": "Cardiologist"
                  }
                },
                {
                  "valueCoding": {
                    "code": "CLIN",
                    "display": "Clinical psychologist"
                  }
                },
                {
                  "valueCoding": {
                    "code": "DENT",
                    "display": "Dentist"
                  }
                },
                {
                  "valueCoding": {
                    "code": "DERM",
                    "display": "Dermatologist"
                  }
                },
                {
                  "valueCoding": {
                    "code": "EAR",
                    "display": "ENT"
                  }
                },
                {
                  "valueCoding": {
                    "code": "FP",
                    "display": "Family practitioner"
                  }
                },
                {
                  "valueCoding": {
                    "code": "GI",
                    "display": "Gastroenterologist"
                  }
                },
                {
                  "valueCoding": {
                    "code": "HEME",
                    "display": "Hematologist"
                  }
                },
                {
                  "valueCoding": {
                    "code": "HOSP",
                    "display": "Hospital"
                  }
                },
                {
                  "valueCoding": {
                    "code": "IMM",
                    "display": "Immunologist"
                  }
                },
                {
                  "valueCoding": {
                    "code": "INTE",
                    "display": "Internist"
                  }
                },
                {
                  "valueCoding": {
                    "code": "MEDI",
                    "display": "Medical equipment supplier"
                  }
                },
                {
                  "valueCoding": {
                    "code": "NEPH",
                    "display": "Nephrologist"
                  }
                },
                {
                  "valueCoding": {
                    "code": "NEUR",
                    "display": "Neurologist"
                  }
                },
                {
                  "valueCoding": {
                    "code": "NURS",
                    "display": "Nurse"
                  }
                },
                {
                  "valueCoding": {
                    "code": "NURSP",
                    "display": "Nurse practitioner"
                  }
                },
                {
                  "valueCoding": {
                    "code": "NURSH",
                    "display": "Nursing Home"
                  }
                },
                {
                  "valueCoding": {
                    "code": "OBGY",
                    "display": "Obstetrician/Gynecologist"
                  }
                },
                {
                  "valueCoding": {
                    "code": "OT",
                    "display": "Occupational therapist"
                  }
                },
                {
                  "valueCoding": {
                    "code": "ONC",
                    "display": "Oncologist"
                  }
                },
                {
                  "valueCoding": {
                    "code": "OPHT",
                    "display": "Ophthalmologist"
                  }
                },
                {
                  "valueCoding": {
                    "code": "OPTO",
                    "display": "Optometrist"
                  }
                },
                {
                  "valueCoding": {
                    "code": "ODO",
                    "display": "Orthodontist"
                  }
                },
                {
                  "valueCoding": {
                    "code": "ORTH",
                    "display": "Orthopedist"
                  }
                },
                {
                  "valueCoding": {
                    "code": "PEDI",
                    "display": "Pediatrician"
                  }
                },
                {
                  "valueCoding": {
                    "code": "PHAR",
                    "display": "Pharmacy"
                  }
                },
                {
                  "valueCoding": {
                    "code": "PHMO",
                    "display": "Pharmacy - mail order"
                  }
                },
                {
                  "valueCoding": {
                    "code": "PHAR24",
                    "display": "Pharmacy- 24 hour"
                  }
                },
                {
                  "valueCoding": {
                    "code": "PMR",
                    "display": "Physical medicine and rehabilitation (PM&R)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "PT",
                    "display": "Physical therapist"
                  }
                },
                {
                  "valueCoding": {
                    "code": "PLS",
                    "display": "Plastic surgeon"
                  }
                },
                {
                  "valueCoding": {
                    "code": "POD",
                    "display": "Podiatrist"
                  }
                },
                {
                  "valueCoding": {
                    "code": "PRIM",
                    "display": "Primary care physician"
                  }
                },
                {
                  "valueCoding": {
                    "code": "PSYC",
                    "display": "Psychiatrist"
                  }
                },
                {
                  "valueCoding": {
                    "code": "PULM",
                    "display": "Pulmonologist"
                  }
                },
                {
                  "valueCoding": {
                    "code": "RHEU",
                    "display": "Rheumatologist"
                  }
                },
                {
                  "valueCoding": {
                    "code": "SOCI",
                    "display": "Social worker"
                  }
                },
                {
                  "valueCoding": {
                    "code": "SLT",
                    "display": "Speech and language therapist"
                  }
                },
                {
                  "valueCoding": {
                    "code": "SURG",
                    "display": "Surgeon"
                  }
                },
                {
                  "valueCoding": {
                    "code": "URGE",
                    "display": "Urgent care facility"
                  }
                },
                {
                  "valueCoding": {
                    "code": "UROL",
                    "display": "Urologist"
                  }
                }
              ]
            },
            {
              "type": "string",
              "code": [
                {
                  "code": "contact_phone",
                  "display": "Telephone",
                  "system": "Custom"
                }
              ],
              "required": false,
              "linkId": "/contacts/contact_phone",
              "text": "Telephone"
            },
            {
              "type": "string",
              "code": [
                {
                  "code": "contact_fax",
                  "display": "Fax",
                  "system": "Custom"
                }
              ],
              "required": false,
              "linkId": "/contacts/contact_fax",
              "text": "Fax"
            },
            {
              "type": "string",
              "code": [
                {
                  "code": "contact_email",
                  "display": "Email",
                  "system": "Custom"
                }
              ],
              "required": false,
              "linkId": "/contacts/contact_email",
              "text": "Email"
            },
            {
              "type": "date",
              "code": [
                {
                  "code": "contact_appt",
                  "display": "Next appt.",
                  "system": "Custom"
                }
              ],
              "required": false,
              "linkId": "/contacts/contact_appt",
              "text": "Next appt."
            },
            {
              "type": "time",
              "code": [
                {
                  "code": "contact_appt_time",
                  "display": "Appt. time",
                  "system": "Custom"
                }
              ],
              "required": false,
              "linkId": "/contacts/contact_appt_time",
              "text": "Appt. time"
            },
            {
              "type": "text",
              "code": [
                {
                  "code": "contact_comment",
                  "display": "Comment",
                  "system": "Custom"
                }
              ],
              "required": false,
              "linkId": "/contacts/contact_comment",
              "text": "Comment"
            }
          ]
        },
        {
          "type": "group",
          "code": [
            {
              "code": "questions",
              "display": "Questions to Ask Your Doctor"
            }
          ],
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://hl7.org/fhir/questionnaire-item-control",
                    "code": "gtable",
                    "display": "Group Table"
                  }
                ],
                "text": "Group Table"
              }
            }
          ],
          "required": false,
          "repeats": true,
          "linkId": "/questions",
          "text": "Questions to Ask Your Doctor",
          "item": [
            {
              "type": "date",
              "code": [
                {
                  "code": "question_date",
                  "display": "Date entered",
                  "system": "Custom"
                }
              ],
              "required": false,
              "linkId": "/questions/question_date",
              "text": "Date entered"
            },
            {
              "type": "open-choice",
              "code": [
                {
                  "code": "question_category",
                  "display": "Category",
                  "system": "Custom"
                }
              ],
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  "valueCodeableConcept": {
                    "coding": [
                      {
                        "system": "http://hl7.org/fhir/questionnaire-item-control",
                        "code": "drop-down",
                        "display": "Drop down"
                      }
                    ],
                    "text": "Drop down"
                  }
                }
              ],
              "required": false,
              "linkId": "/questions/question_category",
              "text": "Category",
              "answerOption": [
                {
                  "valueCoding": {
                    "code": "QUE-13",
                    "display": "Allergies"
                  }
                },
                {
                  "valueCoding": {
                    "code": "QUE-21",
                    "display": "Disease risk based on family history"
                  }
                },
                {
                  "valueCoding": {
                    "code": "QUE-7",
                    "display": "Exercise"
                  }
                },
                {
                  "valueCoding": {
                    "code": "QUE-0",
                    "display": "General symptoms"
                  }
                },
                {
                  "valueCoding": {
                    "code": "QUE-20",
                    "display": "Genetic testing"
                  }
                },
                {
                  "valueCoding": {
                    "code": "QUE-8",
                    "display": "Herbal or alternative remedies"
                  }
                },
                {
                  "valueCoding": {
                    "code": "QUE-16",
                    "display": "Infant or child development"
                  }
                },
                {
                  "valueCoding": {
                    "code": "QUE-15",
                    "display": "Insurance"
                  }
                },
                {
                  "valueCoding": {
                    "code": "QUE-11",
                    "display": "Lab tests and/or results"
                  }
                },
                {
                  "valueCoding": {
                    "code": "QUE-5",
                    "display": "Medical conditions"
                  }
                },
                {
                  "valueCoding": {
                    "code": "QUE-4",
                    "display": "Medical equipment and/or supplies"
                  }
                },
                {
                  "valueCoding": {
                    "code": "QUE-3",
                    "display": "Medications"
                  }
                },
                {
                  "valueCoding": {
                    "code": "QUE-6",
                    "display": "Nutrition"
                  }
                },
                {
                  "valueCoding": {
                    "code": "QUE-12",
                    "display": "Preventive/screening tests"
                  }
                },
                {
                  "valueCoding": {
                    "code": "QUE-14",
                    "display": "Referrals"
                  }
                },
                {
                  "valueCoding": {
                    "code": "QUE-17",
                    "display": "School or learning issues"
                  }
                },
                {
                  "valueCoding": {
                    "code": "QUE-18",
                    "display": "Sports injuries"
                  }
                },
                {
                  "valueCoding": {
                    "code": "QUE-2",
                    "display": "Surgeries"
                  }
                },
                {
                  "valueCoding": {
                    "code": "QUE-9",
                    "display": "Travel advice"
                  }
                },
                {
                  "valueCoding": {
                    "code": "QUE-10",
                    "display": "Vaccines"
                  }
                },
                {
                  "valueCoding": {
                    "code": "QUE-19",
                    "display": "X-ray or other radiology tests and/or results"
                  }
                }
              ]
            },
            {
              "type": "choice",
              "code": [
                {
                  "code": "question_status",
                  "display": "Status",
                  "system": "Custom"
                }
              ],
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  "valueCodeableConcept": {
                    "coding": [
                      {
                        "system": "http://hl7.org/fhir/questionnaire-item-control",
                        "code": "drop-down",
                        "display": "Drop down"
                      }
                    ],
                    "text": "Drop down"
                  }
                }
              ],
              "required": false,
              "linkId": "/questions/question_status",
              "text": "Status",
              "answerOption": [
                {
                  "valueCoding": {
                    "code": "asked",
                    "display": "Asked"
                  }
                },
                {
                  "valueCoding": {
                    "code": "not_asked",
                    "display": "Not Asked"
                  }
                }
              ]
            },
            {
              "type": "text",
              "code": [
                {
                  "code": "question_text",
                  "display": "Question",
                  "system": "Custom"
                }
              ],
              "required": false,
              "linkId": "/questions/question_text",
              "text": "Question"
            },
            {
              "type": "text",
              "code": [
                {
                  "code": "question_answer",
                  "display": "Answer",
                  "system": "Custom"
                }
              ],
              "required": false,
              "linkId": "/questions/question_answer",
              "text": "Answer"
            }
          ]
        },
        {
          "type": "group",
          "code": [
            {
              "code": "notes",
              "display": "Notes"
            }
          ],
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://hl7.org/fhir/questionnaire-item-control",
                    "code": "gtable",
                    "display": "Group Table"
                  }
                ],
                "text": "Group Table"
              }
            }
          ],
          "required": false,
          "repeats": true,
          "linkId": "/notes",
          "text": "Notes",
          "item": [
            {
              "type": "date",
              "code": [
                {
                  "code": "note_date",
                  "display": "Date",
                  "system": "Custom"
                }
              ],
              "required": false,
              "linkId": "/notes/note_date",
              "text": "Date"
            },
            {
              "type": "text",
              "code": [
                {
                  "code": "note_text",
                  "display": "Note",
                  "system": "Custom"
                }
              ],
              "required": false,
              "linkId": "/notes/note_text",
              "text": "Note"
            }
          ]
        },
        {
          "type": "display",
          "linkId": "/note_text",
          "text": "Test Results & Trackers",
          "item": [
            {
              "text": "To add add tests results and trackers, open <a href='/' target=_blank>a new window</a> and then use the \"Search LOINC Panels\" tab on the left to select a new form.  Each form will be saved in its own file.",
              "type": "display",
              "linkId": "/note_text-help",
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  "valueCodeableConcept": {
                    "text": "Help-Button",
                    "coding": [
                      {
                        "code": "help",
                        "display": "Help-Button",
                        "system": "http://hl7.org/fhir/questionnaire-item-control"
                      }
                    ]
                  }
                }
              ],
              "_text": {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/rendering-xhtml",
                    "valueString": "To add add tests results and trackers, open <a href='/' target=_blank>a new window</a> and then use the \"Search LOINC Panels\" tab on the left to select a new form.  Each form will be saved in its own file."
                  }
                ]
              }
            }
          ]
        }
      ]
    }
  ]

  return (
    <div>
        { listaFormularios.map((form, index) => (
              <div>
                <h1>{form.title}</h1>
                <QuestionnaireComponent formId={index} formDef={form}></QuestionnaireComponent>
              </div>
            ))
        }
    </div>
  );
};

export default NewPage;