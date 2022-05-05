import React from "react";
import Form from "./components/form";


class App extends React.Component {


    gettingData = async (e) => {
        e.preventDefault();
        const api_url = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
        const data = await api_url.json();
        console.log(data);

    }
    render() {
        return (
            <div>
                <Form getData={this.gettingData}/>
            </div>
        );
    }
}

export default App;