#### 1. Mysql 安装

```shell
sudo apt-get update
sudo apt-get install mysql-server

安装之后会创建如下目录
# 数据库目录： /var/lib/mysql
# 配置文件：/usr/share/mysql（命令及配置文件），/etc/mysql
# 相关命令：/usr/bin/ （mysqladmin，mysqldump）
# 启动脚本：/etc/init.d/mysql（mysql的启动脚本）

sudo netstat -app | grep mysql. # 服务器后端查询

sudo service mysql start     # 服务器启动
sudo service mysql stop      # 服务器停止
sudo service mysql status    # 服务器状态

卸载mysql
sudo apt-get remove mysql-server  # 删除mysql
sudo apt-get autoremove
sudo apt-get remove package-name
dpkg -l | grep mysql | grep ii
```

##### deb-bundle.tar离线安装包安装

```shell
1. https://dev.mysql.com/downloads/mysql/  下载 mysql community server
2. tar -xvf mysql-server_5.7.18-1ubuntu16.04_amd64.deb-bundle.tar 
3. apt-get install <package-name> package-name  #可以从官网  https://dev.mysql.com/doc/mysql-apt-repo-quick-guide/en/  下载
4. dpkg -l | grep mysql | grep ii  #  查看与mysql有关的packagename
```

#### tar.gz离线安装包安装

```shell
1. tar zxvf mysql-5.7.18-linux-glibc2.5-x86_64.tar.gz
2. sudo mv mysql-5.7.18-linux-glibc2.5-x86_64 /usr/localsudo 
3. ln -s /usr/local/mysql-5.7.18-linux-glibc2.5-x86_64/ /usr/local/mysql
4. apt-get install <package-name> package-name  #可以从官网  https://dev.mysql.com/doc/mysql-apt-repo-quick-guide/en/  下载
5. dpkg -l | grep mysql | grep ii  #  查看与mysql有关的packagename
```

#### 2. 连接数据库

```shell
mysql -h 127.0.0.1 -P 3306 -uroot -p123456
# -h 主机
# -P 端口
# -u 账号
# -p 密码
SHOW DATABASES;

```

#### 3. 创建数据库

```shell
mysqladmin -uroot -p create RUNOOB
> Enter password: ******
use RUNOOB;
```

#### 4. 删除数据库

```shell
mysqladmin -uroot -p drop RUNOOB
> Enter password: ******
```

#### 5. 创建数据表

```shell
CREATE TABLE table_name (column_name column_type)
```

#### 6. 删除数据表

```shell
DROP TABLE table_name
```

#### 7. 导出sql格式的数据

```shell
# 导出数据表runoob_tbl
$ mysqldump -u root -h hostname -p RUNOOB runoob_tbl > dump.sql
password ******
# 导出整个数据库
$ mysqldump -u root -p RUNOOB > database_dump.sql
password ******
```

#### 8. 恢复数据库

````shell
$ mysql -u root -h hostname -p database_name < database_dump.sql
password ******

# 直接导出数据库，然后恢复到远程主机的数据库
$ mysqldump -u root -p database_name | mysql -h other-host.com database_name
````

