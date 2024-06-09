
const graphOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        }
    },
    scales: {
        x: {
            title: {
                display: true,
            }
        },
        y: {
            beginAtZero: true,
            title: {
                display: true,
            },
            ticks: {
                stepSize: 1,
            }
        }
    }
};

const colorCodes = [
    {    
        label: "PR Open",
        fillColor: "#EF6B6B"
    },
    {
        label: "PR Merged",
        fillColor: "#61CDBB"
    },
    {
        label: "Commits",
        fillColor: "#FAC76E"
    },
    {
        label: "PR Reviewed",
        fillColor: "#C2528B"
    },
    {
        label: "PR Comments",
        fillColor: "#0396A6"
    },
    {
        label: "Incident Alerts",
        fillColor: "#5F50A9"
    },
    {
        label: "Incidents Resolved",
        fillColor: "#8F3519"
    }
]

export {
    graphOptions,
    colorCodes
}