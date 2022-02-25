let color = document.getElementById("color");
let mode = document.getElementById("mode");
const btnColor = document.getElementById("btn-color");
const bottomWrapper = document.querySelector(".bottom");

btnColor.addEventListener("click", generateColors);

//Fetch colors from API as input and select values change

async function getColors() {
  let modeColor = mode.value;
  let hexColor = color.value.slice(1);
  const URL = `https://www.thecolorapi.com/scheme?hex=${hexColor}&mode=${modeColor}&count=5`;

  const response = await fetch(URL);
  const data = await response.json();
  return data.colors;
}

// Function to Generate HTML with background colors for the page

async function generateColors() {
  const allColors = await getColors();

  bottomWrapper.innerHTML = allColors
    .map((color) => {
      const { hex } = color;
      return `
        <div class="color-box">
          <div style="background:${hex.value}" class="color"></div>
          <div>${hex.value}</div>
        </div>
        `;
    })
    .join("");
}
