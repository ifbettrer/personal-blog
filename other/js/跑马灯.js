 
    var meninfo = " ************************************ WELCOME TO MY OWN BLOG!**************************************** ";
    var info = " ***************************** WELCOME TO MY OWN BLOG!*******************************  ";
 
    function setSatatus() {
        document.title = info.substring(0, info.length);  //����title  
        info = info + info.substring(0, 1);
        info = info.substring(1, info.length);
    }
 
    setInterval(setSatatus, 500);
 
    function left() {
        var id = document.getElementById("wenzi");
        if (typeof id.textContent == "string") {
            id.textContent = meninfo.substring(0, meninfo.length);
        } else {
            id.innerText = meninfo.substring(0, meninfo.length);
        }
        meninfo = meninfo + meninfo.substring(0, 1);
        meninfo = meninfo.substring(1, meninfo.length);
    }
 
 
    setInterval(left, 500); 