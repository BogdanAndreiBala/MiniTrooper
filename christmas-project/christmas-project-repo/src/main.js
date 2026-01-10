import employeesData from './data/employee-data.json';
import { initializeEmployeesState } from './state/state.js';
import { renderEmployeeList } from './features/employee-list/employee-list.js';
import {
  getPaginatedEmployees,
  paginationEventListeners,
} from './features/pagination/pagination.js';

import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './styles/main.css';
import './styles/variables.css';
import './styles/employee-card.css';
import './styles/nav-bar.css';
import './styles/statistics.css';
import './styles/employees-list.css';
import { setStatistics } from './features/statistics/statistics.js';

// HELPER COMMENT: Started code to show how to initialize the function from state and features

initializeEmployeesState(employeesData);

//renderEmployeeList();

paginationEventListeners();
const initData = getPaginatedEmployees();
renderEmployeeList(initData);
setStatistics();
