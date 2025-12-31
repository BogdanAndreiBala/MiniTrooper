//  HELPER COMMENT: Here we don't have a starter code snippet :P
import { getAllEmployees, setFilteredEmployees } from '../../state/state.js';
import { renderFilteredEmployeeList } from '../../features/employee-list/employee-list.js';

const filterForm = document.getElementById('filter-form');
const statusSelect = document.getElementById('status-filter');
const searchFilter = document.getElementById('search-filter');

function applyFilters(event) {
  //Prevent form submit refresh
  if (event) {
    event.preventDefault();
  }

  let selectedStatus = statusSelect.value;
  if (selectedStatus.includes('positive')) {
    selectedStatus = 'good';
  }
  if (selectedStatus.includes('negative')) {
    selectedStatus = 'naughty';
  }
  const allData = getAllEmployees();

  const matchedEmployees = allData.filter((employee) => {
    const matchesStatus =
      selectedStatus === '' || selectedStatus === 'All employees'
        ? true
        : employee.status === selectedStatus;

    let matchesSearch = true;
    const searchValue = searchFilter.value.toLowerCase().trim();
    if (searchValue.length >= 2) {
      const nameEmployee = employee.name.toLowerCase().includes(searchValue);
      const presentEmployee = employee.desiredPresent
        .toLowerCase()
        .includes(searchValue);
      matchesSearch = nameEmployee || presentEmployee;
    }

    return matchesStatus && matchesSearch;
  });

  setFilteredEmployees(matchedEmployees);
  renderFilteredEmployeeList(matchedEmployees);
}

if (filterForm) {
  filterForm.addEventListener('submit', applyFilters);
}
