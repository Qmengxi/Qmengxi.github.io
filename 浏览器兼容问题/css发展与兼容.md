# CSS篇

## 抹平浏览器见默认样式的区别

1. normalize.css

   > ```html
   > <link href="https://cdn.bootcss.com/normalize/7.0.0/normalize.min.css" rel="stylesheet">
   > ```

2.   根据需求自己定义标签默认样式

## 解决IE9以下，不支持CSS3 Media查询

response.js

```html
<script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
```

## cursor url()
兼容IE与Edge,使用.cur文件,图片地址使用绝对路径

## transform 动画内文字晃动
使用position，top等替换translate
