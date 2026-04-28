// ELEMENTS (DOM REFERENCES)
const toggleBtn = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");
const searchContainer = document.getElementById("searchContainer");
const tableBody = document.getElementById("tableBody");

// SIDEBAR TOGGLE FUNCTION
toggleBtn.onclick = function () {
    sidebar.classList.toggle("collapsed");
    content.classList.toggle("collapsed");

    // Show / Hide search box
    if (sidebar.classList.contains("collapsed")) {
        searchContainer.style.display = "none";
    } else {
        searchContainer.style.display = "block";
    }
};

// TABLE DATA GENERATION
function generateTableData() {
    let rows = "";

    for (let i = 1; i <= 60; i++) {
        rows += `
<tr>
    <td data-bs-toggle="tooltip" data-bs-title="${i}">${i}</td>
    <td data-bs-toggle="tooltip" data-bs-title="Employee ${i}">Employee ${i}</td>
    <td data-bs-toggle="tooltip" data-bs-title="emp${i}@mail.com">emp${i}@mail.com</td>
    <td data-bs-toggle="tooltip" data-bs-title="Developer">Developer</td>
    <td data-bs-toggle="tooltip" data-bs-title="IT Department with Long Name">IT Department with Long Name</td>
    <td data-bs-toggle="tooltip" data-bs-title="${i % 5 + 1} Years">${i % 5 + 1} Years</td>
    <td data-bs-toggle="tooltip" data-bs-title="HTML, CSS, JavaScript, Bootstrap, React, Node">
        HTML, CSS, JavaScript, Bootstrap, React, Node
    </td>
    <td data-bs-toggle="tooltip" data-bs-title="Project ${i} with very long name">
        Project ${i} with very long name
    </td>
    <td data-bs-toggle="tooltip" data-bs-title="${i % 2 === 0 ? 'Active' : 'Pending'}">
        ${i % 2 === 0 ? 'Active' : 'Pending'}
    </td>
    <td data-bs-toggle="tooltip" data-bs-title="Manager ${i % 5} with long name">
        Manager ${i % 5} with long name
    </td>
    <td data-bs-toggle="tooltip" data-bs-title="2022-01-${i % 28 + 1}">
        2022-01-${i % 28 + 1}
    </td>
    <td data-bs-toggle="tooltip" data-bs-title="2026-04-${i % 28 + 1}">
        2026-04-${i % 28 + 1}
    </td>
</tr>
        `;
    }

    tableBody.innerHTML = rows;
}

// SPECIAL ROW (ROWSPAN + COLSPAN)
function addSpecialRow() {
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
    <td colspan="9">
        Handles multiple departments and strategic planning with very long description text.
    </td>
</tr>
    `;
}
 
// TOOLTIP INIT
function initTooltips() {
    let tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );

    tooltipTriggerList.map(function (el) {
        return new bootstrap.Tooltip(el);
    });
}

// INIT APP
generateTableData();
addSpecialRow();
initTooltips();