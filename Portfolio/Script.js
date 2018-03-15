var letters = /^[A-Za-z]+$/;
var number = /^[0-9]+$/;
function ValidateForm() {
		var errorMessages = ""; 
		var valid = true;

		var name = myContact.name.value;
		var email = myContact.email.value;
		var text = myContact.commentbox.value;
		if ((Empty(name)) || !checkLetter(name)) {
			errorMessages += "<b>Name is required and only accept letters.</b><br>";
			valid = false;
		}
		if ((Empty(email)) || (!validateEmail(email))) {
			errorMessages += "<b>Email is invalid.</b><br>";
			valid = false;	
		}
		if ((Empty(text))) {
			errorMessages += "<b>Message is required.</b><br>";
			valid = false;		
		}
		errorMessages += "";
		document.getElementById("errorMessages").innerHTML = errorMessages;
		return (valid);
	}
function validateEmail(item) {
    
   	var atpos = item.indexOf("@");
    var dotpos = item.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=item.length) {
       	
        return false;
    }
    return true;
}
function Empty(item) {
	return (item === null || item ==="");
}
function checkLetter(item) {
	return (item.match(letters));
}
