import React from 'react';
import './Dashboard.css';
import { withRouter } from 'react-router-dom';
import Draggable from 'react-draggable';
import Configuration from './Configuration';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuText: "",
            submenuText: "",
            notifications: ['Error', 'Warning', 'Info'],
            date: new Date().toLocaleString(),
            displayNotification: '',
            displayConfiguration: false,
        };
    }

    handleClickBackToLogin = (e) => {
        e.preventDefault();
        let path = `/`;
        this.props.history.push(path);
    };

    handleClickDisplayConfigurationPage = (e) => {
        e.preventDefault();
        this.setState({
            displayConfiguration: true,
        });
    };

    componentDidMount = () => {
        const randomTime = Math.floor(Math.random() * (10 - 5 + 1) + 5) * 1000;
        this.timeout = setTimeout(() => {
            console.log(randomTime)
            const randomIndexOfNotification = Math.floor(Math.random() * this.state.notifications.length);
            const displayedNotification = `${this.state.notifications[randomIndexOfNotification]} - date: ${this.state.date}`;
            this.setState({
                displayNotification: displayedNotification,
                date: new Date().toLocaleString(),
            });
            this.componentDidMount();
        }, randomTime);
    };

    componentWillUnmount = () => {
        clearTimeout(this.timeout);
    };

    dismiss = () => {
        clearTimeout(this.timeout);
        this.setState({
            displayNotification: '',
            date: '',
            selectedColorOfNotifications: '',
        });
    };

    handleChangeNoti = (selectValue) => {
        this.setState({
            notifications: selectValue,
        })
    }

    render() {

        const handleClickDispalyText = (e) => {
            if (e.target.classList.contains('menu')) {
                this.setState({
                    menuText: this.targetDispalyText,
                    submenuText: e.target.textContent,
                })
                this.targetDispalyText = e.target.textContent;
            }
            this.setState({
                menuText: this.targetDispalyText,
                submenuText: e.target.textContent,
            })
        };

        const dragHandlers = { onStart: this.onStart, onStop: this.onStop };

        return (
            <div className="wrapper" >
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3>Menu</h3>
                    </div>
                    <ul className="list-unstyled components">
                        <li>
                            <a className='menu' onClick={handleClickDispalyText} href="#">Dashboard</a>
                        </li>
                        <li>
                            <a onClick={handleClickDispalyText}
                                href="#dashboard"
                                data-toggle="collapse"
                                aria-expanded="false"
                                className="menu dropdown-toggle">Statistics</a>
                            <ul className="collapse list-unstyled" id="dashboard">
                                <li>
                                    <a onClick={handleClickDispalyText}
                                        href="#">Tests</a>
                                </li>
                                <li>
                                    <a onClick={handleClickDispalyText}
                                        href="#">Devices</a>
                                </li>
                                <li>
                                    <a onClick={handleClickDispalyText}
                                        href="#">Builds</a>
                                </li>
                                <li>
                                    <a onClick={handleClickDispalyText}
                                        href="#">Services</a>
                                </li>
                                <li>
                                    <a onClick={handleClickDispalyText}
                                        href="#">Projects</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a onClick={handleClickDispalyText}
                                href="#reports"
                                data-toggle="collapse"
                                aria-expanded="false"
                                className="menu dropdown-toggle">Reports</a>
                            <ul className="collapse list-unstyled" id="reports">
                                <li>
                                    <a onClick={handleClickDispalyText}
                                        href="#">Tests</a>
                                </li>
                                <li>
                                    <a onClick={handleClickDispalyText}
                                        href="#">Devices</a>
                                </li>
                                <li>
                                    <a onClick={handleClickDispalyText}
                                        href="#">Builds</a>
                                </li>
                                <li>
                                    <a onClick={handleClickDispalyText}
                                        href="#">Services</a>
                                </li>
                                <li>
                                    <a onClick={handleClickDispalyText}
                                        href="#">Projects</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="menu"
                                onClick={handleClickDispalyText}
                                href="#">Configurations</a>
                        </li>
                        <li>
                            <a onClick={handleClickDispalyText}
                                href="#configurations"
                                data-toggle="collapse"
                                aria-expanded="false" className="menu dropdown-toggle">Overview</a>
                            <ul className="collapse list-unstyled" id="configurations">
                                <li>
                                    <a onClick={handleClickDispalyText}
                                        href="#">Tests</a>
                                </li>
                                <li>
                                    <a onClick={handleClickDispalyText}
                                        href="#">Devices</a>
                                </li>
                                <li>
                                    <a onClick={handleClickDispalyText}
                                        href="#">Builds</a>
                                </li>
                                <li>
                                    <a onClick={handleClickDispalyText}
                                        href="#">Services</a>
                                </li>
                                <li>
                                    <a onClick={handleClickDispalyText}
                                        href="#">Projects</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                <div id="header">
                    <p className='notifications' style={{ color: this.state.displayNotification.includes('Error') ? "red" : this.state.displayNotification.includes('Warning') ? "orange" : "cadetblue" }}>{this.state.displayNotification}</p>
                    {this.state.displayNotification ? <button
                        id='dismiss'
                        className="btn btn-primary dashboard"
                        type="submit"
                        onClick={this.dismiss}
                    >Dismiss</button> : null}
                    <button
                        id='backToLogin'
                        className="btn btn-primary dashboard"
                        type="submit"
                        onClick={this.handleClickBackToLogin}
                    >Logout</button>
                    <button
                        id='displayConfigurationPage'
                        className="btn btn-primary dashboard"
                        type="submit"
                        onClick={this.handleClickDisplayConfigurationPage}
                    >Configuration</button>
                </div>

                <div id="main-content">
                    <p className='display-menu'>{`${this.state.menuText} ${this.state.submenuText === this.state.menuText ? '' : '- ' + this.state.submenuText}`}</p>
                    <Draggable bounds="parent" {...dragHandlers}>
                        <div className="accordion"
                            id="accordionWindow">
                            <div className="card">
                                <div className="card-header" id="heading">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse" aria-expanded="true" aria-controls="collapse">
                                            Collapsible window
                                    </button>
                                    </h5>
                                </div>
                                <div id="collapse" className="collapse show" aria-labelledby="heading" data-parent="#accordionWindow">
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rem modi ea mollitia numquam.
                                </div>
                                </div>
                            </div>
                        </div>
                    </Draggable>
                    {this.state.displayConfiguration ? < Configuration handleChangeNoti={this.handleChangeNoti} /> : null}
                </div>
            </div >
        );
    }
}



export default withRouter(Dashboard);