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

//? [x] tank 2 update form
async function submitForm2(e) {
  e.preventDefault();
  try {
    const stageRadios = document.querySelectorAll(".tank2-stage-val");
    let selectedValue;
    for (const radio of stageRadios) {
      if (radio.checked) {
        selectedValue = radio.value;
        break;
      }
    }

    const body = {
      tank_id: 2,
      dom_target: "tank-2",
      tank_num: 2,
      product_type: `${prodType[1].value}`,
      run_sequence: `${seqVal[1].value}`,
      stage: `${selectedValue}`,
      volume: +`${volVal[1].value}`,
      cans: +`${canVal[1].value}`,
      note_1: `${note1Val[1].value}`,
      note_2: `${note2Val[1].value}`,
      the_v: `${theVVal[1].value}`
    };

    // ************************** Local Storage Reducer Function
    const jsonDb = JSON.parse(localStorage.getItem("jsonDb"));

    reducer(jsonDb, { type: ACTIONS.UPDATE_TANK, payload: body });
    // ******************************************

    // const response = await fetch(`${httpAddress}:${httpPort}/tanks/2`, {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(body),
    // });
    // if (response.ok) {
    //   const updateBtn = document.querySelector(".tank-2-update-btn");
    //   updateBtn.disabled = true;
    // } else {
    //   alert("try to update tank 2 again");
    // }
  } catch (err) {
    console.error(err.message);
  }
}

export default submitForm2;
