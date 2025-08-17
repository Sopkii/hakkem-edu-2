"use strict";
const maritalRadios = document.querySelectorAll('input[name="marital"]');
const thirdLine = document.querySelector(".third-line");
const createElementt = (attr, typee, placeholderr) => {
  attr.type = typee;
  attr.placeholder = placeholderr;
  attr.style.width = "100%";
  attr.style.margin = "8px 0";
  attr.style.padding = "10px";
  attr.style.border = "2px solid #d1d5db";
  attr.style.height = "44px";
  attr.addEventListener("focus", () => attr.classList.add("focused"));
  attr.addEventListener("blur", () => attr.classList.remove("focused"));
};
maritalRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    console.log(radio.value);

    thirdLine.innerHTML = "";

    if (radio.value === "married") {
      const wifeInput = document.createElement("input");
      createElementt(wifeInput, "text", "Wife Name");

      const childrenInput = document.createElement("input");
      createElementt(childrenInput, "number", "Number of Children");

      thirdLine.appendChild(wifeInput);
      thirdLine.appendChild(childrenInput);
    } else if (radio.value === "single") {
      thirdLine.innerHTML = "";
    }
  });
});

const governorateSelect = document.querySelector("#governorate");
const forthLine = document.querySelector(".forth-line");

governorateSelect.addEventListener("change", () => {
  forthLine.innerHTML = "";
  if (!governorateSelect.value) return;

  const areaInput = document.createElement("input");
  createElementt(areaInput, "text", "Area");
  forthLine.appendChild(areaInput);

  areaInput.addEventListener("input", () => {
    if (
      areaInput.value.trim() &&
      !forthLine.querySelector('input[placeholder="Street Name"]')
    ) {
      const streetInput = document.createElement("input");
      createElementt(streetInput, "text", "Street Name");
      forthLine.appendChild(streetInput);

      streetInput.addEventListener("input", () => {
        if (
          streetInput.value.trim() &&
          !forthLine.querySelector('input[placeholder="Building Number"]')
        ) {
          const buildingInput = document.createElement("input");
          createElementt(buildingInput, "text", "Building Number");
          forthLine.appendChild(buildingInput);
        }
      });
    }
  });
});

const btnReset = document.querySelector(".btn-reset");
const inputs = document.querySelectorAll("input");

btnReset.addEventListener("click", () => {
  forthLine.innerHTML = "";
  thirdLine.innerHTML = "";
  inputs.forEach((x) => {
    if (x.type !== "radio") {
      x.textContent = "";
      x.value = "";
    }
  });
});
