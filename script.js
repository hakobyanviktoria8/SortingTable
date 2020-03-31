table.onclick = function(e) {
    console.log(e);
    if (e.target.tagName !== 'TH') return;
    let th = e.target;
    sortCell(th.cellIndex, th.dataset.type);
};

function sortCell(index, type) {
    let compare;
    switch (type) {
        case 'number':             //cellIndex 0
            compare = (a, b) => b.cells[index].innerHTML - a.cells[index].innerHTML;
            break;
        case 'string':               //cellIndex 1
            compare = (a, b) => a.cells[index].innerHTML > b.cells[index].innerHTML ? 1 : -1;
            break;
    }
    let rowArr = Array.from(tbody.rows).sort(compare);
    tbody.append(...rowArr);
}