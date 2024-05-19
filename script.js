document.addEventListener('DOMContentLoaded', (event) => {
    const components = document.querySelectorAll('.component');
    const caseArea = document.getElementById('case');

    components.forEach(component => {
        component.addEventListener('dragstart', dragStart);
    });

    caseArea.addEventListener('dragover', dragOver);
    caseArea.addEventListener('drop', drop);

    function dragStart(event) {
        event.dataTransfer.setData('text', event.target.id);
    }

    function dragOver(event) {
        event.preventDefault();
    }

    function drop(event) {
        event.preventDefault();
        const data = event.dataTransfer.getData('text');
        const component = document.getElementById(data);
        caseArea.appendChild(component);
    }
});