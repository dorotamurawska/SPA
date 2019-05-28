import React from 'react';
import './Configuration.css';
import lang from './languages.js';



class Configuration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectValue: 'English',
            lang: 'English',
            multipleSelectValue: '',
            validEmail: false
        };
    }

    array_diff = (a, b) => {
        return a.filter(e => !b.includes(e));
    }

    addOption = (e) => {
        const dropdown = e.target;
        dropdown.length = 0;
        let defaultOption = document.createElement('option');
        defaultOption.text = 'English';
        const character = 'A a B b C c D d E e F f G g H h I i J j K k L l M m N n O o P p Q q R r S s T t U u V v W w X x Y y Z z';
        const characterArr = character.split(' ');
        const data = Object.keys(lang);
        let option;
        for (let i = 0; i < data.length; i++) {
            option = document.createElement('option');
            option.text = lang[data[i]].name;
            option.value = lang[data[i]].name;
            let nativeNameArr = lang[data[i]].nativeName.split('');
            if (this.array_diff(nativeNameArr, characterArr).length > 0) {
                option.disabled = true;
            }
            dropdown.add(option);
        }
    };

    handleChangeGetLang = (e) => {
        this.setState({
            selectValue: e.target.value,
        });
    }

    handleClickSaveLang = (e) => {
        e.preventDefault();
        this.setState({
            lang: this.state.selectValue,
        });
    };

    handlegetSelectValues = (e) => {
        const select = e.target;
        const result = [];
        let options = [...select.selectedOptions];
        let option = '';

        for (let i = 0; i < options.length; i++) {
            option = options[i].value;
            result.push(option);
        }
        this.setState({
            multipleSelectValue: result,
        });
    };

    validateInputValue = (e) => {
        const emailRegex = /[\w-]+@([\w-]+\.)+[\w-]+/i
        let validEmail = e.target.value.match(emailRegex);
        this.setState({
            validEmail: validEmail
        });
    }

    render() {

        return (
            <div id="wrap-configuration">
                <section>
                    <select value={this.state.selectValue} id='select-lang' onFocus={this.addOption} onChange={this.handleChangeGetLang} onBlur={this.handleBlurDefaultLang}><option value={this.state.lang}>
                        {this.state.lang}</option>
                    </select>
                    <p id='selectedLang' >{`selected language: ${this.state.lang}`}</p>
                    <button
                        id='saveLang'
                        className="btn btn-primary configuration"
                        type="submit"
                        onClick={this.handleClickSaveLang}
                    >Save</button>
                </section>
                <section>
                    <select id='selectNoti' multiple onChange={this.handlegetSelectValues}>
                        <option value="Error">Error</option>
                        <option value="Warning">Warning</option>
                        <option value="Info">Info</option>
                    </select>
                    <button
                        disabled={this.state.multipleSelectValue.length === 0}
                        id='saveNoti'
                        className="btn btn-primary configuration"
                        type="submit"
                        onClick={() => this.props.handleChangeNoti(this.state.multipleSelectValue)}
                    >Save</button>
                </section>
                <section>
                    <input id='inputEmail' onChange={this.validateInputValue} type="text" placeholder="email"></input>
                    <button
                        disabled={!this.state.validEmail}
                        id='saveEmail'
                        className="btn btn-primary configuration"
                    >Save</button>
                </section>
            </div>
        );
    }
}

export default Configuration;