## viewport

### 一、概念

移动设备上的viewport就是设备的屏幕上能用来显示网页的那块区域。

具体的讲，即浏览器上(或者app的webview)用来显示网页的区域。

但是，viewport又不局限于浏览器可视区域的大小，它可能比浏览器的可视区域大，也可能比浏览器的可视区域小。  

默认情况下，移动设备上的viewport要大于浏览器的可视区域。主要是考虑到移动设备的分辨率小于电脑。

所以，为了能够在移动设备上正常显示为PC端设计的网站，移动设备上的历览器会吧自己默认的viewport设为980px或1024px。

**浏览器默认viewport宽度**

* iPhone：980
* iPad：980
* Samsung：980
* Chrome：980
* Opera：980
* IE：1024

###  二、视口基础

```html
<meta name="viewport" content="width=device-width,initial-scale=1,maximun-scale=1">
```

* width:控制视口的宽度，可以是width=600这种确切数值，也可以是device-width这种特殊值(设备宽度)
* height：和 width 相对应，指定高度。
* initial-scale:控制页面最初加载的缩放等级
* maximun-scale:缩放最大比例
* minimun-scale:缩放最小比例
* user-scalable:是否允许用户缩放

### 二、1px在viewport中的显示

在PC端浏览器中，css的1px往往对应电脑屏幕的1个物理像素。

在移动端设备中，由于设备屏幕分辨率不同，css中的1px，往往对应的不是1个物理像素。用户对页面进行缩放后，css中的1px对应的物理像素也会增加或者缩小对应倍数。

devicePixlRatio属性：设备物理像素和设备独立像素的比例。

devicePixlRatio =  物理像素 ／ 独立像素

ps:独立像素：css中的px可看作设备的独立像素

### 三、viewport理论

**layout viewport** :页面实际宽度

**visual viewport**：浏览器可视宽度

**ideal viewport**：移动设备理想的viewport

visual viewport = ideal viewport / 当前缩放值

### 四、把当前viewport宽度设置为ideal viewport的宽度

```html
<meta name="viewport" content="width=device-width,initial-scale=1">
```





