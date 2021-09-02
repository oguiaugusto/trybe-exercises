const header = document.getElementById('header-container');
header.style.backgroundColor = '#4ab169';

const emergencyTasks = document.querySelector('.emergency-tasks');
emergencyTasks.style.backgroundColor = '#f29f84';

const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = '#f9db5e';

const footerContainer = document.getElementById('footer-container');
footerContainer.style.backgroundColor = '#123533';

const emergencyTaskItems = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < emergencyTaskItems.length; i += 1) {
  emergencyTaskItems[i].style.backgroundColor = '#a50af4';
}

const noEmergencyTasksItems = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < noEmergencyTasksItems.length; i +=1) {
  noEmergencyTasksItems[i].style.backgroundColor = '#232525';
}