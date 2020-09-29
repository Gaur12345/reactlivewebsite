
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Red'],
        datasets: [{
            label: '# of Votes',
            data: [12],
            backgroundColor: [
                'red'

            ],
            borderColor: [
                'red'
          
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
