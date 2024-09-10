function calculateTax(income, expenses) {
    if (typeof income !== 'number' || typeof expenses !== 'number'
        || income < 0 || expenses < 0 || income < expenses) {
        return "Invalid Input";
    }
    const variation = income - expenses;
    const tax = variation * (20 / 100);
    return tax;
    
}



function sendNotification(email) {
    if (email.indexOf('@') === -1) {
        return "Invalid Email";
    }
    const [username, domainName] = email.split('@');
    const message = `${username} sent you an email from ${domainName}`;
    return message;
}



function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input";
    }
    for (let i = 0; i < name.length; i++){
        if (name[i] >= '0' && name[i] <= '9') {
            return true;
        }
    }
    return false
}



function calculateFinalScore(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return "Invalid Input";
    }
    const { name, testScore, schoolGrade, isFFamily } = obj;
    if (typeof name !== 'string' ||
        typeof testScore !== 'number' || testScore > 50 ||
        typeof schoolGrade !== 'number' || schoolGrade > 30 ||
        typeof isFFamily !== 'boolean'){
        return "Invalid Input";
        
    }
    let finalScore = testScore + schoolGrade;
    if (isFFamily) {
        finalScore += 20;
    }
        
    return finalScore >= 80; 

}




function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }
    let total = waitingTimes.reduce((acc, time) => acc + time, 0);
    let averageTime = Math.round(total / waitingTimes.length);
    let peopleAhead = serialNumber - waitingTimes.length - 1;
    let isratWatingTime = peopleAhead * averageTime;
    return isratWatingTime;

}

