# Dev Guidelines
### . . . to follow when you are working on this project, to enhace your development experience.

#### Recommended Extensions
-   Install an extension named, **Auto Rename Tag**, from vscode extension marketplace.
-   Extension named **Better Comments**, would enable you to write comments worth remembering in your codebase.
-   **ES7+ React/Redux/React-Native snippets** would help to you write boilerplate code with few keypresses.
-   Styled components are no fun to write without **vscode-styled-components**. Installing it would enhace your dev-experience with styled-components.

#### ESLint setup with vscode
-   Install **ESLint** extension by microsoft in vscode (or any other) editor.
-   Open Settings in VSCode (`Ctrl` + `,`), and enable *Format on Save*.
-   Go to */home/.config/Code/User/settings.json*, and make sure the following lines are there.
```javascript
{
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
}
```

**NOTE** - _All the extensions named here are related to vscode. If you use any alternate code editor, make sure to install extensions like these to enhance your dev experience, because we want you to have full fun while working on this project ;)_
