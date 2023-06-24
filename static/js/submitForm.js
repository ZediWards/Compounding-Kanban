// Imports
import tank1FormPop from "./modules/admin/tanks/tank1Pop.js";
import tank2FormPop from "./modules/admin/tanks/tank2Pop.js";
import tank3FormPop from "./modules/admin/tanks/tank3Pop.js";
import tank4FormPop from "./modules/admin/tanks/tank4Pop.js";
import tank5FormPop from "./modules/admin/tanks/tank5Pop.js";
import tank6FormPop from "./modules/admin/tanks/tank6Pop.js";
import submitForm1 from "./modules/admin/tanks/tank1Update.js";
import submitForm2 from "./modules/admin/tanks/tank2Update.js";
import submitForm3 from "./modules/admin/tanks/tank3Update.js";
import submitForm4 from "./modules/admin/tanks/tank4Update.js";
import submitForm5 from "./modules/admin/tanks/tank5Update.js";
import submitForm6 from "./modules/admin/tanks/tank6Update.js";

// Selectors & Event Listeners
document.getElementById("Tank-1-get").addEventListener("click", tank1FormPop);
document.getElementById("Tank-2-get").addEventListener("click", tank2FormPop);
document.getElementById("Tank-3-get").addEventListener("click", tank3FormPop);
document.getElementById("Tank-4-get").addEventListener("click", tank4FormPop);
document.getElementById("Tank-5-get").addEventListener("click", tank5FormPop);
document.getElementById("Tank-6-get").addEventListener("click", tank6FormPop);

const form1 = document.querySelector(".form-tank-1");
const form2 = document.querySelector(".form-tank-2");
const form3 = document.querySelector(".form-tank-3");
const form4 = document.querySelector(".form-tank-4");
const form5 = document.querySelector(".form-tank-5");
const form6 = document.querySelector(".form-tank-6");

form1.addEventListener("submit", submitForm1);
form2.addEventListener("submit", submitForm2);
form3.addEventListener("submit", submitForm3);
form4.addEventListener("submit", submitForm4);
form5.addEventListener("submit", submitForm5);
form6.addEventListener("submit", submitForm6);

// Update tank 1 form on admin.html load
tank1FormPop();

// Tank Update btn on change events
document.querySelector(".tank-1-form").addEventListener("change", tank1Change);
function tank1Change(e) {
  const updateBtn = document.querySelector(".tank-1-update-btn");
  updateBtn.disabled = false;
}

document.querySelector(".tank-2-form").addEventListener("change", tank2Change);
function tank2Change(e) {
  const updateBtn = document.querySelector(".tank-2-update-btn");
  updateBtn.disabled = false;
}

document.querySelector(".tank-3-form").addEventListener("change", tank3Change);
function tank3Change(e) {
  const updateBtn = document.querySelector(".tank-3-update-btn");
  updateBtn.disabled = false;
}

document.querySelector(".tank-4-form").addEventListener("change", tank4Change);
function tank4Change(e) {
  const updateBtn = document.querySelector(".tank-4-update-btn");
  updateBtn.disabled = false;
}

document.querySelector(".tank-5-form").addEventListener("change", tank5Change);
function tank5Change(e) {
  const updateBtn = document.querySelector(".tank-5-update-btn");
  updateBtn.disabled = false;
}

document.querySelector(".tank-6-form").addEventListener("change", tank6Change);
function tank6Change(e) {
  const updateBtn = document.querySelector(".tank-6-update-btn");
  updateBtn.disabled = false;
}
