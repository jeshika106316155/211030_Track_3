//----------------------------------------------------------
      //for : Post body weight vital sign measurement for track-2
      function Submit_Measurement(form){
        var thisform = document.getElementById(form.id);
	      var elements = thisform.elements;
        var resource;

        if(CheckFill(elements)==1){
          alert("Please fill all field!");
          return;
        }
        switch(form.id){
          case "MedicationRequest":
            MedicationRequest_Track_3.category[0].coding[0].code=elements[0].selectedOptions[0].value;
            MedicationRequest_Track_3.category[0].coding[0].display=elements[0].selectedOptions[0].text;
            MedicationRequest_Track_3.medicationCodeableConcept.coding[0].display=elements[1].value;
            MedicationRequest_Track_3.medicationCodeableConcept.coding[0].code=elements[2].value;
            MedicationRequest_Track_3.subject.reference="Patient/"+elements[3].value;
            MedicationRequest_Track_3.authoredOn=elements[4].value;
            MedicationRequest_Track_3.requester.reference="Practitioner/"+Practitioner_Id;
            MedicationRequest_Track_3.dosageInstruction[0].timing.code.coding[0].code=elements[5].selectedOptions[0].value;
            MedicationRequest_Track_3.dosageInstruction[0].timing.code.coding[0].display=elements[5].selectedOptions[0].text;
            MedicationRequest_Track_3.dosageInstruction[0].route.coding[0].display=elements[6].value;
            MedicationRequest_Track_3.dosageInstruction[0].route.coding[0].code=elements[7].value;
            MedicationRequest_Track_3.dosageInstruction[0].method.coding[0].display=elements[6].value;
            MedicationRequest_Track_3.dosageInstruction[0].method.coding[0].code=elements[7].value;
            MedicationRequest_Track_3.dispenseRequest.validityPeriod.start=elements[8].value;
            MedicationRequest_Track_3.dispenseRequest.validityPeriod.end=elements[9].value;
            MedicationRequest_Track_3.dispenseRequest.quantity.value=elements[10].value;
            MedicationRequest_Track_3.dispenseRequest.quantity.unit=elements[11].value;
            MedicationRequest_Track_3.dispenseRequest.quantity.code=elements[11].value;
            MedicationRequest_Track_3.dispenseRequest.expectedSupplyDuration.value=elements[12].value;
            resource = MedicationRequest_Track_3;
            break;
          case "MedicationAdministration":
            MedicationAdministration_Track_3.performer[0].actor.reference = "Practitioner/"+elements[0].value;
            MedicationAdministration_Track_3.medicationReference.reference = "Medication/"+elements[1].value;
            MedicationAdministration_Track_3.subject.reference = "Patient/"+elements[2].value;
            MedicationAdministration_Track_3.effectivePeriod.start = elements[3].value;
            MedicationAdministration_Track_3.effectivePeriod.end = elements[4].value;
            MedicationAdministration_Track_3.request.reference = "MedicationRequest/"+elements[5].value;
            MedicationAdministration_Track_3.dosage.route.coding[0].code = elements[6].value;
            MedicationAdministration_Track_3.dosage.route.coding[0].display = elements[7].value;
            MedicationAdministration_Track_3.dosage.method.coding[0].code = elements[6].value;
            MedicationAdministration_Track_3.dosage.method.coding[0].display = elements[7].value;
            MedicationAdministration_Track_3.dosage.dose.value = elements[8].value;
            MedicationAdministration_Track_3.dosage.unit = elements[9].value;
            MedicationAdministration_Track_3.dosage.code = elements[9].value;
            resource = MedicationAdministration_Track_3;
            break;
        }
        
        if(Action=="Create"){
          HTTPPostData(FHIRrootURL+"/"+form.id, JSON.stringify(resource));
        }
        else if(Action=="Update"){
          HTTPPutData(FHIRrootURL+"/"+form.id+"/"+ResourceId, JSON.stringify(resource),manageResponseRet,1);
        }
        EmptyForm(thisform);
      }
      //----------------------------------------------------------
      //----------------------------------------------------------
      //for: Check wether all the input already filled
      function CheckFill(elements){
        for(var i=0;i<elements.length;i++){
          if(elements[i].value==""){
            return 1;
          }
        }
        return 0;
      }
      //----------------------------------------------------------