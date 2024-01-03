import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css'; // Import your CSS file

const App = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setTickets(data)) // Assuming API response is an array of tickets
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array to fetch data only once on component mount

  const renderTickets = () => {
    return tickets.map(ticket => (
      <div className="card" key={ticket.id}>
        <h3>{ticket.title}</h3>
        <span className={`priority ${ticket.priority}`}>{ticket.priority}</span>
        {/* Display other ticket details as needed */}
      </div>
    ));
  };

  return (
    <div className="App">
      <header>
        <h1>Kanban Board</h1>
        {/* Your sorting and grouping select elements */}
      </header>
      <main className="kanban-board">
        {renderTickets()}
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('react-app'));
