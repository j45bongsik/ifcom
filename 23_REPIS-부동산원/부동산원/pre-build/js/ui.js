$(document).ready(function(){

    // a, button태그 title 속성 비어있을때 작성된text로 title 생성
    $('a, .btn').each(function(){
        let Tag = $(this);
        let attr = Tag.text().trim();
        if ($(this).is('[title]')) {

        } else {
            Tag.attr("title",attr);
        }
    });

    //location 
    $('.location').on('click', function(){
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    })

    // splitter
    $(function(){
        var splitter = $('#map').height(200).split({
            orientation: 'vertical',
            limit: 100,
            position: '50%',
            onDrag: function (event) {
            }
        });
    });
    
    // dragresize
    $( function() {
        $('.resize').resizable({
            minWidth: 474,
            maxWidth: 1860,
            handles: 'e',
            start: function( event, ui ) {
                $(this).css({'transition':'0s'})
            },
            stop: function( event, ui ) {
                $(this).css({'transition':'0.3s'})
            }
        });
    });

    // resultArea on&off 
    $('.resultArea .switch').on('click', function(){
        if($(this).hasClass('active')) {
            $(this).removeClass('active').attr('title','열기').closest('.result').removeClass('active resize').addClass('off');
        } else {
            $(this).addClass('active').attr('title','닫기').closest('.result').addClass('active resize').removeClass('off');
        }
    })

    // leftArea on&off
    $('.leftArea .top').on('click', function(){
        if ($(this).hasClass('active')) {
            $(this).siblings('.dep02').children('.layerPop').removeClass('active');
            $(this).removeClass('active')
        }else {
            $(this).siblings('.dep02').children('.layerPop').addClass('active');
            $(this).addClass('active').closest('li').siblings('li').children('.top').removeClass('active')
        }
    });

    //leftArea close off
    $('.layerPop .close').on('click', function(){
        $(this).closest('.layerPop').removeClass('active').find('.box').removeClass('active');
        $(this).closest('.dep02').siblings('.top, .data').removeClass('active')
        $(this).closest('.layerPop').siblings('.subArea').find('.layerPop').removeClass('active')
    });
    
    //outer click leftArea off
    $(document).on('click', function(e){
        e.stopPropagation();
        if(!$(e.target).closest('li').length) {
            var close = $(e.target).closest('.close').length;
            if(!close) {
                $('.top').removeClass('active');
            }
        }
    });

    // layerpop sub on&off
    $('.subPop').on('click', function(){
        subIdx = $(this).index();
        if ($('.subArea.after .layerPop.sub').eq(subIdx).hasClass('active')) {
            $('.subArea.after .layerPop.sub').eq(subIdx).removeClass('active');
        } else {
            $('.subArea.after .layerPop.sub').eq(subIdx).addClass('active');
        }
    })

    $('.data').on('click', function(){
        if($(this).hasClass('active')) {
            $(this).removeClass('active').siblings('.dep02').children('.layerPop').removeClass('active');
        } else {
            $(this).addClass('active').siblings('.dep02').children('.layerPop').addClass('active');
        }
    })

    // tab
    $('.tabList li .btn').on('click', function(){
        let tabNum = $(this).closest('li').index();

        $(this).addClass('active').closest('li').siblings('li').children('.btn').removeClass('active')
        $(this).closest('.tabList').siblings('.tabCont').eq(tabNum).addClass('active').siblings('.tabCont').removeClass('active')

        if ($('.tabCont').last().hasClass('active')) {
            $('.chartArea').css({'display':'none'});
        } else {
            $('.chartArea').css({'display':'block'});
        }

    });

    $('.test').keyup(function(){
        let key = $(this).val();

        if($.trim(key)!='') {
            $('.contList li label span').closest('li').hide().filter(':contains("'+key+'")').show();
        }else {
            $('.contList li').show();
        }
    });


     /* checkbox (접근성) */
    const $chk = $('.checkbox input[type="checkbox"]');

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

    // checkbox allcheck
    $('.checkAll input').on('click', function(){
        if($(this).prop('checked')) {
            $(this).closest('li').siblings('li').find('input').prop('checked', true)
        } else {
            $(this).closest('li').siblings('li').find('input').prop('checked', false)
        }
    })

    $('input[type="checkbox"]').on('click', function(){
        if($(this).prop('checked')) {

        } else {
            $(this).closest('li').siblings('.checkAll').find('input').prop('checked', false)
        }
    })

    // toggle block
    $('.toggleArea .switch.change').on('click', function(){
        if($(this).prop('checked')) {
            $(this).closest('.chartArea, .contList').find('.unChecked').removeClass('active')
            $(this).closest('.chartArea, .contList').find('.checked').addClass('active')
        } else {
            $(this).closest('.chartArea, .contList').find('.checked').removeClass('active')
            $(this).closest('.chartArea, .contList').find('.unChecked').addClass('active')

        }
    })

    //acco on&off
    $('.accoLabel').on('click', function(){
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    })

    // imgpop on&off
    $('.imgArea .box').on('click', function(){
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.subArea.before .sub').removeClass('active');
        } else {
            $(this).addClass('active').siblings().removeClass('active')
            $('.subArea.before .sub').addClass('active');
        }
    })

    // tab slide
    var i = 0; // 사진 인덱스를 저장할 변수
    $('.scrollArrow.prev').on('click', function(){
        let liLeng = $(this).siblings('.tabList').children('li').length;
        let liWidth = $(this).siblings('.tabList').children('li').width();
        let ulWidth = $(this).siblings('.tabList').width();
        let leftPos = Number($(this).siblings('.tabList').css('left').replace('px',''));
        let next = Number(-(ulWidth - (liLeng * liWidth)))

        $('.scrollArrow.next').removeClass('off');
        
        if (i > 0) {
            i = i - 1;
            $(this).siblings('.tabList').stop().animate({
                "left": -liWidth * i + "px"
            }, 300)
        } else if (i <= 1) {
            $('.scrollArrow.prev').addClass('off');
        }
    })

    $('.scrollArrow.next').on('click', function(){
        let liLeng = $(this).siblings('.tabList').children('li').length;
        let liWidth = $(this).siblings('.tabList').children('li').width();
        let ulWidth = $(this).siblings('.tabList').width();
        let tabWidth = $(this).closest('.tabNav').width()
        let leftPos = Number($(this).siblings('.tabList').css('left').replace('px',''));
        let next = Number(tabWidth - ulWidth);

        $('.scrollArrow.prev').removeClass('off');

        if (i < liLeng) {
            i = i + 1;
            $(this).siblings('.tabList').stop().animate({
                "left": -liWidth * i + "px"
            }, 300)
        }
        
        if (leftPos < next) {
            $('.scrollArrow.next').addClass('off');
        }
    })






});//
