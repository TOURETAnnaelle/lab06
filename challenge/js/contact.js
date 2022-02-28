function validateForm() {
    let x = document.forms["myForm"]["name"].value;
    let y = document.forms["myForm"]["email"].value;
    let w = document.forms["myForm"]["message"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    } else if (y == "") {
        alert("Email must be filled out");
        return false;
    } else if (w == "") {
        alert("Message must be filled out");
        return false;
    } else if (y != "") {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)) {
            return (true)
        }
        alert("You have entered an invalid email address!")
        return (false)

    }

    // else if (x != "" & y != "" & w != "") {
    //     alert("Message sent ");
    //     return true;

    // }
}


function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}