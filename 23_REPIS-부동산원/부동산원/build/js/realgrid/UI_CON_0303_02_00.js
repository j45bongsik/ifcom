
document.addEventListener('DOMContentLoaded', function () {

    /*======================= 주택특성 - 주택 메인 ======================= */
    const container10 = document.getElementById('realgrid10');
    const provider10 = new RealGrid.LocalDataProvider(false);
    const gridView10 = new RealGrid.GridView(container10);
    gridView10.setDataSource(provider10);

    // 필드 생성
    var fields10 = [
        {fieldName: "년도", dataType: "text",},
        {fieldName: "기준월", dataType: "text",},
        {fieldName: "구분", dataType: "text",},
        {fieldName: "항목1", dataType: "text",},
        {fieldName: "항목2", dataType: "text",},
        {fieldName: "항목3", dataType: "text",},
        {fieldName: "항목4", dataType: "text",},
        {fieldName: "항목n1", dataType: "text",},
        {fieldName: "항목n2", dataType: "text",},
    ]

    // 컬럼 생성
    var columns10 = [
        {name: "년도", fieldName: "년도", width: "82",
            header: {text: "년도",},
        },
        {name: "기준월", fieldName: "기준월", width: "78",
            header: {text: "기준월",},
        },
        {name: "구분", fieldName: "구분", width: "76",
            header: {text: "구분",},
        },
        {name: "항목1", fieldName: "항목1", width: "76",
            header: {text: "항목1",},
        },
        {name: "항목2", fieldName: "항목2", width: "76",
            header: {text: "항목2",},
        },
        {name: "항목3", fieldName: "항목3", width: "76",
            header: {text: "항목3",},
        },
        {name: "항목4", fieldName: "항목4", width: "76",
            header: {text: "항목4",},
        },
        {name: "항목n1", fieldName: "항목n1", width: "76",
            header: {text: "항목n1",},
        },
        {name: "항목n2", fieldName: "항목n2", width: "76",
            header: {text: "항목n2",},
        },
    ]

    // 로우 생성
    var rows10 = [
        {년도: '2022년', 기준월: '01월', 구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
    ]


    provider10.setFields(fields10); //필드설정
    gridView10.setColumns(columns10); //컬럼설정
    provider10.setRows(rows10); //데이터 채우기

    gridView10.setCheckBar({
        visible: false
    });
    gridView10.setStateBar({
        visible: false
    });
    gridView10.setRowIndicator({
        visible: false
    });
    gridView10.setFooters({
        visible:false,
    });

    gridView10.displayOptions.fitStyle = "even";
    gridView10.header.heights = [30,30]
    gridView10.displayOptions.minRowHeight = 36;
    gridView10.displayOptions.useFocusClass = true;
    
    // gridView02.setColumnLayout(layout02);

    //realGrid scrollbar style
    gridView10.scrollBarWidth = 10;
    gridView10.scrollBarHeight = 10;
    gridView10.scrollBarRadius = 5;


    /*======================= 층/동/증축 - 층 정보 ======================= */
    const container11 = document.getElementById('realgrid11');
    const provider11 = new RealGrid.LocalDataProvider(false);
    const gridView11 = new RealGrid.GridView(container11);
    gridView11.setDataSource(provider11);

    // 필드 생성
    var fields11 = [
        {fieldName: "년도", dataType: "text",},
        {fieldName: "기준월", dataType: "text",},
        {fieldName: "주부구분", dataType: "text",},
        {fieldName: "층", dataType: "text",},
        {fieldName: "항목1", dataType: "text",},
        {fieldName: "항목2", dataType: "text",},
        {fieldName: "항목3", dataType: "text",},
        {fieldName: "항목4", dataType: "text",},
        {fieldName: "항목n", dataType: "text",},
    ]

    // 컬럼 생성
    var columns11 = [
        {name: "년도", fieldName: "년도", width: "82",
            header: {text: "년도",},
        },
        {name: "기준월", fieldName: "기준월", width: "78",
            header: {text: "기준월",},
        },
        {name: "주부구분", fieldName: "주부구분", width: "76",
            header: {text: "주부구분",},
        },
        {name: "층", fieldName: "층", width: "76",
            header: {text: "층",},
        },
        {name: "항목1", fieldName: "항목1", width: "76",
            header: {text: "항목1",},
        },
        {name: "항목2", fieldName: "항목2", width: "76",
            header: {text: "항목2",},
        },
        {name: "항목3", fieldName: "항목3", width: "76",
            header: {text: "항목3",},
        },
        {name: "항목4", fieldName: "항목4", width: "76",
            header: {text: "항목4",},
        },
        {name: "항목n", fieldName: "항목n", width: "76",
            header: {text: "항목n",},
        },
    ]

    // 로우 생성
    var rows11 = [
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
    ]


    provider11.setFields(fields11); //필드설정
    gridView11.setColumns(columns11); //컬럼설정
    provider11.setRows(rows11); //데이터 채우기

    gridView11.setCheckBar({
        visible: false
    });
    gridView11.setStateBar({
        visible: false
    });
    gridView11.setRowIndicator({
        visible: false
    });
    gridView11.setFooters({
        visible:false,
    });

    gridView11.displayOptions.fitStyle = "even";
    gridView11.header.heights = [30,30]
    gridView11.displayOptions.minRowHeight = 36;
    gridView11.displayOptions.useFocusClass = true;
    
    // gridView02.setColumnLayout(layout02);

    //realGrid scrollbar style
    gridView11.scrollBarWidth = 10;
    gridView11.scrollBarHeight = 10;
    gridView11.scrollBarRadius = 5;


    /*======================= 층/동/증축 - 증축 정보 ======================= */
    const container12 = document.getElementById('realgrid12');
    const provider12 = new RealGrid.LocalDataProvider(false);
    const gridView12 = new RealGrid.GridView(container12);
    gridView12.setDataSource(provider12);

    // 필드 생성
    var fields12 = [
        {fieldName: "년도", dataType: "text",},
        {fieldName: "기준월", dataType: "text",},
        {fieldName: "주부구분", dataType: "text",},
        {fieldName: "층", dataType: "text",},
        {fieldName: "항목1", dataType: "text",},
        {fieldName: "항목2", dataType: "text",},
        {fieldName: "항목3", dataType: "text",},
        {fieldName: "항목4", dataType: "text",},
        {fieldName: "항목n", dataType: "text",},
    ]

    // 컬럼 생성
    var columns12 = [
        {name: "년도", fieldName: "년도", width: "82",
            header: {text: "년도",},
        },
        {name: "기준월", fieldName: "기준월", width: "78",
            header: {text: "기준월",},
        },
        {name: "주부구분", fieldName: "주부구분", width: "76",
            header: {text: "주부구분",},
        },
        {name: "층", fieldName: "층", width: "76",
            header: {text: "층",},
        },
        {name: "항목1", fieldName: "항목1", width: "76",
            header: {text: "항목1",},
        },
        {name: "항목2", fieldName: "항목2", width: "76",
            header: {text: "항목2",},
        },
        {name: "항목3", fieldName: "항목3", width: "76",
            header: {text: "항목3",},
        },
        {name: "항목4", fieldName: "항목4", width: "76",
            header: {text: "항목4",},
        },
        {name: "항목n", fieldName: "항목n", width: "76",
            header: {text: "항목n",},
        },
    ]

    // 로우 생성
    var rows12 = [
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
    ]


    provider12.setFields(fields12); //필드설정
    gridView12.setColumns(columns12); //컬럼설정
    provider12.setRows(rows12); //데이터 채우기

    gridView12.setCheckBar({
        visible: false
    });
    gridView12.setStateBar({
        visible: false
    });
    gridView12.setRowIndicator({
        visible: false
    });
    gridView12.setFooters({
        visible:false,
    });

    gridView12.displayOptions.fitStyle = "even";
    gridView12.header.heights = [30,30]
    gridView12.displayOptions.minRowHeight = 36;
    gridView12.displayOptions.useFocusClass = true;
    
    // gridView02.setColumnLayout(layout02);

    //realGrid scrollbar style
    gridView12.scrollBarWidth = 10;
    gridView12.scrollBarHeight = 10;
    gridView12.scrollBarRadius = 5;



    /*======================= 층/동/증축 - 동 정보 ======================= */
    const container13 = document.getElementById('realgrid13');
    const provider13 = new RealGrid.LocalDataProvider(false);
    const gridView13 = new RealGrid.GridView(container13);
    gridView13.setDataSource(provider13);

    // 필드 생성
    var fields13 = [
        {fieldName: "년도", dataType: "text",},
        {fieldName: "기준월", dataType: "text",},
        {fieldName: "주부구분", dataType: "text",},
        {fieldName: "승인일자", dataType: "text",},
        {fieldName: "내용연수", dataType: "text",},
    ]

    // 컬럼 생성
    var columns13 = [
        {name: "년도", fieldName: "년도", width: "82",
            header: {text: "년도",},
        },
        {name: "기준월", fieldName: "기준월", width: "78",
            header: {text: "기준월",},
            mergeRule:"value",
        },
        {name: "주부구분", fieldName: "주부구분", width: "76",
            header: {text: "주부구분",},
        },
        {name: "승인일자", fieldName: "승인일자", width: "76",
            header: {text: "승인일자",},
        },
        {name: "내용연수", fieldName: "내용연수", width: "76",
            header: {text: "내용연수",},
        },
    ]

    // 로우 생성
    var rows13 = [
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 승인일자: '1994.08.10', 내용연수: '40',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 승인일자: '1994.08.10', 내용연수: '40',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 승인일자: '1994.08.10', 내용연수: '40',},
    ]


    provider13.setFields(fields13); //필드설정
    gridView13.setColumns(columns13); //컬럼설정
    provider13.setRows(rows13); //데이터 채우기

    gridView13.setCheckBar({
        visible: false
    });
    gridView13.setStateBar({
        visible: false
    });
    gridView13.setRowIndicator({
        visible: false
    });
    gridView13.setFooters({
        visible:false,
    });

    gridView13.displayOptions.fitStyle = "even";
    gridView13.header.heights = [30,30]
    gridView13.displayOptions.minRowHeight = 36;
    gridView13.displayOptions.useFocusClass = true;
    
    // gridView02.setColumnLayout(layout02);

    //realGrid scrollbar style
    gridView13.scrollBarWidth = 10;
    gridView13.scrollBarHeight = 10;
    gridView13.scrollBarRadius = 5;


    /*======================= 산정배율 - 주택 메인 ======================= */
    const container14 = document.getElementById('realgrid14');
    const provider14 = new RealGrid.LocalDataProvider(false);
    const gridView14 = new RealGrid.GridView(container14);
    gridView14.setDataSource(provider14);

    // 필드 생성
    var fields14 = [
        {fieldName: "년도", dataType: "text",},
        {fieldName: "기준월", dataType: "text",},
        {fieldName: "구분", dataType: "text",},
        {fieldName: "항목1", dataType: "text",},
        {fieldName: "항목2", dataType: "text",},
        {fieldName: "항목3", dataType: "text",},
        {fieldName: "항목4", dataType: "text",},
        {fieldName: "항목n1", dataType: "text",},
        {fieldName: "항목n2", dataType: "text",},
    ]

    // 컬럼 생성
    var columns14 = [
        {name: "년도", fieldName: "년도", width: "82",
            header: {text: "년도",},
            mergeRule:"value",
        },
        {name: "기준월", fieldName: "기준월", width: "78",
            header: {text: "기준월",},
            mergeRule:"value",
        },
        {name: "구분", fieldName: "구분", width: "76",
            header: {text: "구분",},
        },
        {name: "항목1", fieldName: "항목1", width: "76",
            header: {text: "항목1",},
        },
        {name: "항목2", fieldName: "항목2", width: "76",
            header: {text: "항목2",},
        },
        {name: "항목3", fieldName: "항목3", width: "76",
            header: {text: "항목3",},
        },
        {name: "항목4", fieldName: "항목4", width: "76",
            header: {text: "항목4",},
        },
        {name: "항목n1", fieldName: "항목n1", width: "76",
            header: {text: "항목n1",},
        },
        {name: "항목n2", fieldName: "항목n2", width: "76",
            header: {text: "항목n2",},
        },
    ]

    // 로우 생성
    var rows14 = [
        {년도: '2022년', 기준월: '01월', 구분: '개별', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '표준', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '배율', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '02월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '02월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '02월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '03월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '03월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '03월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '04월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
    ]


    provider14.setFields(fields14); //필드설정
    gridView14.setColumns(columns14); //컬럼설정
    provider14.setRows(rows14); //데이터 채우기

    gridView14.setCheckBar({
        visible: false
    });
    gridView14.setStateBar({
        visible: false
    });
    gridView14.setRowIndicator({
        visible: false
    });
    gridView14.setFooters({
        visible:false,
    });

    gridView14.displayOptions.fitStyle = "even";
    gridView14.header.heights = [30,30]
    gridView14.displayOptions.minRowHeight = 36;
    gridView14.displayOptions.useFocusClass = true;
    
    // gridView02.setColumnLayout(layout02);

    //realGrid scrollbar style
    gridView14.scrollBarWidth = 10;
    gridView14.scrollBarHeight = 10;
    gridView14.scrollBarRadius = 5;
    

    /*======================= 산정배율 - 층증축 - 층 정보 ======================= */
    const container15 = document.getElementById('realgrid15');
    const provider15 = new RealGrid.LocalDataProvider(false);
    const gridView15 = new RealGrid.GridView(container15);
    gridView15.setDataSource(provider15);

    // 필드 생성
    var fields15 = [
        {fieldName: "년도", dataType: "text",},
        {fieldName: "기준월", dataType: "text",},
        {fieldName: "구분", dataType: "text",},
        {fieldName: "주부구분", dataType: "text",},
        {fieldName: "층", dataType: "text",},
        {fieldName: "항목1", dataType: "text",},
        {fieldName: "항목2", dataType: "text",},
        {fieldName: "항목3", dataType: "text",},
        {fieldName: "항목n", dataType: "text",},
    ]

    // 컬럼 생성
    var columns15 = [
        {name: "년도", fieldName: "년도", width: "82",
            header: {text: "년도",},
            mergeRule:"value",
        },
        {name: "기준월", fieldName: "기준월", width: "78",
            header: {text: "기준월",},
            mergeRule:"value",
        },
        {name: "구분", fieldName: "구분", width: "76",
            header: {text: "구분",},
        },
        {name: "주부구분", fieldName: "주부구분", width: "76",
            header: {text: "주부구분",},
        },
        {name: "층", fieldName: "층", width: "76",
            header: {text: "층",},
        },
        {name: "항목1", fieldName: "항목1", width: "76",
            header: {text: "항목1",},
        },
        {name: "항목2", fieldName: "항목2", width: "76",
            header: {text: "항목2",},
        },
        {name: "항목3", fieldName: "항목3", width: "76",
            header: {text: "항목3",},
        },
        {name: "항목n", fieldName: "항목n", width: "76",
            header: {text: "항목n",},
        },
    ]

    // 로우 생성
    var rows15 = [
        {년도: '2022년', 기준월: '01월', 구분: '개별', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 구분: '배율', 주부구분: '0', 층: '0', 항목1: '', 항목2: '', 항목3: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 구분: '개별', 주부구분: '주', 층: '2', 항목1: '', 항목2: '', 항목3: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 구분: '배율', 주부구분: '0', 층: '0', 항목1: '', 항목2: '', 항목3: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 구분: '개별', 주부구분: '부1', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 구분: '배율', 주부구분: '0', 층: '0', 항목1: '', 항목2: '', 항목3: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 구분: '개별', 주부구분: '부2', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 구분: '배율', 주부구분: '0', 층: '0', 항목1: '', 항목2: '', 항목3: '', 항목n: '',},
    ]


    provider15.setFields(fields15); //필드설정
    gridView15.setColumns(columns15); //컬럼설정
    provider15.setRows(rows15); //데이터 채우기

    gridView15.setCheckBar({
        visible: false
    });
    gridView15.setStateBar({
        visible: false
    });
    gridView15.setRowIndicator({
        visible: false
    });
    gridView15.setFooters({
        visible:false,
    });

    gridView15.displayOptions.fitStyle = "even";
    gridView15.header.heights = [30,30]
    gridView15.displayOptions.minRowHeight = 36;
    gridView15.displayOptions.useFocusClass = true;
    
    // gridView02.setColumnLayout(layout02);

    //realGrid scrollbar style
    gridView15.scrollBarWidth = 10;
    gridView15.scrollBarHeight = 10;
    gridView15.scrollBarRadius = 5;


    /*======================= 산정배율 - 층증축 - 증축 정보 ======================= */
    const container16 = document.getElementById('realgrid16');
    const provider16 = new RealGrid.LocalDataProvider(false);
    const gridView16 = new RealGrid.GridView(container16);
    gridView16.setDataSource(provider16);

    // 필드 생성
    var fields16 = [
        {fieldName: "년도", dataType: "text",},
        {fieldName: "기준월", dataType: "text",},
        {fieldName: "구분", dataType: "text",},
        {fieldName: "주부구분", dataType: "text",},
        {fieldName: "층", dataType: "text",},
        {fieldName: "항목1", dataType: "text",},
        {fieldName: "항목2", dataType: "text",},
        {fieldName: "항목3", dataType: "text",},
        {fieldName: "항목n", dataType: "text",},
    ]

    // 컬럼 생성
    var columns16 = [
        {name: "년도", fieldName: "년도", width: "82",
            header: {text: "년도",},
            mergeRule:"value",
        },
        {name: "기준월", fieldName: "기준월", width: "78",
            header: {text: "기준월",},
            mergeRule:"value",
        },
        {name: "구분", fieldName: "구분", width: "76",
            header: {text: "구분",},
        },
        {name: "주부구분", fieldName: "주부구분", width: "76",
            header: {text: "주부구분",},
        },
        {name: "층", fieldName: "층", width: "76",
            header: {text: "층",},
        },
        {name: "항목1", fieldName: "항목1", width: "76",
            header: {text: "항목1",},
        },
        {name: "항목2", fieldName: "항목2", width: "76",
            header: {text: "항목2",},
        },
        {name: "항목3", fieldName: "항목3", width: "76",
            header: {text: "항목3",},
        },
        {name: "항목n", fieldName: "항목n", width: "76",
            header: {text: "항목n",},
        },
    ]

    // 로우 생성
    var rows16 = [
        {년도: '2022년', 기준월: '01월', 구분: '개별', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 구분: '배율', 주부구분: '0', 층: '0', 항목1: '', 항목2: '', 항목3: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 구분: '개별', 주부구분: '주', 층: '2', 항목1: '', 항목2: '', 항목3: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 구분: '배율', 주부구분: '0', 층: '0', 항목1: '', 항목2: '', 항목3: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 구분: '개별', 주부구분: '부1', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 구분: '배율', 주부구분: '0', 층: '0', 항목1: '', 항목2: '', 항목3: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 구분: '개별', 주부구분: '부2', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 구분: '배율', 주부구분: '0', 층: '0', 항목1: '', 항목2: '', 항목3: '', 항목n: '',},
    ]


    provider16.setFields(fields16); //필드설정
    gridView16.setColumns(columns16); //컬럼설정
    provider16.setRows(rows16); //데이터 채우기

    gridView16.setCheckBar({
        visible: false
    });
    gridView16.setStateBar({
        visible: false
    });
    gridView16.setRowIndicator({
        visible: false
    });
    gridView16.setFooters({
        visible:false,
    });

    gridView16.displayOptions.fitStyle = "even";
    gridView16.header.heights = [30,30]
    gridView16.displayOptions.minRowHeight = 36;
    gridView16.displayOptions.useFocusClass = true;
    
    // gridView02.setColumnLayout(layout02);

    //realGrid scrollbar style
    gridView16.scrollBarWidth = 10;
    gridView16.scrollBarHeight = 10;
    gridView16.scrollBarRadius = 5;


    /*======================= 가격역전 ======================= */
    const container17 = document.getElementById('realgrid17');
    const provider17 = new RealGrid.LocalDataProvider(false);
    const gridView17 = new RealGrid.GridView(container17);
    gridView17.setDataSource(provider17);

    // 필드 생성
    var fields17 = [
        {fieldName: "년도", dataType: "text",},
        {fieldName: "기준월", dataType: "text",},
        {fieldName: "항목1", dataType: "text",},
        {fieldName: "항목2", dataType: "text",},
        {fieldName: "항목3", dataType: "text",},
        {fieldName: "항목4", dataType: "text",},
        {fieldName: "항목n", dataType: "text",},
    ]

    // 컬럼 생성
    var columns17 = [
        {name: "년도", fieldName: "년도", width: "82",
            header: {text: "년도",},
        },
        {name: "기준월", fieldName: "기준월", width: "78",
            header: {text: "기준월",},
        },
        {name: "항목1", fieldName: "항목1", width: "76",
            header: {text: "항목1",},
        },
        {name: "항목2", fieldName: "항목2", width: "76",
            header: {text: "항목2",},
        },
        {name: "항목3", fieldName: "항목3", width: "76",
            header: {text: "항목3",},
        },
        {name: "항목4", fieldName: "항목4", width: "76",
            header: {text: "항목4",},
        },
        {name: "항목n", fieldName: "항목n", width: "76",
            header: {text: "항목n",},
        },
    ]

    // 로우 생성
    var rows17 = [
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
    ]


    provider17.setFields(fields17); //필드설정
    gridView17.setColumns(columns17); //컬럼설정
    provider17.setRows(rows17); //데이터 채우기

    gridView17.setCheckBar({
        visible: false
    });
    gridView17.setStateBar({
        visible: false
    });
    gridView17.setRowIndicator({
        visible: false
    });
    gridView17.setFooters({
        visible:false,
    });

    gridView17.displayOptions.fitStyle = "even";
    gridView17.header.heights = [30,30]
    gridView17.displayOptions.minRowHeight = 36;
    gridView17.displayOptions.useFocusClass = true;
    
    // gridView02.setColumnLayout(layout02);

    //realGrid scrollbar style
    gridView17.scrollBarWidth = 10;
    gridView17.scrollBarHeight = 10;
    gridView17.scrollBarRadius = 5;


    /*======================= 토지특성불일치 ======================= */
    const container18 = document.getElementById('realgrid18');
    const provider18 = new RealGrid.LocalDataProvider(false);
    const gridView18 = new RealGrid.GridView(container18);
    gridView18.setDataSource(provider18);

    // 필드 생성
    var fields18 = [
        {fieldName: "년도", dataType: "text",},
        {fieldName: "기준월", dataType: "text",},
        {fieldName: "불일치사유", dataType: "text",},
        {fieldName: "불일치메모", dataType: "text",},
    ]

    // 컬럼 생성
    var columns18 = [
        {name: "년도", fieldName: "년도", width: "82",
            header: {text: "년도",},
        },
        {name: "기준월", fieldName: "기준월", width: "78",
            header: {text: "기준월",},
        },
        {name: "불일치사유", fieldName: "불일치사유", width: "189",
            header: {text: "불일치 사유",},
        },
        {name: "불일치메모", fieldName: "불일치메모", width: "189",
            header: {text: "불일치 메모",},
        },
    
    ]

    // 로우 생성
    var rows18 = [
        {년도: '2022년', 기준월: '01월', 불일치사유: '', 불일치메모: '',},
        {년도: '2022년', 기준월: '01월', 불일치사유: '', 불일치메모: '',},
        {년도: '2022년', 기준월: '01월', 불일치사유: '', 불일치메모: '',},
        {년도: '2022년', 기준월: '01월', 불일치사유: '', 불일치메모: '',},
        {년도: '2022년', 기준월: '01월', 불일치사유: '', 불일치메모: '',},
        {년도: '2022년', 기준월: '01월', 불일치사유: '', 불일치메모: '',},
        {년도: '2022년', 기준월: '01월', 불일치사유: '', 불일치메모: '',},
        {년도: '2022년', 기준월: '01월', 불일치사유: '', 불일치메모: '',},
        {년도: '2022년', 기준월: '01월', 불일치사유: '', 불일치메모: '',},
        {년도: '2022년', 기준월: '01월', 불일치사유: '', 불일치메모: '',},
    ]


    provider18.setFields(fields18); //필드설정
    gridView18.setColumns(columns18); //컬럼설정
    provider18.setRows(rows18); //데이터 채우기

    gridView18.setCheckBar({
        visible: false
    });
    gridView18.setStateBar({
        visible: false
    });
    gridView18.setRowIndicator({
        visible: false
    });
    gridView18.setFooters({
        visible:false,
    });

    gridView18.displayOptions.fitStyle = "even";
    gridView18.header.heights = [30,30]
    gridView18.displayOptions.minRowHeight = 36;
    gridView18.displayOptions.useFocusClass = true;
    
    // gridView02.setColumnLayout(layout02);

    //realGrid scrollbar style
    gridView18.scrollBarWidth = 10;
    gridView18.scrollBarHeight = 10;
    gridView18.scrollBarRadius = 5;



    /*======================= 가격정정 ======================= */
    const container19 = document.getElementById('realgrid19');
    const provider19 = new RealGrid.LocalDataProvider(false);
    const gridView19 = new RealGrid.GridView(container19);
    gridView19.setDataSource(provider19);

    // 필드 생성
    var fields19 = [
        {fieldName: "년도", dataType: "text",},
        {fieldName: "기준월", dataType: "text",},
        {fieldName: "항목1", dataType: "text",},
        {fieldName: "항목2", dataType: "text",},
        {fieldName: "항목3", dataType: "text",},
        {fieldName: "항목4", dataType: "text",},
        {fieldName: "항목n", dataType: "text",},
    ]

    // 컬럼 생성
    var columns19 = [
        {name: "년도", fieldName: "년도", width: "82",
            header: {text: "년도",},
        },
        {name: "기준월", fieldName: "기준월", width: "78",
            header: {text: "기준월",},
        },
        {name: "항목1", fieldName: "항목1", width: "76",
            header: {text: "항목1",},
        },
        {name: "항목2", fieldName: "항목2", width: "76",
            header: {text: "항목2",},
        },
        {name: "항목3", fieldName: "항목3", width: "76",
            header: {text: "항목3",},
        },
        {name: "항목4", fieldName: "항목4", width: "76",
            header: {text: "항목4",},
        },
        {name: "항목n", fieldName: "항목n", width: "76",
            header: {text: "항목n",},
        },
    ]

    // 로우 생성
    var rows19 = [
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
    ]


    provider19.setFields(fields19); //필드설정
    gridView19.setColumns(columns19); //컬럼설정
    provider19.setRows(rows19); //데이터 채우기

    gridView19.setCheckBar({
        visible: false
    });
    gridView19.setStateBar({
        visible: false
    });
    gridView19.setRowIndicator({
        visible: false
    });
    gridView19.setFooters({
        visible:false,
    });

    gridView19.displayOptions.fitStyle = "even";
    gridView19.header.heights = [30,30]
    gridView19.displayOptions.minRowHeight = 36;
    gridView19.displayOptions.useFocusClass = true;
    
    // gridView02.setColumnLayout(layout02);

    //realGrid scrollbar style
    gridView19.scrollBarWidth = 10;
    gridView19.scrollBarHeight = 10;
    gridView19.scrollBarRadius = 5;



    /*======================= 토지(임야)대장 ======================= */
    const container20 = document.getElementById('realgrid20');
    const provider20 = new RealGrid.LocalDataProvider(false);
    const gridView20 = new RealGrid.GridView(container20);
    gridView20.setDataSource(provider20);

    // 필드 생성
    var fields20 = [
        {fieldName: "년도", dataType: "text",},
        {fieldName: "기준월", dataType: "text",},
        {fieldName: "항목1", dataType: "text",},
        {fieldName: "항목2", dataType: "text",},
        {fieldName: "항목3", dataType: "text",},
        {fieldName: "항목4", dataType: "text",},
        {fieldName: "항목n", dataType: "text",},
    ]

    // 컬럼 생성
    var columns20 = [
        {name: "년도", fieldName: "년도", width: "82",
            header: {text: "년도",},
        },
        {name: "기준월", fieldName: "기준월", width: "78",
            header: {text: "기준월",},
        },
        {name: "항목1", fieldName: "항목1", width: "76",
            header: {text: "항목1",},
        },
        {name: "항목2", fieldName: "항목2", width: "76",
            header: {text: "항목2",},
        },
        {name: "항목3", fieldName: "항목3", width: "76",
            header: {text: "항목3",},
        },
        {name: "항목4", fieldName: "항목4", width: "76",
            header: {text: "항목4",},
        },
        {name: "항목n", fieldName: "항목n", width: "76",
            header: {text: "항목n",},
        },
    ]

    // 로우 생성
    var rows20 = [
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
    ]


    provider20.setFields(fields20); //필드설정
    gridView20.setColumns(columns20); //컬럼설정
    provider20.setRows(rows20); //데이터 채우기

    gridView20.setCheckBar({
        visible: false
    });
    gridView20.setStateBar({
        visible: false
    });
    gridView20.setRowIndicator({
        visible: false
    });
    gridView20.setFooters({
        visible:false,
    });

    gridView20.displayOptions.fitStyle = "even";
    gridView20.header.heights = [30,30]
    gridView20.displayOptions.minRowHeight = 36;
    gridView20.displayOptions.useFocusClass = true;
    
    // gridView02.setColumnLayout(layout02);

    //realGrid scrollbar style
    gridView20.scrollBarWidth = 10;
    gridView20.scrollBarHeight = 10;
    gridView20.scrollBarRadius = 5;


    /*======================= 토지이용현황 ======================= */
    const container21 = document.getElementById('realgrid21');
    const provider21 = new RealGrid.LocalDataProvider(false);
    const gridView21 = new RealGrid.GridView(container21);
    gridView21.setDataSource(provider21);

    // 필드 생성
    var fields21 = [
        {fieldName: "년도", dataType: "text",},
        {fieldName: "기준월", dataType: "text",},
        {fieldName: "항목1", dataType: "text",},
        {fieldName: "항목2", dataType: "text",},
        {fieldName: "항목3", dataType: "text",},
        {fieldName: "항목4", dataType: "text",},
        {fieldName: "항목n", dataType: "text",},
    ]

    // 컬럼 생성
    var columns21 = [
        {name: "년도", fieldName: "년도", width: "82",
            header: {text: "년도",},
        },
        {name: "기준월", fieldName: "기준월", width: "78",
            header: {text: "기준월",},
        },
        {name: "항목1", fieldName: "항목1", width: "76",
            header: {text: "항목1",},
        },
        {name: "항목2", fieldName: "항목2", width: "76",
            header: {text: "항목2",},
        },
        {name: "항목3", fieldName: "항목3", width: "76",
            header: {text: "항목3",},
        },
        {name: "항목4", fieldName: "항목4", width: "76",
            header: {text: "항목4",},
        },
        {name: "항목n", fieldName: "항목n", width: "76",
            header: {text: "항목n",},
        },
    ]

    // 로우 생성
    var rows21 = [
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
    ]


    provider21.setFields(fields21); //필드설정
    gridView21.setColumns(columns21); //컬럼설정
    provider21.setRows(rows21); //데이터 채우기

    gridView21.setCheckBar({
        visible: false
    });
    gridView21.setStateBar({
        visible: false
    });
    gridView21.setRowIndicator({
        visible: false
    });
    gridView21.setFooters({
        visible:false,
    });

    gridView21.displayOptions.fitStyle = "even";
    gridView21.header.heights = [30,30]
    gridView21.displayOptions.minRowHeight = 36;
    gridView21.displayOptions.useFocusClass = true;
    
    // gridView02.setColumnLayout(layout02);

    //realGrid scrollbar style
    gridView21.scrollBarWidth = 10;
    gridView21.scrollBarHeight = 10;
    gridView21.scrollBarRadius = 5;


    /*======================= 성과품 - 주택 메인 ======================= */
    const container22 = document.getElementById('realgrid22');
    const provider22 = new RealGrid.LocalDataProvider(false);
    const gridView22 = new RealGrid.GridView(container22);
    gridView22.setDataSource(provider22);

    // 필드 생성
    var fields22 = [
        {fieldName: "년도", dataType: "text",},
        {fieldName: "기준월", dataType: "text",},
        {fieldName: "구분", dataType: "text",},
        {fieldName: "항목1", dataType: "text",},
        {fieldName: "항목2", dataType: "text",},
        {fieldName: "항목3", dataType: "text",},
        {fieldName: "항목4", dataType: "text",},
        {fieldName: "항목n1", dataType: "text",},
        {fieldName: "항목n2", dataType: "text",},
    ]

    // 컬럼 생성
    var columns22 = [
        {name: "년도", fieldName: "년도", width: "82",
            header: {text: "년도",},
        },
        {name: "기준월", fieldName: "기준월", width: "78",
            header: {text: "기준월",},
        },
        {name: "구분", fieldName: "구분", width: "76",
            header: {text: "구분",},
        },
        {name: "항목1", fieldName: "항목1", width: "76",
            header: {text: "항목1",},
        },
        {name: "항목2", fieldName: "항목2", width: "76",
            header: {text: "항목2",},
        },
        {name: "항목3", fieldName: "항목3", width: "76",
            header: {text: "항목3",},
        },
        {name: "항목4", fieldName: "항목4", width: "76",
            header: {text: "항목4",},
        },
        {name: "항목n1", fieldName: "항목n1", width: "76",
            header: {text: "항목n1",},
        },
        {name: "항목n2", fieldName: "항목n2", width: "76",
            header: {text: "항목n2",},
        },
    ]

    // 로우 생성
    var rows22 = [
        {년도: '2022년', 기준월: '01월', 구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
    ]


    provider22.setFields(fields22); //필드설정
    gridView22.setColumns(columns22); //컬럼설정
    provider22.setRows(rows22); //데이터 채우기

    gridView22.setCheckBar({
        visible: false
    });
    gridView22.setStateBar({
        visible: false
    });
    gridView22.setRowIndicator({
        visible: false
    });
    gridView22.setFooters({
        visible:false,
    });

    gridView22.displayOptions.fitStyle = "even";
    gridView22.header.heights = [30,30]
    gridView22.displayOptions.minRowHeight = 36;
    gridView22.displayOptions.useFocusClass = true;
    
    // gridView02.setColumnLayout(layout02);

    //realGrid scrollbar style
    gridView22.scrollBarWidth = 10;
    gridView22.scrollBarHeight = 10;
    gridView22.scrollBarRadius = 5;



    /*======================= 성과품 - 층/동/증축 - 층 정보 ======================= */
    const container23 = document.getElementById('realgrid23');
    const provider23 = new RealGrid.LocalDataProvider(false);
    const gridView23 = new RealGrid.GridView(container23);
    gridView23.setDataSource(provider23);

    // 필드 생성
    var fields23 = [
        {fieldName: "년도", dataType: "text",},
        {fieldName: "기준월", dataType: "text",},
        {fieldName: "주부구분", dataType: "text",},
        {fieldName: "층", dataType: "text",},
        {fieldName: "항목1", dataType: "text",},
        {fieldName: "항목2", dataType: "text",},
        {fieldName: "항목3", dataType: "text",},
        {fieldName: "항목4", dataType: "text",},
        {fieldName: "항목n", dataType: "text",},
    ]

    // 컬럼 생성
    var columns23 = [
        {name: "년도", fieldName: "년도", width: "82",
            header: {text: "년도",},
            mergeRule: 'value',
        },
        {name: "기준월", fieldName: "기준월", width: "78",
            header: {text: "기준월",},
            mergeRule: 'value'
        },
        {name: "주부구분", fieldName: "주부구분", width: "76",
            header: {text: "주부구분",},
        },
        {name: "층", fieldName: "층", width: "76",
            header: {text: "층",},
        },
        {name: "항목1", fieldName: "항목1", width: "76",
            header: {text: "항목1",},
        },
        {name: "항목2", fieldName: "항목2", width: "76",
            header: {text: "항목2",},
        },
        {name: "항목3", fieldName: "항목3", width: "76",
            header: {text: "항목3",},
        },
        {name: "항목4", fieldName: "항목4", width: "76",
            header: {text: "항목4",},
        },
        {name: "항목n", fieldName: "항목n", width: "76",
            header: {text: "항목n",},
        },
    ]

    // 로우 생성
    var rows23 = [
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
    ]


    provider23.setFields(fields23); //필드설정
    gridView23.setColumns(columns23); //컬럼설정
    provider23.setRows(rows23); //데이터 채우기

    gridView23.setCheckBar({
        visible: false
    });
    gridView23.setStateBar({
        visible: false
    });
    gridView23.setRowIndicator({
        visible: false
    });
    gridView23.setFooters({
        visible:false,
    });

    gridView23.displayOptions.fitStyle = "even";
    gridView23.header.heights = [30,30]
    gridView23.displayOptions.minRowHeight = 36;
    gridView23.displayOptions.useFocusClass = true;
    
    // gridView02.setColumnLayout(layout02);

    //realGrid scrollbar style
    gridView23.scrollBarWidth = 10;
    gridView23.scrollBarHeight = 10;
    gridView23.scrollBarRadius = 5;


    /*======================= 층/동/증축 - 증축 정보 ======================= */
    const container24 = document.getElementById('realgrid24');
    const provider24 = new RealGrid.LocalDataProvider(false);
    const gridView24 = new RealGrid.GridView(container24);
    gridView24.setDataSource(provider24);

    // 필드 생성
    var fields24 = [
        {fieldName: "년도", dataType: "text",},
        {fieldName: "기준월", dataType: "text",},
        {fieldName: "주부구분", dataType: "text",},
        {fieldName: "층", dataType: "text",},
        {fieldName: "항목1", dataType: "text",},
        {fieldName: "항목2", dataType: "text",},
        {fieldName: "항목3", dataType: "text",},
        {fieldName: "항목4", dataType: "text",},
        {fieldName: "항목n", dataType: "text",},
    ]

    // 컬럼 생성
    var columns24 = [
        {name: "년도", fieldName: "년도", width: "82",
            header: {text: "년도",},
            mergeRule: 'value',
        },
        {name: "기준월", fieldName: "기준월", width: "78",
            header: {text: "기준월",},
            mergeRule: 'value',
        },
        {name: "주부구분", fieldName: "주부구분", width: "76",
            header: {text: "주부구분",},
        },
        {name: "층", fieldName: "층", width: "76",
            header: {text: "층",},
        },
        {name: "항목1", fieldName: "항목1", width: "76",
            header: {text: "항목1",},
        },
        {name: "항목2", fieldName: "항목2", width: "76",
            header: {text: "항목2",},
        },
        {name: "항목3", fieldName: "항목3", width: "76",
            header: {text: "항목3",},
        },
        {name: "항목4", fieldName: "항목4", width: "76",
            header: {text: "항목4",},
        },
        {name: "항목n", fieldName: "항목n", width: "76",
            header: {text: "항목n",},
        },
    ]

    // 로우 생성
    var rows24 = [
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 층: '1', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n: '',},
    ]


    provider24.setFields(fields24); //필드설정
    gridView24.setColumns(columns24); //컬럼설정
    provider24.setRows(rows24); //데이터 채우기

    gridView24.setCheckBar({
        visible: false
    });
    gridView24.setStateBar({
        visible: false
    });
    gridView24.setRowIndicator({
        visible: false
    });
    gridView24.setFooters({
        visible:false,
    });

    gridView24.displayOptions.fitStyle = "even";
    gridView24.header.heights = [30,30]
    gridView24.displayOptions.minRowHeight = 36;
    gridView24.displayOptions.useFocusClass = true;
    
    // gridView02.setColumnLayout(layout02);

    //realGrid scrollbar style
    gridView24.scrollBarWidth = 10;
    gridView24.scrollBarHeight = 10;
    gridView24.scrollBarRadius = 5;



    /*======================= 층/동/증축 - 동 정보 ======================= */
    const container25 = document.getElementById('realgrid25');
    const provider25 = new RealGrid.LocalDataProvider(false);
    const gridView25 = new RealGrid.GridView(container25);
    gridView25.setDataSource(provider25);

    // 필드 생성
    var fields25 = [
        {fieldName: "년도", dataType: "text",},
        {fieldName: "기준월", dataType: "text",},
        {fieldName: "주부구분", dataType: "text",},
        {fieldName: "승인일자", dataType: "text",},
        {fieldName: "내용연수", dataType: "text",},
    ]

    // 컬럼 생성
    var columns25 = [
        {name: "년도", fieldName: "년도", width: "82",
            header: {text: "년도",},
        },
        {name: "기준월", fieldName: "기준월", width: "78",
            header: {text: "기준월",},
            mergeRule:"value",
        },
        {name: "주부구분", fieldName: "주부구분", width: "76",
            header: {text: "주부구분",},
        },
        {name: "승인일자", fieldName: "승인일자", width: "76",
            header: {text: "승인일자",},
        },
        {name: "내용연수", fieldName: "내용연수", width: "76",
            header: {text: "내용연수",},
        },
    ]

    // 로우 생성
    var rows25 = [
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 승인일자: '1994.08.10', 내용연수: '40',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 승인일자: '1994.08.10', 내용연수: '40',},
        {년도: '2022년', 기준월: '01월', 주부구분: '주', 승인일자: '1994.08.10', 내용연수: '40',},
    ]


    provider25.setFields(fields25); //필드설정
    gridView25.setColumns(columns25); //컬럼설정
    provider25.setRows(rows25); //데이터 채우기

    gridView25.setCheckBar({
        visible: false
    });
    gridView25.setStateBar({
        visible: false
    });
    gridView25.setRowIndicator({
        visible: false
    });
    gridView25.setFooters({
        visible:false,
    });

    gridView25.displayOptions.fitStyle = "even";
    gridView25.header.heights = [30,30]
    gridView25.displayOptions.minRowHeight = 36;
    gridView25.displayOptions.useFocusClass = true;
    
    // gridView02.setColumnLayout(layout02);

    //realGrid scrollbar style
    gridView25.scrollBarWidth = 10;
    gridView25.scrollBarHeight = 10;
    gridView25.scrollBarRadius = 5;


    /*======================= 일반정보 ======================= */
    const container26 = document.getElementById('realgrid26');
    const provider26 = new RealGrid.LocalDataProvider(false);
    const gridView26 = new RealGrid.GridView(container26);
    gridView26.setDataSource(provider26);

    // 필드 생성
    var fields26 = [
        {fieldName: "년도", dataType: "text",},
        {fieldName: "기준월", dataType: "text",},
        {fieldName: "구분", dataType: "text",},
        {fieldName: "항목1", dataType: "text",},
        {fieldName: "항목2", dataType: "text",},
        {fieldName: "항목3", dataType: "text",},
        {fieldName: "항목4", dataType: "text",},
        {fieldName: "항목n1", dataType: "text",},
        {fieldName: "항목n2", dataType: "text",},
    ]

    // 컬럼 생성
    var columns26 = [
        {name: "년도", fieldName: "년도", width: "82",
            header: {text: "년도",},
        },
        {name: "기준월", fieldName: "기준월", width: "78",
            header: {text: "기준월",},
        },
        {name: "구분", fieldName: "구분", width: "76",
            header: {text: "구분",},
        },
        {name: "항목1", fieldName: "항목1", width: "76",
            header: {text: "항목1",},
        },
        {name: "항목2", fieldName: "항목2", width: "76",
            header: {text: "항목2",},
        },
        {name: "항목3", fieldName: "항목3", width: "76",
            header: {text: "항목3",},
        },
        {name: "항목4", fieldName: "항목4", width: "76",
            header: {text: "항목4",},
        },
        {name: "항목n1", fieldName: "항목n1", width: "76",
            header: {text: "항목n1",},
        },
        {name: "항목n2", fieldName: "항목n2", width: "76",
            header: {text: "항목n2",},
        },
    ]

    // 로우 생성
    var rows26 = [
        {년도: '2022년', 기준월: '01월', 구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
    ]


    provider26.setFields(fields26); //필드설정
    gridView26.setColumns(columns26); //컬럼설정
    provider26.setRows(rows26); //데이터 채우기


    gridView26.setCheckBar({
        visible: false
    });
    gridView26.setStateBar({
        visible: false
    });
    gridView26.setRowIndicator({
        visible: false
    });
    gridView26.setFooters({
        visible:false,
    });

    gridView26.displayOptions.fitStyle = "even";
    gridView26.header.heights = [30,30]
    gridView26.displayOptions.minRowHeight = 36;
    gridView26.displayOptions.useFocusClass = true;
    
    // gridView02.setColumnLayout(layout02);

    //realGrid scrollbar style
    gridView26.scrollBarWidth = 10;
    gridView26.scrollBarHeight = 10;
    gridView26.scrollBarRadius = 5;


    /*======================= 시점별 지가정보 ======================= */
    const container27 = document.getElementById('realgrid27');
    const provider27 = new RealGrid.LocalDataProvider(false);
    const gridView27 = new RealGrid.GridView(container27);
    gridView27.setDataSource(provider27);

    // 필드 생성
    var fields27 = [
        {fieldName: "년도", dataType: "text",},
        {fieldName: "기준월", dataType: "text",},
        {fieldName: "구분", dataType: "text",},
        {fieldName: "산정가격", dataType: "number", numberFormat: '###0.###'},
        {fieldName: "열람가격", dataType: "number", numberFormat: '###0.###'},
        {fieldName: "의견제출", dataType: "number", numberFormat: '###0.###'},
        {fieldName: "결정가격", dataType: "number", numberFormat: '###0.###'},
        {fieldName: "이의신청", dataType: "number", numberFormat: '###0.###'},

    ]

    // 컬럼 생성
    var columns27 = [
        {name: "년도", fieldName: "년도", width: "82",
            header: {text: "년도",},
        },
        {name: "기준월", fieldName: "기준월", width: "78",
            header: {text: "기준월",},
        },
        {name: "구분", fieldName: "구분", width: "76",
            header: {text: "구분",},
        },
        {name: "산정가격", fieldName: "산정가격", width: "76",
            header: {text: "산정가격",},
        },
        {name: "열람가격", fieldName: "열람가격", width: "76",
            header: {text: "열람가격",},
        },
        {name: "의견제출", fieldName: "의견제출", width: "76",
            header: {text: "의견제출",},
        },
        {name: "결정가격", fieldName: "결정가격", width: "76",
            header: {text: "결정가격",},
        },
        {name: "이의신청", fieldName: "이의신청", width: "76",
            header: {text: "이의신청",},
        },
    ]

    // 로우 생성
    var rows27 = [
        {년도: '2022년', 기준월: '01월', 산정지가: '1970', 열람지가: '1970', 의견제출: '2390', 결정지가: '2390', 이의신청: '0'},
        {년도: '2022년', 기준월: '01월', 산정지가: '1970', 열람지가: '1970', 의견제출: '2390', 결정지가: '2390', 이의신청: '0'},
        {년도: '2022년', 기준월: '01월', 산정지가: '1970', 열람지가: '1970', 의견제출: '2390', 결정지가: '2390', 이의신청: '0'},
        {년도: '2022년', 기준월: '01월', 산정지가: '1970', 열람지가: '1970', 의견제출: '2390', 결정지가: '2390', 이의신청: '0'},
        {년도: '2022년', 기준월: '01월', 산정지가: '1970', 열람지가: '1970', 의견제출: '2390', 결정지가: '2390', 이의신청: '0'},
        {년도: '2022년', 기준월: '01월', 산정지가: '1970', 열람지가: '1970', 의견제출: '2390', 결정지가: '2390', 이의신청: '0'},
        {년도: '2022년', 기준월: '01월', 산정지가: '1970', 열람지가: '1970', 의견제출: '2390', 결정지가: '2390', 이의신청: '0'},
        {년도: '2022년', 기준월: '01월', 산정지가: '1970', 열람지가: '1970', 의견제출: '2390', 결정지가: '2390', 이의신청: '0'},
        {년도: '2022년', 기준월: '01월', 산정지가: '1970', 열람지가: '1970', 의견제출: '2390', 결정지가: '2390', 이의신청: '0'},
        {년도: '2022년', 기준월: '01월', 산정지가: '1970', 열람지가: '1970', 의견제출: '2390', 결정지가: '2390', 이의신청: '0'},
    ]


    provider27.setFields(fields27); //필드설정
    gridView27.setColumns(columns27); //컬럼설정
    provider27.setRows(rows27); //데이터 채우기


    gridView27.setCheckBar({
        visible: false
    });
    gridView27.setStateBar({
        visible: false
    });
    gridView27.setRowIndicator({
        visible: false
    });
    gridView27.setFooters({
        visible:false,
    });

    gridView27.displayOptions.fitStyle = "even";
    gridView27.header.heights = [30,30]
    gridView27.displayOptions.minRowHeight = 36;
    gridView27.displayOptions.useFocusClass = true;
    
    // gridView02.setColumnLayout(layout02);

    //realGrid scrollbar style
    gridView27.scrollBarWidth = 10;
    gridView27.scrollBarHeight = 10;
    gridView27.scrollBarRadius = 5;


    /*======================= 비준표 ======================= */
    const container28 = document.getElementById('realgrid28');
    const provider28 = new RealGrid.LocalDataProvider(false);
    const gridView28 = new RealGrid.GridView(container28);
    gridView28.setDataSource(provider28);


    //pivot 객체 생성
    // pivot09 = new RealPivot("realpivot");
    // pivot09.setDataProvider(provider09);

    // 필드 생성
    var fields28 = [
        {fieldName: "전", dataType: "number", numberFormat: '###0.###'},
        {fieldName: "답", dataType: "number", numberFormat: '###0.###'},
        {fieldName: "과수원", dataType: "number", numberFormat: '###0.###'},
        {fieldName: "목장", dataType: "number", numberFormat: '###0.###'},
        {fieldName: "임야", dataType: "number", numberFormat: '###0.###'},
        {fieldName: "광천지", dataType: "number", numberFormat: '###0.###'},
        {fieldName: "염전", dataType: "number", numberFormat: '###0.###'},
        {fieldName: "대", dataType: "number", numberFormat: '###0.###'},
        {fieldName: "공장", dataType: "number", numberFormat: '###0.###'},
        {fieldName: "학교", dataType: "number", numberFormat: '###0.###'},
        {fieldName: "주차장", dataType: "number", numberFormat: '###0.###'},
        {fieldName: "주유소", dataType: "number", numberFormat: '###0.###'},
        {fieldName: "창고", dataType: "number", numberFormat: '###0.###'},
        {fieldName: "도로", dataType: "number", numberFormat: '###0.###'},
    ]

    // 컬럼 생성
    var columns28 = [
        {name: "전", fieldName: "전", width: "82",
            header: {text: "저",},
        },
        {name: "답", fieldName: "답", width: "78",
            header: {text: "답",},
        },
        {name: "과수원", fieldName: "과수원", width: "76",
            header: {text: "과수원",},
        },
        {name: "목장", fieldName: "목장", width: "76",
            header: {text: "목장",},
        },
        {name: "임야", fieldName: "임야", width: "76",
            header: {text: "임야",},
        },
        {name: "광천지", fieldName: "광천지", width: "76",
            header: {text: "광천지",},
        },
        {name: "염전", fieldName: "염전", width: "76",
            header: {text: "염전",},
        },
        {name: "대", fieldName: "대", width: "76",
            header: {text: "대",},
        },
        {name: "공장", fieldName: "공장", width: "76",
            header: {text: "공장",},
        },
        {name: "학교", fieldName: "학교", width: "76",
            header: {text: "학교",},
        },
        {name: "주차장", fieldName: "주차장", width: "76",
            header: {text: "주차장",},
        },
        {name: "주유소", fieldName: "주유소", width: "76",
            header: {text: "주유소",},
        },
        {name: "창고", fieldName: "창고", width: "76",
            header: {text: "창고",},
        },
        {name: "도로", fieldName: "도로", width: "76",
            header: {text: "도로",},
        },
    ]

    // pivot09.setFieldMapping([{
    //     name: "전",
    //     sourceField: "전"
    // },{
    //     name: "답",
    //     sourceField: "답"
    // },{
    //     name: "과수원",
    //     sourceField: "과수원",
    // },{
    //     name: "목장",
    //     sourceField: "목장",
    // },{
    //     name: "임야",
    //     sourceField: "임야",
    // },{
    //     name: "광천지",
    //     sourceField: "광천지",
    // },{
    //     name: "염전",
    //     sourceField: "염전",
    // },{
    //     name:"대",
    //     sourceField:"대"
    
    // },{
    //     name:"공장",
    //     sourceField:"공장"
        
    // },{
    //     name:"학교",
    //     sourceField:"학교"
    // },{
    //     name:"주차장",
    //     sourceField:"주차장"
    // },{
    //     name:"주유소",
    //     sourceField:"주유소"
    // },{
    //     name:"창고",
    //     sourceField:"창고"
    // },{
    //     name:"도로",
    //     sourceField:"도로"
    // }]);

    // 로우 생성
    var rows28 = [
        {년도: '2022년', 기준월: '01월', 구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월',구분: '', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
    ]

    provider28.setFields(fields28); //필드설정
    gridView28.setColumns(columns28); //컬럼설정
    provider28.setRows(rows28); //데이터 채우기
    // pivot09.drawView();

    gridView28.setCheckBar({
        visible: false
    });
    gridView28.setStateBar({
        visible: false
    });
    gridView28.setRowIndicator({
        visible: false
    });
    gridView28.setFooters({
        visible:false,
    });

    gridView28.displayOptions.fitStyle = "even";
    gridView28.header.heights = [30,30]
    gridView28.displayOptions.minRowHeight = 36;
    gridView28.displayOptions.useFocusClass = true;
    
    // gridView02.setColumnLayout(layout02);

    //realGrid scrollbar style
    gridView28.scrollBarWidth = 10;
    gridView28.scrollBarHeight = 10;
    gridView28.scrollBarRadius = 5;


});
