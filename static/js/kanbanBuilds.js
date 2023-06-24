// Imports
import { jsonDb } from "../js/modules/jsonDb.js";
import getStuff from "./modules/kanban/getTanks.js";
import getLine1Runs from "./modules/kanban/getLine1.js";
import getLine2Runs from "./modules/kanban/getLine2.js";
import getNote from "./modules/kanban/getNote.js";
import getSecond from "./modules/kanban/secondShift.js";
// import { showToolTip, hideToolTip } from "./modules/kanban/tooltip.js";
import {
  showTankModal,
  // waitingToshowTankModal,
} from "./modules/kanban/tank-levels.js";

// import tankModal from "./modules/kanban/tankModal.js";
// loading db info into
function build() {
  checkLocalStorage();
  // tankModal();
  getStuff(); //build modals as well
  showTankModal();
  // waitingToshowTankModal();
  getLine1Runs();
  getLine2Runs();
  getNote();
  getSecond();
  // showToolTip();
  // hideToolTip();
}

build();

// **************************************************************
// initializing local storage variable and invoking it at top of file.
function checkLocalStorage() {
  const state = window.localStorage.getItem("jsonDb");
  if (state) {
    return JSON.parse(state);
  } else {
    // passong a key and adding the objecst as it's value
    window.localStorage.setItem("jsonDb", JSON.stringify(jsonDb));
  }
}

// [x] all "get data" is using localStorage
// [ ] use reducer function with action constants, payloads, switch statements to handle all updates to localStorage
// should be all in admin module folder
//! https://dev.to/reedbarger/what-is-a-reducer-in-javascript-a-complete-introduction-with-examples-ip1
// function counterReducer(count, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return count + 1;
//     case "DECREMENT":
//       return count - 1;
//     default:
//       return count;
//   }
// }
