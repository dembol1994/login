import React, {Component} from 'react'
import img1 from '../../img/2.jpg'
import classes from './Layout.css'
import Form from '../../containers/Form/Form'
import Forget from '../../containers/Forget/Forget';


class Layout extends Component {
    state = {
        forget: false
    };

    onClick = () => {
      this.setState({forget: !this.state.forget})
    };

    render() {

        let form;
        this.state.forget ? form = <Forget click={this.onClick}/> : form = <Form click={this.onClick}/>;

        return (
            <div className={classes.myClass}>
                <div className={classes.topDiv}>
                    <img src={img1} alt='pas'/>
                </div>
                {form}
            </div>
        )
    }
}

export default Layout;