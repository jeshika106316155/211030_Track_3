//----------------------------------------------------------
      //for : Post body weight vital sign measurement for track-2
      function Submit_Measurement(form){
        var thisform = document.getElementById(form.id);
	      var elements = thisform.elements;
        if(elements[3].value=="" || elements[4].value==""){
          alert("Please fill the required field!");
          return;
        }

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
        if(Action=="Create"){
          HTTPPostData(FHIRrootURL+"/MedicationRequest", JSON.stringify(MedicationRequest_Track_3));
        }
        else if(Action=="Update"){
          HTTPPutData(FHIRrootURL+"/MedicationRequest/"+ResourceId, JSON.stringify(MedicationRequest_Track_3),manageResponseRet,1);
        }
        EmptyForm(thisform);
      }
      //----------------------------------------------------------