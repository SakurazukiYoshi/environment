$(function(){    //上传功能
    var tmpl = '<li class="weui-uploader__file" style="background-image:url(#url#)"></li>',
        $gallery = $("#gallery"), $galleryImg = $("#galleryImg"),
        $uploaderInput = $("#uploaderInput"),
        $uploaderFiles = $("#uploaderFiles")
        ;

    $uploaderInput.on("change", function(e){
        var src, url = window.URL || window.webkitURL || window.mozURL, files = e.target.files;
        for (var i = 0, len = files.length; i < len; ++i) {
            var file = files[i];

            if (url) {
                src = url.createObjectURL(file);
            } else {
                src = e.target.result;
            }

            $uploaderFiles.append($(tmpl.replace('#url#', src)));
        }
    });
    $uploaderFiles.on("click", "li", function(){
        $galleryImg.attr("style", this.getAttribute("style"));
        $gallery.fadeIn(100);
    });
    $gallery.on("click", function(){
        $gallery.fadeOut(100);
    });



    var selectPhotoID=0;  //选中的图片id存储
    $("#uploaderFiles").on("click","li",function(){  //给选中的上传图片添加id
        var date=new Date();
        $(this).attr("id","a"+date.getTime());
        selectPhotoID= $(this).attr("id");
    });

    $("#delPhoto").click(function () {   //删除选中的图片
        $("#"+selectPhotoID).remove();
    });
});
