function Validate() {

    var contact_name = document.forms['contactform']['name'].value;
    if (contact_name == "" || contact_name == null) {
        alert("Name field can't be Empty");
        return false;
    }

    var contact_email = document.forms['contactform']['email'].value;
    if (contact_email == "" || contact_email == null) {
        alert("Email field can't be Empty");
        return false;
    }

    var contact_message = document.forms['contactform']['message'].value;
    if (contact_message == "" || contact_message == null) {
        alert("Subject field can't be Empty");
        return false;
    }

    var txtarea = document.forms['contactform']['txtarea'].value;
    if (txtarea == "" || txtarea == null) {
        alert("Message field can't be Empty");
        return false;
    }


}