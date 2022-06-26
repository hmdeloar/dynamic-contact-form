function sendEmail() {
    Email.send({
        Host: "smtp.@gmail.com",
        Username: "mddeloarhossan4679@gmail.com",
        Password: "DeloAr  7415369",
        To: 'deloarhossain.dp@gmail.com',
        From: document.getElementById("email").value,
        Subject: "Contact Form InQuery",
        Body: "Name: " + document.getElementById("name").value +
            "<br> Email: " + document.getElementById("email").value +
            "<br> Number: " + document.getElementById("number").value +
            "<br> Describe: " + document.getElementById("message").value +
            "<br> Button: " + document.getElementById("button").value
    }).then(
        message => alert("Message sent successfull")
    );

}