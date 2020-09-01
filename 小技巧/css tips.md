# css tips

## 1. 快速重置表单元素 unset

```css
button,input,textarea{
	all: unset;
}
```

## 2.文本省略号

**单行文本**

```css
div{
	white-space:nowrap;/*书写不折行*/
	overflow:hidden;
	text-overflow:ellipsis;
}
```

**多行文本**

```css
div{//不用设置高度
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -wekite-line-clamp:4; /* 控制最多显示几行 */
    -webkite-box-orient:vertical;
}
```

[灵活运用CSS开发技巧](https://juejin.im/post/5d4d0ec651882549594e7293)