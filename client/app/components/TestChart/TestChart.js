import React, { Component } from "react";
import { Chart, Axis, Series, Tooltip, Cursor, Line, Bar } from "react-charts";
import axios from "axios";

class TestChart extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // data: [
            //     {
            //         label: "Series 1",
            //         data: []
            //     }
            // ],

            render: false
        }
    }

    componentWillMount() {
        axios.get("/all-trails")
            .then(res => {
                console.log(res.data)

                let data = [
                    {
                        label: "Series 1",
                        data: []
                    }
                ]
                    let trailNames = []

                res.data.trails.map(trail => {
                    if (trailNames.indexOf(trail.name) === -1) {

                        trailNames.push(trail.name)
                        data[0].data.push(
                            {
                                x: trail.name,
                                y: 1
                            }
                        )
                    } else {
                        // data[data.indexOf(trail.name)].y ++

                        data[0].data[trailNames.indexOf(trail.name)].y += 1 
                    }
                })

                this.setState({
                    data
                })
            })
    }


    render() {

        // const data = this.state.data

        if (this.state.data) { console.log(this.state.data) }
        return (
            <div className="chart" >
                {/* <Chart data={data}>
                    <Axis primary type="ordinal" position="left" />
                    <Axis type="linear" stacked position="bottom" />
                    <Series type={Bar} />
                    <Cursor primary />
                    <Cursor />
                    <Tooltip focus="chartTop" />
                </Chart> */}

                {this.state.data && <Chart data={this.state.data}>
                    <Axis primary type="ordinal" />
                    <Axis type="linear" min={0} max={0} />
                    <Series type={Bar} />
                </Chart>}

                {/* <Chart
                    data={[
                        {
                            label: "Series 1",
                            data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
                        },
                        {
                            label: "Series 2",
                            data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
                        }
                    ]}
                >
                    <Axis primary type="time" />
                    <Axis type="linear" />
                    <Series type={Line} />
                    <Tooltip focus="chartTop" />

                </Chart> */}

            </div>
        );
    }
}

export default TestChart