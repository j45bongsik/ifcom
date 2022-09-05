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
        cmTemplate: {
            resizable: false
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
        cmTemplate: {
            resizable: false
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



    // ===========================================

    /* jqGrid td firstrow 빼고 높이를 주기위한 클래스 */
    $('.jqgfirstrow td[role="gridcell"]').addClass('jqtd');

    /* jqGrid th 체크박스 감싸는 div */
    $('.thChk').closest('div').addClass('jqChkbox');

    $('.ui-th-column').each(function(){
        if(!$(this).children('.jqChkbox').length == 0){
            $(this).addClass('p0');
        } 
    });
});