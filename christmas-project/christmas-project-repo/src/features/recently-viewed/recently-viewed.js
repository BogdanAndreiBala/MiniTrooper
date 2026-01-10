//  HELPER COMMENT: Example starter code for recently viewed feature
// this is just a placeholder file to get you started
// you can use the selected elements to do the logic of updating the recently viewed list
// and attach it as a callback to the employee card click event

const recentlyViewedList = document.getElementById('recent-employees');
let recentlyViewed = [];

export function updateRecentlyViewedList(employee) {
  recentlyViewed = recentlyViewed.filter((emp) => emp.id !== employee.id);
  recentlyViewed.unshift(employee);

  if (recentlyViewed.length > 5) {
    recentlyViewed.pop();
  }

  renderRecentlyViewed();
}

function renderRecentlyViewed() {
  recentlyViewedList.innerHTML = '';

  recentlyViewed.forEach((emp) => {
    const li = document.createElement('li');
    li.textContent = emp.name;
    li.classList.add('recent-item');
    recentlyViewedList.appendChild(li);
  });
}
