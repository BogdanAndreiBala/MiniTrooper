//  HELPER COMMENT: Example starter code for statistics feature
// you can use the selected elements to do the logic of setting the statistics data
// from state to the view. The HTML elements should already exist and have these ids.

import { getAllEmployees } from '../../state/state.js';

const totalCountSpan = document.getElementById('total-count');
const positiveCountSpan = document.getElementById('positive-count');
const negativeCountSpan = document.getElementById('negative-count');

export function setStatistics() {
  const totalEmployees = getAllEmployees().length;
  const positiveEmployees = getAllEmployees().filter(
    (emp) => emp.status === 'good'
  ).length;
  const negativeEmployees = getAllEmployees().filter(
    (emp) => emp.status === 'naughty'
  ).length;

  totalCountSpan.textContent = totalEmployees;
  positiveCountSpan.textContent = positiveEmployees;
  negativeCountSpan.textContent = negativeEmployees;
}
