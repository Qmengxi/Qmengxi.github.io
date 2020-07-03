

# Nuxt.js

# 搭建

确保安装npx（npx在NPM版本5.2.0默认安装了）

```shell
npx create-nuxt-app <项目名>
```

或用`yarn`

```shell
yarn create nuxt-app <项目名>
```

创建过程中需要进行一些选择

1. 项目名
2. 项目描述
3. 作者名
4. 选择开发语言
   1. JS
   2. TS
5. 选择包管理工具
   1. Yarn
   2. Npm
6. 选择UI框架
   1. None (无)
   2. [Bootstrap](https://github.com/bootstrap-vue/bootstrap-vue)
   3. [Vuetify](https://github.com/vuetifyjs/vuetify)
   4. [Bulma](https://github.com/jgthms/bulma)
   5. [Tailwind](https://github.com/tailwindcss/tailwindcss)
   6. [Element UI](https://github.com/ElemeFE/element)
   7. [Ant Design Vue](https://github.com/vueComponent/ant-design-vue)
   8. [Buefy](https://github.com/buefy/buefy)
   9. [iView](https://github.com/iview/iview)
   10. [Tachyons](https://github.com/tachyons-css/tachyons)
7. 选择服务器
   1. None (Nuxt默认服务器)
   2. [Express](https://github.com/expressjs/express)
   3. [Koa](https://github.com/koajs/koa)
   4. [Hapi](https://github.com/hapijs/hapi)
   5. [Feathers](https://github.com/feathersjs/feathers)
   6. [Micro](https://github.com/zeit/micro)
   7. [Fastify](https://github.com/fastify/fastify)
   8. [Adonis](https://github.com/adonisjs/adonis-framework) (WIP)
8. 选择Nuxt.js模块 (多选)
   1.  Axios
   2.  Progressive Web App (PWA) Support
   3.  DotEnv  
9. 选择格式检测工具(多选)
   1. ESLint   (保存时检测代码规范和错误)
   2. Prettier (保存时格式化、美化代码)
   3.  Lint staged files
   4.  StyleLint 
10. 选择测试工具
    1. None
    2. [Jest](https://github.com/facebook/jest)
    3. [AVA](https://github.com/avajs/ava)
11. 选择渲染模式
    1. Universal(SSR)
    2. SPA
12. 选择开发工具

# 添加css预处理器支持

[官方文档看这里](https://zh.nuxtjs.org/api/configuration-build/#styleresources)

1. 安装`@nuxtjs/style-resources`

```shell
//npm
npm install --save-dev @nuxtjs/style-resources

//yarn
yarn add @nuxtjs/style-resources
```

2. 根据需要安装`sass`,`scss`,`less`,`stylus`

```shell
//npm
npm install --save-dev sass-loader node-sass
npm install --save-dev less-loader less
npm install --save-dev stylus-loader stylus

//yarn
yarn add sass-loader node-sass
yarn add less-loader less
yarn add stylus-loader stylus
```

3. 修改`nuxt.config.js`

```js
//nuxt.config.js
export default {
  modules: [
    '@nuxtjs/style-resources'
  ],
  //全局配置，需要什么配置什么
  styleResources: {
    scss: './assets/variables.scss',
    less: './assets/**/*.less'
    // sass: ...
  }
}
```

## 配置公共样式

引入公共样式

```js
// nuxt.config.js
css:[
    'assets/css/common.css',  //css配置方案
    {
        src:'assets/less/common.less',    // less、sass等配置方案
        lang:'less'
    }
]

```



# 配置axios

在`plugins`下新建`services`文件夹

新建`api-path.js`用于统一编写api路径

```js
// services/api-path.js
const API = '/'

const news = {
  getNews: `${API}/example/api`
}

export default {
  news
}
```

新建`api-services.js`用于统一处理方法
```js
import Http from 'axios'
import API from './api-path'

Http.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'

/**
 * encode get 请求对象
 * @param params
 * @returns {string}
 */
const encodeParams = params => {
  const r = '?'
  const p = []
  for (const key in params) {
    p.push(`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  }
  return r + p.join('&')
}

/**
 * 请求类
 */
class ApiService {
  constructor() {
    this.news = {
      getNews: this.get.bind(this, API.news.getNews)
    }
    this.interceptorsOfReq()
    this.interceptorsOfRes()
  }

  /**
   * get请求
   * @param url
   * @param params
   * @returns {Promise.<TResult>}
   */
  get(url, params) {
    if (params) {
      url += encodeParams(params)
    }
    return Http.get(url).then(res => res.data)
  }

  /**
   * post请求
   * @param url       请求地址
   * @param params    请求参数
   * @param flag      是否需要加签名
   * @returns {Promise.<TResult>}
   */
  post(url, params) {
    if (!params) {
      params = {}
    }
    return Http.post(url, params).then(res => res.data)
  }

  /**
   * 请求拦截器
   */
  interceptorsOfReq() {
    return Http.interceptors.request.use(
      config => {
        // 如果需要token验证, 头部带上token
        // config.headers.token = token
        return config
      },
      err => {
        return Promise.reject(err)
      }
    )
  }

  /**
   * 响应拦截器
   */
  interceptorsOfRes() {
    Http.interceptors.response.use(
      response => {
        //          console.log('响应完整数据==', response);
        //          console.log('响应数据==', response.data);
        return response
      },
      function(error) {
        return Promise.reject(error)
      }
    )
  }
}

export default new ApiService()
```

在`plugins`新建`services.js` 用于全局处理请求

```js
//main.js
import Vue from 'vue'
import ApiService from './services/api-services'

//设置全局$http
const apiService = {
  install(Vue) {
    Vue.prototype.$http = ApiService
  }
}

Vue.use(apiService)

// 为了在 asyncData 方法中使用
export default ({ app }, inject) => {
  app.$http = ApiService
}
```

在`nuxt.config.js`中注册plugin

```js
//nuxt.config.js
plugins: [
    {
        src: '~/plugins/services',
        ssr: true
    }
],
```

使用方法

```js
getNews() {
    this.$http.news.getNews().then(res => {
        //res操作
    })
}
```



# 配置代理

1. 安装`@nuxtjs/proxy `

```shell
npm install @nuxtjs/proxy  --save
```

2. 配置`nuxt.config.js`

```js
modules: [
    // 请求代理配置，解决跨域
    '@nuxtjs/proxy',
],
proxy: {
    '/xx': {
      target: 'http://xxx.xxx.xxx.xxx:xxxx',
      changeOrigin: true,
      pathRewrite: {
        '^/xx': '/xx'
      }
    }
  },
```

**ERROR：connect ECONNREFUSED 127.0.0.1:80**

nuxt的生命周期，beforeCreated 和 created 是同时运行在服务端和客户端上的，mounted以后才会运行在客户端。

created生命周期里请求跑在服务端，那么superagent 内部是用的node url parse 去解析你的这个 /api 参数的，然后再传给相应的如 [http request](http://nodejs.cn/api/http.html#http_http_request_options_callback)，所以默认就是80端口

需要改下生命周期就行了，在created里请求数据，改为mounted里去请求

# 配置国际化 nuxt-i18n

[文档看这里](https://nuxt-community.github.io/nuxt-i18n/)

## 安装

```shell
//npm
npm install nuxt-i18n

//yarn
yarn add nuxt-i18n
```

添加到module配置

```js
//nuxt.config.js
{
    modules:[
        ['nuxt-i18n',{
            /* i18n配置 */
        }]
    ]
}

//或者使用全局配置
{
    modules:[
        'nuxt-i18n'
    ],
    i18n:{
        /* i18n配置 */
    }
}
```

## 基本配置

新建lang文件夹，放置语言包

zh.js

```js
const zh = {
  navList: [
    {
      name: '首页',
      path: 'index',
      obj: null
    },
    {
      name: '关于',
      path: 'about',
      obj: null
    },
  ]
}

export default zh
```

en.js

```js
const en = {
  navList: [
    {
      name: 'Home',
      path: 'index',
      obj: null
    },
    {
      name: 'About',
      path: 'about',
      obj: null
    },
  ]
}

export default en
```

新建i18n.js配置文件

```js
// element-ui语言包，要先于自定义语言包引入
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

// 自定义的语言包
import zh from './zh'
import en from './en'

const mergeZH = Object.assign(zhLocale, zh)
const mergeEN = Object.assign(enLocale, en)

const I18N = {
  locales: [
    {
      code: 'en',
      iso: 'en'
    },
    {
      code: 'zh',
      iso: 'zh'
    }
  ],
  baseUrl: 'https://xxx.xxx.xxx',
  defaultLocale: 'zh',
  detectBrowserLanguage: { 
    useCookie: true, //是否使用浏览器默认语言配置
    cookieKey: 'i18n_redirected',
    alwaysRedirect: true
  },
  vueI18n: {
    fallbackLocale: 'zh',
    messages: {
      en: mergeEN,
      zh: mergeZH
    }
  }
}

export default I18N
```

在nuxt.config.js中配置modules

```js
import I18N from './lang/i18n'
 
module.exports = {
  modules: [
    ['nuxt-i18n', I18N],
  ]
```

修改element-ui语言配置

```js
//plugins/element-ui.js

import Vue from 'vue'
import Element from 'element-ui'

export default ({ app }) => {
  Vue.use(Element, {
    i18n: (key, value) => app.i18n.t(key, value)
  })
}
```



## 路由国际化

### 四种路由方案

1. 不使用任何前缀 `no-prefix`
2. 非默认语言使用前缀`prefix_except_default`
3. 所有语言都有前缀 `prefix`
4. 所有语言都有前缀，默认语言可以没有前缀 `prefix_and_default`

**ps: **

**若nuxt版本低于2.10.2，并使用`prefix_except_default`或`prefix_and_default`方案，默认语言要排在语言环境数组最后**

```js
// nuxt.config.js

['nuxt-i18n',{
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales:['zh','en']
}]
```

### 根据语言自定义路径

**组件内定义**

```js
// pages/about.vue  非动态路由
export default {
  nuxtI18n: {
    paths: {
      en: '/about-us', // -> /about-us 
      fr: '/a-propos', // -> /fr/a-propos
      es: '/sobre'     // -> /es/sobre
    }
  }
}

// pages/articles/_name.vue   动态路由
export default {
  nuxtI18n: {
    paths: {
      en: '/articles/:name',
      es: '/artículo/:name'
    }
  }
}
```

**模块中配置**

```js
//pages目录
pages/
├── about.vue
├── services/
├──── index.vue
├──── development/
├────── index.vue

// nuxt.config.js
['nuxt-i18n', {
  parsePages: false,   // 禁用babel解析
  pages: {
    about: {
      en: '/about-us', // -> /about-us
      fr: '/a-propos', // -> /fr/a-propos
      es: '/sobre'     // -> /es/sobre
    },
   'services/index': {
      en: '/services',
      fr: '/offres',
    },
    'services/development/index': {
      en: '/services/development',
      fr: '/offres/developement',
    },
  }
}]
```

​    **注意**

pages对象中的每个键对应于 `/pages`目录中的完整文件路径

所有的键：

1. 相对于`pages`目录，不需要`/`开头
2. 直接指向文件，不需要后缀

所有的值：

1. 以`/`开头
2. 所有子路径要重复设置完整URL

# 配置SEO

结合nuxt-i18n，配置多语言seo

```js
// vue文件中
export default {
  head () {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
      htmlAttrs: {
        myAttribute: 'My Title',
        ...i18nSeo.htmlAttrs
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My Custom Description'
        },
        ...i18nSeo.meta
      ],
      link: [
        {
          hid: 'apple-touch-icon',
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        ...i18nSeo.link
     ]
    }
  }
}

// 可以通过$t()配置不同语言版本seo关键词及描述
```

# 配置路由

[文档看这里](https://nuxtjs.org/guide/routing)  ,  [中文看这里](https://zh.nuxtjs.org/guide/routing)

## 路由跳转

```html
<template>
  <nuxt-link to="/">Home page</nuxt-link>
</template>
```

**nuxt路由没有配置文件，根据pages下文件目录生成路由**

## 基础路由

```shell
pages/
--| user/
-----| index.vue
-----| one.vue
--| index.vue
```

路由结果

```js
router: {
  routes: [
    {
      name: 'index',
      path: '/',
      component: 'pages/index.vue'
    },
    {
      name: 'user',
      path: '/user',
      component: 'pages/user/index.vue'
    },
    {
      name: 'user-one',
      path: '/user/one',
      component: 'pages/user/one.vue'
    }
  ]
}
```

## 动态路由

```shell
pages/
--| users/
-----| index.vue
-----| _id.vue
--| _slug/
-----| comments.vue
-----| index.vue
--| index.vue
```

路由结果

```js
router: {
  routes: [
    {
      name: 'index',
      path: '/',
      component: 'pages/index.vue'
    },
    {
      name: 'users',
      path: '/users',
      component: 'pages/users/_id.vue'
    },
    {
      name: 'users-id',
      path: '/users/:id?',
      component: 'pages/users/_id.vue'
    },
    {
      name: 'slug',
      path: '/:slug',
      component: 'pages/_slug/index.vue'
    },
    {
      name: 'slug-comments',
      path: '/:slug/comments',
      component: 'pages/_slug/comments.vue'
    }
  ]
}
```

## 嵌套路由

子组件在父元素得到`<nuxt-child/>`中显示

```shell
pages/
--| users/
-----| _id.vue
-----| index.vue
--| users.vue
```

路由结果

```js
router: {
  routes: [
    {
      path: '/users',
      component: 'pages/users.vue',
      children: [
        {
          path: '',
          component: 'pages/users/index.vue',
          name: 'users'
        },
        {
          path: ':id',
          component: 'pages/users/_id.vue',
          name: 'users-id'
        }
      ]
    }
  ]
}
```

# 打包、部署

[文档看这里](https://nuxtjs.org/guide/commands)  ， [中文看这里](https://zh.nuxtjs.org/guide/commands)

两种部署模式：服务端渲染应用部署，静态页面部署

## 服务端渲染应用部署

> 需要在服务器端安装node

```shell
nuxt build  # 编译构建
nuxt start # 启动应用
```



## 静态应用部署

根据路由配置，将应用静态化

```shell
# Nuxt >= v2.13:
nuxt build && nuxt export

# Nuxt <= v2.12:
nuxt generate
```

