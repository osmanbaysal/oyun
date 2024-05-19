document.addEventListener('DOMContentLoaded', (event) => {
    const parts = document.querySelectorAll('#parts-list li');
    const caseContents = document.getElementById('case-contents');

    parts.forEach(part => {
        part.addEventListener('dragstart', handleDragStart);
    });

    caseContents.addEventListener('dragover', handleDragOver);
    caseContents.addEventListener('drop', handleDrop);

    function handleDragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.getAttribute('data-part'));
    }

    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDrop(e) {
        e.preventDefault();
        const partType = e.dataTransfer.getData('text/plain');
        const partElement = document.createElement('div');
        partElement.className = 'part';
        partElement.textContent = partType.toUpperCase();
        partElement.style.top = `${e.clientY - e.target.getBoundingClientRect().top}px`;
        partElement.style.left = `${e.clientX - e.target.getBoundingClientRect().left}px`;
        caseContents.appendChild(partElement);
    }
});