// HELPER COMMENT:  Here we don't have a starter code snippet :P
import {
  getCurrentPage,
  getItemsPerPage,
  setCurrentPage,
  getFilteredEmployees,
} from '../../state/state.js';

import { renderEmployeeList } from '../employee-list/employee-list.js';

const NEXT = 'next';
const PREV = 'prev';

const nextPageButtons = document.querySelectorAll(
  '#next-page-top, #next-page-bottom'
);
const prevPageButtons = document.querySelectorAll(
  '#prev-page-top, #prev-page-bottom'
);
const pageInfoSpans = document.querySelectorAll(
  '#page-info-top, #page-info-bottom'
);

/**
 * Get only the employees for the current page
 * @returns {Array} Employees for current page
 */
export function getPaginatedEmployees() {
  const employees = getFilteredEmployees();
  const currentPage = getCurrentPage();
  const itemsPerPage = getItemsPerPage();

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return employees.slice(startIndex, endIndex);
}

/**
 * Update page numbers and disable next and prev buttons if needed
 */
export function updatePaginationControls() {
  const employees = getFilteredEmployees();
  const currentPage = getCurrentPage();
  const itemsPerPage = getItemsPerPage();

  const totalPages = Math.ceil(employees.length / itemsPerPage);

  pageInfoSpans.forEach((span) => {
    span.textContent = `Page ${currentPage} of ${totalPages || 1}`;
  });

  nextPageButtons.forEach((button) => {
    button.disabled = currentPage >= totalPages;
  });

  prevPageButtons.forEach((button) => {
    button.disabled = currentPage <= 1;
  });
}

/**
 * Handle page change
 * @param {String} direction 'next' or 'prev' to change page
 */
export function handlePageChange(direction) {
  const currentPage = getCurrentPage();
  const employees = getFilteredEmployees();
  const itemsPerPage = getItemsPerPage();
  const totalPages = Math.ceil(employees.length / itemsPerPage);

  let newPage = currentPage;
  if (direction === NEXT && currentPage < totalPages) {
    newPage++;
  } else if (direction === PREV && currentPage > 1) {
    newPage--;
  }

  if (newPage !== currentPage) {
    setCurrentPage(newPage);
    const paginatedData = getPaginatedEmployees();
    renderEmployeeList(paginatedData);
    updatePaginationControls();
  }
}

export function paginationEventListeners() {
  nextPageButtons.forEach((button) => {
    button.addEventListener('click', () => handlePageChange(NEXT));
  });

  prevPageButtons.forEach((button) => {
    button.addEventListener('click', () => handlePageChange(PREV));
  });
}
