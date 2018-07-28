# 在HTML中使用JavaScript



## \<script\> 标签

**6个属性**

1. **async** : 表示应该立即下载脚本，但不应妨碍页面中的其他操作，比如下载其他资源货等待加载其他脚本。只对外部脚本有效。
2. **charset** ： 表示铜通过src属性指定的代码的字符集。大多是浏览器会忽略他的值。
3. **defer** ：表示脚本可以延迟到文档完全被解析和显示后再执行。只对外部脚本文件有效。IE7及更早版本也支持。
4. **src** : 表示包含要执行代码的外部文件
5. **language** :  已弃用
6. **type** ： 可以看成language的替代属性。表示编写代码使用的脚本语言的内容类型（MINE类型）。

**使用**

1. 在页面中嵌入

 ```html
<script type="text/javascript">
	function sayHi(){
        alert('Hi!')
	}
</script>
 ```

包含在\<script\>元素内部的JavaScript代码将被从上到下依次解释。

解释器对\<script\>元素内部的所有代码求值完毕前，页面中其余内容不会被浏览器加载或显示。

**\*\***不要在\<script\>标签中出现"\</script\>",浏览器会认为那是结束的"\</script\>"标签。需要进行转义"<\/script>"

2. 引用外部的JavaScript文件

```html
<script type="text/javascript" src="example.js"></script>
```

在解析外部JavaScript文件（包括下载该文件）时，页面处理会暂时停止。

**\*\*** 带有src属性的\<script\>标签内部不应该再包含额外的JavaScript代码。如果包含了嵌入的代码，浏览器只会下载并执行外部脚本文件，嵌入的代码会被忽略。

### 标签的位置

为了避免加载JavaScript文件时，页面出现长时间的空白，JS引用放在\<body\>元素中，页面内容的后面。

```html
<!DOCTYPE html>
<html>
	<head>
		<title> Example HTML Page </title>
	</head>
	<body>
		<!--这里放内容 -->
		<script type="text/javascript" src="example1.js"></script>
		<script type="text/javascript" src="example2.js"></script>
	<body>
</html>
```

### 延迟脚本defer

```html
<!DOCTYPE html>
<html>
	<head>
		<title> Example HTML Page </title>
	</head>
	<body>
		<!--这里放内容 -->
		<script type="text/javascript" defer="defer" src="example1.js"></script>
		<script type="text/javascript" src="example2.js"></script>
	<body>
</html>
```

**\*\***把延迟脚本放在最底部是最佳选择

### 异步脚本async

```html
<!DOCTYPE html>
<html>
	<head>
		<title> Example HTML Page </title>
		<script type="text/javascript" async="async" src="example1.js"></script>
		<script type="text/javascript" async="async" src="example2.js"></script>
	</head>
	<body>
		<!--这里放内容 -->
	<body>
</html>
```

标记为async的脚本，不能保证按照指定它们的先后顺序执行。确保两者之间互不依赖非常重要。

指定async的目的是不让页面等待两个下载和执行，从而异步加载页面其他内容。

**\*\***异步脚本不要在加载期间修改DOM

异步脚本一定会在页面的load事件前执行，但可能会在DOMContentLoaded事件触发之前或之后执行。

## 嵌入代码与外部文件

**调用外部JS的优点**

1. 可维护性：遍及不同HTML页面的JS会造成维护问题。但把所有JS文件都放在一个文件夹下，维护起来就轻松很多。
2. 可缓存：浏览器能够根据具体的设置缓存链接的所有外部JS文件。
3. 适应未来：所有浏览器都支持

## 文档模式

通过使用文档类型（doctype）切换。

最初：**混杂模式（quirks mode）**和**标准模式（standard mode）**

##  \<noscript\>标签

浏览器不支持脚本或浏览器支持脚本但脚本被禁用时，\<noscript\>标签中的内容会显示。

```html
<html>
    <head>
        <title>Example</title>
    </head>
    <body>
        <!-- 内容放这里 -->
        <noscript type="text/javascript">
            <p>本页面需要在需要浏览器支持（启用）JavaScript</p>
        </noscript>
    </body>
</html>
```

