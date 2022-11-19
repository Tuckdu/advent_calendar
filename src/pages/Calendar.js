import React, { Component } from 'react';
import DayCell from './../components/DayCell';

class Calendar extends Component {

    isActivated = (datas) => {
        const date = new Date();
        const isBeforeToday = datas.day < date.getDay();
        if(isBeforeToday){
            this.setState({
                isActivate: true
            }) 
        }else{
            this.setState({
                isActivate: false
            })
        }
    }

    render() {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }

        const datas = this.props.datas;

        return (
            <div className="calendar">
                <h1>Calendrier de l'avent 2022</h1>
                
                <div className="calendarContent">
                    {datas.map((data) => {
                        return <DayCell key={data.day} data={data} randomNumber={getRandomInt(4)+1} isActivated={data.isActivated}/>;
                    })}
                </div>
            </div>
        );
    }
}

export default Calendar;