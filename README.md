# jquery-case-plugin
jQuery条件链式操作插件
## Usage
```js
//$(selector).case(boolean_expression,true_callback[,false_callback])
var flag = true;
$(selector).case(flag,function(){
  $(this).addClass('class1');
},function(){
  $(this.addClass('class2');
}).on('click',function(){
  alert('链式操作');
})
```
