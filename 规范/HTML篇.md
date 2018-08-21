# HTML代码规范

1. 文件放置于`templates` 文件夹下

2. 文件名使用有意义的描述，建议 `"模块"+"描述"`

3. 文件内注释声明当前文件的主要用途

4. 使用4格缩进

5. Doctype`使用HTML5 

   ```html
   <!DOCTYPE HTML>
   ```

6. 编码格式使用 `utf-8`

   ```html
   <meta charset="utf-8" />
   ```

7. 标签，使用小写，属性引号使用双引号

   ```html
   <a href="https://www.simright.com" data-attr="attr">Simright首页</a>
   ```

8. `<img/>`标签必须含有`alt`

9. 标签必须闭合

    ``` html
       <!--双标签-->
       <div></div>
       <a></a>
    ```

   <!--单标签-->
   <img />
   <input />
    ```

10. class,id命名

   * 使用小写
   * 首字符为字母
   * 链接使用中划线
   * 使用有意义的名词
11. css引用置于`<header>`标签中，原则上不使用内嵌`<style>`标签
12. js引用置于`</body>`标签前，原则上不使用内嵌`<script>`标签

## H5 标签

```
块元素
|
|--导航栏？（yes） --<nav>--网站或页内导航
|	|（no）
|--有自己的意义？（yes） --<article>--新闻文章、博客或论坛帖子,评论一篇文章,侧边栏小部件等,一个标题
|	|（no）
|--需要理解当前的内容？（no） --<aside>--侧边栏,评论区,术语表、广告、脚注等与页面内容没有太多联系
|	|（yes）
|--可以将其移至附录？（yes）--<figure>--一个或多个图像、图形代码示例等
|	|(no)
|--可以添加标题？（yes）--<section>--页面的一部分,或文章<article>的一章
|	|（no）
|--有语法？（yes）--<p>,<address>,<blockquote>,<pre>...
|	|(no)
| <div>
```

