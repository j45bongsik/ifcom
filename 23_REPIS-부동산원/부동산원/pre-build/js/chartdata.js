$(document).ready(function(){


    const ctx01 = document.getElementById('myChart01').getContext('2d');
    const myChart01 = new Chart(ctx01, {
        type: 'bar',
        data: {
            labels: ['2022년 1월', '2022년 2월', '2022년 3월', '2022년 4월', '2022년 5월'],
            datasets: [
                {
                    label: '확인서',
                    data: [1, 2, 3, 4, 5],
                    backgroundColor: 'rgba(124, 217, 226, 1)',
                    barThickness: 26,
                    minBarLength: 26,
                    order: 1
                },
                {
                    label: '표준지',
                    data: [5, 4, 3, 2, 1],
                    backgroundColor:'rgba(100, 159, 211, 1)',
                    barThickness: 26,
                    minBarLength: 26,
                    order: 1
                },
                {
                    label: '산정지가',
                    type: 'line',
                    data: [5, 4, 5, 4, 5],
                    backgroundColor: 'rgba(245, 182, 56, 1)',
                    borderColor:'rgba(245, 182, 56, 1)',
                    order: 0
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 12,
                            family: "'Noto Sans'",
                            
                        },
                        
                    }
                }
            },
            
        }
    });



})
