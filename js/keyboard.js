const typeA = document.querySelector("#a");
const typeB = document.querySelector("#b");
const typeC = document.querySelector("#c");
const typeD = document.querySelector("#d");
const typeE = document.querySelector("#e");
const typeF = document.querySelector("#f");
const typeG = document.querySelector("#g");
const typeH = document.querySelector("#h");
const typeI = document.querySelector("#i");
const typeJ = document.querySelector("#j");
const typeK = document.querySelector("#k");
const typeL = document.querySelector("#l");
const typeM = document.querySelector("#m");
const typeN = document.querySelector("#n");
const typeO = document.querySelector("#o");
const typeP = document.querySelector("#p");
const typeQ = document.querySelector("#q");
const typeR = document.querySelector("#r");
const typeS = document.querySelector("#s");
const typeT = document.querySelector("#t");
const typeU = document.querySelector("#u");
const typeV = document.querySelector("#v");
const typeW = document.querySelector("#w");
const typeX = document.querySelector("#x");
const typeY = document.querySelector("#y");
const typeZ = document.querySelector("#z");

const typeCancel = document.querySelector("#cancel");

typeA.onclick= typing;
typeB.onclick= typing;
typeC.onclick= typing;
typeD.onclick= typing;
typeE.onclick= typing;
typeF.onclick= typing;
typeG.onclick= typing;
typeH.onclick= typing;
typeI.onclick= typing;
typeJ.onclick= typing;
typeK.onclick= typing;
typeL.onclick= typing;
typeM.onclick= typing;
typeN.onclick= typing;
typeO.onclick= typing;
typeP.onclick= typing;
typeQ.onclick= typing;
typeR.onclick= typing;
typeS.onclick= typing;
typeT.onclick= typing;
typeU.onclick= typing;
typeV.onclick= typing;
typeW.onclick= typing;
typeX.onclick= typing;
typeY.onclick= typing;
typeZ.onclick= typing;
typeT.onclick= typing;
typeT.onclick= typing;

typeCancel.onclick = cancel

function typing(event){
    const val = event.target.innerText;
    console.log(val);
}
