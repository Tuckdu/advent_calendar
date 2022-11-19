import React, { Component } from 'react';
import DayCell from './../components/DayCell';
import Countdown from 'react-countdown'; 

// Renderer callback with condition
const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <div/>;
    } else {
      // Render a countdown
      return <div className='countdown'>{days} jours {hours}h {minutes}min {seconds}s</div>;
    }
  };

class Calendar extends Component {
    
    isActivated = (datas) => {
        // dev mode should be false by default
        const allActive = false
        const date = new Date();
        const isBeforeToday = datas.day < date.getDay();
        if(allActive || isBeforeToday){
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

                {<Countdown className='countdown' date={new Date("Dec 1, 2022 00:00:00").getTime()} renderer={countdownRenderer}/>}
                
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