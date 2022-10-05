$(function(){
    // a, button태그 title 속성 비어있을때 작성된text로 title 생성
    $('a, .btn, .eps').each(function(){
        let Tag = $(this);
        let attr = Tag.text().trim();
        if ($(this).is('[title]')) {
        } else {
            Tag.attr("title",attr);
        }
    });

    /* lnb dep1*/
    $('.dep1>li').on({
        "click": function () {
            $(this).find('.dep2').stop().slideToggle();
            $(this).toggleClass('active').siblings().removeClass('active').find('.dep2').slideUp();
        }
    });

    /* lnb dep1 접근성 */
    $('.lnb .dep1 li a').on({
        "keypress": function (e) {
            if (e.keyCode == 9) {
                $(this).parents('li').addClass('active').siblings('.hasDep').removeClass('active');
            }
        }
    });

    /* lnb dep2 */
    $('.dep2>li').on({
        "click": function (e) {
            e.stopPropagation();
            $(this).toggleClass('active').siblings().removeClass('active');
        }
    });

    /* tab */
    const $tabList = $('.tabList li');
    
    $tabList.on({
        "click": function () {
            $(this).addClass('active').siblings('li').removeClass('active');
            $(this).closest('.tabNav').siblings('.tabCont').eq($(this).index()).addClass('active').siblings('.tabCont').removeClass('active');
            $(this).find('a').attr('aria-selected', 'true').closest('li').siblings('li').find('a').attr('aria-selected', 'false');
        }
    });

    $('.headWrap .tabList li').on({
        "click": function () {
            $(this).addClass('active').siblings('li').removeClass('active');
            $(this).closest('.headWrap').siblings('#content').children('.tabCont').eq($(this).index())
            .addClass('active').siblings('.tabCont').removeClass('active');
        }
    });

    $tabList.each(function(){
        if ($(this).hasClass('active')) {
            $(this).find('a').attr('aria-selected', 'true');
        } else {
            $(this).find('a').attr('aria-selected', 'false');
        }
    });

    const $chk = $('.checkbox input[type="checkbox"]');

    /* checkbox (접근성) */
    $chk.each(function() {
        if($(this).prop('checked')){
            $(this).attr('aria-checked', 'true');
        } else {
            $(this).attr('aria-checked', 'false');
        }
    });

    $chk.on({
        "keyup": function(e){
            let keyCode = e.keyCode;
            
            if(keyCode == 13){
                $(this).prop('checked', !$(this).prop('checked'));
                if($(this).prop('checked')){
                    $(this).attr('aria-checked', 'true');
                } else {
                    $(this).attr('aria-checked', 'false');
                }
            }
        },
        "click": function(){
            if($(this).prop('checked')){
                $(this).attr('aria-checked', 'true');
            } else {
                $(this).attr('aria-checked', 'false');
            }
        } 
    });

    /* radio (접근성) */
    const $radio = $('.radio input[type="radio"]');

    $radio.each(function() {
        if($(this).prop('checked')){
            $(this).attr('aria-checked', 'true');
        } else {
            $(this).attr('aria-checked', 'false');
        }
    });

    $radio.on({
        "keyup": function(e){
            let keyCode = e.keyCode;
            
            if(keyCode == 13){
                $(this).prop('checked',true);
                if($(this).prop('checked')){
                    $(this).attr('aria-checked', 'true');
                } else {
                    $(this).attr('aria-checked', 'false');
                }
            }
        },
        "click": function(){
            let radioName = $(this).attr("name")
            radioLength = $('input[name='+ radioName +']').length;

            for (let i = 0; i < radioLength; i++) {
                if($('input[name='+ radioName +']').eq(i).prop('checked')) {
                    $('input[name='+ radioName +']').eq(i).attr('aria-checked', 'true');
                } else {
                    $('input[name='+ radioName +']').eq(i).attr('aria-checked', 'false');
                }
            }
        } 
    });

    /* radio Group */
    $('.radioGroup ul li .radio input[type="radio"]').on({
        "click": function(){
            $(this).attr('aria-checked', 'true').closest('li').siblings('li').find('.radio').find('input[type="radio"]').attr('aria-checked', 'false');
        }
    });

    /* input file */
    $("#file").on('change',function(){
        var fileName = $("#file").val();
        $(".upload-name").val(fileName);
    });

    /* table tr active */
    $('.table.hover tbody tr').on({
        "click": function () {
            $(this).toggleClass('active');
        }
    });

    /* 확대,축소 */
    let nowZoom = 100;

    $('.btnScaleUp').on({
        "click": function () {
            nowZoom += 5;
            $('body').css({transform: 'scale(' + nowZoom + '%)', 'transform-origin': '50% 0'});
        }
    });

    $('.btnScaleDown').on({
        "click": function () {
            nowZoom -= 5;
            $('body').css({transform: 'scale(' + nowZoom + '%)', 'transform-origin': '50% 0'});
            if(nowZoom < 55){
                nowZoom = 55;
                alert('더 이상 축소할 수 없습니다.');
            } 
        }
    });

    /* file path */
    $('.fileArea input[type="file"]').change(function () {
        let path = $(this).val();
        $(this).siblings('.fileUpload').val(path)
    });

    /* datepicker */
    $('.cal').datepicker({
        dateFormat: "yy-mm-dd",
        monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: "년"
    });

    /* popup draggable */
    $('.uiDrag').draggable({
        containment: 'window',
        cancel: '.dragCancel',
        start: function(){
            $(this).css('transform', 'none');
        },
    });

    /* 다중파일 */    
    window.onload = function() {
        const fileElem = document.getElementById("fileElem");
        const fileListx = document.getElementById("file-list");
        const fileSelect = document.getElementById("fileSelect"); 
        fileSelect.addEventListener("click", (e) => {
            if (fileElem) {
              fileElem.click();
            }
            e.preventDefault(); // prevent navigation to "#"
          }, false);

        fileElem.addEventListener("change", handleFiles, false);

        function handleFiles() {
                if (!this.files.length) {
                    fileListx.innerHTML = "<p><span>마우스로 파일을 끌어오세요.</span> <i class='ico addFile'></i></p>";
                } else {
                    
                    fileListx.innerHTML = "";
                    const list = document.createElement("ul");
                    fileListx.appendChild(list);
                    for (let i = 0; i < this.files.length; i++) {
                    const li = document.createElement("li");
                    list.appendChild(li);
                    const info = document.createElement("span");
                    info.innerHTML = `<span class="filename">${this.files[i].name}</span> <span class="fileSize">(${this.files[i].size / 1024 / 1024 } MB)</span> <button type="button" class="btnDelete" title="삭제"><span>삭제</span></button>`;
                    li.appendChild(info);
                    }
                    $(".btnDelete").on("click",  function() {
                        //li.remove(info); 
                        $("#file-list ul > li:eq()").remove(); 
                    });
                }
        }; 
    }

    var fileList = [];
     //드래그앤드랍
     $("#file-list").on("dragenter", function(e){
        e.preventDefault();
        e.stopPropagation(); 
    }).on("dragover", function(e){ //드롭영역집입
        e.preventDefault();
        e.stopPropagation();
        $(this).css("background-color", "#F8F8F8");
    }).on("dragleave", function(e){  //드롭영역 드래그중
        e.preventDefault();
        e.stopPropagation();
        $(this).css("background-color", "#FFF");

    }).on("drop", function(e){ //드롭완료
        e.preventDefault();
        //handleFiles(files);
        var files = e.originalEvent.dataTransfer.files;

        if(files != null && files != undefined){
            var tag = "";
            for(i=0; i<files.length; i++){
                var f = files[i];
                fileList.push(f);
                var fileName = f.name;
                var fileSize = f.size / 1024 / 1024;
                fileSize = fileSize < 1 ? fileSize.toFixed(6) : fileSize.toFixed(1);
                tag += 
                        "<li>" +
                            "<span><span class='fileName'>"+fileName+"</span>" +
                            "<span class='fileSize'>"+fileSize+" MB</span>" +
                            "<button type='button' class='btnDelete' title='삭제'><span>삭제</span></button></span>" +
                        "</li>";
            }
            $(this).append('<ul>'+tag+'</ul>');
        }
        $("p").remove();
        $(".btnDelete").on("click",  function() {
            $("#file-list ul > li:eq()").remove(); 
        });
    });

    /* 다운로드 */
    $(".downLoad").click(function() {
        var a = document.createElement('a');
        var file_name = "UIS-SFR-KL-066-01.png";
        a.href = "../images/file/upload/UIS-SFR-KL-066-01.png";
        a.download = file_name;
        a.click();
    });


    //treemenu
    $('.treemenu .depth1 > a').on('click', function(){
        if($(this).closest('.depth1').hasClass("active")){
            $(this).closest('.depth1').removeClass("active");
        } else {
            $(this).closest('.depth1').addClass("active");
        }
    });

    $('.treemenu .depth2 a').on('click', function(){
        $(this).addClass('active').closest('li').siblings('li').children('a').removeClass('active')
    });

    $('.treemenu.type02 .depth1 > a').on('click', function(){
        $(this).closest('.depth1').addClass('active').siblings('.depth1').removeClass('active')
    })

});
