import Config from './config';
import * as vscode from 'vscode';

const opn = require('opn');

/**
 * get standardized browser name
 * @param name String
 */
export const standardizedBrowserName = (name: string = ''): string => {
  let _name = name.toLowerCase();
  const browser = Config.browsers.find(item => {
    return item.acceptName.indexOf(_name) !== -1;
  });

  return browser ? browser.standardName : '';
};

/**
 * get default browser name
 */
export const defaultBrowser = (): string => {
  const config = vscode.workspace.getConfiguration(Config.app);
  return config ? config.default : '';
};

export const open = (path: string, browser: string = '') => {
  opn(path, { app: browser })
    .catch(() => {
      vscode.window.showErrorMessage(`Could not open ${browser}.`);
    });
};