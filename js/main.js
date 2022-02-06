function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '/data/data.json', true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    }
    xobj.send(null);
}


loadJSON(function(response) {
    jsonresponse = JSON.parse(response);
    let id = new URLSearchParams(document.location.search).get("id")
    jsonresponse.forEach(e => {
        if (e.id == id) {
            document.getElementById("linkedin-link").href = e.LinkedIn;
            document.getElementById("whatsapp-link").href = e.Whatsapp;
            document.getElementById("profile-photo").src = "/images/profile/" + e.id + ".png";
            document.getElementById("name").innerHTML = e.Name;
            document.getElementById("title").innerHTML = e.Title;
            document.getElementById("phone-call").href = "tel:" + e.Phone;
            document.getElementById("map-inner").src = e.Map
            document.getElementById("address").innerHTML = e.Address
            document.getElementById("email").href = "mailto:" + e.Email
            document.getElementById("email").innerHTML = e.Email
            document.getElementById("phone").href = "tel:" + e.Phone
            document.getElementById("phone").innerHTML = e.Phone
            document.getElementById("office").innerHTML = e.Office
        }
    });
});