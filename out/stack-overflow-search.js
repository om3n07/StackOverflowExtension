"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const browser_1 = require("./browser");
const vscode = require("vscode");
const emojis = ['🔍', '🔥', '👀', '🕵️‍️', '🤔'];
function getUri(term) {
    return `https://stackoverflow.com/search?q=${encodeURI(term)}`;
}
function getRandomEmoji() {
    return emojis[Math.floor(Math.random() * Math.floor(emojis.length))];
}
const openDefault = (term) => {
    if (!term) {
        vscode.window.showErrorMessage('No search term provided.');
    }
    const uri = getUri(term);
    const browser = browser_1.standardizedBrowserName(browser_1.defaultBrowser());
    browser_1.open(uri, browser);
};
function search() {
    if (!vscode.window.activeTextEditor) {
        return;
    }
    // The code you place here will be executed every time your command is executed
    const term = vscode.window.activeTextEditor.document.getText(vscode.window.activeTextEditor.selection);
    // Display a message box to the user
    vscode.window.showInformationMessage(`Searching for \'${term}\'... ${getRandomEmoji()}`);
    openDefault(term);
}
exports.search = search;
//# sourceMappingURL=stack-overflow-search.js.map