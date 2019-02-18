# EditorConfig

## 1.说明

​	editorconfig 是配置编译器的代码规范规则的文件，其优先级高于编译器默认的代码格式规则。

在多人协作的团队，使用editorConfig可以更好的维护代码规范。

​	EditorConfig有助于将同一项目在不同编译器中显示一致的编码风格。

​	**EditorConfig文件的文件名为:**`.editorconfig`

## 2.常用配置

1. root  特殊属性
2. charset   编码格式

2. indent_style   缩进方式

3. indent_size 缩进大小
4. insert_final_newline  文件以空行结束
5. trim_trailing_whitespace 自动删除空白行中的空格
6. max_line_length 行长度限制

```powershell
"root":true or false  
# 特殊属性，应置于文件顶部且在任何部分外部。设置true时，阻止.editorconfig文件搜索当前文件

"charset":"utf-8","latin1","utf-8-bom","utf-16be","utf-16le"

"indent_style":"tab" or "space"

"indent_size":4 
# 数字，缩进几个tab或space

"tab_width":4  
# 数字，当indent_style设置为tab时，需要设置一个tab的宽度为几个space

"insert_final_newline":true or false 
# true:确保文件保存时以换行符结束（有空白行）

"trim_trailing_whitespace":true or false 
# true:删除空白行中的空格

# 任何属性，设置为"unset"时，即为删除该属性的设置。
# 属性与值，暂时不区分大小写
```

## 3.文件格式

| 符号         | 解释                                                    |
| ------------ | ------------------------------------------------------- |
| *            | 匹配任何字符串的字符，除了路径分隔符(/)                 |
| **           | 匹配任何字符串的串的字符                                |
| ?            | 匹配任何单个字符                                        |
| [name]       | 匹配/name/中的任何单个字符                              |
| [!name]      | 匹配不在/name/中的任何单个字符                          |
| { s1,s2,s3 } | 匹配给定的字符串(由逗号分隔)                            |
| {num1..num2} | 配任num1和num2之间的何整数,num1和num2可以是升序或者降序 |

## 4.使用方法

1. 下载插件（部分编译器不需要额外下载）
2. 在根目录下，新建 `.editorconfig`文件
3. 配置editorconfig

```powershell
# 例子
# Editor configuration, see http://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 4
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
max_line_length = off
trim_trailing_whitespace = false
```

## 5.编译器支持

不需要下载插件的编译器：

![不需要下载插件的编译器](/Users/apple/Desktop/editorconfig/no-plugin-necessary.png)

需要下载插件的编译器：

![需要下载插件的编译器](/Users/apple/Desktop/editorconfig/plugin-necessary.png)