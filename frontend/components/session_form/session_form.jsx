import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {first_last_name: '', email: '', password: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    // Function to include first last name

    includeName(){
        const nameClass = this.props.errors['First'] ? 'login-input-session-errors' : 'login-input';

        if (this.props.formType!=='Log in') {
            const inputClass = this.props.nameClass;

            return (
                    <input type="text"
                    value={this.state.first_last_name}
                    onChange={this.update('first_last_name')}
                    className={nameClass}
                    placeholder="First and last name"
                    title="Please enter your name"
                    /> 
             );
        } else {
            return "";
        }
    }

    renderErrors() {
        const errors = Object.values(this.props.errors)
            return (
                <ul>
                    {errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            );
    }


    render() {
        // Add error classes
        const nameClass = this.props.errors['First'] ? 'login-input-session-errors' : 'login-input';
        const emailClass = this.props.errors['Email'] ? 'login-input-session-errors' : 'login-input';
        const passwordClass = this.props.errors['Password'] ? 'login-input-session-errors' : 'login-input';

        const errorClass = (this.props.errors['First'] || this.props.errors['Email'] || this.props.errors['Password'] ) ? 
        'form-errors' : 'no-errors'

        return (
            <div className="login-form-container">
                <div className='login-form-container-head'>
                    <div className="login-form-header">{this.props.formHeader}</div>
                    <div onClick={this.props.closeModal} className="close-x"><FontAwesomeIcon icon="times" /></div>
                </div>

                <form onSubmit={this.handleSubmit} className="login-form">

                        {/* Includes name if Join/Signup form */}
                        {this.includeName(nameClass)}

                        <br />
                        <input type="email"
                            value={this.state.email}
                            onChange={this.update('email')}
                            // className="login-input"
                            className={emailClass}
                            placeholder="Email address"
                            title="Please enter a valid email address"
                            />
                        <br/>
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className={passwordClass}
                            placeholder="Password"
                            title="Please enter a password"
                            />
                        <br/>
                        <div className={errorClass}>
                            {this.renderErrors()}
                        </div>
   
                        <input className="session-submit" type="submit" value={this.props.formType} />

                        <br/>
                        {/* <input className="session-submit-demo" value='Log in as demo user' /> */}
                    <button onClick={this.props.demoUserLogin} className='session-submit-demo'>Join as demo user</button>

                </form>


                <div className="login-form-footer">{this.props.formFooter} {this.props.otherForm}</div>
                <div className='login-form-subfooter'>By joining Swimeo, you agree to our Terms of Swimming and Hydration Policy.</div>
            </div>
        );
    }
}

export default withRouter(SessionForm);
