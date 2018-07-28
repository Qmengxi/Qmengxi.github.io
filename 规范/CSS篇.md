## css篇

### 一、媒体查询

```css
/* 大屏lg 大于1200px */
@media(min-width:1200px){ ... }
/* 中等屏幕md 大于992px */
@media(min-width:992px){ ... }
/* 小屏sm 大于768px */
@media(min-width:768px){ ... }
/* 超小屏xs 小于768px */
@media(max-width:768px){ ... }
```

**主体最大宽度**

* lg:1200px;
* md:970px;
* sm:750px;
* xs:无

### 二、文件架构

```
scss
|
|--main
|	|--_theme.scss  //全局样式定义
|	|--_variable.scss  //全局变量，组件定义
|
|--widget
|	|--_XXX.scss  //小工具 大屏样式 
|	|--_XXX.md.scss //小工具 中屏样式 
|	|--_XXX.sm.scss //小工具 小屏及超小屏样式
|
|--pages
|	|--_XXX.scss  //页面 大屏样式 
|	|--_XXX.md.scss //页面 中屏样式 
|	|--_XXX.sm.scss //页面 小屏及超小屏样式
|
|--style.scss //大屏样式
|--style-md.scss //中屏样式
|--style-sm.scss //小屏及超小屏样式
|--style-admin.scss //admin部分样式
```

### 三、代码规范

#### 1.命名规范

* 英文，小写
* 尽量不缩写，除非一眼就明白
* 短名称时，使用能表达含义的名词
* 长名称，使用中划线

```
.info-title{
    XXX
}
.is-active{
    XXX
}
```

#### 2.书写顺序

1. 位置属性

> position,  top, right, z-index, display, float 等

2. 大小

> width, height, padding, margin

3. 文字系列

> font, line-height, letter-spacing, color, text-align 等

4. 背景

> background, border 等

5. 其他

> animation, transition 等