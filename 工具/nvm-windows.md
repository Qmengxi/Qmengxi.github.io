# nvm-windows

## 1. 卸载node

1. 从卸载程序卸载node或在开始菜单找到node选择卸载node(uninstall)
2. 查看任务管理器，杀死与node有关的所有进程(如果有的话)
3. 删除下列文件夹
   1. C:\Program Files(x86)\nodejs
   2. C:\Program Files\nodejs
   3. C:\Users\\\{UserName\}AppData\Roaming\npm
   4. C:\Users\\\{UserName\}AppData\Roaming\npm-cache
4. 检查path环境变量，确保没有nodejs或npm存在

> windows + r 打开 cmd，输入path 即可查看所有path引用

5. 重启电脑

## 2.安装nvm-windows

1. [下载](https://github.com/coreybutler/nvm-windows/releases)nvm-windows安装包
   1. nvm-noinstall.zip：  绿色免安装版本，但是使用之前需要配置
   2. nvm-setup.zip：安装包，下载之后点击安装，无需配置就可以使用
   3. Source code(zip)：zip压缩的源码
   4. Sourc code(tar.gz)：tar.gz压缩的源码
2. 解压缩文件，双击安装
3. 命令行输入`nvm`检测是否安装成功

## 3. 使用

### 基本命令

1. `nvm arch [32|64]` 显示node运行在32还是64位模式。指定32或64位为默认模式
2. `nvm install <version> [arch]`：安装node，version为版本号或latest。
3. `nvm list [available]`： 列出安装的node版本
4. `nvm on`: 启用node版本管理
5. `nvm off`:关闭node版本管理
6. `nvm proxy [url]`: 设置代理
7. `nvm uninstall <version>`: 卸载指定版本node
8. `nvm use [version] [arch]`: 使用指定版本node
9. `nvm root [path]`: 设置nvm存储node不通版本的目录地址。

## 4. 使用示例

### 安装node 9.4版本

```powershell
nvm list # 查看已安装node版本    // No installations recognized.
nvm install 9.4.0  # 安装9.4.0版本node
nvm use 9.4.0 # 使用9.4.0版本node
node -v #查看node版本   //v9.4.0
npm -v # 查看npm版本   //5.6.0
nvm list #再次查看已安装node版本 //* 9.4.0 (Currently using 64-bit executable)
```

### 再安装稳定版本12.18.3

```powershell
nvm install 12.18.3
nvm use 12.18.3
node -v  #查看node版本  //v12.18.3
npm -v  # 查看npm版本 //6.14.6
nvm list # 再次查看已安装node版本
# * 12.18.3 (Currently using 64-bit executable)
#    9.4.0
```

