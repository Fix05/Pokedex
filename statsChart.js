
function getChart(stats) {


    const labels = ["HP",
        "Attack",
        "Defense",
        "Sp. Atk",
        "Sp. Def",
        "Speed"]


    const data = {
        labels: labels,
        datasets: [{
            backgroundColor: '#ff6384',
            data: stats,

            borderRadius: 15,
            barThickness: 15,
            pointStyle: 'line',
            borderWidth: 10,
            borderColor: 'black',

            

            backgroundColor: getColors(stats)[0],

            hoverBackgroundColor: getColors(stats)[1],

            borderWidth: 0,
        }]
    };


    const config = {
        type: 'bar',
        data: data,
        plugins: [ChartDataLabels],
        options: {

            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                datalabels: {
                    display: true,
                    color: '#c3c3c3',
                    anchor: 'end',
                    align: 'right',
                    clamp: true
                },
                legend: {
                    display: false
                }
            },

            //,

            scales: {
                y: {
                    ticks: {
                        color: '#c3c3c3'
                    },
                    beginAtZero: true,
                    grid: {
                        display: false
                    }
                },
                x: {
                    min: 0,
                    max: Math.max(...stats)+35,
                    ticks: {
                        display: false
                    },
                    grid: {
                        display: false
                    }
                }
            }
        },
    };

    return config

}

function getColors(stats) {

    colors=[[],[]]

    stats.forEach(element => {        

        if (element <= 29) {
            colors[0].push('rgb(243,68,68)')
            colors[1].push('rgb(243,68,68,0.7)')
        } else if (element > 29 && element < 60) {
            colors[0].push('rgb(255,127,15)')
            colors[1].push('rgb(255,127,15,0.7)')
        } else if (element > 59 && element < 90) {
            colors[0].push('rgb(255,221,87)')
            colors[1].push('rgb(255,221,87,0.7)')
        } else if (element > 89 && element < 120) {
            colors[0].push('rgb(160,229,21)')
            colors[1].push('rgb(160,229,21,0.7)')
        } else if (element > 119 && element < 150) {
            colors[0].push('rgb(35,205,94)')
            colors[1].push('rgb(35,205,94,0.7)')
        } else {
            colors[0].push('rgb(0,194,184)')
            colors[1].push('rgb(0,194,184,0.7)')
        }


    });

    
    return colors

}






