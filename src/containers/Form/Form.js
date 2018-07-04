import React, {Component} from 'react';
import classes from './Form.css';
import validator from 'validator';

import Input from '../../components/Input/Input';

class Form extends Component {
    state ={
        form : {
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
            },
            password: {
                type: 'input',
                config: {
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                label: 'PASSWORD',
                value: '',
                valid: false,
                touched: false,
                validation: {
                    isRequired: true
                }
            },
            checkbox: {
                type: 'checkbox',
                config: 'REMEMBER ME',
                value: false,
                valid: true
            }
        },
        isValid: false
    };

    onValidHandler = (value, rules) => {
        let isValid = true;
        if (rules && rules.isRequired) {
            isValid = !validator.isEmpty(value.trim()) && isValid;
        }
        if (rules && rules.isEmail) {
            isValid = validator.isEmail(value.trim()) && isValid;
        }
        return isValid;
    };

    onClickCheckbox = e => {
      this.setState({
          form : {
              ...this.state.form,
              checkbox : {
                  ...this.state.form.checkbox,
                  value: e.target.checked
              }
          }
      })
    };

    onChangeHandler = (e, id) => {
        const updState = {...this.state.form};
        const updForm = {...updState[id]};
        updForm.value = e.target.value;
        updForm.touched = true;
        updForm.valid = this.onValidHandler(e.target.value, updForm.validation);
        updState[id] = updForm;
        let isValid = true;
        for (let key in updState) {
            isValid = updState[key].valid && isValid;
        }
        this.setState({form: updState, isValid: isValid})
    };

    render() {
        return (<div>
                <div className={classes.middleDiv}>
                    <Input
                            type={this.state.form.email.type}
                            value={this.state.form.email.value}
                            config={this.state.form.email.config}
                            label={this.state.form.email.label}
                            valid={this.state.form.email.valid}
                            touched={this.state.form.email.touched}
                            message='Invalid Email Address'
                            change={(event) => this.onChangeHandler(event, 'email')}
                        />
                    <Input
                        type={this.state.form.password.type}
                        value={this.state.form.password.value}
                        config={this.state.form.password.config}
                        label={this.state.form.password.label}
                        valid={this.state.form.password.valid}
                        touched={this.state.form.password.touched}
                        message='Invalid Password'
                        change={(event) => this.onChangeHandler(event, 'password')}
                    />
                    <Input
                        type={this.state.form.checkbox.type}
                        config={this.state.form.checkbox.config}
                        onclick={(event) => this.onClickCheckbox(event, 'checkbox')}
                    />

            </div>
                <div className={classes.bottomDiv}>
                    <button disabled={!this.state.isValid}>LOGIN</button>
                    <p onClick={this.props.click}>Forgotten password?</p>
                </div>
            </div>
        )
    }
}

export default Form;