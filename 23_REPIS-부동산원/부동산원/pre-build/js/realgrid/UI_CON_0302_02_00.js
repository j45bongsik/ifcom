
document.addEventListener('DOMContentLoaded', function () {
    const container02 = document.getElementById('realgrid02');
    const provider02 = new RealGrid.LocalDataProvider(false);
    const gridView02 = new RealGrid.GridView(container02);
    gridView02.setDataSource(provider02);

    // 필드 생성
    var fields02 = [
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
    var columns02 = [
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
    var rows02 = [
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


    provider02.setFields(fields02); //필드설정
    gridView02.setColumns(columns02); //컬럼설정
    provider02.setRows(rows02); //데이터 채우기


    gridView02.setCheckBar({
        visible: false
    });
    gridView02.setStateBar({
        visible: false
    });
    gridView02.setRowIndicator({
        visible: false
    });
    gridView02.setFooters({
        visible:false,
    });

    gridView02.displayOptions.fitStyle = "even";
    gridView02.header.heights = [30,30]
    gridView02.displayOptions.minRowHeight = 36;
    gridView02.displayOptions.useFocusClass = true;
    
    // gridView02.setColumnLayout(layout02);

    //realGrid scrollbar style
    gridView02.scrollBarWidth = 10;
    gridView02.scrollBarHeight = 10;
    gridView02.scrollBarRadius = 5;


    /*======================= 시점별 지가정보 ======================= */
    const container03 = document.getElementById('realgrid03');
    const provider03 = new RealGrid.LocalDataProvider(false);
    const gridView03 = new RealGrid.GridView(container03);
    gridView03.setDataSource(provider03);

    // 필드 생성
    var fields03 = [
        {fieldName: "년도", dataType: "text",},
        {fieldName: "기준월", dataType: "text",},
        {fieldName: "구분", dataType: "text",},
        {fieldName: "산정지가", dataType: "number", numberFormat: '###0.###'},
        {fieldName: "열람지가", dataType: "number", numberFormat: '###0.###'},
        {fieldName: "의견제출", dataType: "number", numberFormat: '###0.###'},
        {fieldName: "결정지가", dataType: "number", numberFormat: '###0.###'},
        {fieldName: "이의신청", dataType: "number", numberFormat: '###0.###'},

    ]

    // 컬럼 생성
    var columns03 = [
        {name: "년도", fieldName: "년도", width: "82",
            header: {text: "년도",},
        },
        {name: "기준월", fieldName: "기준월", width: "78",
            header: {text: "기준월",},
        },
        {name: "구분", fieldName: "구분", width: "76",
            header: {text: "구분",},
        },
        {name: "산정지가", fieldName: "산정지가", width: "76",
            header: {text: "산정지가",},
        },
        {name: "열람지가", fieldName: "열람지가", width: "76",
            header: {text: "열람지가",},
        },
        {name: "의견제출", fieldName: "의견제출", width: "76",
            header: {text: "의견제출",},
        },
        {name: "결정지가", fieldName: "결정지가", width: "76",
            header: {text: "결정지가",},
        },
        {name: "이의신청", fieldName: "이의신청", width: "76",
            header: {text: "이의신청",},
        },
    ]

    // 로우 생성
    var rows03 = [
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


    provider03.setFields(fields03); //필드설정
    gridView03.setColumns(columns03); //컬럼설정
    provider03.setRows(rows03); //데이터 채우기


    gridView03.setCheckBar({
        visible: false
    });
    gridView03.setStateBar({
        visible: false
    });
    gridView03.setRowIndicator({
        visible: false
    });
    gridView03.setFooters({
        visible:false,
    });

    gridView03.displayOptions.fitStyle = "even";
    gridView03.header.heights = [30,30]
    gridView03.displayOptions.minRowHeight = 36;
    gridView03.displayOptions.useFocusClass = true;
    
    // gridView02.setColumnLayout(layout02);

    //realGrid scrollbar style
    gridView03.scrollBarWidth = 10;
    gridView03.scrollBarHeight = 10;
    gridView03.scrollBarRadius = 5;


    /*======================= 토지특성 ======================= */
    const container04 = document.getElementById('realgrid04');
    const provider04 = new RealGrid.LocalDataProvider(false);
    const gridView04 = new RealGrid.GridView(container04);
    gridView04.setDataSource(provider04);

    // 필드 생성
    var fields04 = [
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
    var columns04 = [
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
    var rows04 = [
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


    provider04.setFields(fields04); //필드설정
    gridView04.setColumns(columns04); //컬럼설정
    provider04.setRows(rows04); //데이터 채우기


    gridView04.setCheckBar({
        visible: false
    });
    gridView04.setStateBar({
        visible: false
    });
    gridView04.setRowIndicator({
        visible: false
    });
    gridView04.setFooters({
        visible:false,
    });

    gridView04.displayOptions.fitStyle = "even";
    gridView04.header.heights = [30,30]
    gridView04.displayOptions.minRowHeight = 36;
    gridView04.displayOptions.useFocusClass = true;
    
    // gridView02.setColumnLayout(layout02);

    //realGrid scrollbar style
    gridView04.scrollBarWidth = 10;
    gridView04.scrollBarHeight = 10;
    gridView04.scrollBarRadius = 5;


    /*======================= 산정배율 ======================= */
    const container05 = document.getElementById('realgrid05');
    const provider05 = new RealGrid.LocalDataProvider(false);
    const gridView05 = new RealGrid.GridView(container05);
    gridView05.setDataSource(provider05);

    // 필드 생성
    var fields05 = [
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
    var columns05 = [
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
    var rows05 = [
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

    provider05.setFields(fields05); //필드설정
    gridView05.setColumns(columns05); //컬럼설정
    provider05.setRows(rows05); //데이터 채우기

    gridView05.setCheckBar({
        visible: false
    });
    gridView05.setStateBar({
        visible: false
    });
    gridView05.setRowIndicator({
        visible: false
    });
    gridView05.setFooters({
        visible:false,
    });

    gridView05.displayOptions.fitStyle = "even";
    gridView05.header.heights = [30,30]
    gridView05.displayOptions.minRowHeight = 36;
    gridView05.displayOptions.useFocusClass = true;
    
    // gridView02.setColumnLayout(layout02);

    //realGrid scrollbar style
    gridView05.scrollBarWidth = 10;
    gridView05.scrollBarHeight = 10;
    gridView05.scrollBarRadius = 5;


    /*======================= 토지(임야)대장 ======================= */
    const container06 = document.getElementById('realgrid06');
    const provider06 = new RealGrid.LocalDataProvider(false);
    const gridView06 = new RealGrid.GridView(container06);
    gridView06.setDataSource(provider05);

    // 필드 생성
    var fields06 = [
        {fieldName: "년도", dataType: "text",},
        {fieldName: "기준월", dataType: "text",},
        {fieldName: "항목1", dataType: "text",},
        {fieldName: "항목2", dataType: "text",},
        {fieldName: "항목3", dataType: "text",},
        {fieldName: "항목4", dataType: "text",},
        {fieldName: "항목n1", dataType: "text",},
        {fieldName: "항목n2", dataType: "text",},
    ]

    // 컬럼 생성
    var columns06 = [
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
        {name: "항목n1", fieldName: "항목n1", width: "76",
            header: {text: "항목n1",},
        },
        {name: "항목n2", fieldName: "항목n2", width: "76",
            header: {text: "항목n2",},
        },
    ]

    // 로우 생성
    var rows06 = [
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
    ]

    provider06.setFields(fields06); //필드설정
    gridView06.setColumns(columns06); //컬럼설정
    provider06.setRows(rows06); //데이터 채우기

    gridView06.setCheckBar({
        visible: false
    });
    gridView06.setStateBar({
        visible: false
    });
    gridView06.setRowIndicator({
        visible: false
    });
    gridView06.setFooters({
        visible:false,
    });

    gridView06.displayOptions.fitStyle = "even";
    gridView06.header.heights = [30,30]
    gridView06.displayOptions.minRowHeight = 36;
    gridView06.displayOptions.useFocusClass = true;
    
    // gridView02.setColumnLayout(layout02);

    //realGrid scrollbar style
    gridView06.scrollBarWidth = 10;
    gridView06.scrollBarHeight = 10;
    gridView06.scrollBarRadius = 5;


    /*======================= 토지이용현황 ======================= */
    const container07 = document.getElementById('realgrid07');
    const provider07 = new RealGrid.LocalDataProvider(false);
    const gridView07 = new RealGrid.GridView(container07);
    gridView07.setDataSource(provider07);

    // 필드 생성
    var fields07 = [
        {fieldName: "년도", dataType: "text",},
        {fieldName: "기준월", dataType: "text",},
        {fieldName: "항목1", dataType: "text",},
        {fieldName: "항목2", dataType: "text",},
        {fieldName: "항목3", dataType: "text",},
        {fieldName: "항목4", dataType: "text",},
        {fieldName: "항목n1", dataType: "text",},
        {fieldName: "항목n2", dataType: "text",},
    ]

    // 컬럼 생성
    var columns07 = [
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
        {name: "항목n1", fieldName: "항목n1", width: "76",
            header: {text: "항목n1",},
        },
        {name: "항목n2", fieldName: "항목n2", width: "76",
            header: {text: "항목n2",},
        },
    ]

    // 로우 생성
    var rows07 = [
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
        {년도: '2022년', 기준월: '01월', 항목1: '', 항목2: '', 항목3: '', 항목4: '', 항목n1: '', 항목n2: '',},
    ]

    provider07.setFields(fields07); //필드설정
    gridView07.setColumns(columns07); //컬럼설정
    provider07.setRows(rows07); //데이터 채우기

    gridView07.setCheckBar({
        visible: false
    });
    gridView07.setStateBar({
        visible: false
    });
    gridView07.setRowIndicator({
        visible: false
    });
    gridView07.setFooters({
        visible:false,
    });

    gridView07.displayOptions.fitStyle = "even";
    gridView07.header.heights = [30,30]
    gridView07.displayOptions.minRowHeight = 36;
    gridView07.displayOptions.useFocusClass = true;
    
    // gridView02.setColumnLayout(layout02);

    //realGrid scrollbar style
    gridView07.scrollBarWidth = 10;
    gridView07.scrollBarHeight = 10;
    gridView07.scrollBarRadius = 5;


    /*======================= 성과품 ======================= */
    const container08 = document.getElementById('realgrid08');
    const provider08 = new RealGrid.LocalDataProvider(false);
    const gridView08 = new RealGrid.GridView(container08);
    gridView08.setDataSource(provider08);

    // 필드 생성
    var fields08 = [
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
    var columns08 = [
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
    var rows08 = [
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

    provider08.setFields(fields08); //필드설정
    gridView08.setColumns(columns08); //컬럼설정
    provider08.setRows(rows08); //데이터 채우기

    gridView08.setCheckBar({
        visible: false
    });
    gridView08.setStateBar({
        visible: false
    });
    gridView08.setRowIndicator({
        visible: false
    });
    gridView08.setFooters({
        visible:false,
    });

    gridView08.displayOptions.fitStyle = "even";
    gridView08.header.heights = [30,30]
    gridView08.displayOptions.minRowHeight = 36;
    gridView08.displayOptions.useFocusClass = true;
    
    // gridView02.setColumnLayout(layout02);

    //realGrid scrollbar style
    gridView08.scrollBarWidth = 10;
    gridView08.scrollBarHeight = 10;
    gridView08.scrollBarRadius = 5;


    /*======================= 비준표 ======================= */
    const container09 = document.getElementById('realgrid09');
    const provider09 = new RealGrid.LocalDataProvider(false);
    const gridView09 = new RealGrid.GridView(container09);
    gridView09.setDataSource(provider09);


    //pivot 객체 생성
    // pivot09 = new RealPivot("realpivot");
    // pivot09.setDataProvider(provider09);

    // 필드 생성
    var fields09 = [
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
    var columns09 = [
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
    var rows09 = [
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

    provider09.setFields(fields09); //필드설정
    gridView09.setColumns(columns09); //컬럼설정
    provider09.setRows(rows09); //데이터 채우기
    // pivot09.drawView();

    gridView09.setCheckBar({
        visible: false
    });
    gridView09.setStateBar({
        visible: false
    });
    gridView09.setRowIndicator({
        visible: false
    });
    gridView09.setFooters({
        visible:false,
    });

    gridView09.displayOptions.fitStyle = "even";
    gridView09.header.heights = [30,30]
    gridView09.displayOptions.minRowHeight = 36;
    gridView09.displayOptions.useFocusClass = true;
    
    // gridView02.setColumnLayout(layout02);

    //realGrid scrollbar style
    gridView09.scrollBarWidth = 10;
    gridView09.scrollBarHeight = 10;
    gridView09.scrollBarRadius = 5;


    

});
