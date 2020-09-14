---
title: HTML
date: 2020-09-09
categories:
 - 笔记
tags:
 - 笔记
---

# HTML基本结构：
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
   
</body>
</html>
```
html：所有html中标签的一个根节点  
head：头部标签  
title：标题标签，让页面有一个属于自己的标题  
body：页面的主体部分  

# HTML标签的分类：
- 双标签
`<标签名>内容</标签名>`
- 单标签
`<标签名 />`

# HTML常用标签
## 排版标签
排版标签主要是和css搭配使用，显示网页结构的标签，是网页布局最常用的标签

### 标题标签(熟记)
6个等级标题：`<h1>、<h2>、<h3>、<h4>、<h5>、<h6>`  
标题标签语义：作为标题使用，并且依据重要性递减
语法：`<hn> 标题文本 </hn>`  
**注意：h1标签因为重要，尽量少用，一般都是给logo使用，或者页面中最重要的标题信息**  

### 段落标签(标记)
语法：`<p> 文本内容 </p>`  

### 水平线标签(认识)
语法：`<hr />`  

### 换行标签(认识)
语法：`<br />`  

### div+span标签(重点)
div span 是没有语义的，是我们网页布局主要的2个盒子  
语法：`<div> 这是头部 </div>    <span> 今日价格 </span>`  

### 文本格式化标签(熟记)
标签属性：  
标签|显示效果
--|:--:
`<b></b><strong></strong>`|文字以粗体方式显示（XHTML推荐使用strong）
`<i></i><em></em>`|文字以斜体方式显示（XHTML推荐使用em）
`<s></s><del></del>`|文字以加删除线方式显示（XHTML推荐使用del）
`<u></u><ins></ins>`|文字以加下划线方式显示（XHTML推荐使用ins）
b i s u 只有使用，没有强调的意思      strong em del ins 语义更强烈  

### 图像标签img(重点)
语法：`<img src = “图像url” />`  
该语法中src属性用于指定图像文件的路径和文件名，是img标签的必须属性  
属性|属性值|描述
--|:--:|--:
src|URL|图像的路径
alt|文本|图像不能显示时的替换文本
title|文本|鼠标悬停在图片上时显示的内容
width|像素|（XHTML不支持%页面百分比） 设置图像的宽度
height|像素|（XHTML不支持%页面百分比） 设置图像的高度
border|数字|设置图像边框的宽度
### 超链接标签a(重点)
语法：`<a href = “跳转目标” target = “目标窗口弹出方式”>文本或图像</a>`
- href 指定连接目标的url地址
- target 指定连接页面的打开方式，取值selft和blank，其中self为默认打开方式，blank为在新窗口打开方式  
**注意：**
外部链接 需要添加：http://协议  
内部链接 直接链接内部页面的名称即可  
空连接 href = “#”  
图像、表格、音频、视频都可以添加超链接  

## 锚点定位(难点)
作用：定位到目标地点  
创建锚点定位分为两步：  
+ 使用 “a href =” #id名” 链接文本/a创建链接文本
+ 使用相应的id名标注跳转目标的位置
## base标签
主要是为了设置整体超链接的打开方式  
`<base href="" target="_blank" />`  
如果有单个页面需要以其他方式进行跳转，可以单独设置 target打开方式  
## 特殊字符标签(理解)
HTML为这些特殊字符准备了专门的替代代码
特殊字符|描述|字符的代码
--|:--:|--:
  |空格符|&nbsp;
< |小于号|&lt;
> |大鱼号|&gt;
&|和号|&amp;
￥|人民币|&yen;
©|版权|&copy;
®|注册商标|&reg;
℃|摄氏度|&deg;
±|正负号|&plusmn;
×|乘号|&times;
÷|除号|&divide;
2|平方2（上标2）|&sup2;
3|平方3（上标3）|&sup3;

## HTML中的注释
html中的注释语法：`<!--  -->`  
多写注释是非常好的写代码的习惯，团队协作更流畅  
注释是写给队友看的，浏览器是不执行的  

## 相对路径
1. 图像文件和HTML文件位于同一文件夹：只需要输入图像文件的名称即可
2. 图像文件位于HTML文件的下一级文件夹：输入文件夹名和文件名，之间用”/”隔开
3. 图像文件位于HTML文件的上一级文件夹：在文件名之前加入”../”，如果是上两级，则需要使用”../../”，以此类推
## 绝对路径
比如：“D:\web\img\logo.gif”，或 完整的网络地址，例如：http://www.itcast.cn/image/logo.gif  
## 列表标签
### 无序列表ul(重点)
无序列表的各个列表项之间示没有顺序级别之分，是并列的，语法如下：  
```html
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  ......
</ul>
```
**注意：**
1. `<ul></ul>`中只能嵌套`<li></li>`，直接在`<ul></ul>`标签中输入其他标签或者文字的做法是不允许的
2. `<li>与</li>`之间相当于一个容器，可以容纳所有元素  
### 有序列表(了解)
有序列表即为有排序顺序的列表，其各个列表项按照一定的顺序排列定义，语法格式如下：  
```html
<ol>
  <li></li>
  <li></li>
  <li></li>
  ......
</ol>
```
### 自定义列表(理解)
定义列表常用于对术语和名词进行解释和描述，自定义列表没有任何项目符号，语法格式：  
```html
<dl>
  <dt></dt>
  <dd></dd>
  <dd></dd>
  ...
  <dt></dt>
  <dd></dd>
  <dd></dd>
  ...
</dl>
```
## 表格table(会用即可)
### 创建表格
表格到现在还是比较常见的一种标签，但不是用来布局，而是用来常见处理，显示表格数据。  
语法：  
```html
<table>
  <tr>
    <td>单元格内的文字</td>
      ...
  </tr>
      ...
</table>
```
1. table用于定义一个表格
2. tr 用于定义表格中的一行，必须嵌套在table标签中，在table中包含几对tr，就有几行表格
3. td /td 用于定义表格中的单元格，必须嵌套在<tr></tr>标签中，一对<tr></tr>中包含几对<td></td>，就表示该行中有多少列（或多少个单元格）
### 表格属性
属性名|含义|常用属性值
--|:--:|--:
border|设置表格的边框（默认boder=”0”无边框）|像素值
cellspacing|设置单元格与单元格边框之间的空白间隙|像素值（默认2像素）
cellpadding|设置单元格内容与单元格边框之间的空白间隙|像素值（默认为1像素）
width|设置表格的宽度|像素值
height|设置表格的高度|像素值
align|这是表格在网页中的水平对齐方式|left、center、right
常用：`0 border cellspacing cellpadding 为 0`
### 表头标签
**表头一般位于表格的第一行或者第一列，其文本加粗居中**
表头标签：`<th></th>`
### 表头标题
capinton元素定义表格标题  
语法：  
```html
<table>
  <caption>我是表格标题</caption>
</table>
```
caption标签必须紧随table标签之后，一般会居中于表格之上  
### 表格结构
表格划分为 头部、主题和页脚（页脚因为有兼容性，不描述）  
**`<thead></thead>`：定义表格的头部**  
必须位于`<table></table>`标签中，一般包含网页的logo和导航等头部信息  
**`<tbody></tbody>`：定义表格的主题**  
位于`<table></table>`标签中，一般包含网页中除头部和底部之外的其他内容  

### 合并单元格
跨行合并：rowspan   跨列合并：colspan  
合并顺序：先上  先左
## 表单标签(掌握)
表单目的：为了收集用户信息  
在HTML中，一个完整的表单通常由表单控件（也称表单元素）、提示信息和表单域3个部分构成  
### input控件
`<input />`为单标签  
属性|属性值|描述
--|:--:|--:
type|text|单行文本输入框
 password|密码输入框
 radio|单选按钮
 checkbox|复选框
 submit|提交按钮
 reset|重置按钮
 image|图像形式的提交按钮
 file|文件域
name|由用户自定义|控件的名字
value|由用户自定义|input控件中默认文本值
size|正整数|input控件在页面中的显示宽度
checked|Checked|定义选择控件默认被选中的项
maxlength|正整数|控件允许输入的最多字符数
disabled|disabled|禁用控件
readonly|readonly|文本只读（不能修改与删除）
**radio 如果是一组，我们必须给他们命名相同的名字 name ，这样才可以多选一**  
## label标签(理解)
label标签为input元素定义标注（标签）  
作用：用于绑定一个表单元素，当点击label标签的时候，被绑定的表单元素就会获得焦点  
语法：  
```html
<label for="xh">Male</label>
<input type="text" name = "sex" id = "xh" value = "male">
```  
for属性规定label与哪个表单元素绑定  
## textarea控件(文本域)
如果需要输入大量的文本信息，就需要用到<textarea></textarea>标签
语法：  
```html
<textarea name="" id="" cols="每行中的字符数" rows="显示的行数">
    文本内容
</textarea>
```
## 下拉菜单
语法：  
```html
<select name="" id="">
    <option value="">选项1</option>
    <option value="">选项1</option>
    <option value="">选项1</option>
    <option value="">选项1</option>
    ...
</select>
```
**注意**  
1. `<select></select>`中至少应包含一对`<option></option>`
2. 在option中定义selected = “select” 时，当前项即为默认选中  
## 表单域
在HTML中，form标签被用于定义表单域，即创建一个表单  
语法：  
```html
<form action="url地址" method="提交方式" name="表单名称">
    各种表单控件
</form>
```
### 常用属性
1. action  
在表单收集到信息后，需要将信息传递给服务器进行处理，action属性用于指定接收并处理表单数据的服务器程序的url地址。  
2. method  
用于设置表单的提交方式，取值为 get 或 post  
3. name  
用于指定表单的名称，以区分同一个页面中的多个表单  
**注意：每个表单都应该有自己的表单域**  
# 查阅文档
经常查阅文档是一个非常好的学习习惯  
W3C：http://www.w3school.com.cn/  
MDN：https://developer.mozilla.org/zh-CN/  
