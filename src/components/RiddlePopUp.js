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
            response = response.replace(/un |une |l'|l |la |le |les |des |d'|d /g, '');
            // remove trailing s and x
            response = response.endsWith('s') ? response.slice(0, -1) : response;
            response = response.endsWith('x') ? response.slice(0, -1) : response;
            //remove spaces
            response = response.replace(/ /g, '');
            
            return response;
        };

        let goodResponse = this.props.data.response;
        let responseTry = this.state.inputValue;
        let isMultipleGoodReponse = Array.isArray(goodResponse);

        if (!isNaN(responseTry)){
            responseTry = parseInt(responseTry);
        }

        if(typeof responseTry === 'string'){
            responseTry = normalize_response(this.state.inputValue);
        }

        if(typeof goodResponse === 'string'){
            goodResponse = normalize_response(goodResponse);
        }
        else if (isMultipleGoodReponse){
            goodResponse.forEach(function(response, index) {
                if(typeof response !== 'number'){
                    this[index] = normalize_response(response);
                }
            }, goodResponse);
        }

        if(isMultipleGoodReponse){
            goodResponse.indexOf(responseTry) > -1 ? this.GoodReponseAnimation() : this.BadResponseAnimation();
        } else {
            goodResponse === responseTry ? this.GoodReponseAnimation() : this.BadResponseAnimation();
        }
        
    }

    render() {
        const {day, title, riddle, img, response} = this.props.data;
        // Set volume of sfx
        const main_volume = 0.2;
        this.sfx.successFx.volume = main_volume;
        this.sfx.successWoohooFx.volume = main_volume;
        this.sfx.failureFx.volume = main_volume;
        this.sfx.failureOuchFx.volume = main_volume;

        return (
            <div className="riddlePopUpBackground">
                <div className="riddlePopUp">
                    <button className="spu-close-popup" onClick={this.props.closeRiddle}>×</button>
                    <div className="riddleContent">
                        <h2>{title} du {day} Décembre</h2>

                        {img !== null && <img src={img} alt="riddle_image"/>}

                        {riddle !== null && <div className="text">{riddle}</div>}

                        {response !== null && <input 
                            id='responseInput'
                            type="text" 
                            value={this.state.inputValue} 
                            onChange={evt => this.updateInputValue(evt)}
                            onKeyDown={this.HandleKeyDown}
                            placeholder="Réponse"/>}

                        {response !== null && <div 
                            className={"button " + this.state.buttonColor} 
                            onClick={this.CheckResponse}>
                                {this.state.buttonValue}
                        </div>}
                    </div>
                </div>
            </div>
        );
    }
}

export default RiddlePopUp;