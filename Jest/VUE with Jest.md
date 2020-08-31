# VUE with Jest

1. 添加环境变量及test路径

在`jest.config.js`中添加

```js
testEnvironment: 'jsdom',
  verbose: true,
  testURL: "http://localhost/"
```

2. 安装@vue/test-utils

`npm install @vue/test-utils --save-dev`

## Shallow Rendering

shallow与mount一样，创建一个包含被挂载的渲染的VUE组件的Warpper，不同的是创建的是被存根的子组件。

> 保证关心的组件在渲染时没有同时将子组件渲染，避免子组件可能带来的副作用。

App.vue  父组件

```vue
<template>
  <div id='app'>
    <MessageList :messages='messages' />
  </div>
</template>

<script>
import MessageList from './components/MessageList';

export default {
  name: 'App',
  data() {
    return {
      messages: ['Hey John', 'Howdy Paco'],
    };
  },
  components: {
    MessageList,
  },
};
</script>
```

MessageList.vue  子组件

```vue
<template>
  <ul>
    <li v-for='(message,index) in messages' :key='index'>{{ message }}</li>
  </ul>
</template>

<script>
export default {
  name: 'list',
  props: ['messages'],
};
</script>
```

App.spec.js   测试文件

```js
// 导入shallowMount
import { shallowMount } from '@vue/test-utils';
//导入要测试的组件
import App from '../../src/App';

describe('App.test.js',()=>{
    let cmp;
   beforeEach(()=>{
       cmp = shallowMount(App, {
           data(){
               return{
                    messages:['Cat']
               }
           }
       })
   })
   it('equals messages to Cat',()=>{
       expect(cmp.vm.messages).toEqual(["Cat"]);
   })
    //生成快照
   it('has the expected html structure',()=>{
       expect(cmp.element).toMatchSnapshot();
   })
})
```

## 测试DOM结构

通过`mount`, `shallow`,  `find`,  `findAll`方法都可以返回一个包裹器对象。

包裹器会暴露很多封装、遍历和查询内部的VUE组件实例的便捷的方法。

`find` 和`findAll`方法都可以接受一个选择器作为参数。

`find`方法返回匹配选择器的Dom节点或者VUE组件的Wrapper。

`findAll`方法返回所有匹配选择器的Dom节点或VUE组件的Wrappers的WrapperArray。

选择器可以是CSS选择器  或  Vue组件   或 查找选项对象

* CSS选择器：匹配任何有效的CSS选择器
  * 标签选择器(div, a )
  * 类选择器（.foo, .bar)
  * 特性选择器（[type="text"]）
  * id选择器（#foo)
  * 伪类选择器（a:hover）
  * 复合选择器（div > .foo）

* Vue组件
* 查找选项对象
  * Name：根据组件的name选择`wrapper.find({name:'my-nav'})`
  * Ref：根据`$ref`选择元素。 `wrapper.find({ref:'myNav'})`

示例：

MessageList.vue 添加outer类

```vue
<template>
  <ul class="outer">
    <li v-for='(message,index) in messages' :key='index'>{{ message }}</li>
  </ul>
</template>

<script>
export default {
  name: 'list',
  props: ['messages'],
};
</script>
```

新建MessageList.spce.js

```js
import { shallowMount } from '@vue/test-utils';
import MessageList from '@/components/MessageList';

describe('Test for MessageList Component',()=>{
    let wrapper,vm;
    beforeEach(()=>{
        wrapper = shallowMount(MessageList,{
            propsData:{
                messages:['dog']
            }
        })
    })

    it('is a MessageList Component',()=>{
        //使用VUE组件选择器
        expect(wrapper.is(MessageList)).toBe(true);
        //使用CSS选择器
        expect(wrapper.is('.outer')).toBe(true);
        //使用CSS选择器
        expect(wrapper.contains('li')).toBe(true);
    })
    
    //使用exists()断言Wrapper或者WrapperArray是否存在
    it('not exists img',()=>{
        expect(wrapper.findAll('img').exists()).toBeFalsy()
    })

    //isEmpty()断言Wrapper不包含子节点
    it('isEmpty',()=>{
        expect(wrapper.isEmpty()).toBeFalsy()
    }))
})
```

## 测试Props

使用`propsData`传值,使用`props()`接受返回Wrapper vm 的props对象

```js
import { shallowMount } from '@vue/test-utils';
import MessageList from '@/components/MessageList';

describe('Test for MessageList Component',()=>{
    let wrapper,vm;
    beforeEach(()=>{
        wrapper = shallowMount(MessageList,{
            propsData:{
                messages:['dog']
            }
        })
    })
    
	it('接收到了dog作为Props',()=>{
        expect(wrapper.props().messages).toContain('dog')
    });
})
```

有时会对props 的 type 、 默认值 或者通过`validator`对Props进行自定义的验证

