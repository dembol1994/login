import React from 'react';

import classes from './Input.css';

const Input = (props) => {
    let inputClasses = [classes.InputElement];
    let labelClasses = [classes.Label];

    if(!props.valid && props.touched) {
        inputClasses.push(classes.InvalidInput);
        labelClasses.push(classes.InvalidLabel);
    }
    let message = ' ';
    if (!props.valid && props.touched) {
        message = props.message;
    }
    let input;

    switch (props.type) {
        case 'input' :{
            input = ( <div className={classes.Input}>
                <label className={labelClasses.join(' ')}>{props.label}</label>
                <div className={classes.InputDiv}>
                    <p>*</p>
                    <input className={inputClasses.join(' ')} value={props.value} {...props.config} onChange={props.change}/>
                </div>
                <div className={classes.Message}>{message}</div>
                <div className={classes.tr}></div>
            </div>);
            break;
        }
        case 'checkbox' : {
            input = (<div className={classes.Checkbox}>
                <input onClick={props.onclick} id='box' type='checkbox'/>
                    <label>{props.config}</label>
                </div>
            )
        }
        break;
        default: input = null;
    }


    return input

};

export default Input;