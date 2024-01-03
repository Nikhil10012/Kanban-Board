// Updated simulated data with provided task details
const tickets = [
    { id: 'CAM-5', title: 'Add Multi-Language Support - Enable', status: 'todo', priority: 'high' },
    { id: 'CAM-8', title: 'Create Onboarding Tutorial for New Users', status: 'todo', priority: 'medium' },
    { id: 'CAM-4', title: 'Add Multi-Language Support', status: 'todo', priority: 'low' },
    { id: 'CAM-2', title: 'Implement Email Notification System', status: 'inProgress', priority: 'high' },
    { id: 'CAM-1', title: 'Update User Profile Page UI', status: 'inProgress', priority: 'medium' },
    { id: 'CAM-3', title: 'Optimize Database Queries for Performance', status: 'done', priority: 'low' },
    { id: 'CAM-6', title: 'Enhance Search Functionality', status: 'done', priority: 'high' },
    { id: 'CAM-7', title: 'Integrate Third-Party Payment Gateway', status: 'done', priority: 'medium' },
    { id: 'CAM-11', title: 'Conduct Security Vulnerability Assessment', status: 'done', priority: 'high' },
    { id: 'CAM-10', title: 'Upgrade Server Infrastructure', status: 'done', priority: 'low' },
    { id: 'CAM-9', title: 'Implement Role-Based Access Control (RBAC)', status: 'done', priority: 'low' }
    // ... more ticket objects ...
  ];
  
  // Simulated logic to render tickets based on status
  function renderTickets() {
    const todoColumn = document.getElementById('todo');
    const inProgressColumn = document.getElementById('inProgress');
    const doneColumn = document.getElementById('done');
  
    todoColumn.innerHTML = '';
    inProgressColumn.innerHTML = '';
    doneColumn.innerHTML = '';
  
    tickets.forEach(ticket => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${ticket.title}</h3>
        <span class="priority ${ticket.priority}">${ticket.priority}</span>
      `;
  
      if (ticket.status === 'todo') {
        todoColumn.appendChild(card);
      } else if (ticket.status === 'inProgress') {
        inProgressColumn.appendChild(card);
      } else if (ticket.status === 'done') {
        doneColumn.appendChild(card);
      }
    });
  }
  
  // Simulated logic for sorting tickets based on selected option
  function sortTickets(option) {
    if (option === 'priority') {
      tickets.sort((a, b) => (a.priority < b.priority ? 1 : -1));
    } else if (option === 'title') {
      tickets.sort((a, b) => (a.title > b.title ? 1 : -1));
    }
    renderTickets();
  }
  
  // Simulated logic for grouping tickets based on selected option
  function groupTickets(option) {
    if (option === 'status') {
      tickets.forEach(ticket => {
        ticket.status = ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1);
      });
    } else if (option === 'user') {
      tickets.forEach(ticket => {
        ticket.user = 'John Doe'; // Simulated user data
      });
    }
    renderTickets();
  }
  
  // Event listeners for select elements
  document.getElementById('sort').addEventListener('change', (event) => {
    sortTickets(event.target.value);
  });
  
  document.getElementById('group').addEventListener('change', (event) => {
    groupTickets(event.target.value);
  });
  
  // Initial rendering
  renderTickets();
  