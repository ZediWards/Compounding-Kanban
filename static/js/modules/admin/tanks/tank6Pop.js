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

//? [x] tank 6 db populate form
async function tank6FormPop(e) {
  // ************** USING LOCAL STORAGE **************************
  const jsonDb = JSON.parse(localStorage.getItem("jsonDb"));
  // ************************************************************
  try {
    // represents tank 1 row in Compounding database, tanks table
    console.table(jsonDb.tanks[5]);

    const jsonDbTank6 = jsonDb.tanks[5];

    const stageRadios = document.querySelectorAll(".tank6-stage-val");
    let selectedValue;
    for (const radio of stageRadios) {
      if (radio.value === `${jsonDbTank6.stage}`) {
        radio.checked = true;
        selectedValue = `${jsonDbTank6.stage}`;
        break;
      }
    }

    prodType[5].value = `${jsonDbTank6.product_type}`;
    seqVal[5].value = `${jsonDbTank6.run_sequence}`;
    selectedValue = `${jsonDbTank6.stage}`;
    volVal[5].value = `${jsonDbTank6.volume}`;
    canVal[5].value = `${jsonDbTank6.cans}`;
    note1Val[5].value = `${jsonDbTank6.note_1}`;
    note2Val[5].value = `${jsonDbTank6.note_2}`;
    theVVal[5].value = `${jsonDbTank6.the_v}`;
  } catch (err) {
    console.error(err.message);
  }
}

export default tank6FormPop;
