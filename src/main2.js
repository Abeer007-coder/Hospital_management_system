// Select the form and table body elements
const patientForm = document.getElementById('patientForm');
const patientTableBody = document.getElementById('patientTableBody');

// Initialize a counter for patient IDs
let patientCount = 0;

// Event listener for form submission
patientForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const contact = document.getElementById('contact').value;

    // Increment the patient count
    patientCount++;

    // Create a new row for the patient
    const row = document.createElement('tr');
    row.innerHTML = `
        <th scope="row">${patientCount}</th>
        <td>${name}</td>
        <td>${age}</td>
        <td>${gender}</td>
        <td>${contact}</td>
    `;

    // Append the new row to the table body
    patientTableBody.appendChild(row);

    // Reset the form fields
    patientForm.reset();
});
