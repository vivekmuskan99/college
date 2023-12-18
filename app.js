// server.js

const express = require('express');
const app = express();

// Set up template engine
app.set('view engine', 'ejs');

// Static files middleware
app.use(express.static('public')); 

// University data 
const university = {
  name: "Example University", 
  established: 1980,
  address: "123 University Blvd, San Francisco, CA",
  president: "Dr. Jane Smith", 
  faculties: [
    { 
      name: "Science",
      departments: [
        "Computer Science",
        "Mathematics",
        "Physics"
      ]
    },
    {
      name: "Commerce",  
      departments: [
         "Business Administration",
         "Economics",
         "Finance"
      ]
    }
  ]
}

app.get('/', (req, res) => {

    let details = `
      <h1>Example University</h1> 
      <p>Welcome to Example University. Some key details:</p>
      
      <ul>
        <li>Established: 1980</li>
        <li>President: Dr. Jane Smith</li>
        <li>Location: San Francisco, CA</li>
        <li>Student Population: 8,200</li> 
        <li>Academic Faculty: 500</li>
        <li>Departments: Engineering, Science, Business, Law</li>
      </ul>
      
      <p>We offer world-class education programs across undergrad, graduate, and PhD levels. Get in touch to learn more!</p>
    `;
  
    res.send(details);
  
  });

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}` );
});