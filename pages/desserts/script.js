function updatePreview() {
  const base = document.getElementById("base-select").value;
  const filling = document.getElementById("filling-select").value;
  const topping = document.getElementById("topping-select").value;
  const sauce = document.getElementById("sauce-select").value;

  const preview = document.getElementById("dessert-preview");

  if (
    base === "none" &&
    filling === "none" &&
    topping === "none" &&
    sauce === "none"
  ) {
    preview.innerHTML =
      "<p>Your dessert will appear here as you select options.</p>";
  } else {
    preview.innerHTML = `
        <p><strong>Base:</strong> ${base === "none" ? "Not selected" : base}</p>
        <p><strong>Filling:</strong> ${
          filling === "none" ? "Not selected" : filling
        }</p>
        <p><strong>Topping:</strong> ${
          topping === "none" ? "Not selected" : topping
        }</p>
        <p><strong>Sauce:</strong> ${
          sauce === "none" ? "Not selected" : sauce
        }</p>
      `;
  }
}
