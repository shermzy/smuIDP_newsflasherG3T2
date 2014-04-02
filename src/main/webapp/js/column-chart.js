function columnChart() {
    var margin = {top: 10, right: 10, bottom: 150, left: 150},
    width = 600,
            height = 600,
            xRoundBands = 0.5,
            xValue = function(d) {
                return d[0];
            },
            yValue = function(d) {
                return d[1];
            },
            yScale = d3.scale.ordinal(),
            xScale = d3.scale.linear(),
            yAxis = d3.svg.axis().scale(yScale).orient("left"),
            xAxis = d3.svg.axis().scale(xScale);


    function chart(selection) {
        selection.each(function(data) {

            // Convert data to standard representation greedily;
            // this is needed for nondeterministic accessors.
            data = data.map(function(d, i) {
                return [xValue.call(data, d, i), yValue.call(data, d, i)];
            });

            // Update the Y-scale. NAME
            yScale
                    .domain(data.map(function(d) {
                        return d[0];
                    }))
                    .rangeRoundBands([600, 0], xRoundBands);


            // Update the X-scale. SABERMETRIC VALUE
            xScale
                    .domain(d3.extent(data.map(function(d) {
                        return d[1];
                    })))
                    .range([0, 600])
                    .nice();


            // Select the svg element, if it exists.
            var svg = d3.select(this).selectAll("svg").data([data]);

            // Otherwise, create the skeletal chart.
            var gEnter = svg.enter().append("svg").append("g");
            gEnter.append("g").attr("class", "bars");
            gEnter.append("g").attr("class", "y axis");
            gEnter.append("g").attr("class", "x axis");
            gEnter.append("g").attr("class", "x axis zero");

            // Update the outer dimensions.
            svg.attr("width", width)
                    .attr("height", height);

            // Update the inner dimensions.
            var g = svg.select("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            // Update the bars.
            var bar = svg.select(".bars").selectAll(".bar").data(data);
            bar.enter().append("rect");
            bar.exit().remove();
            bar.attr("class", function(d, i) {
                return d[1] < 0 ? "bar negative" : "bar positive";
            })
                    .attr("y", function(d) {
                        return Y(d);
                    })
                    .attr("x", function(d, i) {
                        return 0;
                    })
                    .attr("height", 20)
                    .attr("width", 0).transition(300)
                    .attr("width", function(d, i) {
                        return Math.abs(X(d) - X0());
                    })

            // x axis at the bottom of the chart
            g.select(".x.axis")
                    .attr("transform", "translate(0," + (600) + ")")
                    .attr("fill", "#fff")
                    .call(xAxis.orient("bottom"));

            // zero line
            g.select(".x.axis.zero")
                    .attr("transform", "translate(0," + X0() + ")")
                    .call(xAxis.tickFormat("").tickSize(0));


            // Update the y-axis.
            g.select(".y.axis")
                    .attr("fill", "#fff")
                    .call(yAxis);

        });
    }


// The x-accessor for the path generator; xScale ∘ xValue.
    function Y(d) {
        return yScale(d[0]);
    }

    function X0() {
        return 0;
    }

    // The x-accessor for the path generator; yScale ∘ yValue.
    function X(d) {
        return xScale(d[1]);
    }

    chart.margin = function(_) {
        if (!arguments.length)
            return margin;
        margin = _;
        return chart;
    };

    chart.width = function(_) {
        if (!arguments.length)
            return width;
        width = _;
        return chart;
    };

    chart.height = function(_) {
        if (!arguments.length)
            return height;
        height = _;
        return chart;
    };

    chart.x = function(_) {
        if (!arguments.length)
            return xValue;
        xValue = _;
        return chart;
    };

    chart.y = function(_) {
        if (!arguments.length)
            return yValue;
        yValue = _;
        return chart;
    };

    return chart;
}