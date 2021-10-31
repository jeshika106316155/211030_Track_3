var ret;
//取得網路上的資源
function HTTPGetData(urlStr, callBack, count) {
    var HttpObj = new XMLHttpRequest();
    HttpObj.open("GET", urlStr, true);
    HttpObj.setRequestHeader("authorization", FHIRtoken);
    HttpObj.setRequestHeader("Authorization", 'Bearer 87944918-1f86-418e-8418-398e2e4ddee6');
    HttpObj.onreadystatechange = function () {
        if (HttpObj.readyState === 4) {
            ret = HttpObj.responseText;
            //   alert(ret);
            callBack(JSON.parse(ret),count);
            alert(ret);
        }
    }
    HttpObj.send();
}

//上傳 dataStr 到網路上
function HTTPPostData(urlStr, dataStr) {
    var HttpObj = new XMLHttpRequest();
    HttpObj.open("POST", urlStr, true);
    HttpObj.setRequestHeader("authorization", FHIRtoken);
    HttpObj.setRequestHeader("Content-type", "application/json+fhir");
    //HttpObj.setRequestHeader("Content-type", "application/xml+fhir");
    HttpObj.onreadystatechange = function () {
        if (HttpObj.readyState === 4) {
            ret = HttpObj.responseText;
            alert("Upload Success!");
            //document.getElementById("TextArea1").value = ret;
            alert(ret);
        }
    }
    HttpObj.send(dataStr);
}

function HTTPPutData(urlStr, dataStr,callBack,count) {
    var HttpObj = new XMLHttpRequest();
    HttpObj.open("PUT", urlStr, true);
    HttpObj.setRequestHeader("authorization", FHIRtoken);
    HttpObj.setRequestHeader("Content-type", "application/json+fhir");
    //HttpObj.setRequestHeader("Content-type", "application/xml+fhir");
    HttpObj.onreadystatechange = function () {
        if (HttpObj.readyState === 4) {
            ret = HttpObj.responseText;
            //alert("Data put successfully!");
            //alert(ret);
            callBack(JSON.parse(ret),count);
        }
    }
    HttpObj.send(dataStr);
}

function HTTPDeleteData(urlStr) {
    var HttpObj = new XMLHttpRequest();
    HttpObj.open("DELETE", urlStr, true);
    HttpObj.setRequestHeader("authorization", FHIRtoken);
    HttpObj.setRequestHeader("Content-type", "application/json+fhir");
    //HttpObj.setRequestHeader("Content-type", "application/xml+fhir");
    HttpObj.onreadystatechange = function () {
        if (HttpObj.readyState === 4) {
            ret = HttpObj.responseText;
            //document.getElementById("TextArea1").value = ret;
            alert(ret);
        }
    }


    HttpObj.send(null);
}