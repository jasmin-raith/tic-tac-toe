async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let I = 0; I < includeElements.length; I++) {
        const element = includeElements[I];
        file = element.getAttribute('w3-include-html');   // „includes/header.html“*
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}


let fields = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
];


function init() {
    render();
}


function render() {
    let contentDiv = document.getElementById('content');
     
    // generate table HTML
    let tableHTML = '<table>';
    for (let i = 0; i < 3; i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < 3; j++) {
            let index = i * 3 + j;
            let symbol = '';
            if (fields[index] === 'circle') {
                symbol = 'o';
            } else if(fields[index] === 'cross') {
                symbol = 'x';
            }
            tableHTML += `<td>${symbol}</td>`;
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';

    // set table HTML to contentDiv
    contentDiv.innerHTML = tableHTML;
}