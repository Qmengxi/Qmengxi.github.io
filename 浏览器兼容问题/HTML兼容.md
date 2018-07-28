## HTML篇

### HTML 标签

传送门：http://www.runoob.com/tags/ref-byfunc.html



### HTML4与HTML5 的区别

传送门 ：https://segmentfault.com/a/1190000002453884



### IE条件注释

| 操作符 | 含义     |
| ------ | -------- |
| lt     | 小于     |
| gt     | 大于     |
| lte    | 小于等于 |
| gte    | 大于等于 |
| !      | 不等于   |

```html
//如果小于IE9，即IE8，7，6，5
<!–[if lt IE 9]> 
	<p>小于IE9</p>
<![endif]–>

//如果大于IE9，即IE10，11
<!–[if gt IE 9]> 
	<p>大于IE9</p>
<![endif]–>

//如果小于等于IE9，包含IE9
<!-[if lte IE9]>
	<p>小于等于IE9,包含IE9</p>
<![endif]->

//大于等于IE9,包含IE9
<!-[if gte IE9]>
<p>大于等于IE9,包含IE9</p>
<![endif]->

//不是IE9
<!-[if !IE9]>
<p>大于等于IE9,包含IE9</p>
<![endif]->
```



### 让IE6-IE8 支持HTML5 标签

1. 工具：html5shiv

2. 方法：

   > ```html
   > <!–[if lt IE 9]> 
   > 	<script src="http://cdn.staticfile.org/html5shiv/r29/html5.min.js"></script> 
   > <![endif]–>
   > ```

   如果需要的元素较少，可以在头部创建少量HTML5标签

   > ```html
   > <!--[if lt IE 9]>
   >     <script>
   >         document.createElement("header");
   >         document.createElement("footer");
   >         document.createElement("nav");
   >         document.createElement("article");
   >         document.createElement("section");
   > 		document.createElement("canvas");
   >     </script>
   > <![endif]-->
   >
   > //或者
   > <!--[if IE]>
   >     <script>
   >      (function(){
   > 		if(!/*@cc_on!@*/0)
   > 			return;
   > 		var e = "header,footer,nav,article,section".split(','),
   > 				i=e.length;
   > 		while(i--){
   > 			document.createElement(e[i])
   > 			}
   > 		})()
   >     </script>
   > <![endif]-->
   > ```

3. 对禁用脚本的浏览器进行提示处理

   > ```html
   > //如果小于IE8版本
   > <!--[if lte IE 8]> 
   >     <noscript> 
   >          <style>
   >             .html5-wrappers{
   >                 display:none!important;
   >             }
   >         </style> 
   >          <div class="ie-noscript-warning">
   >             您的浏览器禁用了脚本，请查看这里来启用脚本!或者继续访问. 
   >          </div> 
   >     </noscript> 
   > <![endif]—>
   > ```

4. css 处理：

   > ```
   > article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}
   > ```



## Doctype 触发的兼容问题

#### 浏览器模式

1. 混杂模式，怪异模式：width = border+padding+innerwidth 
2. 接近标准模式 :
3. 标准模式 : width = innerwidth

#### DOCTYPE 推荐写法

> <!DOCTYPE html>
>
> ** 在这种模式下，IE6，IE7表现为“接近标准模式”，IE8及其他浏览器表现为“标准模式”



## Layout

### 部分元素默认具有hasLayout

1. html,body
2. table,tr,th,td
3. img
4. hr
5. input, button,select,textarea,fieldset,legend
6. iframe
7. embed, object,applet,marquee

