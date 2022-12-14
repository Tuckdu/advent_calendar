import React, { Component } from 'react';

import successSound from '../media/sound/success.mp3';
import successWoohooSound from '../media/sound/success_woohoo.mp3';
import failureSound from '../media/sound/failure.mp3';
import failureOuchSound from '../media/sound/failure_ouch.mp3';

class RiddlePopUp extends Component {
    state = {
        inputValue: '',
        buttonValue: 'Valider',
        buttonColor: 'white'
    }

    sfx = {
        successFx: new Audio(successSound),
        successWoohooFx: new Audio(successWoohooSound),
        failureFx: new Audio(failureSound),
        failureOuchFx: new Audio(failureOuchSound)
    }

    updateInputValue(evt) {
        const val = evt.target.value;
        
        this.setState({
          inputValue: val
        });

        if(this.state.buttonValue !== "Valider"){
            this.setState({
                buttonValue: 'Valider',
                buttonColor: 'white'
              });
        }
    }

    HandleKeyDown = (e) => {
        if (e.repeat) return;
        if (e.key === 'Enter') {
            this.CheckResponse();
        }
    }

    GoodReponseAnimation = () => {
        this.setState({
            buttonValue: 'Bravo !!',
            buttonColor: 'green'
        });
        this.sfx.successFx.play();
        this.sfx.successWoohooFx.play();
    }

    BadResponseAnimation = () => {
        this.setState({
            buttonValue: 'Faux !',
            buttonColor: 'red'
          });
          this.sfx.failureFx.play();
          this.sfx.failureOuchFx.play();
    }

    CheckResponse = () => {
        const normalize_response = (resp) => {
            // lowercase the response
            let response = resp.toLowerCase();
            // remove accent to check
            response = response.normalize('NFD').replace(/\p{Diacritic}/gu, "");
            // remove le, la, les, l', un, une, des
            response = response.replace(/un |une |l'|la |le |les |des /g, '');
            // remove trailing s
            response = response.endsWith('s') ? response.slice(0, -1) : response;
            
            return response;
        }

        let responseTry = normalize_response(this.state.inputValue);
        let goodResponse = this.props.data.response;
        if(typeof goodResponse === 'string'){
            goodResponse = normalize_response(goodResponse);
        }
        else{
            goodResponse.forEach(function(response, index) {
                this[index] = normalize_response(response);
            }, goodResponse);
        }
        
        if(typeof goodResponse === 'string'){
            if(responseTry.indexOf(" ") > -1){
                if(responseTry.split(' ').indexOf(goodResponse) > -1){
                    this.GoodReponseAnimation();
                }
            }else if(goodResponse === responseTry){
                this.GoodReponseAnimation();
            }else{
                this.BadResponseAnimation();
            }
        }else if(Array.isArray(goodResponse) && goodResponse.indexOf(responseTry) > -1){
            this.GoodReponseAnimation();
        }
        else{
            this.BadResponseAnimation();
        }
    }

    render() {
        const {day, riddle} = this.props.data;
        // Set volume of sfx
        this.sfx.successFx.volume = 0.3;
        this.sfx.successWoohooFx.volume = 0.3;
        this.sfx.failureFx.volume = 0.3;
        this.sfx.failureOuchFx.volume = 0.3;

        return (
            <div className="riddlePopUp">
                <div className="riddleContent">
                    <h2>Enigme du {day}</h2>

                    <p className="text">{riddle}</p>

                    <input 
                        id='responseInput'
                        type="text" 
                        value={this.state.inputValue} 
                        onChange={evt => this.updateInputValue(evt)}
                        onKeyDown={this.HandleKeyDown}
                        placeholder="Qui suis-je"
                        autoFocus/>

                    <div className={"button " + this.state.buttonColor} onClick={this.CheckResponse}>{this.state.buttonValue}</div>
                </div>
            </div>
        );
    }
}

export default RiddlePopUp;