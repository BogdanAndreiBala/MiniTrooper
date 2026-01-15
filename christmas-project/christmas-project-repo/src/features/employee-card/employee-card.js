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
  statusEmployee.classList.add(`${employee.status}-badge`);

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

  const isExpanded = details.classList.toggle('expanded');

  const downArrow = header.querySelector('.accordion-icon');
  downArrow.classList.toggle('rotate');

  header.setAttribute('description-expanded', isExpanded);
}
