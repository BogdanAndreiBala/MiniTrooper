import { createEmployeeCard } from '../employee-card/employee-card.js';
import { updateRecentlyViewedList } from '../recently-viewed/recently-viewed.js';
import { updatePaginationControls } from '../pagination/pagination.js';
import { getFilteredEmployees } from '../../state/state.js';
const employeesListElement = document.getElementById('employees-list');
const resultCountElement = document.getElementById('result-number');

export function renderEmployeeList(employeesList) {
  employeesListElement.innerHTML = '';
  employeesList.forEach((employee) => {
    const card = createEmployeeCard(employee, updateRecentlyViewedList);
    employeesListElement.appendChild(card);
  });

  const totalMatches = getFilteredEmployees().length;
  if (resultCountElement) {
    resultCountElement.textContent = totalMatches;
  }

  updatePaginationControls();
}
