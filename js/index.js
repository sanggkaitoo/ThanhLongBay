$(".section5-slide").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
});


function showHidden() {
    var x = document.getElementById("hidden-div")
    if(x.style.display === "") {
        x.style.display = "block"
    } else {
        x.style.display = ""
    }
}

// Send mail

function sendEmail(i) {

    customer_email = "";

    customer_request = "";

    if (i==1) {
        customer_name = document.getElementById("name-show").value;
        
        customer_email = document.getElementById("email-show").value;
        
        customer_phone = document.getElementById("numberphone-show").value;
        
        customer_request = document.getElementById("request-show").value;
    } else {
        customer_name = document.getElementById("name-hidden").value;

        customer_phone = document.getElementById("phone-hidden").value;

    }

	Email.send({
	Host: "smtp.gmail.com",
	Username : "hacker.is.sangkaito1@gmail.com",
	Password : "sangkaito2509",
	To : 'phamquynh047@gmail.com',
	From : "Leuleu123",
	Subject : "Website bất động sản",
	Body : "Tên:" + customer_name + ", Email:" + customer_email + ", Số điện thoại: " + customer_phone + ", Yêu cầu: " + customer_request,
	}).then(
		message => alert("mail sent successfully")
	);
}