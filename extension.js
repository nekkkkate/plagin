const vscode = require('vscode')

/** @param {vscode.ExtensionContext} context */
async function activate(context) {
 let disposable = vscode.commands.registerCommand(
  "hello.hey",
  async function () {
   const searcher = await vscode.window.showInputBox({
    placeHolder: "hey",
    prompt: "hey",
    value: ""
   })

   vscode.env.openExternal('https://www.google.com/search?q=' + searcher)
  }
 )

 context.subscriptions.push(disposable)
}
function deactivate() {}

module.exports = {
 activate,
 deactivate
}