//  HELPER COMMENT: Example starter code for recently viewed feature
// this is just a placeholder file to get you started
// you can use the selected elements to do the logic of updating the recently viewed list
// and attach it as a callback to the employee card click event

import {
  addToRecentlyViewed,
  getRecentlyViewed,
  getEmployeeById,
} from '../../state/state.js';

const recentlyViewedList = document.getElementById('recent-employees');

export function updateRecentlyViewedList(employee) {
  addToRecentlyViewed(employee.id);
  renderRecentlyViewed();
}

function renderRecentlyViewed() {
  recentlyViewedList.innerHTML = '';

  const recentIDs = getRecentlyViewed();
  recentIDs.forEach((id) => {
    const employee = getEmployeeById(id);
    if (employee) {
      const li = document.createElement('li');
      li.textContent = employee.name;
      li.classList.add('recent-item');
      recentlyViewedList.appendChild(li);
    }
  });
}
