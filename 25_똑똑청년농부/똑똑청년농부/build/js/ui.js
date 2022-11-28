$(document).ready(function () {

    // a, button태그 title 속성 비어있을때 작성된text로 title 생성
    $('a, .btn, .elips, .elips02, .tag ,.wordName').each(function(){
        let Tag = $(this);
        let attr = Tag.text().trim();
        if (!$(this).is('[title]')) {
            Tag.attr("title", attr);
        }
    });

    /* datepicker */
    $('.cal').datepicker({
        dateFormat: "yy-mm-dd",
        monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: "년"
    });

    //gnb 
    $('#gnb').on('mouseenter focusin', function () {
        $(this).closest('#header').addClass('open')
    })

    $('#gnb').on('mouseleave focusout', function () {
        $(this).closest('#header').removeClass('open')
    })

    $('#gnb>ul>li>a, .dep02').on('mouseenter focusin', function () {
        $(this).closest('li').addClass('on')
    })
    $('#gnb>ul>li>a, .dep02').on('mouseleave focusout', function () {
        $(this).closest('li').removeClass('on')
    })

    // mobile gnb
    $('.drawer').on('click', function () {

        if ($(this).hasClass('active')) {
            $(this).removeClass('active').siblings('.mobile').removeClass('active');
            $('html, body').css({ 'overflow': 'visible' })
        } else {
            $(this).addClass('active').siblings('.mobile').addClass('active');
            $('html, body').css({ 'overflow': 'hidden' })
        }
    })

    $('.mobile .dep01 ').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active').siblings('.dep02').stop().slideUp(300);
        } else {
            // $('.mobile .dep02').slideUp(300);
            $(this).addClass('active').siblings('.dep02').stop().slideDown(300).closest('li').siblings('li').find('.dep01').removeClass('active').siblings('.dep02').stop().slideUp(300);
        }
    });

    //mapArea
    $('.mapBox .map').on('click', function () {
        let btnSort = 
        $(this).attr('class').split(' ');
        let btnSortLast = btnSort[btnSort.length - 1]

        $(this).closest('.mapBox').removeClass('active').siblings('.' + btnSortLast).addClass('active')
    })

    $('.mapArea .back').on('click', function () {
        $('.mapBox').removeClass('active')
        $('.mapBox.all').addClass('active')
    });

    $('.mapBox.dep02 .btn').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active')
    });

    $('.switch').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active').siblings('.quickMenu').removeClass('active');
        } else {
            $(this).addClass('active').siblings('.quickMenu').addClass('active');
        }
    });

    /* breadCrumb dep2 토글 및 접근성처리 */
    $('.breadCrumb .hasDepth').on({
        'click': function () {
            $(this).toggleClass('active');

            if ($(this).hasClass('active')) {
                $(this).find('.btnDepthMore').attr('aria-expanded', 'true');
                $(this).find('.btnDepthMore').children('.hidden').text('메뉴 더보기 접기');
            } else {
                $(this).find('.btnDepthMore').attr('aria-expanded', 'false');
                $(this).find('.btnDepthMore').children('.hidden').text('메뉴 더보기 펼치기');
            }
        }
    });

    /* breadCrumb li 클릭 이벤트 버블링 방지 */
    $('.breadCrumb .hasDepth .dep2 li').on({
        'click': function (e) {
            e.stopPropagation();
        }
    });

    /* 외부 영역 클릭 시 breadCrumb dep2 닫기 */
    $(document).on({
        'click': function (e) {
            if (!$(e.target).closest('.hasDepth').length) {
                $('.hasDepth').removeClass('active');
                $('.hasDepth .btnDepthMore').attr('aria-expanded', 'false');
                $('.hasDepth .btnDepthMore').children('.hidden').text('메뉴 더보기 펼치기');
            }
        }
    });

    /* input 빨간줄 (맞춤법 검사) 없애기 */
    $('input[type="text"],input[type="search"]').attr('spellcheck', 'false');

    $('.utilArea .btnArea .subSearch').on({
        'click': function () {
            $(this).parents('.headerArea.subType').siblings('.subSearchArea').toggleClass('active');
            $(this).parents('.headerArea.subType').siblings('.subSearchArea').find('input[type="text"]').focus();
            $(this).parents('.headerArea.subType').siblings('.breadCrumb').addClass('remove');

            if ($(this).parents('.headerArea.subType').siblings('.subSearchArea').hasClass('active')) {
                $(this).next('.subSearchClose').addClass('active');
                $(this).addClass('none');
            }
        }
    });

    $('.mobileSubSearch').on({
        'click': function () {
            $(this).siblings('.subSearchArea').toggleClass('active');
            $(this).siblings('.subSearchArea').find('input[type="text"]').focus();
            $(this).parents('.headerArea.subType').siblings('.breadCrumb').addClass('remove');

            if ($(this).siblings('.subSearchArea').hasClass('active')) {
                $(this).next('.mobileSubSearchClose').addClass('active');
                $(this).addClass('none');
            }
        }
    });

    $('.mobileSubSearchClose').on({
        'click': function () {
            $(this).parents('.headerArea.subType').siblings('.breadCrumb').removeClass('remove');

            if ($(this).siblings('.subSearchArea').hasClass('active')) {
                $(this).removeClass('active');
                $(this).prev('.mobileSubSearch').removeClass('none');
                $(this).siblings('.subSearchArea').removeClass('active');
            }
        }
    });

    $('.utilArea .btnArea .subSearchClose').on({
        'click': function () {
            $(this).parents('.headerArea.subType').siblings('.breadCrumb').removeClass('remove');

            if ($(this).parents('.headerArea.subType').siblings('.subSearchArea').hasClass('active')) {
                $(this).removeClass('active');
                $(this).prev('.subSearch').removeClass('none');
                $(this).parents('.headerArea.subType').siblings('.subSearchArea').removeClass('active');
            }
        }
    });

    $('.tag:not(.hashtagType):not(.dateType):not(.searchType)').on({
        'click': function () {
            $(this).toggleClass('active');

            if ($(this).closest('.tagGroup').hasClass('noSiblings')) {
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
            }
        },
        'keyup': function (e) {
            if (e.keyCode === 13) {
                $(this).toggleClass('active');

                if ($(this).closest('.tagGroup').hasClass('noSiblings')) {
                    $(this).addClass('active');
                    $(this).siblings().removeClass('active');
                }
            }
        },
    });

    $('.tag:not(.hashtagType):not(.dateType):not(.searchType),.radio label').attr('tabindex', '0');

    $('.menuViewArea button[type="button"]').on({
        'click': function () {
            $(this).addClass('active').siblings().removeClass('active');
        }
    });

    $('.menuViewArea .btn').on('click', function () {
        if ($(this).hasClass('btnAlbum')) {
            $('.cardContainer').addClass('active').siblings('.listContainer').removeClass('active');
        } else {
            $('.listContainer').addClass('active').siblings('.cardContainer').removeClass('active');
        }
    })

    //tabList 
    $('.tabNav .tabList .btn').on('click', function () {
        let tabNum = $(this).closest('li').index()

        $(this).closest('li').addClass('active').siblings('li').removeClass('active')

        $(this).closest('.inner').siblings('.tabCont').eq(tabNum).addClass('active').siblings('.tabCont').removeClass('active');
    })

    // lnb on&off
    $('#lnb > ul > li > a').on('click', function () {
        $(this).addClass('active').closest('li').siblings('li').children('a').removeClass('active')
    })

    // popup
    $('.popupArea .btn.close').on('click', function () {
        $(this).closest('.popupArea').removeClass('active');
        $('html, body').css({ "overflow": "visible" });
        
        // popup close iframe pause
        $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    })

    $('.subSearchArea .mobileFilter').on({
        'click': function () {
            $(this).parents('.pageSearchArea').siblings('.mobileFilterArea').addClass('active');
            $('body').addClass('ovh');
        }
    });

    $('.mobileFilterArea .btnFilterClose').on({
        'click': function () {
            $(this).closest('.mobileFilterArea').removeClass('active');
            $('body').removeClass('ovh');
        }
    });

    /* 모바일 가상키보드 안나오게 */
    $('input[type="text"].cal').attr('inputmode', 'none');

    $('.accordion ul li .btnDropdown').on({
        'click': function () {
            $(this).closest('.accTitArea').next('.dep2').stop().slideToggle(350);
            $(this).toggleClass('active');
            $(this).closest('li').siblings('li').find('.accTitArea').next('.dep2').stop().slideUp(350);
            $(this).closest('li').siblings('li').find('.btnDropdown').removeClass('active');
            $(this).attr('aria-expanded', $(this).hasClass('active'));
            $(this).closest('li').siblings('li').find('.btnDropdown').attr('aria-expanded', 'false');

            if ($(this).hasClass('active')) {
                $(this).closest('.accTitArea').next('.dep2').attr('tabindex', '0').focus();
                $(this).closest('li').siblings('li').find('.dep2').attr('tabindex', '-1');
                $(this).find('.hidden').text('메뉴 열림');
                $(this).closest('li').siblings('li').find('.btnDropdown').find('.hidden').text('메뉴 닫힘');
            } else {
                $(this).closest('.accTitArea').next('.dep2').attr('tabindex', '-1');
                $(this).find('.hidden').text('메뉴 닫힘');
            }
        }
    });

    $('.accordion ul li .btnDropdown').each(function () {
        if ($(this).hasClass('active')) {
            $(this).attr('aria-expanded', 'true');
            $(this).closest('.accTitArea').next('.dep2').attr('tabindex', '0');
        } else {
            $(this).attr('aria-expanded', 'false');
            $(this).closest('.accTitArea').next('.dep2').attr('tabindex', '-1');
        }
    });

    $('.chkAll input[type="checkbox"]').on({
        'click': function () {
            if ($(this).prop('checked')) {
                $(this).closest('.emphasisBox').siblings('.accordion').find('input[type="checkbox"][name="chk1"]').prop('checked', true);
                $(this).closest('li').siblings('li').find('input[type="checkbox"][name="chk2"],input[type="checkbox"][name="chk3"]')
                .prop('checked', true);
            } else {
                $(this).closest('.emphasisBox').siblings('.accordion').find('input[type="checkbox"][name="chk1"]').prop('checked', false);
                $(this).closest('li').siblings('li').find('input[type="checkbox"][name="chk2"],input[type="checkbox"][name="chk3"]')
                .prop('checked', false);
            }
        }
    });

    const authRadio = `
        <li class="authRadio">
            <div class="radio">
                <input type="radio" name="rd02" id="l06">
                <label for="l06" tabindex="0">
                    <span class="labelName">권한신청</span>
                </label>
            </div>
        </li>
        <li class="authRadio">
            <div class="radio">
                <input type="radio" name="rd02" id="l07">
                <label for="l07" tabindex="0">
                    <span class="labelName">권한신청 안함</span>
                </label>
            </div>
        </li>
    `

    let count = 0;

    $('.radioGroup.join .addRadio input[type="radio"]').on({
        'click': function () {
            if ($(this).prop('checked')) {
                if (count < 1) {
                    $(this).closest('ul').append(authRadio);
                    count++;
                } else {
                    count = 1;
                }

                // console.log(`addRadio의 카운트는 : ${count}`);
            }
        }
    });

    $('.radioGroup.join .addRadio label').on({
        'keyup': function (e) {
            if (e.keyCode === 32 && $(this).siblings('input[type="radio"]').prop('checked') && count < 1) {
                count++;
                $(this).closest('ul').append(authRadio);

                if (!count < 1) {
                    count = 1;
                }

                // console.log(`스페이스바로 누른 addRadio의 카운트는 : ${count}`);
            }
        }
    });

    $('.radioGroup.join .commonRadio input[type="radio"]').on({
        'click': function () {
            if ($(this).prop('checked')) {
                if (count == 0) {
                    count = 0;
                } else {
                    count--;
                }
                $(this).closest('ul').find('.authRadio').remove();
            }
        }
    });

    $('.radioGroup.join .commonRadio label').on({
        'keyup': function (e) {
            if (e.keyCode === 32 && $(this).siblings('input[type="radio"]').prop('checked') && count <= 1) {
                count = 0;
                $(this).closest('ul').find('.authRadio').remove();

                if (!count == 0) {
                    count--;
                }
            }
        }
    });

    $('.radioGroup ul').on('keyup', '.radio label', function (e) {
        if (e.keyCode === 32) {
            $(this).siblings('input[type="radio"]').prop('checked', true);
        }
    });

    $('.btnHotBoard').on({
        'click': function () {
            $(this).next('.hotBoardListWrap').toggleClass('active');
            $(this).attr('aria-expanded', $(this).next('.hotBoardListWrap').hasClass('active'));
        }
    });

    $('.hotBoardListWrap').on({
        'click': function (e) {
            e.stopPropagation();
        }
    });

    $(document).on({
        'click': function (e) {
            if (!$(e.target).closest('.btnHotBoard').length) {
                $('.hotBoardListWrap').removeClass('active');
                $('.btnHotBoard').attr('aria-expanded', 'false');
            }
        }
    });

    $('.btnSwitchToggle').on({
        'click': function () {
            $(this).toggleClass('active');

            if($(this).hasClass('active')) {
                $(this).attr('aria-pressed', 'true');
                $(this).children('.hidden').text('활성화됨');
            } else {
                $(this).attr('aria-pressed', 'false');
                $(this).children('.hidden').text('비활성화됨');
            }
        }
    });

    // file path
    $(".fileArea input[type='file']").on('change',function(){
        let fileValue = $(this).val().split('\\');
        let fileName = fileValue[fileValue.length-1];

        let listAdd = `
        <li>
            <p>
                ` + fileName  + `
                <button type="button" class="btn delete" title="삭제"></button>
            </p>
        </li>
        `

        $(this).siblings('.fileList').append(listAdd)
    });

    // banner path
    $('.bannerAdd input[type="file"]').on('change', function(){
        setImage(this, '#preview')
    })

    function setImage(input, expression) {
        if(input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = function(e){
                $(expression).attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $('.tabNav .tabList li button').each(function () {
        if ($(this).closest('li').hasClass('active')) {
            $(this).attr('aria-selected', 'true');
        } else {
            $(this).attr('aria-selected', 'false');
        }
    });

    $('.tabNav .tabList li button').on({
        'click': function () {
            $(this).attr('aria-selected', 'true').parent('li').siblings('li').children('button').attr('aria-selected', 'false');
        }
    });

    $('.mobileIntegratedArea .inputSearch').on({
        'input': function () {
            if ($(this).val()) {
                $(this).next('.btnValueRemove').addClass('active');
            } else {
                $(this).next('.btnValueRemove').removeClass('active');
            }
        }
    });

    $('.mobileIntegratedArea .btnBack').on({
        'click': function () {
            $(this).closest('.mobileIntegratedArea').hide();
        }
    });

    $('.mobileIntegratedArea .btnValueRemove').on({
        'click': function () {
            $(this).prev('.inputSearch').val('');
            $(this).removeClass('active');
        }
    });

    $('.btnWordRemove').on({
        'click': function () {
            $(this).closest('li').remove();

            if (!$('.wordHistoryList ul li').length) {
               $('.wordHistoryArea').find('.myWordArea').hide();
               $('.wordHistoryArea').find('.emptyWordArea').addClass('active');
            }
        }
    });

    $('.btnMobileDetailSearch').on({
        'click': function () {
            $(this).parents('.mobileFilterArea').next('.mobileIntegratedArea').show();
        }
    });

    // table checkbox all
    $('table .ckdAll').on('click', function(){
        if ($(this).prop('checked')) {
            $(this).closest('thead').siblings('tbody').find('input[type="checkbox"]').prop('checked', true);
        } else {
            $(this).closest('thead').siblings('tbody').find('input[type="checkbox"]').prop('checked', false);
        }
    });

    if (window.matchMedia('(max-width: 768px)').matches) {
        $('.tabNav.type02.mobileHasDepth .tabList li').on({
            'click': function () {
                if($(this).hasClass('has2Depth')){
                    $(this).closest('.inner').addClass('depthBottom');
                } else {
                    $(this).closest('.inner').removeClass('depthBottom');
                }
            }
        });
    } else {
        $('.tabNav.type02.mobileHasDepth .inner').removeClass('depthBottom');
    }

    // tooltip
    $(".toolTip").on('click',function(){
        $(this).children('.ex').toggleClass('active');
    });

    $(".calcu > .close").on('click',function(){
        $(this).parent('.calcu').hide();
    });

    //slider
    var slider = $('.rangeSlider .slider'),
    range = $('.rangeSlider .range'),
    value = $('.rangeSlider .value');
      
    slider.each(function(){
  
      value.find('input').on('keyup', function(){
        var volume = $(this).val()
        // console.log(volume)
        $(this).parents().prev().val(volume)
      });
  
      range.on('input', function(){
        $(this).next(value).find('input').val(this.value)
        var val = $(this).val();
        $(this).css('background', 'linear-gradient(to right, #4EA61F 0%, #4EA61F '+ val +'%, #eee ' + val + '%, #eee 100%)');
      });
    });
 
 
})