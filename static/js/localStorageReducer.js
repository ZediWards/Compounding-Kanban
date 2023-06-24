// actions for our dispatch

export const ACTIONS = {
  // Tank actions

  UPDATE_TANK: "updateTank",

  //  Run actions

  NEW_RUN_LINE: "newRun",

  UPDATE_RUN: "updateRun",

  DELETE_RUN: "deleteRun",

  // Note actions

  UPDATE_NOTE: "updateNote",

  // Second shift action

  UPDATE_SECOND_SHIFT: "updateSecondShift"
};

// Reducer function for local storage

// state = current localStorage, action = object passed in containing type & payload keys

export function reducer(state, action) {
  const jsonDb = JSON.parse(localStorage.getItem("jsonDb"));

  switch (action.type) {
    case ACTIONS.UPDATE_TANK: {
      // filter to get tank that is updating set to payload

      const { tank_id, dom_target } = action.payload;

      let updatedTank = state.tanks.filter((tank) => tank.tank_id === tank_id);

      updatedTank = action.payload;

      // make new tanks [] with updated tank value

      const updatedTanks = state.tanks.map((tank) => {
        if (tank.tank_id === tank_id) {
          return updatedTank;
        } else {
          return tank;
        }
      });

      // disable update btn

      const updateBtn = document.querySelector(`.${dom_target}-update-btn`);

      updateBtn.disabled = true;

      // replace old state.tanks[] with updatedTanks[]

      return window.localStorage.setItem(
        "jsonDb",

        JSON.stringify({ ...jsonDb, tanks: updatedTanks })
      );
    }

    case ACTIONS.NEW_RUN_LINE: {
      if (action.payload.line === "line_1") {
        const newLine1Runs = jsonDb.line1Runs;

        newLine1Runs.push(action.payload);

        return window.localStorage.setItem(
          "jsonDb",

          JSON.stringify({ ...jsonDb, line1Runs: newLine1Runs })
        );
      } else if (action.payload.line === "line_2") {
        const newLine2Runs = jsonDb.line2Runs;

        newLine2Runs.push(action.payload);

        return window.localStorage.setItem(
          "jsonDb",

          JSON.stringify({ ...jsonDb, line2Runs: newLine2Runs })
        );
      }

      break;
    }

    case ACTIONS.UPDATE_RUN: {
      const { run_id, line } = action.payload;

      if (line === "line_1") {
        let updatedRun = state.line1Runs.filter((run) => run.run_id === run_id);

        //used + to convert to num so === works

        // got rid of template literals in body object. That was what made run.run_id a string. No need for + operator then

        updatedRun = action.payload;

        const updatedRuns = state.line1Runs.map((run) => {
          if (run.run_id === run_id) {
            return updatedRun;
          } else {
            return run;
          }
        });

        return window.localStorage.setItem(
          "jsonDb",

          JSON.stringify({ ...jsonDb, line1Runs: updatedRuns })
        );
      } else if (line === "line_2") {
        let updatedRun = state.line2Runs.filter((run) => run.run_id === run_id);

        updatedRun = action.payload;

        const updatedRuns = state.line2Runs.map((run) => {
          if (run.run_id === +run_id) {
            return updatedRun;
          } else {
            return run;
          }
        });

        return window.localStorage.setItem(
          "jsonDb",

          JSON.stringify({ ...jsonDb, line2Runs: updatedRuns })
        );
      }

      break;
    }

    // refreshes admin screen when chages localStorage

    case ACTIONS.DELETE_RUN: {
      const { run_id, line } = action.payload;

      if (line === "line_1") {
        function deleteRun() {
          let filteredOutDeletedRun = state.line1Runs.filter((run) => {
            return run.run_id !== +run_id;
          });

          return window.localStorage.setItem(
            "jsonDb",

            JSON.stringify({ ...jsonDb, line1Runs: filteredOutDeletedRun })
          );
        }

        deleteRun();

        // window.location.reload();
      } else if (line === "line_2") {
        function deleteRun() {
          let filteredOutDeletedRun = state.line2Runs.filter((run) => {
            return run.run_id !== +run_id;
          });

          return window.localStorage.setItem(
            "jsonDb",

            JSON.stringify({ ...jsonDb, line2Runs: filteredOutDeletedRun })
          );
        }

        deleteRun();

        // window.location.reload();
      }

      break;
    }

    case ACTIONS.UPDATE_NOTE: {
      const { note } = action.payload;

      function updatedNote() {
        return window.localStorage.setItem(
          "jsonDb",

          JSON.stringify({ ...jsonDb, note: [{ note_id: 0, note: note }] })
        );
      }

      updatedNote();

      window.location.reload();

      break;
    }

    case ACTIONS.UPDATE_SECOND_SHIFT: {
      const { line_1_date_range, line_2_date_range } = action.payload;

      const updatedSecondShiftNotes = [
        {
          line_num: "Line-1",

          date_range: line_1_date_range
        },

        {
          line_num: "Line-2",

          date_range: line_2_date_range
        }
      ];

      function updateSecondShiftNotes() {
        return window.localStorage.setItem(
          "jsonDb",

          JSON.stringify({ ...jsonDb, secondShift: updatedSecondShiftNotes })
        );
      }

      updateSecondShiftNotes();

      break;
    }

    default:
      throw new Error("Bad Action Type");
  }
}

//*************? MWR REDUCER FUNCTION *****************/

// function Oldreducer(state, action) {

//   switch (action.type) {

//     // add new mwr "handleClick"

//     case ACTIONS.NEW_MWR: {

//       return [...state, action.payload];

//     }

//     // update mwr ""

//     case ACTIONS.UPDATE_MWR: {

//       const updatedState = state.map((item) => {

//         if (item.id === action.payload.id) {

//           // overriding the item with the new data

//           return action.payload;

//         }

//         // if not the item we are looking for we return unchanged item

//         return item;

//       });

//       // can I just return updated state?, does initialState need to be "let"?

//       state = updatedState;

//       return state;

//     }

//     // delete mwr

//     // [?] works - need to make delete button with dispatch function onClick

//     case ACTIONS.DELETE_MWR: {

//       return state.filter((mwr) => mwr.id !== action.payload.id);

//     }

//     default:

//       throw new Error("Bad Action Type");

//     // or return original state

//     // default:

//     // return state

//   }

// }
