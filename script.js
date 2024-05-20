const shortcuts = [
    { keys: "Control+c", description: "Kopyala" },
    { keys: "Control+v", description: "Yapıştır" },
    { keys: "Control+x", description: "Kes" },
    { keys: "Control+z", description: "Geri al" },
    { keys: "Control+y", description: "İleri al" }
];

let currentShortcutIndex = 0;
const shortcutDisplay = document.getElementById('shortcut-display');
const messageDisplay = document.getElementById('message-display');

function displayShortcut(index) {
    shortcutDisplay.textContent = shortcuts[index].keys.replace("+", " + ");
    messageDisplay.textContent = '';
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
        currentShortcutIndex = (currentShortcutIndex + 1) % shortcuts.length;
        setTimeout(() => displayShortcut(currentShortcutIndex), 2000);
    }
}

displayShortcut(currentShortcutIndex);
document.addEventListener('keydown', checkShortcut);