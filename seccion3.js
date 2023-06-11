//crear rectangulos
const data = [
    {
        width: 200,
        height: 100,
        fill: 'blue'
    },
    {
        width: 100,
        height: 60,
        fill: 'red'
    },
    {
        width: 50,
        height: 30,
        fill: 'pink'
    },
]

const svg = d3.select('div')

const rect = svg.selectAll('rect')
    .data(data)
    .attr('width', (data, i, n) => {
        console.log(data, i, n);
        return data.width
    })
    .attr('height', (data, i, n) => data.height)
    .attr('fill', (data, i, n) => data.fill)