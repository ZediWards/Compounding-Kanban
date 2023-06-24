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

//? [x] tank 6 update form
async function submitForm6(e) {
  e.preventDefault();
  try {
    const stageRadios = document.querySelectorAll(".tank6-stage-val");
    let selectedValue;
    for (const radio of stageRadios) {
      if (radio.checked) {
        selectedValue = radio.value;
        break;
      }
    }

    const body = {
      tank_id: 6,
      dom_target: "tank-6",
      tank_num: 6,
      product_type: `${prodType[5].value}`,
      run_sequence: `${seqVal[5].value}`,
      stage: `${selectedValue}`,
      volume: +`${volVal[5].value}`,
      cans: +`${canVal[5].value}`,
      note_1: `${note1Val[5].value}`,
      note_2: `${note2Val[5].value}`,
      the_v: `${theVVal[5].value}`
    };

    // ************************** Local Storage Reducer Function
    const jsonDb = JSON.parse(localStorage.getItem("jsonDb"));

    reducer(jsonDb, { type: ACTIONS.UPDATE_TANK, payload: body });
    // ******************************************

    // const response = await fetch(`${httpAddress}:${httpPort}/tanks/6`, {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(body),
    // });
    // if (response.ok) {
    //   const updateBtn = document.querySelector(".tank-6-update-btn");
    //   updateBtn.disabled = true;
    // } else {
    //   alert("try to update tank 6 again");
    // }
  } catch (err) {
    console.error(err.message);
  }
}

export default submitForm6;
