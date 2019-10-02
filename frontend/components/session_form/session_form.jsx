import React from 'react';


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

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="login-form-container">
                <div className="login-form-header">{this.props.formHeader}</div>
                <div onClick={this.props.closeModal} className="close-x">X</div>
 
                <br />
                <hr />
                <form onSubmit={this.handleSubmit} className="login-form">

                    {/* <div className="login-form"> */}

                        <input type="text"
                            value={this.state.first_last_name}
                            onChange={this.update('first_last_name')}
                            className="login-input"
                            placeholder="First and last name"
                            title="Please enter your name"
                            />
<br/>

                        <input type="email"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="login-input"
                            placeholder="Email address"
                            title="Please enter a valid email address"
                            />
<br/>
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input"
                            placeholder="Password"
                            title="Please enter a password"
                            />
                            <br/>
                        <input className="session-submit" type="submit" value={this.props.formType} />
                        
                    {/* </div> */}
                </form>
                        {this.renderErrors()}
                <div className="login-form-footer">{this.props.formFooter} 
                    {/* {this.props.navLink} */}
                
                    {/* <div onClick={this.props.otherForm} className="other-form">Barry</div> */}
                </div>
            </div>
        );
    }
}

export default SessionForm;
