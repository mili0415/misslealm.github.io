---
createTime: 2017/03/10 12:34:25
chinese:   提示框
type: Views
english: Alert
title:变量和作用域
description:动态类型是指在声明变量时，不需要指定类型，也就是说变量可以存放任何类型的数据，直译语言是指在代码是在运行时解释执行的。同时JavaScript也是一个基于原型的语言（下一节会讲到），也是一门多范式语言，它支持面向对象编程，命令式编程以及函数式编程。 在语法上JavaScript与C语言有很多相似的地方，比如判断和循环等


---



alert 提示

## API
| 参数        | 说明                                                      | 类型        | 默认值 |
|----------- |---------------------------------------------------------  | ---------- |-------|
|title       | 提示标题 |string | ''|
|msg | 提示主要内容| string |'' |
|secondMsg | 副提示语 | string | ''|
|okText | 确认按钮显示文字 | string| 确定|
|onOK | 确认回调 | function | function|
|onCancel | 取消确定回调| function | function|