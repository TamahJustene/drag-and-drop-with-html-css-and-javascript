window.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item");
  const container1 = document.getElementById("container1");
  const container2 = document.getElementById("container2");
  const successMessage = document.getElementById("successMessage");
  const resetButton = document.getElementById("resetButton");

  let draggedItem = null;

  // Add event listeners for drag events on items
  items.forEach((item) => {
    item.addEventListener("dragstart", handleDragStart);
    item.addEventListener("dragend", handleDragEnd);
  });

  // Add event listeners for drop events on containers
  container1.addEventListener("dragover", handleDragOver);
  container1.addEventListener("drop", handleDrop);
  container2.addEventListener("dragover", handleDragOver);
  container2.addEventListener("drop", handleDrop);

  // Add event listener for reset button
  resetButton.addEventListener("click", handleReset);

  function handleDragStart(event) {
    draggedItem = this;
    this.classList.add("dragging");
  }

  function handleDragEnd() {
    this.classList.remove("dragging");
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event) {
    event.preventDefault();
    this.appendChild(draggedItem);
    draggedItem = null;
    successMessage.textContent = "Item dropped successfully!";
  }

  function handleReset() {
    container1.appendChild(container2.firstElementChild);
    successMessage.textContent = "";
  }
});
