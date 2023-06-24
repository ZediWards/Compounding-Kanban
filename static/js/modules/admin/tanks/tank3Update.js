// import { httpAddress, httpPort } from "../../config.js";
import { ACTIONS, reducer } from "../../../localStorageReducer.js";

const prodType = document.getElementsByClassName("prod-type");
const seqVal = document.getElementsByClassName("seq-val");
const stageVal = document.getElementsByClassName("stage-val");
const checkedStageVal = stageVal.checked;
//select=true.value
const volVal = document.getElementsByClassName("vol-val");
const canVal = document.getElementsByClassName("can-val");

const note1Val = document.getElementsByClassName("note-1-val");
const note2Val = document.getElementsByClassName("note-2-val");
const theVVal = document.getElementsByClassName("note-3-val");

//? [x] tank 3 update form
async function submitForm3(e) {
  e.preventDefault();
  try {
    const stageRadios = document.querySelectorAll(".tank3-stage-val");
    let selectedValue;
    for (const radio of stageRadios) {
      if (radio.checked) {
        selectedValue = radio.value;
        break;
      }
    }

    const body = {
      tank_id: 3,
      dom_target: "tank-3",
      tank_num: 3,
      product_type: `${prodType[2].value}`,
      run_sequence: `${seqVal[2].value}`,
      stage: `${selectedValue}`,
      volume: +`${volVal[2].value}`,
      cans: +`${canVal[2].value}`,
      note_1: `${note1Val[2].value}`,
      note_2: `${note2Val[2].value}`,
      the_v: `${theVVal[2].value}`
    };

    // ************************** Local Storage Reducer Function
    const jsonDb = JSON.parse(localStorage.getItem("jsonDb"));

    reducer(jsonDb, { type: ACTIONS.UPDATE_TANK, payload: body });
    // ******************************************

    // const response = await fetch(`${httpAddress}:${httpPort}/tanks/3`, {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(body),
    // });
    // if (response.ok) {
    //   const updateBtn = document.querySelector(".tank-3-update-btn");
    //   updateBtn.disabled = true;
    // } else {
    //   alert("try to update tank 3 again");
    // }
  } catch (err) {
    console.error(err.message);
  }
}

export default submitForm3;
