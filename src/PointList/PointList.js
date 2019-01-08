import React from 'react';
import Point from './Point/Point';

const PointList = props => {
    const points = props.points;
    // let lastKey = props.lastKey; 
    console.log(points)
    return (
        points.map( (point) =>
            <Point
                key = {point.key}
                pointName = {point.pointName}
            />
        )
    )
}

export default PointList;