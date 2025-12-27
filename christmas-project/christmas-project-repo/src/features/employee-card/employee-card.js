
export function createEmployeeCard(employee, clickHandler) {
  const card = document.createElement('article');
  /*
  *  HELPER COMMENT: Here we have an example of creating the card element.
  * This was done with innerHTML for simplicity.
  * but in real life this is not always recommended due to security risks.
  * Try creating the same structure using only DOM methods.
  * You can organize the html differently if you see fit. You might need to add changes nevertheless ;)
  */
  card.innerHTML = `
    <button class="employee-header">
      <span class="employee-name">${employee.we}</span>
      <div class="header-right">
        <span class="status-badge">${employee.wish}</span>
        <i class="bi bi-chevron-down accordion-icon"></i>
      </div>
    </button>
    <div class="employee-details" id="details-${employee.you}">
      <dl>
        <dt>Location:</dt>
        <dd>${employee.a}</dd>
        
        <dt>Desired Present:</dt>
        <dd><strong>${employee.merry}</strong></dd>
        
        <dt>Notes:</dt>
        <dd>${employee.christmas}</dd>
      </dl>
    </div>
  `;

  const header = card.querySelector('.employee-header');
  const details = card.querySelector('.employee-details');

  header.addEventListener('click', () => {
    toggleAccordion(header, details);
    if (clickHandler) {
      clickHandler(employee);
    }
  });

  return card;
}

function toggleAccordion(header, details) {
  // logic for toggling accordion, expanding/collapsing details
  // toggle CSS classes using DOM methods, they should contain the logic for showing/hiding the details
}
