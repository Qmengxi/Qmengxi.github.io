# 从零开始的jest

[中文文档](https://jestjs.io/docs/zh-Hans/getting-started)

## 安装

使用`npm`安装:`npm install jest --save-dev` 或 `npm install jest --global`

使用`yarn`安装:`yarn add --dev jest`  或`yarn global add jest`

## 使用

1. 项目内使用局部安装的jest

项目内安装jest，package.json 配置test部分

```json
{
    "script":{
        "test":"jest"
    }
}
```

运行`yarn test`  或 `npm run test`

2. 全局安装使用

示例：匹配`my-test`文件，使用`config.json`作为配置文件，并在运行后显示一个原生的操作系统通知

`jest my-test --notify --config=config.json`

[更多jest cil选项看这里](https://jestjs.io/docs/zh-Hans/cli)

## 更多配置

1. 生成一个基础的配置文件

`jest --init`

2. 使用babel

`yarn add --dev babel-jest @babel/core @babel/preset-env `

或 `npm install --dev babel-jest @babel/core @babel/preset-env`

创建`babel.config.js` 配置与node版本兼容的babel



## 匹配器

### 普通匹配器

测试值是否精确匹配

* `toBe`匹配值
* ` ` 匹配对象、数组

```js
test("two puls two is four",()=>{
    expect(2+2).toBe(4);
})
```

`expect(2+2)`返回一个期望对象

`.toBe(4)`是匹配器。当Jest运行时，它会跟踪所有失败的匹配器以便打印出很好的错误消息。

使用`toEqual`代替`toBe`检测对象的值.`toEqual`递归检查对象或数组的每个字段。

```js
test('object assignment',()=>{
    const data = {one:1};
    data['two'] = 2;
    expect(data).toEqual({
        one:1,
        two:2
    })
})
```

* `not`相反的匹配

测试相反的匹配：

```js
test('adding positive number is not zero',()=>{
    for(let a=1;a<10;a++){
        for(let b=1;b<10;b++){
            expect(a+b).not.toBe(0);
        }
    }
})
```

### Truthiness

- `toBeNull` 只匹配 `null`
- `toBeUndefined` 只匹配 `undefined`
- `toBeDefined` 与 `toBeUndefined` 相反
- `toBeTruthy` 匹配任何 `if` 语句为真
- `toBeFalsy` 匹配任何 `if` 语句为假

```js
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});
```

### 数字

大多数的比较数字有等价的匹配器

* `toBeGreaterThan` 大于`>`
* `toBeGreaterThanOrEqual` 大于等于 `>=`
* `toBeLessThan` 小于`<`
* `toBeLessThanOrEqual`小于等于`<=`
* `toBe` 等于 `=`
* `toEqual` 等于 `=`  ---- 递归检查对象或数组的每个字段
* `toBeCloseTo` 比较浮点数 相等----接近

```js
test('two puls two',()=>{
    const value = 2+2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4);
    //toBe和toEqual在数字上是等价的
    expect(value).toBe(4);
  	expect(value).toEqual(4);
})

//对比浮点数，使用toBeCloseTo 避免舍入的误差引起测试失败
test('两个浮点数字相加', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           这句会报错，因为浮点数有舍入误差
  expect(value).toBeCloseTo(0.3); // 这句可以运行
});
```

### 字符串

* toMatch 检查具有`toMatch`正则表达式的字符串

```js
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});
```

### 数组、可迭代对象

* `toContain` 检查一个数组或者可迭代对象是否包含某个特定项

```js
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
  expect(new Set(shoppingList)).toContain('beer');
});
```

### 抛出错误

* `toThrow`测试一个特定函数抛出错误

```js
function compileAndroidCode(){
    throw new Error('you are using the wrong JDK')
}
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);

  // 也可以使用特定的错误信息或者正则表达式
  expect(compileAndroidCode).toThrow('you are using the wrong JDK');
  expect(compileAndroidCode).toThrow(/JDK/);
});
```

## 异步代码测试

### 回调

**Jest测试，一旦执行到末尾就会结束**

```js
test('data is peanut butter',done=>{
    function callback(data){
        expect(data).toBe('peanut butter');
        done();
    }
    fetchData(callback);
})
```

如果done()永远不会调用，则测试失败。

### Promise

在测试中返回一个Promise，Jest将等待Promise被resolve，若reject，则测试失败。

如果不写 `return` 语句的话，在 `fetchData` 返回的这个 promise 被 resolve、then() 有机会执行之前，测试就已经被视为已经完成了。

如果想Promise被reject，使用`.catch`方法。使用`expect.assertions`来验证一定数量的断言被调用。

```js
test('data is peanut butter',()=>{
    return fetchData().then(data=>{
        expect(data).toBe('peanut butter');
    })
})

test('the fetch fails with error',()=>{
    expext.assertions(1);
    return fetchData().catch(e=>expect(e).toMatch('error'));
})
```

可以在expect语句中使用`.resolves`匹配器，Jest将等待Promise解决。

如果Promise被拒绝，则测试将自动失败。

```js
test('the data is peanut butter',()=>{
    return expect(fetchData()).resolves.toBe('peanut butter');
})

test('the fetch fails with error',()=>{
    return expect(fetchData()).rejects.toMatch('error');
})
```



### Async / Await

同样

```js
test('the data is peanut butter',async()=>{
    const data = await fetchData();
    expect(data).toBe('peanut butter');
})

test('fetch fails with an error',async()=>{
    expect.assertions(1);
    try{
        await fetchData();
    }catch(e){
        expect(e).toMatch('error')
    }
})
```

使用`.resolves` 或 `rejects`

```js
test('the data is peanut butter',async()=>{
    await expect(fetchData()).resolves.toBe('peanut butter');
})

test('fetch fails with an error',async()=>{
    await expect(fetchData()).rejects.toThrow('error')
})
```

## 设置和拆卸

Jest提供辅助功能来处理在运行测试前的一些准备工作和在运行测试后进行的一些整理工作。

### 为多次测试重复设置

`beforeEach`  和 `afterEach`可以实现多次测试重复设置，能够通过与[异步代码测试](https://jestjs.io/docs/zh-Hans/asynchronous)相同的方式处理异步代码。（采用done参数或者返回一个Promise）

例如：必须在每个测试之前调用方法`initializeCityDatabase()`，同时必须在每个测试后，调用方法`clearCityDatabase()`。

```js
beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});
```

### 一次性设置

`beforeAll` 和`afterAll` 在文件的开头处设置一次。

例如，设置函数返回了promise

```js
beforeAll(()=>{
    return initializeityDatabase();
})
afterAll(()=>{
    return claerCityDatabase();
})

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});
```

### 作用域

默认情况下，`before`和`after`的块可以应用到文件中的每个测试。

可以通过`describe`块来将测试分组。

当`before`和`after`的块在`describe`块内部时，则其仅适用于该`describe`块内的测试

钩子执行顺序

```js
beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));
test('', () => console.log('1 - test'));
describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll'));
  afterAll(() => console.log('2 - afterAll'));
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));
  test('', () => console.log('2 - test'));
});

//1 - beforeAll
//1 - beforeEach
//1 - test
//1 - afterEach
//2 - beforeAll
//1 - beforeEach
//2 - test
//2 - afterEach
//1 - afterEach
//2 - afterAll
//1 - afterAll
```

### describe和test的执行顺序

Jest会在所有真正测试开始之前执行测试文件里的所有describe处理程序。

当describe块运行完成后，默认情况下，Jest会按照test出现的顺序一次运行所有测试，等待每一个测试完成并整理好，然后才往下走。

### 通用建议

如果测试失败，首先检查仅运行这条测试时，是否仍然失败。

`test.only`

```js
test.only('this will be the only test that runs', () => {
  expect(true).toBe(false);
});

test('this test will not run', () => {
  expect('A').toBe('A');
});
```

## Mock Functions

Mock函数可以测试代码之间的连接。

实现方式：擦除函数的实际实现、捕获对函数的调用（以及在调用中传递的参数）、在使用`new`实例化时捕获构造函数的实例、允许测试时配置返回值。

模拟函数：

* 在测试代码中创建一个mock函数
* 编写一个手动mock来覆盖模块依赖

### 使用mock函数

测试forEach的内部实现

```js
function forEach(items,callback){
    for(let index = 0;index < items.length; index++){
        callback(items[index])
    }
}
```

测试函数：

```js
const mockCallback = jest.fn(c=>42+x);
forEach([0,,1],mockCallback);
expect(mockCallback.mock.calls.length).toBe(2);//mock函数被调用2次
expect(mockCallback.mock.calls[0][0]).toBe(0);//第一次调用函数时，第一个参数是0
expect(mockCallback.mock.calls[1][0]).toBe(1);//第二次调用函数时，第一个参数是1
expect(mockCallback.mock.result[0].value).toBe(42);//第一次调用函数返回值为42
```

### mock模拟

使用axios调用api返回data

使用`jest.mock()`自动模拟axios模块。可以为`.get`提供一个`mockResolvedValue`,返回假数据进行测试。

```js
import axios from 'axios';
import Users from './users';
jest.mock('axios');
test('should fetch users',()=>{
    const users = [{name:'Bob'}];
    const resp = {data:users};
    axois.get.mockResolvedValue(resp);
    
    return Users.all().then(data=>{
        expect(data).toEqual(users)
    })
})
```

