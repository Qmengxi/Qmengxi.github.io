### git的常用命令

- git fetch

  ```shell
  一般拉取代码，可以先git fetch，再git merge，这样更安全
  ======================
  git fetch之后，本地代码不变，与本地库关联的远程库commit id更新至最新
  ======================
  git fetch只会将本地库所关联的远程库的commit id更新至最新
  ======================
  每一个本地库下都有一个.git的隐藏文件夹，文件夹中的文件保存着跟这个本地库相关的信息
  ```


- git pull 远程分支到本地

  ```Shell
  git pull <远程库名> <远程分支名>:<本地分支名> 
  =======================
  当你的本地有代码修改，处于未暂存状态/暂存状态
  git pull 因为处于未暂存状态/暂存状态，都会失败，必须先提交更新
  其次，
  如果提交的更新与pull下来的代码有冲突，会提示冲突，先解决冲突，才能提交更新
  如果提交的更新与pull下来的代码没有冲突，可以pull下来，然后push
  ```

- 删除远程分支

  ```shell
  git push origin --delete branch_name
  ```

- 远程克隆仓库到本地

  ```shell
  git clone git@github.com:simright/learn_python.git
  ```

- add 命令详解

  ```shell
  git add -u 将文件的修改，文件的删除，添加到暂缓区
  git add . 将文件的修改，文件的新建，添加到暂缓区
  git add -A 将文件的的修改，文件的删除，文件的新建，添加到暂缓区
  ```

- 从当前分支切新出分支

  ```Shell
  git pull
  git checkout -b new_branch
  ```

- 拉取远程分支到本地

  ```shell
  git checkout -b branch_name origin/branch_name
  ```

- 删除本地分支

  ```
  git branch -D branch_name
  ```

- 本地创建仓库并推到远程

  ```shell
  git init
  echo "This is a private project" > readme.txt
  git add .
  git commit -m "add readme.txt"
  git push origin master
  ```

- git名字和邮箱

  ```shell
  git config --global user.name "name"
  git config --global user.email "email"
  ---------------------------------------
  git config user.name
  >>> name
  git config user.email
  >>> email
  ```

- tag的常用命令

  ```shell
  给当前标签打上tag
  	git tag tag_name
  为历史项目打上tag
  	git tag tag_name commit_id
  指定标签说明
  	git tag -a tag_name -m "comments"
  删除某一个tag
  	git tag -d tag_name
  删除远程tag
  	git push origin --delete tag tag_name
  推送标签到远程
  	git push origin tag_name
  ```

- 生成公共key

  ```shell
  ssh-keygen -t rsa -C "your email"   回车，回车
  key的位置保存在 ～/.ssh
  ```

- 放弃本地所有修改

  ```Shell
  git checkout .
  or
  git checkout --file xxx
  ```

- 返回某一节点

  ```shell
  git reset --hard xxx 返回xxx，不保留修改
  git reset --soft xxx 返回xxx，保留修改
  ```

- Revert and Reset

  [git revert实战](http://blog.csdn.net/secretx/article/details/51461972)

  ```shell
  前面的commit，如果是修改文件a，增加一行"oooook"
  那么revert，就是修改文件a，删除新增的一行"oooook"
  git revert过程有可能遇到冲突，要么git revert --abort终止此次revert操作，代码还原至revert命令前。要么手动消除冲突(同普通的冲突解决)，然后add commit
  git revert，HEAD 会继续向前
  git reset，HEAD会向后移，会删除部分commit，推送到远程需要强制更新权限
  	git push -f 
  ```

- git reset用法

  ```shell
  git reset HEAD^ 回退到上一个版本
  git reset HEAD～n
  参数
  	--soft：HEAD指针回退到指定版本，这次提交之后的所有改动移至暂缓区
  	--mixed：HEAD指针回退到指定版本，这次提交之后的改动移至未暂存阶段
  	--hard：HEAD指针回退到指定版本，工作区代码回退到这个版本
  ```

- 解决冲突

  ```shell
  1. 同时修改不同的文件，git会自动合并
  2. 同时修改相同文件的不同区域，git会自动合并
  3. 一个移动文件或重命名，一个修改文件，git会自动合并
  ```

  #### 如果修改同一个文件的相同区域

  [git冲突解决](http://blog.csdn.net/u014785687/article/details/66477686)

  ```shell
  1. git status
  	会出现下面的状态
  	Unmerged paths:
     		both modified:   gitLearn/just_to_test_git_workflow.py
  2. vim gitLearn/just_to_test_git_workflow.py
  	特殊标识<<<<与====之间的内容是当前本地分支所更改的内容； 
  	特殊标识====与>>>>之间的内容是所合并的版本库更改的内容。 
  3. 修改just_to_test_git_workflow.py，删除上面的特殊标识，并修改至需要的内容
  4. git add . 添加修改文件至暂缓区
  5. git push origin master
  ```

- 工作区，暂存区，远程库

  ```shell
  工作区有代码修改，处于未暂存状态
  git add 把修改的代码加入暂存区
  git commit 把暂存区的代码提交到当前分支
  git push 把当前分支的更新提交到远程库
  ```

- 连接本地分支和远程分支

  ```shell
  主要在本地新建分支，这个时候不能推送分支到远程，需要在github上建立远程分支，然后连接
  git init
  touch readme.md
  git add -A
  git commit -m "first commit"
  git remote add git@github.com:xxx/yyy
  git push -u origin master
  # -u 同时指定origin为默认主机，后面就可以不加任何参数使用git push了
  不带任何参数的git push，默认只推送当前分支，这叫做simple方式
  当前分支与多个主机存在追踪关系?????
  ```

  ​