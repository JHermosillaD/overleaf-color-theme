const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand('overleaf.initWorkspace', async () => {
      const workspaceFolders = vscode.workspace.workspaceFolders;
      if (!workspaceFolders) {
        vscode.window.showErrorMessage('Open a folder first.');
        return;
      }

      const root = workspaceFolders[0].uri.fsPath;
      const templatesDir = path.join(context.extensionPath, 'templates');

      const vscodeDir = path.join(root, '.vscode');
      if (!fs.existsSync(vscodeDir)) fs.mkdirSync(vscodeDir);

      const files = [
        ['settings.json',   path.join(vscodeDir, 'settings.json')],
        ['extensions.json', path.join(vscodeDir, 'extensions.json')],
        ['.gitignore',      path.join(root, '.gitignore')],
      ];

      const skipped = [];
      for (const [src, dest] of files) {
        if (fs.existsSync(dest)) {
          skipped.push(src);
          continue;
        }
        fs.copyFileSync(path.join(templatesDir, src), dest);
      }

      const msg = skipped.length
        ? `Workspace ready. Skipped existing: ${skipped.join(', ')}`
        : 'LaTeX workspace initialized.';
      vscode.window.showInformationMessage(msg);
    })
  );
}

module.exports = { activate, deactivate: () => {} };