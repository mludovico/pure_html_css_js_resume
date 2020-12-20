(function () {
    let ageDifMs = Date.now() - new Date('1981-03-10').getTime();
    let ageDate = new Date(ageDifMs);
    let currentAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    let ageElement = document.getElementById("age");
    ageElement.append(currentAge);
})()