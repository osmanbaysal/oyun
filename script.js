function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    var dropZone = ev.target;

    if (dropZone.classList.contains('box') && dropZone.children.length === 0) {
        dropZone.appendChild(draggedElement);
        if (checkMatch(draggedElement, dropZone)) {
            dropZone.classList.remove('wrong');
            dropZone.classList.add('correct');
            updateFeedback("Doğru!");
        } else {
            dropZone.classList.remove('correct');
            dropZone.classList.add('wrong');
            updateFeedback("Yanlış eşleşme!");
        }
    }
}

function checkMatch(draggedElement, dropZone) {
    if ((draggedElement.id === "drag1" && dropZone.id === "drop1") ||
        (draggedElement.id === "drag2" && dropZone.id === "drop2") ||
        (draggedElement.id === "drag3" && dropZone.id === "drop3")) {
        return true;
    }
    return false;
}

function updateFeedback(message) {
    var feedbackElement = document.getElementById("feedback");
    feedbackElement.textContent = message;
}