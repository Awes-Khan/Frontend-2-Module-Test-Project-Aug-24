  	let employees = [];
  	let employeeId = 1;
      
    const employeeForm = document.getElementById('employeeForm');
  	const employeeList = document.getElementById('employeeList');
  	const messageDiv = document.getElementById('message');
  	const addEmployeeBtn = document.getElementById('addEmployeeBtn');
    
    function showMessage(msg, type) {
      messageDiv.textContent = msg;
      messageDiv.className = type === 'error' ? 'alert alert-danger' : 'alert alert-success';
      setTimeout(() => {
        messageDiv.textContent = '';
        messageDiv.className = '';
      }, 3000);
    }
    
    function displayEmployees(){
    	  employeeList.innerHTML = '';
          if (employees.length === 0) {
            employeeList.innerHTML = '<p class="text-muted">You have 0 Employees.</p>';
          } else { 
          	employees.forEach(employee => {
            	const div = document.createElement('div');
              div.className = 'row';
              const employeeDiv = document.createElement('div');
                employeeDiv.className = 'employee list-group-item col-sm-8';
                employeeDiv.innerHTML = `<span>
                <strong>${employee.id}   \t    Name:${employee.name} \t Profession:${employee.profession} \t Age:${employee.age}</strong></span>`;
                const deleteDiv = document.createElement('div');
                deleteDiv.className = 'col-sm';
                deleteDiv.innerHTML = `<button class="deleteBtn" onclick="deleteEmployee(${employee.id})">Delete User</button>`;
                div.appendChild(employeeDiv);
                div.appendChild(deleteDiv);
                employeeList.appendChild(div);
            });
          }
     }
	  displayEmployees();
     
      function addEmployee() {
        const name = document.getElementById('name').value;
        const profession = document.getElementById('profession').value;
        const age = document.getElementById('age').value;

        if (name === '' || profession === '' || age === '') {
          showMessage('Error : Please Make sure All the fields are filled before adding in an employee !', 'error');
          return;
        }
        const newEmployee = {
          id: employeeId++,
          name,
          profession,
          age: parseInt(age, 10)
        };
        employees.push(newEmployee);
        
        document.getElementById('name').value = '';
        document.getElementById('profession').value = '';
        document.getElementById('age').value = '';
        
        showMessage('Employee added successfully', 'success');
        displayEmployees();
      }
      function deleteEmployee(id) {
        employees = employees.filter(employee => employee.id !== id);
        showMessage('Employee deleted successfully', 'success');
        displayEmployees();
      }
      addEmployeeBtn.addEventListener('click', addEmployee);
      displayEmployees();
