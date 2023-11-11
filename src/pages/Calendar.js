import React, { Component } from 'react';
import DayCell from './../components/DayCell';
import Countdown from 'react-countdown';
import Snowfall from 'react-snowfall';

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
    render() {
        function getRandomInt(max, except_value=[]) {
            let random_value = Math.floor(Math.random() * max);
            if(except_value.length === 0){
                return random_value;
            }
            while(random_value === except_value[0]){
                random_value = Math.floor(Math.random() * max);
            }
            except_value[0] = random_value
            return random_value
        }

        // dev mode: active all day cells(default=false)
        const allActive = false;
        // dev mode: active day cells until actual day (default=false)
        const simulateDecember = false;

        let now = new Date();
        const isDecember = now.getMonth() === 11 || simulateDecember;
        const currentDay = now.getDate()

        const nb_bg = 7
        const datas = this.props.datas;
        // this need to be an array to be passed by reference
        var except_value = [getRandomInt(nb_bg) + 1];

        return (
            <div className="calendar">
                <Snowfall/>
                <h1>Calendrier de l'avent 2023</h1>

                <Countdown className='countdown' date={new Date("Dec 1, 2023 00:00:00").getTime()} renderer={countdownRenderer}/>
                
                <div className="calendarContent">
                    {datas.map((data) => {
                        return <DayCell key={data.day} 
                                        data={data} 
                                        randomNumber={getRandomInt(nb_bg, except_value)+1} 
                                        isActivated={(isDecember && (data.day <= currentDay)) || allActive}
                                        currentDay={currentDay}/>;
                    })}
                </div>
            </div>
        );
    }
}

export default Calendar;