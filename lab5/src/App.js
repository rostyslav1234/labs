import './App.css';
import React, {useState} from "react";

class App extends React.Component {

    state = {
        name: "",
        surname: "",
        mathematicsMark: "",
        physicsMark: "",
        informaticsMark: "",
        text: "",
        agree: false
    }

    validate = () => {
        const {name, surname, mathematicsMark, physicsMark, informaticsMark, text, agree} = this.state
        if (name.trim() && surname.trim() && mathematicsMark && physicsMark && informaticsMark && text.trim() && agree) {
            return true
        } else {
            return false
        }

    }

    onBtnClickHandler = (e) => {
        e.preventDefault()
        const {name, surname, mathematicsMark, physicsMark, informaticsMark, text} = this.state
        console.log('my name:' + name + '\n' + 'my surname:' + surname + '\n' + 'mathematicsMark:' + mathematicsMark + '\n' + 'physicsMark:' + physicsMark + '\n' + 'informaticsMark:' + informaticsMark + '\n' + 'about me:' + text)
        alert('my name:' + name + '\n' + 'my surname:' + surname + '\n' + 'mathematicsMark:' + mathematicsMark + '\n' + 'physicsMark:' + physicsMark + '\n' + 'informaticsMark:' + informaticsMark + '\n' + 'about me:' + text)
    }

    handleChange = (e) => {
        const {id, value} = e.currentTarget
        this.setState({[id]: e.currentTarget.value})
    }
    // handleNameChange = ( e ) => {
    //
    //     this.setState ( { name:e.currentTarget.value })
    // }
    //
    // handleTextChange = (e) => {
    //     this.setState({text:e.currentTarget.value})
    // }

    handleCheckBoxChange = (e) => {
        this.setState({agree: e.currentTarget.checked})
    }

    componentDidMount() {
        console.log('component did mount')
    }

    componentDidUpdate() {
        console.log('component did update')
    }


    render() {
        const {name, surname, mathematicsMark, physicsMark, informaticsMark, text, agree} = this.state

        return (
            <form className='add'>
                <input id='name' type='text' onChange={this.handleChange} className='add_name' placeholder='your name'
                       value={name}/>
                <input id='surname' type='text' onChange={this.handleChange} className='add_surname'
                       placeholder='your surname' value={surname}/>
                <input id='mathematicsMark' type='number' onChange={this.handleChange} className='add_mathematicsMark'
                       placeholder='your mathematicsMark' value={mathematicsMark}/>
                <input id='physicsMark' type='number' onChange={this.handleChange} className='add_physicsMark'
                       placeholder='your physicsMark' value={physicsMark}/>
                <input id='informaticsMark' type='number' onChange={this.handleChange} className='add_informaticsMark'
                       placeholder='your informaticsMark' value={informaticsMark}/>
                <textarea id='text' onChange={this.handleChange} className='add_text'
                          placeholder='write something about you' value={text}></textarea>
                <label className='add_label'>
                    <input type='checkbox' onChange={this.handleCheckBoxChange}/> I agree
                </label>
                <button className='add_btn' onClick={this.onBtnClickHandler} disabled={!this.validate()}>show consol +
                    alert
                </button>
            </form>
        )
    }
}

export default App;





