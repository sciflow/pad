function sciflowDeletePadInit() {
  this.hooks = [];
}

function sciflowDeletePadclicked(event) {
	alert("Pad ID is" + pad.getPadId());
	
	
	var xmlHttp = null;
	try {
	// Mozilla, Opera, Safari sowie Internet Explorer (ab v7)
    xmlHttp = new XMLHttpRequest();
	} catch(e) {
    try {
        // MS Internet Explorer (ab v6)
        xmlHttp  = new ActiveXObject("Microsoft.XMLHTTP");
    } catch(e) {
        try {
            // MS Internet Explorer (ab v5)
            xmlHttp  = new ActiveXObject("Msxml2.XMLHTTP");
        } catch(e) {
            xmlHttp  = null;
        }
    }
	}

	if (xmlHttp) {
    xmlHttp.open('GET', 'http://192.168.61.129/sciflow/api/sciflowDeletePad?pad_id=' + pad.getPadId(), false);
    /*
		xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            alert(xmlHttp.responseText);
        }
    };
		*/
    xmlHttp.send(null);
	}
	
}


/* used on the client side only */
sciflowDeletePad = new sciflowDeletePadInit();