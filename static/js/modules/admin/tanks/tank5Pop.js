// import jsonDb from "../../jsonDb.js"

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

//? [x] tank 5 db populate form
async function tank5FormPop(e) {
  // ************** USING LOCAL STORAGE **************************
  const jsonDb = JSON.parse(localStorage.getItem("jsonDb"));
  // ************************************************************
  try {
    // represents tank 1 row in Compounding database, tanks table
    console.table(jsonDb.tanks[4]);

    const jsonDbTank5 = jsonDb.tanks[4];

    const stageRadios = document.querySelectorAll(".tank5-stage-val");
    let selectedValue;
    for (const radio of stageRadios) {
      if (radio.value === `${jsonDbTank5.stage}`) {
        radio.checked = true;
        selectedValue = `${jsonDbTank5.stage}`;
        break;
      }
    }

    prodType[4].value = `${jsonDbTank5.product_type}`;
    seqVal[4].value = `${jsonDbTank5.run_sequence}`;
    selectedValue = `${jsonDbTank5.stage}`;
    volVal[4].value = `${jsonDbTank5.volume}`;
    canVal[4].value = `${jsonDbTank5.cans}`;
    note1Val[4].value = `${jsonDbTank5.note_1}`;
    note2Val[4].value = `${jsonDbTank5.note_2}`;
    theVVal[4].value = `${jsonDbTank5.the_v}`;
  } catch (err) {
    console.error(err.message);
  }
}

export default tank5FormPop;
