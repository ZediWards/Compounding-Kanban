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

//? [x] tank 1 db populate form
const tank1FormPop = function () {
  // ************** USING LOCAL STORAGE **************************
  const jsonDb = JSON.parse(localStorage.getItem("jsonDb"));
  // ************************************************************
  try {
    // represents tank 1 row in Compounding database, tanks table
    console.table(jsonDb.tanks[0]);

    const jsonDbTank1 = jsonDb.tanks[0];

    const stageRadios = document.querySelectorAll(".tank1-stage-val");
    let selectedValue;
    for (const radio of stageRadios) {
      if (radio.value === `${jsonDbTank1.stage}`) {
        radio.checked = true;
        selectedValue = `${jsonDbTank1.stage}`;
        break;
      }
    }

    prodType[0].value = `${jsonDbTank1.product_type}`;
    seqVal[0].value = `${jsonDbTank1.run_sequence}`;
    selectedValue = `${jsonDbTank1.stage}`;
    volVal[0].value = `${jsonDbTank1.volume}`;
    canVal[0].value = `${jsonDbTank1.cans}`;
    note1Val[0].value = `${jsonDbTank1.note_1}`;
    note2Val[0].value = `${jsonDbTank1.note_2}`;
    theVVal[0].value = `${jsonDbTank1.the_v}`;
  } catch (err) {
    console.error(err.message);
  }
};

export default tank1FormPop;
