// (test)import jsonDb from "../../jsonDb.js"
import { ACTIONS, reducer } from "../../../localStorageReducer.js";
import fragranceBorder from "./fragranceBorder.js";
import changeFragranceBorder from "./changeFragranceBorder.js";

//?[x] Building Line 1 Runs From db
//?[x] Updates and Deletes Line 1 Runs From db
//? [x] uk-margin off
async function l1AppGetList(e) {
  // ************** USING LOCAL STORAGE **************************
  const jsonDb = JSON.parse(localStorage.getItem("jsonDb"));
  // ************************************************************
  try {
    // represents line1Runs table in Compounding database
    console.table(jsonDb.line1Runs);

    // Lesson: click event to rebuild the line 1 runs after item gets updated
    //! inside update functino as well
    const clickEvent = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: false,
    });

    // Items that get click event dispatched to
    const line1MenuItem = document.querySelector("#Line1-get-and-list");
    // ----------------------------------------------

    const jsonDbLine1Runs = jsonDb.line1Runs;

    const sortL1Runs = jsonDbLine1Runs.sort((a, b) =>
      a.run_order > b.run_order ? 1 : -1
    );

    // clear all previous children of l1RunForms
    function removeAllChildNodes(parent) {
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    }
    const l1RunForms = document.querySelector(".l1-run-forms");
    removeAllChildNodes(l1RunForms);

    const l1SortedRuns = sortL1Runs.map((run) => {
      // ul
      const l1RunForms = document.querySelector(".l1-run-forms");

      // build and append to ul
      const listItem = document.createElement("li");
      listItem.className = `sequence-item uuid${run.run_id} ${fragranceBorder(
        run.product_type
      )}`;
      l1RunForms.appendChild(listItem);
      listItem.addEventListener("change", changeWorked);
      function changeWorked(e) {
        updateBtn.disabled = false;
      }
      // form
      const runForm = document.createElement("form");
      runForm.className = "uk-form-stacked run-form";
      runForm.addEventListener("submit", updateRunItem);
      listItem.appendChild(runForm);

      //? Number in run sequence
      // run sequence outer div
      const runSequenceOuterDiv = document.createElement("div");
      runSequenceOuterDiv.className = "uk-margin";
      runForm.appendChild(runSequenceOuterDiv);

      // run sequence label
      const runSequenceLabel = document.createElement("label");
      runSequenceLabel.className = "uk-form-label";
      runSequenceLabel.setAttribute("for", "uuid-run-seq");
      runSequenceLabel.textContent = "Order in Run Sequence";
      runSequenceOuterDiv.appendChild(runSequenceLabel);

      // run sequence inner div
      const runSequenceInnerDiv = document.createElement("div");
      runSequenceInnerDiv.className = "uk-form-controls";
      runSequenceOuterDiv.appendChild(runSequenceInnerDiv);

      // input type number
      const runSequenceInput = document.createElement("input");
      runSequenceInput.className = "uk-input";
      runSequenceInput.id = "uuid-run-seq";
      runSequenceInput.setAttribute("type", "number");
      runSequenceInput.setAttribute("required", "");
      runSequenceInput.value = `${run.run_order}`;
      runSequenceInnerDiv.appendChild(runSequenceInput);

      //? Number In Run
      // run number outer div
      const runNumOuterDiv = document.createElement("div");
      // runNumOuterDiv.className = "uk-margin";
      runForm.appendChild(runNumOuterDiv);

      // run num label
      const runNumLabel = document.createElement("label");
      runNumLabel.className = "uk-form-label";
      runNumLabel.setAttribute("for", "uuid-run-num");
      runNumLabel.textContent = "Number of Batches in Run";
      runNumOuterDiv.appendChild(runNumLabel);

      // run num inner div
      const runNumInnerDiv = document.createElement("div");
      runNumInnerDiv.className = "uk-form-controls";
      runNumOuterDiv.appendChild(runNumInnerDiv);

      // input type number
      const runNumInput = document.createElement("input");
      runNumInput.className = "uk-input";
      runNumInput.id = "uuid-run-num";
      runNumInput.setAttribute("type", "number");
      runNumInput.value = `${run.num_batches}`;
      runNumInnerDiv.appendChild(runNumInput);

      // // number input change event
      // runNumInput.addEventListener("input", batchSizeList);

      //? Fragrance
      // fragrance outer div
      const fragranceOuterDiv = document.createElement("div");
      // fragranceOuterDiv.className = "uk-margin";
      runForm.appendChild(fragranceOuterDiv);

      // fragrance label
      const fragranceLabel = document.createElement("label");
      fragranceLabel.className = "uk-form-label";
      fragranceLabel.setAttribute("for", "uuid-fragrance");
      fragranceLabel.textContent = "Fragrance";
      fragranceOuterDiv.appendChild(fragranceLabel);

      // fragrance inner div
      const fragranceInnerDiv = document.createElement("div");
      fragranceInnerDiv.className = "uk-form-controls";
      fragranceOuterDiv.appendChild(fragranceInnerDiv);

      // fragrance select dropdown
      const fragranceSelect = document.createElement("select");
      fragranceSelect.className = "uk-select";
      fragranceSelect.id = "uuid-fragrance";
      fragranceLabel.setAttribute("required", "");
      fragranceInnerDiv.appendChild(fragranceSelect);

      // border color change with flavor select change
      fragranceSelect.addEventListener("change", (e) => {
        changeFragranceBorder(e);
      });

      // empty option
      // const fragranceEmptyOption = document.createElement("option");
      // fragranceEmptyOption.textContent = "";
      // fragranceSelect.appendChild(fragranceEmptyOption);

      // fragrance select dropdown options 1
      const fragranceSelectOptions1 = document.createElement("optgroup");
      fragranceSelectOptions1.setAttribute("label", "Flavors");
      fragranceSelect.appendChild(fragranceSelectOptions1);

      //? Flavors
      const fragranceOption1 = document.createElement("option");
      fragranceOption1.textContent = "Kiwi";
      fragranceSelectOptions1.appendChild(fragranceOption1);

      const fragranceOption2 = document.createElement("option");
      fragranceOption2.textContent = "Citrus";
      fragranceSelectOptions1.appendChild(fragranceOption2);

      const fragranceOption3 = document.createElement("option");
      fragranceOption3.textContent = "Blueberry";
      fragranceSelectOptions1.appendChild(fragranceOption3);

      const fragranceOption4 = document.createElement("option");
      fragranceOption4.textContent = "Strawberry";
      fragranceSelectOptions1.appendChild(fragranceOption4);

      fragranceSelect.value = `${run.product_type}`;

      //? Can Size
      // can size outer div
      const canSizeOuterDiv = document.createElement("div");
      // canSizeOuterDiv.className = "uk-margin";
      runForm.appendChild(canSizeOuterDiv);

      // can size label
      const canSizeLabel = document.createElement("label");
      canSizeLabel.className = "uk-form-label";
      canSizeLabel.setAttribute("for", "uuid-can-size");
      canSizeLabel.textContent = "Can Size";
      canSizeOuterDiv.appendChild(canSizeLabel);

      // can size inner div
      const canSizeInnerDiv = document.createElement("div");
      canSizeInnerDiv.className = "uk-form-controls";
      canSizeOuterDiv.appendChild(canSizeInnerDiv);

      // can size select dropdown
      const canSizeSelect = document.createElement("select");
      canSizeSelect.className = "uk-select";
      canSizeSelect.id = "uuid-can-size";
      canSizeInnerDiv.appendChild(canSizeSelect);

      // empty can option
      const emptyCanOption = document.createElement("option");
      emptyCanOption.textContent = "";
      canSizeSelect.appendChild(emptyCanOption);

      //? Can sizes
      const canSizeOption1 = document.createElement("option");
      canSizeOption1.textContent = "6";
      canSizeSelect.appendChild(canSizeOption1);

      const canSizeOption2 = document.createElement("option");
      canSizeOption2.textContent = "12";
      canSizeSelect.appendChild(canSizeOption2);

      const canSizeOption3 = document.createElement("option");
      canSizeOption3.textContent = "24";
      canSizeSelect.appendChild(canSizeOption3);

      canSizeSelect.value = `${run.oz}`;

      //? Extras
      // extras outer div
      const extrasOuterDiv = document.createElement("div");
      // extrasOuterDiv.className = "uk-margin";
      runForm.appendChild(extrasOuterDiv);

      // extras label
      const extrasLabel = document.createElement("label");
      extrasLabel.className = "uk-form-label";
      extrasLabel.setAttribute("for", "uuid-extras");
      extrasLabel.textContent = "Extras";
      extrasOuterDiv.appendChild(extrasLabel);

      // extras inner div
      const extrasInnerDiv = document.createElement("div");
      extrasInnerDiv.className = "uk-form-controls extras-flex-wrap";
      extrasOuterDiv.appendChild(extrasInnerDiv);

      // coupon label
      const couponLabel = document.createElement("label");
      couponLabel.id = "uuid-coupon";
      couponLabel.textContent = "Coupons";
      extrasInnerDiv.appendChild(couponLabel);

      // coupon checkbox
      const couponCheckBox = document.createElement("input");
      couponCheckBox.className = "uk-checkbox extras-checkbox";
      couponCheckBox.setAttribute("type", "checkbox");
      couponCheckBox.setAttribute("name", "uuid-coupon");
      couponCheckBox.value = `${run.coupons}`;
      couponCheckFunction();
      function couponCheckFunction() {
        if (`${run.coupons}` !== "") {
          couponCheckBox.checked = true;
          couponCheckBox.value = `${run.coupons}`;
        }
      }
      couponLabel.appendChild(couponCheckBox);

      // canadian label
      const canadianLabel = document.createElement("label");
      canadianLabel.id = "uuid-canadian";
      canadianLabel.textContent = "Canadian";
      extrasInnerDiv.appendChild(canadianLabel);

      // canadian checkbox
      const canadianCheckBox = document.createElement("input");
      canadianCheckBox.className = "uk-checkbox extras-checkbox";
      canadianCheckBox.setAttribute("type", "checkbox");
      canadianCheckBox.setAttribute("name", "uuid-canadian");
      canadianCheckFunction();
      function canadianCheckFunction() {
        if (`${run.canadian}` !== "") {
          canadianCheckBox.checked = true;
          canadianCheckBox.value = `${run.canadian}`;
        }
      }
      canadianLabel.appendChild(canadianCheckBox);

      // split label
      const splitLabel = document.createElement("label");
      splitLabel.id = "uuid-split";
      splitLabel.textContent = "Split";
      extrasInnerDiv.appendChild(splitLabel);

      // split checkbox
      const splitCheckBox = document.createElement("input");
      splitCheckBox.className = "uk-checkbox extras-checkbox";
      splitCheckBox.setAttribute("type", "checkbox");
      splitCheckBox.setAttribute("name", "uuid-split");
      splitCheckFunction();
      function splitCheckFunction() {
        if (`${run.split}` !== "") {
          splitCheckBox.checked = true;
          splitCheckBox.value = `${run.split}`;
        }
      }
      splitLabel.appendChild(splitCheckBox);

      //? Batch size list
      // batch size list outer div
      const batchSizeListOuterDiv = document.createElement("div");
      // batchSizeListOuterDiv.className = "uk-margin";
      runForm.appendChild(batchSizeListOuterDiv);

      // batch size list label add delete button container div
      const batchSizeListLabelContainer = document.createElement("div");
      batchSizeListLabelContainer.className = "batch-size-list-input-container";
      batchSizeListOuterDiv.appendChild(batchSizeListLabelContainer);

      // batch size list label
      const batchSizeListLabel = document.createElement("label");
      batchSizeListLabel.className = "uk-form-label";
      batchSizeListLabel.setAttribute("for", "uuid-batch-size-list");
      batchSizeListLabel.textContent = "Batch Size List";
      batchSizeListLabelContainer.appendChild(batchSizeListLabel);

      // add batch size list list item button
      const addBatchSizeListItemBtn = document.createElement("button");
      addBatchSizeListItemBtn.className = "add-list-item-btn uk-button-primary";
      addBatchSizeListItemBtn.textContent = "+";
      batchSizeListLabelContainer.appendChild(addBatchSizeListItemBtn);
      addBatchSizeListItemBtn.addEventListener("click", addListItem);
      addBatchSizeListItemBtn.addEventListener("click", addListItem);
      function addListItem(e) {
        e.stopImmediatePropagation();
        e.preventDefault();
        if (batchSizeListOrderedList.childElementCount < 10) {
          // batch size ordered list, list item
          const batchSizeListOlListItem = document.createElement("li");
          batchSizeListOlListItem.className = "batch-size-ol-list-item";
          batchSizeListOrderedList.appendChild(batchSizeListOlListItem);

          // input type number
          const batchSizeListItemInput = document.createElement("input");
          batchSizeListItemInput.className =
            "uk-input uk-form-small batch-size-li";
          batchSizeListItemInput.id = "uuid-batch-size-list";
          batchSizeListItemInput.setAttribute("type", "number");
          batchSizeListOlListItem.appendChild(batchSizeListItemInput);
        } else {
          alert("10 is the max.");
        }
      }

      // remove batch size list list item button
      const removeBatchSizeListItemBtn = document.createElement("button");
      removeBatchSizeListItemBtn.className =
        "remove-list-item-btn uk-button-danger";
      removeBatchSizeListItemBtn.textContent = "-";
      batchSizeListLabelContainer.appendChild(removeBatchSizeListItemBtn);
      removeBatchSizeListItemBtn.addEventListener("click", removeListItem);
      function removeListItem(e) {
        e.stopImmediatePropagation();
        e.preventDefault();
        batchSizeListOrderedList.removeChild(
          batchSizeListOrderedList.lastChild
        );
        updateBtn.disabled = false;
      }

      // batch size list inner div
      const batchSizeListInnerDiv = document.createElement("div");
      batchSizeListInnerDiv.className = "uk-form-controls";
      batchSizeListOuterDiv.appendChild(batchSizeListInnerDiv);

      // batch size list ordered list
      const batchSizeListOrderedList = document.createElement("ol");
      batchSizeListOrderedList.className = "batch-size-ordered-list";
      batchSizeListInnerDiv.appendChild(batchSizeListOrderedList);
      batchSizeListFromDb();
      // ? [x] pull and build batch size list from db
      function batchSizeListFromDb() {
        if (isNaN(1 + `${run.batch_size_li_1}`)) {
        } else {
          // batch size ordered list, list item
          const batchSizeListOlListItem = document.createElement("li");
          batchSizeListOlListItem.className = "batch-size-ol-list-item";
          batchSizeListOrderedList.appendChild(batchSizeListOlListItem);

          // input type number
          const batchSizeListItemInput = document.createElement("input");
          batchSizeListItemInput.className =
            "uk-input uk-form-small batch-size-li";
          batchSizeListItemInput.id = "uuid-batch-size-list";
          batchSizeListItemInput.setAttribute("type", "number");
          batchSizeListItemInput.value = `${run.batch_size_li_1}`;
          batchSizeListOlListItem.appendChild(batchSizeListItemInput);
        }
        if (isNaN(1 + `${run.batch_size_li_2}`)) {
        } else {
          // batch size ordered list, list item
          const batchSizeListOlListItem = document.createElement("li");
          batchSizeListOlListItem.className = "batch-size-ol-list-item";
          batchSizeListOrderedList.appendChild(batchSizeListOlListItem);

          // input type number
          const batchSizeListItemInput = document.createElement("input");
          batchSizeListItemInput.className =
            "uk-input uk-form-small batch-size-li";
          batchSizeListItemInput.id = "uuid-batch-size-list";
          batchSizeListItemInput.setAttribute("type", "number");
          batchSizeListItemInput.value = `${run.batch_size_li_2}`;
          batchSizeListOlListItem.appendChild(batchSizeListItemInput);
        }
        if (isNaN(1 + `${run.batch_size_li_3}`)) {
        } else {
          // batch size ordered list, list item
          const batchSizeListOlListItem = document.createElement("li");
          batchSizeListOlListItem.className = "batch-size-ol-list-item";
          batchSizeListOrderedList.appendChild(batchSizeListOlListItem);

          // input type number
          const batchSizeListItemInput = document.createElement("input");
          batchSizeListItemInput.className =
            "uk-input uk-form-small batch-size-li";
          batchSizeListItemInput.id = "uuid-batch-size-list";
          batchSizeListItemInput.setAttribute("type", "number");
          batchSizeListItemInput.value = `${run.batch_size_li_3}`;
          batchSizeListOlListItem.appendChild(batchSizeListItemInput);
        }
        if (isNaN(1 + `${run.batch_size_li_4}`)) {
        } else {
          // batch size ordered list, list item
          const batchSizeListOlListItem = document.createElement("li");
          batchSizeListOlListItem.className = "batch-size-ol-list-item";
          batchSizeListOrderedList.appendChild(batchSizeListOlListItem);

          // input type number
          const batchSizeListItemInput = document.createElement("input");
          batchSizeListItemInput.className =
            "uk-input uk-form-small batch-size-li";
          batchSizeListItemInput.id = "uuid-batch-size-list";
          batchSizeListItemInput.setAttribute("type", "number");
          batchSizeListItemInput.value = `${run.batch_size_li_4}`;
          batchSizeListOlListItem.appendChild(batchSizeListItemInput);
        }
        if (isNaN(1 + `${run.batch_size_li_5}`)) {
        } else {
          // batch size ordered list, list item
          const batchSizeListOlListItem = document.createElement("li");
          batchSizeListOlListItem.className = "batch-size-ol-list-item";
          batchSizeListOrderedList.appendChild(batchSizeListOlListItem);

          // input type number
          const batchSizeListItemInput = document.createElement("input");
          batchSizeListItemInput.className =
            "uk-input uk-form-small batch-size-li";
          batchSizeListItemInput.id = "uuid-batch-size-list";
          batchSizeListItemInput.setAttribute("type", "number");
          batchSizeListItemInput.value = `${run.batch_size_li_5}`;
          batchSizeListOlListItem.appendChild(batchSizeListItemInput);
        }
        if (isNaN(1 + `${run.batch_size_li_6}`)) {
        } else {
          // batch size ordered list, list item
          const batchSizeListOlListItem = document.createElement("li");
          batchSizeListOlListItem.className = "batch-size-ol-list-item";
          batchSizeListOrderedList.appendChild(batchSizeListOlListItem);

          // input type number
          const batchSizeListItemInput = document.createElement("input");
          batchSizeListItemInput.className =
            "uk-input uk-form-small batch-size-li";
          batchSizeListItemInput.id = "uuid-batch-size-list";
          batchSizeListItemInput.setAttribute("type", "number");
          batchSizeListItemInput.value = `${run.batch_size_li_6}`;
          batchSizeListOlListItem.appendChild(batchSizeListItemInput);
        }
        if (isNaN(1 + `${run.batch_size_li_7}`)) {
        } else {
          // batch size ordered list, list item
          const batchSizeListOlListItem = document.createElement("li");
          batchSizeListOlListItem.className = "batch-size-ol-list-item";
          batchSizeListOrderedList.appendChild(batchSizeListOlListItem);

          // input type number
          const batchSizeListItemInput = document.createElement("input");
          batchSizeListItemInput.className =
            "uk-input uk-form-small batch-size-li";
          batchSizeListItemInput.id = "uuid-batch-size-list";
          batchSizeListItemInput.setAttribute("type", "number");
          batchSizeListItemInput.value = `${run.batch_size_li_7}`;
          batchSizeListOlListItem.appendChild(batchSizeListItemInput);
        }
        if (isNaN(1 + `${run.batch_size_li_8}`)) {
        } else {
          // batch size ordered list, list item
          const batchSizeListOlListItem = document.createElement("li");
          batchSizeListOlListItem.className = "batch-size-ol-list-item";
          batchSizeListOrderedList.appendChild(batchSizeListOlListItem);

          // input type number
          const batchSizeListItemInput = document.createElement("input");
          batchSizeListItemInput.className =
            "uk-input uk-form-small batch-size-li";
          batchSizeListItemInput.id = "uuid-batch-size-list";
          batchSizeListItemInput.setAttribute("type", "number");
          batchSizeListItemInput.value = `${run.batch_size_li_8}`;
          batchSizeListOlListItem.appendChild(batchSizeListItemInput);
        }
        if (isNaN(1 + `${run.batch_size_li_9}`)) {
        } else {
          // batch size ordered list, list item
          const batchSizeListOlListItem = document.createElement("li");
          batchSizeListOlListItem.className = "batch-size-ol-list-item";
          batchSizeListOrderedList.appendChild(batchSizeListOlListItem);

          // input type number
          const batchSizeListItemInput = document.createElement("input");
          batchSizeListItemInput.className =
            "uk-input uk-form-small batch-size-li";
          batchSizeListItemInput.id = "uuid-batch-size-list";
          batchSizeListItemInput.setAttribute("type", "number");
          batchSizeListItemInput.value = `${run.batch_size_li_9}`;
          batchSizeListOlListItem.appendChild(batchSizeListItemInput);
        }
        if (isNaN(1 + `${run.batch_size_li_10}`)) {
        } else {
          // batch size ordered list, list item
          const batchSizeListOlListItem = document.createElement("li");
          batchSizeListOlListItem.className = "batch-size-ol-list-item";
          batchSizeListOrderedList.appendChild(batchSizeListOlListItem);

          // input type number
          const batchSizeListItemInput = document.createElement("input");
          batchSizeListItemInput.className =
            "uk-input uk-form-small batch-size-li";
          batchSizeListItemInput.id = "uuid-batch-size-list";
          batchSizeListItemInput.setAttribute("type", "number");
          batchSizeListItemInput.value = `${run.batch_size_li_10}`;
          batchSizeListOlListItem.appendChild(batchSizeListItemInput);
        }
      }

      //? Buttons
      // button container
      const btncontainer = document.createElement("div");
      btncontainer.className = "btns-container";
      runForm.appendChild(btncontainer);

      //? []  update button
      const updateBtn = document.createElement("button");
      updateBtn.className = `uk-button uk-button-primary uk-width-1-2 run-update`;
      updateBtn.id = `${run.run_id}`;
      updateBtn.setAttribute("type", "submit");
      updateBtn.disabled = true;
      updateBtn.textContent = "Update";
      // updateBtn.addEventListener("submit", updateRunItem);
      async function updateRunItem(e) {
        try {
          e.stopImmediatePropagation();
          e.preventDefault();

          couponUpdateFunction();
          function couponUpdateFunction() {
            if (couponCheckBox.checked) {
              couponCheckBox.value = "Coupons";
            } else {
              couponCheckBox.value = "";
            }
          }
          canadianUpdateFunction();
          function canadianUpdateFunction() {
            if (canadianCheckBox.checked) {
              canadianCheckBox.value = "Canadian";
            } else {
              canadianCheckBox.value = "";
            }
          }
          splitUpdateFunction();
          function splitUpdateFunction() {
            if (splitCheckBox.checked) {
              splitCheckBox.value = "Split";
            } else {
              splitCheckBox.value = "";
            }
          }
        } catch (err) {
          console.error(err);
        }

        //? [x] Pushing batch li values to empty [] to use in res.body update btn
        const batchLiArr = [];
        batchLiLoop();
        function batchLiLoop() {
          if (batchSizeListOrderedList.childNodes.length > 0) {
            //3
            batchSizeListOrderedList.childNodes.forEach((node) => {
              batchLiArr.push(node.children[0].value); // <input id="uuid-batch-size-list">.value
            });
          }
        }
        try {
          const body = {
            line: "line_1",
            run_id: run.run_id,
            run_order: `${runSequenceInput.value}`,
            num_batches: `${runNumInput.value}`,
            product_type: `${fragranceSelect.value}`,
            oz: `${canSizeSelect.value}`,
            coupons: `${couponCheckBox.value}`,
            canadian: `${canadianCheckBox.value}`,
            split: `${splitCheckBox.value}`,
            // run_note: splitCheckBox.value,
            batch_size_li_1: batchLiArr[0],
            batch_size_li_2: batchLiArr[1],
            batch_size_li_3: batchLiArr[2],
            batch_size_li_4: batchLiArr[3],
            batch_size_li_5: batchLiArr[4],
            batch_size_li_6: batchLiArr[5],
            batch_size_li_7: batchLiArr[6],
            batch_size_li_8: batchLiArr[7],
            batch_size_li_9: batchLiArr[8],
            batch_size_li_10: batchLiArr[9],
          };

          // ************************** Local Storage Reducer Function
          const jsonDb = JSON.parse(localStorage.getItem("jsonDb"));
          reducer(jsonDb, { type: ACTIONS.UPDATE_RUN, payload: body });
          // ******************************************

          line1MenuItem.dispatchEvent(clickEvent);

          // const response = await fetch(
          //   `${httpAddress}:${httpPort}/line1-runs/${runSequenceInput.value}`,
          //   {
          //     method: "PUT",
          //     headers: { "Content-Type": "application/json" },
          //     body: JSON.stringify(body),
          //   }
          // );
          // if (response.ok) {
          //   const updateBtn = document.getElementById(`${run.run_id}`);
          //   updateBtn.disabled = true;
          // } else {
          //   alert("Try to update run again");
          // }
        } catch (err) {
          console.error(err.message);
        }
      }
      btncontainer.appendChild(updateBtn);

      //? [] delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.className =
        "uk-button uk-button-danger uk-width-1-2 run-delete";
      deleteBtn.setAttribute("type", "submit");
      deleteBtn.disabled = false;
      deleteBtn.textContent = "Delete";
      btncontainer.appendChild(deleteBtn);
      deleteBtn.addEventListener("click", deleteRunItem);
      //? [] deletes run by run order value
      async function deleteRunItem(e) {
        try {
          e.stopImmediatePropagation();
          e.preventDefault();

          const body = {
            line: "line_1",
            run_id: `${run.run_id}`,
          };
          // ************************** Local Storage Reducer Function
          const jsonDb = JSON.parse(localStorage.getItem("jsonDb"));
          reducer(jsonDb, { type: ACTIONS.DELETE_RUN, payload: body });
          // ******************************************

          line1MenuItem.dispatchEvent(clickEvent);
          // const options = {
          //   method: "DELETE",
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          // };

          // const response = await fetch(
          //   `${httpAddress}:${httpPort}/line1-runs/${runSequenceInput.value}`,
          //   options
          // );
          // try {
          //   if (response.ok) {
          //     const updateBtn = document.getElementById(`${run.run_id}`);
          //     updateBtn.disabled = true;
          //     document.querySelector(`.uuid${run.run_id}`).style.display = "none";
          //   } else {
          //     alert("Try to Delete run again");
          //   }
          // }
          // catch (err) {
          //   console.error(err.message);
          // }
        } catch (err) {
          console.error(err);
        }
      }
    });
  } catch (err) {
    console.error(err.message);
  }
}

export default l1AppGetList;
