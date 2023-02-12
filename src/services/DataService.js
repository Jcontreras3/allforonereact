

async function sayHelloApi(name){
    const res = await fetch("https://jjallforoneback.azurewebsites.net/allforone/minich1/" + name);
    const data = await res.text();
    return data;
}
async function addingTwoNumbersApi(inputNumOne, inputNumTwo){
    const res = await fetch("https://jjallforoneback.azurewebsites.net/allforone/minich2/" + inputNumOne + "/" + inputNumTwo);
    const data = await res.text();
    return  data;
}
async function askingQuestionsApi(nameVal, timeVal, amOrPmVal){
    const res = await fetch("https://jjallforoneback.azurewebsites.net/allforone/minich3/" + nameVal + "/" + timeVal + "/" + amOrPmVal);
    const data = await res.text();
    return  data;
}

async function greaterLessApi(greatNumOne, greatNumTwo){
    const res = await fetch("https://jjallforoneback.azurewebsites.net/allforone/minich4/" + greatNumOne + "/" + greatNumTwo);
    const data = await res.text();
    return  data;
}
async function madLibApi(adjVal1, creatureVal, heSheVal, eventVal, locationVal, foodVal, nounVal, colorVal, adjVal2, adverbVal){
    const res = await fetch("https://jjallforoneback.azurewebsites.net/allforone/minich5/" + adjVal1 + "/" + creatureVal + "/" + heSheVal + "/" + eventVal + "/" + locationVal + "/" + foodVal + "/" + nounVal + "/" + colorVal + "/" + adjVal2 + "/" + adverbVal);
    const data = await res.text();
    return  data;
}

async function oddEvenApi(inputNumOne){
    const res = await fetch("https://jjallforoneback.azurewebsites.net/allforone/minich6/" + inputNumOne);
    const data = await res.text();
    return  data;
}
async function reverseItApi(revStr){
    const res = await fetch("https://jjallforoneback.azurewebsites.net/allforone/minich7/" + revStr);
    const data = await res.text();
    return  data;
}

async function firstNameApi(firstNameInput){
    const res = await fetch ("https://jjallforoneback.azurewebsites.net/allforone/studentInfoFirst/" + firstNameInput);
    const data = await res.text();
    return data;
}
async function lastNameApi(lastNameInput){
    const res = await fetch ("https://jjallforoneback.azurewebsites.net/allforone/studentInfoLast/" + lastNameInput);
    const data = await res.text();
    return data;
}
async function slackNameApi(slackNameInput){
    const res = await fetch ("https://jjallforoneback.azurewebsites.net/allforone/studentInfoSlack/" + slackNameInput);
    const data = await res.text();
    return data;
}
async function eMailApi(eMailInput){
    const res = await fetch ("https://jjallforoneback.azurewebsites.net/allforone/studentInfoEmail/" + eMailInput);
    const data = await res.text();
    return data;
}
async function resturantApi(){
    const res = await fetch ("https://jjallforoneback.azurewebsites.net/allforone/minich9/");
    const data = await res.text();
    return data;
}

export{sayHelloApi, addingTwoNumbersApi, askingQuestionsApi, greaterLessApi, madLibApi, oddEvenApi, reverseItApi, firstNameApi, lastNameApi, slackNameApi, eMailApi, resturantApi}