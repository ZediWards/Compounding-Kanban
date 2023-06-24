// import jsonDb from "../jsonDb";

// !!!!!!! Transfered raw code into getTanks function
// don't know why 4-17-23

function tankModal() {
  // await getTanks;

  try {
    const infoIconSpan = document.createElement("span");
    infoIconSpan.className = "info-unicode modal-btn";
    infoIconSpan.textContent = "🛈";
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
    modalHeaderHeading.textContent = `${tank.dom_target}`; // Parameter??????????????????????
    modalHeader.appendChild(modalHeaderHeading);

    const closeBtnSpan = document.createElement("span");
    closeBtnSpan.className = "close-btn";
    closeBtnSpan.textContent = "&times;"; // UniCode in JS work?
    modalHeader.appendChild(closeBtnSpan);

    // Form Container
    const formContainer = document.createElement("div");
    formContainer.className = "svg-form-container";
    modalContent.appendChild(formContainer);

    // SVG **hard coded but hidden. js appends to container and takes off hidden class**
    const svg = document.querySelector(`.${tank.dom_target}-svg`); //tank-#-svg
    formContainer.appendChild(svg);
    svg.className = `tank-svg ${tank.dom_target}-svg`;

    // Right Container
    const rightModalContainer = document.createElement("div");
    rightModalContainer.className = "right-modal-container";
    formContainer.appendChild(rightModalContainer);

    // Counter container
    const counterContainer = document.createElement("div");
    counterContainer.className = "counter-container";
    rightModalContainer.appendChild(counterContainer);

    // Couter Container heading
    const counterContainerHeading = document.createElement("h4");
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
    rightModalContainer.appendChild(modalForm);

    // Coder number
    const coderNumContainer = document.createElement("div");
    coderNumContainer.className = "uk-margin";
    modalForm.appendChild(coderNumContainer);

    const coderNumLabel = document.createElement("label");
    coderNumLabel.className = "t1-can-coder uk-form-label";
    coderNumLabel.setAttribute("for", "t1-can-coder"); // att set correctly?
    coderNumContainer.appendChild(coderNumLabel);

    const coderNumLabelHeading = document.createElement("h4");
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

    const canSizesLabelHeading = document.createElement("h4");
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
    // const canSizesArr = [
    //   "",
    //   2,
    //   2.25,
    //   2.85,
    //   5,
    //   6,
    //   7,
    //   7.25,
    //   8,
    //   8.75,
    //   9.5,
    //   10,
    //   10.5,
    //   10.88,
    //   11,
    // ];

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
      modalFormButton.appendChild(paraElement);
    });
  } catch (err) {
    console.error(err.message);
  }
}

export default tankModal;
