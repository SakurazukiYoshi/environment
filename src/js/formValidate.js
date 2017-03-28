$(function(){
    var $tooltips = $('.js_tooltips');

    $('#showTooltips').on('click', function(){    //表单验证
        if ($tooltips.css('display') != 'none') return;
        $('.page.cell').removeClass('slideIn');
        $tooltips.css('display', 'block');
        setTimeout(function () {
            $tooltips.css('display', 'none');
        }, 2000);


        var arr=[{
            obj:$("#shopName"),
            html:"请输入店铺名称"
        },{
            obj:$("#roomNumber"),
            html:"请输入店铺房间数"
        },{
            obj:$("#shopAddress"),
            html:"请输入店铺地址"
        },{
            obj:$("#peopleName"),
            html:"请输入负责人姓名"
        },{
            obj:$("#telephone"),
            html:"请输入负责人电话号码"
        }
        ];
        for(var i=0; i<arr.length; i++){
            judge(arr[i].obj,arr[i].html);
        }
        function judge(obj,html){
            if(obj.val()==""){   //如何input的值为空  则显示对应的提示
                $("#errorDom").html(html);
            }
        }
        var count=0;
        for(var i=0; i<$(".weui-cell_vcode").size();i++){  //每个input的值不为空的时候 count+1
            if($(".weui-cell_vcode").find("input").eq(i).val()!=""){
                count++;
            }
        }
        if(count==5){  //所有的input的值不为空的时候 不显示error
            if(!/^(13[0-9]|15[0|1|3|6|7|8|9]|18[8|9])\d{8}$/.test($("#telephone").val())){
                $("#errorDom").html("请输入正确的手机号码");
            }else {
                $("#errorDom").html("").css("display","none");
                count=0;
            }
        }





    });




});