import React, {Component} from 'react';
import classes from './Forget.css';
import validator from 'validator';

import Input from '../../components/Input/Input';

class Forget extends Component {
    state ={
        email: {
            type: 'input',
            config: {
                type: 'email',
                placeholder: 'Enter your email address'
            },
            label: 'EMAIL ADDRESS',
            value: '',
            valid: false,
            touched: false,
            validation: {
                isEmail: true,
                isRequired: true
            }
        }
    };

    onValidHandler = (value, rules) => {
        let isValid = true;
        if (rules && rules.isRequired) {
            isValid = !validator.isEmpty(value) && isValid;
        }
        if (rules && rules.isEmail) {
            isValid = validator.isEmail(value) && isValid;
        }
        return isValid;
    };

    onChangeHandler = (e) => {
       const updForm = {...this.state.email};
       updForm.value = e.target.value;
       updForm.valid = this.onValidHandler(e.target.value, this.state.email.validation);
       updForm.touched = true;
       this.setState({email: updForm})
    };

    render() {
        return (
            <div>
                <div className={classes.middleDiv}>
                    <div className={classes.textDiv}>
                        <div>Hey, it happens to everyone.</div>
                        <div>Just let us know what email address you yse to login</div>
                        <div>and we'll send you an email with instructions.</div>
                    </div>
                   <Input
                       type={this.state.email.type}
                       value={this.state.email.value}
                       config={this.state.email.config}
                       label={this.state.email.label}
                       valid={this.state.email.valid}
                       touched={this.state.email.touched}
                       message='Invalid Email Address'
                       change={(event) => this.onChangeHandler(event)}/>
                </div>
                <div className={classes.bottomDiv}>
                    <button disabled={!this.state.email.valid} className={classes.resetButton}>RESET PASSWORD</button>
                    <button className={classes.cancelButton} onClick={this.props.click}>CANCEL</button>
                </div>
            </div>
        )
    }
}

export default Forget;