// Draggable items
const draggables = document.querySelectorAll('.draggable');
// Droppable areas
const droppables = document.querySelectorAll('.droppable');
const message = document.getElementById('message');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
});

droppables.forEach(droppable => {
    droppable.addEventListener('dragover', dragOver);
    droppable.addEventListener('drop', drop);
});

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    setTimeout(() => {
        event.target.classList.add('hide');
    }, 0);
}

function dragOver(event) {
    event.preventDefault();
    event.target.classList.add('over');
}

function drop(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;

    if ((id === 'cpu' && dropzone.id === 'cpu-slot') ||
        (id === 'gpu' && dropzone.id === 'gpu-slot') ||
        (id === 'ram' && dropzone.id === 'ram-slot')) {
        dropzone.appendChild(draggableElement);
        draggableElement.classList.remove('hide');
        dropzone.classList.remove('over');
        message.textContent = '';
    } else {
        message.textContent = 'Yanlış yer!';
        draggableElement.classList.remove('hide');
        dropzone.classList.remove('over');
    }
}

// Style adjustments for better UX
document.querySelectorAll('.droppable').forEach(droppable => {
    droppable.addEventListener('dragleave', () => {
        droppable.classList.remove('over');
    });
});