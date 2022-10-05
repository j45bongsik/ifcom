$(function(){
    /* 신규등록관리 */
    $('#gridTable01').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['상태','영업소재지','구분','전화번호','소유형태','임대기간','건물용도'],
        colModel:[
            {name:'dataCell01_gt01',index:'dataCell01_gt01', width: 226, align: 'center',}, 
            {name:'dataCell02_gt01',index:'dataCell02_gt01' ,width: 400, align: 'center'},
            {name:'dataCell03_gt01',index:'dataCell03_gt01' ,width: 150, align: 'center'},
            {name:'dataCell04_gt01',index:'dataCell04_gt01' ,width: 154, align: 'center'},
            {name:'dataCell05_gt01',index:'dataCell05_gt01' ,width: 160, align: 'center'},
            {name:'dataCell06_gt01',index:'dataCell06_gt01' ,width: 300, align: 'center'},
            {name:'dataCell07_gt01',index:'dataCell07_gt01' ,width: 200, align: 'center'},
        ],
        hoverrows: false,
        // multiselect: true,
        // multiselectWidth: 52,
        autowidth:true,
        shrinkToFit : false,
        cmTemplate: {
            resizable: true
        }
    });

    var gridTableData01 = [ 
        {
            dataCell01_gt01:'data',
            dataCell02_gt01:'경상북도 경산시 하양읍 한사리 1-1',
            dataCell03_gt01:'대한민국',
            dataCell04_gt01:'010-1234-5678',
            dataCell05_gt01:'개인',
            dataCell06_gt01:'2022 - 02 - 02 ~ 2022 - 03 - 02',
            dataCell07_gt01:'data',
        },
    ];

    for (var i = 0; i < 2; i++) {
        gridTableData01.push({
            dataCell01_gt01:'data',
            dataCell02_gt01:'경상북도 경산시 하양읍 한사리 1-1',
            dataCell03_gt01:'대한민국',
            dataCell04_gt01:'010-1234-5678',
            dataCell05_gt01:'개인',
            dataCell06_gt01:'2022 - 02 - 02 ~ 2022 - 03 - 02',
            dataCell07_gt01:'data',
        });
    }

    for(var i= 0; i <= gridTableData01.length; i++)
    $('#gridTable01').jqGrid('addRowData',i + 1, gridTableData01[i]);


    /* 신규등록관리 - 임원 탭 */
    $('#gridTable01_2').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['상태','영업소재지','구분','전화번호','소유형태','임대기간','건물용도'],
        colModel:[
            {name:'dataCell01_gt01_2',index:'dataCell01_gt01_2', width: 226, align: 'center',}, 
            {name:'dataCell02_gt01_2',index:'dataCell02_gt01_2' ,width: 400, align: 'center'},
            {name:'dataCell03_gt01_2',index:'dataCell03_gt01_2' ,width: 150, align: 'center'},
            {name:'dataCell04_gt01_2',index:'dataCell04_gt01_2' ,width: 154, align: 'center'},
            {name:'dataCell05_gt01_2',index:'dataCell05_gt01_2' ,width: 160, align: 'center'},
            {name:'dataCell06_gt01_2',index:'dataCell06_gt01_2' ,width: 300, align: 'center'},
            {name:'dataCell07_gt01_2',index:'dataCell07_gt01_2' ,width: 200, align: 'center'},
        ],
        hoverrows: false,
        // multiselect: true,
        // multiselectWidth: 52,
        autowidth:true,
        shrinkToFit : false,
        cmTemplate: {
            resizable: true
        }
    });

    var gridTableData01_2 = [ 
        {
            dataCell01_gt01_2:'data',
            dataCell02_gt01_2:'경상북도 경산시 하양읍 한사리 1-1',
            dataCell03_gt01_2:'대한민국',
            dataCell04_gt01_2:'010-1234-5678',
            dataCell05_gt01_2:'개인',
            dataCell06_gt01_2:'2022 - 02 - 02 ~ 2022 - 03 - 02',
            dataCell07_gt01_2:'data',
        },
    ];

    for (var i = 0; i < 2; i++) {
        gridTableData01_2.push({
            dataCell01_gt01_2:'data',
            dataCell02_gt01_2:'경상북도 경산시 하양읍 한사리 1-1',
            dataCell03_gt01_2:'대한민국',
            dataCell04_gt01_2:'010-1234-5678',
            dataCell05_gt01_2:'개인',
            dataCell06_gt01_2:'2022 - 02 - 02 ~ 2022 - 03 - 02',
            dataCell07_gt01_2:'data',
        });
    }

    for(var i= 0; i <= gridTableData01_2.length; i++)
    $('#gridTable01_2').jqGrid('addRowData',i + 1, gridTableData01_2[i]);


    /* 신규등록관리 - 전문인력 탭 */
    $('#gridTable01_3').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['상태','영업소재지','구분','전화번호','소유형태','임대기간','건물용도'],
        colModel:[
            {name:'dataCell01_gt01_3',index:'dataCell01_gt01_3', width: 226, align: 'center',}, 
            {name:'dataCell02_gt01_3',index:'dataCell02_gt01_3' ,width: 400, align: 'center'},
            {name:'dataCell03_gt01_3',index:'dataCell03_gt01_3' ,width: 150, align: 'center'},
            {name:'dataCell04_gt01_3',index:'dataCell04_gt01_3' ,width: 154, align: 'center'},
            {name:'dataCell05_gt01_3',index:'dataCell05_gt01_3' ,width: 160, align: 'center'},
            {name:'dataCell06_gt01_3',index:'dataCell06_gt01_3' ,width: 300, align: 'center'},
            {name:'dataCell07_gt01_3',index:'dataCell07_gt01_3' ,width: 200, align: 'center'},
        ],
        hoverrows: false,
        // multiselect: true,
        // multiselectWidth: 52,
        cmTemplate: {
            resizable: false
        }
    });

    var gridTableData01_3 = [ 
        {
            dataCell01_gt01_3:'data',
            dataCell02_gt01_3:'경상북도 경산시 하양읍 한사리 1-1',
            dataCell03_gt01_3:'대한민국',
            dataCell04_gt01_3:'010-1234-5678',
            dataCell05_gt01_3:'개인',
            dataCell06_gt01_3:'2022 - 02 - 02 ~ 2022 - 03 - 02',
            dataCell07_gt01_3:'data',
        },
    ];

    for (var i = 0; i < 2; i++) {
        gridTableData01_3.push({
            dataCell01_gt01_3:'data',
            dataCell02_gt01_3:'경상북도 경산시 하양읍 한사리 1-1',
            dataCell03_gt01_3:'대한민국',
            dataCell04_gt01_3:'010-1234-5678',
            dataCell05_gt01_3:'개인',
            dataCell06_gt01_3:'2022 - 02 - 02 ~ 2022 - 03 - 02',
            dataCell07_gt01_3:'data',
        });
    }

    for(var i= 0; i <= gridTableData01_3.length; i++)
    $('#gridTable01_3').jqGrid('addRowData',i + 1, gridTableData01_3[i]);


    /* 신규등록관리 - 첨부서류 탭 */
    $('#gridTable01_4').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','첨부서류관리번호','첨부서류명','비고','파일크기(Byte)','파일명'],
        colModel:[
            {name:'dataCell01_gt01_4',index:'dataCell01_gt01_4', width: 48, align: 'center',},
            {name:'dataCell02_gt01_4',index:'dataCell02_gt01_4', width: 300, align: 'center',},
            {name:'dataCell03_gt01_4',index:'dataCell03_gt01_4', width: 300, align: 'center',},
            {name:'dataCell04_gt01_4',index:'dataCell04_gt01_4', width: 442, align: 'center',},
            {name:'dataCell05_gt01_4',index:'dataCell05_gt01_4', width: 200, align: 'center',},
            {name:'dataCell06_gt01_4',index:'dataCell06_gt01_4', width: 300, align: 'center',},
        ],
        hoverrows: false,
        // multiselect: true,
        // multiselectWidth: 52,
        cmTemplate: {
            resizable: false
        }
    });

    var gridTableData01_4 = [ 
        {
            dataCell01_gt01_4:'',
            dataCell02_gt01_4:'',
            dataCell03_gt01_4:'',
            dataCell04_gt01_4:'',
            dataCell05_gt01_4:'',
            dataCell06_gt01_4:'',
        },
    ];

    for (var i = 0; i < 2; i++) {
        gridTableData01_4.push({
            dataCell01_gt01_4:'',
            dataCell02_gt01_4:'',
            dataCell03_gt01_4:'',
            dataCell04_gt01_4:'',
            dataCell05_gt01_4:'',
            dataCell06_gt01_4:'',
        });
    }

    for(var i= 0; i <= gridTableData01_4.length; i++)
    $('#gridTable01_4').jqGrid('addRowData',i + 1, gridTableData01_4[i]);


    /* 신규등록관리 - 중복등록확인 (전국) */
    $('#gridTable01_5').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','부동산개발업등록번호','상호','법인등록번호','법인구분','비고','등록일자','말소일자','등록상태','처리상태'],
        colModel:[
            {name:'dataCell01_gt01_5',index:'dataCell01_gt01_5', width: 48, align: 'center',},
            {name:'dataCell02_gt01_5',index:'dataCell02_gt01_5', width: 200, align: 'center',},
            {name:'dataCell03_gt01_5',index:'dataCell03_gt01_5', width: 250, align: 'center',},
            {name:'dataCell04_gt01_5',index:'dataCell04_gt01_5', width: 200, align: 'center',},
            {name:'dataCell05_gt01_5',index:'dataCell05_gt01_5', width: 150, align: 'center',},
            {name:'dataCell06_gt01_5',index:'dataCell06_gt01_5', width: 200, align: 'center',},
            {name:'dataCell07_gt01_5',index:'dataCell07_gt01_5', width: 150, align: 'center',},
            {name:'dataCell08_gt01_5',index:'dataCell08_gt01_5', width: 150, align: 'center',},
            {name:'dataCell09_gt01_5',index:'dataCell09_gt01_5', width: 142, align: 'center',},
            {name:'dataCell10_gt01_5',index:'dataCell10_gt01_5', width: 100, align: 'center',},
        ],
        hoverrows: false,
        // multiselect: true,
        // multiselectWidth: 52,
        cmTemplate: {
            resizable: false
        }
    });

    var gridTableData01_5 = [ 
        {
            dataCell01_gt01_5:'1',
            dataCell02_gt01_5:'경북20000014',
            dataCell03_gt01_5:'부동산개발테스트',
            dataCell04_gt01_5:'',
            dataCell05_gt01_5:'특수법인',
            dataCell06_gt01_5:'',
            dataCell07_gt01_5:'2020-11-16',
            dataCell08_gt01_5:'',
            dataCell09_gt01_5:'등록완료',
            dataCell10_gt01_5:'정상',
        },
    ];

    for (var i = 0; i < 2; i++) {
        gridTableData01_5.push({
            dataCell01_gt01_5: i+2,
            dataCell02_gt01_5:'경북20000014',
            dataCell03_gt01_5:'부동산개발테스트',
            dataCell04_gt01_5:'',
            dataCell05_gt01_5:'특수법인',
            dataCell06_gt01_5:'',
            dataCell07_gt01_5:'2020-11-16',
            dataCell08_gt01_5:'',
            dataCell09_gt01_5:'등록완료',
            dataCell10_gt01_5:'정상',
        });
    }

    for(var i= 0; i <= gridTableData01_5.length; i++)
    $('#gridTable01_5').jqGrid('addRowData',i + 1, gridTableData01_5[i]);

    /* 신규등록관리 - 중복등록확인 (시도) */
    $('#gridTable01_6').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','부동산개발업등록번호','상호','법인등록번호','법인구분','비고','등록일자','말소일자','등록상태','처리상태'],
        colModel:[
            {name:'dataCell01_gt01_6',index:'dataCell01_gt01_6', width: 48, align: 'center',},
            {name:'dataCell02_gt01_6',index:'dataCell02_gt01_6', width: 200, align: 'center',},
            {name:'dataCell03_gt01_6',index:'dataCell03_gt01_6', width: 250, align: 'center',},
            {name:'dataCell04_gt01_6',index:'dataCell04_gt01_6', width: 200, align: 'center',},
            {name:'dataCell05_gt01_6',index:'dataCell05_gt01_6', width: 150, align: 'center',},
            {name:'dataCell06_gt01_6',index:'dataCell06_gt01_6', width: 200, align: 'center',},
            {name:'dataCell07_gt01_6',index:'dataCell07_gt01_6', width: 150, align: 'center',},
            {name:'dataCell08_gt01_6',index:'dataCell08_gt01_6', width: 150, align: 'center',},
            {name:'dataCell09_gt01_6',index:'dataCell09_gt01_6', width: 142, align: 'center',},
            {name:'dataCell10_gt01_6',index:'dataCell10_gt01_6', width: 100, align: 'center',},
        ],
        hoverrows: false,
        // multiselect: true,
        // multiselectWidth: 52,
        cmTemplate: {
            resizable: false
        }
    });

    var gridTableData01_6 = [ 
        {
            dataCell01_gt01_6:'1',
            dataCell02_gt01_6:'경북20000014',
            dataCell03_gt01_6:'부동산개발테스트',
            dataCell04_gt01_6:'',
            dataCell05_gt01_6:'특수법인',
            dataCell06_gt01_6:'',
            dataCell07_gt01_6:'2020-11-16',
            dataCell08_gt01_6:'',
            dataCell09_gt01_6:'등록완료',
            dataCell10_gt01_6:'정상',
        },
    ];

    for (var i = 0; i < 2; i++) {
        gridTableData01_6.push({
            dataCell01_gt01_6: i+2,
            dataCell02_gt01_6:'경북20000014',
            dataCell03_gt01_6:'부동산개발테스트',
            dataCell04_gt01_6:'',
            dataCell05_gt01_6:'특수법인',
            dataCell06_gt01_6:'',
            dataCell07_gt01_6:'2020-11-16',
            dataCell08_gt01_6:'',
            dataCell09_gt01_6:'등록완료',
            dataCell10_gt01_6:'정상',
        })
    }

    for(var i= 0; i <= gridTableData01_6.length; i++)
    $('#gridTable01_6').jqGrid('addRowData',i + 1, gridTableData01_6[i]);


    /* 신규등록관리 - 자산관리회사 */
    $('#gridTable01_7').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['상태','영업소재지','구분','전화번호','소유형태','임대기간','건물용도'],
        colModel:[
            {name:'dataCell01_gt01_7',index:'dataCell01_gt01_7', width: 226, align: 'center',}, 
            {name:'dataCell02_gt01_7',index:'dataCell02_gt01_7' ,width: 400, align: 'center'},
            {name:'dataCell03_gt01_7',index:'dataCell03_gt01_7' ,width: 150, align: 'center'},
            {name:'dataCell04_gt01_7',index:'dataCell04_gt01_7' ,width: 154, align: 'center'},
            {name:'dataCell05_gt01_7',index:'dataCell05_gt01_7' ,width: 160, align: 'center'},
            {name:'dataCell06_gt01_7',index:'dataCell06_gt01_7' ,width: 300, align: 'center'},
            {name:'dataCell07_gt01_7',index:'dataCell07_gt01_7' ,width: 200, align: 'center'},
        ],
        hoverrows: false,
        // multiselect: true,
        // multiselectWidth: 52,
        cmTemplate: {
            resizable: false
        }
    });

    var gridTableData01_7 = [ 
        {
            dataCell01_gt01_7:'',
            dataCell02_gt01_7:'',
            dataCell03_gt01_7:'',
            dataCell04_gt01_7:'',
            dataCell05_gt01_7:'',
            dataCell06_gt01_7:'',
            dataCell07_gt01_7:'',
        },
    ];

    for (var i = 0; i < 2; i++) {
        gridTableData01_7.push({
            dataCell01_gt01_7:'',
            dataCell02_gt01_7:'',
            dataCell03_gt01_7:'',
            dataCell04_gt01_7:'',
            dataCell05_gt01_7:'',
            dataCell06_gt01_7:'',
            dataCell07_gt01_7:'',
        });
    }

    for(var i= 0; i <= gridTableData01_7.length; i++)
    $('#gridTable01_7').jqGrid('addRowData',i + 1, gridTableData01_7[i]);


    /* 전문인력정보 팝업 - 교육 탭 */
    $('#gridTable01_p1').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','교육기관명','교육기간','발급번호','수료일자','기관대표명','기관전화','기관주소'],
        colModel:[
            {name:'dataCell01_gt01_p1',index:'dataCell01_gt01_p1', width: 48, align: 'center',},
            {name:'dataCell02_gt01_p1',index:'dataCell02_gt01_p1', width: 140, align: 'center',},
            {name:'dataCell03_gt01_p1',index:'dataCell03_gt01_p1', width: 145, align: 'center',},
            {name:'dataCell04_gt01_p1',index:'dataCell04_gt01_p1', width: 145, align: 'center',},
            {name:'dataCell05_gt01_p1',index:'dataCell05_gt01_p1', width: 145, align: 'center',},
            {name:'dataCell06_gt01_p1',index:'dataCell06_gt01_p1', width: 145, align: 'center',},
            {name:'dataCell07_gt01_p1',index:'dataCell07_gt01_p1', width: 145, align: 'center',},
            {name:'dataCell08_gt01_p1',index:'dataCell08_gt01_p1', width: 145, align: 'center',},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });

    var gridTableData01_p1 = [ 
        {
            dataCell01_gt01_p1:'',
            dataCell02_gt01_p1:'',
            dataCell03_gt01_p1:'',
            dataCell04_gt01_p1:'',
            dataCell05_gt01_p1:'',
            dataCell06_gt01_p1:'',
            dataCell07_gt01_p1:'',
            dataCell08_gt01_p1:'',
        },
    ];

    for(var i= 0; i <= gridTableData01_p1.length; i++)
    $('#gridTable01_p1').jqGrid('addRowData',i + 1, gridTableData01_p1[i]);


    /* 전문인력정보 팝업 - 자격증 탭 */
    $('#gridTable01_p2').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','자격증명','발행기관','자격증구분','발급번호','발급일자'],
        colModel:[
            {name:'dataCell01_gt01_p2',index:'dataCell01_gt01_p2', width: 50, align: 'center',},
            {name:'dataCell02_gt01_p2',index:'dataCell02_gt01_p2', width: 200, align: 'center',},
            {name:'dataCell03_gt01_p2',index:'dataCell03_gt01_p2', width: 200, align: 'center',},
            {name:'dataCell04_gt01_p2',index:'dataCell04_gt01_p2', width: 200, align: 'center',},
            {name:'dataCell05_gt01_p2',index:'dataCell05_gt01_p2', width: 200, align: 'center',},
            {name:'dataCell06_gt01_p2',index:'dataCell06_gt01_p2', width: 208, align: 'center',},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });

    var gridTableData01_p2 = [ 
        {
            dataCell01_gt01_p2:'',
            dataCell02_gt01_p2:'',
            dataCell03_gt01_p2:'',
            dataCell04_gt01_p2:'',
            dataCell05_gt01_p2:'',
            dataCell06_gt01_p2:'',
        },
    ];

    for(var i= 0; i <= gridTableData01_p2.length; i++)
    $('#gridTable01_p2').jqGrid('addRowData',i + 1, gridTableData01_p2[i]);


    /* 전문인력정보 팝업 - 경력 탭 */
    $('#gridTable01_p3').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','회사명','근무기간','경력내용'],
        colModel:[
            {name:'dataCell01_gt01_p3',index:'dataCell01_gt01_p3', width: 50, align: 'center',},
            {name:'dataCell02_gt01_p3',index:'dataCell02_gt01_p3', width: 350, align: 'center',},
            {name:'dataCell03_gt01_p3',index:'dataCell03_gt01_p3', width: 350, align: 'center',},
            {name:'dataCell04_gt01_p3',index:'dataCell04_gt01_p3', width: 308, align: 'center',},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });

    var gridTableData01_p3 = [ 
        {
            dataCell01_gt01_p3:'',
            dataCell02_gt01_p3:'',
            dataCell03_gt01_p3:'',
            dataCell04_gt01_p3:'',
        },
    ];

    for(var i= 0; i <= gridTableData01_p3.length; i++)
    $('#gridTable01_p3').jqGrid('addRowData',i + 1, gridTableData01_p3[i]);

    /* 신규등록관리 팝업 */
    $('#gridTable02').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','파일명','파일사이즈'],
        colModel:[
            {name:'num02',index:'num02', width: 80, align: 'center'},
            {name:'dataCell01_gt02',index:'dataCell01_gt02', width: 150, align: 'center'},
            {name:'dataCell02_gt02',index:'dataCell02_gt02', width: 120, align: 'center'},
        ],
        hoverrows: false,
        multiselectWidth: 48,
        multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData02 = [ 
        {
            num02:'1', 
            dataCell01_gt02:'Image01',
            dataCell02_gt02:'371.43kb',
        },
    ];

    for (var i = 0; i < 4; i++) {
        gridTableData02.push({
            num02:i+2, 
            dataCell01_gt02:'Image01',
            dataCell02_gt02:'371.43kb',
        });
    }

    for(var i= 0; i <= gridTableData02.length; i++)
    $('#gridTable02').jqGrid('addRowData',i + 1, gridTableData02[i]);

    /* 신청신고통합조회 */
    $('#gridTable03').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','민원관리번호','신청구분','부동산개발업<br />등록번호','법인등록번호','상호','최초등록구분','신청일','진행상태','처리구분','접수일','검토일','수리(이송)일','보완일','반려일'],
        colModel:[
            {name:'num03',index:'num03', width: 50, align: 'center'},
            {name:'dataCell01_gt03',index:'dataCell01_gt03', width: 150, align: 'center'},
            {name:'dataCell02_gt03',index:'dataCell02_gt03', width: 114, align: 'center'},
            {name:'dataCell03_gt03',index:'dataCell03_gt03', width: 114, align: 'center'},
            {name:'dataCell04_gt03',index:'dataCell04_gt03', width: 138, align: 'center'},
            {name:'dataCell05_gt03',index:'dataCell05_gt03', width: 144, align: 'center'},
            {name:'dataCell06_gt03',index:'dataCell06_gt03', width: 113, align: 'center'},
            {name:'dataCell07_gt03',index:'dataCell07_gt03', width: 109, align: 'center'},
            {name:'dataCell08_gt03',index:'dataCell08_gt03', width: 89, align: 'center'},
            {name:'dataCell09_gt03',index:'dataCell09_gt03', width: 89, align: 'center'},
            {name:'dataCell10_gt03',index:'dataCell10_gt03', width: 96, align: 'center'},
            {name:'dataCell11_gt03',index:'dataCell11_gt03', width: 96, align: 'center'},
            {name:'dataCell12_gt03',index:'dataCell12_gt03', width: 96, align: 'center'},
            {name:'dataCell13_gt03',index:'dataCell13_gt03', width: 96, align: 'center'},
            {name:'dataCell14_gt03',index:'dataCell14_gt03', width: 96, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData03 = [ 
        {
            num03:'1', 
            dataCell01_gt03:'20220628000001',
            dataCell02_gt03:'등록신청',
            dataCell03_gt03:'경북220002',
            dataCell04_gt03:'',
            dataCell05_gt03:'테스트',
            dataCell06_gt03:'협회',
            dataCell07_gt03:'2022-06-28',
            dataCell08_gt03:'<span class="cGray">작성</span> <br /> <span>완료</span>',
            dataCell09_gt03:'<span class="cRed">처리중</span> <br /> <span class="cGray">해결</span>',
            dataCell10_gt03:'2022 - 07 - 04',
            dataCell11_gt03:'2022 - 07 - 04',
            dataCell12_gt03:'2022 - 07 - 04',
            dataCell13_gt03:'-',
            dataCell14_gt03:'-',
        },
    ];

    for (var i = 0; i < 13; i++) {
        gridTableData03.push({
            num03:i+2, 
            dataCell01_gt03:'20220628000001',
            dataCell02_gt03:'등록신청',
            dataCell03_gt03:'경북220002',
            dataCell04_gt03:'',
            dataCell05_gt03:'테스트',
            dataCell06_gt03:'협회',
            dataCell07_gt03:'2022-06-28',
            dataCell08_gt03:'<span class="cGray">작성</span> <br /> <span>완료</span>',
            dataCell09_gt03:'<span class="cRed">처리중</span> <br /> <span class="cGray">해결</span>',
            dataCell10_gt03:'2022 - 07 - 04',
            dataCell11_gt03:'2022 - 07 - 04',
            dataCell12_gt03:'2022 - 07 - 04',
            dataCell13_gt03:'-',
            dataCell14_gt03:'-',
        });
    }

    for(var i= 0; i <= gridTableData03.length; i++)
    $('#gridTable03').jqGrid('addRowData',i + 1, gridTableData03[i]);

    /* 이관정보관리 */
    $('#gridTable04').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['번호','민원관리번호','신청구분','부동산개발업등록번호','주민(법인)등록번호','상호','신청일','진행상태','처리구분','등록지역','이관지역'],
        colModel:[
            {name:'num04',index:'num04', width: 50, align: 'center'},
            {name:'dataCell01_gt04',index:'dataCell01_gt04', width: 175, align: 'center'},
            {name:'dataCell02_gt04',index:'dataCell02_gt04', width: 140, align: 'center'},
            {name:'dataCell03_gt04',index:'dataCell03_gt04', width: 190, align: 'center'},
            {name:'dataCell04_gt04',index:'dataCell04_gt04', width: 175, align: 'center'},
            {name:'dataCell05_gt04',index:'dataCell05_gt04', width: 180, align: 'center'},
            {name:'dataCell06_gt04',index:'dataCell06_gt04', width: 146, align: 'center'},
            {name:'dataCell07_gt04',index:'dataCell07_gt04', width: 119, align: 'center'},
            {name:'dataCell08_gt04',index:'dataCell08_gt04', width: 119, align: 'center'},
            {name:'dataCell09_gt04',index:'dataCell09_gt04', width: 148, align: 'center'},
            {name:'dataCell10_gt04',index:'dataCell10_gt04', width: 148, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData04 = [ 
        {
            num04:'1', 
            dataCell01_gt04:'20200710000001',
            dataCell02_gt04:'양도신고',
            dataCell03_gt04:'경북220002',
            dataCell04_gt04:'',
            dataCell05_gt04:'㈜예안이엔지',
            dataCell06_gt04:'2022-01-01',
            dataCell07_gt04:'<span class="cRed">처리중</span> <br /> <span>완료</span>',
            dataCell08_gt04:'<span class="cRed">처리중</span> <br /> <span class="cBlue">이송</span>',
            dataCell09_gt04:'경상북도(47)',
            dataCell10_gt04:'경상북도',
        },
    ];

    for (var i = 0; i < 7; i++) {
        gridTableData04.push({
            num04:i+2, 
            dataCell01_gt04:'20200710000001',
            dataCell02_gt04:'양도신고',
            dataCell03_gt04:'경북220002',
            dataCell04_gt04:'',
            dataCell05_gt04:'㈜예안이엔지',
            dataCell06_gt04:'2022-01-01',
            dataCell07_gt04:'<span class="cRed">처리중</span> <br /> <span>완료</span>',
            dataCell08_gt04:'<span class="cRed">처리중</span> <br /> <span class="cBlue">이송</span>',
            dataCell09_gt04:'경상북도(47)',
            dataCell10_gt04:'경상북도',
        });
    }

    for(var i= 0; i <= gridTableData04.length; i++)
    $('#gridTable04').jqGrid('addRowData',i + 1, gridTableData04[i]);

    /* 전입전출신고-변경사무실 */
    $('#gridTable05').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['번호','영업소구분','상태','영업소소재지','전화번호','면적(㎡)','소유형태','임대기간','건물용도'],
        colModel:[
            {name:'num05',index:'num05', width: 50, align: 'center'},
            {name:'dataCell01_gt05',index:'dataCell01_gt05', width: 150, align: 'center'},
            {name:'dataCell02_gt05',index:'dataCell02_gt05', width: 150, align: 'center'},
            {name:'dataCell03_gt05',index:'dataCell03_gt05', width: 336, align: 'center'},
            {name:'dataCell04_gt05',index:'dataCell04_gt05', width: 166, align: 'center'},
            {name:'dataCell05_gt05',index:'dataCell05_gt05', width: 166, align: 'center'},
            {name:'dataCell06_gt05',index:'dataCell06_gt05', width: 150, align: 'center'},
            {name:'dataCell07_gt05',index:'dataCell07_gt05', width: 256, align: 'center'},
            {name:'dataCell08_gt05',index:'dataCell08_gt05', width: 166, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData05 = [ 
        {
            num05:'1', 
            dataCell01_gt05:'주사무소',
            dataCell02_gt05:'정상',
            dataCell03_gt05:'경상북도 포항시 남구 상도동 546-1230',
            dataCell04_gt05:'032-285-1433',
            dataCell05_gt05:'0',
            dataCell06_gt05:'자가소유',
            dataCell07_gt05:'-',
            dataCell08_gt05:'',
        },
    ];

    for (var i = 0; i < 1; i++) {
        gridTableData05.push({
            num05:i+2, 
            dataCell01_gt05:'주사무소',
            dataCell02_gt05:'정상',
            dataCell03_gt05:'경상북도 포항시 남구 상도동 546-1230',
            dataCell04_gt05:'032-285-1433',
            dataCell05_gt05:'0',
            dataCell06_gt05:'자가소유',
            dataCell07_gt05:'-',
            dataCell08_gt05:'',
        });
    }

    for(var i= 0; i <= gridTableData05.length; i++)
    $('#gridTable05').jqGrid('addRowData',i + 1, gridTableData05[i]);

    
    /* 전입전출신고-변경내용 */
    $('#gridTable06').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['번호','변경일','변경구분','변경전내용','변경후내용','변경사유','최초등록일시','최초등록자'],
        colModel:[
            {name:'num06',index:'num06', width: 50, align: 'center'},
            {name:'dataCell01_gt06',index:'dataCell01_gt06', width: 170, align: 'center'},
            {name:'dataCell02_gt06',index:'dataCell02_gt06', width: 150, align: 'center'},
            {name:'dataCell03_gt06',index:'dataCell03_gt06', width: 335, align: 'center'},
            {name:'dataCell04_gt06',index:'dataCell04_gt06', width: 335, align: 'center'},
            {name:'dataCell05_gt06',index:'dataCell05_gt06', width: 150, align: 'center'},
            {name:'dataCell06_gt06',index:'dataCell06_gt06', width: 250, align: 'center'},
            {name:'dataCell07_gt06',index:'dataCell07_gt06', width: 150, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData06 = [ 
        {
            num06:'1', 
            dataCell01_gt06:'2019-09-03',
            dataCell02_gt06:'전출',
            dataCell03_gt06:'경상북도 포항시 남구 상도동 546-1230',
            dataCell04_gt06:'전라남도 목포시 남교동 0523-5234',
            dataCell05_gt06:'전출',
            dataCell06_gt06:'2019-09-03 02:09:16',
            dataCell07_gt06:'이경수',
        },
    ];

    // for (var i = 0; i < 1; i++) {
    //     gridTableData06.push({
    //         num06:i+2, 
    //         dataCell01_gt06:'2019-09-03',
    //         dataCell02_gt06:'전출',
    //         dataCell03_gt06:'경상북도 포항시 남구 상도동 546-1230',
    //         dataCell04_gt06:'전라남도 목포시 남교동 0523-5234',
    //         dataCell05_gt06:'전출',
    //         dataCell06_gt06:'2019-09-03 02:09:16',
    //         dataCell07_gt06:'이경수',
    //     });
    // }

    for(var i= 0; i <= gridTableData06.length; i++)
    $('#gridTable06').jqGrid('addRowData',i + 1, gridTableData06[i]);


    $('#gridTable07').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['번호','상태','변경내용구분','영업소 소재지','구분','면적(㎡)'],
        colModel:[
            {name:'num07',index:'num07', width: 50, align: 'center'},
            {name:'dataCell01_gt07',index:'dataCell01_gt07', width: 90, align: 'center'},
            {name:'dataCell02_gt07',index:'dataCell02_gt07', width: 150, align: 'center'},
            {name:'dataCell03_gt07',index:'dataCell03_gt07', width: 388, align: 'center'},
            {name:'dataCell04_gt07',index:'dataCell04_gt07', width: 110, align: 'center'},
            {name:'dataCell05_gt07',index:'dataCell05_gt07', width: 100, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData07 = [ 
        {
            num07:'1', 
            dataCell01_gt07:'정상',
            dataCell02_gt07:'번호1:변경전내용<br />번호2:변경후내용',
            dataCell03_gt07:'번호1:변경전주소 or<br />번호2:변경후 주소',
            dataCell04_gt07:'주사무소',
            dataCell05_gt07:'110',
        },
    ];

    for (var i = 0; i < 1; i++) {
        gridTableData07.push({
            num07:i+2, 
            dataCell01_gt07:'정상',
            dataCell02_gt07:'번호1:변경전내용<br />번호2:변경후내용',
            dataCell03_gt07:'번호1:변경전주소 or<br />번호2:변경후 주소',
            dataCell04_gt07:'주사무소',
            dataCell05_gt07:'110',
        });
    }

    for(var i= 0; i <= gridTableData07.length; i++)
    $('#gridTable07').jqGrid('addRowData',i + 1, gridTableData07[i]);


    /* 등록관리 - 등록사업자관리 */
    $('#gridTable08').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','부동산개발업등록번호','상호','대표자','법인구분','주민번호','전화번호','팩스번호','등록일자','등록상태',
        '처리상태','자본금','출자금액','출자비율','말소일자','영업소재지','시도','만료일','신용평가등급'],
        colModel:[
            {name:'num08',index:'num08', width: 45, align: 'center'},
            {name:'dataCell01_gt08',index:'dataCell01_gt08', width: 150, align: 'center'},
            {name:'dataCell02_gt08',index:'dataCell02_gt08', width: 160, align: 'center'},
            {name:'dataCell03_gt08',index:'dataCell03_gt08', width: 100, align: 'center'},
            {name:'dataCell04_gt08',index:'dataCell04_gt08', width: 100, align: 'center'},
            {name:'dataCell05_gt08',index:'dataCell05_gt08', width: 150, align: 'center'},
            {name:'dataCell06_gt08',index:'dataCell06_gt08', width: 150, align: 'center'},
            {name:'dataCell07_gt08',index:'dataCell07_gt08', width: 150, align: 'center'},
            {name:'dataCell08_gt08',index:'dataCell08_gt08', width: 130, align: 'center'},
            {name:'dataCell09_gt08',index:'dataCell09_gt08', width: 90, align: 'center'},
            {name:'dataCell10_gt08',index:'dataCell10_gt08', width: 90, align: 'center'},
            {name:'dataCell11_gt08',index:'dataCell11_gt08', width: 150, align: 'center'},
            {name:'dataCell12_gt08',index:'dataCell12_gt08', width: 100, align: 'center'},
            {name:'dataCell13_gt08',index:'dataCell13_gt08', width: 100, align: 'center'},
            {name:'dataCell14_gt08',index:'dataCell14_gt08', width: 100, align: 'center'},
            {name:'dataCell15_gt08',index:'dataCell15_gt08', width: 300, align: 'center'},
            {name:'dataCell16_gt08',index:'dataCell16_gt08', width: 150, align: 'center'},
            {name:'dataCell17_gt08',index:'dataCell17_gt08', width: 150, align: 'center'},
            {name:'dataCell18_gt08',index:'dataCell18_gt08', width: 90, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData08 = [ 
        {
            num08:'1', 
            dataCell01_gt08:'경북10000',
            dataCell02_gt08:'계림건축사무소',
            dataCell03_gt08:'서정영',
            dataCell04_gt08:'개인',
            dataCell05_gt08:'',
            dataCell06_gt08:'000-000-000',
            dataCell07_gt08:'',
            dataCell08_gt08:'2010-06-20',
            dataCell09_gt08:'등록완료',
            dataCell10_gt08:'정상',
            dataCell11_gt08:'1,560,000',
            dataCell12_gt08:'0',
            dataCell13_gt08:'0',
            dataCell14_gt08:'',
            dataCell15_gt08:'경산북도 경산시 진량읍 봉황길 23, 3층',
            dataCell16_gt08:'',
            dataCell17_gt08:'2023-02-10',
            dataCell18_gt08:'C',
        },
    ];

    for (var i = 0; i < 13; i++) {
        gridTableData08.push({
            num08: i+2, 
            dataCell01_gt08:'경북10000',
            dataCell02_gt08:'계림건축사무소',
            dataCell03_gt08:'서정영',
            dataCell04_gt08:'개인',
            dataCell05_gt08:'',
            dataCell06_gt08:'000-000-000',
            dataCell07_gt08:'',
            dataCell08_gt08:'2010-06-20',
            dataCell09_gt08:'등록완료',
            dataCell10_gt08:'정상',
            dataCell11_gt08:'1,560,000',
            dataCell12_gt08:'0',
            dataCell13_gt08:'0',
            dataCell14_gt08:'',
            dataCell15_gt08:'경산북도 경산시 진량읍 봉황길 23, 3층',
            dataCell16_gt08:'',
            dataCell17_gt08:'2023-02-10',
            dataCell18_gt08:'C',
        });
    }

    for(var i= 0; i <= gridTableData08.length; i++)
    $('#gridTable08').jqGrid('addRowData',i + 1, gridTableData08[i]);



    /* 등록관리 - 등록사업자관리 상세*/
    $('#gridTable09').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['변경신청일','변경일','변경구분','변경전내용','변경후내용','변경사유','최초등록일시',
        '최초등록자','시도코드','부동산개발업 등록코드','영업소구분','상태','영업소소재지','면적','전화번호',
        '소유형태','임대기간','건물용도'],
        colModel:[
            {name:'dataCell01_gt09',index:'dataCell01_gt09', width: 200, align: 'center'},
            {name:'dataCell02_gt09',index:'dataCell02_gt09', width: 100, align: 'center'},
            {name:'dataCell03_gt09',index:'dataCell03_gt09', width: 100, align: 'center'},
            {name:'dataCell04_gt09',index:'dataCell04_gt09', width: 150, align: 'center'},
            {name:'dataCell05_gt09',index:'dataCell05_gt09', width: 150, align: 'center'},
            {name:'dataCell06_gt09',index:'dataCell06_gt09', width: 150, align: 'center'},
            {name:'dataCell07_gt09',index:'dataCell07_gt09', width: 200, align: 'center'},
            {name:'dataCell08_gt09',index:'dataCell08_gt09', width: 100, align: 'center'},
            {name:'dataCell09_gt09',index:'dataCell09_gt09', width: 100, align: 'center'},
            {name:'dataCell10_gt09',index:'dataCell10_gt09', width: 150, align: 'center'},
            {name:'dataCell11_gt09',index:'dataCell11_gt09', width: 150, align: 'center'},
            {name:'dataCell12_gt09',index:'dataCell12_gt09', width: 90, align: 'center'},
            {name:'dataCell13_gt09',index:'dataCell13_gt09', width: 200, align: 'center'},
            {name:'dataCell14_gt09',index:'dataCell14_gt09', width: 100, align: 'center'},
            {name:'dataCell15_gt09',index:'dataCell15_gt09', width: 100, align: 'center'},
            {name:'dataCell16_gt09',index:'dataCell16_gt09', width: 90, align: 'center'},
            {name:'dataCell17_gt09',index:'dataCell17_gt09', width: 150, align: 'center'},
            {name:'dataCell18_gt09',index:'dataCell18_gt09', width: 150, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData09 = [ 
        {
            dataCell01_gt09:'',
            dataCell02_gt09:'',
            dataCell03_gt09:'',
            dataCell04_gt09:'',
            dataCell05_gt09:'',
            dataCell06_gt09:'',
            dataCell07_gt09:'',
            dataCell08_gt09:'',
            dataCell09_gt09:'',
            dataCell10_gt09:'',
            dataCell11_gt09:'',
            dataCell12_gt09:'',
            dataCell13_gt09:'',
            dataCell14_gt09:'',
            dataCell15_gt09:'',
            dataCell16_gt09:'',
            dataCell17_gt09:'',
            dataCell18_gt09:'',
        },
    ];

    for(var i= 0; i <= gridTableData09.length; i++)
    $('#gridTable09').jqGrid('addRowData',i + 1, gridTableData09[i]);

    /* 등록관리 - 사무실정보관리*/
    $('#gridTable10').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','부동산개발업 등록번호','상호','영업소구분','영업소소재지','면적','전화번호','팩스번호','임대시작일',
        '임대종료일','소유형태','사무실 상태','부동산개발업 등록상태','주민(법인)등록번호','자본금','출자금액','출자비율'],
        colModel:[
            {name:'num10',index:'num10', width: 45, align: 'center'},
            {name:'dataCell01_gt10',index:'dataCell01_gt10', width: 150, align: 'center'},
            {name:'dataCell02_gt10',index:'dataCell02_gt10', width: 150, align: 'center'},
            {name:'dataCell03_gt10',index:'dataCell03_gt10', width: 100, align: 'center'},
            {name:'dataCell04_gt10',index:'dataCell04_gt10', width: 150, align: 'center'},
            {name:'dataCell05_gt10',index:'dataCell05_gt10', width: 100, align: 'center'},
            {name:'dataCell06_gt10',index:'dataCell06_gt10', width: 150, align: 'center'},
            {name:'dataCell07_gt10',index:'dataCell07_gt10', width: 150, align: 'center'},
            {name:'dataCell08_gt10',index:'dataCell08_gt10', width: 150, align: 'center'},
            {name:'dataCell09_gt10',index:'dataCell09_gt10', width: 150, align: 'center'},
            {name:'dataCell10_gt10',index:'dataCell10_gt10', width: 100, align: 'center'},
            {name:'dataCell11_gt10',index:'dataCell11_gt10', width: 100, align: 'center'},
            {name:'dataCell12_gt10',index:'dataCell12_gt10', width: 150, align: 'center'},
            {name:'dataCell13_gt10',index:'dataCell13_gt10', width: 150, align: 'center'},
            {name:'dataCell14_gt10',index:'dataCell14_gt10', width: 150, align: 'center'},
            {name:'dataCell15_gt10',index:'dataCell15_gt10', width: 90, align: 'center'},
            {name:'dataCell16_gt10',index:'dataCell16_gt10', width: 90, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData10 = [ 
        {
            num10:'1',
            dataCell01_gt10:'경북100000',
            dataCell02_gt10:'명리종합건설(주)',
            dataCell03_gt10:'주사무소',
            dataCell04_gt10:'경상북도 청송군',
            dataCell05_gt10:'52.09',
            dataCell06_gt10:'053-746-0436',
            dataCell07_gt10:'',
            dataCell08_gt10:'2008-01-30',
            dataCell09_gt10:'2012-01-30',
            dataCell10_gt10:'임대',
            dataCell11_gt10:'정상',
            dataCell12_gt10:'등록말소',
            dataCell13_gt10:'',
            dataCell14_gt10:'1,200,000',
            dataCell15_gt10:'0',
            dataCell16_gt10:'0',
        },
    ];

    for (var i = 0; i < 13; i++) {
        gridTableData10.push({
            num10:i+2,
            dataCell01_gt10:'경북100000',
            dataCell02_gt10:'명리종합건설(주)',
            dataCell03_gt10:'주사무소',
            dataCell04_gt10:'경상북도 청송군',
            dataCell05_gt10:'52.09',
            dataCell06_gt10:'053-746-0436',
            dataCell07_gt10:'',
            dataCell08_gt10:'2008-01-30',
            dataCell09_gt10:'2012-01-30',
            dataCell10_gt10:'임대',
            dataCell11_gt10:'정상',
            dataCell12_gt10:'등록말소',
            dataCell13_gt10:'',
            dataCell14_gt10:'1,200,000',
            dataCell15_gt10:'0',
            dataCell16_gt10:'0',
        });
    }

    for(var i= 0; i <= gridTableData10.length; i++)
    $('#gridTable10').jqGrid('addRowData',i + 1, gridTableData10[i]);

    /* 등록관리 - 사무실정보관리 팝업*/
    $('#gridTable11').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','부동산개발업 등록번호','상호','영업소구분','사무실상태','영업소소재지','영업소소재지','법정동코드',
        '지번구분','본번','부번','기타주소','도로명 코드','건물위치','건물본번','건물부번','새주소 상태','읍면동 일련번호'],
        colModel:[
            {name:'dataCell01_gt11',index:'dataCell01_gt11', width: 45, align: 'center'},
            {name:'dataCell02_gt11',index:'dataCell02_gt11', width: 150, align: 'center'},
            {name:'dataCell03_gt11',index:'dataCell03_gt11', width: 150, align: 'center'},
            {name:'dataCell04_gt11',index:'dataCell04_gt11', width: 100, align: 'center'},
            {name:'dataCell05_gt11',index:'dataCell05_gt11', width: 100, align: 'center'},
            {name:'dataCell06_gt11',index:'dataCell06_gt11', width: 150, align: 'center'},
            {name:'dataCell07_gt11',index:'dataCell07_gt11', width: 150, align: 'center'},
            {name:'dataCell08_gt11',index:'dataCell08_gt11', width: 100, align: 'center'},
            {name:'dataCell09_gt11',index:'dataCell09_gt11', width: 100, align: 'center'},
            {name:'dataCell10_gt11',index:'dataCell10_gt11', width: 100, align: 'center'},
            {name:'dataCell11_gt11',index:'dataCell11_gt11', width: 100, align: 'center'},
            {name:'dataCell12_gt11',index:'dataCell12_gt11', width: 150, align: 'center'},
            {name:'dataCell13_gt11',index:'dataCell13_gt11', width: 150, align: 'center'},
            {name:'dataCell14_gt11',index:'dataCell14_gt11', width: 200, align: 'center'},
            {name:'dataCell15_gt11',index:'dataCell15_gt11', width: 100, align: 'center'},
            {name:'dataCell16_gt11',index:'dataCell16_gt11', width: 100, align: 'center'},
            {name:'dataCell17_gt11',index:'dataCell17_gt11', width: 150, align: 'center'},
            {name:'dataCell18_gt11',index:'dataCell18_gt11', width: 100, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData11 = [ 
        {
            dataCell01_gt11:'',
            dataCell02_gt11:'',
            dataCell03_gt11:'',
            dataCell04_gt11:'',
            dataCell05_gt11:'',
            dataCell06_gt11:'',
            dataCell07_gt11:'',
            dataCell08_gt11:'',
            dataCell09_gt11:'',
            dataCell10_gt11:'',
            dataCell11_gt11:'',
            dataCell12_gt11:'',
            dataCell13_gt11:'',
            dataCell14_gt11:'',
            dataCell15_gt11:'',
            dataCell16_gt11:'',
            dataCell17_gt11:'',
            dataCell18_gt11:'',
        },
    ];

    for(var i= 0; i <= gridTableData11.length; i++)
    $('#gridTable11').jqGrid('addRowData',i + 1, gridTableData11[i]);


    /* 등록관리 - 행정처분 과태료 관리 */
    $('#gridTable12').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','부동산개발업등록번호','상호','처분유형','처분대상','시작일','종료일','처분일','위반행위횟수','처분청',
        '처분내용','위반내용','처분대상건수','실태조사여부'],
        colModel:[
            {name:'dataCell01_gt12',index:'dataCell01_gt12', width: 45, align: 'center'},
            {name:'dataCell02_gt12',index:'dataCell02_gt12', width: 90, align: 'center'},
            {name:'dataCell03_gt12',index:'dataCell03_gt12', width: 150, align: 'center'},
            {name:'dataCell04_gt12',index:'dataCell04_gt12', width: 130, align: 'center'},
            {name:'dataCell05_gt12',index:'dataCell05_gt12', width: 100, align: 'center'},
            {name:'dataCell06_gt12',index:'dataCell06_gt12', width: 85, align: 'center'},
            {name:'dataCell07_gt12',index:'dataCell07_gt12', width: 85, align: 'center'},
            {name:'dataCell08_gt12',index:'dataCell08_gt12', width: 100, align: 'center'},
            {name:'dataCell09_gt12',index:'dataCell09_gt12', width: 100, align: 'center'},
            {name:'dataCell10_gt12',index:'dataCell10_gt12', width: 100, align: 'center'},
            {name:'dataCell11_gt12',index:'dataCell11_gt12', width: 200, align: 'center'},
            {name:'dataCell12_gt12',index:'dataCell12_gt12', width: 200, align: 'center'},
            {name:'dataCell13_gt12',index:'dataCell13_gt12', width: 100, align: 'center'},
            {name:'dataCell14_gt12',index:'dataCell14_gt12', width: 100, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData12 = [ 
        {
            dataCell01_gt12:'21',
            dataCell02_gt12:'경북150012',
            dataCell03_gt12:'한승건설(주)',
            dataCell04_gt12:'벌칙(과태료)',
            dataCell05_gt12:'업자',
            dataCell06_gt12:'2016-01-18',
            dataCell07_gt12:'2016-02-02',
            dataCell08_gt12:'2016-01-18',
            dataCell09_gt12:'1',
            dataCell10_gt12:'경상북도',
            dataCell11_gt12:'부동산개발업 등록사업',
            dataCell12_gt12:'법 제 17조 위반',
            dataCell13_gt12:'1',
            dataCell14_gt12:'X',
        },
    ];

    for (var i = 0; i < 14; i++) {
        gridTableData12.push({
            dataCell01_gt12: '21',
            dataCell02_gt12:'경북150012',
            dataCell03_gt12:'한승건설(주)',
            dataCell04_gt12:'벌칙(과태료)',
            dataCell05_gt12:'업자',
            dataCell06_gt12:'2016-01-18',
            dataCell07_gt12:'2016-02-02',
            dataCell08_gt12:'2016-01-18',
            dataCell09_gt12:'1',
            dataCell10_gt12:'경상북도',
            dataCell11_gt12:'부동산개발업 등록사업',
            dataCell12_gt12:'법 제 17조 위반',
            dataCell13_gt12:'1',
            dataCell14_gt12:'X',
        });
    }

    for(var i= 0; i <= gridTableData12.length; i++)
    $('#gridTable12').jqGrid('addRowData',i + 1, gridTableData12[i]);

    $('#gridTable12').jqGrid('setGroupHeaders', {
        useColSpanStyle: true, 
        groupHeaders:[
            {startColumnName: 'dataCell06_gt12', numberOfColumns: 2, titleText: '처분기간(납부기간)'},
        ]	
    });

    /* 등록관리 - 행정처분 과태료 관리 상세 */
    $('#gridTable13').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','처분유형','시작일','종료일','구분','처분대상번호','과태료금액 (천원)','법원이송구분','법원이송금액(천원)','처분내용'],
        colModel:[
            {name:'dataCell01_gt13',index:'dataCell01_gt13', width: 40, align: 'center'},
            {name:'dataCell02_gt13',index:'dataCell02_gt13', width: 200, align: 'center'},
            {name:'dataCell03_gt13',index:'dataCell03_gt13', width: 138, align: 'center'},
            {name:'dataCell04_gt13',index:'dataCell04_gt13', width: 138, align: 'center'},
            {name:'dataCell05_gt13',index:'dataCell05_gt13', width: 138, align: 'center'},
            {name:'dataCell06_gt13',index:'dataCell06_gt13', width: 138, align: 'center'},
            {name:'dataCell07_gt13',index:'dataCell07_gt13', width: 198, align: 'center'},
            {name:'dataCell08_gt13',index:'dataCell08_gt13', width: 200, align: 'center'},
            {name:'dataCell09_gt13',index:'dataCell09_gt13', width: 200, align: 'center'},
            {name:'dataCell10_gt13',index:'dataCell10_gt13', width: 200, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData13 = [ 
        {
            dataCell01_gt13:'1',
            dataCell02_gt13:'영업정지',
            dataCell03_gt13:'2021-02-23',
            dataCell04_gt13:'2021-02-24',
            dataCell05_gt13:'업자',
            dataCell06_gt13:'',
            dataCell07_gt13:'',
            dataCell08_gt13:'해당없음',
            dataCell09_gt13:'',
            dataCell10_gt13:'234234',
        },
    ];

    for (var i = 0; i < 2; i++) {
        gridTableData13.push({
            dataCell01_gt13: i+2,
            dataCell02_gt13:'영업정지',
            dataCell03_gt13:'2021-02-23',
            dataCell04_gt13:'2021-02-24',
            dataCell05_gt13:'업자',
            dataCell06_gt13:'',
            dataCell07_gt13:'',
            dataCell08_gt13:'해당없음',
            dataCell09_gt13:'',
            dataCell10_gt13:'234234',
        });
    }

    for(var i= 0; i <= gridTableData13.length; i++)
    $('#gridTable13').jqGrid('addRowData',i + 1, gridTableData13[i]);

    $('#gridTable13').jqGrid('setGroupHeaders', {
        useColSpanStyle: true, 
        groupHeaders:[
            {startColumnName: 'dataCell03_gt13', numberOfColumns: 2, titleText: '처분기간'},
            {startColumnName: 'dataCell05_gt13', numberOfColumns: 2, titleText: '처분대상'}
        ]	
    });

    /* 자산관리회사 조회 팝업 */
    $('#gridTable14').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','사업자등록번호','회사명','대표자','소재지'],
        colModel:[
            {name:'dataCell01_gt14',index:'dataCell01_gt14', width: 40, align: 'center'},
            {name:'dataCell02_gt14',index:'dataCell02_gt14', width: 200, align: 'center'},
            {name:'dataCell03_gt14',index:'dataCell03_gt14', width: 250, align: 'center'},
            {name:'dataCell04_gt14',index:'dataCell04_gt14', width: 250, align: 'center'},
            {name:'dataCell05_gt14',index:'dataCell05_gt14', width: 350, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData14 = [ 
        {
            dataCell01_gt14:'1',
            dataCell02_gt14:'-',
            dataCell03_gt14:'나나노자산',
            dataCell04_gt14:'나나노니',
            dataCell05_gt14:'서울특별시 강남구 도산대로 88길 36, 101',
        },
    ];

    for (var i = 0; i < 8; i++) {
        gridTableData14.push({
            dataCell01_gt14: i+2,
            dataCell02_gt14:'-',
            dataCell03_gt14:'나나노자산',
            dataCell04_gt14:'나나노니',
            dataCell05_gt14:'서울특별시 강남구 도산대로 88길 36, 101',
        });
    }

    for(var i= 0; i <= gridTableData14.length; i++)
    $('#gridTable14').jqGrid('addRowData',i + 1, gridTableData14[i]);

    /* 자산관리회사 신규등록 - 계약업체정보 탭  */
    $('#gridTable15').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','상호명','대표자','전화번호','영업소소재지'],
        colModel:[
            {name:'dataCell01_gt15',index:'dataCell01_gt15', width: 50, align: 'center'},
            {name:'dataCell02_gt15',index:'dataCell02_gt15', width: 308, align: 'center'},
            {name:'dataCell03_gt15',index:'dataCell03_gt15', width: 250, align: 'center'},
            {name:'dataCell04_gt15',index:'dataCell04_gt15', width: 300, align: 'center'},
            {name:'dataCell05_gt15',index:'dataCell05_gt15', width: 350, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData15 = [ 
        {
            dataCell01_gt15:'',
            dataCell02_gt15:'',
            dataCell03_gt15:'',
            dataCell04_gt15:'',
            dataCell05_gt15:'',
        },
    ];

    for(var i= 0; i <= gridTableData15.length; i++)
    $('#gridTable15').jqGrid('addRowData',i + 1, gridTableData15[i]);


    /* 현황/통계 - 개발업통계 - 등록사업자 현황 */
    $('#gridTable16').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['등록년도','등록월','등록건수','합계','개인','법인'],
        colModel:[
            {name:'dataCell01_gt16',index:'dataCell01_gt16', width: 200, align: 'center'},
            {name:'dataCell02_gt16',index:'dataCell02_gt16', width: 200, align: 'center'},
            {name:'dataCell03_gt16',index:'dataCell03_gt16', width: 200, align: 'center'},
            {name:'dataCell04_gt16',index:'dataCell04_gt16', width: 330, align: 'center'},
            {name:'dataCell05_gt16',index:'dataCell05_gt16', width: 330, align: 'center'},
            {name:'dataCell06_gt16',index:'dataCell06_gt16', width: 330, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData16 = [ 
        {
            dataCell01_gt16:'2022',
            dataCell02_gt16:'09',
            dataCell03_gt16:'100',
            dataCell04_gt16:'100',
            dataCell05_gt16:'49',
            dataCell06_gt16:'51',
        },
    ];

    for (var i = 0; i < 14; i++) {
        gridTableData16.push({
            dataCell01_gt16:'2022',
            dataCell02_gt16:'09',
            dataCell03_gt16:'100',
            dataCell04_gt16:'100',
            dataCell05_gt16:'49',
            dataCell06_gt16:'51',
        });
    }

    for(var i= 0; i <= gridTableData16.length; i++)
    $('#gridTable16').jqGrid('addRowData',i + 1, gridTableData16[i]);

    /* 현황/통계 - 개발업통계 - 사무실 현황 */
    $('#gridTable17').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['등록년도','등록월','구분','합계','~33㎡','33 ㎡ ~66㎡','66 ㎡ ~99㎡', '99 ㎡ ~122㎡', '122㎡'],
        colModel:[
            {name:'dataCell01_gt17',index:'dataCell01_gt17', width: 200, align: 'center'},
            {name:'dataCell02_gt17',index:'dataCell02_gt17', width: 200, align: 'center'},
            {name:'dataCell03_gt17',index:'dataCell03_gt17', width: 200, align: 'center'},
            {name:'dataCell04_gt17',index:'dataCell04_gt17', width: 165, align: 'center'},
            {name:'dataCell05_gt17',index:'dataCell05_gt17', width: 165, align: 'center'},
            {name:'dataCell06_gt17',index:'dataCell06_gt17', width: 165, align: 'center'},
            {name:'dataCell07_gt17',index:'dataCell07_gt17', width: 165, align: 'center'},
            {name:'dataCell08_gt17',index:'dataCell08_gt17', width: 165, align: 'center'},
            {name:'dataCell09_gt17',index:'dataCell09_gt17', width: 165, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData17 = [ 
        {
            dataCell01_gt17:'2022',
            dataCell02_gt17:'09',
            dataCell03_gt17:'구분 명',
            dataCell04_gt17:'100',
            dataCell05_gt17:'10',
            dataCell06_gt17:'20',
            dataCell07_gt17:'30',
            dataCell08_gt17:'30',
            dataCell09_gt17:'10',
        },
    ];

    for (var i = 0; i < 14; i++) {
        gridTableData17.push({
            dataCell01_gt17:'2022',
            dataCell02_gt17:'09',
            dataCell03_gt17:'구분 명',
            dataCell04_gt17:'100',
            dataCell05_gt17:'10',
            dataCell06_gt17:'20',
            dataCell07_gt17:'30',
            dataCell08_gt17:'30',
            dataCell09_gt17:'10',
        });
    }

    for(var i= 0; i <= gridTableData17.length; i++)
    $('#gridTable17').jqGrid('addRowData',i + 1, gridTableData17[i]);

    
    /* 등록관리 - 인력정보 관리 - 전문인력관리 */
    $('#gridTable18').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','부동산개발업등록번호','상호','성명','전문인력자격등급','(법인)주민등록번호','전문인력구분', '인력상태', '부동산개발업 등록상태'],
        colModel:[

            {name:'num18',index:'num18', width: 45, align: 'center'},
            {name:'dataCell01_gt18',index:'dataCell01_gt18', width: 200, align: 'center'},
            {name:'dataCell02_gt18',index:'dataCell02_gt18', width: 202, align: 'center'},
            {name:'dataCell03_gt18',index:'dataCell03_gt18', width: 150, align: 'center'},
            {name:'dataCell04_gt18',index:'dataCell04_gt18', width: 150, align: 'center'},
            {name:'dataCell05_gt18',index:'dataCell05_gt18', width: 400, align: 'center'},
            {name:'dataCell06_gt18',index:'dataCell06_gt18', width: 145, align: 'center'},
            {name:'dataCell07_gt18',index:'dataCell07_gt18', width: 145, align: 'center'},
            {name:'dataCell08_gt18',index:'dataCell08_gt18', width: 145, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData18 = [ 
        {
            num18:'1',
            dataCell01_gt18:'경북160015',
            dataCell02_gt18:'(주)거성종합건설',
            dataCell03_gt18:'윤창락',
            dataCell04_gt18:'고급',
            dataCell05_gt18:'',
            dataCell06_gt18:'건설기술자',
            dataCell07_gt18:'<span class="cBlue">정상</span>',
            dataCell08_gt18:'<span class="cRed">등록말소</span><br /><span class="cRed type02">등록취소</span><br /><span class="cBlue">등록완료</span><br />',
        },
    ];

    for (var i = 0; i < 14; i++) {
        gridTableData18.push({
            num18:'1',
            dataCell01_gt18:'경북160015',
            dataCell02_gt18:'(주)거성종합건설',
            dataCell03_gt18:'윤창락',
            dataCell04_gt18:'고급',
            dataCell05_gt18:'',
            dataCell06_gt18:'건설기술자',
            dataCell07_gt18:'<span class="cBlue">정상</span>',
            dataCell08_gt18:'<span class="cRed">등록말소</span><br /><span class="cRed type02">등록취소</span><br /><span class="cBlue">등록완료</span><br />',
        });
    }

    for(var i= 0; i <= gridTableData18.length; i++)
    $('#gridTable18').jqGrid('addRowData',i + 1, gridTableData18[i]);

    
    /* 등록관리 - 인력정보 관리 - 전문인력관리 - 전문인력 */
    $('#gridTable19').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','상태','성명','주민등록번호','임원구분','직위','입사일', '등기일자'],
        colModel:[

            {name:'num19',index:'num19', width: 45, align: 'center'},
            {name:'dataCell01_gt19',index:'dataCell01_gt19', width: 150, align: 'center'},
            {name:'dataCell02_gt19',index:'dataCell02_gt19', width: 190, align: 'center'},
            {name:'dataCell03_gt19',index:'dataCell03_gt19', width: 440, align: 'center'},
            {name:'dataCell04_gt19',index:'dataCell04_gt19', width: 190, align: 'center'},
            {name:'dataCell05_gt19',index:'dataCell05_gt19', width: 190, align: 'center'},
            {name:'dataCell06_gt19',index:'dataCell06_gt19', width: 190, align: 'center'},
            {name:'dataCell07_gt19',index:'dataCell07_gt19', width: 190, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData19 = [ 
        {
            num19:'1',
            dataCell01_gt19:'<span class="cRed">삭제</span><br /><span class="cBlue">정상</span>',
            dataCell02_gt19:'김현수',
            dataCell03_gt19:'',
            dataCell04_gt19:'대표이사',
            dataCell05_gt19:'',
            dataCell06_gt19:'2020-12-31',
            dataCell07_gt19:'2020-12-31',
        },
    ];

    for (var i = 0; i < 14; i++) {
        gridTableData19.push({
            num19:'1',
            dataCell01_gt19:'<span class="cRed">삭제</span><br /><span class="cBlue">정상</span>',
            dataCell02_gt19:'김현수',
            dataCell03_gt19:'',
            dataCell04_gt19:'대표이사',
            dataCell05_gt19:'',
            dataCell06_gt19:'2020-12-31',
            dataCell07_gt19:'2020-12-31',
        });
    }

    for(var i= 0; i <= gridTableData19.length; i++)
    $('#gridTable19').jqGrid('addRowData',i + 1, gridTableData19[i]);

    /* 등록관리 - 인력정보 관리 - 전문인력관리 - 교육이수 */
    $('#gridTable20').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['교육기관명','수료증발급번호','수료일자','교육시작일','교육종료일','교육기관대표자'],
        colModel:[
            {name:'dataCell01_gt20',index:'dataCell01_gt20', width: 340, align: 'center'},
            {name:'dataCell02_gt20',index:'dataCell02_gt20', width: 340, align: 'center'},
            {name:'dataCell03_gt20',index:'dataCell03_gt20', width: 190, align: 'center'},
            {name:'dataCell04_gt20',index:'dataCell04_gt20', width: 190, align: 'center'},
            {name:'dataCell05_gt20',index:'dataCell05_gt20', width: 190, align: 'center'},
            {name:'dataCell06_gt20',index:'dataCell06_gt20', width: 340, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData20 = [ 
        {
            dataCell01_gt20:'(주)교육기관',
            dataCell02_gt20:'20222-215578321',
            dataCell03_gt20:'2022-12-31',
            dataCell04_gt20:'2022-12-31',
            dataCell05_gt20:'2022-12-31',
            dataCell06_gt20:'교대표',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData20.push({
            dataCell01_gt20:'(주)교육기관',
            dataCell02_gt20:'20222-215578321',
            dataCell03_gt20:'2022-12-31',
            dataCell04_gt20:'2022-12-31',
            dataCell05_gt20:'2022-12-31',
            dataCell06_gt20:'교대표',
        });
    }

    for(var i= 0; i <= gridTableData20.length; i++)
    $('#gridTable20').jqGrid('addRowData',i + 1, gridTableData20[i]);


    /* 등록관리 - 행정처분 과태료 관리 - 실태조사 상세정보 - 임원 */
    $('#gridTable21').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','직위','성명','주민등록유형','주민번호','임원구분','등기일','입사일','보고일'],
        colModel:[
            {name:'num21',index:'num21', width: 45, align: 'center'},
            {name:'dataCell01_gt21',index:'dataCell01_gt21', width: 150, align: 'center'},
            {name:'dataCell02_gt21',index:'dataCell02_gt21', width: 150, align: 'center'},
            {name:'dataCell03_gt21',index:'dataCell03_gt21', width: 235, align: 'center'},
            {name:'dataCell04_gt21',index:'dataCell04_gt21', width: 200, align: 'center'},
            {name:'dataCell05_gt21',index:'dataCell05_gt21', width: 235, align: 'center'},
            {name:'dataCell06_gt21',index:'dataCell06_gt21', width: 190, align: 'center'},
            {name:'dataCell06_gt21',index:'dataCell06_gt21', width: 190, align: 'center'},
            {name:'dataCell06_gt21',index:'dataCell06_gt21', width: 190, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData21 = [ 
        {
            num21:'1',
            dataCell01_gt21:'대표',
            dataCell02_gt21:'서정영',
            dataCell03_gt21:'주민번호',
            dataCell04_gt21:'111111-1111111',
            dataCell05_gt21:'대표이사',
            dataCell06_gt21:'2022-12-31',
            dataCell06_gt21:'2022-12-31',
            dataCell06_gt21:'2022-12-31',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData21.push({
            num21:'1',
            dataCell01_gt21:'대표',
            dataCell02_gt21:'서정영',
            dataCell03_gt21:'주민번호',
            dataCell04_gt21:'111111-1111111',
            dataCell05_gt21:'대표이사',
            dataCell06_gt21:'2022-12-31',
            dataCell06_gt21:'2022-12-31',
            dataCell06_gt21:'2022-12-31',
        });
    }

    for(var i= 0; i <= gridTableData21.length; i++)
    $('#gridTable21').jqGrid('addRowData',i + 1, gridTableData21[i]);


    /* 등록관리 - 행정처분 과태료 관리 - 실태조사 상세정보 - 현장조사정보 */
    $('#gridTable22').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번'],
        colModel:[
            {name:'dataCell01_gt22',index:'dataCell01_gt22', width: 400, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData22 = [ 
        {
            dataCell01_gt22:'검색결과가 없습니다.',
        },
    ];

    for (var i = 0; i < 15; i++) {
        gridTableData22.push({
            dataCell01_gt22:'검색결과가 없습니다.',
        });
    }

    for(var i= 0; i <= gridTableData22.length; i++)
    $('#gridTable22').jqGrid('addRowData',i + 1, gridTableData22[i]);


    /* 등록관리 - 행정처분 과태료 관리 - 실태조사 상세정보 - 임원 - 행정처분 */
    $('#gridTable23').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','부동산개발업<br />등록번호','상호','처분유형','처분대상','시작일','종료일','처분일','위반행위횟수','처분청',
        '처분내용','위반내용'],
        colModel:[
            {name:'num23',index:'num23', width: 45, align: 'center'},
            {name:'dataCell01_gt23',index:'dataCell01_gt23', width: 150, align: 'center'},
            {name:'dataCell02_gt23',index:'dataCell02_gt23', width: 150, align: 'center'},
            {name:'dataCell03_gt23',index:'dataCell03_gt23', width: 130, align: 'center'},
            {name:'dataCell04_gt23',index:'dataCell04_gt23', width: 100, align: 'center'},
            {name:'dataCell05_gt23',index:'dataCell05_gt23', width: 85, align: 'center'},
            {name:'dataCell06_gt23',index:'dataCell06_gt23', width: 85, align: 'center'},
            {name:'dataCell07_gt23',index:'dataCell07_gt23', width: 100, align: 'center'},
            {name:'dataCell08_gt23',index:'dataCell08_gt23', width: 100, align: 'center'},
            {name:'dataCell09_gt23',index:'dataCell09_gt23', width: 100, align: 'center'},
            {name:'dataCell10_gt23',index:'dataCell10_gt23', width: 275, align: 'center'},
            {name:'dataCell11_gt23',index:'dataCell11_gt23', width: 275, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData23 = [ 
        {
            num23:'1',
            dataCell01_gt23:'경북150012',
            dataCell02_gt23:'한승건설(주)',
            dataCell03_gt23:'벌칙(과태료)',
            dataCell04_gt23:'업자',
            dataCell05_gt23:'2016-01-18',
            dataCell06_gt23:'2016-02-02',
            dataCell07_gt23:'2016-01-18',
            dataCell08_gt23:'1',
            dataCell09_gt23:'경상북도',
            dataCell10_gt23:'부동산개발업 등록사업',
            dataCell11_gt23:'법 제 17조 위반',
        },
    ];

    for (var i = 0; i < 14; i++) {
        gridTableData23.push({
            num23:'1',
            dataCell01_gt23:'경북150012',
            dataCell02_gt23:'한승건설(주)',
            dataCell03_gt23:'벌칙(과태료)',
            dataCell04_gt23:'업자',
            dataCell05_gt23:'2016-01-18',
            dataCell06_gt23:'2016-02-02',
            dataCell07_gt23:'2016-01-18',
            dataCell08_gt23:'1',
            dataCell09_gt23:'경상북도',
            dataCell10_gt23:'부동산개발업 등록사업',
            dataCell11_gt23:'법 제 17조 위반',
        });
    }

    for(var i= 0; i <= gridTableData23.length; i++)
    $('#gridTable23').jqGrid('addRowData',i + 1, gridTableData23[i]);

    $('#gridTable23').jqGrid('setGroupHeaders', {
        useColSpanStyle: true, 
        groupHeaders:[
            {startColumnName: 'dataCell06_gt23', numberOfColumns: 2, titleText: '처분기간(납부기간)'},
        ]	
    });


    /* 등록관리 - 과태료 부과(예정)대상관리 */
    $('#gridTable24').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','부동산개발업<br />등록번호','상호','부과(예정)사유','사유발생일(접수일)','행정처분 대상 여부'],
        colModel:[
            {name:'num24',index:'num24', width: 45, align: 'center'},
            {name:'dataCell01_gt24',index:'dataCell01_gt24', width: 150, align: 'center'},
            {name:'dataCell02_gt24',index:'dataCell02_gt24', width: 200, align: 'center'},
            {name:'dataCell03_gt24',index:'dataCell03_gt24', width: 814, align: 'center'},
            {name:'dataCell04_gt24',index:'dataCell04_gt24', width: 190, align: 'center'},
            {name:'dataCell05_gt24',index:'dataCell05_gt24', width: 190, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData24 = [ 
        {
            num24:'1',
            dataCell01_gt24:'경북100007',
            dataCell02_gt24:'계림건축사사무소',
            dataCell03_gt24:'사업실적, 자본금의 변경, 임원 및 부동산개발 전문인력의 변경을 보고하지 아니하거나 거짓의 내용',
            dataCell04_gt24:'2022-12-31',
            dataCell05_gt24:'미완료',
        },
    ];

    for (var i = 0; i < 14; i++) {
        gridTableData24.push({
            num24:'1',
            dataCell01_gt24:'경북100007',
            dataCell02_gt24:'계림건축사사무소',
            dataCell03_gt24:'사업실적, 자본금의 변경, 임원 및 부동산개발 전문인력의 변경을 보고하지 아니하거나 거짓의 내용',
            dataCell04_gt24:'2022-12-31',
            dataCell05_gt24:'미완료',
        });
    }

    for(var i= 0; i <= gridTableData24.length; i++)
    $('#gridTable24').jqGrid('addRowData',i + 1, gridTableData24[i]);


    /* 등록관리 - 불법 부정행위업체 관리 */
    $('#gridTable25').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','연면적(㎡)','연간연면적(㎡)','토지면적(㎡)','연간 토지면적(㎡)','준공일','거래일','등록사용자'],
        colModel:[
            {name:'num25',index:'num25', width: 45, align: 'center'},
            {name:'dataCell01_gt25',index:'dataCell01_gt25', width: 220, align: 'center'},
            {name:'dataCell02_gt25',index:'dataCell02_gt25', width: 220, align: 'center'},
            {name:'dataCell03_gt25',index:'dataCell03_gt25', width: 220, align: 'center'},
            {name:'dataCell04_gt25',index:'dataCell04_gt25', width: 220, align: 'center'},
            {name:'dataCell05_gt25',index:'dataCell05_gt25', width: 220, align: 'center'},
            {name:'dataCell06_gt25',index:'dataCell06_gt25', width: 220, align: 'center'},
            {name:'dataCell07_gt25',index:'dataCell07_gt25', width: 230, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData25 = [ 
        {
            num25:'1',
            dataCell01_gt25:'18551.03',
            dataCell02_gt25:'18115.05',
            dataCell03_gt25:'2158.1',
            dataCell04_gt25:'8412.12',
            dataCell05_gt25:'2022-12-31',
            dataCell06_gt25:'2022-12-31',
            dataCell07_gt25:'SYSTEM',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData25.push({
            num25:'1',
            dataCell01_gt25:'18551.03',
            dataCell02_gt25:'18115.05',
            dataCell03_gt25:'2158.1',
            dataCell04_gt25:'8412.12',
            dataCell05_gt25:'2022-12-31',
            dataCell06_gt25:'2022-12-31',
            dataCell07_gt25:'SYSTEM',
        });
    }

    for(var i= 0; i <= gridTableData25.length; i++)
    $('#gridTable25').jqGrid('addRowData',i + 1, gridTableData25[i]);


    /* 등록관리 - 불법 부정행위업체 관리 - 관련 관계자 목록 */
    $('#gridTable26').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','관계자구분','관계자 명','주민(법인)등록번호 구분','관계자 주민(법인)등록번호','관계자 전화번호','대표여부'],
        colModel:[
            {name:'num26',index:'num26', width: 45, align: 'center'},
            {name:'dataCell01_gt26',index:'dataCell01_gt26', width: 240, align: 'center'},
            {name:'dataCell02_gt26',index:'dataCell02_gt26', width: 300, align: 'center'},
            {name:'dataCell03_gt26',index:'dataCell03_gt26', width: 250, align: 'center'},
            {name:'dataCell04_gt26',index:'dataCell04_gt26', width: 250, align: 'center'},
            {name:'dataCell05_gt26',index:'dataCell05_gt26', width: 250, align: 'center'},
            {name:'dataCell06_gt26',index:'dataCell06_gt26', width: 250, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData26 = [ 
        {
            num26:'1',
            dataCell01_gt26:'시공자',
            dataCell02_gt26:'이수현',
            dataCell03_gt26:'법인',
            dataCell04_gt26:'123456-1234567',
            dataCell05_gt26:'054-956-8208',
            dataCell06_gt26:'N',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData26.push({
            num26:'1',
            dataCell01_gt26:'시공자',
            dataCell02_gt26:'이수현',
            dataCell03_gt26:'법인',
            dataCell04_gt26:'123456-1234567',
            dataCell05_gt26:'054-956-8208',
            dataCell06_gt26:'N',
        });
    }

    for(var i= 0; i <= gridTableData26.length; i++)
    $('#gridTable26').jqGrid('addRowData',i + 1, gridTableData26[i]);


    /* 등록관리 - 불법 부정행위업체 관리 - 관련 지번주소 목록 */
    $('#gridTable27').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','PNU','법정동명','토지구분','본번','부번','대표여부'],
        colModel:[
            {name:'num27',index:'num27', width: 45, align: 'center'},
            {name:'dataCell01_gt27',index:'dataCell01_gt27', width: 250, align: 'center'},
            {name:'dataCell02_gt27',index:'dataCell02_gt27', width: 610, align: 'center'},
            {name:'dataCell03_gt27',index:'dataCell03_gt27', width: 170, align: 'center'},
            {name:'dataCell04_gt27',index:'dataCell04_gt27', width: 170, align: 'center'},
            {name:'dataCell05_gt27',index:'dataCell05_gt27', width: 170, align: 'center'},
            {name:'dataCell06_gt27',index:'dataCell06_gt27', width: 170, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData27 = [ 
        {
            num27:'1',
            dataCell01_gt27:'4790039022100360001',
            dataCell02_gt27:'경상북도 예천군 개포면 경진리',
            dataCell03_gt27:'산',
            dataCell04_gt27:'0036',
            dataCell05_gt27:'0001',
            dataCell06_gt27:'Y',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData27.push({
            num27:'1',
            dataCell01_gt27:'4790039022100360001',
            dataCell02_gt27:'경상북도 예천군 개포면 경진리',
            dataCell03_gt27:'산',
            dataCell04_gt27:'0036',
            dataCell05_gt27:'0001',
            dataCell06_gt27:'Y',
        });
    }

    for(var i= 0; i <= gridTableData27.length; i++)
    $('#gridTable27').jqGrid('addRowData',i + 1, gridTableData27[i]);


    /* 등록관리 - 등록증교부정보 관리 */
    $('#gridTable28').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','부동산개발업<br />등록번호','등록일자','교부구분','교부일자','수령일자','상호','대표자','영업소 소재지'],
        colModel:[
            {name:'num28',index:'num28', width: 45, align: 'center'},
            {name:'dataCell01_gt28',index:'dataCell01_gt28', width: 150, align: 'center'},
            {name:'dataCell02_gt28',index:'dataCell02_gt28', width: 150, align: 'center'},
            {name:'dataCell03_gt28',index:'dataCell03_gt28', width: 150, align: 'center'},
            {name:'dataCell04_gt28',index:'dataCell04_gt28', width: 150, align: 'center'},
            {name:'dataCell05_gt28',index:'dataCell05_gt28', width: 150, align: 'center'},
            {name:'dataCell06_gt28',index:'dataCell06_gt28', width: 200, align: 'center'},
            {name:'dataCell07_gt28',index:'dataCell07_gt28', width: 150, align: 'center'},
            {name:'dataCell08_gt28',index:'dataCell08_gt28', width: 440, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData28 = [ 
        {
            num28:'1',
            dataCell01_gt28:'경북100007',
            dataCell02_gt28:'2022-12-31',
            dataCell03_gt28:'재교부',
            dataCell04_gt28:'2022-12-31',
            dataCell05_gt28:'2022-12-31',
            dataCell06_gt28:'카일특수법인(주)',
            dataCell07_gt28:'카일',
            dataCell08_gt28:'경상북도 경산시 중앙초등길 4, 205',
        },
    ];

    for (var i = 0; i < 14; i++) {
        gridTableData28.push({
            num28:'1',
            dataCell01_gt28:'경북100007',
            dataCell02_gt28:'2022-12-31',
            dataCell03_gt28:'재교부',
            dataCell04_gt28:'2022-12-31',
            dataCell05_gt28:'2022-12-31',
            dataCell06_gt28:'카일특수법인(주)',
            dataCell07_gt28:'카일',
            dataCell08_gt28:'경상북도 경산시 중앙초등길 4, 205',
        });
    }

    for(var i= 0; i <= gridTableData28.length; i++)
    $('#gridTable28').jqGrid('addRowData',i + 1, gridTableData28[i]);


    /* 등록관리 - 등록증교부정보 관리 상세조회 - 변경이력 */
    $('#gridTable29').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','변경신청일','변경일','변경구분','변경전내용','변경후내용','변경사유','최초등록일시','최초등록자'],
        colModel:[
            {name:'num29',index:'num29', width: 45, align: 'center'},
            {name:'dataCell01_gt29',index:'dataCell01_gt29', width: 100, align: 'center'},
            {name:'dataCell02_gt29',index:'dataCell02_gt29', width: 100, align: 'center'},
            {name:'dataCell03_gt29',index:'dataCell03_gt29', width: 200, align: 'center'},
            {name:'dataCell04_gt29',index:'dataCell04_gt29', width: 320, align: 'center'},
            {name:'dataCell05_gt29',index:'dataCell05_gt29', width: 320, align: 'center'},
            {name:'dataCell06_gt29',index:'dataCell06_gt29', width: 200, align: 'center'},
            {name:'dataCell07_gt29',index:'dataCell07_gt29', width: 150, align: 'center'},
            {name:'dataCell08_gt29',index:'dataCell08_gt29', width: 150, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData29 = [ 
        {
            num29:'1',
            dataCell01_gt29:'2022-12-31',
            dataCell02_gt29:'2022-12-31',
            dataCell03_gt29:'자산관리회사변경',
            dataCell04_gt29:'자산관리회사변경 대표자, 소재지',
            dataCell05_gt29:'자산관리회사변경 대표자, 소재지',
            dataCell06_gt29:'기재사항변경',
            dataCell07_gt29:'20200103155549',
            dataCell08_gt29:'부동산개발협회',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData29.push({
            num29:'1',
            dataCell01_gt29:'2022-12-31',
            dataCell02_gt29:'2022-12-31',
            dataCell03_gt29:'자산관리회사변경',
            dataCell04_gt29:'자산관리회사변경 대표자, 소재지',
            dataCell05_gt29:'자산관리회사변경 대표자, 소재지',
            dataCell06_gt29:'기재사항변경',
            dataCell07_gt29:'20200103155549',
            dataCell08_gt29:'부동산개발협회',
        });
    }

    for(var i= 0; i <= gridTableData29.length; i++)
    $('#gridTable29').jqGrid('addRowData',i + 1, gridTableData29[i]);


    /* 신청신고 - 이관정보 관리 - 양도신고 - 사업자 */
    $('#gridTable30').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','신고대상','상호','법인구분','법인등록번호','등록번호','등록일자','대표자','대표자주민번호','전화번호','담당자','국적','영업소소재지'],
        colModel:[
            {name:'num30',index:'num30', width: 45, align: 'center'},
            {name:'dataCell01_gt30',index:'dataCell01_gt30', width: 100, align: 'center'},
            {name:'dataCell02_gt30',index:'dataCell02_gt30', width: 200, align: 'center'},
            {name:'dataCell03_gt30',index:'dataCell03_gt30', width: 150, align: 'center'},
            {name:'dataCell04_gt30',index:'dataCell04_gt30', width: 200, align: 'center'},
            {name:'dataCell05_gt30',index:'dataCell05_gt30', width: 200, align: 'center'},
            {name:'dataCell06_gt30',index:'dataCell06_gt30', width: 200, align: 'center'},
            {name:'dataCell07_gt30',index:'dataCell07_gt30', width: 150, align: 'center'},
            {name:'dataCell08_gt30',index:'dataCell08_gt30', width: 150, align: 'center'},
            {name:'dataCell09_gt30',index:'dataCell09_gt30', width: 150, align: 'center'},
            {name:'dataCell10_gt30',index:'dataCell10_gt30', width: 150, align: 'center'},
            {name:'dataCell11_gt30',index:'dataCell11_gt30', width: 150, align: 'center'},
            {name:'dataCell12_gt30',index:'dataCell12_gt30', width: 420, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });    

    var gridTableData30 = [ 
        {
            num30:'1',
            dataCell01_gt30:'양도인',
            dataCell02_gt30:'(주)예안이엔지',
            dataCell03_gt30:'일반법인',
            dataCell04_gt30:'',
            dataCell05_gt30:'경북160009',
            dataCell06_gt30:'2016-04-26',
            dataCell07_gt30:'안경태',
            dataCell08_gt30:'',
            dataCell09_gt30:'010891516249',
            dataCell10_gt30:'박준재',
            dataCell11_gt30:'대한민국',
            dataCell12_gt30:'경상북도 예천군 예천읍 효자로 7',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData30.push({
            num30:'1',
            dataCell01_gt30:'양도인',
            dataCell02_gt30:'(주)예안이엔지',
            dataCell03_gt30:'일반법인',
            dataCell04_gt30:'',
            dataCell05_gt30:'경북160009',
            dataCell06_gt30:'2016-04-26',
            dataCell07_gt30:'안경태',
            dataCell08_gt30:'',
            dataCell09_gt30:'010891516249',
            dataCell10_gt30:'박준재',
            dataCell11_gt30:'대한민국',
            dataCell12_gt30:'경상북도 예천군 예천읍 효자로 7',
        });
    }

    for(var i= 0; i <= gridTableData30.length; i++)
    $('#gridTable30').jqGrid('addRowData',i + 1, gridTableData30[i]);


    /* 신청신고 - 이관정보 관리 -  법인합병신고 - 사업자 */
    $('#gridTable31').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','신고대상','상호','법인구분','법인등록번호','등록번호','등록일자','대표자','대표자주민번호','전화번호','담당자','국적','영업소소재지'],
        colModel:[
            {name:'num31',index:'num31', width: 45, align: 'center'},
            {name:'dataCell01_gt31',index:'dataCell01_gt31', width: 100, align: 'center'},
            {name:'dataCell02_gt31',index:'dataCell02_gt31', width: 200, align: 'center'},
            {name:'dataCell03_gt31',index:'dataCell03_gt31', width: 150, align: 'center'},
            {name:'dataCell04_gt31',index:'dataCell04_gt31', width: 200, align: 'center'},
            {name:'dataCell05_gt31',index:'dataCell05_gt31', width: 200, align: 'center'},
            {name:'dataCell06_gt31',index:'dataCell06_gt31', width: 200, align: 'center'},
            {name:'dataCell07_gt31',index:'dataCell07_gt31', width: 150, align: 'center'},
            {name:'dataCell08_gt31',index:'dataCell08_gt31', width: 150, align: 'center'},
            {name:'dataCell09_gt31',index:'dataCell09_gt31', width: 150, align: 'center'},
            {name:'dataCell10_gt31',index:'dataCell10_gt31', width: 150, align: 'center'},
            {name:'dataCell11_gt31',index:'dataCell11_gt31', width: 150, align: 'center'},
            {name:'dataCell12_gt31',index:'dataCell12_gt31', width: 420, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData31 = [ 
        {
            num31:'1',
            dataCell01_gt31:'합병존속법인',
            dataCell02_gt31:'(주)예안이엔지',
            dataCell03_gt31:'일반법인',
            dataCell04_gt31:'',
            dataCell05_gt31:'경북160009',
            dataCell06_gt31:'2016-04-26',
            dataCell07_gt31:'안경태',
            dataCell08_gt31:'',
            dataCell09_gt31:'010891516249',
            dataCell10_gt31:'박준재',
            dataCell11_gt31:'대한민국',
            dataCell12_gt31:'경상북도 예천군 예천읍 효자로 7',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData31.push({
            num31:'1',
            dataCell01_gt31:'합병존속법인',
            dataCell02_gt31:'(주)예안이엔지',
            dataCell03_gt31:'일반법인',
            dataCell04_gt31:'',
            dataCell05_gt31:'경북160009',
            dataCell06_gt31:'2016-04-26',
            dataCell07_gt31:'안경태',
            dataCell08_gt31:'',
            dataCell09_gt31:'010891516249',
            dataCell10_gt31:'박준재',
            dataCell11_gt31:'대한민국',
            dataCell12_gt31:'경상북도 예천군 예천읍 효자로 7',
        });
    }

    for(var i= 0; i <= gridTableData31.length; i++)
    $('#gridTable31').jqGrid('addRowData',i + 1, gridTableData31[i]);

 
    /* 등록관리 - 인력정보 관리 -  임원관리 - 임원관리목록 */
    $('#gridTable32').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','부동산개발업등록번호','상호','성명','주민번호유형','(법인)주민등록번호','임원구분','인력상태','부동산개발업 등록상태'],
        colModel:[
            {name:'num32',index:'num32', width: 45, align: 'center'},
            {name:'dataCell01_gt32',index:'dataCell01_gt32', width: 150, align: 'center'},
            {name:'dataCell02_gt32',index:'dataCell02_gt32', width: 294, align: 'center'},
            {name:'dataCell03_gt32',index:'dataCell03_gt32', width: 150, align: 'center'},
            {name:'dataCell04_gt32',index:'dataCell04_gt32', width: 200, align: 'center'},
            {name:'dataCell05_gt32',index:'dataCell05_gt32', width: 250, align: 'center'},
            {name:'dataCell06_gt32',index:'dataCell06_gt32', width: 200, align: 'center'},
            {name:'dataCell07_gt32',index:'dataCell07_gt32', width: 150, align: 'center'},
            {name:'dataCell08_gt32',index:'dataCell08_gt32', width: 150, align: 'center'},
        ],
        hoverrows: false, autowidth:true, shrinkToFit : false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData32 = [ 
        {
            num32:'1',
            dataCell01_gt32:'경북160015',
            dataCell02_gt32:'(주)거성종합건설',
            dataCell03_gt32:'김동섭',
            dataCell04_gt32:'주민번호',
            dataCell05_gt32:'',
            dataCell06_gt32:'대표이사',
            dataCell07_gt32:'<span class="cBlue">정상</span>',
            dataCell08_gt32:'<span class="cRed">등록말소</span>',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData32.push({
            num32:'1',
            dataCell01_gt32:'경북160015',
            dataCell02_gt32:'(주)거성종합건설',
            dataCell03_gt32:'김동섭',
            dataCell04_gt32:'주민번호',
            dataCell05_gt32:'',
            dataCell06_gt32:'대표이사',
            dataCell07_gt32:'<span class="cBlue">정상</span>',
            dataCell08_gt32:'<span class="cRed">등록말소</span><br /><span class="cRed type02">등록취소</span><br /><span class="cBlue">등록완료</span>',
        });
    }

    for(var i= 0; i <= gridTableData32.length; i++)
    $('#gridTable32').jqGrid('addRowData',i + 1, gridTableData32[i]);


      
    /* 등록관리 - 인력정보 관리 -  임원관리 - 상세 */
    $('#gridTable33').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','상태','성명','주민등록번호','임원구분','직위','입사일', '등기일자'],
        colModel:[

            {name:'num33',index:'num33', width: 45, align: 'center'},
            {name:'dataCell01_gt33',index:'dataCell01_gt33', width: 150, align: 'center'},
            {name:'dataCell02_gt33',index:'dataCell02_gt33', width: 190, align: 'center'},
            {name:'dataCell03_gt33',index:'dataCell03_gt33', width: 440, align: 'center'},
            {name:'dataCell04_gt33',index:'dataCell04_gt33', width: 190, align: 'center'},
            {name:'dataCell05_gt33',index:'dataCell05_gt33', width: 190, align: 'center'},
            {name:'dataCell06_gt33',index:'dataCell06_gt33', width: 190, align: 'center'},
            {name:'dataCell07_gt33',index:'dataCell07_gt33', width: 190, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData33 = [ 
        {
            num33:'1',
            dataCell01_gt33:'<span class="cRed">삭제</span><br /><span class="cBlue">정상</span>',
            dataCell02_gt33:'김현수',
            dataCell03_gt33:'',
            dataCell04_gt33:'대표이사',
            dataCell05_gt33:'',
            dataCell06_gt33:'2020-12-31',
            dataCell07_gt33:'2020-12-31',
        },
    ];

    for (var i = 0; i < 14; i++) {
        gridTableData33.push({
            num33:'1',
            dataCell01_gt33:'<span class="cRed">삭제</span><br /><span class="cBlue">정상</span>',
            dataCell02_gt33:'김현수',
            dataCell03_gt33:'',
            dataCell04_gt33:'대표이사',
            dataCell05_gt33:'',
            dataCell06_gt33:'2020-12-31',
            dataCell07_gt33:'2020-12-31',
        });
    }

    for(var i= 0; i <= gridTableData33.length; i++)
    $('#gridTable33').jqGrid('addRowData',i + 1, gridTableData33[i]);


      
    /* 등록관리 - 사무실정보 관리 -  상세 - 사무실 */
    $('#gridTable34').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','영업소구분','영업소소재지','면적(㎡)','임대시작일','임대종료일','소유형태', '상태'],
        colModel:[

            {name:'num34',index:'num34', width: 45, align: 'center'},
            {name:'dataCell01_gt34',index:'dataCell01_gt34', width: 200, align: 'center'},
            {name:'dataCell02_gt34',index:'dataCell02_gt34', width: 468, align: 'center'},
            {name:'dataCell03_gt34',index:'dataCell03_gt34', width: 150, align: 'center'},
            {name:'dataCell04_gt34',index:'dataCell04_gt34', width: 190, align: 'center'},
            {name:'dataCell05_gt34',index:'dataCell05_gt34', width: 190, align: 'center'},
            {name:'dataCell06_gt34',index:'dataCell06_gt34', width: 190, align: 'center'},
            {name:'dataCell07_gt34',index:'dataCell07_gt34', width: 148, align: 'center'},
        ],
        hoverrows: false, autowidth:true, shrinkToFit : false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData34 = [ 
        {
            num34:'1',
            dataCell01_gt34:'주사무소',
            dataCell02_gt34:'경상북도 청송군 파천면 관리 547-22',
            dataCell03_gt34:'52.09',
            dataCell04_gt34:'2020-12-31',
            dataCell05_gt34:'2020-12-31',
            dataCell06_gt34:'임대',
            dataCell07_gt34:'<span class="cRed">삭제</span><br /><span class="cBlue">정상</span>',
        },
    ];

    for (var i = 0; i < 14; i++) {
        gridTableData34.push({
            num34:'1',
            dataCell01_gt34:'주사무소',
            dataCell02_gt34:'경상북도 청송군 파천면 관리 547-22',
            dataCell03_gt34:'52.09',
            dataCell04_gt34:'2020-12-31',
            dataCell05_gt34:'2020-12-31',
            dataCell06_gt34:'임대',
            dataCell07_gt34:'<span class="cRed">삭제</span><br /><span class="cBlue">정상</span>',
        });
    }

    for(var i= 0; i <= gridTableData34.length; i++)
    $('#gridTable34').jqGrid('addRowData',i + 1, gridTableData34[i]);

    
      
    /* 등록관리 - 사무실정보 관리 -  상세 - 파일 */
    $('#gridTable35').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','파일명','파일크기(Byte)'],
        colModel:[

            {name:'num35',index:'num35', width: 45, align: 'center'},
            {name:'dataCell01_gt35',index:'dataCell01_gt35', width: 440, align: 'center'},
            {name:'dataCell02_gt35',index:'dataCell02_gt35', width: 180, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData35 = [ 
        {
            num35:'1',
            dataCell01_gt35:'신용평가서.png',
            dataCell02_gt35:'347.22',
        },
    ];

    for (var i = 0; i < 14; i++) {
        gridTableData35.push({
            num35:'1',
            dataCell01_gt35:'신용평가서.png',
            dataCell02_gt35:'347.22',
        });
    }

    for(var i= 0; i <= gridTableData35.length; i++)
    $('#gridTable35').jqGrid('addRowData',i + 1, gridTableData35[i]);


      
    /* 등록관리 - 인력정보 관리 -  전문인력관리 - 목록 */
    $('#gridTable36').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','성명','주민등록번호','전문인력 이력 건수','교육이수 건수','자격증 건수','경력 건수'],
        colModel:[

            {name:'num36',index:'num36', width: 45, align: 'center'},
            {name:'dataCell01_gt36',index:'dataCell01_gt36', width: 310, align: 'center'},
            {name:'dataCell02_gt36',index:'dataCell02_gt36', width: 474, align: 'center'},
            {name:'dataCell03_gt36',index:'dataCell03_gt36', width: 190, align: 'center'},
            {name:'dataCell04_gt36',index:'dataCell04_gt36', width: 190, align: 'center'},
            {name:'dataCell05_gt36',index:'dataCell05_gt36', width: 190, align: 'center'},
            {name:'dataCell06_gt36',index:'dataCell06_gt36', width: 190, align: 'center'},
        ],
        hoverrows: false, autowidth:true, shrinkToFit : false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData36 = [ 
        {
            num36:'1',
            dataCell01_gt36:'홍길동',
            dataCell02_gt36:'',
            dataCell03_gt36:'1',
            dataCell04_gt36:'0',
            dataCell05_gt36:'0',
            dataCell06_gt36:'0',
        },
    ];

    for (var i = 0; i < 14; i++) {
        gridTableData36.push({
            num36:i+2,
            dataCell01_gt36:'홍길동',
            dataCell02_gt36:'',
            dataCell03_gt36:'1',
            dataCell04_gt36:'1',
            dataCell05_gt36:'1',
            dataCell06_gt36:'0',
        });
    }

    for(var i= 0; i <= gridTableData36.length; i++)
    $('#gridTable36').jqGrid('addRowData',i + 1, gridTableData36[i]);

      
    /* 등록관리 - 자산관리회사 관리 - 목록 */
    $('#gridTable37').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','사업자등록번호','상호','대표자','전화번호','팩스번호','사무실소재지'],
        colModel:[

            {name:'num37',index:'num37', width: 45, align: 'center'},
            {name:'dataCell01_gt37',index:'dataCell01_gt37', width: 220, align: 'center'},
            {name:'dataCell02_gt37',index:'dataCell02_gt37', width: 322, align: 'center'},
            {name:'dataCell03_gt37',index:'dataCell03_gt37', width: 210, align: 'center'},
            {name:'dataCell04_gt37',index:'dataCell04_gt37', width: 200, align: 'center'},
            {name:'dataCell05_gt37',index:'dataCell05_gt37', width: 200, align: 'center'},
            {name:'dataCell06_gt37',index:'dataCell06_gt37', width: 400, align: 'center'},
        ],
        hoverrows: false, autowidth:true, shrinkToFit : false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData37 = [ 
        {
            num37:'1',
            dataCell01_gt37:'-',
            dataCell02_gt37:'니나노자산',
            dataCell03_gt37:'니나노니',
            dataCell04_gt37:'02-0000-0000',
            dataCell05_gt37:'02-0000-0000',
            dataCell06_gt37:'서울특별시 강남구 도산대로 83길 36,101',
        },
    ];

    for (var i = 0; i < 14; i++) {
        gridTableData37.push({
            num37:i+2,
            dataCell01_gt37:'-',
            dataCell02_gt37:'니나노자산',
            dataCell03_gt37:'니나노니',
            dataCell04_gt37:'02-0000-0000',
            dataCell05_gt37:'02-0000-0000',
            dataCell06_gt37:'서울특별시 강남구 도산대로 83길 36,101',
        });
    }

    for(var i= 0; i <= gridTableData37.length; i++)
    $('#gridTable37').jqGrid('addRowData',i + 1, gridTableData37[i]);


      
    /* 등록관리 - 신용평가정보 관리 - 목록 */
    $('#gridTable38').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','평가대상개발업체 등록번호','평가대상개발업체 상호','신용평가회사','평가구분','평가일','신용평가 유효일(만료일)','평가등급','등록일','첨부'],
        colModel:[

            {name:'num38',index:'num38', width: 45, align: 'center'},
            {name:'dataCell01_gt38',index:'dataCell01_gt38', width: 220, align: 'center'},
            {name:'dataCell02_gt38',index:'dataCell02_gt38', width: 280, align: 'center'},
            {name:'dataCell03_gt38',index:'dataCell03_gt38', width: 200, align: 'center'},
            {name:'dataCell04_gt38',index:'dataCell04_gt38', width: 134, align: 'center'},
            {name:'dataCell05_gt38',index:'dataCell05_gt38', width: 140, align: 'center'},
            {name:'dataCell06_gt38',index:'dataCell06_gt38', width: 140, align: 'center'},
            {name:'dataCell07_gt38',index:'dataCell07_gt38', width: 120, align: 'center'},
            {name:'dataCell08_gt38',index:'dataCell08_gt38', width: 140, align: 'center'},
            {name:'dataCell09_gt38',index:'dataCell09_gt38', width: 178, align: 'center'},
        ],
        hoverrows: false, autowidth:true, shrinkToFit : false, 
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData38 = [ 
        {
            num38:'1',
            dataCell01_gt38:'경북080009',
            dataCell02_gt38:'190903-개발업회사상호',
            dataCell03_gt38:'한국신용평가',
            dataCell04_gt38:'정기평가',
            dataCell05_gt38:'2020-10-15',
            dataCell06_gt38:'2020-10-15',
            dataCell07_gt38:'02123',
            dataCell08_gt38:'2020-10-15',
            dataCell09_gt38:'첨부',
        },
    ];

    for (var i = 0; i < 14; i++) {
        gridTableData38.push({
            num38:i+2,
            dataCell01_gt38:'경북080009',
            dataCell02_gt38:'190903-개발업회사상호',
            dataCell03_gt38:'한국신용평가',
            dataCell04_gt38:'정기평가',
            dataCell05_gt38:'2020-10-15',
            dataCell06_gt38:'2020-10-15',
            dataCell07_gt38:'02123',
            dataCell08_gt38:'2020-10-15',
            dataCell09_gt38:'첨부',
        });
    }

    for(var i= 0; i <= gridTableData38.length; i++)
    $('#gridTable38').jqGrid('addRowData',i + 1, gridTableData38[i]);

    /* 등록관리 - 실태조사정보 관리 - 목록 */
    $('#gridTable39').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['연도','부동산개발업 등록번호','상호','대표자','주민(법인)번호','자본금(천원)','영업소재지','상호적합여부','대표자적합여부','자본금적합여부','소재지적합여부','임원적합여부','전문인력적합여부','등록상태','과태료여부','완료여부'],
        colModel:[

            {name:'dataCell01_gt39',index:'dataCell01_gt39', width: 70, align: 'center'},
            {name:'dataCell02_gt39',index:'dataCell02_gt39', width: 140, align: 'center'},
            {name:'dataCell03_gt39',index:'dataCell03_gt39', width: 180, align: 'center'},
            {name:'dataCell04_gt39',index:'dataCell04_gt39', width: 100, align: 'center'},
            {name:'dataCell05_gt39',index:'dataCell05_gt39', width: 120, align: 'center'},
            {name:'dataCell06_gt39',index:'dataCell06_gt39', width: 100, align: 'center'},
            {name:'dataCell07_gt39',index:'dataCell07_gt39', width: 360, align: 'center'},
            {name:'dataCell08_gt39',index:'dataCell08_gt39', width: 100, align: 'center'},
            {name:'dataCell09_gt39',index:'dataCell09_gt39', width: 100, align: 'center'},
            {name:'dataCell10_gt39',index:'dataCell10_gt39', width: 100, align: 'center'},
            {name:'dataCell11_gt39',index:'dataCell11_gt39', width: 100, align: 'center'},
            {name:'dataCell12_gt39',index:'dataCell12_gt39', width: 100, align: 'center'},
            {name:'dataCell13_gt39',index:'dataCell13_gt39', width: 110, align: 'center'},
            {name:'dataCell14_gt39',index:'dataCell14_gt39', width: 80, align: 'center'},
            {name:'dataCell15_gt39',index:'dataCell15_gt39', width: 90, align: 'center'},
            {name:'dataCell16_gt39',index:'dataCell16_gt39', width: 80, align: 'center'},
        ],
        hoverrows: false, autowidth:true, shrinkToFit : false, 
        multiselectWidth: 48,
        multiselect: true,
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData39 = [ 
        {
            dataCell01_gt39:'2022',
            dataCell02_gt39:'190903-등록번호',
            dataCell03_gt39:'한국신용평가',
            dataCell04_gt39:'정기평가',
            dataCell05_gt39:'123456-1234567',
            dataCell06_gt39:'1,560,000',
            dataCell07_gt39:'',
            dataCell08_gt39:'',
            dataCell09_gt39:'',
            dataCell10_gt39:'',
            dataCell11_gt39:'',
            dataCell12_gt39:'',
            dataCell13_gt39:'',
            dataCell14_gt39:'등록완료',
            dataCell15_gt39:'',
            dataCell16_gt39:'미완료',
        },
    ];

    for (var i = 0; i < 14; i++) {
        gridTableData39.push({
            dataCell01_gt39:'2022',
            dataCell02_gt39:'190903-등록번호',
            dataCell03_gt39:'한국신용평가',
            dataCell04_gt39:'정기평가',
            dataCell05_gt39:'123456-1234567',
            dataCell06_gt39:'1,560,000',
            dataCell07_gt39:'',
            dataCell08_gt39:'',
            dataCell09_gt39:'',
            dataCell10_gt39:'',
            dataCell11_gt39:'',
            dataCell12_gt39:'',
            dataCell13_gt39:'',
            dataCell14_gt39:'등록완료',
            dataCell15_gt39:'',
            dataCell16_gt39:'미완료',
        });
    }

    for(var i= 0; i <= gridTableData39.length; i++)
    $('#gridTable39').jqGrid('addRowData',i + 1, gridTableData39[i]);

    
      
    /* 등록관리 - 실태조사정보 관리 - 목록 - 실태조사 대상 검색 버튼클릭시 실태조사 대상추출 목록 */
    $('#gridTable40').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','부동산개발업<br />등록번호','상호','대표자','법인구분','주민(법인)번호','전화번호','팩스번호','등록일자','자본금(천원)'],
        colModel:[

            {name:'num40',index:'num40', width: 45, align: 'center'},
            {name:'dataCell01_gt40',index:'dataCell01_gt40', width: 100, align: 'center'},
            {name:'dataCell02_gt40',index:'dataCell02_gt40', width: 180, align: 'center'},
            {name:'dataCell03_gt40',index:'dataCell03_gt40', width: 100, align: 'center'},
            {name:'dataCell04_gt40',index:'dataCell04_gt40', width: 120, align: 'center'},
            {name:'dataCell05_gt40',index:'dataCell05_gt40', width: 120, align: 'center'},
            {name:'dataCell06_gt40',index:'dataCell06_gt40', width: 100, align: 'center'},
            {name:'dataCell07_gt40',index:'dataCell07_gt40', width: 100, align: 'center'},
            {name:'dataCell08_gt40',index:'dataCell08_gt40', width: 100, align: 'center'},
            {name:'dataCell09_gt40',index:'dataCell09_gt40', width: 100, align: 'center'},
        ],
        hoverrows: false, autowidth:true, shrinkToFit : false, 
        multiselectWidth: 48,
        multiselect: true,
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData40 = [ 
        {
            num40:'1',
            dataCell01_gt40:'',
            dataCell02_gt40:'',
            dataCell03_gt40:'',
            dataCell04_gt40:'',
            dataCell05_gt40:'',
            dataCell06_gt40:'',
            dataCell07_gt40:'',
            dataCell08_gt40:'',
            dataCell09_gt40:'',
        },
    ];

    for (var i = 0; i < 14; i++) {
        gridTableData40.push({
            num40:i+2,
            dataCell01_gt40:'',
            dataCell02_gt40:'',
            dataCell03_gt40:'',
            dataCell04_gt40:'',
            dataCell05_gt40:'',
            dataCell06_gt40:'',
            dataCell07_gt40:'',
            dataCell08_gt40:'',
            dataCell09_gt40:'',
        });
    }

    for(var i= 0; i <= gridTableData40.length; i++)
    $('#gridTable40').jqGrid('addRowData',i + 1, gridTableData40[i]);


    /* 사업실적/재무정보 - 재무정보 관리 - 통합 조회/등록 - 목록 */
    $('#gridTable41').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','부동산개발업 등록번호','상호','대표자','법인구분','주민(법인)번호','등록일자','등록상태','처리상태','영업소재지'],
        colModel:[

            {name:'num41',index:'num41', width: 45, align: 'center'},
            {name:'dataCell01_gt41',index:'dataCell01_gt41', width: 200, align: 'center'},
            {name:'dataCell02_gt41',index:'dataCell02_gt41', width: 180, align: 'center'},
            {name:'dataCell03_gt41',index:'dataCell03_gt41', width: 120, align: 'center'},
            {name:'dataCell04_gt41',index:'dataCell04_gt41', width: 120, align: 'center'},
            {name:'dataCell05_gt41',index:'dataCell05_gt41', width: 154, align: 'center'},
            {name:'dataCell06_gt41',index:'dataCell06_gt41', width: 100, align: 'center'},
            {name:'dataCell07_gt41',index:'dataCell07_gt41', width: 100, align: 'center'},
            {name:'dataCell08_gt41',index:'dataCell08_gt41', width: 100, align: 'center'},
            {name:'dataCell09_gt41',index:'dataCell09_gt41', width: 478, align: 'center'},
        ],
        hoverrows: false, autowidth:true, shrinkToFit : false, 
        //multiselectWidth: 48,
        //multiselect: true,
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData41 = [ 
        {
            num41:'1',
            dataCell01_gt41:'경북190017',
            dataCell02_gt41:'190903-개발업회사',
            dataCell03_gt41:'',
            dataCell04_gt41:'일반법인',
            dataCell05_gt41:'',
            dataCell06_gt41:'2019-09-01',
            dataCell07_gt41:'등록완료',
            dataCell08_gt41:'정상',
            dataCell09_gt41:'',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData41.push({
            num41:i+2,
            dataCell01_gt41:'경북190017',
            dataCell02_gt41:'190903-개발업회사',
            dataCell03_gt41:'',
            dataCell04_gt41:'일반법인',
            dataCell05_gt41:'',
            dataCell06_gt41:'2019-09-01',
            dataCell07_gt41:'등록완료',
            dataCell08_gt41:'정상',
            dataCell09_gt41:'',
        });
    }

    for(var i= 0; i <= gridTableData41.length; i++)
    $('#gridTable41').jqGrid('addRowData',i + 1, gridTableData41[i]);


    /* 사업실적/재무정보 - 재무정보 관리 - 통합 조회/등록 - 상세 */
    $('#gridTable41-2').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','회계연도','자산','부채','자본금','매출액','매출원가','매출총이익','판관비','영업이익','그외이익','그외비용','당기순이익'],
        colModel:[

            {name:'num41_2',index:'num41_2', width: 45, align: 'center'},
            {name:'dataCell01_gt41_2',index:'dataCell01_gt41_2', width: 200, align: 'center'},
            {name:'dataCell02_gt41_2',index:'dataCell02_gt41_2', width: 180, align: 'center'},
            {name:'dataCell03_gt41_2',index:'dataCell03_gt41_2', width: 120, align: 'center'},
            {name:'dataCell04_gt41_2',index:'dataCell04_gt41_2', width: 120, align: 'center'},
            {name:'dataCell05_gt41_2',index:'dataCell05_gt41_2', width: 150, align: 'center'},
            {name:'dataCell06_gt41_2',index:'dataCell06_gt41_2', width: 100, align: 'center'},
            {name:'dataCell07_gt41_2',index:'dataCell07_gt41_2', width: 100, align: 'center'},
            {name:'dataCell08_gt41_2',index:'dataCell08_gt41_2', width: 100, align: 'center'},
            {name:'dataCell09_gt41_2',index:'dataCell09_gt41_2', width: 120, align: 'center'},
            {name:'dataCell10_gt41_2',index:'dataCell05_gt41_2', width: 120, align: 'center'},
            {name:'dataCell11_gt41_2',index:'dataCell05_gt41_2', width: 120, align: 'center'},
            {name:'dataCell12_gt41_2',index:'dataCell05_gt41_2', width: 120, align: 'center'},
        ],
        hoverrows: false, autowidth:true, shrinkToFit : false, 
        //multiselectWidth: 48,
        //multiselect: true,
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData41_2 = [ 
        {
            num41_2:'1',
            dataCell01_gt41_2:'',
            dataCell02_gt41_2:'',
            dataCell03_gt41_2:'',
            dataCell04_gt41_2:'',
            dataCell05_gt41_2:'',
            dataCell06_gt41_2:'',
            dataCell07_gt41_2:'',
            dataCell08_gt41_2:'',
            dataCell09_gt41_2:'',
            dataCell10_gt41_2:'',
            dataCell11_gt41_2:'',
            dataCell12_gt41_2:'',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData41_2.push({
            num41_2:i+2,
            dataCell01_gt41_2:'',
            dataCell02_gt41_2:'',
            dataCell03_gt41_2:'',
            dataCell04_gt41_2:'',
            dataCell05_gt41_2:'',
            dataCell06_gt41_2:'',
            dataCell07_gt41_2:'',
            dataCell08_gt41_2:'',
            dataCell09_gt41_2:'',
            dataCell10_gt41_2:'',
            dataCell11_gt41_2:'',
            dataCell12_gt41_2:'',
        });
    }

    for(var i= 0; i <= gridTableData41_2.length; i++)
    $('#gridTable41-2').jqGrid('addRowData',i + 1, gridTableData41_2[i]);



  
    /* 사업실적/재무정보 - 재무정보 관리 - 통합 조회/등록 - 상세정보 - 재무정보(DART) 연계 버튼클릭시 재무정보(DART) 연계 조회시 */
    $('#gridTable42').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['법인구분','공시대상회사','종목코드','보고서명','접수번호','제출인','접수번호','비고'],
        colModel:[

            {name:'dataCell01_gt42',index:'dataCell01_gt42', width: 100, align: 'center'},
            {name:'dataCell02_gt42',index:'dataCell02_gt42', width: 120, align: 'center'},
            {name:'dataCell03_gt42',index:'dataCell03_gt42', width: 120, align: 'center'},
            {name:'dataCell04_gt42',index:'dataCell04_gt42', width: 188, align: 'center'},
            {name:'dataCell05_gt42',index:'dataCell05_gt42', width: 120, align: 'center'},
            {name:'dataCell06_gt42',index:'dataCell06_gt42', width: 100, align: 'center'},
            {name:'dataCell07_gt42',index:'dataCell07_gt42', width: 120, align: 'center'},
            {name:'dataCell08_gt42',index:'dataCell08_gt42', width: 140, align: 'center'},
        ],
        hoverrows: false, autowidth:true, shrinkToFit : false, 
        //multiselectWidth: 48,
        //multiselect: true,
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData42 = [ 
        {
            dataCell01_gt42:'',
            dataCell02_gt42:'',
            dataCell03_gt42:'',
            dataCell04_gt42:'',
            dataCell05_gt42:'',
            dataCell06_gt42:'',
            dataCell07_gt42:'',
            dataCell08_gt42:'',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData42.push({
            dataCell01_gt42:'',
            dataCell02_gt42:'',
            dataCell03_gt42:'',
            dataCell04_gt42:'',
            dataCell05_gt42:'',
            dataCell06_gt42:'',
            dataCell07_gt42:'',
            dataCell08_gt42:'',
        });
    }

    for(var i= 0; i <= gridTableData42.length; i++)
    $('#gridTable42').jqGrid('addRowData',i + 1, gridTableData42[i]);


    
    /* 사업실적/재무정보 - 재무정보 관리 - 통합 업로드 - 업로드 정보 */
    $('#gridTable43').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['사업년도','부동산개발업등록번호','업체명','대표자','파일명','상태'],
        colModel:[

            {name:'dataCell01_gt43',index:'dataCell01_gt43', width: 160, align: 'center'},
            {name:'dataCell02_gt43',index:'dataCell02_gt43', width: 360, align: 'center'},
            {name:'dataCell03_gt43',index:'dataCell03_gt43', width: 200, align: 'center'},
            {name:'dataCell04_gt43',index:'dataCell04_gt43', width: 200, align: 'center'},
            {name:'dataCell05_gt43',index:'dataCell05_gt43', width: 498, align: 'center'},
            {name:'dataCell06_gt43',index:'dataCell06_gt43', width: 180, align: 'center'},
        ],
        hoverrows: false, autowidth:true, shrinkToFit : false, 
        //multiselectWidth: 48,
        //multiselect: true,
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData43 = [ 
        {
            dataCell01_gt43:'',
            dataCell02_gt43:'',
            dataCell03_gt43:'',
            dataCell04_gt43:'',
            dataCell05_gt43:'',
            dataCell06_gt43:'',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData43.push({
            dataCell01_gt43:'',
            dataCell02_gt43:'',
            dataCell03_gt43:'',
            dataCell04_gt43:'',
            dataCell05_gt43:'',
            dataCell06_gt43:'',
        });
    }

    for(var i= 0; i <= gridTableData43.length; i++)
    $('#gridTable43').jqGrid('addRowData',i + 1, gridTableData43[i]);

    
    /* 사업실적/재무정보 - 재무정보 관리 - 통합 업로드 - 업로드 정보 조회시 */
    $('#gridTable44').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['일련번호','사업명','인 ·허가명의자','토지','시설','전체','해당연도','전체','해당연도','전체','해당연도','전체','해당연도','참여유형','시공사명','건설업등록번호'],
        colModel:[

            {name:'dataCell01_gt44',index:'dataCell01_gt44', width: 100, align: 'center'},
            {name:'dataCell02_gt44',index:'dataCell02_gt44', width: 160, align: 'center'},
            {name:'dataCell03_gt44',index:'dataCell03_gt44', width: 120, align: 'center'},
            {name:'dataCell04_gt44',index:'dataCell04_gt44', width: 120, align: 'center'},
            {name:'dataCell05_gt44',index:'dataCell05_gt44', width: 120, align: 'center'},
            {name:'dataCell06_gt44',index:'dataCell06_gt44', width: 120, align: 'center'},
            {name:'dataCell07_gt44',index:'dataCell07_gt44', width: 120, align: 'center'},
            {name:'dataCell08_gt44',index:'dataCell08_gt44', width: 120, align: 'center'},
            {name:'dataCell09_gt44',index:'dataCell09_gt44', width: 120, align: 'center'},
            {name:'dataCell10_gt44',index:'dataCell10_gt44', width: 120, align: 'center'},
            {name:'dataCell11_gt44',index:'dataCell11_gt44', width: 120, align: 'center'},
            {name:'dataCell12_gt44',index:'dataCell12_gt44', width: 120, align: 'center'},
            {name:'dataCell13_gt44',index:'dataCell13_gt44', width: 120, align: 'center'},
            {name:'dataCell14_gt44',index:'dataCell14_gt44', width: 120, align: 'center'},
            {name:'dataCell15_gt44',index:'dataCell15_gt44', width: 120, align: 'center'},
            {name:'dataCell16_gt44',index:'dataCell16_gt44', width: 180, align: 'center'},
        ],
        hoverrows: false,autowidth:false, shrinkToFit : false,
        //multiselectWidth: 48,
        //multiselect: true,
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData44 = [ 
        {
            dataCell01_gt44:'',
            dataCell02_gt44:'',
            dataCell03_gt44:'',
            dataCell04_gt44:'',
            dataCell05_gt44:'',
            dataCell06_gt44:'',
            dataCell07_gt44:'',
            dataCell08_gt44:'',
            dataCell09_gt44:'',
            dataCell10_gt44:'',
            dataCell11_gt44:'',
            dataCell12_gt44:'',
            dataCell13_gt44:'',
            dataCell14_gt44:'',
            dataCell15_gt44:'',
            dataCell16_gt44:'',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData44.push({
            dataCell01_gt44:'',
            dataCell02_gt44:'',
            dataCell03_gt44:'',
            dataCell04_gt44:'',
            dataCell05_gt44:'',
            dataCell06_gt44:'',
            dataCell07_gt44:'',
            dataCell08_gt44:'',
            dataCell09_gt44:'',
            dataCell10_gt44:'',
            dataCell11_gt44:'',
            dataCell12_gt44:'',
            dataCell13_gt44:'',
            dataCell14_gt44:'',
            dataCell15_gt44:'',
            dataCell16_gt44:'',
        });
    }

    for(var i= 0; i <= gridTableData44.length; i++)
    $('#gridTable44').jqGrid('addRowData',i + 1, gridTableData44[i]);

    $('#gridTable44').jqGrid('setGroupHeaders', {
        useColSpanStyle: false, 
        groupHeaders:[
            {startColumnName: 'dataCell04_gt44', numberOfColumns: 2, titleText: '개발유형'},
            {startColumnName: 'dataCell06_gt44', numberOfColumns: 4, titleText: '매출액(백만원)'},
            {startColumnName: 'dataCell10_gt44', numberOfColumns: 4, titleText: '사업면적'},
        ]	
    });

    $('#gridTable44').jqGrid('setGroupHeaders', {
        useColSpanStyle: false, 
        groupHeaders:[
            {startColumnName: 'dataCell06_gt44', numberOfColumns: 2, titleText: '분양매출'},
            {startColumnName: 'dataCell08_gt44', numberOfColumns: 2, titleText: '임대매출'},
            {startColumnName: 'dataCell10_gt44', numberOfColumns: 2, titleText: '토지(㎡)'},
            {startColumnName: 'dataCell12_gt44', numberOfColumns: 2, titleText: '시설(㎡)'},
        ]	
    });
   
    /* 사업실적/재무정보 - 사업실적 정보관리 - 통합 조회/등록 조회시 */
    $('#gridTable45').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','등록번호','상호','법인구분','사업년도','사업명','인 ·허가명의자','토지','시설','전체','해당연도','전체','해당연도','전체','해당연도','전체','해당연도','참여유형','시공사명','건설업등록번호'],
        colModel:[
            {name:'num45',index:'num45', width: 45, align: 'center'},
            {name:'dataCell01_gt45',index:'dataCell01_gt45', width: 100, align: 'center'},
            {name:'dataCell02_gt45',index:'dataCell02_gt45', width: 120, align: 'center'},
            {name:'dataCell03_gt45',index:'dataCell03_gt45', width: 120, align: 'center'},
            {name:'dataCell04_gt45',index:'dataCell04_gt45', width: 120, align: 'center'},
            {name:'dataCell05_gt45',index:'dataCell05_gt45', width: 120, align: 'center'},
            {name:'dataCell06_gt45',index:'dataCell06_gt45', width: 120, align: 'center'},
            {name:'dataCell07_gt45',index:'dataCell07_gt45', width: 120, align: 'center'},
            {name:'dataCell08_gt45',index:'dataCell08_gt45', width: 120, align: 'center'},
            {name:'dataCell09_gt45',index:'dataCell09_gt45', width: 120, align: 'center'},
            {name:'dataCell10_gt45',index:'dataCell10_gt45', width: 120, align: 'center'},
            {name:'dataCell11_gt45',index:'dataCell11_gt45', width: 120, align: 'center'},
            {name:'dataCell12_gt45',index:'dataCell12_gt45', width: 120, align: 'center'},
            {name:'dataCell13_gt45',index:'dataCell13_gt45', width: 120, align: 'center'},
            {name:'dataCell14_gt45',index:'dataCell14_gt45', width: 120, align: 'center'},
            {name:'dataCell15_gt45',index:'dataCell15_gt45', width: 120, align: 'center'},
            {name:'dataCell16_gt45',index:'dataCell16_gt45', width: 120, align: 'center'},
            {name:'dataCell17_gt45',index:'dataCell17_gt45', width: 120, align: 'center'},
            {name:'dataCell18_gt45',index:'dataCell18_gt45', width: 120, align: 'center'},
            {name:'dataCell19_gt45',index:'dataCell19_gt45', width: 120, align: 'center'},
        ],
        hoverrows: false,
        //multiselectWidth: 48,
        //multiselect: true,
        autowidth:true, shrinkToFit : false,
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData45 = [ 
        {
            num45:'1',
            dataCell01_gt45:'',
            dataCell02_gt45:'',
            dataCell03_gt45:'',
            dataCell04_gt45:'',
            dataCell05_gt45:'',
            dataCell06_gt45:'',
            dataCell07_gt45:'',
            dataCell08_gt45:'',
            dataCell09_gt45:'',
            dataCell10_gt45:'',
            dataCell11_gt45:'',
            dataCell12_gt45:'',
            dataCell13_gt45:'',
            dataCell14_gt45:'',
            dataCell15_gt45:'',
            dataCell16_gt45:'',
            dataCell17_gt45:'',
            dataCell18_gt45:'',
            dataCell19_gt45:'',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData45.push({
            num45:i+2,
            dataCell01_gt45:'',
            dataCell02_gt45:'',
            dataCell03_gt45:'',
            dataCell04_gt45:'',
            dataCell05_gt45:'',
            dataCell06_gt45:'',
            dataCell07_gt45:'',
            dataCell08_gt45:'',
            dataCell09_gt45:'',
            dataCell10_gt45:'',
            dataCell11_gt45:'',
            dataCell12_gt45:'',
            dataCell13_gt45:'',
            dataCell14_gt45:'',
            dataCell15_gt45:'',
            dataCell16_gt45:'',
            dataCell17_gt45:'',
            dataCell18_gt45:'',
            dataCell19_gt45:'',
        });
    }

    for(var i= 0; i <= gridTableData45.length; i++)
    $('#gridTable45').jqGrid('addRowData',i + 1, gridTableData45[i]);

    $('#gridTable45').jqGrid('setGroupHeaders', {
        useColSpanStyle: false, 
        groupHeaders:[
            {startColumnName: 'dataCell07_gt45', numberOfColumns: 2, titleText: '개발유형'},
            {startColumnName: 'dataCell09_gt45', numberOfColumns: 4, titleText: '매출액(백만원)'},
            {startColumnName: 'dataCell13_gt45', numberOfColumns: 4, titleText: '사업면적'},
        ]	
    });

    $('#gridTable45').jqGrid('setGroupHeaders', {
        useColSpanStyle: false, 
        groupHeaders:[
            {startColumnName: 'dataCell09_gt45', numberOfColumns: 2, titleText: '분양매출'},
            {startColumnName: 'dataCell11_gt45', numberOfColumns: 2, titleText: '임대매출'},
            {startColumnName: 'dataCell13_gt45', numberOfColumns: 2, titleText: '토지(㎡)'},
            {startColumnName: 'dataCell15_gt45', numberOfColumns: 2, titleText: '시설(㎡)'},
        ]	
    });


    
    /* 사업실적/재무정보 - 사업실적 정보관리 - 통합 조회/등록  - 사업실적미제출검색 버튼 클릭시 */
    $('#gridTable46').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','부동산개발업등록번호','상호','법인등록번호','대표자','법인구분','연락처','등록상태','말소일자'],
        colModel:[

            {name:'num46',index:'num46', width: 45, align: 'center'},
            {name:'dataCell01_gt46',index:'dataCell01_gt46', width: 200, align: 'center'},
            {name:'dataCell02_gt46',index:'dataCell02_gt46', width: 200, align: 'center'},
            {name:'dataCell03_gt46',index:'dataCell03_gt46', width: 200, align: 'center'},
            {name:'dataCell04_gt46',index:'dataCell04_gt46', width: 160, align: 'center'},
            {name:'dataCell05_gt46',index:'dataCell05_gt46', width: 160, align: 'center'},
            {name:'dataCell06_gt46',index:'dataCell06_gt46', width: 160, align: 'center'},
            {name:'dataCell07_gt46',index:'dataCell07_gt46', width: 160, align: 'center'},
            {name:'dataCell08_gt46',index:'dataCell08_gt46', width: 160, align: 'center'},
        ],
        hoverrows: false,
        //multiselectWidth: 48,
        //multiselect: true,
        autowidth:true, shrinkToFit : false,
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData46 = [ 
        {
            num46:'1',
            dataCell01_gt46:'',
            dataCell02_gt46:'',
            dataCell03_gt46:'',
            dataCell04_gt46:'',
            dataCell05_gt46:'',
            dataCell06_gt46:'',
            dataCell07_gt46:'',
            dataCell08_gt46:'',
        },
    ];

    for (var i = 0; i < 14; i++) {
        gridTableData46.push({
            num46:i+2,
            dataCell01_gt46:'',
            dataCell02_gt46:'',
            dataCell03_gt46:'',
            dataCell04_gt46:'',
            dataCell05_gt46:'',
            dataCell06_gt46:'',
            dataCell07_gt46:'',
            dataCell08_gt46:'',
        });
    }

    for(var i= 0; i <= gridTableData46.length; i++)
    $('#gridTable46').jqGrid('addRowData',i + 1, gridTableData46[i]);

    
    /* 사업실적/재무정보 - 사업실적 정보관리 - 통합 조회/등록  - 보고현황검색 버튼 클릭시 */
    $('#gridTable47').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','부동산개발업등록번호','상호','법인구분','법인등록번호','자본금','사업연도','사업건수','해당연도'],
        colModel:[

            {name:'num47',index:'num47', width: 45, align: 'center'},
            {name:'dataCell01_gt47',index:'dataCell01_gt47', width: 200, align: 'center'},
            {name:'dataCell02_gt47',index:'dataCell02_gt47', width: 200, align: 'center'},
            {name:'dataCell03_gt47',index:'dataCell03_gt47', width: 160, align: 'center'},
            {name:'dataCell04_gt47',index:'dataCell04_gt47', width: 180, align: 'center'},
            {name:'dataCell05_gt47',index:'dataCell05_gt47', width: 200, align: 'center'},
            {name:'dataCell06_gt47',index:'dataCell06_gt47', width: 160, align: 'center'},
            {name:'dataCell07_gt47',index:'dataCell07_gt47', width: 160, align: 'center'},
            {name:'dataCell08_gt47',index:'dataCell08_gt47', width: 160, align: 'center'},
        ],
        hoverrows: false,
        //multiselectWidth: 48,
        //multiselect: true,
        autowidth:true, shrinkToFit : false,
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData47 = [ 
        {
            num47:'1',
            dataCell01_gt47:'',
            dataCell02_gt47:'',
            dataCell03_gt47:'',
            dataCell04_gt47:'',
            dataCell05_gt47:'',
            dataCell06_gt47:'',
            dataCell07_gt47:'',
            dataCell08_gt47:'',
        },
    ];

    for (var i = 0; i < 14; i++) {
        gridTableData47.push({
            num47:i+2,
            dataCell01_gt47:'',
            dataCell02_gt47:'',
            dataCell03_gt47:'',
            dataCell04_gt47:'',
            dataCell05_gt47:'',
            dataCell06_gt47:'',
            dataCell07_gt47:'',
            dataCell08_gt47:'',
        });
    }

    for(var i= 0; i <= gridTableData47.length; i++)
    $('#gridTable47').jqGrid('addRowData',i + 1, gridTableData47[i]);

    
    /* 사업실적/재무정보 - 사업실적 정보관리 - 통합 조회/등록 - 첨부서류 */
    $('#gridTable48').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['','첨부서류관리번호','첨부서류명','비고','파일크기(Byte)','파일명'],
        colModel:[
            {name:'dataCell01_gt48',index:'dataCell01_gt48', width: 48, align: 'center',},
            {name:'dataCell02_gt48',index:'dataCell02_gt48', width: 300, align: 'center',},
            {name:'dataCell03_gt48',index:'dataCell03_gt48', width: 300, align: 'center',},
            {name:'dataCell04_gt48',index:'dataCell04_gt48', width: 442, align: 'center',},
            {name:'dataCell05_gt48',index:'dataCell05_gt48', width: 200, align: 'center',},
            {name:'dataCell06_gt48',index:'dataCell06_gt48', width: 300, align: 'center',},
        ],
        hoverrows: false,
        // multiselect: true,
        // multiselectWidth: 52,
        autowidth:true, shrinkToFit : false,
        cmTemplate: {
            resizable: true
        }
    });

    var gridTableData48 = [ 
        {
            dataCell01_gt48:'',
            dataCell02_gt48:'',
            dataCell03_gt48:'',
            dataCell04_gt48:'',
            dataCell05_gt48:'',
            dataCell06_gt48:'',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData48.push({
            dataCell01_gt48:'',
            dataCell02_gt48:'',
            dataCell03_gt48:'',
            dataCell04_gt48:'',
            dataCell05_gt48:'',
            dataCell06_gt48:'',
        });
    }

    for(var i= 0; i <= gridTableData48.length; i++)
    $('#gridTable48').jqGrid('addRowData',i + 1, gridTableData48[i]);

    /* 사업실적/재무정보 - 사업실적정보 관리 - 일괄 등록 - 사업벌 요약실적탭 */
    $('#gridTable49').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['일련번호','사업명','인 ·허가명의자','토지','시설','전체','해당연도','전체','해당연도','전체','해당연도','전체','해당연도','참여유형','시공사명','건설업등록번호'],
        colModel:[

            {name:'dataCell01_gt49',index:'dataCell01_gt49', width: 100, align: 'center'},
            {name:'dataCell02_gt49',index:'dataCell02_gt49', width: 160, align: 'center'},
            {name:'dataCell03_gt49',index:'dataCell03_gt49', width: 180, align: 'center'},
            {name:'dataCell04_gt49',index:'dataCell04_gt49', width: 120, align: 'center'},
            {name:'dataCell05_gt49',index:'dataCell05_gt49', width: 120, align: 'center'},
            {name:'dataCell06_gt49',index:'dataCell06_gt49', width: 120, align: 'center'},
            {name:'dataCell07_gt49',index:'dataCell07_gt49', width: 120, align: 'center'},
            {name:'dataCell08_gt49',index:'dataCell08_gt49', width: 120, align: 'center'},
            {name:'dataCell09_gt49',index:'dataCell09_gt49', width: 120, align: 'center'},
            {name:'dataCell10_gt49',index:'dataCell10_gt49', width: 120, align: 'center'},
            {name:'dataCell11_gt49',index:'dataCell11_gt49', width: 120, align: 'center'},
            {name:'dataCell12_gt49',index:'dataCell12_gt49', width: 120, align: 'center'},
            {name:'dataCell13_gt49',index:'dataCell13_gt49', width: 120, align: 'center'},
            {name:'dataCell14_gt49',index:'dataCell14_gt49', width: 120, align: 'center'},
            {name:'dataCell15_gt49',index:'dataCell15_gt49', width: 120, align: 'center'},
            {name:'dataCell16_gt49',index:'dataCell16_gt49', width: 180, align: 'center'},
        ],
        hoverrows: false,autowidth:false, shrinkToFit : false,
        //multiselectWidth: 48,
        //multiselect: true,
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData49 = [ 
        {
            dataCell01_gt49:'',
            dataCell02_gt49:'',
            dataCell03_gt49:'',
            dataCell04_gt49:'',
            dataCell05_gt49:'',
            dataCell06_gt49:'',
            dataCell07_gt49:'',
            dataCell08_gt49:'',
            dataCell09_gt49:'',
            dataCell10_gt49:'',
            dataCell11_gt49:'',
            dataCell12_gt49:'',
            dataCell13_gt49:'',
            dataCell14_gt49:'',
            dataCell15_gt49:'',
            dataCell16_gt49:'',
        },
    ];

    for (var i = 0; i < 14; i++) {
        gridTableData49.push({
            dataCell01_gt49:'',
            dataCell02_gt49:'',
            dataCell03_gt49:'',
            dataCell04_gt49:'',
            dataCell05_gt49:'',
            dataCell06_gt49:'',
            dataCell07_gt49:'',
            dataCell08_gt49:'',
            dataCell09_gt49:'',
            dataCell10_gt49:'',
            dataCell11_gt49:'',
            dataCell12_gt49:'',
            dataCell13_gt49:'',
            dataCell14_gt49:'',
            dataCell15_gt49:'',
            dataCell16_gt49:'',
        });
    }

    for(var i= 0; i <= gridTableData49.length; i++)
    $('#gridTable49').jqGrid('addRowData',i + 1, gridTableData49[i]);

    $('#gridTable49').jqGrid('setGroupHeaders', {
        useColSpanStyle: false, 
        groupHeaders:[
            {startColumnName: 'dataCell04_gt49', numberOfColumns: 2, titleText: '개발유형'},
            {startColumnName: 'dataCell06_gt49', numberOfColumns: 4, titleText: '매출액(백만원)'},
            {startColumnName: 'dataCell10_gt49', numberOfColumns: 4, titleText: '사업면적'},
        ]	
    });

    $('#gridTable49').jqGrid('setGroupHeaders', {
        useColSpanStyle: false, 
        groupHeaders:[
            {startColumnName: 'dataCell06_gt49', numberOfColumns: 2, titleText: '분양매출'},
            {startColumnName: 'dataCell08_gt49', numberOfColumns: 2, titleText: '임대매출'},
            {startColumnName: 'dataCell10_gt49', numberOfColumns: 2, titleText: '토지(㎡)'},
            {startColumnName: 'dataCell12_gt49', numberOfColumns: 2, titleText: '시설(㎡)'},
        ]	
    });

    
    /* 사업실적/재무정보 - 사업실적정보 관리 - 통합업로드 - 업로드 정보 */
    $('#gridTable50').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['사업년도','부동산개발업등록번호','업체명','대표자','파일명','상태'],
        colModel:[

            {name:'dataCell01_gt50',index:'dataCell01_gt50', width: 160, align: 'center'},
            {name:'dataCell02_gt50',index:'dataCell02_gt50', width: 360, align: 'center'},
            {name:'dataCell03_gt50',index:'dataCell03_gt50', width: 200, align: 'center'},
            {name:'dataCell04_gt50',index:'dataCell04_gt50', width: 200, align: 'center'},
            {name:'dataCell05_gt50',index:'dataCell05_gt50', width: 496, align: 'center'},
            {name:'dataCell06_gt50',index:'dataCell06_gt50', width: 180, align: 'center'},
        ],
        hoverrows: false,autowidth:true, shrinkToFit : false, 
        //multiselectWidth: 48,
        //multiselect: true,
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData50 = [ 
        {
            dataCell01_gt50:'',
            dataCell02_gt50:'',
            dataCell03_gt50:'',
            dataCell04_gt50:'',
            dataCell05_gt50:'',
            dataCell06_gt50:'',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData43.push({
            dataCell01_gt50:'',
            dataCell02_gt50:'',
            dataCell03_gt50:'',
            dataCell04_gt50:'',
            dataCell05_gt50:'',
            dataCell06_gt50:'',
        });
    }

    for(var i= 0; i <= gridTableData50.length; i++)
    $('#gridTable50').jqGrid('addRowData',i + 1, gridTableData50[i]);

    

    /* 사업실적/재무정보 - 사업실적정보 관리 - 통합업로드 - 사업벌 요약실적탭 */
    $('#gridTable51').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['일련번호','사업명','인 ·허가명의자','토지','시설','전체','해당연도','전체','해당연도','전체','해당연도','전체','해당연도','참여유형','시공사명','건설업등록번호'],
        colModel:[

            {name:'dataCell01_gt51',index:'dataCell01_gt51', width: 100, align: 'center'},
            {name:'dataCell02_gt51',index:'dataCell02_gt51', width: 160, align: 'center'},
            {name:'dataCell03_gt51',index:'dataCell03_gt51', width: 180, align: 'center'},
            {name:'dataCell04_gt51',index:'dataCell04_gt51', width: 120, align: 'center'},
            {name:'dataCell05_gt51',index:'dataCell05_gt51', width: 120, align: 'center'},
            {name:'dataCell06_gt51',index:'dataCell06_gt51', width: 120, align: 'center'},
            {name:'dataCell07_gt51',index:'dataCell07_gt51', width: 120, align: 'center'},
            {name:'dataCell08_gt51',index:'dataCell08_gt51', width: 120, align: 'center'},
            {name:'dataCell09_gt51',index:'dataCell09_gt51', width: 120, align: 'center'},
            {name:'dataCell10_gt51',index:'dataCell10_gt51', width: 120, align: 'center'},
            {name:'dataCell11_gt51',index:'dataCell11_gt51', width: 120, align: 'center'},
            {name:'dataCell12_gt51',index:'dataCell12_gt51', width: 120, align: 'center'},
            {name:'dataCell13_gt51',index:'dataCell13_gt51', width: 120, align: 'center'},
            {name:'dataCell14_gt51',index:'dataCell14_gt51', width: 120, align: 'center'},
            {name:'dataCell15_gt51',index:'dataCell15_gt51', width: 120, align: 'center'},
            {name:'dataCell16_gt51',index:'dataCell16_gt51', width: 180, align: 'center'},
        ],
        hoverrows: false,autowidth:false, shrinkToFit : false, 
        //multiselectWidth: 48,
        //multiselect: true,
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData51 = [ 
        {
            dataCell01_gt51:'',
            dataCell02_gt51:'',
            dataCell03_gt51:'',
            dataCell04_gt51:'',
            dataCell05_gt51:'',
            dataCell06_gt51:'',
            dataCell07_gt51:'',
            dataCell08_gt51:'',
            dataCell09_gt51:'',
            dataCell10_gt51:'',
            dataCell11_gt51:'',
            dataCell12_gt51:'',
            dataCell13_gt51:'',
            dataCell14_gt51:'',
            dataCell15_gt51:'',
            dataCell16_gt51:'',
        },
    ];

    for (var i = 0; i < 14; i++) {
        gridTableData51.push({
            dataCell01_gt51:'',
            dataCell02_gt51:'',
            dataCell03_gt51:'',
            dataCell04_gt51:'',
            dataCell05_gt51:'',
            dataCell06_gt51:'',
            dataCell07_gt51:'',
            dataCell08_gt51:'',
            dataCell09_gt51:'',
            dataCell10_gt51:'',
            dataCell11_gt51:'',
            dataCell12_gt51:'',
            dataCell13_gt51:'',
            dataCell14_gt51:'',
            dataCell15_gt51:'',
            dataCell16_gt51:'',
        });
    }

    for(var i= 0; i <= gridTableData51.length; i++)
    $('#gridTable51').jqGrid('addRowData',i + 1, gridTableData51[i]);

    $('#gridTable51').jqGrid('setGroupHeaders', {
        useColSpanStyle: false, 
        groupHeaders:[
            {startColumnName: 'dataCell04_gt51', numberOfColumns: 2, titleText: '개발유형'},
            {startColumnName: 'dataCell06_gt51', numberOfColumns: 4, titleText: '매출액(백만원)'},
            {startColumnName: 'dataCell10_gt51', numberOfColumns: 4, titleText: '사업면적'},
        ]	
    });

    $('#gridTable51').jqGrid('setGroupHeaders', {
        useColSpanStyle: false, 
        groupHeaders:[
            {startColumnName: 'dataCell06_gt51', numberOfColumns: 2, titleText: '분양매출'},
            {startColumnName: 'dataCell08_gt51', numberOfColumns: 2, titleText: '임대매출'},
            {startColumnName: 'dataCell10_gt51', numberOfColumns: 2, titleText: '토지(㎡)'},
            {startColumnName: 'dataCell12_gt51', numberOfColumns: 2, titleText: '시설(㎡)'},
        ]	
    });

    
    /* 사업실적/재무정보 - 사업실적정보 관리 - 사업실적보고관리 - 실적보고처리 목록 */
    $('#gridTable52').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['부동산개발업등록번호','상호','민원관리번호','신청일자','신청인','실적년도/건','진행상태','처리구분'],
        colModel:[

            {name:'dataCell01_gt52',index:'dataCell01_gt52', width: 260, align: 'center'},
            {name:'dataCell02_gt52',index:'dataCell02_gt52', width: 260, align: 'center'},
            {name:'dataCell03_gt52',index:'dataCell03_gt52', width: 180, align: 'center'},
            {name:'dataCell04_gt52',index:'dataCell04_gt52', width: 180, align: 'center'},
            {name:'dataCell05_gt52',index:'dataCell05_gt52', width: 180, align: 'center'},
            {name:'dataCell06_gt52',index:'dataCell06_gt52', width: 180, align: 'center'},
            {name:'dataCell07_gt52',index:'dataCell07_gt52', width: 180, align: 'center'},
            {name:'dataCell08_gt52',index:'dataCell08_gt52', width: 176, align: 'center'},
        ],
        hoverrows: false,autowidth:true, shrinkToFit : false, 
        //multiselectWidth: 48,
        //multiselect: true,
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData52 = [ 
        {
            dataCell01_gt52:'',
            dataCell02_gt52:'',
            dataCell03_gt52:'',
            dataCell04_gt52:'',
            dataCell05_gt52:'',
            dataCell06_gt52:'',
            dataCell07_gt52:'',
            dataCell08_gt52:'',
        },
    ];

    for (var i = 0; i < 14; i++) {
        gridTableData52.push({
            dataCell01_gt52:'',
            dataCell02_gt52:'',
            dataCell03_gt52:'',
            dataCell04_gt52:'',
            dataCell05_gt52:'',
            dataCell06_gt52:'',
            dataCell07_gt52:'',
            dataCell08_gt52:'',
        });
    }

    for(var i= 0; i <= gridTableData51.length; i++)
    $('#gridTable52').jqGrid('addRowData',i + 1, gridTableData51[i]);

    
    /* 사업실적/재무정보 - 사업실적정보 관리 - 사업실적보고관리 - 사업실적보고관리 상세 */
    $('#gridTable53').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['일련번호','사업명','인 ·허가명의자','토지','시설','전체','해당연도','전체','해당연도','전체','해당연도','전체','해당연도','참여유형','시공사명'],
        colModel:[

            {name:'dataCell01_gt53',index:'dataCell01_gt53', width: 100, align: 'center'},
            {name:'dataCell02_gt53',index:'dataCell02_gt53', width: 160, align: 'center'},
            {name:'dataCell03_gt53',index:'dataCell03_gt53', width: 180, align: 'center'},
            {name:'dataCell04_gt53',index:'dataCell04_gt53', width: 120, align: 'center'},
            {name:'dataCell05_gt53',index:'dataCell05_gt53', width: 120, align: 'center'},
            {name:'dataCell06_gt53',index:'dataCell06_gt53', width: 120, align: 'center'},
            {name:'dataCell07_gt53',index:'dataCell07_gt53', width: 120, align: 'center'},
            {name:'dataCell08_gt53',index:'dataCell08_gt53', width: 120, align: 'center'},
            {name:'dataCell09_gt53',index:'dataCell09_gt53', width: 120, align: 'center'},
            {name:'dataCell10_gt53',index:'dataCell10_gt53', width: 120, align: 'center'},
            {name:'dataCell11_gt53',index:'dataCell11_gt53', width: 120, align: 'center'},
            {name:'dataCell12_gt53',index:'dataCell12_gt53', width: 120, align: 'center'},
            {name:'dataCell13_gt53',index:'dataCell13_gt53', width: 120, align: 'center'},
            {name:'dataCell14_gt53',index:'dataCell14_gt53', width: 120, align: 'center'},
            {name:'dataCell15_gt53',index:'dataCell15_gt53', width: 120, align: 'center'},
        ],
        hoverrows: false, 
        autowidth:false, shrinkToFit : false, 
        //multiselectWidth: 48,
        //multiselect: true,
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData53 = [ 
        {
            dataCell01_gt53:'',
            dataCell02_gt53:'',
            dataCell03_gt53:'',
            dataCell04_gt53:'',
            dataCell05_gt53:'',
            dataCell06_gt53:'',
            dataCell07_gt53:'',
            dataCell08_gt53:'',
            dataCell09_gt53:'',
            dataCell10_gt53:'',
            dataCell11_gt53:'',
            dataCell12_gt53:'',
            dataCell13_gt53:'',
            dataCell14_gt53:'',
            dataCell15_gt53:'',
        },
    ];

    for (var i = 0; i < 14; i++) {
        gridTableData53.push({
            dataCell01_gt53:'',
            dataCell02_gt53:'',
            dataCell03_gt53:'',
            dataCell04_gt53:'',
            dataCell05_gt53:'',
            dataCell06_gt53:'',
            dataCell07_gt53:'',
            dataCell08_gt53:'',
            dataCell09_gt53:'',
            dataCell10_gt53:'',
            dataCell11_gt53:'',
            dataCell12_gt53:'',
            dataCell13_gt53:'',
            dataCell14_gt53:'',
            dataCell15_gt53:'',
        });
    }

    for(var i= 0; i <= gridTableData51.length; i++)
    $('#gridTable53').jqGrid('addRowData',i + 1, gridTableData51[i]);

    $('#gridTable53').jqGrid('setGroupHeaders', {
        useColSpanStyle: false, 
        groupHeaders:[
            {startColumnName: 'dataCell04_gt53', numberOfColumns: 2, titleText: '개발유형'},
            {startColumnName: 'dataCell06_gt53', numberOfColumns: 4, titleText: '매출액(백만원)'},
            {startColumnName: 'dataCell10_gt53', numberOfColumns: 4, titleText: '사업면적'},
        ]	
    });

    $('#gridTable53').jqGrid('setGroupHeaders', {
        useColSpanStyle: false, 
        groupHeaders:[
            {startColumnName: 'dataCell06_gt53', numberOfColumns: 2, titleText: '분양매출'},
            {startColumnName: 'dataCell08_gt53', numberOfColumns: 2, titleText: '임대매출'},
            {startColumnName: 'dataCell10_gt53', numberOfColumns: 2, titleText: '토지(㎡)'},
            {startColumnName: 'dataCell12_gt53', numberOfColumns: 2, titleText: '시설(㎡)'},
        ]	
    });


    /* 등록관리 - 인력정보관리 - 전문인력(이력)관리 - 연수교육 관리 - 전문인력목록 */
    $('#gridTable54').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','부동산개발업 등록번호','상호','성명','전문인력자격등급','(법인)주민등록번호','전문인력구분','교육이수일자','연수교육일자'],
        colModel:[

            {name:'num54',index:'num54', width: 45, align: 'center'},
            {name:'dataCell01_gt54',index:'dataCell01_gt54', width: 280, align: 'center'},
            {name:'dataCell02_gt54',index:'dataCell02_gt54', width: 260, align: 'center'},
            {name:'dataCell03_gt54',index:'dataCell03_gt54', width: 160, align: 'center'},
            {name:'dataCell04_gt54',index:'dataCell04_gt54', width: 160, align: 'center'},
            {name:'dataCell05_gt54',index:'dataCell05_gt54', width: 180, align: 'center'},
            {name:'dataCell06_gt54',index:'dataCell06_gt54', width: 200, align: 'center'},
            {name:'dataCell07_gt54',index:'dataCell07_gt54', width: 160, align: 'center'},
            {name:'dataCell08_gt54',index:'dataCell08_gt54', width: 160, align: 'center'},
        ],
        hoverrows: false, autowidth:true, shrinkToFit : false, 
        //multiselectWidth: 48,
        //multiselect: true,
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData54 = [ 
        {
            num54:'1',
            dataCell01_gt54:'경북234567',
            dataCell02_gt54:'(주)거성종합건설',
            dataCell03_gt54:'윤창락',
            dataCell04_gt54:'고급',
            dataCell05_gt54:'1111',
            dataCell06_gt54:'건설기술자',
            dataCell07_gt54:'2020-09-17',
            dataCell08_gt54:'2019-09-17',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData54.push({
            num54:i+2,
            dataCell01_gt54:'경북234567',
            dataCell02_gt54:'(주)거성종합건설',
            dataCell03_gt54:'윤창락',
            dataCell04_gt54:'고급',
            dataCell05_gt54:'1111',
            dataCell06_gt54:'건설기술자',
            dataCell07_gt54:'2020-09-17',
            dataCell08_gt54:'2019-09-17',
        });
    }

    for(var i= 0; i <= gridTableData54.length; i++)
    $('#gridTable54').jqGrid('addRowData',i + 1, gridTableData54[i]);


    /* 등록관리 - 인력정보관리 - 전문인력(이력)관리 - 연수교육 관리 - 전문인력목록 - 연수교육대상자 조회 팝업 */
    $('#gridTable55').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','시군구','업체명','대표자','고용구분','사무소 주소','이동전화','사전교육이수일'],
        colModel:[
            {name:'num55',index:'num55', width: 70, align: 'center'},
            {name:'dataCell02_gt55',index:'dataCell02_gt55', width: 120, align: 'center'},
            {name:'dataCell03_gt55',index:'dataCell03_gt55', width: 120, align: 'center'},
            {name:'dataCell04_gt55',index:'dataCell04_gt55', width: 100, align: 'center'},
            {name:'dataCell05_gt55',index:'dataCell05_gt55', width: 120, align: 'center'},
            {name:'dataCell06_gt55',index:'dataCell06_gt55', width: 230, align: 'center'},
            {name:'dataCell07_gt55',index:'dataCell07_gt55', width: 120, align: 'center'},
            {name:'dataCell08_gt55',index:'dataCell08_gt55', width: 120, align: 'center'},
        ],
        hoverrows: false,
        multiselect: true,
        multiselectWidth: 52,
        autowidth:true,
        shrinkToFit : false,
        cmTemplate:{
            resizable: true
        }
    });
    
    var gridTableData55 = [ 
        {
            num55:'1',
            dataCell02_gt55:'서울시 종로구',
            dataCell03_gt55:'종로건설',
            dataCell04_gt55:'윤창락',
            dataCell05_gt55:'',
            dataCell06_gt55:'서울시 종로구 종로',
            dataCell07_gt55:'010-1234-5978',
            dataCell08_gt55:'2020-09-17',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData55.push({
            num55:i+2,
            dataCell02_gt55:'서울시 종로구',
            dataCell03_gt55:'종로건설',
            dataCell04_gt55:'윤창락',
            dataCell05_gt55:'고용',
            dataCell06_gt55:'서울시 종로구 종로',
            dataCell07_gt55:'010-1234-5978',
            dataCell08_gt55:'2020-05-05',
        });
    }

    for(var i= 0; i <= gridTableData55.length; i++)
    $('#gridTable55').jqGrid('addRowData',i + 1, gridTableData55[i]);
    /*---------*/

    /* 등록관리 - 인력정보관리 - 전문인력(이력)관리 - 연수교육 관리 - 전문인력목록 - 연수교육대상자 조회 팝업 - 문자발송내역 */
    $('#gridTable56').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['업무구분명','업무 메시지','작성자','작성일'],
        colModel:[
            //{name:'num55',index:'num55', width: 70, align: 'center'},
            {name:'dataCell02_gt56',index:'dataCell02_gt56', width: 200, align: 'center', editable :true, edittype:'text'},
            {name:'dataCell03_gt56',index:'dataCell03_gt56', width: 530, align: 'center', editable :true, edittype:'text'},
            {name:'dataCell04_gt56',index:'dataCell04_gt56', width: 160, align: 'center', editable :true, edittype:'text'},
            {name:'dataCell05_gt56',index:'dataCell05_gt56', width: 160, align: 'center', editable :true, edittype:'text'},
        ],
        hoverrows: false,
        //multiselect: true,
        //multiselectWidth: 52,
        autowidth:true,
        shrinkToFit : false,
        cmTemplate:{
            resizable: true
        }
    });
    
    var gridTableData56 = [ 
        {
            //num55:'1',
            dataCell02_gt56:'업무보증 설정만료',
            dataCell03_gt56:'귀하께서는 2022.12.31 까지 연수교육을 이수하여야 하며…..',
            dataCell04_gt56:'관리자',
            dataCell05_gt56:'2022-08-01',
        },
    ];

    for (var i = 0; i < 8; i++) {
        gridTableData56.push({
            //num55:i+2,
            dataCell02_gt56:'업무보증 설정만료',
            dataCell03_gt56:'귀하께서는 2022.12.31 까지 연수교육을 이수하여야 하며…..',
            dataCell04_gt56:'관리자',
            dataCell05_gt56:'2022-08-01',
        });
    }

    for(var i= 0; i <= gridTableData56.length; i++)
    $('#gridTable56').jqGrid('addRowData',i + 1, gridTableData56[i]);

    $("#gridTable56").jqGrid('setGridParam', {cellEdit: true}); 
    /*---------*/


    /* 등록관리 - 인력정보관리 - 전문인력(이력)관리 - 연수교육 관리 - 전문인력목록 - 교육수료관리 이력정보 팝업 */
    $('#gridTable57').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['이력구분','구분','소속지역명','성명','주민등록번호','수료일','회차','수료증발급번호'],
        colModel:[

            //{name:'num57',index:'num57', width: 45, align: 'center'},
            {name:'dataCell01_gt57',index:'dataCell01_gt57', width: 100, align: 'center'},
            {name:'dataCell02_gt57',index:'dataCell02_gt57', width: 80, align: 'center'},
            {name:'dataCell03_gt57',index:'dataCell03_gt57', width: 200, align: 'center'},
            {name:'dataCell04_gt57',index:'dataCell04_gt57', width: 80, align: 'center'},
            {name:'dataCell05_gt57',index:'dataCell05_gt57', width: 180, align: 'center'},
            {name:'dataCell06_gt57',index:'dataCell06_gt57', width: 100, align: 'center'},
            {name:'dataCell07_gt57',index:'dataCell07_gt57', width: 90, align: 'center'},
            {name:'dataCell08_gt57',index:'dataCell08_gt57', width: 218, align: 'center'},
        ],
        hoverrows: false, autowidth:true, shrinkToFit : false, 
        //multiselectWidth: 48,
        //multiselect: true,
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData57 = [ 
        {
            //num57:'1',
            dataCell01_gt57:'수정이력',
            dataCell02_gt57:'시도',
            dataCell03_gt57:'부산광역시 수영구',
            dataCell04_gt57:'홍길동',
            dataCell05_gt57:'791001',
            dataCell06_gt57:'2020-09-17',
            dataCell07_gt57:'5',
            dataCell08_gt57:'22-22-02-12345-45678',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData57.push({
            //num57:i+2,
            dataCell01_gt57:'수정이력',
            dataCell02_gt57:'시도',
            dataCell03_gt57:'부산광역시 수영구',
            dataCell04_gt57:'홍길동',
            dataCell05_gt57:'791001',
            dataCell06_gt57:'2020-09-17',
            dataCell07_gt57:'5',
            dataCell08_gt57:'22-22-02-12345-45678',
        });
    }

    for(var i= 0; i <= gridTableData57.length; i++)
    $('#gridTable57').jqGrid('addRowData',i + 1, gridTableData57[i]);


    
    /* 현황/통계 - 현황통계 - 사업실적 현황 */
    $('#gridTable58').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['사업년도','구분','사업건수','사업비(백만원)','분양매출(백만원)','임대매출(백만원)','사업면적(부지)','사업면적(시설)'],
        colModel:[

            //{name:'num58',index:'num58', width: 45, align: 'center'},
            {name:'dataCell01_gt58',index:'dataCell01_gt58', width: 100, align: 'center'},
            {name:'dataCell02_gt58',index:'dataCell02_gt58', width: 380, align: 'center'},
            {name:'dataCell03_gt58',index:'dataCell03_gt58', width: 160, align: 'center'},
            {name:'dataCell04_gt58',index:'dataCell04_gt58', width: 190, align: 'center'},
            {name:'dataCell05_gt58',index:'dataCell05_gt58', width: 190, align: 'center'},
            {name:'dataCell06_gt58',index:'dataCell06_gt58', width: 190, align: 'center'},
            {name:'dataCell07_gt58',index:'dataCell07_gt58', width: 190, align: 'center'},
            {name:'dataCell08_gt58',index:'dataCell08_gt58', width: 190, align: 'center'},
        ],
        hoverrows: false, autowidth:true, shrinkToFit : false, 
        //multiselectWidth: 48,
        //multiselect: true,
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData58 = [ 
        {
            //num58:'1',
            dataCell01_gt58:'총합계',
            dataCell02_gt58:'',
            dataCell03_gt58:'8',
            dataCell04_gt58:'4,082,517',
            dataCell05_gt58:'4,225,397',
            dataCell06_gt58:'4,222,007',
            dataCell07_gt58:'8,764',
            dataCell08_gt58:'918,223',
        },
        {
            //num58:'1',
            dataCell01_gt58:'2018',
            dataCell02_gt58:'소계',
            dataCell03_gt58:'8',
            dataCell04_gt58:'4,082,517',
            dataCell05_gt58:'4,225,397',
            dataCell06_gt58:'4,222,007',
            dataCell07_gt58:'8,764',
            dataCell08_gt58:'918,223',
        },
        {
            //num58:'1',
            dataCell01_gt58:'2018',
            dataCell02_gt58:'일반법인',
            dataCell03_gt58:'7',
            dataCell04_gt58:'4,082,517',
            dataCell05_gt58:'4,225,397',
            dataCell06_gt58:'4,222,007',
            dataCell07_gt58:'8,764',
            dataCell08_gt58:'918,223',
        },
        {
            //num58:'1',
            dataCell01_gt58:'2018',
            dataCell02_gt58:'특수법인',
            dataCell03_gt58:'1',
            dataCell04_gt58:'1,250',
            dataCell05_gt58:'5,000',
            dataCell06_gt58:'1,240',
            dataCell07_gt58:'450',
            dataCell08_gt58:'450',
        },
    ];

/*     for (var i = 0; i < 9; i++) {
        gridTableData58.push({
            //num58:i+2,
            dataCell01_gt58:'2018',
            dataCell02_gt58:'일반법인',
            dataCell03_gt58:'7',
            dataCell04_gt58:'4,082,517',
            dataCell05_gt58:'4,225,397',
            dataCell06_gt58:'4,222,007',
            dataCell07_gt58:'8,764',
            dataCell08_gt58:'918,223',
        });
    } */

    for(var i= 0; i <= gridTableData58.length; i++)
    $('#gridTable58').jqGrid('addRowData',i + 1, gridTableData58[i]);

    /* 현황/통계 - 현황통계 - 사업실적 현황 - 부동산개발업 등록사업자 선택 팝업 */
    $('#gridTable59').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','부동산개발업 등록번호','상호','대표자','법인등록번호','등록상태','처리상태'],
        colModel:[
            {name:'num59',index:'num59', width: 60, align: 'center'},
            {name:'dataCell02_gt59',index:'dataCell02_gt59', width: 186, align: 'center'},
            {name:'dataCell03_gt59',index:'dataCell03_gt59', width: 150, align: 'center'},
            {name:'dataCell04_gt59',index:'dataCell04_gt59', width: 130, align: 'center'},
            {name:'dataCell05_gt59',index:'dataCell05_gt59', width: 152, align: 'center'},
            {name:'dataCell06_gt59',index:'dataCell06_gt59', width: 150, align: 'center'},
            {name:'dataCell07_gt59',index:'dataCell07_gt59', width: 150, align: 'center'},
        ],
        hoverrows: false,
        autowidth:true, 
        shrinkToFit : false, 
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData59 = [ 
        {
            num59:'1',
            dataCell02_gt59:'경북100007',
            dataCell03_gt59:'계림건축사사무소',
            dataCell04_gt59:'서정영',
            dataCell05_gt59:'',
            dataCell06_gt59:'등록완료',
            dataCell07_gt59:'정상',
        },
    ];

    for (var i = 0; i < 10; i++) {
        gridTableData59.push({
            num59:i+2,
            dataCell02_gt59:'경북100007',
            dataCell03_gt59:'계림건축사사무소',
            dataCell04_gt59:'서정영',
            dataCell05_gt59:'',
            dataCell06_gt59:'등록완료',
            dataCell07_gt59:'정상',
        });
    }

    for(var i= 0; i <= gridTableData59.length; i++)
    $('#gridTable59').jqGrid('addRowData',i + 1, gridTableData59[i]);

    /* 기재사항변경관리 - 변경내용 탭 */
    $('#gridTable60').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['변경일','변경구분','변경전내용','변경후내용','변경사유','최초등록일시','최초등록자'],
        colModel:[
            // {name:'num29',index:'num29', width: 45, align: 'center'},
            {name:'dataCell01_gt60',index:'dataCell01_gt60', width: 105, align: 'center'},
            {name:'dataCell02_gt60',index:'dataCell02_gt60', width: 100, align: 'center'},
            {name:'dataCell03_gt60',index:'dataCell03_gt60', width: 300, align: 'center'},
            {name:'dataCell04_gt60',index:'dataCell04_gt60', width: 350, align: 'center'},
            {name:'dataCell05_gt60',index:'dataCell05_gt60', width: 350, align: 'center'},
            {name:'dataCell06_gt60',index:'dataCell06_gt60', width: 200, align: 'center'},
            {name:'dataCell07_gt60',index:'dataCell07_gt60', width: 150, align: 'center'},
        ],
        hoverrows: false,
        autowidth:true, 
        shrinkToFit : false,
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData60 = [ 
        {
            // num29:'1',
            dataCell01_gt60:'',
            dataCell02_gt60:'',
            dataCell03_gt60:'',
            dataCell04_gt60:'',
            dataCell05_gt60:'',
            dataCell06_gt60:'',
            dataCell07_gt60:'',
        },
    ];

    for (var i = 0; i < 1; i++) {
        gridTableData60.push({
            // num29:'',
            dataCell01_gt60:'',
            dataCell02_gt60:'',
            dataCell03_gt60:'',
            dataCell04_gt60:'',
            dataCell05_gt60:'',
            dataCell06_gt60:'',
            dataCell07_gt60:'',
        });
    }

    for(var i= 0; i <= gridTableData60.length; i++)
    $('#gridTable60').jqGrid('addRowData',i + 1, gridTableData60[i]);
    /*/

    /* 기재사항변경관리 - 신고 첨부서류 탭 */
    $('#gridTable61').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','첨부서류 관리번호','첨부서류명','비고','파일크기(Bytes)','파일명'],
        colModel:[
            {name:'num61',index:'num61', width: 60, align: 'center'},
            {name:'dataCell01_gt61',index:'dataCell01_gt61', width: 200, align: 'center'},
            {name:'dataCell02_gt61',index:'dataCell02_gt61', width: 200, align: 'center'},
            {name:'dataCell03_gt61',index:'dataCell03_gt61', width: 500, align: 'center'},
            {name:'dataCell04_gt61',index:'dataCell04_gt61', width: 250, align: 'center'},
            {name:'dataCell05_gt61',index:'dataCell05_gt61', width: 350, align: 'center'},
        ],
        hoverrows: false,
        autowidth: true,
        shrinkToFit: true,
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData61 = [ 
        {
            num61:'1',
            dataCell01_gt61:'16',
            dataCell02_gt61:'',
            dataCell03_gt61:'',
            dataCell04_gt61:'0',
            dataCell05_gt61:'비트맵 이미지 .JPG',
        },
    ];

    for(var i= 0; i <= gridTableData61.length; i++)
    $('#gridTable61').jqGrid('addRowData',i + 1, gridTableData61[i]);
    /*/

    /* 기재사항변경관리 - 자산괸리회사 탭 */
    $('#gridTable62').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['상호명','대표자','전화번호','자산관리회사 소재지'],
        colModel:[
            // {name:'num61',index:'num61', width: 60, align: 'center'},
            {name:'dataCell01_gt62',index:'dataCell01_gt62', width: 300, align: 'center'},
            {name:'dataCell02_gt62',index:'dataCell02_gt62', width: 300, align: 'center'},
            {name:'dataCell03_gt62',index:'dataCell03_gt62', width: 400, align: 'center'},
            {name:'dataCell04_gt62',index:'dataCell04_gt62', width: 570, align: 'center'},
        ],
        hoverrows: false,
        autowidth: true,
        shrinkToFit: true,
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData62 = [ 
        {
            // num61:'1',
            dataCell01_gt62:'',
            dataCell02_gt62:'',
            dataCell03_gt62:'',
            dataCell04_gt62:'',
            dataCell05_gt62:'',
        },
    ];

    for(var i= 0; i <= gridTableData62.length; i++)
    $('#gridTable62').jqGrid('addRowData',i + 1, gridTableData62[i]);
    /*/

    /* 부동산개발업 신청신고 선택 팝업 */
    $('#gridTable63').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['민원관리번호','신청구분','부동산개발업 등록번호','법인등록번호','상호','최초등록 구분','신청일','진행상태철','처리구분'],
        colModel:[
            {name:'dataCell01_gt63',index:'dataCell01_gt63', width: 160, align: 'center'},
            {name:'dataCell02_gt63',index:'dataCell02_gt63', width: 160, align: 'center'},
            {name:'dataCell03_gt63',index:'dataCell03_gt63', width: 160, align: 'center'},
            {name:'dataCell04_gt63',index:'dataCell04_gt63', width: 160, align: 'center'},
            {name:'dataCell05_gt63',index:'dataCell05_gt63', width: 222, align: 'center'},
            {name:'dataCell06_gt63',index:'dataCell06_gt63', width: 160, align: 'center'},
            {name:'dataCell07_gt63',index:'dataCell07_gt63', width: 160, align: 'center'},
            {name:'dataCell08_gt63',index:'dataCell08_gt63', width: 160, align: 'center'},
            {name:'dataCell09_gt63',index:'dataCell09_gt63', width: 160, align: 'center'},
        ],
        hoverrows: false,
        autowidth:true, 
        shrinkToFit : false, 
        cmTemplate: {
            resizable: true
        }
    });

    var gridTableData63 = [ 
        {
            dataCell01_gt63:'2022060900001',
            dataCell02_gt63:'기재사항변경',
            dataCell03_gt63:'경북1910018',
            dataCell04_gt63:'',
            dataCell05_gt63:'191219특수법인',
            dataCell06_gt63:'협회',
            dataCell07_gt63:'2021-06-09',
            dataCell08_gt63:'<span class="cGray">작성</span> <br /> <span>완료</span>',
            dataCell09_gt63:'<span class="cRed">처리중</span>', 
        },
    ];

    for (var i = 0; i < 5; i++) {
        gridTableData63.push({
            dataCell01_gt63:'2022060900001',
            dataCell02_gt63:'기재사항변경',
            dataCell03_gt63:'경북1910018',
            dataCell04_gt63:'',
            dataCell05_gt63:'191219특수법인',
            dataCell06_gt63:'협회',
            dataCell07_gt63:'2021-06-09',
            dataCell08_gt63:'<span class="cGray">작성</span> <br /> <span>완료</span>',
            dataCell09_gt63:'<span class="cRed">처리중</span>', 
        });
    }

    for(var i= 0; i <= gridTableData63.length; i++)
    $('#gridTable63').jqGrid('addRowData',i + 1, gridTableData63[i]);
    /*/

    /* 부동산개발업 등록사업자 선택 팝업 */
    $('#gridTable64').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','부동산개발업 등록번호','상호','대표자','법인등록번호','등록상태','처리상태'],
        colModel:[
            {name:'num64',index:'num64', width: 60, align: 'center'},
            {name:'dataCell02_gt64',index:'dataCell02_gt64', width: 150, align: 'center'},
            {name:'dataCell03_gt64',index:'dataCell03_gt64', width: 150, align: 'center'},
            {name:'dataCell04_gt64',index:'dataCell04_gt64', width: 130, align: 'center'},
            {name:'dataCell05_gt64',index:'dataCell05_gt64', width: 152, align: 'center'},
            {name:'dataCell06_gt64',index:'dataCell06_gt64', width: 150, align: 'center'},
            {name:'dataCell07_gt64',index:'dataCell07_gt64', width: 150, align: 'center'},
        ],
        hoverrows: false,
        autowidth:true, 
        shrinkToFit : false, 
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData64 = [ 
        {
            num64:'1',
            dataCell02_gt64:'경북100007',
            dataCell03_gt64:'계림건축사사무소',
            dataCell04_gt64:'서정영',
            dataCell05_gt64:'',
            dataCell06_gt64:'등록완료',
            dataCell07_gt64:'정상',
        },
    ];

    for (var i = 0; i < 5; i++) {
        gridTableData64.push({
            num64:i+2,
            dataCell02_gt64:'경북100007',
            dataCell03_gt64:'계림건축사사무소',
            dataCell04_gt64:'서정영',
            dataCell05_gt64:'',
            dataCell06_gt64:'등록완료',
            dataCell07_gt64:'정상',
        });
    }

    for(var i= 0; i <= gridTableData64.length; i++)
    $('#gridTable64').jqGrid('addRowData',i + 1, gridTableData64[i]);

    /* 기재사항변경관리 - 사무실변경 */
    $('#gridTable65').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','상태','변경내용구분','영업소재지','구분','소유형태','임대기간','건물용도'],
        colModel:[
            {name:'num65',index:'num65', width: 60, align: 'center'},
            {name:'dataCell02_gt65',index:'dataCell02_gt65', width: 150, align: 'center'},
            {name:'dataCell03_gt65',index:'dataCell03_gt65', width: 150, align: 'center'},
            {name:'dataCell04_gt65',index:'dataCell04_gt65', width: 439, align: 'left'},
            {name:'dataCell05_gt65',index:'dataCell05_gt65', width: 200, align: 'center'},
            {name:'dataCell06_gt65',index:'dataCell06_gt65', width: 200, align: 'center'},
            {name:'dataCell07_gt65',index:'dataCell07_gt65', width: 150, align: 'center'},
            {name:'dataCell08_gt65',index:'dataCell08_gt65', width: 200, align: 'center'},
        ],
        hoverrows: false,
        autowidth:true, 
        shrinkToFit : false, 
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData65 = [ 
        {
            num65:'1',
            dataCell02_gt65:'등록말소',
            dataCell03_gt65:'변경전내용',
            dataCell04_gt65:'경상북도 포항시북구 신흥동 324-342',
            dataCell05_gt65:'주사무소',
            dataCell06_gt65:'자기소유',
            dataCell07_gt65:'-',
            dataCell08_gt65:'제2종근린시설',
        },
    ];

    for (var i = 0; i < 1; i++) {
        gridTableData65.push({
            num65:i+2,
            dataCell02_gt65:'등록말소',
            dataCell03_gt65:'변경후내용',
            dataCell04_gt65:'경상북도 포항시북구 신흥동 324-3421111',
            dataCell05_gt65:'주사무소',
            dataCell06_gt65:'자기소유',
            dataCell07_gt65:'-',
            dataCell08_gt65:'판매시설',
        });
    }

    for(var i= 0; i <= gridTableData65.length; i++)
    $('#gridTable65').jqGrid('addRowData',i + 1, gridTableData65[i]);
    /*/

    /* 기재사항변경관리 - 전화번호 통합관리 팝업 */
    $('#gridTable66').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','구분','전화번호','등록일','수정일'],
        colModel:[
            {name:'num66',index:'num66', width: 60, align: 'center'},
            {name:'dataCell02_gt66',index:'dataCell02_gt66', width: 170, align: 'center'},
            {name:'dataCell03_gt66',index:'dataCell03_gt66', width: 170, align: 'center'},
            {name:'dataCell04_gt66',index:'dataCell04_gt66', width: 170, align: 'center'},
            {name:'dataCell05_gt66',index:'dataCell05_gt66', width: 162, align: 'center'},
        ],
        hoverrows: false,
        autowidth:true, 
        shrinkToFit : false, 
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData66 = [ 
        {
            num66:'1',
            dataCell02_gt66:'대표번호',
            dataCell03_gt66:'02444666',
            dataCell04_gt66:'2022-06-29',
            dataCell05_gt66:'2022-06-29',
        },
    ];

    for (var i = 0; i < 1; i++) {
        gridTableData66.push({
            num66:i+2,
            dataCell02_gt66:'일반전화번호',
            dataCell03_gt66:'0312223333',
            dataCell04_gt66:'2022-06-29',
            dataCell05_gt66:'2022-06-29',
        });
    }

    for(var i= 0; i <= gridTableData66.length; i++)
    $('#gridTable66').jqGrid('addRowData',i + 1, gridTableData66[i]);
    /*/

    /* 기재사항변경관리 - 변경전 사무실사진 팝업 */
    $('#gridTable67').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['파일명','파일사이즈(Bytes)'],
        colModel:[
            // {name:'num66',index:'num66', width: 60, align: 'center'},
            {name:'dataCell02_gt67',index:'dataCell02_gt67', width: 170, align: 'center'},
            {name:'dataCell03_gt67',index:'dataCell03_gt67', width: 170, align: 'center'},
        ],
        hoverrows: false,
        multiselectWidth: 48,
        multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData67 = [ 
        {
            // num67:'1',
            dataCell02_gt67:'',
            dataCell03_gt67:'',
        },
    ];

    for (var i = 0; i < 0; i++) {
        gridTableData67.push({
            // num66:i+2,
            dataCell02_gt67:'',
            dataCell03_gt67:'',
        });
    }

    for(var i= 0; i <= gridTableData67.length; i++)
    $('#gridTable67').jqGrid('addRowData',i + 1, gridTableData67[i]);
    /*/

    /* 기재사항변경관리 - 변경후 사무실사진 팝업 */
    $('#gridTable68').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['파일명','파일사이즈(Bytes)'],
        colModel:[
            {name:'dataCell02_gt68',index:'dataCell02_gt68', width: 170, align: 'center'},
            {name:'dataCell03_gt68',index:'dataCell03_gt68', width: 170, align: 'center'},
        ],
        hoverrows: false,
        multiselectWidth: 48,
        multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData68 = [ 
        {
            dataCell02_gt68:'',
            dataCell03_gt68:'',
        },
    ];

    for (var i = 0; i < 0; i++) {
        gridTableData68.push({            
            dataCell02_gt68:'',
            dataCell03_gt68:'',
        });
    }

    for(var i= 0; i <= gridTableData68.length; i++)
    $('#gridTable68').jqGrid('addRowData',i + 1, gridTableData68[i]);
    /*/

    /* 기재사항변경관리 - 대표자 변경 */
    $('#gridTable69').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','상태','변경내용구분','결격사유','직위','성명','주민번호유형','주민등록번호','구분','입사일','퇴사일','등기일','보고일'],
        colModel:[
            {name:'num69',index:'num69', width: 60, align: 'center'},
            {name:'dataCell02_gt69',index:'dataCell02_gt69', width: 100, align: 'center'},
            {name:'dataCell03_gt69',index:'dataCell03_gt69', width: 170, align: 'center'},
            {name:'dataCell04_gt69',index:'dataCell04_gt69', width: 170, align: 'center'},
            {name:'dataCell05_gt69',index:'dataCell05_gt69', width: 120, align: 'center'},
            {name:'dataCell06_gt69',index:'dataCell06_gt69', width: 100, align: 'center'},
            {name:'dataCell07_gt69',index:'dataCell07_gt69', width: 120, align: 'center'},
            {name:'dataCell08_gt69',index:'dataCell08_gt69', width: 100, align: 'center'},
            {name:'dataCell09_gt69',index:'dataCell09_gt69', width: 120, align: 'center'},
            {name:'dataCell10_gt69',index:'dataCell10_gt69', width: 120, align: 'center'},
            {name:'dataCell11_gt69',index:'dataCell11_gt69', width: 120, align: 'center'},
            {name:'dataCell12_gt69',index:'dataCell12_gt69', width: 110, align: 'center'},
            {name:'dataCell13_gt69',index:'dataCell13_gt69', width: 115, align: 'center'},
        ],
        hoverrows: false,
        autowidth:true, 
        shrinkToFit : false, 
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData69 = [ 
        {
            num69:'1',
            dataCell02_gt69:'정상',
            dataCell03_gt69:'변경전내용',
            dataCell04_gt69:'',
            dataCell05_gt69:'',
            dataCell06_gt69:'김민수',
            dataCell07_gt69:'주민번호',
            dataCell08_gt69:'',
            dataCell09_gt69:'대표이사',
            dataCell10_gt69:'2020.06.25',
            dataCell11_gt69:'2022.06.19',
            dataCell12_gt69:'2022.06.19',
            dataCell13_gt69:'',
        },
    ];

    for (var i = 0; i < 0; i++) {
        gridTableData69.push({            
            num69:i+2,
            dataCell02_gt69:'정상',
            dataCell03_gt69:'변경전내용',
            dataCell04_gt69:'',
            dataCell05_gt69:'',
            dataCell06_gt69:'김민수',
            dataCell07_gt69:'주민번호',
            dataCell08_gt69:'',
            dataCell09_gt69:'대표이사',
            dataCell10_gt69:'2020.06.25',
            dataCell11_gt69:'2022.06.19',
            dataCell12_gt69:'2022.06.19',
            dataCell13_gt69:'',
        });
    }

    for(var i= 0; i <= gridTableData69.length; i++)
    $('#gridTable69').jqGrid('addRowData',i + 1, gridTableData69[i]);
    /*/

    /* 기재사항변경관리 - 대표자 변경 */
    $('#gridTable70').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','영업소 구분','영업소 소재지','전화번호'],
        colModel:[
            {name:'num70',index:'num70', width: 60, align: 'center'},
            {name:'dataCell02_gt70',index:'dataCell02_gt70', width: 510, align: 'center'},
            {name:'dataCell03_gt70',index:'dataCell03_gt70', width: 510, align: 'center'},
            {name:'dataCell04_gt70',index:'dataCell04_gt70', width: 510, align: 'center'},
        ],
        hoverrows: false,
        autowidth:true, 
        shrinkToFit : false,
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData70 = [ 
        {
            num70:'1',
            dataCell02_gt70:'주사무소',
            dataCell03_gt70:'경기도 군포시 산본동 1-1222',
            dataCell04_gt70:'021234567',
        },
    ];

    for (var i = 0; i < 0; i++) {
        gridTableData70.push({            
            num70:i+2,
            dataCell02_gt70:'주사무소',
            dataCell03_gt70:'경기도 군포시 산본동 1-1222',
            dataCell04_gt70:'021234567',
        });
    }

    for(var i= 0; i <= gridTableData70.length; i++)
    $('#gridTable70').jqGrid('addRowData',i + 1, gridTableData70[i]);
    /*/


    /* 민원대행 - 등록요건변경 - 변경내용 */
    $('#gridTable80').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','변경일','변경구분','변경전내용','변경후내용','변경사유','최초등록일시','최초등록자'],
        colModel:[
            {name:'num80',index:'num80', width: 70, align: 'center'},
            {name:'dataCell02_gt80',index:'dataCell02_gt80', width: 145, align: 'center'},
            {name:'dataCell03_gt80',index:'dataCell03_gt80', width: 250, align: 'center'},
            {name:'dataCell04_gt80',index:'dataCell04_gt80', width: 240, align: 'center'},
            {name:'dataCell05_gt80',index:'dataCell05_gt80', width: 245, align: 'center'},
            {name:'dataCell06_gt80',index:'dataCell06_gt80', width: 250, align: 'center'},
            {name:'dataCell07_gt80',index:'dataCell07_gt80', width: 180, align: 'center'},
            {name:'dataCell08_gt80',index:'dataCell08_gt80', width: 210, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData80 = [ 
        {
            num80:'1',
            dataCell02_gt80:'2022-06-29',
            dataCell03_gt80:'등록요건_자본금변경',
            dataCell04_gt80:'2,100,000 천원',
            dataCell05_gt80:'4,100,000 천원',
            dataCell06_gt80:'등록요건변경',
            dataCell07_gt80:'2022-12-31 19:19:45',
            dataCell08_gt80:'부동산개발업_협회99',
        },
    ];

    for (var i = 0; i < 5; i++) {
        gridTableData80.push({
            num80:i+2,
            dataCell02_gt80:'2022-06-29',
            dataCell03_gt80:'등록요건_자본금변경',
            dataCell04_gt80:'2,100,000 천원',
            dataCell05_gt80:'4,100,000 천원',
            dataCell06_gt80:'등록요건변경',
            dataCell07_gt80:'2022-12-31 19:19:45',
            dataCell08_gt80:'부동산개발업_협회99',
        });
    }

    for(var i= 0; i <= gridTableData80.length; i++)
    $('#gridTable80').jqGrid('addRowData',i + 1, gridTableData80[i]);


     /* 민원대행 - 등록요건변경 - 임원변경 */
     $('#gridTable81').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','상태','변경내용구분','결격사유','직위','성명','주민등록유형','주민등록번호','구분','입사일','퇴사일','등기일','보고일'],
        colModel:[
            {name:'num81',index:'num81', width: 70, align: 'center'},
            {name:'dataCell02_gt81',index:'dataCell02_gt81', width: 100, align: 'center'},
            {name:'dataCell03_gt81',index:'dataCell03_gt81', width: 165, align: 'center'},
            {name:'dataCell04_gt81',index:'dataCell04_gt81', width: 155, align: 'center'},
            {name:'dataCell05_gt81',index:'dataCell05_gt81', width: 120, align: 'center'},
            {name:'dataCell06_gt81',index:'dataCell06_gt81', width: 150, align: 'center'},
            {name:'dataCell07_gt81',index:'dataCell07_gt81', width: 150, align: 'center'},
            {name:'dataCell08_gt81',index:'dataCell08_gt81', width: 180, align: 'center'},
            {name:'dataCell09_gt81',index:'dataCell09_gt81', width: 100, align: 'center'},
            {name:'dataCell10_gt81',index:'dataCell10_gt81', width: 100, align: 'center'},
            {name:'dataCell11_gt81',index:'dataCell11_gt81', width: 100, align: 'center'},
            {name:'dataCell12_gt81',index:'dataCell12_gt81', width: 100, align: 'center'},
            {name:'dataCell13_gt81',index:'dataCell13_gt81', width: 100, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData81 = [ 
        {
            num81:'1',
            dataCell02_gt81:'정상',
            dataCell03_gt81:'변경전내용',
            dataCell04_gt81:'사유',
            dataCell05_gt81:'전무',
            dataCell06_gt81:'홍길동',
            dataCell07_gt81:'주민번호',
            dataCell08_gt81:'123456-1234567',
            dataCell09_gt81:'이사',
            dataCell10_gt81:'2022-12-31',
            dataCell11_gt81:'2022-12-31',
            dataCell12_gt81:'2022-12-31',
            dataCell13_gt81:'2022-12-31',
        },
    ];

    for (var i = 0; i < 5; i++) {
        gridTableData81.push({
            num81:i+2,
            dataCell02_gt81:'정상',
            dataCell03_gt81:'변경전내용',
            dataCell04_gt81:'사유',
            dataCell05_gt81:'전무',
            dataCell06_gt81:'홍길동',
            dataCell07_gt81:'주민번호',
            dataCell08_gt81:'123456-1234567',
            dataCell09_gt81:'이사',
            dataCell10_gt81:'2022-12-31',
            dataCell11_gt81:'2022-12-31',
            dataCell12_gt81:'2022-12-31',
            dataCell13_gt81:'2022-12-31',
        });
    }

    for(var i= 0; i <= gridTableData81.length; i++)
    $('#gridTable81').jqGrid('addRowData',i + 1, gridTableData81[i]);


     /* 민원대행 - 등록요건변경 - 전문인력변경 */
     $('#gridTable82').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','상태','변경내용구분','성명','주민등록번호','전문인력구분','자격등급','업 종사 시작일','퇴사일','자격증','교육이수'],
        colModel:[
            {name:'num82',index:'num82', width: 70, align: 'center'},
            {name:'dataCell02_gt82',index:'dataCell02_gt82', width: 120, align: 'center'},
            {name:'dataCell03_gt82',index:'dataCell03_gt82', width: 195, align: 'center'},
            {name:'dataCell04_gt82',index:'dataCell04_gt82', width: 155, align: 'center'},
            {name:'dataCell05_gt82',index:'dataCell05_gt82', width: 155, align: 'center'},
            {name:'dataCell06_gt82',index:'dataCell06_gt82', width: 220, align: 'center'},
            {name:'dataCell07_gt82',index:'dataCell07_gt82', width: 145, align: 'center'},
            {name:'dataCell08_gt82',index:'dataCell08_gt82', width: 145, align: 'center'},
            {name:'dataCell09_gt82',index:'dataCell09_gt82', width: 145, align: 'center'},
            {name:'dataCell10_gt82',index:'dataCell10_gt82', width: 120, align: 'center'},
            {name:'dataCell11_gt82',index:'dataCell11_gt82', width: 120, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData82 = [ 
        {
            num82:'1',
            dataCell02_gt82:'정상',
            dataCell03_gt82:'변경후내용',
            dataCell04_gt82:'홍길동',
            dataCell05_gt82:'123456-1234567',
            dataCell06_gt82:'공인중개사',
            dataCell07_gt82:'중급',
            dataCell08_gt82:'2022-12-31',
            dataCell09_gt82:'2022-12-31',
            dataCell10_gt82:'0',
            dataCell11_gt82:'0',
        },
    ];

    for (var i = 0; i < 5; i++) {
        gridTableData82.push({
            num82:i+2,
            dataCell02_gt82:'정상',
            dataCell03_gt82:'변경후내용',
            dataCell04_gt82:'홍길동',
            dataCell05_gt82:'123456-1234567',
            dataCell06_gt82:'공인중개사',
            dataCell07_gt82:'중급',
            dataCell08_gt82:'2022-12-31',
            dataCell09_gt82:'2022-12-31',
            dataCell10_gt82:'0',
            dataCell11_gt82:'0',
        });
    }

    for(var i= 0; i <= gridTableData82.length; i++)
    $('#gridTable82').jqGrid('addRowData',i + 1, gridTableData82[i]);


    /* 민원대행 - 등록요건변경 - 자본금변경 */
    $('#gridTable83').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','변경일','변경구분','변경전내용','변경후내용','변경사유','최초등록일시','최초등록자'],
        colModel:[
            {name:'num83',index:'num83', width: 70, align: 'center'},
            {name:'dataCell02_gt83',index:'dataCell02_gt83', width: 120, align: 'center'},
            {name:'dataCell03_gt83',index:'dataCell03_gt83', width: 250, align: 'center'},
            {name:'dataCell04_gt83',index:'dataCell04_gt83', width: 230, align: 'center'},
            {name:'dataCell05_gt83',index:'dataCell05_gt83', width: 240, align: 'center'},
            {name:'dataCell06_gt83',index:'dataCell06_gt83', width: 250, align: 'center'},
            {name:'dataCell07_gt83',index:'dataCell07_gt83', width: 215, align: 'center'},
            {name:'dataCell08_gt83',index:'dataCell08_gt83', width: 215, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData83 = [ 
        {
            num83:'1',
            dataCell02_gt83:'2022-12-31',
            dataCell03_gt83:'등록요건_자본금변경',
            dataCell04_gt83:'2,500,000 천원',
            dataCell05_gt83:'5,500,000 천원',
            dataCell06_gt83:'등록요건변경',
            dataCell07_gt83:'2022-12-31 12:12:12',
            dataCell08_gt83:'부동산개발협회99',
        },
    ];

    for (var i = 0; i < 5; i++) {
        gridTableData83.push({
            num83:i+2,
            dataCell02_gt83:'2022-12-31',
            dataCell03_gt83:'등록요건_자본금변경',
            dataCell04_gt83:'2,500,000 천원',
            dataCell05_gt83:'5,500,000 천원',
            dataCell06_gt83:'등록요건변경',
            dataCell07_gt83:'2022-12-31 12:12:12',
            dataCell08_gt83:'부동산개발협회99',
        });
    }

    for(var i= 0; i <= gridTableData83.length; i++)
    $('#gridTable83').jqGrid('addRowData',i + 1, gridTableData83[i]);


    /* 민원대행 - 등록요건변경 - (신고)사무실 */
    $('#gridTable84').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['영업소구분','영업소소재지','전화번호'],
        colModel:[
            // {name:'num83',index:'num83', width: 70, align: 'center'},
            {name:'dataCell01_gt84',index:'dataCell01_gt84', width: 365, align: 'center'},
            {name:'dataCell02_gt84',index:'dataCell02_gt84', width: 960, align: 'center'},
            {name:'dataCell03_gt84',index:'dataCell03_gt84', width: 265, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData84 = [ 
        {
            // num83:'1',
            dataCell01_gt84:'영업소구분내용',
            dataCell02_gt84:'서울시 강남구 청담동 빌딩',
            dataCell03_gt84:'02-123-124',
        },
    ];

    for (var i = 0; i < 5; i++) {
        gridTableData84.push({
            // num83:i+2,
            dataCell01_gt84:'영업소구분내용',
            dataCell02_gt84:'서울시 강남구 청담동 빌딩',
            dataCell03_gt84:'02-123-124',
        });
    }

    for(var i= 0; i <= gridTableData84.length; i++)
    $('#gridTable84').jqGrid('addRowData',i + 1, gridTableData84[i]);


    /* 민원대행 - 등록요건변경 - (신고)첨부서류 */
    $('#gridTable85').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','첨부서류 관리번호','첨부서류명','비고','파일크기(Bytes)','파일명'],
        colModel:[
            {name:'num85',index:'num85', width: 70, align: 'center'},
            {name:'dataCell02_gt85',index:'dataCell02_gt85', width: 220, align: 'center'},
            {name:'dataCell03_gt85',index:'dataCell03_gt85', width: 410, align: 'center'},
            {name:'dataCell04_gt85',index:'dataCell04_gt85', width: 410, align: 'center'},
            {name:'dataCell05_gt85',index:'dataCell05_gt85', width: 180, align: 'center'},
            {name:'dataCell06_gt85',index:'dataCell06_gt85', width: 300, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData85 = [ 
        {
            num85:'1',
            dataCell02_gt85:'100-1000-10023',
            dataCell03_gt85:'첨부서류이름',
            dataCell04_gt85:'비고내용',
            dataCell05_gt85:'4,574',
            dataCell06_gt85:'xls',
        },
    ];

    for (var i = 0; i < 5; i++) {
        gridTableData85.push({
            num85:i+2,
            dataCell02_gt85:'100-1000-10023',
            dataCell03_gt85:'첨부서류이름',
            dataCell04_gt85:'비고내용',
            dataCell05_gt85:'4,574',
            dataCell06_gt85:'xls',
        });
    }

    for(var i= 0; i <= gridTableData85.length; i++)
    $('#gridTable85').jqGrid('addRowData',i + 1, gridTableData85[i]);


    /* 민원대행 - 등록요건변경 - 기존임원변경 */
    $('#gridTable86').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','상태','직위','성명','주민등록유형','주민등록번호','임원구분','등기일','입사일','퇴임일','보고일'],
        colModel:[
            {name:'num86',index:'num86', width: 70, align: 'center'},
            {name:'dataCell02_gt86',index:'dataCell02_gt86', width: 100, align: 'center'},
            {name:'dataCell03_gt86',index:'dataCell03_gt86', width: 165, align: 'center'},
            {name:'dataCell04_gt86',index:'dataCell04_gt86', width: 205, align: 'center'},
            {name:'dataCell05_gt86',index:'dataCell05_gt86', width: 205, align: 'center'},
            {name:'dataCell06_gt86',index:'dataCell06_gt86', width: 205, align: 'center'},
            {name:'dataCell07_gt86',index:'dataCell07_gt86', width: 200, align: 'center'},
            {name:'dataCell08_gt86',index:'dataCell08_gt86', width: 110, align: 'center'},
            {name:'dataCell09_gt86',index:'dataCell09_gt86', width: 110, align: 'center'},
            {name:'dataCell10_gt86',index:'dataCell10_gt86', width: 110, align: 'center'},
            {name:'dataCell11_gt86',index:'dataCell11_gt86', width: 110, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData86 = [ 
        {
            num86:'1',
            dataCell02_gt86:'정상',
            dataCell03_gt86:'전무',
            dataCell04_gt86:'홍길동',
            dataCell05_gt86:'주민번호',
            dataCell06_gt86:'123456-1234567',
            dataCell07_gt86:'대표이사',
            dataCell08_gt86:'2022-12-31',
            dataCell09_gt86:'2022-12-31',
            dataCell10_gt86:'2022-12-31',
            dataCell11_gt86:'2022-12-31',
        },
    ];

    for (var i = 0; i < 5; i++) {
        gridTableData86.push({
            num86:i+2,
            dataCell02_gt86:'정상',
            dataCell03_gt86:'전무',
            dataCell04_gt86:'홍길동',
            dataCell05_gt86:'주민번호',
            dataCell06_gt86:'123456-1234567',
            dataCell07_gt86:'대표이사',
            dataCell08_gt86:'2022-12-31',
            dataCell09_gt86:'2022-12-31',
            dataCell10_gt86:'2022-12-31',
            dataCell11_gt86:'2022-12-31',
        });
    }

    for(var i= 0; i <= gridTableData86.length; i++)
    $('#gridTable86').jqGrid('addRowData',i + 1, gridTableData86[i]);


    /* 민원대행 - 등록요건변경 - 기존자산관리회사변경 */
    $('#gridTable87').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','상호','대표자','전화번호','소재지'],
        colModel:[
            {name:'num87',index:'num87', width: 70, align: 'center'},
            {name:'dataCell02_gt87',index:'dataCell02_gt87', width: 220, align: 'center'},
            {name:'dataCell03_gt87',index:'dataCell03_gt87', width: 175, align: 'center'},
            {name:'dataCell04_gt87',index:'dataCell04_gt87', width: 200, align: 'center'},
            {name:'dataCell05_gt87',index:'dataCell05_gt87', width: 925, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData87 = [ 
        {
            num87:'1',
            dataCell02_gt87:'카일자산운용(주)',
            dataCell03_gt87:'홍길동',
            dataCell04_gt87:'02-123-1234',
            dataCell05_gt87:'서울특별시 강남구 테헤란로 108 22023',
        },
    ];

    for (var i = 0; i < 5; i++) {
        gridTableData87.push({
            num87:i+2,
            dataCell02_gt87:'카일자산운용(주)',
            dataCell03_gt87:'홍길동',
            dataCell04_gt87:'02-123-1234',
            dataCell05_gt87:'서울특별시 강남구 테헤란로 108 22023',
        });
    }

    for(var i= 0; i <= gridTableData87.length; i++)
    $('#gridTable87').jqGrid('addRowData',i + 1, gridTableData87[i]);


    /* 민원대행 - 등록요건변경 - 기존전문인력변경 */
    $('#gridTable88').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','상태','변경내용구분','성명','주민등록번호','전문인력구분','자격등급','업 종사 시작일','퇴사일','자격증','교육이수','소속자산관리회사'],
        colModel:[
            {name:'num88',index:'num88', width: 70, align: 'center'},
            {name:'dataCell02_gt88',index:'dataCell02_gt88', width: 100, align: 'center'},
            {name:'dataCell03_gt88',index:'dataCell03_gt88', width: 170, align: 'center'},
            {name:'dataCell04_gt88',index:'dataCell04_gt88', width: 150, align: 'center'},
            {name:'dataCell05_gt88',index:'dataCell05_gt88', width: 150, align: 'center'},
            {name:'dataCell06_gt88',index:'dataCell06_gt88', width: 200, align: 'center'},
            {name:'dataCell07_gt88',index:'dataCell07_gt88', width: 150, align: 'center'},
            {name:'dataCell08_gt88',index:'dataCell08_gt88', width: 100, align: 'center'},
            {name:'dataCell09_gt88',index:'dataCell09_gt88', width: 100, align: 'center'},
            {name:'dataCell10_gt88',index:'dataCell10_gt88', width: 100, align: 'center'},
            {name:'dataCell11_gt88',index:'dataCell11_gt88', width: 100, align: 'center'},
            {name:'dataCell12_gt88',index:'dataCell12_gt88', width: 200, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData88 = [ 
        {
            num88:'1',
            dataCell02_gt88:'정상',
            dataCell03_gt88:'등록완료',
            dataCell04_gt88:'카일전문',
            dataCell05_gt88:'123456-1234567',
            dataCell06_gt88:'감정평가사',
            dataCell07_gt88:'해당없음',
            dataCell08_gt88:'2022-12-31',
            dataCell09_gt88:'2022-12-31',
            dataCell10_gt88:'0',
            dataCell11_gt88:'1',
            dataCell12_gt88:'카일자산운용(주)',
        },
    ];

    for (var i = 0; i < 5; i++) {
        gridTableData88.push({
            num88:i+2,
            dataCell02_gt88:'정상',
            dataCell03_gt88:'등록완료',
            dataCell04_gt88:'카일전문',
            dataCell05_gt88:'123456-1234567',
            dataCell06_gt88:'감정평가사',
            dataCell07_gt88:'해당없음',
            dataCell08_gt88:'2022-12-31',
            dataCell09_gt88:'2022-12-31',
            dataCell10_gt88:'0',
            dataCell11_gt88:'1',
            dataCell12_gt88:'카일자산운용(주)',
        });
    }

    for(var i= 0; i <= gridTableData88.length; i++)
    $('#gridTable88').jqGrid('addRowData',i + 1, gridTableData88[i]);


    /* 민원대행 - 등록요건변경 - 자산관리회사 조회 팝업 */
    $('#gridTable89').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','사업자등록번호','회사명','대표자','소재지'],
        colModel:[
            {name:'num89',index:'num89', width: 70, align: 'center'},
            {name:'dataCell02_gt89',index:'dataCell02_gt89', width: 150, align: 'center'},
            {name:'dataCell03_gt89',index:'dataCell03_gt89', width: 150, align: 'center'},
            {name:'dataCell04_gt89',index:'dataCell04_gt89', width: 120, align: 'center'},
            {name:'dataCell05_gt89',index:'dataCell05_gt89', width: 518, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData89 = [ 
        {
            num89:'1',
            dataCell02_gt89:'110-414-453258',
            dataCell03_gt89:'카밀자산운용(주)',
            dataCell04_gt89:'홍길동',
            dataCell05_gt89:'서울특별시 서초구 반포대로 39길64-5, 2202',
        },
    ];

    for (var i = 0; i < 5; i++) {
        gridTableData89.push({
            num89:i+2,
            dataCell02_gt89:'110-414-453258',
            dataCell03_gt89:'카밀자산운용(주)',
            dataCell04_gt89:'홍길동',
            dataCell05_gt89:'서울특별시 서초구 반포대로 39길64-5, 2202',
        });
    }

    for(var i= 0; i <= gridTableData89.length; i++)
    $('#gridTable89').jqGrid('addRowData',i + 1, gridTableData89[i]);


    /* 민원대행 - 등록요건변경 - 자산관리회사 상세 팝업 */
    $('#gridTable90').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','특수목적법인 상호','대표자','전화번호','계약기간','영업소 소재지'],
        colModel:[
            {name:'num90',index:'num90', width: 70, align: 'center'},
            {name:'dataCell02_gt90',index:'dataCell02_gt90', width: 186, align: 'center'},
            {name:'dataCell03_gt90',index:'dataCell03_gt90', width: 120, align: 'center'},
            {name:'dataCell04_gt90',index:'dataCell04_gt90', width: 120, align: 'center'},
            {name:'dataCell05_gt90',index:'dataCell05_gt90', width: 180, align: 'center'},
            {name:'dataCell06_gt90',index:'dataCell06_gt90', width: 324, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData90 = [ 
        {
            num90:'1',
            dataCell02_gt90:'KLIS부동산개발업체',
            dataCell03_gt90:'카밀자산',
            dataCell04_gt90:'02-123-1234',
            dataCell05_gt90:'2022-12-31 ~ 2022-13-31',
            dataCell06_gt90:'경상북도 경산시 강변서로 111, 101',
        },
    ];

    for (var i = 0; i < 5; i++) {
        gridTableData90.push({
            num90:i+2,
            dataCell02_gt90:'KLIS부동산개발업체',
            dataCell03_gt90:'카밀자산',
            dataCell04_gt90:'02-123-1234',
            dataCell05_gt90:'2022-12-31 ~ 2022-13-31',
            dataCell06_gt90:'경상북도 경산시 강변서로 111, 101',
        });
    }

    for(var i= 0; i <= gridTableData90.length; i++)
    $('#gridTable90').jqGrid('addRowData',i + 1, gridTableData90[i]);


    /* 민원대행 - 등록요건변경 - 전문인력정보 팝업 - 교육 */
    $('#gridTable91').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['교육기관명','교육기간','발급번호','수료일자','기관대표명','기관전화','기관주소'],
        colModel:[
            // {name:'num90',index:'num90', width: 70, align: 'center'},
            {name:'dataCell01_gt91',index:'dataCell01_gt91', width: 150, align: 'center'},
            {name:'dataCell02_gt91',index:'dataCell02_gt91', width: 180, align: 'center'},
            {name:'dataCell03_gt91',index:'dataCell03_gt91', width: 120, align: 'center'},
            {name:'dataCell04_gt91',index:'dataCell04_gt91', width: 100, align: 'center'},
            {name:'dataCell05_gt91',index:'dataCell05_gt91', width: 120, align: 'center'},
            {name:'dataCell06_gt91',index:'dataCell06_gt91', width: 130, align: 'center'},
            {name:'dataCell07_gt91',index:'dataCell07_gt91', width: 300, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData91 = [ 
        {
            // num90:'1',
            dataCell01_gt91:'OOO교육기관',
            dataCell02_gt91:'2022-12-31 ~ 2022-12-31',
            dataCell03_gt91:'1100015324',
            dataCell04_gt91:'2022-12-31',
            dataCell05_gt91:'홍길동',
            dataCell06_gt91:'02-123-4567',
            dataCell07_gt91:'경상북도 경산시 강변서로 111, 101',
        },
    ];

    for (var i = 0; i < 5; i++) {
        gridTableData91.push({
            // num90:i+2,
            dataCell01_gt91:'OOO교육기관',
            dataCell02_gt91:'2022-12-31 ~ 2022-12-31',
            dataCell03_gt91:'1100015324',
            dataCell04_gt91:'2022-12-31',
            dataCell05_gt91:'홍길동',
            dataCell06_gt91:'02-123-4567',
            dataCell07_gt91:'경상북도 경산시 강변서로 111, 101',
        });
    }

    for(var i= 0; i <= gridTableData91.length; i++)
    $('#gridTable91').jqGrid('addRowData',i + 1, gridTableData91[i]);


    /* 민원대행 - 등록요건변경 - 전문인력정보 팝업 - 자격증 */
    $('#gridTable92').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['자격증명','발행기관','자격증구분','발급번호','발급일자'],
        colModel:[
            // {name:'num90',index:'num90', width: 70, align: 'center'},
            {name:'dataCell01_gt92',index:'dataCell01_gt92', width: 220, align: 'center'},
            {name:'dataCell02_gt92',index:'dataCell02_gt92', width: 220, align: 'center'},
            {name:'dataCell03_gt92',index:'dataCell03_gt92', width: 215, align: 'center'},
            {name:'dataCell04_gt92',index:'dataCell04_gt92', width: 200, align: 'center'},
            {name:'dataCell05_gt92',index:'dataCell05_gt92', width: 145, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData92 = [ 
        {
            // num90:'1',
            dataCell01_gt92:'공인중개사합격',
            dataCell02_gt92:'한국생산성본부',
            dataCell03_gt92:'자격구분명은뭘까',
            dataCell04_gt92:'10005482015',
            dataCell05_gt92:'2022-12-31',
        },
    ];

    for (var i = 0; i < 5; i++) {
        gridTableData92.push({
            // num90:i+2,
            dataCell01_gt92:'공인중개사합격',
            dataCell02_gt92:'한국생산성본부',
            dataCell03_gt92:'자격구분명은뭘까',
            dataCell04_gt92:'10005482015',
            dataCell05_gt92:'2022-12-31',
        });
    }

    for(var i= 0; i <= gridTableData92.length; i++)
    $('#gridTable92').jqGrid('addRowData',i + 1, gridTableData92[i]);


    /* 민원대행 - 등록요건변경 - 전문인력정보 팝업 - 경력 */
    $('#gridTable93').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['회사명','근무기간','경력내용'],
        colModel:[
            // {name:'num90',index:'num90', width: 70, align: 'center'},
            {name:'dataCell01_gt93',index:'dataCell01_gt93', width: 285, align: 'center'},
            {name:'dataCell02_gt93',index:'dataCell02_gt93', width: 200, align: 'center'},
            {name:'dataCell03_gt93',index:'dataCell03_gt93', width: 515, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData93 = [ 
        {
            // num90:'1',
            dataCell01_gt93:'(주)대한민국회사명',
            dataCell02_gt93:'2022-12-31 ~ 2022-12-31',
            dataCell03_gt93:'주요경력내용이 기입, 출력되는 부분',
        },
    ];

    for (var i = 0; i < 5; i++) {
        gridTableData93.push({
            // num90:i+2,
            dataCell01_gt93:'(주)대한민국회사명',
            dataCell02_gt93:'2022-12-31 ~ 2022-12-31',
            dataCell03_gt93:'주요경력내용이 기입, 출력되는 부분',
        });
    }

    for(var i= 0; i <= gridTableData93.length; i++)
    $('#gridTable93').jqGrid('addRowData',i + 1, gridTableData93[i]);


    /* 민원대행 - 등록요건변경 - 자산관리회사 상세 팝업 */
    $('#gridTable94').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','특수목적법인 상호','대표자','전화번호','계약기간','영업소 소재지'],
        colModel:[
            {name:'num94',index:'num94', width: 70, align: 'center'},
            {name:'dataCell02_gt94',index:'dataCell02_gt94', width: 186, align: 'center'},
            {name:'dataCell03_gt94',index:'dataCell03_gt94', width: 120, align: 'center'},
            {name:'dataCell04_gt94',index:'dataCell04_gt94', width: 120, align: 'center'},
            {name:'dataCell05_gt94',index:'dataCell05_gt94', width: 180, align: 'center'},
            {name:'dataCell06_gt94',index:'dataCell06_gt94', width: 324, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData94 = [ 
        {
            num94:'1',
            dataCell02_gt94:'KLIS부동산개발업체',
            dataCell03_gt94:'카밀자산',
            dataCell04_gt94:'02-123-1234',
            dataCell05_gt94:'2022-12-31 ~ 2022-13-31',
            dataCell06_gt94:'경상북도 경산시 강변서로 111, 101',
        },
    ];

    for (var i = 0; i < 5; i++) {
        gridTableData94.push({
            num94:i+2,
            dataCell02_gt94:'KLIS부동산개발업체',
            dataCell03_gt94:'카밀자산',
            dataCell04_gt94:'02-123-1234',
            dataCell05_gt94:'2022-12-31 ~ 2022-13-31',
            dataCell06_gt94:'경상북도 경산시 강변서로 111, 101',
        });
    }

    for(var i= 0; i <= gridTableData94.length; i++)
    $('#gridTable94').jqGrid('addRowData',i + 1, gridTableData94[i]);


    /* 민원대행 - 폐업신고 관리 - (신고)사무실 */
    $('#gridTable95').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','영업소구분','영업소 소재지','전화번호'],
        colModel:[
            {name:'num95',index:'num95', width: 70, align: 'center'},
            {name:'dataCell01_gt95',index:'dataCell01_gt95', width: 560, align: 'center'},
            {name:'dataCell02_gt95',index:'dataCell02_gt95', width: 730, align: 'center'},
            {name:'dataCell03_gt95',index:'dataCell03_gt95', width: 230, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData95 = [ 
        {
            num95:'1',
            dataCell01_gt95:'영업소구분 명',
            dataCell02_gt95:'서울시 강남구 청담동 청담동 몇번지 몇호',
            dataCell03_gt95:'02-123-1234',
        },
    ];

    for (var i = 0; i < 5; i++) {
        gridTableData95.push({
            num95:i+2,
            dataCell01_gt95:'영업소구분 명',
            dataCell02_gt95:'서울시 강남구 청담동 청담동 몇번지 몇호',
            dataCell03_gt95:'02-123-1234',
        });
    }

    for(var i= 0; i <= gridTableData95.length; i++)
    $('#gridTable95').jqGrid('addRowData',i + 1, gridTableData95[i]);


    /* 민원대행 - 폐업신고 관리 - (신고)첨부서류 */
    $('#gridTable96').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','첨부서류 관리번호','첨부서류명','비고','파일크기(Bytes)','파일명'],
        colModel:[
            {name:'num96',index:'num96', width: 70, align: 'center'},
            {name:'dataCell02_gt96',index:'dataCell02_gt96', width: 240, align: 'center'},
            {name:'dataCell03_gt96',index:'dataCell03_gt96', width: 400, align: 'center'},
            {name:'dataCell04_gt96',index:'dataCell04_gt96', width: 400, align: 'center'},
            {name:'dataCell05_gt96',index:'dataCell05_gt96', width: 180, align: 'center'},
            {name:'dataCell06_gt96',index:'dataCell06_gt96', width: 300, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData96 = [ 
        {
            num96:'1',
            dataCell02_gt96:'100-1000-10023',
            dataCell03_gt96:'첨부서류이름',
            dataCell04_gt96:'비고내용',
            dataCell05_gt96:'4,574',
            dataCell06_gt96:'xls',
        },
    ];

    for (var i = 0; i < 5; i++) {
        gridTableData96.push({
            num96:i+2,
            dataCell02_gt96:'100-1000-10023',
            dataCell03_gt96:'첨부서류이름',
            dataCell04_gt96:'비고내용',
            dataCell05_gt96:'4,574',
            dataCell06_gt96:'xls',
        });
    }

    for(var i= 0; i <= gridTableData96.length; i++)
    $('#gridTable96').jqGrid('addRowData',i + 1, gridTableData96[i]);


    /* 민원대행 - 폐업신고 관리 - 변경이력 */
    $('#gridTable97').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','변경신청일','변경일','변경구분','변경전내용','변경후내용','변경사유','최초등록일시','최초등록자'],
        colModel:[
            {name:'num97',index:'num97', width: 70, align: 'center'},
            {name:'dataCell02_gt97',index:'dataCell02_gt97', width: 120, align: 'center'},
            {name:'dataCell03_gt97',index:'dataCell03_gt97', width: 120, align: 'center'},
            {name:'dataCell04_gt97',index:'dataCell04_gt97', width: 255, align: 'center'},
            {name:'dataCell05_gt97',index:'dataCell05_gt97', width: 255, align: 'center'},
            {name:'dataCell06_gt97',index:'dataCell06_gt97', width: 250, align: 'center'},
            {name:'dataCell07_gt97',index:'dataCell07_gt97', width: 250, align: 'center'},
            {name:'dataCell08_gt97',index:'dataCell08_gt97', width: 120, align: 'center'},
            {name:'dataCell09_gt97',index:'dataCell09_gt97', width: 150, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData97 = [ 
        {
            num97:'1',
            dataCell02_gt97:'2022-12-31',
            dataCell03_gt97:'2022-12-31',
            dataCell04_gt97:'변경구분명,',
            dataCell05_gt97:'변경전내용명',
            dataCell06_gt97:'변경후내용명',
            dataCell07_gt97:'변경사유명',
            dataCell08_gt97:'2022-12-31',
            dataCell09_gt97:'최초등록자명',
        },
    ];

    for (var i = 0; i < 5; i++) {
        gridTableData97.push({
            num97:i+2,
            dataCell02_gt97:'2022-12-31',
            dataCell03_gt97:'2022-12-31',
            dataCell04_gt97:'변경구분명,',
            dataCell05_gt97:'변경전내용명',
            dataCell06_gt97:'변경후내용명',
            dataCell07_gt97:'변경사유명',
            dataCell08_gt97:'2022-12-31',
            dataCell09_gt97:'최초등록자명',
        });
    }

    for(var i= 0; i <= gridTableData97.length; i++)
    $('#gridTable97').jqGrid('addRowData',i + 1, gridTableData97[i]);


    /* 민원대행 - 양도신고 관리 - 사업자 */
    $('#gridTable98').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','신고대상','상호','법인구분','법인등록번호','등록번호','등록일자','대표자','대표자주민번호','전화번호','담당자','국적','영업소 소재지'],
        colModel:[
            {name:'num98',index:'num98', width: 70, align: 'center'},
            {name:'dataCell02_gt98',index:'dataCell02_gt98', width: 120, align: 'center'},
            {name:'dataCell03_gt98',index:'dataCell03_gt98', width: 200, align: 'center'},
            {name:'dataCell04_gt98',index:'dataCell04_gt98', width: 200, align: 'center'},
            {name:'dataCell05_gt98',index:'dataCell05_gt98', width: 180, align: 'center'},
            {name:'dataCell06_gt98',index:'dataCell06_gt98', width: 180, align: 'center'},
            {name:'dataCell07_gt98',index:'dataCell07_gt98', width: 120, align: 'center'},
            {name:'dataCell08_gt98',index:'dataCell08_gt98', width: 150, align: 'center'},
            {name:'dataCell09_gt98',index:'dataCell09_gt98', width: 150, align: 'center'},
            {name:'dataCell10_gt98',index:'dataCell10_gt98', width: 150, align: 'center'},
            {name:'dataCell11_gt98',index:'dataCell11_gt98', width: 150, align: 'center'},
            {name:'dataCell12_gt98',index:'dataCell12_gt98', width: 150, align: 'center'},
            {name:'dataCell13_gt98',index:'dataCell13_gt98', width: 500, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData98 = [ 
        {
            num98:'1',
            dataCell02_gt98:'양도인',
            dataCell03_gt98:'운남건설(주)',
            dataCell04_gt98:'일반법인',
            dataCell05_gt98:'100-100-102156',
            dataCell06_gt98:'경북110005',
            dataCell07_gt98:'2022-12-31',
            dataCell08_gt98:'서경섭',
            dataCell09_gt98:'123456-1234567',
            dataCell10_gt98:'02-123-4567',
            dataCell11_gt98:'전창진',
            dataCell12_gt98:'대한민국',
            dataCell13_gt98:'경상북도 구미시 봉곡남로 18길',
        },
    ];

    for (var i = 0; i < 5; i++) {
        gridTableData98.push({
            num98:i+2,
            dataCell02_gt98:'양도인',
            dataCell03_gt98:'운남건설(주)',
            dataCell04_gt98:'일반법인',
            dataCell05_gt98:'100-100-102156',
            dataCell06_gt98:'경북110005',
            dataCell07_gt98:'2022-12-31',
            dataCell08_gt98:'서경섭',
            dataCell09_gt98:'123456-1234567',
            dataCell10_gt98:'02-123-4567',
            dataCell11_gt98:'전창진',
            dataCell12_gt98:'대한민국',
            dataCell13_gt98:'경상북도 구미시 봉곡남로 18길',
        });
    }

    for(var i= 0; i <= gridTableData98.length; i++)
    $('#gridTable98').jqGrid('addRowData',i + 1, gridTableData98[i]);


    /* 민원대행 - 양도신고 관리 - 부동산개발업 등록사업자 선택 팝업 */
    $('#gridTable99').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','부동산개발업<br />등록번호','상호','대표자','법인등록번호','등록상태','처리상태'],
        colModel:[
            {name:'num99',index:'num99', width: 70, align: 'center'},
            {name:'dataCell02_gt99',index:'dataCell02_gt99', width: 130, align: 'center'},
            {name:'dataCell03_gt99',index:'dataCell03_gt99', width: 200, align: 'center'},
            {name:'dataCell04_gt99',index:'dataCell04_gt99', width: 190, align: 'center'},
            {name:'dataCell05_gt99',index:'dataCell05_gt99', width: 150, align: 'center'},
            {name:'dataCell06_gt99',index:'dataCell06_gt99', width: 150, align: 'center'},
            {name:'dataCell07_gt99',index:'dataCell07_gt99', width: 120, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData99 = [ 
        {
            num99:'1',
            dataCell02_gt99:'경북100007',
            dataCell03_gt99:'카밀자산운용(주)',
            dataCell04_gt99:'홍길동',
            dataCell05_gt99:'100-100-100000',
            dataCell06_gt99:'등록완료',
            dataCell07_gt99:'정상',
        },
    ];

    for (var i = 0; i < 5; i++) {
        gridTableData99.push({
            num99:i+2,
            dataCell02_gt99:'경북100007',
            dataCell03_gt99:'카밀자산운용(주)',
            dataCell04_gt99:'홍길동',
            dataCell05_gt99:'100-100-100000',
            dataCell06_gt99:'등록완료',
            dataCell07_gt99:'정상',
        });
    }

    for(var i= 0; i <= gridTableData99.length; i++)
    $('#gridTable99').jqGrid('addRowData',i + 1, gridTableData99[i]);


    /* 민원대행 - 양도신고 관리 - 주소전환검색 팝업 */
    $('#gridTable100').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','주소','우편번호'],
        colModel:[
            {name:'num100',index:'num100', width: 70, align: 'center'},
            {name:'dataCell02_gt100',index:'dataCell02_gt100', width: 788, align: 'center'},
            {name:'dataCell03_gt100',index:'dataCell03_gt100', width: 150, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData100 = [ 
        {
            num100:'1',
            dataCell02_gt100:'서울특별시 강남구 청담동 청담몇동 청담몇번지',
            dataCell03_gt100:'1011101',
        },
    ];

    for (var i = 0; i < 5; i++) {
        gridTableData100.push({
            num100:i+2,
            dataCell02_gt100:'서울특별시 강남구 청담동 청담몇동 청담몇번지',
            dataCell03_gt100:'1011101',
        });
    }

    for(var i= 0; i <= gridTableData100.length; i++)
    $('#gridTable100').jqGrid('addRowData',i + 1, gridTableData100[i]);


    /* 민원대행 - 법인합병신고 관리 - 사업자 */
    $('#gridTable101').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','신고대상','상호','법인구분','법인등록번호','등록번호','등록일자','대표자','대표자주민번호','전화번호','담당자','국적','영업소 소재지'],
        colModel:[
            {name:'num101',index:'num101', width: 70, align: 'center'},
            {name:'dataCell02_gt101',index:'dataCell02_gt101', width: 120, align: 'center'},
            {name:'dataCell03_gt101',index:'dataCell03_gt101', width: 200, align: 'center'},
            {name:'dataCell04_gt101',index:'dataCell04_gt101', width: 200, align: 'center'},
            {name:'dataCell05_gt101',index:'dataCell05_gt101', width: 180, align: 'center'},
            {name:'dataCell06_gt101',index:'dataCell06_gt101', width: 180, align: 'center'},
            {name:'dataCell07_gt101',index:'dataCell07_gt101', width: 120, align: 'center'},
            {name:'dataCell08_gt101',index:'dataCell08_gt101', width: 150, align: 'center'},
            {name:'dataCell09_gt101',index:'dataCell09_gt101', width: 150, align: 'center'},
            {name:'dataCell10_gt101',index:'dataCell10_gt101', width: 150, align: 'center'},
            {name:'dataCell11_gt101',index:'dataCell11_gt101', width: 150, align: 'center'},
            {name:'dataCell12_gt101',index:'dataCell12_gt101', width: 150, align: 'center'},
            {name:'dataCell13_gt101',index:'dataCell13_gt101', width: 500, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData101 = [ 
        {
            num101:'1',
            dataCell02_gt101:'양도인',
            dataCell03_gt101:'운남건설(주)',
            dataCell04_gt101:'일반법인',
            dataCell05_gt101:'100-100-102156',
            dataCell06_gt101:'경북110005',
            dataCell07_gt101:'2022-12-31',
            dataCell08_gt101:'서경섭',
            dataCell09_gt101:'123456-1234567',
            dataCell10_gt101:'02-123-4567',
            dataCell11_gt101:'전창진',
            dataCell12_gt101:'대한민국',
            dataCell13_gt101:'경상북도 구미시 봉곡남로 18길',
        },
    ];

    for (var i = 0; i < 5; i++) {
        gridTableData101.push({
            num101:i+2,
            dataCell02_gt101:'양도인',
            dataCell03_gt101:'운남건설(주)',
            dataCell04_gt101:'일반법인',
            dataCell05_gt101:'100-100-102156',
            dataCell06_gt101:'경북110005',
            dataCell07_gt101:'2022-12-31',
            dataCell08_gt101:'서경섭',
            dataCell09_gt101:'123456-1234567',
            dataCell10_gt101:'02-123-4567',
            dataCell11_gt101:'전창진',
            dataCell12_gt101:'대한민국',
            dataCell13_gt101:'경상북도 구미시 봉곡남로 18길',
        });
    }

    for(var i= 0; i <= gridTableData101.length; i++)
    $('#gridTable101').jqGrid('addRowData',i + 1, gridTableData101[i]);


    /* 민원대행 - 법인합병신고 관리 - 부동산개발업 등록사업자 선택 팝업 */
    $('#gridTable102').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','부동산개발업<br />등록번호','상호','대표자','법인등록번호','등록상태','처리상태'],
        colModel:[
            {name:'num102',index:'num102', width: 70, align: 'center'},
            {name:'dataCell02_gt102',index:'dataCell02_gt102', width: 130, align: 'center'},
            {name:'dataCell03_gt102',index:'dataCell03_gt102', width: 200, align: 'center'},
            {name:'dataCell04_gt102',index:'dataCell04_gt102', width: 190, align: 'center'},
            {name:'dataCell05_gt102',index:'dataCell05_gt102', width: 150, align: 'center'},
            {name:'dataCell06_gt102',index:'dataCell06_gt102', width: 150, align: 'center'},
            {name:'dataCell07_gt102',index:'dataCell07_gt102', width: 120, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData102 = [ 
        {
            num102:'1',
            dataCell02_gt102:'경북100007',
            dataCell03_gt102:'카밀자산운용(주)',
            dataCell04_gt102:'홍길동',
            dataCell05_gt102:'100-100-100000',
            dataCell06_gt102:'등록완료',
            dataCell07_gt102:'정상',
        },
    ];

    for (var i = 0; i < 5; i++) {
        gridTableData102.push({
            num102:i+2,
            dataCell02_gt102:'경북100007',
            dataCell03_gt102:'카밀자산운용(주)',
            dataCell04_gt102:'홍길동',
            dataCell05_gt102:'100-100-100000',
            dataCell06_gt102:'등록완료',
            dataCell07_gt102:'정상',
        });
    }

    for(var i= 0; i <= gridTableData102.length; i++)
    $('#gridTable102').jqGrid('addRowData',i + 1, gridTableData102[i]);


    /* 민원대행 - 전출신고 관리 - 변경내용 */
    $('#gridTable103').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','변경일','변경구분','변경전내용','변경후내용','변경사유','최초등록일시', '최초등록자'],
        colModel:[
            {name:'num103',index:'num103', width: 70, align: 'center'},
            {name:'dataCell02_gt103',index:'dataCell02_gt103', width: 120, align: 'center'},
            {name:'dataCell03_gt103',index:'dataCell03_gt103', width: 270, align: 'center'},
            {name:'dataCell04_gt103',index:'dataCell04_gt103', width: 270, align: 'center'},
            {name:'dataCell05_gt103',index:'dataCell05_gt103', width: 270, align: 'center'},
            {name:'dataCell06_gt103',index:'dataCell06_gt103', width: 270, align: 'center'},
            {name:'dataCell07_gt103',index:'dataCell07_gt103', width: 120, align: 'center'},
            {name:'dataCell08_gt103',index:'dataCell08_gt103', width: 200, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData103 = [ 
        {
            num103:'1',
            dataCell02_gt103:'2022-12-31',
            dataCell03_gt103:'변경구분명',
            dataCell04_gt103:'변경전내용명',
            dataCell05_gt103:'변경후내용명',
            dataCell06_gt103:'변경사유명',
            dataCell07_gt103:'2022-12-31',
            dataCell08_gt103:'최초등록자는어디',
        },
    ];

    for (var i = 0; i < 5; i++) {
        gridTableData103.push({
            num103:i+2,
            dataCell02_gt103:'2022-12-31',
            dataCell03_gt103:'변경구분명',
            dataCell04_gt103:'변경전내용명',
            dataCell05_gt103:'변경후내용명',
            dataCell06_gt103:'변경사유명',
            dataCell07_gt103:'2022-12-31',
            dataCell08_gt103:'최초등록자는어디',
        });
    }

    for(var i= 0; i <= gridTableData103.length; i++)
    $('#gridTable103').jqGrid('addRowData',i + 1, gridTableData103[i]);


    /* 민원대행 - 전출신고 관리 - 변경사무실 */
    $('#gridTable104').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','변경일','변경구분','변경전내용','변경후내용','변경사유','최초등록일시', '최초등록자'],
        colModel:[
            {name:'num104',index:'num104', width: 70, align: 'center'},
            {name:'dataCell02_gt104',index:'dataCell02_gt104', width: 120, align: 'center'},
            {name:'dataCell03_gt104',index:'dataCell03_gt104', width: 270, align: 'center'},
            {name:'dataCell04_gt104',index:'dataCell04_gt104', width: 270, align: 'center'},
            {name:'dataCell05_gt104',index:'dataCell05_gt104', width: 270, align: 'center'},
            {name:'dataCell06_gt104',index:'dataCell06_gt104', width: 270, align: 'center'},
            {name:'dataCell07_gt104',index:'dataCell07_gt104', width: 120, align: 'center'},
            {name:'dataCell08_gt104',index:'dataCell08_gt104', width: 200, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData104 = [ 
        {
            num104:'1',
            dataCell02_gt104:'2022-12-31',
            dataCell03_gt104:'변경구분명22',
            dataCell04_gt104:'변경전내용명',
            dataCell05_gt104:'변경후내용명',
            dataCell06_gt104:'변경사유명',
            dataCell07_gt104:'2022-12-31',
            dataCell08_gt104:'최초등록자는어디',
        },
    ];

    for (var i = 0; i < 5; i++) {
        gridTableData104.push({
            num104:i+2,
            dataCell02_gt104:'2022-12-31',
            dataCell03_gt104:'변경구분명22',
            dataCell04_gt104:'변경전내용명',
            dataCell05_gt104:'변경후내용명',
            dataCell06_gt104:'변경사유명',
            dataCell07_gt104:'2022-12-31',
            dataCell08_gt104:'최초등록자는어디',
        });
    }

    for(var i= 0; i <= gridTableData104.length; i++)
    $('#gridTable104').jqGrid('addRowData',i + 1, gridTableData104[i]);


    /* 민원대행 - 등록증 재교부 관리 - (신고)사무실 */
    $('#gridTable105').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','영업소구분','영업소 소재지','전화번호'],
        colModel:[
            {name:'num105',index:'num105', width: 70, align: 'center'},
            {name:'dataCell02_gt105',index:'dataCell02_gt105', width: 560, align: 'center'},
            {name:'dataCell03_gt105',index:'dataCell03_gt105', width: 730, align: 'center'},
            {name:'dataCell04_gt105',index:'dataCell04_gt105', width: 230, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData105 = [ 
        {
            num105:'1',
            dataCell02_gt105:'영업소구분 명',
            dataCell03_gt105:'서울시 강남구 청담동 청담동 몇번지 몇호',
            dataCell04_gt105:'02-123-1234',
        },
    ];

    for (var i = 0; i < 5; i++) {
        gridTableData105.push({
            num105:i+2,
            dataCell02_gt105:'영업소구분 명',
            dataCell03_gt105:'서울시 강남구 청담동 청담동 몇번지 몇호',
            dataCell04_gt105:'02-123-1234',
        });
    }

    for(var i= 0; i <= gridTableData105.length; i++)
    $('#gridTable105').jqGrid('addRowData',i + 1, gridTableData105[i]);


    /* 민원대행(공통) - 전문인력 퇴사처리 업무알림 */
    $('#gridTable106').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','부동산개발업<br />등록번호','상호','법인등록번호','대표자','법인구분','등록상태'],
        colModel:[
            {name:'num106',index:'num106', width: 70, align: 'center'},
            {name:'dataCell02_gt106',index:'dataCell02_gt106', width: 130, align: 'center'},
            {name:'dataCell03_gt106',index:'dataCell03_gt106', width: 238, align: 'center'},
            {name:'dataCell04_gt106',index:'dataCell04_gt106', width: 150, align: 'center'},
            {name:'dataCell05_gt106',index:'dataCell05_gt106', width: 150, align: 'center'},
            {name:'dataCell06_gt106',index:'dataCell06_gt106', width: 150, align: 'center'},
            {name:'dataCell07_gt106',index:'dataCell07_gt106', width: 120, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData106 = [ 
        {
            num106:'1',
            dataCell02_gt106:'경북110004',
            dataCell03_gt106:'주식회사 홍성건설',
            dataCell04_gt106:'110-110-11111',
            dataCell05_gt106:'정홍표',
            dataCell06_gt106:'일반법인',
            dataCell07_gt106:'등록완료<br /> <span class="cRed">등록완료</span>',
        },
    ];

    for (var i = 0; i < 5; i++) {
        gridTableData106.push({
            num106:i+2,
            dataCell02_gt106:'경북110004',
            dataCell03_gt106:'주식회사 홍성건설',
            dataCell04_gt106:'110-110-11111',
            dataCell05_gt106:'정홍표',
            dataCell06_gt106:'일반법인',
            dataCell07_gt106:'등록완료<br /> <span class="cRed">등록완료</span>',
        });
    }

    for(var i= 0; i <= gridTableData106.length; i++)
    $('#gridTable106').jqGrid('addRowData',i + 1, gridTableData106[i]);


    /* 민원대행(공통) - 전문인력 퇴사처리 업무알림 - 인력상세정보 */
    $('#gridTable107').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','상태','성명','주민등록번호','전문인력구분','자격등급','만료일','퇴사일','입사일','보고일','자격증','교육이수'],
        colModel:[
            {name:'num107',index:'num107', width: 70, align: 'center'},
            {name:'dataCell02_gt107',index:'dataCell02_gt107', width: 80, align: 'center'},
            {name:'dataCell03_gt107',index:'dataCell03_gt107', width: 150, align: 'center'},
            {name:'dataCell04_gt107',index:'dataCell04_gt107', width: 150, align: 'center'},
            {name:'dataCell05_gt107',index:'dataCell05_gt107', width: 200, align: 'center'},
            {name:'dataCell06_gt107',index:'dataCell06_gt107', width: 120, align: 'center'},
            {name:'dataCell07_gt107',index:'dataCell07_gt107', width: 120, align: 'center'},
            {name:'dataCell08_gt107',index:'dataCell08_gt107', width: 120, align: 'center'},
            {name:'dataCell09_gt107',index:'dataCell09_gt107', width: 120, align: 'center'},
            {name:'dataCell10_gt107',index:'dataCell10_gt107', width: 120, align: 'center'},
            {name:'dataCell11_gt107',index:'dataCell11_gt107', width: 100, align: 'center'},
            {name:'dataCell12_gt107',index:'dataCell12_gt107', width: 100, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData107 = [ 
        {
            num107:'1',
            dataCell02_gt107:'<span class="cBlue">정상</span><br />삭제',
            dataCell03_gt107:'손현규',
            dataCell04_gt107:'123456-1234567',
            dataCell05_gt107:'건설기술자',
            dataCell06_gt107:'특급',
            dataCell07_gt107:'<span class="cRed">2022-12-31</span>',
            dataCell08_gt107:'2022-12-31',
            dataCell09_gt107:'2022-12-31',
            dataCell10_gt107:'2022-12-31',
            dataCell11_gt107:'0',
            dataCell12_gt107:'2',
        },
    ];

    for (var i = 0; i < 5; i++) {
        gridTableData107.push({
            num107:i+2,
            dataCell02_gt107:'<span class="cBlue">정상</span><br />삭제',
            dataCell03_gt107:'손현규',
            dataCell04_gt107:'123456-1234567',
            dataCell05_gt107:'건설기술자',
            dataCell06_gt107:'특급',
            dataCell07_gt107:'<span class="cRed">2022-12-31</span>',
            dataCell08_gt107:'2022-12-31',
            dataCell09_gt107:'2022-12-31',
            dataCell10_gt107:'2022-12-31',
            dataCell11_gt107:'0',
            dataCell12_gt107:'2',
        });
    }

    for(var i= 0; i <= gridTableData107.length; i++)
    $('#gridTable107').jqGrid('addRowData',i + 1, gridTableData107[i]);


    /* 민원대행(공통) - 민원대행 시도 업무알림*/
    $('#gridTable108').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','민원관리번호','신청구분','부동산개발업<br />등록번호','법인등록번호','상호','최초등록구분','신청일','진행상태','처리구분','접수일'],
        colModel:[
            {name:'num108',index:'num108', width: 70, align: 'center'},
            {name:'dataCell02_gt108',index:'dataCell02_gt108', width: 150, align: 'center'},
            {name:'dataCell03_gt108',index:'dataCell03_gt108', width: 150, align: 'center'},
            {name:'dataCell04_gt108',index:'dataCell04_gt108', width: 150, align: 'center'},
            {name:'dataCell05_gt108',index:'dataCell05_gt108', width: 150, align: 'center'},
            {name:'dataCell06_gt108',index:'dataCell06_gt108', width: 220, align: 'center'},
            {name:'dataCell07_gt108',index:'dataCell07_gt108', width: 100, align: 'center'},
            {name:'dataCell08_gt108',index:'dataCell08_gt108', width: 120, align: 'center'},
            {name:'dataCell09_gt108',index:'dataCell09_gt108', width: 120, align: 'center'},
            {name:'dataCell10_gt108',index:'dataCell10_gt108', width: 120, align: 'center'},
            {name:'dataCell11_gt108',index:'dataCell11_gt108', width: 100, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData108 = [ 
        {
            num108:'1',
            dataCell02_gt108:'20220615000001',
            dataCell03_gt108:'등록신청',
            dataCell04_gt108:'경북130005',
            dataCell05_gt108:'100-100-100000',
            dataCell06_gt108:'정안건설주식회사',
            dataCell07_gt108:'협회',
            dataCell08_gt108:'2022-12-31',
            dataCell09_gt108:'완료',
            dataCell10_gt108:'<span class="cRed">처리중</span>',
            dataCell11_gt108:'2022-12-31',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData108.push({
            num108:i+2,
            dataCell02_gt108:'20220615000001',
            dataCell03_gt108:'등록신청',
            dataCell04_gt108:'경북130005',
            dataCell05_gt108:'100-100-100000',
            dataCell06_gt108:'정안건설주식회사',
            dataCell07_gt108:'협회',
            dataCell08_gt108:'2022-12-31',
            dataCell09_gt108:'완료',
            dataCell10_gt108:'<span class="cRed">처리중</span>',
            dataCell11_gt108:'2022-12-31',
        });
    }

    for(var i= 0; i <= gridTableData108.length; i++)
    $('#gridTable108').jqGrid('addRowData',i + 1, gridTableData108[i]);


    /* 민원대행(공통) - 과태료 부과(예정)대상 알림*/
    $('#gridTable109').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','부동산개발업등록번호','상호','부과(예정)사유','사유발생일(접수일)'],
        colModel:[
            {name:'num109',index:'num109', width: 70, align: 'center'},
            {name:'dataCell02_gt109',index:'dataCell02_gt109', width: 150, align: 'center'},
            {name:'dataCell03_gt109',index:'dataCell03_gt109', width: 220, align: 'center'},
            {name:'dataCell04_gt109',index:'dataCell04_gt109', width: 448, align: 'center'},
            {name:'dataCell05_gt109',index:'dataCell05_gt109', width: 120, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData109 = [ 
        {
            num109:'1',
            dataCell02_gt109:'경북1000007',
            dataCell03_gt109:'계림건축사사무소',
            dataCell04_gt109:'사업실적, 자본금의 변경, 임원 및 부동산개발 전문인력의 변경을 보고하지 아니하거나 거짓의 내용을 보고한',
            dataCell05_gt109:'2022-12-31',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData109.push({
            num109:i+2,
            dataCell02_gt109:'경북1000007',
            dataCell03_gt109:'계림건축사사무소',
            dataCell04_gt109:'사업실적, 자본금의 변경, 임원 및 부동산개발 전문인력의 변경을 보고하지 아니하거나 거짓의 내용을 보고한',
            dataCell05_gt109:'2022-12-31',
        });
    }

    for(var i= 0; i <= gridTableData109.length; i++)
    $('#gridTable109').jqGrid('addRowData',i + 1, gridTableData109[i]);


    /* 민원대행(공통) - 신규등록관리 - (신고)사무실*/
    $('#gridTable110').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','상태','영업소 소재지','구분','전화번호','소유형태','임대기간','건물용도'],
        colModel:[
            {name:'num110',index:'num110', width: 70, align: 'center'},
            {name:'dataCell02_gt110',index:'dataCell02_gt110', width: 120, align: 'center'},
            {name:'dataCell03_gt110',index:'dataCell03_gt110', width: 540, align: 'center'},
            {name:'dataCell04_gt110',index:'dataCell04_gt110', width: 180, align: 'center'},
            {name:'dataCell05_gt110',index:'dataCell05_gt110', width: 150, align: 'center'},
            {name:'dataCell06_gt110',index:'dataCell06_gt110', width: 180, align: 'center'},
            {name:'dataCell07_gt110',index:'dataCell07_gt110', width: 200, align: 'center'},
            {name:'dataCell08_gt110',index:'dataCell08_gt110', width: 150, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData110 = [ 
        {
            num110:'1',
            dataCell02_gt110:'정상',
            dataCell03_gt110:'서울특별시 종로구 창의문로 12',
            dataCell04_gt110:'주사무소',
            dataCell05_gt110:'02-123-4567',
            dataCell06_gt110:'소유형태명',
            dataCell07_gt110:'2022-12-31 ~ 2022-12-31',
            dataCell08_gt110:'건물용도명',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData110.push({
            num110:i+2,
            dataCell02_gt110:'정상',
            dataCell03_gt110:'서울특별시 종로구 창의문로 12',
            dataCell04_gt110:'주사무소',
            dataCell05_gt110:'02-123-4567',
            dataCell06_gt110:'소유형태명',
            dataCell07_gt110:'2022-12-31 ~ 2022-12-31',
            dataCell08_gt110:'건물용도명',
        });
    }

    for(var i= 0; i <= gridTableData110.length; i++)
    $('#gridTable110').jqGrid('addRowData',i + 1, gridTableData110[i]);


    /* 현황/통계 - 현황 조회 - 전국사업자 조회*/
    $('#gridTable111').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','부동산개발업<br />등록번호','상호','대표자','법인구분','주민(법인)등록번호','등록일자','등록상태','처리상태','자본금','출자금액','출자비율','말소일자'],
        colModel:[
            {name:'num111',index:'num111', width: 70, align: 'center'},
            {name:'dataCell02_gt111',index:'dataCell02_gt111', width: 120, align: 'center'},
            {name:'dataCell03_gt111',index:'dataCell03_gt111', width: 180, align: 'center'},
            {name:'dataCell04_gt111',index:'dataCell04_gt111', width: 150, align: 'center'},
            {name:'dataCell05_gt111',index:'dataCell05_gt111', width: 120, align: 'center'},
            {name:'dataCell06_gt111',index:'dataCell06_gt111', width: 150, align: 'center'},
            {name:'dataCell07_gt111',index:'dataCell07_gt111', width: 120, align: 'center'},
            {name:'dataCell08_gt111',index:'dataCell08_gt111', width: 120, align: 'center'},
            {name:'dataCell09_gt111',index:'dataCell09_gt111', width: 120, align: 'center'},
            {name:'dataCell10_gt111',index:'dataCell10_gt111', width: 150, align: 'center'},
            {name:'dataCell11_gt111',index:'dataCell11_gt111', width: 150, align: 'center'},
            {name:'dataCell12_gt111',index:'dataCell12_gt111', width: 120, align: 'center'},
            {name:'dataCell13_gt111',index:'dataCell13_gt111', width: 120, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData111 = [ 
        {
            num111:'1',
            dataCell02_gt111:'경북2000007',
            dataCell03_gt111:'상호명은 몇글자까지',
            dataCell04_gt111:'대표자명은몇글자',
            dataCell05_gt111:'특수법인',
            dataCell06_gt111:'100-100-100000',
            dataCell07_gt111:'2022-12-31',
            dataCell08_gt111:'등록완료',
            dataCell09_gt111:'정상',
            dataCell10_gt111:'10000000000',
            dataCell11_gt111:'10000000000',
            dataCell12_gt111:'123',
            dataCell13_gt111:'2022-12-31',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData111.push({
            num111:i+2,
            dataCell02_gt111:'경북2000007',
            dataCell03_gt111:'상호명은 몇글자까지',
            dataCell04_gt111:'대표자명은몇글자',
            dataCell05_gt111:'특수법인',
            dataCell06_gt111:'100-100-100000',
            dataCell07_gt111:'2022-12-31',
            dataCell08_gt111:'등록완료',
            dataCell09_gt111:'정상',
            dataCell10_gt111:'10000000000',
            dataCell11_gt111:'10000000000',
            dataCell12_gt111:'123',
            dataCell13_gt111:'2022-12-31',
        });
    }

    for(var i= 0; i <= gridTableData111.length; i++)
    $('#gridTable111').jqGrid('addRowData',i + 1, gridTableData111[i]);


    /* 현황/통계 - 현황 조회 - 전국사업자 상세정보*/
    $('#gridTable112').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','변경신청일','변경일','변경구분','변경전내용','변경후내용','변경사유','최초등록일시','최초등록자'],
        colModel:[
            {name:'num112',index:'num112', width: 70, align: 'center'},
            {name:'dataCell02_gt112',index:'dataCell02_gt112', width: 120, align: 'center'},
            {name:'dataCell03_gt112',index:'dataCell03_gt112', width: 120, align: 'center'},
            {name:'dataCell04_gt112',index:'dataCell04_gt112', width: 200, align: 'center'},
            {name:'dataCell05_gt112',index:'dataCell05_gt112', width: 280, align: 'center'},
            {name:'dataCell06_gt112',index:'dataCell06_gt112', width: 280, align: 'center'},
            {name:'dataCell07_gt112',index:'dataCell07_gt112', width: 200, align: 'center'},
            {name:'dataCell08_gt112',index:'dataCell08_gt112', width: 200, align: 'center'},
            {name:'dataCell09_gt112',index:'dataCell09_gt112', width: 120, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData112 = [ 
        {
            num112:'1',
            dataCell02_gt112:'2022-12-31',
            dataCell03_gt112:'2022-12-31',
            dataCell04_gt112:'상속',
            dataCell05_gt112:'변경전 내용은 무엇',
            dataCell06_gt112:'변경후 내용은 또 무엇',
            dataCell07_gt112:'상속',
            dataCell08_gt112:'2022-13-31 12:31:59',
            dataCell09_gt112:'경상북도(ED)',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData112.push({
            num112:i+2,
            dataCell02_gt112:'2022-12-31',
            dataCell03_gt112:'2022-12-31',
            dataCell04_gt112:'상속',
            dataCell05_gt112:'변경전 내용은 무엇',
            dataCell06_gt112:'변경후 내용은 또 무엇',
            dataCell07_gt112:'상속',
            dataCell08_gt112:'2022-13-31 12:31:59',
            dataCell09_gt112:'경상북도(ED)',
        });
    }

    for(var i= 0; i <= gridTableData112.length; i++)
    $('#gridTable112').jqGrid('addRowData',i + 1, gridTableData112[i]);


    /* 현황/통계 - 현황 조회 - 전국임원 조회*/
    $('#gridTable113').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','부동산개발업<br />등록번호','상호','성명','주민번호유형','주민등록번호','임원구분','인력상태','부동산개발업<br />등록상태'],
        colModel:[
            {name:'num113',index:'num113', width: 70, align: 'center'},
            {name:'dataCell02_gt113',index:'dataCell02_gt113', width: 190, align: 'center'},
            {name:'dataCell03_gt113',index:'dataCell03_gt113', width: 190, align: 'center'},
            {name:'dataCell04_gt113',index:'dataCell04_gt113', width: 190, align: 'center'},
            {name:'dataCell05_gt113',index:'dataCell05_gt113', width: 190, align: 'center'},
            {name:'dataCell06_gt113',index:'dataCell06_gt113', width: 190, align: 'center'},
            {name:'dataCell07_gt113',index:'dataCell07_gt113', width: 190, align: 'center'},
            {name:'dataCell08_gt113',index:'dataCell08_gt113', width: 190, align: 'center'},
            {name:'dataCell09_gt113',index:'dataCell09_gt113', width: 190, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData113 = [ 
        {
            num113:'1',
            dataCell02_gt113:'서울2000001',
            dataCell03_gt113:'메이드 주식회사',
            dataCell04_gt113:'임원이름',
            dataCell05_gt113:'주민번호',
            dataCell06_gt113:'123456-1234567',
            dataCell07_gt113:'대표이사',
            dataCell08_gt113:'<span class="cBlue">정상</span>',
            dataCell09_gt113:'<span class="cBlue">등록완료</span>',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData113.push({
            num113:i+2,
            dataCell02_gt113:'서울2000001',
            dataCell03_gt113:'메이드 주식회사',
            dataCell04_gt113:'임원이름',
            dataCell05_gt113:'주민번호',
            dataCell06_gt113:'123456-1234567',
            dataCell07_gt113:'대표이사',
            dataCell08_gt113:'<span class="cBlue">정상</span>',
            dataCell09_gt113:'<span class="cBlue">등록완료</span>',
        });
    }

    for(var i= 0; i <= gridTableData113.length; i++)
    $('#gridTable113').jqGrid('addRowData',i + 1, gridTableData113[i]);


    /* 현황/통계 - 현황 조회 - 전국전문인력 조회*/
    $('#gridTable114').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','시도','시군구','부동산개발업<br />등록번호','상호','성명','전문인력<br />자격등급','주민등록번호','전문인력구분','인력상태','부동산개발업<br />등록상태'],
        colModel:[
            {name:'num114',index:'num114', width: 70, align: 'center'},
            {name:'dataCell02_gt114',index:'dataCell02_gt114', width: 140, align: 'center'},
            {name:'dataCell03_gt114',index:'dataCell03_gt114', width: 140, align: 'center'},
            {name:'dataCell04_gt114',index:'dataCell04_gt114', width: 150, align: 'center'},
            {name:'dataCell05_gt114',index:'dataCell05_gt114', width: 220, align: 'center'},
            {name:'dataCell06_gt114',index:'dataCell06_gt114', width: 150, align: 'center'},
            {name:'dataCell07_gt114',index:'dataCell07_gt114', width: 140, align: 'center'},
            {name:'dataCell08_gt114',index:'dataCell08_gt114', width: 140, align: 'center'},
            {name:'dataCell09_gt114',index:'dataCell09_gt114', width: 200, align: 'center'},
            {name:'dataCell10_gt114',index:'dataCell10_gt114', width: 120, align: 'center'},
            {name:'dataCell11_gt114',index:'dataCell11_gt114', width: 120, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData114 = [ 
        {
            num114:'1',
            dataCell02_gt114:'서울특별시',
            dataCell03_gt114:'구로구',
            dataCell04_gt114:'경북2000015',
            dataCell05_gt114:'부동산개발테스트',
            dataCell06_gt114:'이름이뭐냐',
            dataCell07_gt114:'해당없음',
            dataCell08_gt114:'123456-1234567',
            dataCell09_gt114:'자산운용전문인력',
            dataCell10_gt114:'<span class="cBlue">정상</span>',
            dataCell11_gt114:'<span class="cBlue">등록완료</span>',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData114.push({
            num114:i+2,
            dataCell02_gt114:'서울특별시',
            dataCell03_gt114:'구로구',
            dataCell04_gt114:'경북2000015',
            dataCell05_gt114:'부동산개발테스트',
            dataCell06_gt114:'이름이뭐냐',
            dataCell07_gt114:'해당없음',
            dataCell08_gt114:'123456-1234567',
            dataCell09_gt114:'자산운용전문인력',
            dataCell10_gt114:'<span class="cBlue">정상</span>',
            dataCell11_gt114:'<span class="cBlue">등록완료</span>',
        });
    }

    for(var i= 0; i <= gridTableData114.length; i++)
    $('#gridTable114').jqGrid('addRowData',i + 1, gridTableData114[i]);


    /* 현황/통계 - 현황 조회 - 건축물 인허가 조회*/
    $('#gridTable115').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','허가구분','민원구분','주용도','토지소재지','지목','토지면적 (㎡)','시행자구분','시행자명'],
        colModel:[
            {name:'num115',index:'num115', width: 70, align: 'center'},
            {name:'dataCell02_gt115',index:'dataCell02_gt115', width: 120, align: 'center'},
            {name:'dataCell03_gt115',index:'dataCell03_gt115', width: 200, align: 'center'},
            {name:'dataCell04_gt115',index:'dataCell04_gt115', width: 180, align: 'center'},
            {name:'dataCell05_gt115',index:'dataCell05_gt115', width: 440, align: 'center'},
            {name:'dataCell06_gt115',index:'dataCell06_gt115', width: 140, align: 'center'},
            {name:'dataCell07_gt115',index:'dataCell07_gt115', width: 140, align: 'center'},
            {name:'dataCell08_gt115',index:'dataCell08_gt115', width: 120, align: 'center'},
            {name:'dataCell09_gt115',index:'dataCell09_gt115', width: 180, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData115 = [ 
        {
            num115:'1',
            dataCell02_gt115:'건축',
            dataCell03_gt115:'건축 대수선 용도변경신고',
            dataCell04_gt115:'제2종근린생활시설',
            dataCell05_gt115:'경상북도 상주시 화남면 중놀리 300-300 2층',
            dataCell06_gt115:'목장용지',
            dataCell07_gt115:'5,260.80',
            dataCell08_gt115:'일반법인',
            dataCell09_gt115:'더블유컨벤션',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData115.push({
            num115:i+2,
            dataCell02_gt115:'건축',
            dataCell03_gt115:'건축 대수선 용도변경신고',
            dataCell04_gt115:'제2종근린생활시설',
            dataCell05_gt115:'경상북도 상주시 화남면 중놀리 300-300 2층',
            dataCell06_gt115:'목장용지',
            dataCell07_gt115:'5,260.80',
            dataCell08_gt115:'일반법인',
            dataCell09_gt115:'더블유컨벤션',
        });
    }

    for(var i= 0; i <= gridTableData115.length; i++)
    $('#gridTable115').jqGrid('addRowData',i + 1, gridTableData115[i]);

    
    /* 현황/통계 - 현황 조회 - 건축물 인허가 조회 - 법정 동 검색()*/
    $('#gridTable116').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','변경일','변경구분','법정동명'],
        colModel:[
            {name:'num116',index:'num116', width: 70, align: 'center'},
            {name:'dataCell02_gt116',index:'dataCell02_gt116', width: 120, align: 'center'},
            {name:'dataCell03_gt116',index:'dataCell03_gt116', width: 150, align: 'center'},
            {name:'dataCell04_gt116',index:'dataCell04_gt116', width: 578, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData116 = [ 
        {
            num116:'1',
            dataCell02_gt116:'2022-12-31',
            dataCell03_gt116:'전출',
            dataCell04_gt116:'경상북도 상주시 화남면 중놀리 300-300 2층',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData116.push({
            num116:i+2,
            dataCell02_gt116:'2022-12-31',
            dataCell03_gt116:'전출',
            dataCell04_gt116:'경상북도 상주시 화남면 중놀리 300-300 2층',
        });
    }

    for(var i= 0; i <= gridTableData116.length; i++)
    $('#gridTable116').jqGrid('addRowData',i + 1, gridTableData116[i]);


    /* 현황/통계 - 현황 조회 - 전출입이전관리내역 조회*/
    $('#gridTable117').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','등록시도','상호','등록번호','대표자','등록일','신청일','변경일','변경 전 주소','변경 후 주소'],
        colModel:[
            {name:'num117',index:'num117', width: 70, align: 'center'},
            {name:'dataCell02_gt117',index:'dataCell02_gt117', width: 120, align: 'center'},
            {name:'dataCell03_gt117',index:'dataCell03_gt117', width: 200, align: 'center'},
            {name:'dataCell04_gt117',index:'dataCell04_gt117', width: 150, align: 'center'},
            {name:'dataCell05_gt117',index:'dataCell05_gt117', width: 150, align: 'center'},
            {name:'dataCell06_gt117',index:'dataCell06_gt117', width: 120, align: 'center'},
            {name:'dataCell07_gt117',index:'dataCell07_gt117', width: 120, align: 'center'},
            {name:'dataCell08_gt117',index:'dataCell08_gt117', width: 120, align: 'center'},
            {name:'dataCell09_gt117',index:'dataCell09_gt117', width: 450, align: 'center'},
            {name:'dataCell10_gt117',index:'dataCell10_gt117', width: 450, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData117 = [ 
        {
            num117:'1',
            dataCell02_gt117:'경상북도',
            dataCell03_gt117:'KLIS부동산개발업체',
            dataCell04_gt117:'2121111242041',
            dataCell05_gt117:'대표자명',
            dataCell06_gt117:'2022-12-31',
            dataCell07_gt117:'2022-12-31',
            dataCell08_gt117:'2022-12-31',
            dataCell09_gt117:'경상북도 영천시 문의동 0040-0016',
            dataCell10_gt117:'서울특별시 성동구 하왕십리동 0054-0465',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData117.push({
            num117:i+2,
            dataCell02_gt117:'경상북도',
            dataCell03_gt117:'KLIS부동산개발업체',
            dataCell04_gt117:'2121111242041',
            dataCell05_gt117:'대표자명',
            dataCell06_gt117:'2022-12-31',
            dataCell07_gt117:'2022-12-31',
            dataCell08_gt117:'2022-12-31',
            dataCell09_gt117:'경상북도 영천시 문의동 0040-0016',
            dataCell10_gt117:'서울특별시 성동구 하왕십리동 0054-0465',
        });
    }

    for(var i= 0; i <= gridTableData117.length; i++)
    $('#gridTable117').jqGrid('addRowData',i + 1, gridTableData117[i]);


    /* 현황/통계 - 현황 조회 - 수수료 조회*/
    $('#gridTable118').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','결제일련번호','민원관리번호','법인등록번호','신청인','신청일','상호','대표자','수수료','부가수수료','수수료납부','결제일시','결제방법','결제여부','결제성공시간','환불일시','처리상태','전화번호'],
        colModel:[
            {name:'num118',index:'num118', width: 70, align: 'center'},
            {name:'dataCell02_gt118',index:'dataCell02_gt118', width: 150, align: 'center'},
            {name:'dataCell03_gt118',index:'dataCell03_gt118', width: 150, align: 'center'},
            {name:'dataCell04_gt118',index:'dataCell04_gt118', width: 150, align: 'center'},
            {name:'dataCell05_gt118',index:'dataCell05_gt118', width: 150, align: 'center'},
            {name:'dataCell06_gt118',index:'dataCell06_gt118', width: 150, align: 'center'},
            {name:'dataCell07_gt118',index:'dataCell07_gt118', width: 250, align: 'center'},
            {name:'dataCell08_gt118',index:'dataCell08_gt118', width: 150, align: 'center'},
            {name:'dataCell09_gt118',index:'dataCell09_gt118', width: 150, align: 'center'},
            {name:'dataCell10_gt118',index:'dataCell10_gt118', width: 150, align: 'center'},
            {name:'dataCell11_gt118',index:'dataCell11_gt118', width: 150, align: 'center'},
            {name:'dataCell12_gt118',index:'dataCell12_gt118', width: 150, align: 'center'},
            {name:'dataCell13_gt118',index:'dataCell13_gt118', width: 150, align: 'center'},
            {name:'dataCell14_gt118',index:'dataCell14_gt118', width: 120, align: 'center'},
            {name:'dataCell15_gt118',index:'dataCell15_gt118', width: 150, align: 'center'},
            {name:'dataCell16_gt118',index:'dataCell16_gt118', width: 150, align: 'center'},
            {name:'dataCell17_gt118',index:'dataCell17_gt118', width: 150, align: 'center'},
            {name:'dataCell18_gt118',index:'dataCell18_gt118', width: 150, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData118 = [ 
        {
            num118:'1',
            dataCell02_gt118:'16110001105',
            dataCell03_gt118:'20110504000',
            dataCell04_gt118:'11011127261',
            dataCell05_gt118:'이영수',
            dataCell06_gt118:'2022-12-08',
            dataCell07_gt118:'온토종합건설주식회사',
            dataCell08_gt118:'이영수',
            dataCell09_gt118:'52,000',
            dataCell10_gt118:'52,000',
            dataCell11_gt118:'',
            dataCell12_gt118:'2022-12-31',
            dataCell13_gt118:'신용카드',
            dataCell14_gt118:'<span class="cRed">결제</span>',
            dataCell15_gt118:'2022-12-31 15:55:51',
            dataCell16_gt118:'2022-12-31 16:55:51',
            dataCell17_gt118:'보완요청',
            dataCell18_gt118:'02-123-4567',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData118.push({
            num118:i+2,
            dataCell02_gt118:'16110001105',
            dataCell03_gt118:'20110504000',
            dataCell04_gt118:'11011127261',
            dataCell05_gt118:'이영수',
            dataCell06_gt118:'2022-12-08',
            dataCell07_gt118:'온토종합건설주식회사',
            dataCell08_gt118:'이영수',
            dataCell09_gt118:'52,000',
            dataCell10_gt118:'52,000',
            dataCell11_gt118:'',
            dataCell12_gt118:'2022-12-31',
            dataCell13_gt118:'신용카드',
            dataCell14_gt118:'<span class="cRed">결제</span>',
            dataCell15_gt118:'2022-12-31 15:55:51',
            dataCell16_gt118:'2022-12-31 16:55:51',
            dataCell17_gt118:'보완요청',
            dataCell18_gt118:'02-123-4567',
        });
    }

    for(var i= 0; i <= gridTableData118.length; i++)
    $('#gridTable118').jqGrid('addRowData',i + 1, gridTableData118[i]);


    /* 현황/통계 - 현황통계 - 등록취소 현황*/
    $('#gridTable119').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['취소년도','취소월','출력구분','합계','개인','법인'],
        colModel:[
            // {name:'num119',index:'num119', width: 70, align: 'center'},
            {name:'dataCell01_gt119',index:'dataCell01_gt119', width: 265, align: 'center'},
            {name:'dataCell02_gt119',index:'dataCell02_gt119', width: 265, align: 'center'},
            {name:'dataCell03_gt119',index:'dataCell03_gt119', width: 265, align: 'center'},
            {name:'dataCell04_gt119',index:'dataCell04_gt119', width: 265, align: 'center'},
            {name:'dataCell05_gt119',index:'dataCell05_gt119', width: 265, align: 'center'},
            {name:'dataCell06_gt119',index:'dataCell06_gt119', width: 265, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData119 = [ 
        {
            // num119:'1',
            dataCell01_gt119:'2022',
            dataCell02_gt119:'12',
            dataCell03_gt119:'경상북도',
            dataCell04_gt119:'2',
            dataCell05_gt119:'0',
            dataCell06_gt119:'2',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData119.push({
            // num119:i+2,
            dataCell01_gt119:'2022',
            dataCell02_gt119:'12',
            dataCell03_gt119:'경상북도',
            dataCell04_gt119:'2',
            dataCell05_gt119:'0',
            dataCell06_gt119:'2',
        });
    }

    for(var i= 0; i <= gridTableData119.length; i++)
    $('#gridTable119').jqGrid('addRowData',i + 1, gridTableData119[i]);


    /* 현황통계 - 개발업통계 - 자본금현황 */
    $('#gridTable120').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['년도','월','구분','합계','~1천만원','~1천만원 <br /> ~5천만원','~5천만원 <br /> ~1억원','1억원~'],
        colModel:[
            // {name:'num94',index:'num94', width: 70, align: 'center'},
            {name:'dataCell02_gt120',index:'dataCell02_gt120', width: 270, align: 'center'},
            {name:'dataCell03_gt120',index:'dataCell03_gt120', width: 270, align: 'center'},
            {name:'dataCell04_gt120',index:'dataCell04_gt120', width: 300, align: 'center'},
            {name:'dataCell05_gt120',index:'dataCell05_gt120', width: 150, align: 'center'},
            {name:'dataCell06_gt120',index:'dataCell06_gt120', width: 150, align: 'center'},
            {name:'dataCell07_gt120',index:'dataCell07_gt120', width: 150, align: 'center'},
            {name:'dataCell08_gt120',index:'dataCell08_gt120', width: 150, align: 'center'},
            {name:'dataCell09_gt120',index:'dataCell09_gt120', width: 150, align: 'center'},
        ],
        hoverrows: false,
        // multiselect: true,
        // multiselectWidth: 52,
        autowidth:true,
        shrinkToFit : false,
        cmTemplate:{
            resizable: true
        }
    });
    
    var gridTableData120 = [ 
        {
            dataCell02_gt120:'총합계',
            dataCell03_gt120:'소계',
            dataCell04_gt120:'서울특별시',
            dataCell05_gt120:'1',
            dataCell06_gt120:'1',
            dataCell07_gt120:'0',
            dataCell08_gt120:'3',
            dataCell09_gt120:'3',
        },
    ];

    for (var i = 0; i < 13; i++) {
        gridTableData120.push({
            dataCell02_gt120:'2022',
            dataCell03_gt120:'06',
            dataCell04_gt120:'서울특별시',
            dataCell05_gt120:'1',
            dataCell06_gt120:'1',
            dataCell07_gt120:'0',
            dataCell08_gt120:'3',
            dataCell09_gt120:'3',
        });
    }

    for(var i= 0; i <= gridTableData120.length; i++)
    $('#gridTable120').jqGrid('addRowData',i + 1, gridTableData120[i]);
    /*---------*/

    /* 현황통계 - 개발업통계 - 전문인력 보유현황 > 인력구분별 */
    $('#gridTable121').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['년도','월','인력구분','인력등급','전국','서울','부산','대구','인천','광주','대전','울산','세종','경기','강원','충북','충남','전북','전남','경북','경남','제주'],
        colModel:[
            // {name:'num94',index:'num94', width: 70, align: 'center'},
            {name:'dataCell02_gt121',index:'dataCell02_gt121', width: 150, align: 'center'},
            {name:'dataCell03_gt121',index:'dataCell03_gt121', width: 150, align: 'center'},
            {name:'dataCell04_gt121',index:'dataCell04_gt121', width: 200, align: 'center'},
            {name:'dataCell05_gt121',index:'dataCell05_gt121', width: 200, align: 'center'},
            {name:'dataCell06_gt121',index:'dataCell06_gt121', width: 100, align: 'center'},
            {name:'dataCell07_gt121',index:'dataCell07_gt121', width: 100, align: 'center'},
            {name:'dataCell08_gt121',index:'dataCell08_gt121', width: 100, align: 'center'},
            {name:'dataCell09_gt121',index:'dataCell09_gt121', width: 100, align: 'center'},
            {name:'dataCell10_gt121',index:'dataCell10_gt121', width: 100, align: 'center'},
            {name:'dataCell11_gt121',index:'dataCell11_gt121', width: 100, align: 'center'},
            {name:'dataCell12_gt121',index:'dataCell12_gt121', width: 100, align: 'center'},
            {name:'dataCell13_gt121',index:'dataCell13_gt121', width: 100, align: 'center'},
            {name:'dataCell14_gt121',index:'dataCell14_gt121', width: 100, align: 'center'},
            {name:'dataCell15_gt121',index:'dataCell15_gt121', width: 100, align: 'center'},
            {name:'dataCell16_gt121',index:'dataCell16_gt121', width: 100, align: 'center'},
            {name:'dataCell17_gt121',index:'dataCell17_gt121', width: 100, align: 'center'},
            {name:'dataCell18_gt121',index:'dataCell18_gt121', width: 100, align: 'center'},
            {name:'dataCell19_gt121',index:'dataCell19_gt121', width: 100, align: 'center'},
            {name:'dataCell20_gt121',index:'dataCell20_gt121', width: 100, align: 'center'},
            {name:'dataCell21_gt121',index:'dataCell21_gt121', width: 100, align: 'center'},
            {name:'dataCell22_gt121',index:'dataCell22_gt121', width: 100, align: 'center'},
            {name:'dataCell23_gt121',index:'dataCell23_gt121', width: 100, align: 'center'},
        ],
        hoverrows: false,
        // multiselect: true,
        // multiselectWidth: 52,
        autowidth:true,
        shrinkToFit : false,
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData121 = [ 
        {
            dataCell02_gt121:'2010',
            dataCell03_gt121:'02',
            dataCell04_gt121:'소계',
            dataCell05_gt121:'소계',
            dataCell06_gt121:'1',
            dataCell07_gt121:'0',
            dataCell08_gt121:'0',
            dataCell09_gt121:'0',
            dataCell10_gt121:'0',
            dataCell11_gt121:'0',
            dataCell12_gt121:'0',
            dataCell13_gt121:'0',
            dataCell14_gt121:'0',
            dataCell15_gt121:'0',
            dataCell16_gt121:'0',
            dataCell17_gt121:'0',
            dataCell18_gt121:'0',
            dataCell19_gt121:'1',
            dataCell20_gt121:'0',
            dataCell21_gt121:'0',
            dataCell22_gt121:'0',
            dataCell23_gt121:'0',
        },
    ];

    for (var i = 0; i < 13; i++) {
        gridTableData121.push({
            dataCell02_gt121:'2010',
            dataCell03_gt121:'02',
            dataCell04_gt121:'소계',
            dataCell05_gt121:'소계',
            dataCell06_gt121:'1',
            dataCell07_gt121:'0',
            dataCell08_gt121:'0',
            dataCell09_gt121:'0',
            dataCell10_gt121:'0',
            dataCell11_gt121:'0',
            dataCell12_gt121:'0',
            dataCell13_gt121:'0',
            dataCell14_gt121:'0',
            dataCell15_gt121:'0',
            dataCell16_gt121:'0',
            dataCell17_gt121:'0',
            dataCell18_gt121:'0',
            dataCell19_gt121:'1',
            dataCell20_gt121:'0',
            dataCell21_gt121:'0',
            dataCell22_gt121:'0',
            dataCell23_gt121:'0',
        });
    }

    for(var i= 0; i <= gridTableData121.length; i++)
    $('#gridTable121').jqGrid('addRowData',i + 1, gridTableData121[i]);
    /*---------*/

    /* 현황통계 - 개발업통계 - 전문인력 보유현황 > 업체별 */
    $('#gridTable122').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['년도','월','시도','시군구','상호','해당없음','초급','중급','고급','특급'],
        colModel:[
            // {name:'num94',index:'num94', width: 70, align: 'center'},
            {name:'dataCell02_gt122',index:'dataCell02_gt122', width: 150, align: 'center'},
            {name:'dataCell03_gt122',index:'dataCell03_gt122', width: 150, align: 'center'},
            {name:'dataCell04_gt122',index:'dataCell04_gt122', width: 200, align: 'center'},
            {name:'dataCell05_gt122',index:'dataCell05_gt122', width: 200, align: 'center'},
            {name:'dataCell06_gt122',index:'dataCell06_gt122', width: 300, align: 'center'},
            {name:'dataCell07_gt122',index:'dataCell07_gt122', width: 120, align: 'center'},
            {name:'dataCell08_gt122',index:'dataCell08_gt122', width: 120, align: 'center'},
            {name:'dataCell09_gt122',index:'dataCell09_gt122', width: 120, align: 'center'},
            {name:'dataCell10_gt122',index:'dataCell10_gt122', width: 120, align: 'center'},
            {name:'dataCell11_gt122',index:'dataCell11_gt122', width: 120, align: 'center'},
        ],
        hoverrows: false,
        // multiselect: true,
        // multiselectWidth: 52,
        autowidth:true,
        shrinkToFit : false,
        cmTemplate:{
            resizable: true
        }
    });
    
    var gridTableData122 = [ 
        {
            dataCell02_gt122:'2008',
            dataCell03_gt122:'08',
            dataCell04_gt122:'경상북도',
            dataCell05_gt122:'김천시',
            dataCell06_gt122:'(주)토투개발',
            dataCell07_gt122:'1',
            dataCell08_gt122:'0',
            dataCell09_gt122:'0',
            dataCell10_gt122:'0',
            dataCell11_gt122:'0',
        },
    ];

    for (var i = 0; i < 13; i++) {
        gridTableData122.push({
            dataCell02_gt122:'2008',
            dataCell03_gt122:'08',
            dataCell04_gt122:'경상북도',
            dataCell05_gt122:'김천시',
            dataCell06_gt122:'(주)토투개발',
            dataCell07_gt122:'1',
            dataCell08_gt122:'0',
            dataCell09_gt122:'0',
            dataCell10_gt122:'0',
            dataCell11_gt122:'0',
        });
    }

    for(var i= 0; i <= gridTableData122.length; i++)
    $('#gridTable122').jqGrid('addRowData',i + 1, gridTableData122[i]);
    /*---------*/

    /* 현황통계 - 개발업통계 - 년도별/지역별 통계 */
    $('#gridTable123').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['사업년도','부동산등록번호','업체명','사업건수','사업비','분양매출','임대매출','사업면적(부지)','사업면적(시설)'],
        colModel:[
            // {name:'num94',index:'num94', width: 70, align: 'center'},
            {name:'dataCell02_gt123',index:'dataCell02_gt123', width: 150, align: 'center'},
            {name:'dataCell03_gt123',index:'dataCell03_gt123', width: 200, align: 'center'},
            {name:'dataCell04_gt123',index:'dataCell04_gt123', width: 250, align: 'center'},
            {name:'dataCell05_gt123',index:'dataCell05_gt123', width: 150, align: 'center'},
            {name:'dataCell06_gt123',index:'dataCell06_gt123', width: 200, align: 'center'},
            {name:'dataCell07_gt123',index:'dataCell07_gt123', width: 200, align: 'center'},
            {name:'dataCell08_gt123',index:'dataCell08_gt123', width: 200, align: 'center'},
            {name:'dataCell09_gt123',index:'dataCell09_gt123', width: 200, align: 'center'},
            {name:'dataCell10_gt123',index:'dataCell10_gt123', width: 200, align: 'center'},
        ],
        hoverrows: false,
        // multiselect: true,
        // multiselectWidth: 52,
        autowidth:true,
        shrinkToFit : false,
        cmTemplate:{
            resizable: true
        }
    });
    
    var gridTableData123 = [ 
        {
            dataCell02_gt123:'2020',
            dataCell03_gt123:'경북090999',
            dataCell04_gt123:'(주)홍화',
            dataCell05_gt123:'1',
            dataCell06_gt123:'2,019,435',
            dataCell07_gt123:'1,234,124',
            dataCell08_gt123:'2,019,435',
            dataCell09_gt123:'2,019',
            dataCell10_gt123:'456,341',
        },
    ];

    for (var i = 0; i < 13; i++) {
        gridTableData123.push({
            dataCell02_gt123:'2020',
            dataCell03_gt123:'경북090999',
            dataCell04_gt123:'(주)홍화',
            dataCell05_gt123:'1',
            dataCell06_gt123:'2,019,435',
            dataCell07_gt123:'1,234,124',
            dataCell08_gt123:'2,019,435',
            dataCell09_gt123:'2,019',
            dataCell10_gt123:'456,341',
        });
    }

    for(var i= 0; i <= gridTableData123.length; i++)
    $('#gridTable123').jqGrid('addRowData',i + 1, gridTableData123[i]);
    /*---------*/

    /* 현황통계 - 개발업통계 - 년도별/용도별 통계 */
    $('#gridTable124').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['사업년도','시설용도','사업건수','사업비','분양매출','임대매출','사업면적(부지)','사업면적(시설)'],
        colModel:[
            // {name:'num94',index:'num94', width: 70, align: 'center'},
            {name:'dataCell02_gt124',index:'dataCell02_gt124', width: 150, align: 'center'},
            {name:'dataCell03_gt124',index:'dataCell03_gt124', width: 300, align: 'center'},
            {name:'dataCell04_gt124',index:'dataCell04_gt124', width: 150, align: 'center'},
            {name:'dataCell05_gt124',index:'dataCell05_gt124', width: 200, align: 'center'},
            {name:'dataCell06_gt124',index:'dataCell06_gt124', width: 200, align: 'center'},
            {name:'dataCell07_gt124',index:'dataCell07_gt124', width: 200, align: 'center'},
            {name:'dataCell08_gt124',index:'dataCell08_gt124', width: 200, align: 'center'},
            {name:'dataCell09_gt124',index:'dataCell09_gt124', width: 200, align: 'center'},
        ],
        hoverrows: false,
        // multiselect: true,
        // multiselectWidth: 52,
        autowidth:true,
        shrinkToFit : false,
        cmTemplate:{
            resizable: true
        }
    });
    
    var gridTableData124 = [ 
        {
            dataCell02_gt124:'2020',
            dataCell03_gt124:'근린생활시설',
            dataCell04_gt124:'1',
            dataCell05_gt124:'4,082,517',
            dataCell06_gt124:'4,057,397',
            dataCell07_gt124:'4,221,419',
            dataCell08_gt124:'23,412',
            dataCell09_gt124:'916,081',
        },
    ];

    for (var i = 0; i < 13; i++) {
        gridTableData124.push({
            dataCell02_gt124:'2020',
            dataCell03_gt124:'근린생활시설',
            dataCell04_gt124:'1',
            dataCell05_gt124:'4,082,517',
            dataCell06_gt124:'4,057,397',
            dataCell07_gt124:'4,221,419',
            dataCell08_gt124:'23,412',
            dataCell09_gt124:'916,081',
        });
    }

    for(var i= 0; i <= gridTableData124.length; i++)
    $('#gridTable124').jqGrid('addRowData',i + 1, gridTableData124[i]);
    /*---------*/


    /* 현황통계 - 개발업통계 - 등록업체 실적순위 */
    $('#gridTable125').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순위','부동산등록번호','업체명','사업건수','분양매출','임대매출','총 매출','사업면적(부지)','사업면적(시설)','총 사업면적'],
        colModel:[
            // {name:'num94',index:'num94', width: 70, align: 'center'},
            {name:'dataCell02_gt125',index:'dataCell02_gt125', width: 130, align: 'center'},
            {name:'dataCell03_gt125',index:'dataCell03_gt125', width: 200, align: 'center'},
            {name:'dataCell04_gt125',index:'dataCell04_gt125', width: 250, align: 'center'},
            {name:'dataCell05_gt125',index:'dataCell05_gt125', width: 130, align: 'center'},
            {name:'dataCell06_gt125',index:'dataCell06_gt125', width: 200, align: 'center'},
            {name:'dataCell07_gt125',index:'dataCell07_gt125', width: 200, align: 'center'},
            {name:'dataCell08_gt125',index:'dataCell08_gt125', width: 200, align: 'center'},
            {name:'dataCell09_gt125',index:'dataCell09_gt125', width: 200, align: 'center'},
            {name:'dataCell10_gt125',index:'dataCell10_gt125', width: 200, align: 'center'},
            {name:'dataCell11_gt125',index:'dataCell11_gt125', width: 200, align: 'center'},
        ],
        hoverrows: false,
        // multiselect: true,
        // multiselectWidth: 52,
        autowidth:true,
        shrinkToFit : false,
        cmTemplate:{
            resizable: true
        }
    });
    
    var gridTableData125 = [ 
        {
            dataCell02_gt125:'1',
            dataCell03_gt125:'경북150008',
            dataCell04_gt125:'(주)우리텍',
            dataCell05_gt125:'1',
            dataCell06_gt125:'4,057,397',
            dataCell07_gt125:'4,221,419',
            dataCell08_gt125:'8,215,458',
            dataCell09_gt125:'2,019',
            dataCell10_gt125:'456,341',
            dataCell11_gt125:'456,341',
        },
    ];

    for (var i = 0; i < 13; i++) {
        gridTableData125.push({
            dataCell02_gt125:'1',
            dataCell03_gt125:'경북150008',
            dataCell04_gt125:'(주)우리텍',
            dataCell05_gt125:'1',
            dataCell06_gt125:'4,057,397',
            dataCell07_gt125:'4,221,419',
            dataCell08_gt125:'8,215,458',
            dataCell09_gt125:'2,019',
            dataCell10_gt125:'456,341',
            dataCell11_gt125:'456,341',
        });
    }

    for(var i= 0; i <= gridTableData125.length; i++)
    $('#gridTable125').jqGrid('addRowData',i + 1, gridTableData125[i]);
    /*---------*/

    /* 현황통계 - 개발업통계 - 등록업체 실적순위 */
    $('#gridTable126').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순위','부동산등록번호','업체명','법인구분','소재지','자본금','출자금액','출자비율'],
        colModel:[
            // {name:'num94',index:'num94', width: 70, align: 'center'},
            {name:'dataCell02_gt126',index:'dataCell02_gt126', width: 130, align: 'center'},
            {name:'dataCell03_gt126',index:'dataCell03_gt126', width: 200, align: 'center'},
            {name:'dataCell04_gt126',index:'dataCell04_gt126', width: 250, align: 'center'},
            {name:'dataCell05_gt126',index:'dataCell05_gt126', width: 150, align: 'center'},
            {name:'dataCell06_gt126',index:'dataCell06_gt126', width: 450, align: 'center'},
            {name:'dataCell07_gt126',index:'dataCell07_gt126', width: 250, align: 'center'},
            {name:'dataCell08_gt126',index:'dataCell08_gt126', width: 200, align: 'center'},
            {name:'dataCell09_gt126',index:'dataCell09_gt126', width: 200, align: 'center'},
        ],
        hoverrows: false,
        // multiselect: true,
        // multiselectWidth: 52,
        autowidth:true,
        shrinkToFit : false,
        cmTemplate:{
            resizable: true
        }
    });
    
    var gridTableData126 = [ 
        {
            dataCell02_gt126:'1',
            dataCell03_gt126:'경북150008',
            dataCell04_gt126:'(주)우리텍',
            dataCell05_gt126:'일반법인',
            dataCell06_gt126:'경기도 안양시 만안구 시민대로 401, 대륭테크노타운 15차 9층 912호',
            dataCell07_gt126:'99,999,999,999,999',
            dataCell08_gt126:'0',
            dataCell09_gt126:'0',
        },
    ];

    for (var i = 0; i < 13; i++) {
        gridTableData126.push({
            dataCell02_gt126:'1',
            dataCell03_gt126:'경북150008',
            dataCell04_gt126:'(주)우리텍',
            dataCell05_gt126:'일반법인',
            dataCell06_gt126:'경기도 안양시 만안구 시민대로 401, 대륭테크노타운 15차 9층 912호',
            dataCell07_gt126:'99,999,999,999,999',
            dataCell08_gt126:'0',
            dataCell09_gt126:'0',
        });
    }

    for(var i= 0; i <= gridTableData126.length; i++)
    $('#gridTable126').jqGrid('addRowData',i + 1, gridTableData126[i]);
    /*---------*/

    /* 현황통계 - 개발업통계 - 위탁업무 통계 */
    $('#gridTable127').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['시도','등록신고','기재사항변경 신고','등록요건변경 신고','양도 합병 상속 신고','합계'],
        colModel:[
            // {name:'num94',index:'num94', width: 70, align: 'center'},
            {name:'dataCell02_gt127',index:'dataCell02_gt127', width: 288, align: 'center'},
            {name:'dataCell03_gt127',index:'dataCell03_gt127', width: 300, align: 'center'},
            {name:'dataCell04_gt127',index:'dataCell04_gt127', width: 250, align: 'center'},
            {name:'dataCell05_gt127',index:'dataCell05_gt127', width: 250, align: 'center'},
            {name:'dataCell06_gt127',index:'dataCell06_gt127', width: 250, align: 'center'},
            {name:'dataCell07_gt127',index:'dataCell07_gt127', width: 250, align: 'center'},
        ],
        hoverrows: false,
        // multiselect: true,
        // multiselectWidth: 52,
        autowidth:true,
        shrinkToFit : false,
        cmTemplate:{
            resizable: true
        }
    });
    
    var gridTableData127 = [ 
        {
            dataCell02_gt127:'서울특별시',
            dataCell03_gt127:'3',
            dataCell04_gt127:'0',
            dataCell05_gt127:'0',
            dataCell06_gt127:'0',
            dataCell07_gt127:'3',
        },
    ];

    for (var i = 0; i < 13; i++) {
        gridTableData127.push({
            dataCell02_gt127:'서울특별시',
            dataCell03_gt127:'3',
            dataCell04_gt127:'0',
            dataCell05_gt127:'0',
            dataCell06_gt127:'0',
            dataCell07_gt127:'3',
        });
    }

    for(var i= 0; i <= gridTableData127.length; i++)
    $('#gridTable127').jqGrid('addRowData',i + 1, gridTableData127[i]);
    /*---------*/

    /* 현황통계 - 개발업통계 - 부정행위 통계 */
    $('#gridTable128').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['년도','월','시도','부정행위 건수'],
        colModel:[
            // {name:'num94',index:'num94', width: 70, align: 'center'},
            {name:'dataCell02_gt128',index:'dataCell02_gt128', width: 397, align: 'center'},
            {name:'dataCell03_gt128',index:'dataCell03_gt128', width: 397, align: 'center'},
            {name:'dataCell04_gt128',index:'dataCell04_gt128', width: 397, align: 'center'},
            {name:'dataCell05_gt128',index:'dataCell05_gt128', width: 397, align: 'center'},
        ],
        hoverrows: false,
        // multiselect: true,
        // multiselectWidth: 52,
        autowidth:true,
        shrinkToFit : false,
        cmTemplate:{
            resizable: true
        }
    });
    
    var gridTableData128 = [ 
        {
            dataCell02_gt128:'2022',
            dataCell03_gt128:'06',
            dataCell04_gt128:'경상북도',
            dataCell05_gt128:'1',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData128.push({
            dataCell02_gt128:'2022',
            dataCell03_gt128:'06',
            dataCell04_gt128:'경상북도',
            dataCell05_gt128:'1',
        });
    }

    for(var i= 0; i <= gridTableData128.length; i++)
    $('#gridTable128').jqGrid('addRowData',i + 1, gridTableData128[i]);
    /*---------*
  

    /* 현황/통계 - 현황통계 - 등록말소 현황 */
    $('#gridTable130').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['말소년','말소월','말소건수','합계','개인','법인'],
        colModel:[
            //{name:'num130',index:'num130', width: 60, align: 'center'},
            {name:'dataCell01_gt130',index:'dataCell01_gt130', width: 232, align: 'center'},
            {name:'dataCell02_gt130',index:'dataCell02_gt130', width: 230, align: 'center'},
            {name:'dataCell03_gt130',index:'dataCell03_gt130', width: 280, align: 'center'},
            {name:'dataCell04_gt130',index:'dataCell04_gt130', width: 280, align: 'center'},
            {name:'dataCell05_gt130',index:'dataCell05_gt130', width: 280, align: 'center'},
            {name:'dataCell06_gt130',index:'dataCell06_gt130', width: 280, align: 'center'},
        ],
        hoverrows: false,
        autowidth:true, 
        shrinkToFit : false, 
        cmTemplate: {
            resizable: true
        }
    });
    
    var gridTableData130 = [ 
        {
            //num130:'1',
            dataCell01_gt130:'',
            dataCell02_gt130:'소계',
            dataCell03_gt130:'',
            dataCell04_gt130:'5',
            dataCell05_gt130:'0',
            dataCell06_gt130:'5',
        },
        {
            //num130:'1',
            dataCell01_gt130:'',
            dataCell02_gt130:'',
            dataCell03_gt130:'소계',
            dataCell04_gt130:'5',
            dataCell05_gt130:'0',
            dataCell06_gt130:'5',
        },
        {
            //num130:'1',
            dataCell01_gt130:'',
            dataCell02_gt130:'',
            dataCell03_gt130:'경상북도',
            dataCell04_gt130:'5',
            dataCell05_gt130:'0',
            dataCell06_gt130:'5',
        },
        {
            //num130:'1',
            dataCell01_gt130:'총합계',
            dataCell02_gt130:'',
            dataCell03_gt130:'',
            dataCell04_gt130:'54',
            dataCell05_gt130:'0',
            dataCell06_gt130:'54',
        },
        {
            //num130:'1',
            dataCell01_gt130:'2022',
            dataCell02_gt130:'소계',
            dataCell03_gt130:'',
            dataCell04_gt130:'1',
            dataCell05_gt130:'0',
            dataCell06_gt130:'1',
        },
        {
            //num130:'1',
            dataCell01_gt130:'2022',
            dataCell02_gt130:'03',
            dataCell03_gt130:'소계',
            dataCell04_gt130:'1',
            dataCell05_gt130:'0',
            dataCell06_gt130:'1',
        },
        {
            //num130:'1',
            dataCell01_gt130:'2022',
            dataCell02_gt130:'03',
            dataCell03_gt130:'경상북도',
            dataCell04_gt130:'1',
            dataCell05_gt130:'0',
            dataCell06_gt130:'1',
        },
        {
            //num130:'1',
            dataCell01_gt130:'2021',
            dataCell02_gt130:'소계',
            dataCell03_gt130:'',
            dataCell04_gt130:'1',
            dataCell05_gt130:'0',
            dataCell06_gt130:'1',
        },
        {
            //num130:'1',
            dataCell01_gt130:'2021',
            dataCell02_gt130:'03',
            dataCell03_gt130:'소계',
            dataCell04_gt130:'1',
            dataCell05_gt130:'0',
            dataCell06_gt130:'1',
        },
        {
            //num130:'1',
            dataCell01_gt130:'2021',
            dataCell02_gt130:'03',
            dataCell03_gt130:'경기도',
            dataCell04_gt130:'1',
            dataCell05_gt130:'0',
            dataCell06_gt130:'1',
        },
        {
            //num130:'1',
            dataCell01_gt130:'2020',
            dataCell02_gt130:'소계',
            dataCell03_gt130:'',
            dataCell04_gt130:'8',
            dataCell05_gt130:'0',
            dataCell06_gt130:'8',
        },
        {
            //num130:'1',
            dataCell01_gt130:'2020',
            dataCell02_gt130:'03',
            dataCell03_gt130:'경기도',
            dataCell04_gt130:'8',
            dataCell05_gt130:'0',
            dataCell06_gt130:'8',
        },
    ];

/*     for (var i = 0; i < 10; i++) {
        gridTableData130.push({
            num130:i+2,
            dataCell02_gt130:'경북100007',
            dataCell03_gt130:'계림건축사사무소',
            dataCell04_gt130:'서정영',
            dataCell05_gt130:'',
            dataCell06_gt130:'등록완료',
            dataCell07_gt130:'정상',
        });
    } */

    for(var i= 0; i <= gridTableData130.length; i++)
    $('#gridTable130').jqGrid('addRowData',i + 1, gridTableData130[i]);
  

    /* 현황/통계 - 현황통계 - 행정처분 현황*/
    $('#gridTable140').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['년도','월','구분','합계','시정조치','등록정지','영업취소'],
        colModel:[
            // {name:'num119',index:'num119', width: 70, align: 'center'},
            {name:'dataCell01_gt140',index:'dataCell01_gt140', width: 227, align: 'center'},
            {name:'dataCell02_gt140',index:'dataCell02_gt140', width: 227, align: 'center'},
            {name:'dataCell03_gt140',index:'dataCell03_gt140', width: 227, align: 'center'},
            {name:'dataCell04_gt140',index:'dataCell04_gt140', width: 227, align: 'center'},
            {name:'dataCell05_gt140',index:'dataCell05_gt140', width: 227, align: 'center'},
            {name:'dataCell06_gt140',index:'dataCell06_gt140', width: 227, align: 'center'},
            {name:'dataCell07_gt140',index:'dataCell07_gt140', width: 228, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData140 = [ 
        {
            // num119:'1',
            dataCell01_gt140:'2022',
            dataCell02_gt140:'12',
            dataCell03_gt140:'경상북도',
            dataCell04_gt140:'2',
            dataCell05_gt140:'0',
            dataCell06_gt140:'2',
            dataCell07_gt140:'5',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData140.push({
            // num140:i+2,
            dataCell01_gt140:'2022',
            dataCell02_gt140:'12',
            dataCell03_gt140:'경상북도',
            dataCell04_gt140:'2',
            dataCell05_gt140:'0',
            dataCell06_gt140:'2',
            dataCell07_gt140:'5',
        });
    }

    for(var i= 0; i <= gridTableData140.length; i++)
    $('#gridTable140').jqGrid('addRowData',i + 1, gridTableData140[i]);


    /* 현황/통계 - 현황통계 - 과태료처분 현황*/
    $('#gridTable141').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['년도','월','구분','합계','형벌~3년이하<br />벌금 ~5천만원 이하','형벌~2년이하<br />벌금 ~3천만원 이하','형벌~1년이하<br />벌금 ~1천만원 이하','과태료<br />~3천만원 이하','과태료<br />~1천만원 이하','과태료<br />~5백만원 이하'],
        colModel:[
            // {name:'num119',index:'num119', width: 70, align: 'center'},
            {name:'dataCell01_gt141',index:'dataCell01_gt141', width: 159, align: 'center'},
            {name:'dataCell02_gt141',index:'dataCell02_gt141', width: 159, align: 'center'},
            {name:'dataCell03_gt141',index:'dataCell03_gt141', width: 159, align: 'center'},
            {name:'dataCell04_gt141',index:'dataCell04_gt141', width: 159, align: 'center'},
            {name:'dataCell05_gt141',index:'dataCell05_gt141', width: 159, align: 'center'},
            {name:'dataCell06_gt141',index:'dataCell06_gt141', width: 159, align: 'center'},
            {name:'dataCell07_gt141',index:'dataCell07_gt141', width: 159, align: 'center'},
            {name:'dataCell08_gt141',index:'dataCell08_gt141', width: 159, align: 'center'},
            {name:'dataCell09_gt141',index:'dataCell09_gt141', width: 159, align: 'center'},
            {name:'dataCell10_gt141',index:'dataCell10_gt141', width: 159, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData141 = [ 
        {
            // num119:'1',
            dataCell01_gt141:'2022',
            dataCell02_gt141:'12',
            dataCell03_gt141:'경상북도',
            dataCell04_gt141:'2',
            dataCell05_gt141:'0',
            dataCell06_gt141:'2',
            dataCell07_gt141:'5',
            dataCell08_gt141:'6',
            dataCell09_gt141:'7',
            dataCell10_gt141:'8',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData141.push({
            // num141:i+2,
            dataCell01_gt141:'2022',
            dataCell02_gt141:'12',
            dataCell03_gt141:'경상북도',
            dataCell04_gt141:'2',
            dataCell05_gt141:'0',
            dataCell06_gt141:'2',
            dataCell07_gt141:'5',
            dataCell08_gt141:'6',
            dataCell09_gt141:'7',
            dataCell10_gt141:'8',
        });
    }

    for(var i= 0; i <= gridTableData141.length; i++)
    $('#gridTable141').jqGrid('addRowData',i + 1, gridTableData141[i]);


    /* 현황/통계 - 현황통계 - 상속 현황*/
    $('#gridTable142').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['년도','월','시도','합계','개인','법인'],
        colModel:[
            // {name:'num119',index:'num119', width: 70, align: 'center'},
            {name:'dataCell01_gt142',index:'dataCell01_gt142', width: 265, align: 'center'},
            {name:'dataCell02_gt142',index:'dataCell02_gt142', width: 265, align: 'center'},
            {name:'dataCell03_gt142',index:'dataCell03_gt142', width: 265, align: 'center'},
            {name:'dataCell04_gt142',index:'dataCell04_gt142', width: 265, align: 'center'},
            {name:'dataCell05_gt142',index:'dataCell05_gt142', width: 265, align: 'center'},
            {name:'dataCell06_gt142',index:'dataCell06_gt142', width: 265, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData142 = [ 
        {
            // num119:'1',
            dataCell01_gt142:'2022',
            dataCell02_gt142:'12',
            dataCell03_gt142:'경상북도',
            dataCell04_gt142:'2',
            dataCell05_gt142:'0',
            dataCell06_gt142:'2',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData142.push({
            // num141:i+2,
            dataCell01_gt142:'2022',
            dataCell02_gt142:'12',
            dataCell03_gt142:'경상북도',
            dataCell04_gt142:'2',
            dataCell05_gt142:'0',
            dataCell06_gt142:'2',
        });
    }

    for(var i= 0; i <= gridTableData142.length; i++)
    $('#gridTable142').jqGrid('addRowData',i + 1, gridTableData142[i]);


    /* 현황/통계 - 현황통계 - 양도 현황*/
    $('#gridTable143').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['년도','월','시도','합계','개인','법인'],
        colModel:[
            // {name:'num119',index:'num119', width: 70, align: 'center'},
            {name:'dataCell01_gt143',index:'dataCell01_gt143', width: 265, align: 'center'},
            {name:'dataCell02_gt143',index:'dataCell02_gt143', width: 265, align: 'center'},
            {name:'dataCell03_gt143',index:'dataCell03_gt143', width: 265, align: 'center'},
            {name:'dataCell04_gt143',index:'dataCell04_gt143', width: 265, align: 'center'},
            {name:'dataCell05_gt143',index:'dataCell05_gt143', width: 265, align: 'center'},
            {name:'dataCell06_gt143',index:'dataCell06_gt143', width: 265, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData143 = [ 
        {
            // num119:'1',
            dataCell01_gt143:'2022',
            dataCell02_gt143:'12',
            dataCell03_gt143:'경상북도',
            dataCell04_gt143:'2',
            dataCell05_gt143:'0',
            dataCell06_gt143:'2',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData143.push({
            // num141:i+2,
            dataCell01_gt143:'2022',
            dataCell02_gt143:'12',
            dataCell03_gt143:'경상북도',
            dataCell04_gt143:'2',
            dataCell05_gt143:'0',
            dataCell06_gt143:'2',
        });
    }

    for(var i= 0; i <= gridTableData143.length; i++)
    $('#gridTable143').jqGrid('addRowData',i + 1, gridTableData143[i]);


    /* 현황/통계 - 현황통계 - 합병 현황*/
    $('#gridTable144').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['년도','월','시도','합계','개인','법인'],
        colModel:[
            // {name:'num119',index:'num119', width: 70, align: 'center'},
            {name:'dataCell01_gt144',index:'dataCell01_gt144', width: 265, align: 'center'},
            {name:'dataCell02_gt144',index:'dataCell02_gt144', width: 265, align: 'center'},
            {name:'dataCell03_gt144',index:'dataCell03_gt144', width: 265, align: 'center'},
            {name:'dataCell04_gt144',index:'dataCell04_gt144', width: 265, align: 'center'},
            {name:'dataCell05_gt144',index:'dataCell05_gt144', width: 265, align: 'center'},
            {name:'dataCell06_gt144',index:'dataCell06_gt144', width: 265, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData144 = [ 
        {
            // num119:'1',
            dataCell01_gt144:'2022',
            dataCell02_gt144:'12',
            dataCell03_gt144:'경상북도',
            dataCell04_gt144:'2',
            dataCell05_gt144:'0',
            dataCell06_gt144:'2',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData144.push({
            // num141:i+2,
            dataCell01_gt144:'2022',
            dataCell02_gt144:'12',
            dataCell03_gt144:'경상북도',
            dataCell04_gt144:'2',
            dataCell05_gt144:'0',
            dataCell06_gt144:'2',
        });
    }

    for(var i= 0; i <= gridTableData144.length; i++)
    $('#gridTable144').jqGrid('addRowData',i + 1, gridTableData144[i]);


    /* 현황/통계 - 현황통계 - 폐업 현황*/
    $('#gridTable145').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['년도','월','시도','합계','개인','법인'],
        colModel:[
            // {name:'num119',index:'num119', width: 70, align: 'center'},
            {name:'dataCell01_gt145',index:'dataCell01_gt145', width: 265, align: 'center'},
            {name:'dataCell02_gt145',index:'dataCell02_gt145', width: 265, align: 'center'},
            {name:'dataCell03_gt145',index:'dataCell03_gt145', width: 265, align: 'center'},
            {name:'dataCell04_gt145',index:'dataCell04_gt145', width: 265, align: 'center'},
            {name:'dataCell05_gt145',index:'dataCell05_gt145', width: 265, align: 'center'},
            {name:'dataCell06_gt145',index:'dataCell06_gt145', width: 265, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData145 = [ 
        {
            // num119:'1',
            dataCell01_gt145:'2022',
            dataCell02_gt145:'12',
            dataCell03_gt145:'경상북도',
            dataCell04_gt145:'2',
            dataCell05_gt145:'0',
            dataCell06_gt145:'2',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData145.push({
            // num141:i+2,
            dataCell01_gt145:'2022',
            dataCell02_gt145:'12',
            dataCell03_gt145:'경상북도',
            dataCell04_gt145:'2',
            dataCell05_gt145:'0',
            dataCell06_gt145:'2',
        });
    }

    for(var i= 0; i <= gridTableData145.length; i++)
    $('#gridTable145').jqGrid('addRowData',i + 1, gridTableData145[i]);


    /* 현황/통계 - 시계열 통계 - 사업실적현황(총괄)*/
    $('#gridTable146').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['사업년도','시도','사업건수','사업비(백만원)','분양매출(백만원)','임대매출(백만원)','사업면적(부지)','사업면적(시설)'],
        colModel:[
            // {name:'num119',index:'num119', width: 70, align: 'center'},
            {name:'dataCell01_gt146',index:'dataCell01_gt146', width: 120, align: 'center'},
            {name:'dataCell02_gt146',index:'dataCell02_gt146', width: 210, align: 'center'},
            {name:'dataCell03_gt146',index:'dataCell03_gt146', width: 210, align: 'center'},
            {name:'dataCell04_gt146',index:'dataCell04_gt146', width: 210, align: 'center'},
            {name:'dataCell05_gt146',index:'dataCell05_gt146', width: 210, align: 'center'},
            {name:'dataCell06_gt146',index:'dataCell06_gt146', width: 210, align: 'center'},
            {name:'dataCell07_gt146',index:'dataCell07_gt146', width: 210, align: 'center'},
            {name:'dataCell08_gt146',index:'dataCell08_gt146', width: 210, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData146 = [ 
        {
            // num119:'1',
            dataCell01_gt146:'2022',
            dataCell02_gt146:'년도별 합계',
            dataCell03_gt146:'31',
            dataCell04_gt146:'640,202',
            dataCell05_gt146:'303,527',
            dataCell06_gt146:'0',
            dataCell07_gt146:'290,870',
            dataCell08_gt146:'350,413.2',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData146.push({
            // num141:i+2,
            dataCell01_gt146:'2022',
            dataCell02_gt146:'년도별 합계',
            dataCell03_gt146:'31',
            dataCell04_gt146:'640,202',
            dataCell05_gt146:'303,527',
            dataCell06_gt146:'0',
            dataCell07_gt146:'290,870',
            dataCell08_gt146:'350,413.2',
        });
    }

    for(var i= 0; i <= gridTableData146.length; i++)
    $('#gridTable146').jqGrid('addRowData',i + 1, gridTableData146[i]);


    /* 현황/통계 - 시계열 통계 - 사업실적현황(총괄) - 부동산개발업 등록사업자 선택 팝업*/
    $('#gridTable147').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','부동산개발업<br />등록번호','상호','대표자','법인등록번호','등록상태','처리상태'],
        colModel:[
            {name:'num147',index:'num147', width: 70, align: 'center'},
            {name:'dataCell02_gt147',index:'dataCell02_gt147', width: 130, align: 'center'},
            {name:'dataCell03_gt147',index:'dataCell03_gt147', width: 268, align: 'center'},
            {name:'dataCell04_gt147',index:'dataCell04_gt147', width: 150, align: 'center'},
            {name:'dataCell05_gt147',index:'dataCell05_gt147', width: 150, align: 'center'},
            {name:'dataCell06_gt147',index:'dataCell06_gt147', width: 120, align: 'center'},
            {name:'dataCell07_gt147',index:'dataCell07_gt147', width: 120, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData147 = [ 
        {
            num147:'1',
            dataCell02_gt147:'경기1100247',
            dataCell03_gt147:'이도건설 주식회사',
            dataCell04_gt147:'송노봉',
            dataCell05_gt147:'110-123-112485',
            dataCell06_gt147:'등록완료',
            dataCell07_gt147:'정상',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData147.push({
            num147:i+2,
            dataCell02_gt147:'경기1100247',
            dataCell03_gt147:'이도건설 주식회사',
            dataCell04_gt147:'송노봉',
            dataCell05_gt147:'110-123-112485',
            dataCell06_gt147:'등록완료',
            dataCell07_gt147:'정상',
        });
    }

    for(var i= 0; i <= gridTableData147.length; i++)
    $('#gridTable147').jqGrid('addRowData',i + 1, gridTableData147[i]);


    /* 현황/통계 - 시계열 통계 - 사업실적현황(년도별)*/
    $('#gridTable148').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['사업년도','시도','출력구분','사업건수','사업비(백만원)','분양매출(백만원)','임대매출(백만원)','사업면적(부지)','사업면적(시설)'],
        colModel:[
            // {name:'num119',index:'num119', width: 70, align: 'center'},
            {name:'dataCell01_gt148',index:'dataCell01_gt148', width: 120, align: 'center'},
            {name:'dataCell02_gt148',index:'dataCell02_gt148', width: 184, align: 'center'},
            {name:'dataCell03_gt148',index:'dataCell03_gt148', width: 184, align: 'center'},
            {name:'dataCell04_gt148',index:'dataCell04_gt148', width: 184, align: 'center'},
            {name:'dataCell05_gt148',index:'dataCell05_gt148', width: 184, align: 'center'},
            {name:'dataCell06_gt148',index:'dataCell06_gt148', width: 184, align: 'center'},
            {name:'dataCell07_gt148',index:'dataCell07_gt148', width: 184, align: 'center'},
            {name:'dataCell08_gt148',index:'dataCell08_gt148', width: 183, align: 'center'},
            {name:'dataCell09_gt148',index:'dataCell09_gt148', width: 183, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData148 = [ 
        {
            // num119:'1',
            dataCell01_gt148:'2022',
            dataCell02_gt148:'년도별 합계',
            dataCell03_gt148:'시도별 합계',
            dataCell04_gt148:'90',
            dataCell05_gt148:'640,202',
            dataCell06_gt148:'303,527',
            dataCell07_gt148:'0',
            dataCell08_gt148:'290,870',
            dataCell09_gt148:'350,413.2',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData148.push({
            // num141:i+2,
            dataCell01_gt148:'2022',
            dataCell02_gt148:'년도별 합계',
            dataCell03_gt148:'시도별 합계',
            dataCell04_gt148:'90',
            dataCell05_gt148:'640,202',
            dataCell06_gt148:'303,527',
            dataCell07_gt148:'0',
            dataCell08_gt148:'290,870',
            dataCell09_gt148:'350,413.2',
        });
    }

    for(var i= 0; i <= gridTableData148.length; i++)
    $('#gridTable148').jqGrid('addRowData',i + 1, gridTableData148[i]);


    /* 현황/통계 - 시계열 통계 - 사업실적현황(년도별) - 부동산개발업 등록사업자 선택 팝업*/
    $('#gridTable149').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','부동산개발업<br />등록번호','상호','대표자','법인등록번호','등록상태','처리상태'],
        colModel:[
            {name:'num149',index:'num149', width: 70, align: 'center'},
            {name:'dataCell02_gt149',index:'dataCell02_gt149', width: 130, align: 'center'},
            {name:'dataCell03_gt149',index:'dataCell03_gt149', width: 268, align: 'center'},
            {name:'dataCell04_gt149',index:'dataCell04_gt149', width: 150, align: 'center'},
            {name:'dataCell05_gt149',index:'dataCell05_gt149', width: 150, align: 'center'},
            {name:'dataCell06_gt149',index:'dataCell06_gt149', width: 120, align: 'center'},
            {name:'dataCell07_gt149',index:'dataCell07_gt149', width: 120, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData149 = [ 
        {
            num149:'1',
            dataCell02_gt149:'경기1100247',
            dataCell03_gt149:'이도건설 주식회사',
            dataCell04_gt149:'송노봉',
            dataCell05_gt149:'110-123-112485',
            dataCell06_gt149:'등록완료',
            dataCell07_gt149:'정상',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData149.push({
            num149:i+2,
            dataCell02_gt149:'경기1100247',
            dataCell03_gt149:'이도건설 주식회사',
            dataCell04_gt149:'송노봉',
            dataCell05_gt149:'110-123-112485',
            dataCell06_gt149:'등록완료',
            dataCell07_gt149:'정상',
        });
    }

    for(var i= 0; i <= gridTableData149.length; i++)
    $('#gridTable149').jqGrid('addRowData',i + 1, gridTableData149[i]);


    /* 현황/통계 - 시계열 통계 - 사업실적현황(전년대비)*/
    $('#gridTable150').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['시도','출력구분','사업건수','사업비(백만원)','분양매출(백만원)','임대매출(백만원)','사업면적(부지)','사업면적(시설)','사업건수','사업비(백만원)','분양매출(백만원)','임대매출(백만원)','사업면적(부지)','사업면적(시설)'],
        colModel:[
            // {name:'num119',index:'num119', width: 70, align: 'center'},
            {name:'dataCell01_gt150',index:'dataCell01_gt150', width: 150, align: 'center'},
            {name:'dataCell02_gt150',index:'dataCell02_gt150', width: 150, align: 'center'},
            {name:'dataCell03_gt150',index:'dataCell03_gt150', width: 130, align: 'center'},
            {name:'dataCell04_gt150',index:'dataCell04_gt150', width: 130, align: 'center'},
            {name:'dataCell05_gt150',index:'dataCell05_gt150', width: 130, align: 'center'},
            {name:'dataCell06_gt150',index:'dataCell06_gt150', width: 130, align: 'center'},
            {name:'dataCell07_gt150',index:'dataCell07_gt150', width: 130, align: 'center'},
            {name:'dataCell08_gt150',index:'dataCell08_gt150', width: 130, align: 'center'},
            {name:'dataCell09_gt150',index:'dataCell09_gt150', width: 130, align: 'center'},
            {name:'dataCell10_gt150',index:'dataCell10_gt150', width: 130, align: 'center'},
            {name:'dataCell11_gt150',index:'dataCell11_gt150', width: 130, align: 'center'},
            {name:'dataCell12_gt150',index:'dataCell12_gt150', width: 130, align: 'center'},
            {name:'dataCell13_gt150',index:'dataCell13_gt150', width: 130, align: 'center'},
            {name:'dataCell14_gt150',index:'dataCell14_gt150', width: 130, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData150 = [ 
        {
            // num119:'1',
            dataCell01_gt150:'시도별 합계',
            dataCell02_gt150:'특수법인',
            dataCell03_gt150:'44',
            dataCell04_gt150:'288,278',
            dataCell05_gt150:'176,895',
            dataCell06_gt150:'0',
            dataCell07_gt150:'135,920',
            dataCell08_gt150:'146,565',
            dataCell09_gt150:'23',
            dataCell10_gt150:'176,787',
            dataCell11_gt150:'80,037',
            dataCell12_gt150:'0',
            dataCell13_gt150:'101,978',
            dataCell14_gt150:'93,381',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData150.push({
            // num141:i+2,
            dataCell01_gt150:'시도별 합계',
            dataCell02_gt150:'특수법인',
            dataCell03_gt150:'44',
            dataCell04_gt150:'288,278',
            dataCell05_gt150:'176,895',
            dataCell06_gt150:'0',
            dataCell07_gt150:'135,920',
            dataCell08_gt150:'146,565',
            dataCell09_gt150:'23',
            dataCell10_gt150:'176,787',
            dataCell11_gt150:'80,037',
            dataCell12_gt150:'0',
            dataCell13_gt150:'101,978',
            dataCell14_gt150:'93,381',
        });
    }

    for(var i= 0; i <= gridTableData150.length; i++)
    $('#gridTable150').jqGrid('addRowData',i + 1, gridTableData150[i]);

    // colspan
    $('#gridTable150').jqGrid('setGroupHeaders', {
        useColSpanStyle: true, 
        groupHeaders:[
            {startColumnName: 'dataCell03_gt150', numberOfColumns: 6, titleText: '사업년도(2021)'},
            {startColumnName: 'dataCell09_gt150', numberOfColumns: 6, titleText: '사업년도(2022)'},
        ]	
    });


    /* 현황/통계 - 시계열 통계 - 사업실적현황(전년대비) - 부동산개발업 등록사업자 선택 팝업*/
    $('#gridTable151').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','부동산개발업<br />등록번호','상호','대표자','법인등록번호','등록상태','처리상태'],
        colModel:[
            {name:'num151',index:'num151', width: 70, align: 'center'},
            {name:'dataCell02_gt151',index:'dataCell02_gt151', width: 130, align: 'center'},
            {name:'dataCell03_gt151',index:'dataCell03_gt151', width: 268, align: 'center'},
            {name:'dataCell04_gt151',index:'dataCell04_gt151', width: 150, align: 'center'},
            {name:'dataCell05_gt151',index:'dataCell05_gt151', width: 150, align: 'center'},
            {name:'dataCell06_gt151',index:'dataCell06_gt151', width: 120, align: 'center'},
            {name:'dataCell07_gt151',index:'dataCell07_gt151', width: 120, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData151 = [ 
        {
            num151:'1',
            dataCell02_gt151:'경기1100247',
            dataCell03_gt151:'이도건설 주식회사',
            dataCell04_gt151:'송노봉',
            dataCell05_gt151:'110-123-112485',
            dataCell06_gt151:'등록완료',
            dataCell07_gt151:'정상',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData151.push({
            num151:i+2,
            dataCell02_gt151:'경기1100247',
            dataCell03_gt151:'이도건설 주식회사',
            dataCell04_gt151:'송노봉',
            dataCell05_gt151:'110-123-112485',
            dataCell06_gt151:'등록완료',
            dataCell07_gt151:'정상',
        });
    }

    for(var i= 0; i <= gridTableData151.length; i++)
    $('#gridTable151').jqGrid('addRowData',i + 1, gridTableData151[i]);


    /* 현황/통계 - 시계열 통계 - 행정처분현황(년도별)*/
    $('#gridTable152').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['년도','구분','시정조치','등록정지','영업취소'],
        colModel:[
            // {name:'num119',index:'num119', width: 70, align: 'center'},
            {name:'dataCell01_gt152',index:'dataCell01_gt152', width: 318, align: 'center'},
            {name:'dataCell02_gt152',index:'dataCell02_gt152', width: 318, align: 'center'},
            {name:'dataCell03_gt152',index:'dataCell03_gt152', width: 318, align: 'center'},
            {name:'dataCell04_gt152',index:'dataCell04_gt152', width: 318, align: 'center'},
            {name:'dataCell05_gt152',index:'dataCell05_gt152', width: 318, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData152 = [ 
        {
            // num119:'1',
            dataCell01_gt152:'2022',
            dataCell02_gt152:'년도별 합계',
            dataCell03_gt152:'0',
            dataCell04_gt152:'9',
            dataCell05_gt152:'0',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData152.push({
            // num141:i+2,
            dataCell01_gt152:'2022',
            dataCell02_gt152:'년도별 합계',
            dataCell03_gt152:'0',
            dataCell04_gt152:'9',
            dataCell05_gt152:'0',
        });
    }

    for(var i= 0; i <= gridTableData152.length; i++)
    $('#gridTable152').jqGrid('addRowData',i + 1, gridTableData152[i]);


    /* 현황/통계 - 시계열 통계 - 전문인력증감현황(전년대비)*/
    $('#gridTable153').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['구분','해당없음','초급','중급','고급','특급','해당없음','초급','중급','고급','특급'],
        colModel:[
            // {name:'num119',index:'num119', width: 70, align: 'center'},
            {name:'dataCell01_gt153',index:'dataCell01_gt153', width: 150, align: 'center'},
            {name:'dataCell02_gt153',index:'dataCell02_gt153', width: 144, align: 'center'},
            {name:'dataCell03_gt153',index:'dataCell03_gt153', width: 144, align: 'center'},
            {name:'dataCell04_gt153',index:'dataCell04_gt153', width: 144, align: 'center'},
            {name:'dataCell05_gt153',index:'dataCell05_gt153', width: 144, align: 'center'},
            {name:'dataCell06_gt153',index:'dataCell06_gt153', width: 144, align: 'center'},
            {name:'dataCell07_gt153',index:'dataCell07_gt153', width: 144, align: 'center'},
            {name:'dataCell08_gt153',index:'dataCell08_gt153', width: 144, align: 'center'},
            {name:'dataCell09_gt153',index:'dataCell09_gt153', width: 144, align: 'center'},
            {name:'dataCell10_gt153',index:'dataCell10_gt153', width: 144, align: 'center'},
            {name:'dataCell11_gt153',index:'dataCell11_gt153', width: 144, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData153 = [ 
        {
            // num119:'1',
            dataCell01_gt153:'경상북도',
            dataCell02_gt153:'5',
            dataCell03_gt153:'0',
            dataCell04_gt153:'2',
            dataCell05_gt153:'5',
            dataCell06_gt153:'7',
            dataCell07_gt153:'0',
            dataCell08_gt153:'2',
            dataCell09_gt153:'9',
            dataCell10_gt153:'10',
            dataCell11_gt153:'11',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData153.push({
            // num141:i+2,
            dataCell01_gt153:'경상북도',
            dataCell02_gt153:'5',
            dataCell03_gt153:'0',
            dataCell04_gt153:'2',
            dataCell05_gt153:'5',
            dataCell06_gt153:'7',
            dataCell07_gt153:'0',
            dataCell08_gt153:'2',
            dataCell09_gt153:'9',
            dataCell10_gt153:'10',
            dataCell11_gt153:'11',
        });
    }

    for(var i= 0; i <= gridTableData153.length; i++)
    $('#gridTable153').jqGrid('addRowData',i + 1, gridTableData153[i]);

    // colspan
    $('#gridTable153').jqGrid('setGroupHeaders', {
        useColSpanStyle: true, 
        groupHeaders:[
            {startColumnName: 'dataCell02_gt153', numberOfColumns: 5, titleText: '사업년도(2021)'},
            {startColumnName: 'dataCell07_gt153', numberOfColumns: 5, titleText: '사업년도(2022)'},
        ]	
    });


    /* 현황/통계 - 시계열 통계 - 부동산개발업현황*/
    $('#gridTable154').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['시도구분','2016년02월말 기준','신규 등록 (A)','이전 등록 (B)','폐업 (C)','등록 취소 (D)','타시·도 이전(E) ','증감 계','2017년02월말 기준'],
        colModel:[
            // {name:'num119',index:'num119', width: 70, align: 'center'},
            {name:'dataCell01_gt154',index:'dataCell01_gt154', width: 150, align: 'center'},
            {name:'dataCell02_gt154',index:'dataCell02_gt154', width: 150, align: 'center'},
            {name:'dataCell03_gt154',index:'dataCell03_gt154', width: 190, align: 'center'},
            {name:'dataCell04_gt154',index:'dataCell04_gt154', width: 190, align: 'center'},
            {name:'dataCell05_gt154',index:'dataCell05_gt154', width: 190, align: 'center'},
            {name:'dataCell06_gt154',index:'dataCell06_gt154', width: 190, align: 'center'},
            {name:'dataCell07_gt154',index:'dataCell07_gt154', width: 190, align: 'center'},
            {name:'dataCell08_gt154',index:'dataCell08_gt154', width: 190, align: 'center'},
            {name:'dataCell09_gt154',index:'dataCell09_gt154', width: 150, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData154 = [ 
        {
            // num119:'1',
            dataCell01_gt154:'경상북도',
            dataCell02_gt154:'98',
            dataCell03_gt154:'8',
            dataCell04_gt154:'3',
            dataCell05_gt154:'5',
            dataCell06_gt154:'4',
            dataCell07_gt154:'1',
            dataCell08_gt154:'5',
            dataCell09_gt154:'109',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData154.push({
            // num141:i+2,
            dataCell01_gt154:'경상북도',
            dataCell02_gt154:'98',
            dataCell03_gt154:'8',
            dataCell04_gt154:'3',
            dataCell05_gt154:'5',
            dataCell06_gt154:'4',
            dataCell07_gt154:'1',
            dataCell08_gt154:'5',
            dataCell09_gt154:'109',
        });
    }

    for(var i= 0; i <= gridTableData154.length; i++)
    $('#gridTable154').jqGrid('addRowData',i + 1, gridTableData154[i]);

    // colspan
    $('#gridTable154').jqGrid('setGroupHeaders', {
        useColSpanStyle: true, 
        groupHeaders:[
            {startColumnName: 'dataCell03_gt154', numberOfColumns: 6, titleText: '사업년도(2021)'},
        ]	
    });


    /* 현황/통계 - 시계열 통계 - 재무정보 통계*/
    $('#gridTable155').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['회계년도','시도','자산','부채','자본금','매출액'],
        colModel:[
            // {name:'num119',index:'num119', width: 70, align: 'center'},
            {name:'dataCell01_gt155',index:'dataCell01_gt155', width: 150, align: 'center'},
            {name:'dataCell02_gt155',index:'dataCell02_gt155', width: 288, align: 'center'},
            {name:'dataCell03_gt155',index:'dataCell03_gt155', width: 288, align: 'center'},
            {name:'dataCell04_gt155',index:'dataCell04_gt155', width: 288, align: 'center'},
            {name:'dataCell05_gt155',index:'dataCell05_gt155', width: 288, align: 'center'},
            {name:'dataCell06_gt155',index:'dataCell06_gt155', width: 288, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData155 = [ 
        {
            // num119:'1',
            dataCell01_gt155:'2022',
            dataCell02_gt155:'경기도',
            dataCell03_gt155:'1,478',
            dataCell04_gt155:'122,100',
            dataCell05_gt155:'1,478',
            dataCell06_gt155:'1,478',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData155.push({
            // num141:i+2,
            dataCell01_gt155:'2022',
            dataCell02_gt155:'경기도',
            dataCell03_gt155:'1,478',
            dataCell04_gt155:'122,100',
            dataCell05_gt155:'1,478',
            dataCell06_gt155:'1,478',
        });
    }

    for(var i= 0; i <= gridTableData155.length; i++)
    $('#gridTable155').jqGrid('addRowData',i + 1, gridTableData155[i]);


    /* 현황/통계 - 시계열 통계 - 행정처분 통계*/
    $('#gridTable156').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['처분종료 년도','업체명','시정조치','등록취소','영업정지','벌칙(형벌)','벌칙(과태료)'],
        colModel:[
            // {name:'num119',index:'num119', width: 70, align: 'center'},
            {name:'dataCell01_gt156',index:'dataCell01_gt156', width: 150, align: 'center'},
            {name:'dataCell02_gt156',index:'dataCell02_gt156', width: 690, align: 'center'},
            {name:'dataCell03_gt156',index:'dataCell03_gt156', width: 150, align: 'center'},
            {name:'dataCell04_gt156',index:'dataCell04_gt156', width: 150, align: 'center'},
            {name:'dataCell05_gt156',index:'dataCell05_gt156', width: 150, align: 'center'},
            {name:'dataCell06_gt156',index:'dataCell06_gt156', width: 150, align: 'center'},
            {name:'dataCell07_gt156',index:'dataCell07_gt156', width: 150, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData156 = [ 
        {
            // num119:'1',
            dataCell01_gt156:'2022',
            dataCell02_gt156:'(주)서경종합기술단',
            dataCell03_gt156:'0',
            dataCell04_gt156:'0',
            dataCell05_gt156:'0',
            dataCell06_gt156:'0',
            dataCell07_gt156:'1',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData156.push({
            // num141:i+2,
            dataCell01_gt156:'2022',
            dataCell02_gt156:'(주)서경종합기술단',
            dataCell03_gt156:'0',
            dataCell04_gt156:'0',
            dataCell05_gt156:'0',
            dataCell06_gt156:'0',
            dataCell07_gt156:'1',
        });
    }

    for(var i= 0; i <= gridTableData156.length; i++)
    $('#gridTable156').jqGrid('addRowData',i + 1, gridTableData156[i]);


    /* 업무화면 - 도움말 - 업무별 커뮤니티 게시판*/
    $('#gridTable157').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['번호','제목','등록일'],
        colModel:[
            {name:'num157',index:'num157', width: 70, align: 'center'},
            {name:'dataCell02_gt157',index:'dataCell02_gt157', width: 543, align: 'center'},
            {name:'dataCell03_gt157',index:'dataCell03_gt157', width: 120, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData157 = [ 
        {
            num157:'1',
            dataCell02_gt157:'중개업 xx 정보 수정요청 중개업 xx 정보 수정요청 중개업 xx 정보 수정요청 중개업 xx 정보 수정요청 중개업 xx 정보 수정요청 중개업 xx 정보 수정요청',
            dataCell03_gt157:'2022-01-01',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData157.push({
            num157:i+2,
            dataCell02_gt157:'중개업 xx 정보 수정요청 중개업 xx 정보 수정요청 중개업 xx 정보 수정요청 중개업 xx 정보 수정요청 중개업 xx 정보 수정요청 중개업 xx 정보 수정요청',
            dataCell03_gt157:'2022-01-01',
        });
    }

    for(var i= 0; i <= gridTableData157.length; i++)
    $('#gridTable157').jqGrid('addRowData',i + 1, gridTableData157[i]);


    
    /* 서식출력 - 서식출력 - 부동산개발업 등록사업자 선택 팝업*/
    $('#gridTable158').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','부동산개발업<br />등록번호','상호','대표자','법인등록번호','등록상태','처리상태'],
        colModel:[
            {name:'num158',index:'num158', width: 70, align: 'center'},
            {name:'dataCell02_gt158',index:'dataCell02_gt158', width: 130, align: 'center'},
            {name:'dataCell03_gt158',index:'dataCell03_gt158', width: 288, align: 'center'},
            {name:'dataCell04_gt158',index:'dataCell04_gt158', width: 150, align: 'center'},
            {name:'dataCell05_gt158',index:'dataCell05_gt158', width: 150, align: 'center'},
            {name:'dataCell06_gt158',index:'dataCell06_gt158', width: 110, align: 'center'},
            {name:'dataCell07_gt158',index:'dataCell07_gt158', width: 110, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData158 = [ 
        {
            num158:'1',
            dataCell02_gt158:'경기1100247',
            dataCell03_gt158:'이도건설 주식회사',
            dataCell04_gt158:'송노봉',
            dataCell05_gt158:'110-123-112485',
            dataCell06_gt158:'등록완료',
            dataCell07_gt158:'정상',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData158.push({
            num158:i+2,
            dataCell02_gt158:'경기1100247',
            dataCell03_gt158:'이도건설 주식회사',
            dataCell04_gt158:'송노봉',
            dataCell05_gt158:'110-123-112485',
            dataCell06_gt158:'등록완료',
            dataCell07_gt158:'정상',
        });
    }

    for(var i= 0; i <= gridTableData158.length; i++)
    $('#gridTable158').jqGrid('addRowData',i + 1, gridTableData158[i]);


    /* 서식출력 - 서식출력 - 신청신고서 선택 팝업*/
    $('#gridTable159').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','민원관리번호','신청구분','부동산개발업<br />등록번호','법인등록번호','상호','최초등록<br />구분','신청일','진행상태','처리구분'],
        colModel:[
            {name:'num159',index:'num159', width: 70, align: 'center'},
            {name:'dataCell02_gt159',index:'dataCell02_gt159', width: 150, align: 'center'},
            {name:'dataCell03_gt159',index:'dataCell03_gt159', width: 120, align: 'center'},
            {name:'dataCell04_gt159',index:'dataCell04_gt159', width: 120, align: 'center'},
            {name:'dataCell05_gt159',index:'dataCell05_gt159', width: 180, align: 'center'},
            {name:'dataCell06_gt159',index:'dataCell06_gt159', width: 250, align: 'center'},
            {name:'dataCell07_gt159',index:'dataCell07_gt159', width: 150, align: 'center'},
            {name:'dataCell08_gt159',index:'dataCell08_gt159', width: 120, align: 'center'},
            {name:'dataCell09_gt159',index:'dataCell09_gt159', width: 120, align: 'center'},
            {name:'dataCell10_gt159',index:'dataCell10_gt159', width: 120, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData159 = [ 
        {
            num159:'1',
            dataCell02_gt159:'201612270000001',
            dataCell03_gt159:'등록신청',
            dataCell04_gt159:'경북160016',
            dataCell05_gt159:'110-123-112485',
            dataCell06_gt159:'주식회사 디파트너스',
            dataCell07_gt159:'시도담당자',
            dataCell08_gt159:'2022-12-31',
            dataCell09_gt159:'완료',
            dataCell10_gt159:'해결',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData159.push({
            num159:i+2,
            dataCell02_gt159:'201612270000001',
            dataCell03_gt159:'등록신청',
            dataCell04_gt159:'경북160016',
            dataCell05_gt159:'110-123-112485',
            dataCell06_gt159:'주식회사 디파트너스',
            dataCell07_gt159:'시도담당자',
            dataCell08_gt159:'2022-12-31',
            dataCell09_gt159:'완료',
            dataCell10_gt159:'해결',
        });
    }

    for(var i= 0; i <= gridTableData159.length; i++)
    $('#gridTable159').jqGrid('addRowData',i + 1, gridTableData159[i]);


    /* 업무관리 - 공통코드관리*/
    $('#gridTable160').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','코드구분','코드ID','코드ID 명','사용여부'],
        colModel:[
            {name:'num160',index:'num160', width: 70, align: 'center'},
            {name:'dataCell02_gt160',index:'dataCell02_gt160', width: 120, align: 'center'},
            {name:'dataCell03_gt160',index:'dataCell03_gt160', width: 150, align: 'center'},
            {name:'dataCell04_gt160',index:'dataCell04_gt160', width: 1108, align: 'left'},
            {name:'dataCell05_gt160',index:'dataCell05_gt160', width: 150, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData160 = [ 
        {
            num160:'1',
            dataCell02_gt160:'시도',
            dataCell03_gt160:'ED001',
            dataCell04_gt160:'<a href="#" class="underline">등록상태</a>',
            dataCell05_gt160:'사용',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData160.push({
            num160:i+2,
            dataCell02_gt160:'시도',
            dataCell03_gt160:'ED001',
            dataCell04_gt160:'<a href="#" class="underline">등록상태</a>',
            dataCell05_gt160:'사용',
        });
    }

    for(var i= 0; i <= gridTableData160.length; i++)
    $('#gridTable160').jqGrid('addRowData',i + 1, gridTableData160[i]);


    /* 업무관리 - 공통정보관리 - 근거법*/
    $('#gridTable161').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','관리번호','법률번호','법률내용','위반행위','삭제여부'],
        colModel:[
            {name:'num161',index:'num161', width: 70, align: 'center'},
            {name:'dataCell02_gt161',index:'dataCell02_gt161', width: 150, align: 'center'},
            {name:'dataCell03_gt161',index:'dataCell03_gt161', width: 200, align: 'center'},
            {name:'dataCell04_gt161',index:'dataCell04_gt161', width: 350, align: 'center'},
            {name:'dataCell05_gt161',index:'dataCell05_gt161', width: 250, align: 'center'},
            {name:'dataCell06_gt161',index:'dataCell06_gt161', width: 120, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData161 = [ 
        {
            num161:'1',
            dataCell02_gt161:'',
            dataCell03_gt161:'법제22조제1항제1호',
            dataCell04_gt161:'3) 임원 및 부동산개발 전문인력의 변경을 보고하지 아니한때',
            dataCell05_gt161:'1) 사업실적보고를 아니한때',
            dataCell06_gt161:'정상',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData161.push({
            num161:i+2,
            dataCell02_gt161:'',
            dataCell03_gt161:'법제22조제1항제1호',
            dataCell04_gt161:'3) 임원 및 부동산개발 전문인력의 변경을 보고하지 아니한때',
            dataCell05_gt161:'1) 사업실적보고를 아니한때',
            dataCell06_gt161:'정상',
        });
    }

    for(var i= 0; i <= gridTableData161.length; i++)
    $('#gridTable161').jqGrid('addRowData',i + 1, gridTableData161[i]);


    /* 업무관리 - 공통정보관리 - 교육기관*/
    $('#gridTable162').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','관리번호','교육기관명','대표자','전화번호','소재지','삭제여부'],
        colModel:[
            {name:'num162',index:'num162', width: 70, align: 'center'},
            {name:'dataCell02_gt162',index:'dataCell02_gt162', width: 150, align: 'center'},
            {name:'dataCell03_gt162',index:'dataCell03_gt162', width: 200, align: 'center'},
            {name:'dataCell04_gt162',index:'dataCell04_gt162', width: 120, align: 'center'},
            {name:'dataCell05_gt162',index:'dataCell05_gt162', width: 150, align: 'center'},
            {name:'dataCell06_gt162',index:'dataCell06_gt162', width: 329, align: 'center'},
            {name:'dataCell07_gt162',index:'dataCell07_gt162', width: 120, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData162 = [ 
        {
            num162:'1',
            dataCell02_gt162:'',
            dataCell03_gt162:'한국부동산개발업협회',
            dataCell04_gt162:'대표명',
            dataCell05_gt162:'02-123-4567',
            dataCell06_gt162:'서울특별시 강남구 청담동 청담빌딩 2층',
            dataCell07_gt162:'정상',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData162.push({
            num162:i+2,
            dataCell02_gt162:'',
            dataCell03_gt162:'한국부동산개발업협회',
            dataCell04_gt162:'대표명',
            dataCell05_gt162:'02-123-4567',
            dataCell06_gt162:'서울특별시 강남구 청담동 청담빌딩 2층',
            dataCell07_gt162:'정상',
        });
    }

    for(var i= 0; i <= gridTableData162.length; i++)
    $('#gridTable162').jqGrid('addRowData',i + 1, gridTableData162[i]);


    /* 업무관리 - 공통정보관리 - 교육과정*/
    $('#gridTable163').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','교육기관명','교육과정명','교육시간','교육장','삭제여부'],
        colModel:[
            {name:'num163',index:'num163', width: 70, align: 'center'},
            {name:'dataCell02_gt163',index:'dataCell02_gt163', width: 175, align: 'center'},
            {name:'dataCell03_gt163',index:'dataCell03_gt163', width: 175, align: 'center'},
            {name:'dataCell04_gt163',index:'dataCell04_gt163', width: 300, align: 'center'},
            {name:'dataCell05_gt163',index:'dataCell05_gt163', width: 300, align: 'center'},
            {name:'dataCell06_gt163',index:'dataCell06_gt163', width: 120, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData163 = [ 
        {
            num163:'1',
            dataCell02_gt163:'한국부동산개발협회',
            dataCell03_gt163:'표준교육과정',
            dataCell04_gt163:'',
            dataCell05_gt163:'',
            dataCell06_gt163:'정상',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData163.push({
            num163:i+2,
            dataCell02_gt163:'한국부동산개발협회',
            dataCell03_gt163:'표준교육과정',
            dataCell04_gt163:'',
            dataCell05_gt163:'',
            dataCell06_gt163:'정상',
        });
    }

    for(var i= 0; i <= gridTableData163.length; i++)
    $('#gridTable163').jqGrid('addRowData',i + 1, gridTableData163[i]);


    /* 업무관리 - 공통정보관리 - 자격증*/
    $('#gridTable164').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','관리번호','자격증명','자격증발행기관','자격증구분','삭제여부'],
        colModel:[
            {name:'num164',index:'num164', width: 70, align: 'center'},
            {name:'dataCell02_gt164',index:'dataCell02_gt164', width: 150, align: 'center'},
            {name:'dataCell03_gt164',index:'dataCell03_gt164', width: 296, align: 'center'},
            {name:'dataCell04_gt164',index:'dataCell04_gt164', width: 296, align: 'center'},
            {name:'dataCell05_gt164',index:'dataCell05_gt164', width: 206, align: 'center'},
            {name:'dataCell06_gt164',index:'dataCell06_gt164', width: 120, align: 'center'},
        ],
        hoverrows: false,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData164 = [ 
        {
            num164:'1',
            dataCell02_gt164:'',
            dataCell03_gt164:'건축기계설비기술사',
            dataCell04_gt164:'한국산업인력공단',
            dataCell05_gt164:'건축',
            dataCell06_gt164:'정상',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData164.push({
            num164:i+2,
            dataCell02_gt164:'',
            dataCell03_gt164:'건축기계설비기술사',
            dataCell04_gt164:'한국산업인력공단',
            dataCell05_gt164:'건축',
            dataCell06_gt164:'정상',
        });
    }

    for(var i= 0; i <= gridTableData164.length; i++)
    $('#gridTable164').jqGrid('addRowData',i + 1, gridTableData164[i]);




    /* jqGrid td firstrow 빼고 높이를 주기위한 클래스 */
    $('.jqgfirstrow td[role="gridcell"]').addClass('jqtd');

    /* jqGrid th 체크박스 감싸는 div */
    $('.thChk').closest('div').addClass('jqChkbox');

    $('.ui-th-column').each(function(){
        if(!$(this).children('.jqChkbox').length == 0){
            // $(this).addClass('p0');
        } 
    });
});