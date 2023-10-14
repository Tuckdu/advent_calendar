import React, { Component } from 'react';
import RiddlePopUp from './RiddlePopUp';

class DayCell extends Component {
    state = {
        showRiddle: false,
        isActivate: this.props.isActivated
    }

    handleToggleRiddle = (e) => {
        let a = e.target;
        const parents = [];
        while (a) {
            parents.push(a.className);
            a = a.parentNode;
        }
        const isDayCell = (parents.filter(function (str) { return /dayCell/.test(str); })).length > 0;
        const isRiddle = (parents.filter(function (str) { return /riddleContent/.test(str); })).length > 0;
        if(isDayCell && !isRiddle){
            this.setState({
                showRiddle:!this.state.showRiddle
            })
        }
    }

    handleCloseRiddle = () => {
        this.setState({
            showRiddle:false
        })
    }

    render() {   
        const {data, randomNumber, isActivated} = this.props;
        const showRiddle = this.state.showRiddle;
        return (
            <div 
                className={"dayCell" + (showRiddle && isActivated ? ' noHover' : '')}
                onClick={this.handleToggleRiddle}
            >
                <div className={"dayCellContent background" + randomNumber + (isActivated ? ' activate' : ' deactivate')}>
                    <h2>{data.day}</h2>
                </div>

                {
                    showRiddle && isActivated && <RiddlePopUp data={data} closeRiddle={this.handleCloseRiddle}/>
                }
            </div>
        );
    }
}

export default DayCell;