import { open, defaultBrowser, standardizedBrowserName } from './browser';
import * as vscode from 'vscode';

const emojis = ['🔍', '🔥', '👀', '🕵️‍️', '🤔'];

function getUri(term: string): string {
    return `https://stackoverflow.com/search?q=${encodeURI(term)}`;
}

function getRandomEmoji(): string {
    return emojis[Math.floor(Math.random() * Math.floor(emojis.length))];
}


const openDefault = (term: any): void => {
    if (!term) { vscode.window.showErrorMessage('No search term provided.'); }
    
    const uri = getUri(term);
    const browser = standardizedBrowserName(defaultBrowser());

    open(uri, browser);
};

export function search() {
    if (!vscode.window.activeTextEditor) { return; }

    // The code you place here will be executed every time your command is executed
    const term = vscode.window.activeTextEditor.document.getText(
        vscode.window.activeTextEditor.selection
    );

    // Display a message box to the user
    vscode.window.showInformationMessage(`Searching for \'${term}\'... ${getRandomEmoji()}`);

    openDefault(term);
}
