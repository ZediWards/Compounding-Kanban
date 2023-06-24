// import jsonDb from "../../jsonDb.js"

//? [x] tank 1 db populate form

async function l2SecondShiftPop(e) {
  try {
    // ************** USING LOCAL STORAGE **************************
    const jsonDb = JSON.parse(localStorage.getItem("jsonDb"));
    // ************************************************************

    const l2SecondShiftDates = document.querySelector(
      "[name = Line2-2nd-shift-date]"
    );
    // represents second-shift table in Compounding database

    const jsonDbSecondShiftL2 = jsonDb.secondShift[1].date_range;

    // const jsonData = await response.json();
    l2SecondShiftDates.value = `${jsonDbSecondShiftL2}`;
  } catch (err) {
    console.error(err.message);
  }
}

async function l1SecondShiftPop(e) {
  try {
    // ************** USING LOCAL STORAGE **************************
    const jsonDb = JSON.parse(localStorage.getItem("jsonDb"));
    // ************************************************************

    const l1SecondShiftDates = document.querySelector(
      "[name = Line1-2nd-shift-date]"
    );

    const jsonDbSecondShiftL1 = jsonDb.secondShift[0].date_range;
    // const response = await fetch(
    //   `${httpAddress}:${httpPort}/second-shift/Line-1`
    // );
    // const jsonData = await response.json();
    l1SecondShiftDates.value = `${jsonDbSecondShiftL1}`;
  } catch (err) {
    console.error(err.message);
  }
}

export { l2SecondShiftPop, l1SecondShiftPop };
