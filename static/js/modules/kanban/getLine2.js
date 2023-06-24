// import jsonDb from "../jsonDb.js";
import { addListeners, addListenerOut } from "./tooltip.js";

const getLine2Runs = async () => {
  // ************** USING LOCAL STORAGE **************************
  const jsonDb = JSON.parse(localStorage.getItem("jsonDb"));
  // ************************************************************
  try {
    // represents line2 table in Compounding database
    console.table(jsonDb.line2Runs);

    const sortLine2Runs = jsonDb.line2Runs.sort((a, b) =>
      a.run_order > b.run_order ? 1 : -1
    );
    const line2SortedRuns = sortLine2Runs.map((run) => {
      const l2Runs = document.querySelector(".l2-runs-inner");

      const sequenceCardContainer = document.createElement("div");
      sequenceCardContainer.className = "sequence-card-container";
      l2Runs.appendChild(sequenceCardContainer);

      const card = document.createElement("div");
      card.className = "sequence-card tooltip-btn";
      sequenceCardContainer.appendChild(card);

      // Run-details box and contents
      const runDetails = document.createElement("div");
      runDetails.className = "run-details";
      card.appendChild(runDetails);

      const ozSpan = document.createElement("span");
      ozSpan.className = "oz";
      ozSpan.textContent = `${run.oz}oz`;
      runDetails.appendChild(ozSpan);

      const couponsSpan = document.createElement("span");
      couponsSpan.className = "coupons";
      couponsSpan.textContent = `${run.coupons}`;
      runDetails.appendChild(couponsSpan);

      const canadianSpan = document.createElement("span");
      canadianSpan.className = "canadian";
      canadianSpan.textContent = `${run.canadian}`;
      runDetails.appendChild(canadianSpan);

      const splitSpan = document.createElement("span");
      splitSpan.className = "split";
      splitSpan.textContent = `${run.split}`;
      runDetails.appendChild(splitSpan);

      // const runNoteSpan = document.createElement("span");
      // runNoteSpan.className = "run-note";
      // runNoteSpan.textContent = `${run.run_note}`;
      // runDetails.appendChild(runNoteSpan);

      // Num-Frag box and contents
      const numFrag = document.createElement("div");
      numFrag.className = "num-frag";
      card.appendChild(numFrag);

      const numFragP = document.createElement("p");
      numFragP.textContent = `${run.num_batches}`;
      numFrag.appendChild(numFragP);

      const flavorRunContainer = document.createElement("div");
      flavorRunContainer.className = "flavor-run-container";
      numFrag.appendChild(flavorRunContainer);

      const flavorP = document.createElement("p");
      flavorP.className = "flavor-p";
      flavorP.textContent = run.product_type;
      flavorRunContainer.appendChild(flavorP);
      switch (`${run.product_type}`) {
        // Blank select option
        case "":
          numFrag.className = "num-frag";
          break;
        // Flavors
        case "Blueberry":
          numFrag.className = "num-frag blueberry-gradient";
          break;
        case "Citrus":
          numFrag.className = "num-frag citrus-gradient";
          break;
        case "Kiwi":
          numFrag.className = "num-frag kiwi-gradient";
          break;
        case "Strawberry":
          numFrag.className = "num-frag strawberry-gradient";
          break;

        default:
          console.error(`setting l2-runs flavor gradient went wrong:(`);
      }

      //***************** */ Batch size list on hover ******************
      const batchSizesDiv = document.createElement("div");
      batchSizesDiv.className = "modal-tooltip";
      sequenceCardContainer.appendChild(batchSizesDiv);

      const batchSizeListHeader = document.createElement("p");
      batchSizeListHeader.className = "text-centered zero-bottom-margin";
      batchSizeListHeader.textContent = "Batch Sizes";
      batchSizesDiv.appendChild(batchSizeListHeader);

      const batchSizeOrderedList = document.createElement("ol");
      batchSizeOrderedList.className = "small-top-margin";
      batchSizesDiv.appendChild(batchSizeOrderedList);

      const batchSizeLi1 = document.createElement("li");
      batchSizeLi1.textContent = `${run.batch_size_li_1}`;

      const batchSizeLi2 = document.createElement("li");
      batchSizeLi2.textContent = `${run.batch_size_li_2}`;

      const batchSizeLi3 = document.createElement("li");
      batchSizeLi3.textContent = `${run.batch_size_li_3}`;

      const batchSizeLi4 = document.createElement("li");
      batchSizeLi4.textContent = `${run.batch_size_li_4}`;

      const batchSizeLi5 = document.createElement("li");
      batchSizeLi5.textContent = `${run.batch_size_li_5}`;

      const batchSizeLi6 = document.createElement("li");
      batchSizeLi6.textContent = `${run.batch_size_li_6}`;

      const batchSizeLi7 = document.createElement("li");
      batchSizeLi7.textContent = `${run.batch_size_li_7}`;

      const batchSizeLi8 = document.createElement("li");
      batchSizeLi8.textContent = `${run.batch_size_li_8}`;

      const batchSizeLi9 = document.createElement("li");
      batchSizeLi9.textContent = `${run.batch_size_li_9}`;

      const batchSizeLi10 = document.createElement("li");
      batchSizeLi10.textContent = `${run.batch_size_li_10}`;

      const batchSizeLiArray = [
        batchSizeLi1.textContent,
        batchSizeLi2.textContent,
        batchSizeLi3.textContent,
        batchSizeLi4.textContent,
        batchSizeLi5.textContent,
        batchSizeLi6.textContent,
        batchSizeLi7.textContent,
        batchSizeLi8.textContent,
        batchSizeLi9.textContent,
        batchSizeLi10.textContent
      ];

      batchSizeLiArray
        .filter((li) => li !== "null")
        .filter((li) => li !== "undefined")
        .forEach((li) => {
          const filteredLi = document.createElement("li");
          filteredLi.textContent = `${li}`;
          batchSizeOrderedList.appendChild(filteredLi);
        });
    });

    // awaiting .map to get done to apply listeners on what it created
    const waitingToAddListeners = async function () {
      await line2SortedRuns;
      addListeners();
      addListenerOut();
    };
    waitingToAddListeners();
  } catch (err) {
    console.error(err.message);
  }
};

export default getLine2Runs;
