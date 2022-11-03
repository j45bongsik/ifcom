$(document).ready(function(){

    // a, button태그 title 속성 비어있을때 작성된text로 title 생성
    $('#lnb a, .btn, .elips, .elips02').each(function(){
        let Tag = $(this);
        let attr = Tag.text().trim();
        if ($(this).is('[title]')) {
        } else {
            Tag.attr("title",attr);
        }
    });

    // datapicker
    if ($('.cal').length) {
        $('.cal').datepicker({
            dateFormat: "yy-mm-dd",
            monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
            dayNames: ['일요일' , '월요일' , '화요일' , '수요일' , '목요일' , '금요일' , '토요일'],
            showMonthAfterYear: true,
            changeYear:true,
            changeMonth:true,
            yearSuffix: "년",
            nextText:"다음달",
            prevText:"이전달"
        });
    }

    //lnb
    $("#lnb .dep01 li a").on('click', function(){
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active").closest("li").siblings("li").children("a").removeClass("active");
        }
    })

    // search value
    $(function(){
        $(".searchArea input[type='text']").on('input', function(){
            if(!$(this).val() == '') {
                $(".btnArea .search").addClass("on");
            } else {
                $(".btnArea .search").removeClass("on");
            }
        })
    });

    // viewControl
    $(".viewControl .btnArea .grayRect").on('click', function(){
        let viewNum = $(this).index();
        
        $(this).addClass("active").siblings().removeClass("active");
        $(this).closest('.contHead').siblings('.contBody').children('.viewList').eq(viewNum).addClass("active").siblings().removeClass("active")
    });

    // pagination
    $(".pagination a").on('click', function(e){
        e.preventDefault();
        $(this).addClass("active").siblings("a").removeClass("active")
        
    });

    // tablist
    $(".tabList li .btn").on('click', function(){
        let tabNum = $(this).closest("li").index();
        $(this).addClass("active").closest("li").siblings().children(".btn").removeClass("active");
        $(this).closest(".tabList").siblings(".tabCont").eq(tabNum).addClass("active").siblings(".tabCont").removeClass("active");
    })

    // popup draggable
    $('.popup > .inner').draggable({
        scroll : false,
		containment : 'document', //부모 요소 안에서만 이동 범위 제한
		handle : '.popHead', // drag 대상 안 특정 요소에 제한 (여러개 사용 가능)
    });//drag


    // statute draggable
    $('.popBasic').draggable({
        scroll : false,
		containment : 'document', //부모 요소 안에서만 이동 범위 제한
		handle : '.basicHead', // drag 대상 안 특정 요소에 제한 (여러개 사용 가능)
    });//drag

    //popup open bg overflow
    if ($(".popup").hasClass("active")) {
        $("body, html").css("overflow","hidden");
    } else {
        $("body, html").css("overflow-x","auto");
    }

    // popup open
    $(".popOpen").on('click', function(){
        
    });

    // popup close
    $(".popHead .popClose").on('click', function(){
        $(this).closest(".popup").removeClass("active");
        $("body, html").css("overflow-x","auto");
    });

    // basic popup close
    $(".outputArea .close").on('click', function(){
        $(this).closest(".outputArea").removeClass("active");
    });

    // basic popup close
    $(".popBasic02 .close").on('click', function(){
        $(this).closest(".popBasic02").removeClass("active");
    });

    // basic popup close
    $(".popbasicSub .close").on('click', function(){
        $(this).closest(".popbasicSub").removeClass("active");
    });

    // basic popup close
    $(".popBasic .basicHead .close").on('click', function(){
        $(this).closest(".popBasic").removeClass("active");
    });


    // ============ map 영역

    // map header
    $(".btn.switch").on('click', function(){
        $(this).toggleClass("active").closest(".mapHeader").toggleClass("active");
    })

    // btn toggle 형식 on
    $(".toggle").on('click', function(){
        if ($(this).hasClass("on")) {
            $(this).removeClass("on");
        } else {
            $(this).addClass("on");
        }
    });

    //  btn toggle 형식 on
    $(".toggle02").on('click', function(){
        $(this).addClass("on").closest("li").siblings().children(".toggle02").removeClass("on");
    });

    // toggle off
    $(".control .save .close").on('click', function(){
        $(this).closest(".edit").children(".toggle").removeClass("on");
    });

    // toc acco
    $(".labelTitle .title").on('click', function(){
        $(this).closest(".label:not(.single)").toggleClass("active");
    })

    //toc on/off 
    $(".tocSwitch .label").on('click', function(){
        $(this).toggleClass("active").closest(".toc").toggleClass("active");
        $('.tooltipArea').toggleClass("left");
    })

    //toc dep01 label wirteBtn input on&off
    $('.label .btnArea .layerWrite').on('click', function(){
        if($(this).hasClass("on")) {
            $(this).closest(".btnArea").siblings('.labelTitle').children('.inputArea').addClass('on')
        } else {
            $(this).closest(".btnArea").siblings('.labelTitle').children('.inputArea').removeClass('on')
        }
    });

    //toc dep02 table wirteBtn input,textarea on&off
    $('.thsGroup .writeRect').on('click', function(){
        if($(this).hasClass("on")) {
            $(this).closest(".btnArea").siblings('.inputArea').addClass('on')
        } else {
            $(this).closest(".btnArea").siblings('.inputArea').removeClass('on')
        }
    });

    // location
    $(".location .dep01 > li > a").on('click', function(){
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active").closest("li").siblings().children("a").removeClass("active")
        }
    })

    // alert on&off
    $('.alertArea .alert').on('click', function(){
        if($(this).siblings('.outputArea').hasClass('active')) {
            $(this).siblings(".outputArea").removeClass('active');
        } else {
            $(this).siblings(".outputArea").addClass('active');
        }
    })

    //slider 라이브러리(scalebar)
    $(function() {
        $("#slider-vertical").slider({
            orientation: "vertical",
            range: "min",
            min: 0,
            step: 10,
            max: 100,
            value: 50,
            slide: function(event, ui) {
                $("#amount").val(ui.value);
                $(".scalePlus").on('click', function() {
    
                })
            }
        });
        $("#amount").val($("#slider-vertical").slider("value"));
    });
    
    $(function() {
        $("#slider-range-min01, #slider-range-min02, #slider-range-min03, #slider-range-min04, #slider-range-min05, #slider-range-min06, #slider-range-min07, #slider-range-min08, #slider-range-min09, #slider-range-min10, #slider-range-min11, #slider-range-min12, #slider-range-min13, #slider-range-min14").slider({
            range: "min",
            value: 50,
            min: 0,
            max: 100,
            slide: function(event, ui) {
                $("#amount").val("$" + ui.value);
            }
        });
        $("#amount").val("$" + $("#slider-range-min").slider("value"));
    });

    // toc dep02닫기
    $(".widgetClose").on('click', function(){
        $(this).closest(".toc").removeClass("active");
    })

    // toc dep02 > step1 button depth02
    $(".stepFunc .btn").on('click', function(){
        if($(this).next(".dep02").length > 0) {
            
            if($(this).hasClass("active")) {
                $(this).removeClass("active");
            } else {
                $(this).addClass("active").closest("li").siblings().children(".btn").removeClass("active");
            }
        } else {
            
        }
    });

    // 기본팝업 tr on / off
    $(".table.trActive tr").on('click', function(){
        if($(this).closest("tr").hasClass("active")) {
            $(this).closest("tr").removeClass("active");
        } else {
            $(this).closest("tr").addClass("active").siblings().removeClass("active")
        }
    });

    // map header 
    $(".headerMenu .btn").on('click', function(){
        var firstClass = $(this).attr("class").split(" ")[0];
        $("."+firstClass+"Widget").toggleClass("active")

    });

    // 팝업 radio on/off
    $(".utilBox .radioArea input[type='radio']").on({
        "change": function(e) {
            var idx = $(this).closest('tr').index();
            if (idx === 0){
                $('.utilBox .searchArea').find('input').attr('disabled',false).closest("label").siblings(".btnArea").find(".search").removeClass("off");
                $('.utilBox .selectArea').find('select').attr('disabled',true)
            } else {
                $('.utilBox .searchArea').find('input').attr('disabled',true).closest("label").siblings(".btnArea").find(".search").addClass("off");
                $('.utilBox .selectArea').find('select').attr('disabled',false)
            }
        }
    })

    // 팝업 left 아코디언 lnb
    $(".acco ul li a").on('click', function(){
        if (!$(this).closest("li").hasClass("active")) {
            $(this).closest("li").addClass("active").children(".dep").stop().slideDown(100);
        } else {
            $(this).closest("li").removeClass("active").children(".dep").stop().slideUp(100);
        }
    });

    // 팝업 left 아코디언 lnb type02
    $(".acco02 ul li a").on('click', function(){
        if (!$(this).closest("li").hasClass("active")) {
            $(this).closest("li").siblings().removeClass("active").children(".dep").stop().slideUp(100);
            $(this).closest("li").addClass("active").children(".dep").stop().slideDown(100);
        } else {
            $(this).closest("li").removeClass("active").children(".dep").stop().slideUp(100);
        }
    });

    // popup map layer on/off
    $(".layerArea .layerSwitch").on('click', function(){
        if($(this).hasClass("on")) {
            $(this).removeClass("on").closest(".layerArea").removeClass("on");
        } else {
            $(this).addClass("on").closest(".layerArea").addClass("on");
        }
    });

    // table 아코디언
    $(".accoLabel .label").on('click', function(){
        if ($(this).closest(".accoLabel").hasClass("active")) {
            $(this).closest(".accoLabel").removeClass("active").next(".accoCont").removeClass("open")
        } else {
            $(this).closest(".accoLabel").addClass("active").next(".accoCont").addClass("open").siblings(".accoCont").removeClass("open")
        }
    })

    // button change
    $(".btnArea .onChange").on('click', function(){
        $(this).text("일괄 분석 재실행").addClass("grayCircle").removeClass("navyCircle");
    });

    // tooltip popup
    $(".toolTip").on('mouseenter', function(){
        $(".tooltipArea").addClass("active")
    })

    $(".toolTip").on('mouseleave', function(){
        $(".tooltipArea").removeClass("active")
    })

    //팝업 확대 축소
    $('.popHead .minMax').on('click', function(){
        if($(this).hasClass('off')) {
            $(this).removeClass('off').attr('title','창 축소').closest('.popupArea').removeClass('min');
            $(this).closest('.inner').draggable('option','disabled',false)
            $('body, html').css({'overflow':'hidden'})
        } else {
            $(this).addClass('off').attr('title','창 확대').closest('.popupArea').addClass('min');
            $(this).closest('.inner').draggable('option','disabled',true)
            $('body, html').css({'overflow-x':'auto'})
        }
    })

    //범례 확대 축소
    $('.legendHead .minMax').on('click', function(){
        if($(this).hasClass('off')) {
            $(this).removeClass('off').attr('title','범례 축소').closest('.legendArea').removeClass('min');
        } else {
            $(this).addClass('off').attr('title','범례 확대').closest('.legendArea').addClass('min');
            $(this).closest('.inner').draggable('disable')
        }
    })

    //레이어목록 축소
    $('.layerHead .minMax').on('click', function(){
        if($(this).hasClass('off')) {
            $(this).removeClass('off').attr('title','목록 축소').closest('.layerArea').removeClass('min');
        } else {
            $(this).addClass('off').attr('title','목록 확대').closest('.layerArea').addClass('min');
            $(this).closest('.inner').draggable('disable')
        }
    })

    //layerpop 2dep 
    $('.treeLayer .preview').on('click', function(){
        if ($(this).hasClass('on')) {
            $(this).removeClass('on').closest('.inner').siblings('.popup.dep02').removeClass('active');
        }else {
            $(this).closest('.inner').siblings('.popup.dep02').addClass('active');
            $(".treeLayer .preview").removeClass('on');
            $(this).addClass('on')
        }
    })

    $('.popup.dep02 .popClose').on('click', function(){
        $(this).closest('.popup.dep02').removeClass('active').siblings('.inner').find('.preview').removeClass('on')
    })

    
    /* 서규영 추가 */
    /* file path */
    $('.viewBox input[type="file"]').change(function (){
        var path = $(this).val();
        $(this).closest('.viewBox').find('.filePath').text(path).attr("title",path);
    });
})
