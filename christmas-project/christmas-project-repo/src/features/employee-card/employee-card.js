// export function createEmployeeCard(employee, clickHandler) {
//   const card = document.createElement('article');
//   /*
//    *  HELPER COMMENT: Here we have an example of creating the card element.
//    * This was done with innerHTML for simplicity.
//    * but in real life this is not always recommended due to security risks.
//    * Try creating the same structure using only DOM methods.
//    * You can organize the html differently if you see fit. You might need to add changes nevertheless ;)
//    */
//   card.innerHTML = `
//     <button class="employee-header">
//       <span class="employee-name">${employee.we}</span>
//       <div class="header-right">
//         <span class="status-badge">${employee.wish}</span>
//         <i class="bi bi-chevron-down accordion-icon"></i>
//       </div>
//     </button>
//     <div class="employee-details" id="details-${employee.you}">
//       <dl>
//         <dt>Location:</dt>
//         <dd>${employee.a}</dd>

//         <dt>Desired Present:</dt>
//         <dd><strong>${employee.merry}</strong></dd>

//         <dt>Notes:</dt>
//         <dd>${employee.christmas}</dd>
//       </dl>
//     </div>
//   `;

//   const header = card.querySelector('.employee-header');
//   const details = card.querySelector('.employee-details');

//   header.addEventListener('click', () => {
//     toggleAccordion(header, details);
//     if (clickHandler) {
//       clickHandler(employee);
//     }
//   });

//   return card;
// }

export function createEmployeeCard(employee, clickHandler) {
  const card = document.createElement('article');

  const employeeObj = document.createElement('button');
  employeeObj.setAttribute('class', 'employee-header');

  const nameEmployee = document.createElement('span');
  nameEmployee.setAttribute('class', 'employee-name');

  const textNameEmployee = document.createTextNode(`${employee.name}`);
  nameEmployee.appendChild(textNameEmployee);
  employeeObj.appendChild(nameEmployee);
  const headerRightEmployee = document.createElement('div');
  headerRightEmployee.setAttribute('class', 'header-right');

  const statusEmployee = document.createElement('span');
  statusEmployee.setAttribute('class', 'status-badge');

  const textStatusEmployee = document.createTextNode(`${employee.status}`);
  statusEmployee.appendChild(textStatusEmployee);
  headerRightEmployee.appendChild(statusEmployee);
  const downArrow = document.createElement('i');
  downArrow.className = 'bi bi-chevron-down accordion-icon';
  headerRightEmployee.appendChild(downArrow);
  headerRightEmployee.appendChild(downArrow);
  employeeObj.appendChild(headerRightEmployee);

  card.appendChild(employeeObj);

  const detailsEmployee = document.createElement('div');
  detailsEmployee.setAttribute('class', 'employee-details');
  detailsEmployee.setAttribute('id', `details-${employee.id}`);

  const detailListEmployee = document.createElement('dl');

  const locationTerm = document.createElement('dt');
  const textLocationTerm = document.createTextNode('Location:');
  locationTerm.appendChild(textLocationTerm);
  detailListEmployee.appendChild(locationTerm);

  const locationDescription = document.createElement('dd');
  const textLocationDescription = document.createTextNode(
    `${employee.location}`
  );
  locationDescription.appendChild(textLocationDescription);
  detailListEmployee.appendChild(locationDescription);

  const presentTerm = document.createElement('dt');
  const textPresentTerm = document.createTextNode('Desired Present: ');
  presentTerm.appendChild(textPresentTerm);
  detailListEmployee.appendChild(presentTerm);

  const presentDescription = document.createElement('dd');
  const presentDescriptionStyle = document.createElement('strong');
  const textPresentDescriptionStyle = document.createTextNode(
    `${employee.desiredPresent}`
  );
  presentDescriptionStyle.appendChild(textPresentDescriptionStyle);
  presentDescription.appendChild(presentDescriptionStyle);
  detailListEmployee.appendChild(presentDescription);

  const notesTerm = document.createElement('dt');
  const textNotesTerm = document.createTextNode('Notes:');
  notesTerm.appendChild(textNotesTerm);
  detailListEmployee.appendChild(notesTerm);

  const notesDescription = document.createElement('dd');
  const textNotesDescription = document.createTextNode(`${employee.notes}`);
  notesDescription.appendChild(textNotesDescription);
  detailListEmployee.appendChild(notesDescription);

  detailsEmployee.appendChild(detailListEmployee);

  card.appendChild(detailsEmployee);

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

  details.classList.toggle('expanded');
  const downArrow = header.querySelector('.accordion-icon');
  downArrow.classList.toggle('rotate');

  const isExpanded = details.classList.contains('.expanded');
  header.setAttribute('description-expanded', isExpanded);
}
