import React, { Component } from 'react';
import Button from './Button';
import '../style/css/App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            selected: []
        }
    }
    selection(selected) {
        this.setState({
            selected
        });
        console.log(selected, this.state.selected);
    }
    render() {
        let tableHead = ['Dish', 'Origin', 'Details', 'Price'];
        let data = [
            {name: 'Gelato', origin: 'Italy', details: 'Organic', price: '4 Euro'},
            {name: 'Hamburger', origin: 'Germany', details: 'Grass Fed', price: '10 Euro'},
            {name: 'Pizza', origin: 'Italy', details: 'Organic', price: '14 Euro'},
            {name: 'Sausage', origin: 'Austria', details: 'Organic', price: '8 Euro'}
        ]
        let tableHeader = tableHead.map((item, i) => <th key={i} className={item.toLowerCase()}>{item}</th>);
        let tableData = data.map((item, i) => {
            return (
                <tr key={i}>
                    <td>{item.name}</td>
                    <td className='origin'>{item.origin}</td>
                    <td className='details'>{item.details}</td>
                    <td>{item.price}</td>
                </tr>
            )
        })
        return (
            <div className="App">
                <div id="tableContainer">
                    <Button selection={this.selection.bind(this)} selected={this.state.selected} />
                    <div id="table">
                        <table>
                            <thead>
                            <tr>
                                {tableHeader}
                            </tr>
                            </thead>
                            <tbody>
                            {tableData}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
