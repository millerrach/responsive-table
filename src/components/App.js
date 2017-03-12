import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import '../style/css/App.css';

class App extends Component {
    render() {
        let tableHead = ['Dish', 'Origin', 'Details', 'Price'];
        let data = [
            {name: 'Gelato', origin: 'Italy', details: 'Organic', price: '4 Euro'},
            {name: 'Hamburger', origin: 'Germany', details: 'Grass Fed', price: '10 Euro'},
            {name: 'Pizza', origin: 'Italy', details: 'Organic', price: '14 Euro'},
            {name: 'Sausage', origin: 'Austria', details: 'Organic', price: '8 Euro'}
        ]
        let width = window.innerWidth;
        let list = document.querySelectorAll('input[type=checkbox]');
        let origin = document.querySelectorAll('.origin');
        let details = document.querySelectorAll('.details')
        console.log(details);

        list.forEach(item => {
            if (item.checked = true) {
                console.log('checked');
            }
        });
        let tableHeader = tableHead.map((item, i) => <th key={i}>{item}</th>);
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
        )
    }
}

export default App;
