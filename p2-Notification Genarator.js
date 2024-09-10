function sendNotification(email) {
    if (email.indexOf('@') === -1) {
        return "Invalid Email";
    }
    const [username, domainName] = email.split('@');
    const message = `${username} sent you an email from ${domainName}`;
    return message;
}



// Test the function with some sample inputs
console.log(sendNotification("zihad@gmail.com")); // Output: "zihad sent you an email from gmail.com"
console.log(sendNotification("farhan34@yahoo.com")); // Output: "farhan34 sent you an email from yahoo.com"
console.log(sendNotification("nadim.naem5@outlook.com")); // Output: "nadim.naem5 sent you an email from outlook.com"
console.log(sendNotification("fahim234.hotmail.com")); // Output: "Invalid Email"
console.log(sendNotification("sadia8icloud.com")); // Output: "Invalid Email"
