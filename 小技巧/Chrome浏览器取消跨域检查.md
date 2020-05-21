# Chrome 浏览器取消跨域检查

前后端分离的项目，在开发环境中经常会遇到请求跨域拦截的问题

为了快速解决跨域问题~~

可以暂时取消浏览器的跨域检查

**ps：跨域检测是浏览器的安全机制，不是自己的项目谨慎取消哦~**

**Windows**

1. 新建一个Chrome浏览器快捷方式，可以自主命名用以区分没有设置取消跨域的快捷方式（比如：Chrome Dev）

2. 在Chrome Dev快捷方式上右键，打开‘属性’

3. 在“快捷方式”选项卡中，“目标”一栏的最后添加`--args --disable-web-security --user-data-dir=C:\ChromeDevData`   (ChromeDevData 文件夹名称可以自定义)

   ps：49之前的版本添加`--args --disable-web-security --user-data-dir`就可以了

4. 通过‘Chrome Dev’的快捷方式打开Chrome浏览器，会看到安全检查的提示，说明取消跨域检测设置成功。*

**MAC**

1. 打开终端

2. 新建文件夹（ChromeDevData）

3. 在终端输入命令

   ```shell
   open -n /Applications/Google\ Chrome.app/ --args --disable-web-security  --user-data-dir=/<YourPath>/ChromeDevData
   ```

   