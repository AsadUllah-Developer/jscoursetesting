const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    // Add more employee records if needed
  ];
  
  // Function to display all employees
  function displayAllEmployees() {
    const totalEmployees = employees
      .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
      .join('');
    const displayDiv = document.getElementById('employeesDetails');
    if (displayDiv) {
      displayDiv.innerHTML = totalEmployees;
    } else {
      console.error('Element with ID "employeesDetails" not found.');
    }
  }
  
  // Function to calculate total salaries
  function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
  }
  
  // Function to display HR employees
  function displayHREmployees() {
    const hrEmployees = employees
      .filter(employee => employee.department === 'HR')
      .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
      .join('');
    const displayDiv = document.getElementById('employeesDetails');
    if (displayDiv) {
      displayDiv.innerHTML = hrEmployees || '<p>No HR employees found.</p>';
    } else {
      console.error('Element with ID "employeesDetails" not found.');
    }
  }
  
  // Function to find an employee by ID
  function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === Number(employeeId));
    const displayDiv = document.getElementById('employeesDetails');
    if (displayDiv) {
      if (foundEmployee) {
        displayDiv.innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
      } else {
        displayDiv.innerHTML = '<p>No employee has been found with this ID.</p>';
      }
    } else {
      console.error('Element with ID "employeesDetails" not found.');
    }
  }
  
  // Helper function to prompt for an employee ID
  function findEmployeeByIdPrompt() {
    const employeeId = prompt('Enter the Employee ID to search:');
    if (employeeId) {
      findEmployeeById(employeeId);
    }
  }
  