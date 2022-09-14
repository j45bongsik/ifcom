$(document).ready(function(){


  /* ----- 관리자 대시보드 - 사용자 업무 별 접속통계 ----- */
  var chart01 = am4core.create("chartdiv01", am4charts.XYChart);

  // Add data
  chart01.data = [{
    "country": "추출",
    "visits": 200,
    "color": am4core.color("#5775E9")
  }, {
    "country": "잠재력",
    "visits": 50,
    "color": am4core.color("#FFBD40")
  }, {
    "country": "현황",
    "visits": 50,
    "color": am4core.color("#C85856")
  },
];
  
  // Create axes
  var categoryAxis01 = chart01.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis01.dataFields.category = "country";
  categoryAxis01.renderer.grid.template.location = 0;
  categoryAxis01.renderer.minGridDistance = 30;
  
  // y축
  var valueAxis01 = chart01.yAxes.push(new am4charts.ValueAxis());
  valueAxis01.min = 0;
  valueAxis01.renderer.labels.template.fontSize = 14;
  valueAxis01.renderer.labels.template.fontFamily = 'Noto Sans';

  // Create series
  var series01 = chart01.series.push(new am4charts.ColumnSeries());
  series01.dataFields.valueY = "visits";
  series01.dataFields.categoryX = "country";
  series01.name = "Visits";
  series01.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
  series01.tooltip.pointerOrientation = "vertical";
  series01.columns.template.tooltipY = -6;
  series01.columns.template.propertyFields.fill = "color";
  
  var columnTemplate01 = series01.columns.template;
  columnTemplate01.maxWidth = 70;
  columnTemplate01.strokeWidth = 0;
  columnTemplate01.column.cornerRadius(5, 5, 0, 0);


/* ----- 관리자 대시보드 - 권한신청현황 ----- */
var chart02 = am4core.create("chartdiv02", am4charts.PieChart);

// Add data
chart02.data = [{
  "country": "권한신청",
  "litres": 50,
  "color": am4core.color("#5775E9")
}, {
  "country": "반려",
  "litres": 50,
  "color": am4core.color("#2C3868")
}, {
  "country": "승인",
  "litres": 50,
  "color": am4core.color("#56B4A4")
}, {
  "country": "미승인",
  "litres": 50,
  "color": am4core.color("#68C0EE")
}];

// Add and configure Series
var pieSeries02 = chart02.series.push(new am4charts.PieSeries());
pieSeries02.dataFields.value = "litres";
pieSeries02.dataFields.category = "country";
pieSeries02.slices.template.propertyFields.fill = "color";

// 범례 생성
chart02.legend = new am4charts.Legend();

// 라벨 삭제
pieSeries02.labels.template.disabled = true;

// 범례 옵션
chart02.legend.valueLabels.template.align = "left";
chart02.legend.valueLabels.template.textAlign = "end"; 
chart02.legend.itemContainers.template.paddingTop = 5;
chart02.legend.itemContainers.template.paddingBottom = 5;
chart02.legend.itemContainers.template.paddingRight = -2;
chart02.legend.itemContainers.template.paddingLeft = -2;

//범례 % 삭제
// pieSeries.legendSettings.valueText = "{valueY.close}";

// 범례 마커 옵션
let markerTemplate02 = chart02.legend.markers.template;
markerTemplate02.width = 20;
markerTemplate02.height = 20;

//hover
let hs02 = pieSeries02.slices.template.states.getKey("hover");
hs02.properties.scale = 1;


/* ----- 관리자 대시보드 - 현황분석 ----- */
var chart03 = am4core.create("chartdiv03", am4charts.PieChart);

// Add data
chart03.data = [{
  "country": "대기",
  "litres": 50,
  "color": am4core.color("#5775E9")
}, {
  "country": "진행",
  "litres": 50,
  "color": am4core.color("#2C3868")
}, {
  "country": "완료",
  "litres": 50,
  "color": am4core.color("#56B4A4")
}, {
  "country": "오류",
  "litres": 50,
  "color": am4core.color("#68C0EE")
}];

// Add and configure Series
var pieSeries03 = chart03.series.push(new am4charts.PieSeries());
pieSeries03.dataFields.value = "litres";
pieSeries03.dataFields.category = "country";
pieSeries03.slices.template.propertyFields.fill = "color";

// 범례 생성
chart03.legend = new am4charts.Legend();

// 라벨 삭제
pieSeries03.labels.template.disabled = true;

// 범례 옵션
chart03.legend.valueLabels.template.align = "left";
chart03.legend.valueLabels.template.textAlign = "end"; 
chart03.legend.itemContainers.template.paddingTop = 5;
chart03.legend.itemContainers.template.paddingBottom = 5;
chart03.legend.itemContainers.template.paddingRight = 0;
chart03.legend.itemContainers.template.paddingLeft = 0;

//범례 % 삭제
// pieSeries02.legendSettings.valueText = "{valueY.close}";

// 범례 마커 옵션
let markerTemplate03 = chart03.legend.markers.template;
markerTemplate03.width = 20;
markerTemplate03.height = 20;

//hover
let hs03 = pieSeries03.slices.template.states.getKey("hover");
hs03.properties.scale = 1;


/* ----- 관리자 대시보드 - 잠재력분석 ----- */
var chart04 = am4core.create("chartdiv04", am4charts.PieChart);

// Add data
chart04.data = [{
  "country": "대기",
  "litres": 50,
  "color": am4core.color("#5775E9")
}, {
  "country": "진행",
  "litres": 50,
  "color": am4core.color("#2C3868")
}, {
  "country": "완료",
  "litres": 50,
  "color": am4core.color("#56B4A4")
}, {
  "country": "오류",
  "litres": 50,
  "color": am4core.color("#68C0EE")
}];

// Add and configure Series
var pieSeries04 = chart04.series.push(new am4charts.PieSeries());
pieSeries04.dataFields.value = "litres";
pieSeries04.dataFields.category = "country";
pieSeries04.slices.template.propertyFields.fill = "color";

// 범례 생성
chart04.legend = new am4charts.Legend();

// 라벨 삭제
pieSeries04.labels.template.disabled = true;

// 범례 옵션
chart04.legend.valueLabels.template.align = "left";
chart04.legend.valueLabels.template.textAlign = "end"; 
chart04.legend.itemContainers.template.paddingTop = 5;
chart04.legend.itemContainers.template.paddingBottom = 5;
chart04.legend.itemContainers.template.paddingRight = 0;
chart04.legend.itemContainers.template.paddingLeft = 0;

//범례 % 삭제
// pieSeries.legendSettings.valueText = "{valueY.close}";

// 범례 마커 옵션
let markerTemplate04 = chart04.legend.markers.template;
markerTemplate04.width = 20;
markerTemplate04.height = 20;

//hover
let hs04 = pieSeries04.slices.template.states.getKey("hover");
hs04.properties.scale = 1;


/* ----- 관리자 대시보드 - 추출 ----- */
var chart05 = am4core.create("chartdiv05", am4charts.PieChart);

// Add data
chart05.data = [{
  "country": "대기",
  "litres": 50,
  "color": am4core.color("#5775E9")
}, {
  "country": "진행",
  "litres": 50,
  "color": am4core.color("#2C3868")
}, {
  "country": "완료",
  "litres": 50,
  "color": am4core.color("#56B4A4")
}, {
  "country": "오류",
  "litres": 50,
  "color": am4core.color("#68C0EE")
}];

// Add and configure Series
var pieSeries05 = chart05.series.push(new am4charts.PieSeries());
pieSeries05.dataFields.value = "litres";
pieSeries05.dataFields.category = "country";
pieSeries05.slices.template.propertyFields.fill = "color";

// 범례 생성
chart05.legend = new am4charts.Legend();

// 라벨 삭제
pieSeries05.labels.template.disabled = true;

// 범례 옵션
chart05.legend.valueLabels.template.align = "left";
chart05.legend.valueLabels.template.textAlign = "end"; 
chart05.legend.itemContainers.template.paddingTop = 5;
chart05.legend.itemContainers.template.paddingBottom = 5;
chart05.legend.itemContainers.template.paddingRight = 0;
chart05.legend.itemContainers.template.paddingLeft = 0;

//범례 % 삭제
// pieSeries.legendSettings.valueText = "{valueY.close}";

// 범례 마커 옵션
let markerTemplate05 = chart05.legend.markers.template;
markerTemplate05.width = 20;
markerTemplate05.height = 20;

//hover
let hs05 = pieSeries05.slices.template.states.getKey("hover");
hs05.properties.scale = 1;


/* ----- 관리자 대시보드 - 다운로드 현황 ----- */
var chart06 = am4core.create("chartdiv06", am4charts.XYChart);

// Add data
chart06.data = [{
  "country": "추출",
  "visits": 50,
  "color": am4core.color("#5775E9")
}, {
  "country": "잠재력",
  "visits": 50,
  "color": am4core.color("#FFBD40")
}, {
  "country": "현황",
  "visits": 200,
  "color": am4core.color("#C85856")
},
];

// Create axes
var categoryAxis06 = chart06.xAxes.push(new am4charts.CategoryAxis());
categoryAxis06.dataFields.category = "country";
categoryAxis06.renderer.grid.template.location = 0;
categoryAxis06.renderer.minGridDistance = 30;

// y축
var valueAxis06 = chart06.yAxes.push(new am4charts.ValueAxis());
valueAxis06.min = 0;
valueAxis06.renderer.labels.template.fontSize = 14;
valueAxis06.renderer.labels.template.fontFamily = 'Noto Sans';

// Create series
var series06 = chart06.series.push(new am4charts.ColumnSeries());
series06.dataFields.valueY = "visits";
series06.dataFields.categoryX = "country";
series06.name = "Visits";
series06.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
series06.tooltip.pointerOrientation = "vertical";
series06.columns.template.tooltipY = -6;
series06.columns.template.propertyFields.fill = "color";

var columnTemplate06 = series06.columns.template;
columnTemplate06.maxWidth = 70;
columnTemplate06.strokeWidth = 0;
columnTemplate06.column.cornerRadius(5, 5, 0, 0);



});
