const shortcuts = [
    { keys: "Control+c", description: "Kopyala" },
    { keys: "Control+v", description: "Yapıştır" },
    { keys: "Control+x", description: "Kes" },
    { keys: "Control+z", description: "Geri al" },
    { keys: "Control+y", description: "İleri al" }
];

let currentShortcutIndex = 0;
let score = 0;
const shortcutDisplay = document.getElementById('shortcut-display');
const messageDisplay = document.getElementById('message-display');
const scoreDisplay = document.getElementById('score-display');
const nextButton = document.getElementById('next-button');

function displayShortcut(index) {
    shortcutDisplay.textContent = shortcuts[index].keys.replace("+", " + ");
    messageDisplay.textContent = '';
    nextButton.style.display = 'none';
    document.addEventListener('keydown', checkShortcut);
}

function checkShortcut(event) {
    const pressedKeys = [];
    if (event.ctrlKey) pressedKeys.push('Control');
    if (event.shiftKey) pressedKeys.push('Shift');
    if (event.altKey) pressedKeys.push('Alt');
    if (event.key && event.key.length === 1) pressedKeys.push(event.key.toLowerCase());

    const pressedKeysString = pressedKeys.join('+').toLowerCase();

    if (pressedKeysString === shortcuts[currentShortcutIndex].keys.toLowerCase()) {
        messageDisplay.textContent = `Doğru! ${shortcuts[currentShortcutIndex].description}`;
        score++;
        scoreDisplay.textContent = `Skor: ${score}`;
        nextButton.style.display = 'inline-block';
        document.removeEventListener('keydown', checkShortcut);
    }
}

function nextShortcut() {
    currentShortcutIndex = (currentShortcutIndex + 1) % shortcuts.length;
    displayShortcut(currentShortcutIndex);
}

displayShortcut(currentShortcutIndex);
nextButton.addEventListener('click', nextShortcut);