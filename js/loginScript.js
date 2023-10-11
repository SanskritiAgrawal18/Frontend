
function testSignup() {

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var phoneno = /^\d{10}$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var pin = document.getElementById("pin").value;
    var pinformat = /^\d{6}$/;
    var city = document.getElementById("city").value;
    var userRole = document.getElementById("userRole");

    var agree = document.getElementById("agree");
    if (fname == "") {

        document.getElementById("fname").focus();
        document.getElementById("span_fname").innerHTML = "Enter your first name!";
        return false;
    } else {
        document.getElementById("span_fname").innerHTML = "";

    }
    if (lname == "") {

        document.getElementById("lname").focus();
        document.getElementById("span_lname").innerHTML = "Enter your last name!";
        return false;

    } else {
        document.getElementById("span_lname").innerHTML = "";

    }
    if (!mobile.match(phoneno)) {
        document.getElementById("span_mobile").innerHTML = "Enter your mobile no.!";
        document.getElementById("mobile").focus();
        return false;
    } else {
        document.getElementById("span_mobile").innerHTML = "";

    }
    if (!email.match(mailformat)) {

        document.getElementById("span_email").innerHTML = "Enter your email!";
        document.getElementById("email").focus();
        return false;
    } else {
        document.getElementById("span_email").innerHTML = "";

    }
    if (!pin.match(pinformat)) {

        document.getElementById("pin").focus();
        document.getElementById("span_pin").innerHTML = "Enter pin!";
        return false;
    } else {
        document.getElementById("span_pin").innerHTML = "";

    }
    if (city == "") {

        document.getElementById("city").focus();
        document.getElementById("span_city").innerHTML = "Enter your city!";
        return false;

    } else {
        document.getElementById("span_city").innerHTML = "";

    }

    if (userRole.selectedIndex == 0) {

        document.getElementById("span_userRole").innerHTML = "Select your role!";
        document.getElementById("userRole").focus();
        return false;
    } else {
        document.getElementById("span_userRole").innerHTML = "";

    }


    postData();
    return false;

}

function postData() {

    var fname = document.getElementById("fname").value;
    var mname = document.getElementById("mname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var pin = document.getElementById("pin").value;
    var city = document.getElementById("city").value;

    var userRole = document.getElementById("userRole").value;

    var basicInfo = JSON.stringify({
        "fname": fname,
        "mname": mname,
        "lname": lname,
        "email": email,
        "mobile": mobile,
        "pin": pin,
        "city": city,
        "userRole": userRole,
    });

    $.ajax({
        url: "http://localhost:8080/signup",
        type: 'POST',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        data: basicInfo,
        success: function (data) {
            if (data == true) {
                document.getElementById("span_signupbtn").innerHTML = "Saved Successfully!";
                
            }
        },
        error: function (xhr, textStatus, errorThrown) {
            console.error("Error:", errorThrown);
            document.getElementById("span_signupbtn").innerHTML = "Something went wrong";
        }
    });

    return false;
}




function getCustomerData(id) {
    $.ajax({
        url: "http://localhost:8080/signup/" + id,
        type: 'GET',
        dataType: 'json',

        success: function (data) {
            console.log(data);
            var rowDataHTML = "";
            var trData = "<tr><td id='tblData' width='170px'>" +
                "First name        " + "</td><td>" + data.fname + "</td></tr><tr><td id='tblData'>" +
                "Middle name        " + "</td><td>" + data.mname + "</td></tr><tr><td id='tblData'>" +
                "Last name        " + "</td><td>" + data.lname + "</td></tr><tr><td id='tblData'>" +
                "Mobile        " + "</td><td>" + data.mobile + "</td></tr><tr><td id='tblData'>" +
                "Email        " + "</td><td>" + data.email + "</td></tr><tr><td id='tblData'>" +
                "Pin        " + "</td><td>" + data.pin + "</td></tr><tr><td id='tblData'>" +
                "City        " + "</td><td>" + data.city + "</td></tr>";
            var rowData = rowDataHTML + trData;
            document.getElementById("tableBody").innerHTML = rowData;
        }
    });
}

function getCustomerName(id) {
    $.ajax({
        url: "http://localhost:8080/signup/" + id,
        type: 'GET',
        dataType: 'json',

        success: function (data) {
            console.log(data);
            document.getElementById("user").innerHTML = data.fname + " " + data.mname + " " + data.lname;
            document.getElementById(".user").innerHTML = data.fname + " " + data.mname + " " + data.lname;
        }
    });
}

function testLogin() {
    var login = document.getElementById("login").value;
    var isNum = /^[0-9]*$/.test(login);
    var phoneno = /^\d{10}$/;
    var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    var mpin = document.getElementById("mpin").value;
    var pinformat = /^\d{4}$/;
    if (login == "") {
        document.getElementById("span_login").innerHTML = "Enter valid mobile no. or email address!";
        document.getElementById("login").focus();
        return false;
    }
    else {
        document.getElementById("span_login").innerHTML = "";
    }
    if (login != "") {
        if (isNum) {
            document.getElementById("login").maxLength = "10";
            if (!login.match(phoneno)) {

                document.getElementById("span_login").innerHTML = "Enter valid mobile no.!";
                document.getElementById("login").focus();
                return false;

            } else {
                document.getElementById("span_login").innerHTML = "";

            }

        }
        else if (!isNum) {
            if (!login.match(mailformat)) {

                document.getElementById("span_login").innerHTML = "Enter valid email!";
                document.getElementById("login").focus();
                return false;

            } else {
                document.getElementById("span_login").innerHTML = "";

            }
        }
        if (mpin == "" || !mpin.match(pinformat)) {
            document.getElementById("span_mpin").innerHTML = "Enter valid pin!";
            document.getElementById("mpin").focus();
            return false;

        } else {
            document.getElementById("span_mpin").innerHTML = "";

        }
        return getEmail();

    }

}
function getEmail() {

    var login = document.getElementById("login").value;
    var isNum = /^[0-9]*$/.test(login);
    var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    var mpin = document.getElementById("mpin").value;
    var phoneno = /^\d{10}$/;
    if (!isNum) {
        if (login.match(mailformat)) {


            var basicInfo = JSON.stringify({
                "email": login,
                "mpin": mpin,
            });


            $.ajax({
                url: "http://localhost:8080/doLogin/",
                type: 'POST',
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                data: basicInfo,
                success: function (data) {

                    if (data == false) {
                        document.getElementById("span_submit").innerHTML = "Invalid Credentials!";
                        return false;
                    } else {

                        document.getElementById("span_submit").innerHTML = "login success!";
                        window.location.replace("index.html");


                    }
                }
            });
            return false;
        }
    }

    if (isNum) {
        if (login.match(phoneno)) {

            var basicInfo = JSON.stringify({
                "mobile": login,
                "mpin": mpin,
            });

            $.ajax({
                url: "http://localhost:8080/doLogin/",
                type: 'POST',
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                data: basicInfo,
                success: function (data) {

                    if (data == false) {
                        document.getElementById("span_submit").innerHTML = "Invalid Credentials";
                        return false;
                    } else {

                        document.getElementById("span_submit").innerHTML = "login success!";
                        window.location.replace("home.html");

                    }
                }
            });
            return false;
        }
    }
}
function getDistrict() {
    var pin = document.getElementById("pin").value;
    $.ajax({
        url: "https://api.postalpincode.in/pincode/" + pin,
        type: 'GET',
        dataType: 'json',

        success: function (data) {
            var po = data.length;
            for (var i = 0; i < po; i++) {
                var postoffice = data[i].PostOffice;
                var postofficeLength = postoffice.length;
                for (var j = 0; j < postofficeLength; j++) {
                    var district = postoffice[0].District;
                    alert(2);
                    document.getElementById("city").value = district;
                }
            }

            alert(1);

            document.getElementById("city").value = district;
        }
    });
    return false;
}

function getBrokerName() {

    $.ajax({
        url: "http://localhost:8080/brokermaster/",
        type: 'GET',
        dataType: 'json',

        success: function (data) {

            console.log(data);
            var broker = '';
            for (var i = 0; i <= data.length; i++) {
                console.log(data[i].brokerName);
                var brokertbl = '<div class="col-4"><div class="form-check form-switch"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault" /><label class="form-check-label" for="flexRadioDefault1" value="' + data[i].brokerId + '">' + data[i].brokerName + '</label></div></div>';

                broker = broker + brokertbl;
                document.getElementById("broker").innerHTML = broker;
            }
        }

    });
}
function btnUpload() {
    var upload = '<center><button class="btn btn-primary" value="upload">UPLOAD</button></center>';
    document.getElementById("broker").innerHTML = upload;
}
