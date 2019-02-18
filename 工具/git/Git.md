# Git

## 1.配置git

### ssh key

```powershell
#生成ssh key
$ ssh-keygen -t rsa -C "your_email@example.com"

#读取ssh key 并复制到github中
$ cat  ~/.ssh/id_rsa.pub
```

### 配置用户名及邮箱

``` powershell
# 配置用户名
$ git config --global user.name "Your Name"

# 配置邮箱
$ git config --global user.email "email@example.com"
```

## 2.基本操作

### 初始化git仓库

```powershell
$ git init
```

### git clone

```powershell
# 执行如下命令以创建一个本地仓库的克隆版本：
$ git clone /path/to/repository 

# 如果是远端服务器上的仓库
$ git clone username@host:/path/to/repository
```

### git status

```powershell
# 查看当前仓库的状态
$ git status
```

### git add

```powershell
# 添加指定文件到暂存区
$ git add <file1> <file2> ...

# 添加指定目录到暂存区，包括子目录
$ git add <dir>

# 添加当前目录的所有文件到暂存区
$ git add .
```

### git commit

```powershell
# 提交暂存区到仓库区
$ git commit -m <message>

# 提交暂存区的指定文件到仓库区
$ git commit <file1> <file2> ... -m <message>

# 使用一次新的commit，替代上一次提交
# 如果代码没有任何新变化，则用来改写上一次commit的提交信息
$ git commit --amend -m <message>
```

### git push

```powershell
# 提交本地分支及分支commit到远程指定分支
$ git push origin <branch>

# 将本地分支与远程分支相关联，并推送分支到远程
$ git push --set-upstream origin <branch>

# 强制提交分支到远程   !!!慎用
$ git push -f

# 推送所有分支到远程仓库
$ git push --all
```

### git pull

```powershell
# 获取远程分支，并与本地分支合并
$ git pull origin <branch>
# 相当于
$ git fetch origin
$ git merge origin/<branch>

#将本地分支与远程分支建立追踪关系
$ git branch --set-upstream master origin/<branch>

# 建立追踪后，可省略分支名
$ git pull origin

# 如果当前分支只有一个追踪，可以省略origin
$ git pull

#如果想要以rebase模式合并代码
$ git pull --rebase

#  git fetch --- --- 将本地库所关联的远程库的commit id更新至最新，HEAD没有变化,从远程获取最新版本到本地，不会自动merge

#git pull --- ---将本地库更新至远程库的最新状态，HEAD也会相应的指向最新的commit id,远程获取最新版本并merge到本地

```

### branch

```powershell
# 列出所有本地分支
$ git branch

# 列出所有远程分支
$ git branch -r

# 列出所有本地分支和远程分支
$ git branch -a

# 新建一个分支，但依然停留在当前分支
$ git branch <branch-name>

# 新建一个分支，并切换到该分支
$ git checkout -b <branch>

# 切换到指定分支，并更新工作区
$ git checkout <branch-name>

# 合并指定分支到当前分支
$ git merge <branch>
$ git bebase <branch>

# 删除分支
$ git branch -d <branch-name>
```

**rebase 与 merage 的区别**

**rebase**

rebase 特点：会合并之前的commit历史
 优点：得到更简洁的项目历史，去掉了merge  commit
 缺点：如果合并出现代码问题不容易定位，因为re-write了history

合并时如果出现冲突需要按照如下步骤解决

- 修改冲突部分
- git add
- `git rebase --continue`
- （如果第三步无效可以执行  `git rebase --skip`）

** **不要在git add 之后习惯性的执行 git commit命令**

 **merage**

marge 特点：自动创建一个新的commit
 如果合并的时候遇到冲突，仅需要修改后重新commit
 优点：记录了真实的commit情况，包括每个分支的详情
 缺点：因为每次merge会自动产生一个merge commit，所以在使用一些git 的GUI tools，特别是commit比较频繁时，看到分支很杂乱。

###  查看信息

```powershell
# 显示有变更的文件
$ git status

# 显示当前分支的版本历史
$ git log

# 显示commit历史，以及每次commit发生变更的文件
$ git log --stat

# 显示当前分支的最近几次提交
$ git reflog

# 显示暂存区和工作区的差异
$ git diff

# 显示工作区与当前分支最新commit之间的差异
$ git diff HEAD

# 显示两次提交之间的差异
$ git diff [first-branch]...[second-branch]

# 显示今天写了多少行代码
$ git diff --shortstat "@{0 day ago}"

```

 ### 撤销

```powershell
# 暂时将未提交的变化移除，稍后再移入
$ git stash # 暂存工作区的变化
$ git stash pop # 将暂存的内容取出至工作区
$ git stash list # 查看stash的内容
$ git stash clear # 将暂存的内容删除

# 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
$ git reset [file]

# 重置暂存区与工作区，与上一次commit保持一致
$ git reset --hard

# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
$ git reset [commit]

# 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
$ git reset --hard [commit]
```

## 3.gitignore

> 忽略某些文件，不将这些文件上传到git服务器

### 使用方法

####  在Git项目中定义 .gitignore 文件

1. 在项目目录下创建文件`.gitignore`
2. 编写`.gitignore`文件，配置忽略的文件。（每一行指定一个忽略文件）
3. 将`.gitignore`文件提交到github

```powershell
# See http://help.github.com/ignore-files/ for more about ignoring files. 

# 忽略整个dist文件夹
/dist 

# 忽略整个包依赖文件夹
/node_modules

# 忽略develop文件夹下的所有js
/develop/*.js
```

#### 定义git全集的.gitignore文件

这种方式在不同的项目开发者之间是不共享的，是属于项目之上Git应用级别的行为。

这种方式也需要创建相应的 .gitignore 文件，可以放在任意位置

```powershell
git config --global core.excludesfile ~/.gitignore
```

### git忽略规则

#### 优先级

在 .gitingore 文件中，每一行指定一个忽略规则，Git 检查忽略规则的时候有多个来源，它的优先级如下(由高到低)

* 从命令行中读取可用的忽略规则
* 当前目录定义的规则
* 父级目录定义的规则，以此类推
* $GIT_DIR/info/exclude文件中定义的规则
* core.excludesfile中定义的全集规则

### 匹配语法

* 空格不匹配任何文件，可作为分隔符，可使用反斜杠(\\)转义
* \# 开头的文件标识注释，可使用反斜杠转义
* \! 开头的模式标识否定，该文件将会再次被包含。如果排除了该文件的父级目录，则使用\!也不会再次被包含。可使用反斜杠转义.
* /开始的模式匹配项目根目录
* /结束的模式匹配文件夹及在该文件夹路径下的内容，但是不匹配该文件
* 如果一个模式不包含斜杠，则匹配相对于当前.gitignore文件路径的内容。如果该模式不在 .gitignore 文件中，则相对于项目根目录
* \*\*匹配多集目录，可在开始，中间，结束使用
* \?通用匹配单个字符
* \[\]通用匹配单个字符列表

```powershell
# 忽略当前目录下的bin文件夹，该文件夹下的所有内容都会被忽略，不忽略bin文件
bin/

# 忽略根目录下的bin文件
/bin

# 忽略根目录下的拓展名为.c的文件
/*.c

# 忽略 debug/io.obj，不忽略 debug/common/io.obj 和 tools/debug/io.obj
debug/*.obj

# 忽略/foo, a/foo, a/b/foo等
**/foo

# 忽略a/b, a/x/b, a/x/y/b等
a/**/b

# 不忽略 bin 目录下的 run.sh 文件
!/bin/run.sh

# 忽略所有 .log 文件
*.log

# 忽略当前路径的 config.php 文件
config.php
```

### 删除缓存

.gitignore只能忽略那些原来没有被track的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的。

解决方法就是先把本地缓存删除（改变成未track状态），然后再提交:

```powershell
git rm -r --cached .
git add .
git commit -m 'update .gitignore'
```

## 4.gitkeep

> .gitkeep的作用是为了提交空文件夹

因为git不追踪文件夹，当用户需要追踪一个空白文件夹时，可在空白文件夹下创建`.gitkeep`文件。

这样空白文件夹也会被提交。