# VUE项目前端规范说明

# 1. 规范目的说明

## 1. 规范目的：

通过代码规范，实现代码风格的统一。以增强代码可读性、可维护性，提高团队协作效率，降低系统维护负担。

通过遵照最佳实践，以优化页面加载，优化性能，提高代码可维护性。

## 2. 总体原则

1. 命名规范，以简单明了、言简意赅为目的命名。
2. 合理拆分组件，细化组件
3. 添加必要注释，说明关键点及特殊点

# 2. 基本项目目录说明

```powershell
VUE Project
├─.babelrc   # babel配置文件
├─.gitignore  # git忽略文件配置
├─index.html  # 入口文件
├─package.json  # npm配置文件
├─README.md  # 项目介绍
├─tsconfig.json  # ts配置文件
├─.editorconfig  # 编译器格式配置文件
├─build  # 用于构建的配置文件目录
│  ├─build.js  # 生产环境构建脚本
│  ├─check-versions.js  # 版本检查
│  ├─dev-client.js  # 开发服务器热重载脚本
│  ├─dev-server.js  # 运行本地开发服务器
│  ├─utils.js  # 构建相关工具方法
│  ├─vue-loader.conf.js  # 处理.vue文件的配置文件
│  ├─webpack.base.conf.js  # webpack基础配置
│  ├─webpack.dev.conf.js  # webpack开发环境配置
│  └─webpack.prod.conf.js  # webpack生产环境配置
├─config  # 用于项目的配置文件目录
│  ├─dev.env.js  # 开发环境变量配置文件
│  ├─test.env.js  # 测试环境变量配置文件
│  ├─prod.env.js  # 生产环境变量配置文件
│  └─index.js  # 项目配置文件
├─src  # 源码目录
│  ├─main.js # 入口js文件
│  ├─components  # 公共组件目录
│  │  ├─widget # 基础组件
│  │  │  ├─base-button.vue
│  │  │  ├─base-table.vue
│  │  │  └─base-loading.vue
│  │  ├─common-header.vue # 头部
│  │  ├─common-footer.vue # 底部
│  │  └─common-menu-bar.vue # 菜单列表
│  ├─assets  # 资源目录
│  │  └─images # 图片
│  │     └─logo.png
│  ├─style  # 样式处理文件目录
│  ├─router  # 前端路由配置
│  │  ├─index.js # 路由入口文件
│  │  └─map  # 路由配置目录
│  │    ├─index.js  # 首页路由配置
│  │    ├─login.js  # 登录页路由配置
│  │    └─register.js  # 注册页路由配置
│  ├─services  # 服务配置
│  │  ├─api.js  # 请求配置文件
│  │  └─api-service.js  # 请求服务
│  ├─views # 页面目录
│  │  ├─index  # 首页
│  │  │  └─index.vue
│  │  └─notfound # 404页面
│  │     └─ notfound.vue
│  ├── lang  # 国际化翻译文件
│  │  ├─en.js # 英文文件
│  │  └─zh.js # 中文
│  ├── mock  # mock数据目录
│  │    └─mock-data.js # mock数据
│  ├─directives  # 自定义指令
│  │  └─index.js
│  ├─filters # 过滤器
│  │  ├─index.js
│  │  └─modules
│  │     └─time.js
│  └─vuex  # vuex状态管理
│      ├─store.js
│      └─modules
│          ├─common
│          │  ├─action.js
│          │  ├─getter.js
│          │  ├─module.js
│          │  └─mutation.js
│          └─user
│             ├─action.js
│             ├─getter.js
│             ├─module.js
│             └─mutation.js
│
└─static # 静态文件 *不会被webpack构建*
│   ├─css
│   ├─fonts
│   ├─images
│   └─js
└─ test  # 测试文件目录（unit&e2e）
    └─ unit  # 单元测试
         ├─ index.js  # 入口脚本
         ├─ karma.conf.js  # karma配置文件
         └─ specs  # 单测case目录
              └─ Hello.spec.js
```



# 3. 代码格式规范

## 1. 统一规范

### 1. 统一缩进

采用**4个空格**缩进，以保证不同开发人员在不同编译器中表现相同。

可通过`.editorconfig`进行配置,配置方式[点这里](https://editorconfig.org/)

### 2.VUE 规范

> 为增加代码可读性及团队协作提高代码可维护性，统一形成以下规范

仔细阅读VUE官方给出的[风格指南](https://cn.vuejs.org/v2/style-guide/)并以此为VUE代码编写规范

#### vue属性书写顺序

> 以生命周期顺序书写，未用到的不列出

```vue
export default {
  mixins,
  data,
  props,
  store,
  computed,
  route,
  created,
  ready,
  event,
  watch,
  components,
  methods
}
```



### 3. 命名规范

#### 1.文件夹

使用有意义的描述。

文件夹名字以小写字母，中划线`-`分割。

避免使用驼峰式命名及下划线`_`分割。

#### 2.文件名

使用有意义的描述。

文件名书写与文件名类似。

以小写字母，中划线`-`分割。

避免使用驼峰式命名及下划线`_`分割。

**特别注意**:[单文件组件文件的大小写](https://cn.vuejs.org/v2/style-guide/#单文件组件文件的大小写-强烈推荐),  [基础组件名](https://cn.vuejs.org/v2/style-guide/#基础组件名-强烈推荐),  [单例组件名](https://cn.vuejs.org/v2/style-guide/#单例组件名-强烈推荐),  [紧密耦合的组件名](https://cn.vuejs.org/v2/style-guide/#紧密耦合的组件名-强烈推荐),  [组件名中的单词顺序](https://cn.vuejs.org/v2/style-guide/#组件名中的单词顺序-强烈推荐)

#### 3.js类名/函数名

类名、构造函数采用**大驼峰**命名方式`ClassName`

函数名采用**小驼峰**命名方式，体现函数用途`getListData`,`initViewport`,`setTemplate`

#### 4.css样式class/id命名

使用**小写字母**，采用中划线`-`分割

### 4. 注释规范

> 块注释

`/*`与`*/`之间包围多行注释

> 行注释、 半行注释

`//`开头，写简单注释。

#### 1. 文件头注释

> 在代码文件最上面写块注释，说明文件主要内容

#### 2. 函数头注释

> 在函数前面写块注释，注明函数作用、输入、输出、业务逻辑

```js
/**
 *
 * Get url for different id.
 * @param {number} id
 * @return {string}
 *
 */
function getUrl(id){
    let url = null;
    switch(id){
        case 0: 
            url = 'api/v1/url';
            break;
        case 1:
            url = 'api/v2/url';
            break;
        default:
            url = 'api/v3/url';
            break;
    }
    return url
}
```

#### 3. 伪代码注释

> 在函数内部写行注释，注明业务逻辑 或 关键语句注释 或 特殊代码注释

#### 4. 特别说明

1. 注释并非越多越好，以简洁说明关键逻辑，关键算法、关键代码及特殊代码，增加代码可读性、可维护性为目的
2. 不必对每行，每个函数都进行注释说明
3. 对关键逻辑，关键算法，特殊代码必须注以注释说明

#### 5. 符号规范

1. 行末添加分号`;`

2. `if`,`else`,`for`,`while`,`do`,`switch`,`try`,`catch`,`finally`,`with`后必须有大括号关于大括号

   ```js
   if(true){
   	doSomething();
   }else{
   	doOther();
   }
   ```

3. 尽量使用单引号

## 2. less/sass编写规范

### 1、媒体查询

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

*ps: 可根据设计图适当调整*

### 2、文件架构

```powershell
style
|
|--main
|	|--_theme.scss  #全局样式定义
|	|--_variable.scss  #全局变量，组件定义
|
|--widget
|	|--_XXX.scss  #小工具 大屏样式 
|	|--_XXX.md.scss #小工具 中屏样式 
|	|--_XXX.sm.scss #小工具 小屏及超小屏样式
|
|--pages
|	|--_XXX.scss  #页面 大屏样式 
|	|--_XXX.md.scss #页面 中屏样式 
|	|--_XXX.sm.scss #页面 小屏及超小屏样式
|
|--style.scss #大屏样式
|--style-md.scss #中屏样式
|--style-sm.scss #小屏及超小屏样式
```

*ps：根据实际需求增删响应模块文件*

### 3、代码规范

#### 1.命名规范

* 英文，小写，有意义
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

2. 盒模型

> width, height, padding, margin

3. 文字系列

> font, line-height, letter-spacing, color, text-align 等

4. 背景

> background, border 等

5. 其他

> animation, transition 等

**说明**

position处在第一位，因为他可以使一个元素脱离正常文本流，并且覆盖盒模型相关的样式。

盒模型紧跟其后，因为他决定了一个组件的大小和位置。

其他属性只在组件内部起作用或者不会对前面两种情况的结果产生影响，所以他们排在后面。

#### 3. 其他事项

1. 尽量避免使用脱离正常文档流的css样式
2. 尽量避免使用important强制修改样式
3. 属性选择器使用单引号`''`取属性值 `input[type='text']`
4. 不要为0指明单位
5. 尽量使用简单的小写16进制颜色数字。例：使用`#fff` 替代`#ffffff` `#FFF` `#FFFFFF`
6. 特殊代码一定要添加注释说明。例如兼容性代码、避免父元素塌陷的代码等



