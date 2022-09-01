# blog-vue

## Project setup
```

  // #editor
  // vscode默认启用了根据文件类型自动设置tabsize的选项
  "editor.detectIndentation": false,
  // 修改多行编辑快捷键
  "editor.multiCursorModifier": "ctrlCmd",
  // 以像素为单位控制字号
  "editor.fontSize": 14,
  // 设置缩进为两个空格
  "editor.tabSize": 2,
  "window.zoomLevel": 1,
  "explorer.confirmDelete": false,
  "editor.wordSeparators": "`~!@#$%^&*()=+[{]}\\|;:'\",.<>/?",
  // #icons
  "workbench.iconTheme": "vscode-icons",
  // #eslint
  // 设置编辑器保存文件时自动执行 eslint --fix 命令进行代码风格修复,并且仍然具有格式和快速修复功能
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.eslint": true
  },
  // #prettier
  // 将prettier设置为默认格式化程序(在编辑器中有可能被其他Formatter占用，所以将prettier设置为默认Formatter)
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // 保存时自动格式化 (根据根目录下‘.prettierrc文件配置项’)
  "editor.formatOnSave": true,
  // Enable per-language
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
    // "editor.defaultFormatter": "vscode.html-language-features"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // 配置react的代码格式化
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "files.eol": "\n",
  "workbench.editor.enablePreview": false,
```