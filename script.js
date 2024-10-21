let array = [];

function updateOutput() {
    document.getElementById('output').innerText = `Array: [${array.join(', ')}]`;
}

document.getElementById('addButton').onclick = function() {
    const value = document.getElementById('inputValue').value.trim();
    if (value) {
        array.push(value);
        document.getElementById('inputValue').value = ''; 
        updateOutput();
    } else {
        alert("Please enter a valid value!");
    }
};


document.getElementById('pushButton').onclick = function() {
    const value = document.getElementById('inputValue').value.trim();
    if (value) {
        array.push(value);
        document.getElementById('inputValue').value = ''; 
        updateOutput();
    } else {
        alert("Please enter a valid value!");
    }
};


document.getElementById('popButton').onclick = function() {
    if (array.length > 0) {
        array.pop();
        updateOutput();
    } else {
        alert("Array is already empty!");
    }
};


document.getElementById('shiftButton').onclick = function() {
    if (array.length > 0) {
        array.shift();
        updateOutput();
    } else {
        alert("Array is already empty!");
    }
};


document.getElementById('unshiftButton').onclick = function() {
    const value = document.getElementById('inputValue').value.trim();
    if (value) {
        array.unshift(value);
        document.getElementById('inputValue').value = ''; 
        updateOutput();
    } else {
        alert("Please enter a valid value!");
    }
};


document.getElementById('sliceButton').onclick = function() {
    const start = parseInt(prompt('Enter start index:'), 10);
    const end = parseInt(prompt('Enter end index:'), 10);
    if (!isNaN(start) && !isNaN(end) && start >= 0 && end <= array.length) {
        const slicedArray = array.slice(start, end);
        alert(`Sliced Array: [${slicedArray.join(', ')}]`);
    } else {
        alert("Invalid indices!");
    }
};


document.getElementById('spliceButton').onclick = function() {
    const index = parseInt(prompt('Enter index to start:'), 10);
    const deleteCount = parseInt(prompt('Enter number of items to delete:'), 10);
    const items = prompt('Enter items to add, separated by commas:').split(',').map(item => item.trim());
    if (!isNaN(index) && !isNaN(deleteCount) && index >= 0 && index <= array.length) {
        array.splice(index, deleteCount, ...items);
        updateOutput();
    } else {
        alert("Invalid index or delete count!");
    }
};