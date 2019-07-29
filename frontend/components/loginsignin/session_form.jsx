import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleChange(feild) {
        return (e) => (
            this.setState({[feild]: e.target.value })
        )
    }

    render() {
        return (
            <div>
                <form onClick={this.handleSubmit}>
                    <label>
                        username
                        <input type="text" value={this.state.username} onChange={this.handleChange('username')} />
                    </label>
                    <br/>
                    <label>
                        Password
                        <input type="password" value={this.state.password} onChange={this.handleChange("password")} />
                    </label>
                    <input type="submit" value={this.props.formType} />
                </form>
            </div>
        )
    }
}

export default SessionForm