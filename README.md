# jquery-case-plugin
jQuery条件链式操作插件
## Usage
```js
//$(selector).case(boolean_expression,true_callback[,false_callback])
var flag1 = true,flag2=true;
$(selector).case(flag1,function(){
  $(this).addClass('class1');
},function(){
  $(this).addClass('class2');
}).case(flag2,function(){
  $(this).hide();
}).on('click',function(){
  alert('链式操作');
})
```
