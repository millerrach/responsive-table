import React, { Component } from 'react';
import Button from './Button';
import '../style/css/App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            selected: [],
        }
    }
    selection(selected) {
        this.setState({
            selected
        });
    }
    render() {
        let data = [
            {name: 'Gelato', origin: 'Italy', details: 'Organic', price: '4 Euro'},
            {name: 'Hamburger', origin: 'Germany', details: 'Grass Fed', price: '10 Euro'},
            {name: 'Pizza', origin: 'Italy', details: 'Organic', price: '14 Euro'},
            {name: 'Sausage', origin: 'Austria', details: 'Biodynamic', price: '8 Euro'}
        ]
        let select = this.state.selected;
        let one = true;
        let two = true;
        let three = true;
        if(this.state.selected.length > 0) {
            one = select.find((element) => element === '1');
            two = select.find((element) => element === '2');
            three = select.find((element) => element === '3');
        }
        let tableData = data.map((item, i) => {
            return (
                <tr key={i} className="tableBody">
                    <td>{item.name}</td>
                    {one ? <td className='origin'>{item.origin}</td> : null}
                    {two ? <td className='details'>{item.details}</td> : null}
                    {three ? <td>{item.price}</td> : null}
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
                                <th>Dish</th>
                                {one ? <th className="origin">Origin</th> : null}
                                {two ? <th className="details">Details</th> : null}
                                {three ? <th>Price</th> : null}
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
