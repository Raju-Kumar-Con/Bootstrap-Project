// Sidebar toggle
document.getElementById("toggleSidebar").onclick = function () {
    document.getElementById("sidebar").classList.toggle("collapsed");
    document.getElementById("content").classList.toggle("collapsed");
};

// Generate table data
let tableBody = document.getElementById("tableBody");

for (let i = 1; i <= 60; i++) {
    let row = `
    <tr>
        <td>${i}</td>
        <td>Employee ${i}</td>
        <td>emp${i}@mail.com</td>
        <td>Developer</td>
        <td>IT</td>
        <td>${i % 5 + 1} Years</td>
        <td>HTML, CSS, JS, Bootstrap</td>
        <td>Project ${i}</td>
        <td>${i % 2 === 0 ? 'Active' : 'Pending'}</td>
        <td>Manager ${i % 5}</td>
        <td>2022-01-${i % 28 + 1}</td>
        <td>2026-04-${i % 28 + 1}</td>
    </tr>
    `;
    tableBody.innerHTML += row;
}

// Rowspan + Colspan example
tableBody.innerHTML += `
<tr>
<td rowspan="2">101</td>
<td colspan="2">Special Employee</td>
<td>Lead</td>
<td>HR</td>
<td>10 Years</td>
<td>Management</td>
<td>Core Project</td>
<td>Active</td>
<td>CEO</td>
<td>2015</td>
<td>Today</td>
</tr>
<tr>
<td colspan="2">Extra Details</td>
<td colspan="9">Handles multiple departments and strategic planning.</td>
</tr>
`;


