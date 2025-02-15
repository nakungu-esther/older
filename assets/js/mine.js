const procurementTrendsCtx = document.getElementById('procurement-trends-chart').getContext('2d');
const salesDistributionCtx = document.getElementById('sales-distribution-chart').getContext('2d');

const procurementTrendsChart = new Chart(procurementTrendsCtx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Procurement Trends',
            data: [50, 60, 70, 90, 100, 120],
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false
        }]
    }
});

const salesDistributionChart = new Chart(salesDistributionCtx, {
    type: 'bar',
    data: {
        labels: ['G,nuts', 'CowPeas', 'Soya', 'Beans','Maize'],
        datasets: [{
            label: 'Sales Distribution',
            data: [150, 200, 300, 250,100],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    }
});
