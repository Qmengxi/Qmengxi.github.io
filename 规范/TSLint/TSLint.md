# TSLint

## 一.说明

TSLint是一款可拓展TS代码静态分析工具。可用来检查代码的可读性，可维护性及功能错误。

## 二.安装

```powershell
# Install the global CLI and its peer dependency
yarn global add tslint typescript

# Navigate to your sources folder
cd path/to/project

# Generate a basic configuration file
tslint --init

# Lint TypeScript source globs
tslint -c tslint.json 'src/**/*.ts'
```

