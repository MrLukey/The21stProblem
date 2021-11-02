import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip} from 'recharts';

function CustomTooltip({ payload, label, active }) {
    if (active) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${payload[0].value}`}</p>
            </div>
        );
    }
    return null;
}

class CustomRadarChart extends PureComponent {
    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={this.props.data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey={this.props.labelKey}/>
                    <Tooltip content={<CustomTooltip />}/>
                    {/*<PolarRadiusAxis />*/}
                    <Radar name={this.props.name} dataKey={this.props.dataKey} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        );
    }
}

export default CustomRadarChart