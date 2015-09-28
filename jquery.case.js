;(function(window,$){

    $.fn.case = function(boolean_expression,true_callback,false_callback){

        if(boolean_expression){
            if(true_callback && $.isFunction(true_callback)){
                true_callback.apply(this[0]);
            }
        }else{
            if(false_callback && $.isFunction(false_callback)){
                false_callback.apply(this[0]);
            }
        }
        return this;
    }
})(window, $ || jQuery)