//Fhir Observation JSON 用於存生理監測 
var category_coding = [
    {
        "code": "vital-signs",
        "display": "Vital Signs"
    },
    {
        "code": "laboratory",
        "display": "Laboratory"
    }
]
//Fhir Observation JSON 用於存生理監測 
var coding_code = [
    {
        "code": "29463-7",
        "display": "Body weights",
        "unit" : "kg"
    },
    {
        "code": "8310-5",
        "display": "Body temperature",
        "unit" : "Cel"
    },
    {
        "code": "88365-2",
        "display": "Glucose pre-meal (Bld) [Mass/Vol]",
        "unit" : "mg/dL"
    }
]
//Fhir Patient JSON 紀錄做生理監測的病人 
var Patient_Track_2={
    "resourceType": "Patient",
    "id": "MITWTrack2P1",
    "identifier": [
      {
        "system": "passport",
        "value": "31195855"
      }
    ],
    "name": [
      {
        "family" : "MITW21",
        "given" :["TRACK2_P1"],
        "text": "MITW21_TRACK2_P1"
      }
    ],
    "active" : "true",
    "gender" : "male",
    "birthDate" : "2020-05-27",
    "managingOrganization": {
      "reference": "Organization/MITW.ForPHR"
    },
    "telecom": [
      {
        "system": "email",
        "value": "tcu@tcu.edu.tw"
      },
      {
        "system": "phone",
        "value": "0958000111"
      }
    ],
    "address": [
      {
        "use": "home",
        "text": "花蓮縣花蓮市中央路三段701號",
        "city": "花蓮縣",
        "postalCode": "97004",
        "country": "台灣"
      }
    ],
    "contact": [
      {
      "relationship": [
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0131",
              "code": "N"
            }
          ]
        }
      ],
      "name": {
        "family": "du Marché",
        "_family": {
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix",
              "valueString": "VV"
            }
          ]
        },
        "given": ["Bénédicte"]
      },
      "telecom": [
        {
          "system": "phone",
          "value": "+33 (237) 998327"
        }
      ],
      "address": {
        "use": "home",
        "type": "both",
        "line": [
          "534 Erewhon St"
        ],
        "city": "PleasantVille",
        "district": "Rainbow",
        "state": "Vic",
        "postalCode": "3999",
        "period": {
          "start": "1974-12-25"
        }
      },
      "gender": "female",
      "period": {
        "start": "2012"
      }
    }
  ]
  }
//Fhir Observation JSON 用於存生理監測 
var Observation_Track_2 = {
    "resourceType": "Observation",
    "status": "preliminary",
    "category": [
      {
        "coding": [
          {
            "system": "https://www.hl7.org/fhir/codesystem-observation-category.html",
            "code": "",
            "display": ""
          }
        ]
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http ://loinc.org",
          "code": "",
          "display": ""
        }
      ]
    },
    "subject": {
      "reference": ""
    },
    "effectiveDateTime" :"",
    "valueQuantity" : {
      "value" : 0,
      "unit" : "",
      "system" : "https://www.hl7.org/fhir/valueset-ucum-units.html",
      "code" : ""
    }
  }
//TRACK-3S
  //Fhir Medication Request JSON 用於存藥計畫
  var MedicationRequest_Track_3 = {
    "resourceType": "MedicationRequest",
    "status": "active",
    "intent": "order",
    "category":[
      {
        "coding": [
          {
          "system": "https://www.hl7.org/fhir/valueset-medicationrequest-category.html",
          "code": "outpatient",
          "display": "outpatient"
          }
        ]
      }
    ],
    "medicationCodeableConcept":{
      "coding": [
        {
        "system": "https://www.nhi.gov.tw/QueryN/Query1.aspx",
        "code": "AC363491G0",
        "display": "211 Metformin 500g"
        }
      ]
    },
    "subject": {
      "reference": "Patient/134"
    },
    "authoredOn": "",
    "requester":{
      "reference": ""
    },
    "dosageInstruction":[
      {
        "sequence":1,
        "text":"臨床病口服藥物",
        "timing":{
          "code":{
            "coding": [
              {
              "system": "https://www.hl7.org/fhir/valueset-timing-abbreviation.html",
              "code": "QD",
              "display": "每天一次"
              }
            ]
          }
        },
        "route":{
          "coding": [
            {
            "system": "http://mtrsoftware.com.tw/Page_L/%E7%94%A8%E6%B3%95%E8%A1%A8.htm",
            "code": "PO",
            "display": "口服"
            }
          ]
        },
        "method":{
          "coding": [
            {
            "system": "http://mtrsoftware.com.tw/Page_L/%E7%94%A8%E6%B3%95%E8%A1%A8.htm",
            "code": "PO",
            "display": "口服"
            }
          ]
        }
      }
    ],
    "dispenseRequest":{
      "validityPeriod":{
        "start": "",
        "end":""
      },
      "numberOfRepeatsAllowed":1,
      "quantity":{
        "value": 7,
        "unit": "TAB",
        "system": "https://terminology.hl7.org/2.1.0/CodeSystem-v3-orderableDrugForm.html",
        "code": "TAB"
      },
      "expectedSupplyDuration":{
        "value": 7,
        "unit": "days",
        "system": "https://www.hl7.org/fhir/valueset-ucum-units.html",
        "code": "d"
      }
    }
  }
  //Fhir Practitioner JSON 用於存醫護人員資料
  var Practitioner_Track_3 = {
    "resourceType": "Practitioner",
    "id": "MITWTrack3Pr1"
  }
  var MedicationAdministration_Track_3= {
    "resourceType": "MedicationAdministration",
    "status": "completed",
    "medicationReference": {
      "reference": "Medication/B024131100"
    },
    "subject": {
      "reference": "Patient/a036208d-b52c-4566-b3e1-73f8539a7204"
    },
    "effectivePeriod": {
      "start": "2020-11-05",
      "end": "2020-11-05"
    },
    "request": {
      "reference": "MedicationRequest/3522"
    },
    "dosage": {
      "text": "已吃一顆",
      "route": {
        "coding": [
          {
            "system": "http: //mtrsoftware.com.tw/Page_L/用法表.htm",
            "code": "PO",
            "display": "PO"
          }
        ]
      },
      "method": {
        "coding": [
          {
            "system": "http://mtrsoftware.com.tw/Page_L/用法表.htm",
            "code": "PO",
            "display": "PO"
          }
        ]
      },
      "dose": {
        "value": 1,
        "unit": "TAB",
        "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
        "code": "TAB"
      }
    }
  }
  var Medication_Track_3 = {
  "resourceType": "Medication",
  "id": "MITWTrack3Medication1",
  "code": {
    "coding": [
      {
        "system": "https://www1.nhi.gov.tw/QueryN/Query1.aspx",
        "code": "BC26968100",
        "display": "Tagrisso F.C.Tab -80mg"
      }
    ],
    "text": "泰格莎膜衣錠80毫克"
  }
}