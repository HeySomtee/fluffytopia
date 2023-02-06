const bigBtn = document.getElementById("bigBtn");
const wrapDiv = document.getElementById("wrapDiv");
const wrapDiv1 = document.getElementById("wrapDiv1");
const showCase = document.getElementById('dis-dis');
const character = document.getElementById('char');

//options
const land1 = document.getElementById("land1");
const land2 = document.getElementById("land2");
const land3 = document.getElementById("land3");
const land4 = document.getElementById("land4");
const land5 = document.getElementById("land5");
const land6 = document.getElementById("land6");
const land7 = document.getElementById("land7");
const land8 = document.getElementById("land8");

bigBtn.addEventListener('click', BB)
function BB(params) {
    bigBtn.style.animationName = "bigButton";
    wrapDiv.style.animationName = 'shiftDiv';
    wrapDiv1.style.animationName = 'shiftDiv1';

}

land1.addEventListener('click', Land1);
function Land1(params) {
    showCase.src = '/image1.png';
    character.src = './char1.png';
    document.getElementById('resource').style.display = "block";
    document.getElementById('resource2').style.display = "none";
    document.getElementById('resource3').style.display = "none";
    document.getElementById('resource4').style.display = "none";
    document.getElementById('resource5').style.display = "none";
    document.getElementById('resource6').style.display = "none";




}

land2.addEventListener('click', Land2);
function Land2(params) {
    showCase.src = './land2.png';
    character.src = './char4.png';
    document.getElementById('resource').style.display = "none";
    document.getElementById('resource2').style.display = "block";
    document.getElementById('resource3').style.display = "none";
    document.getElementById('resource4').style.display = "none";
    document.getElementById('resource5').style.display = "none";
}

land3.addEventListener('click', Land3);
function Land3(params) {
    showCase.src = './land3.png';
    character.src = './char3.png';
    document.getElementById('resource').style.display = "none";
    document.getElementById('resource2').style.display = "none";
    document.getElementById('resource3').style.display = "block";
    document.getElementById('resource4').style.display = "none";
    document.getElementById('resource5').style.display = "none";
    document.getElementById('resource6').style.display = "none";

}

land4.addEventListener('click', Land4);
function Land4(params) {
    showCase.src = './land4.png';
    character.src = './char2.png';
    document.getElementById('resource').style.display = "none";
    document.getElementById('resource2').style.display = "none";
    document.getElementById('resource3').style.display = "none";
    document.getElementById('resource4').style.display = "block";
    document.getElementById('resource5').style.display = "none";
    document.getElementById('resource6').style.display = "none";
}

land5.addEventListener('click', Land5);
function Land5(params) {
    showCase.src = './land5.png';
    character.src = './char5.png';
    document.getElementById('resource').style.display = "none";
    document.getElementById('resource2').style.display = "none";
    document.getElementById('resource3').style.display = "none";
    document.getElementById('resource4').style.display = "none";
    document.getElementById('resource5').style.display = "block";
    document.getElementById('resource6').style.display = "none";
}

land6.addEventListener('click', Land6);
function Land6(params) {
    showCase.src = './land6.png';
    character.src = './char6.png';
    document.getElementById('resource').style.display = "none";
    document.getElementById('resource2').style.display = "none";
    document.getElementById('resource3').style.display = "none";
    document.getElementById('resource4').style.display = "none";
    document.getElementById('resource5').style.display = "none";
    document.getElementById('resource6').style.display = "block";
}

land7.addEventListener('click', Land7);
function Land7(params) {
    showCase.src = './land7.png';
    character.src = './char7.png';
}

land8.addEventListener('click', Land8);
function Land8(params) {
    showCase.src = './land8.png';
    character.src = './char8.png';
}