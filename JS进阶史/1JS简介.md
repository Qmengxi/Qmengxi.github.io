

# JS简介

JavaScript诞生于1995年。当时，主要目的：处理一些输入验证。

现在，JS不再局限于简单的数据验证，而是具备了与浏览器窗口及其内容等所有方面**交互**的能力。

JS已经成为一门功能全面的编程语言，能够处理复杂的**计算和交互**，拥有了**闭包**，**匿名函数**，甚至**元编程**等特性。

## JS简史

1. Netscape公司，布兰登·艾奇，开发LiveScript，同时用于浏览器和服务器(LiveWire)。搭热度----JavaScript。
2. 微软向自己产品IE加入JScript作为JavaScript实现
3. 1997年，以JavaScript1.1为蓝本的建议被提交到了ECMA(欧洲计算机制造商协会)。协会指定39号技术委员会负责“标准化一种通用、跨平台、供应商中立的脚本语言的语法和语义”------ECMA-262-------ECMAScript。
4. 浏览器开发商致力于将ECMAScript作为各自JavaScript实现的基础。

## JavaScript实现

```
			|---核心（ECMA）
			|
JavaScript---|--文档对象模型（DOM）
			|
			|--浏览器对象模型（BOM）
```

### 1、ECMAScript

1. ECMAScript与Web浏览器没有依赖关系，语言本身并不包含输入和输出关系。
2. Web浏览器只是ECMAScript实现可能的**宿主环境**之一。
3. 规定了语言的组成部分。
4. ECMAScript是对能够“实现该标准规定的各个方面”的语言的**描述**。

```
组成：
	语法					
	类型				
	语句				
	关键字	
	保留字				
	操作符				
	对象				
```



#### 版本

> ECMAScript 的不同版本又称版次，以第x版表示。

##### 第一版

​	本质上与Netscape的JavaScript1.1相同

​	删除了所有针对浏览器的代码

​	做了一些小改动：

​		要求支持Unicode标准（从而支持多语言开发）

​		对象在不同平台中的实现一致

##### 第二版

​	编辑加工的结果，是为了与ISO／IEC-16262保持严格一致。

​	没有任何新增、修改、删节。

##### 第三版

​	对该标准的第一次真正的修改

1. 字符串处理
2. 错误处理
3. 数值输出
4. 正则表达式的支持
5. 新控制语句的支持
6. try-catch异常处理的支持

##### 第四版

​	对这门语言进行了一次全面的检核修订。

​	修改过多，跨度过大，在发布前被放弃。

##### 第五版

​	即ECMAScript3.1。

​	力求澄清第三版中已知的歧义，并添加新的功能。

1. 原生JSON对象（用于解析和系列化JSON数据）
2. 继承的方法
3. 高级属性定义
4. 严格模式（对ECMAScript引擎解释和执行代码进行了补充说明）

#### ECMA兼容性

要想成为ECMAScript的实现，则该实现必须做到：

1. 支持ECMAScript-262描述的所有“类型、值、对象、属性、函数以及程序句法和语义”
2. 支持Unicode字符标准
3. 添加ECMAScript-262没有描述的“更多类型、值、对象、属性、函数”
4. 支持ECMAScript-262没有定义的“程序和正则表达式语法”

#### Web浏览器对ECMAScript的支持

2008年，5大浏览器（IE，FireFox，Safari，Chrome，Opera）全部做到了与ECMAScript-262兼容。

> *为不完全兼容

| 浏览器     | ECMAScript兼容性 |
| ---------- | ---------------- |
| IE5        | 第1版            |
| IE5.5～IE7 | 第3版            |
| IE8        | 第5版*           |
| IE9+       | 第5版            |

| 浏览器   | ECMAScript兼容 |
| -------- | -------------- |
| Chrome1+ | 第3版          |

| 浏览器          | ECMAScript |
| --------------- | ---------- |
| Firefox3.5～3.6 | 第5版*     |
| Firefox4.0+     | 第5版      |

| 浏览器         | ECMAScript |
| -------------- | ---------- |
| Safari3.x      | 第3版      |
| Safari4.x～5.x | 第5版*     |

### 2、文档对象模型（DOM）

> 文档对象模型是针对XML，但经过拓展用于HTML的应用程序编程接口。

Dom把整个网页映射为一个多层节点结构。这些节点包含着不同的数据类型。

#### 为什么使用Dom

防止微软与Netscape在Web开发领域上出现技术上的两强割据，浏览器互不兼容。W3C(万维网联盟)开始着手规划DOM。

#### Dom级别

**Dom1**:由**DOM核心**(Dom Core) 和**DOM HTML**组成---主要目标：映射文档的结构

​    **DOM Core**:规定如何映射基于XML的文档结构。

​    **DOM HTML**：在DOM核心的基础上加以拓展，添加了针对HTML的对象和方法。

**DOM2**：扩充了鼠标和用户事件、范围、遍历等细节模块。通过对象接口增加了对css的支持。

​    **DOM 视图（DOM View）**：定义了跟踪不同文档视图的接口。（例如：应用CSS之前和之后的文档）

​    **DOM事件（DOM Events）**：定义了事件和事件处理的接口。

​    **DOM样式（DOM Style）**：定义了基于CSS为元素应用样式的接口。

**DOM3**

1. 引入了以统一方式加载和保存文档的方法——在**DOM加载和保存模块**中定义。（DOM Load and Save）
2. 新增了验证文档的方法——在**DOM验证模块**中实现（DOM Validation）
3. 对DOM核心进行拓展，开始支持XML1.0规范，设计XML Infoset、Xpath和XML Base。

#### 其他DOM标准

1. SVG 1.0（Scalable Vector Graphic,可伸缩矢量图）
2. MathML 1.0 (Mathematical Markup Langulage,数学标记语言)
3. SMIL (Synchronized Multimedia Integration Language,同步多媒体集成语言)

### BOM 浏览器对象模型

> 从根本上讲，BOM只处理浏览器窗口和框架。

> 但人们习惯上也把所有针对浏览器的JavaScript拓展算作BOM的一部分

**拓展**：

1. 弹出新浏览器窗口的功能
2. 移动、缩放、关闭浏览器窗口的功能
3. 提供浏览器详细信息的navigator对象
4. 提供浏览器加载页面的详细信息的location对象
5. 提供用户显示器分辨率详细信息的screen对象
6. 对cookies的支持
7. 想XMLHttpRequest和IE的ActiveXObject对象

