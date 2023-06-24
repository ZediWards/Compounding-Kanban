import { updateModal } from "./tank-levels.js";
// import jsonDb from "../jsonDb.js";
// import {showTankModal} from "./tank-levels.js"
// import tankModal from "./tankModal.js"
const getStuff = async function () {
  // ************** USING LOCAL STORAGE **************************
  const jsonDb = JSON.parse(window.localStorage.getItem("jsonDb"));
  // ************************************************************
  try {
    // represents tanks table in Compounding database
    console.table(jsonDb.tanks);

    const tanks = jsonDb.tanks.map((tank) => {
      let tankBox = document.querySelector(`#${tank.dom_target}`);
      if (tank.stage === "Chilling") {
        tankBox.classList.add("chilling-styles");
      }

      // header
      let header = document.createElement("header");
      header.className = "tank-box-header";
      let h6 = document.createElement("h2");
      h6.className = "tank-num";
      h6.textContent = `Tank ${tank.tank_num}`;
      header.appendChild(h6);
      tankBox.appendChild(header);

      // // tank modal RAW CODE
      const infoIconSpan = document.createElement("span");
      infoIconSpan.className = "info-unicode modal-btn";
      infoIconSpan.textContent = "🛈";
      // infoIconSpan.textContent = "⚙";
      header.appendChild(infoIconSpan);

      const modal = document.createElement("div");
      modal.className = "modal";
      header.appendChild(modal);

      const modalContent = document.createElement("div");
      modalContent.className = "modal-content";
      modal.appendChild(modalContent);

      // Header
      const modalHeader = document.createElement("header");
      modalHeader.className = "t1-modal-header";
      modalContent.appendChild(modalHeader);

      const modalHeaderHeading = document.createElement("h2");
      modalHeaderHeading.className = "tank-modal-header-heading";
      modalHeaderHeading.textContent = `Tank ${tank.tank_num}`; // Parameter??????????????????????
      modalHeader.appendChild(modalHeaderHeading);

      const closeBtnSpan = document.createElement("span");
      closeBtnSpan.className = "close-btn";
      closeBtnSpan.textContent = "X"; // UniCode in JS work?...doesn't seem like it &times;  LESSON: to recenter what it offcentered set that side margin to neg its size
      modalHeader.appendChild(closeBtnSpan);

      // Form Container
      const formContainer = document.createElement("div");
      formContainer.className = "svg-form-container";
      modalContent.appendChild(formContainer);

      // !!!!!**** LESSON LEARDEN... move a hidden hard coded object then remove hidden class to reveal where you want it to be **********!!!!!!!!!!!!!
      // // SVG **hard coded but hidden. js appends to container and takes off hidden class**
      const svg = document.querySelector(`.${tank.dom_target}-svg`); //tank-#-svg
      const svgLocationTarget =
        svg.nextElementSibling.children[2].children[0].children[1];
      svgLocationTarget.appendChild(svg);
      svg.classList.remove("hidden");

      // changing the .stop1 etc colors based on flavor
      const grandient = svg.querySelector("linearGradient");
      const bottomColumn = grandient.querySelector(
        `.${tank.dom_target}-bottom-column`
      );
      const topOfColumn = grandient.querySelector(
        `.${tank.dom_target}-top-column`
      );
      const headSpace = grandient.querySelector(
        `.${tank.dom_target}-head-space`
      );
      const theVStopColor = svg.querySelector(`#${tank.dom_target}-theV`);

      switch (`${tank.product_type}`) {
        // Blank select option
        case "":
          theVStopColor.style.fill = "transparent";
          bottomColumn.style.stopColor = "transparent";
          topOfColumn.style.stopColor = "transparent";
          headSpace.style.stopColor = "transparent";
          break;
        // Flavors
        case "Blueberry":
          theVStopColor.style.fill = "rgba(79, 134, 247, 75%)";
          bottomColumn.style.stopColor = "rgba(79, 134, 247, 75%)";
          topOfColumn.style.stopColor = "rgba(79, 134, 247, 15%)";
          headSpace.style.stopColor = "transparent";
          break;
        case "Citrus":
          theVStopColor.style.fill = "rgba(255, 255, 159, 75%)";
          bottomColumn.style.stopColor = "rgba(255, 255, 159, 75%)";
          topOfColumn.style.stopColor = "rgba(255, 255, 159, 15%)";
          headSpace.style.stopColor = "transparent";
          break;
        case "Kiwi":
          theVStopColor.style.fill = "rgba(122, 150, 15, 75%)";
          bottomColumn.style.stopColor = "rgba(122, 150, 15, 75%)";
          topOfColumn.style.stopColor = "rgba(122, 150, 15, 15%)";
          headSpace.style.stopColor = "transparent";
          break;
        case "Strawberry":
          theVStopColor.style.fill = "rgba(196, 62, 74, 75%)";
          bottomColumn.style.stopColor = "rgba(196, 62, 74, 75%)";
          topOfColumn.style.stopColor = "rgba(196, 62, 74, 15%)";
          headSpace.style.stopColor = "transparent";
          break;

        default:
          console.error(`Something went wrong:(`);
      }

      // const svgLocationTarget = svg.nextElementSibling
      // formContainer.appendChild(svg);

      // Right Container
      const rightModalContainer = document.createElement("div");
      rightModalContainer.className = "right-modal-container";
      formContainer.appendChild(rightModalContainer);

      // Counter container
      const counterContainer = document.createElement("div");
      counterContainer.className = "counter-container";
      rightModalContainer.appendChild(counterContainer);

      // Couter Container heading
      const counterContainerHeading = document.createElement("p");
      counterContainerHeading.className = "change-over-heading";
      counterContainerHeading.textContent = "Change Over Time Estimate :";
      counterContainer.appendChild(counterContainerHeading);

      // Counter container p
      const counterContainerPara = document.createElement("p");
      counterContainerPara.className = "change-over-time";
      counterContainer.appendChild(counterContainerPara);

      // Form
      const modalForm = document.createElement("form");
      modalForm.className = "tank-modal-form uk-form-stacked";
      modalForm.addEventListener("submit", function (e) {
        updateModal(e, tank.dom_target);
      });
      rightModalContainer.appendChild(modalForm);

      // Coder number
      const coderNumContainer = document.createElement("div");
      coderNumContainer.className = "uk-margin";
      modalForm.appendChild(coderNumContainer);

      const coderNumLabel = document.createElement("label");
      coderNumLabel.className = "t1-can-coder uk-form-label";
      coderNumLabel.setAttribute("for", "t1-can-coder"); // att set correctly?
      coderNumContainer.appendChild(coderNumLabel);

      const coderNumLabelHeading = document.createElement("p");
      coderNumLabelHeading.className = "can-coder-label";
      coderNumLabelHeading.textContent = "Can Coder Number";
      coderNumLabel.appendChild(coderNumLabelHeading);

      const coderNumInput = document.createElement("input");
      coderNumInput.className = "uk-input module-input can-coder-input";
      coderNumInput.id = "t1-can-coder"; // id set correctly?
      coderNumInput.setAttribute("type", "text");
      coderNumInput.setAttribute("name", "t1-can-coder");
      coderNumContainer.appendChild(coderNumInput);

      // Can sizes
      const canSizesContainer = document.createElement("div");
      canSizesContainer.className = "uk-margin";
      modalForm.appendChild(canSizesContainer);

      const canSizesLabel = document.createElement("label");
      canSizesLabel.className = "t1-can-size uk-form-label";
      canSizesLabel.setAttribute("for", "t1-can-size"); // att set correctly?
      canSizesContainer.appendChild(canSizesLabel);

      const canSizesLabelHeading = document.createElement("p");
      canSizesLabelHeading.className = "can-size-label";
      canSizesLabelHeading.textContent = "Can Size";
      canSizesLabel.appendChild(canSizesLabelHeading);

      const canSizesSelectContainer = document.createElement("div");
      canSizesSelectContainer.className = "uk-form-controls";
      canSizesContainer.appendChild(canSizesSelectContainer);

      const canSizesSelect = document.createElement("select");
      canSizesSelect.className = "uk-select module-input can-size-input";
      canSizesSelect.id = "t1-can-size"; // id set correctly?
      canSizesSelectContainer.appendChild(canSizesSelect);

      // LESSON LEARNED

      // ****************************************** using local storage to pull in can sizes
      const canSizes = jsonDb.canData.map((can) => {
        return can.size;
      });
      const canSizeSelectArr = canSizes.unshift("");
      // ***********************************************************88
      const canSizesSelectOptions = canSizes.map((size) => {
        const option = document.createElement("option");
        option.textContent = `${size}`;
        canSizesSelect.appendChild(option);
      });

      const modalFormButton = document.createElement("button");
      modalFormButton.className =
        "modal-update-btn uk-button uk-width-1-1 uk-button-primary uk-button-small";
      modalFormButton.setAttribute("type", "submit"); // att set correctly?
      modalFormButton.setAttribute("disabled", "true"); // att set correctly?
      modalForm.appendChild(modalFormButton);
      // LESSON LEARNED
      const buttonParagraphs = ["Update Tank Level", "&", "Change Over Time"];
      const modalFormButtonParagraphs = buttonParagraphs.map((para) => {
        const paraElement = document.createElement("p");
        paraElement.textContent = `${para}`;
        paraElement.className = "modal-btn-p";
        modalFormButton.appendChild(paraElement);
      });

      // inside container
      let tankInsideBox = document.createElement("div");
      tankInsideBox.className = "tank-box-inside-container";

      // left
      let leftBox = document.createElement("div");
      leftBox.className = "left";
      let flavorName = document.createElement("p");
      flavorName.className = "flavorName";
      flavorName.textContent = tank.product_type;

      switch (`${tank.product_type}`) {
        // Blank select option
        case "":
          tankInsideBox.className = "tank-box-inside-container";
          break;
        // Flavors
        case "Blueberry":
          tankInsideBox.className =
            "tank-box-inside-container blueberry-gradient";
          break;
        case "Citrus":
          tankInsideBox.className = "tank-box-inside-container citrus-gradient";
          break;
        case "Kiwi":
          tankInsideBox.className = "tank-box-inside-container kiwi-gradient";
          break;
        case "Strawberry":
          tankInsideBox.className =
            "tank-box-inside-container strawberry-gradient";
          break;

        default:
          console.error(`Something went wrong:(`);
      }

      leftBox.appendChild(flavorName);
      tankInsideBox.appendChild(leftBox);

      // right
      let right = document.createElement("div");
      right.className = "right";

      // top box and contents
      let topBox = document.createElement("div");
      topBox.className = "top";
      right.appendChild(topBox);

      let notes1P = document.createElement("p");
      notes1P.className = "notes-1";
      notes1P.textContent = `${tank.note_1}`;
      topBox.appendChild(notes1P);
      notes1PCheck();
      function notes1PCheck() {
        if (notes1P.textContent === "") {
          notes1P.style.display = "none";
          notes1P.style.backgroundColor = "none";
          notes1P.style.border = "none";
        } else {
          return;
        }
      }

      let theV = document.createElement("p");
      theV.className = "note-3";
      theV.textContent = `${tank.the_v}`;
      topBox.appendChild(theV);
      theVCheck();
      function theVCheck() {
        if (theV.textContent === "") {
          theV.style.display = "none";
          theV.style.backgroundColor = "none";
          theV.style.border = "none";
        } else {
          return;
        }
      }

      let notes2P = document.createElement("p");
      notes2P.className = "notes-2";
      notes2P.textContent = `${tank.note_2}`;
      topBox.appendChild(notes2P);
      notes2PCheck();
      function notes2PCheck() {
        if (notes2P.textContent === "") {
          notes2P.style.display = "none";
          notes2P.style.backgroundColor = "none";
          notes2P.style.border = "none";
          // notes2PId.style.backgroundColor = "none";
          // notes2PId.style.border = "none";
        } else {
          return;
        }
      }

      let rightCenteredContainer = document.createElement("div");
      rightCenteredContainer.className = "centered-container";

      let centered = document.createElement("div");
      centered.className = "centered";

      let seqP = document.createElement("p");
      seqP.className = "seq-p";
      seqP.textContent = `${tank.run_sequence}`;

      let stageP = document.createElement("p");
      stageP.className = "stage-p";
      stageP.textContent = `${tank.stage}`;
      // if(tank.stage === "Chilling") {
      //   stageP.classList.add("chilling-styles");
      // }

      centered.appendChild(seqP);
      centered.appendChild(stageP);
      rightCenteredContainer.appendChild(centered);
      right.appendChild(rightCenteredContainer);
      tankInsideBox.appendChild(right);

      // bottom
      let bottomDiv = document.createElement("div");
      bottomDiv.className = "bottom";

      let gallonP = document.createElement("p");
      if (tank.volume === 0) {
        gallonP.textContent = "Gallons:";
      } else {
        gallonP.textContent = `Gallons: ${tank.volume}`;
      }

      let cansP = document.createElement("p");
      if (tank.volume === 0) {
        cansP.textContent = `Cans:     `;
      } else {
        cansP.textContent = `Cans: ${tank.cans}`;
      }

      bottomDiv.appendChild(gallonP);
      bottomDiv.appendChild(cansP);
      right.appendChild(bottomDiv);

      tankBox.appendChild(tankInsideBox);

      // inserting values from the db
      // document.querySelector(".tank-num").textContent = `Tank ${tank.tank-num}`;
      // document.getElementsByClassName(
      //   "seq-p"
      // ).textContent = `${tank.run_sequence}`; //HERE
      // document.getElementsByClassName("stage-p") = `${tank.stage}`;
      // document.getElementsByClassName(
      //   "gallons"
      // ).textContent = `Gal. ${tank.volume}`;
      // document.getElementsByClassName("cans").textContent = `Cans ${tank.cans}`;
    });

    // TODO what is this
    // const waitingToshowTankModal = async function () {
    //   await tanks;
    //   // showTankModal();
    // };

    // waitingToshowTankModal();
  } catch (err) {
    console.error(err.message);
  }
};

export default getStuff;
