"use strict";

var slcAutos;
var txtMerk, txtType;
var divControls, divMotor, divOpties, divFeedBack;
var btnSlaOp;
var pre;
var rdbMotor;
const ChkOptiesNaam = 'gekozenOptie';
const RdbMotorNaam = 'motorKeuze';

window.addEventListener('load', Initieer);

function Initieer() {
  KoppelElementen();
  rdbMotor = GeefRadioButtons('Motor', motorTypes, RdbMotorNaam, divMotor);
  MaakCheckboxen('Opties', optieLijst, ChkOptiesNaam, divOpties);
  ToonAutos();
  KoppelEvents();
  slcAutos.selectedIndex = 0;
  ToonAutoDetails(0);
}

const KoppelElementen = () => {
  slcAutos = document.getElementById("slcAutos");
  txtMerk = document.getElementById("txtMerk");
  txtType = document.getElementById("txtType");
  divControls = document.getElementById("divControls");
  divMotor = document.getElementById("divMotor");
  divOpties = document.getElementById("divOpties");
  divFeedBack = document.getElementById("divFeedBack");
  btnSlaOp = document.getElementById("btnSlaOp");
  pre = document.getElementById("pre");
}

const KoppelEvents = () => {
  slcAutos.addEventListener('change', () => {
    let index = slcAutos.selectedIndex;
    if (index >= 0) {
      ToonAutoDetails(index);
    } else {
      MaakAlleControlsLeeg(divControls);
    }
  });
  btnSlaOp.addEventListener('click', () => {
    let auto = GeefIngegevenAuto();  
    autos[slcAutos.selectedIndex] = auto;
    ToonAutos();
    MaakAlleControlsLeeg(divControls);
  });
}

const ToonAutoDetails = (index) => {
  let geselecteerdeAuto;
  let opties;
  let motorNaam;
  let indexGeselecteerdeMotor;
  geselecteerdeAuto = autos[index];
  motorNaam = geselecteerdeAuto.Motor;
  indexGeselecteerdeMotor = motorTypes.indexOf(motorNaam);

  txtMerk.value = geselecteerdeAuto.Merk;
  txtType.value = geselecteerdeAuto.Type;
  rdbMotor[indexGeselecteerdeMotor].checked = true;
  opties = geselecteerdeAuto.Opties;
  ToonKeuzeCheckboxen(opties, ChkOptiesNaam);
}

const GeefIngegevenAuto = () => {
  let merk, type, motor;
  let opties = [];
  let auto;
  let indexGekozenMotorType = GeefIndexGekozenRadioButton(RdbMotorNaam);
  merk = txtMerk.value;
  type = txtType.value;
  motor = motorTypes[indexGekozenMotorType];
  opties = GeefGekozenValuesCheckBoxes(ChkOptiesNaam);
  auto =
  {
    'Merk' : merk,
    'Type' : type,
    'Motor': motor,
    'Opties': opties
  }
  return auto;
}

const ToonAutos = () => {
  slcAutos.options.length = 0;
  for (let index = 0; index < autos.length; index++) {
    const auto = autos[index];
    let text = `${auto.Merk} ${auto.Type}`;
    let value = index;
    slcAutos.options[index] = new Option(text, value);
  }
  slcAutos.selectedIndex = -1;
  pre.innerHTML = JSON.stringify(autos, null, 4);
}







