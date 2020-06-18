import React from 'react';

import { Cards, Chart, CountryPicker } from './components';

import styles from './App.module.css'
// Goal of using index file in every component is that, we don't have to use the filename it will automatically catch the index file inside component folder
import { fetchData } from './api';
 
class App extends React.Component {

 async componentDidMount() {
        const data = await fetchData();
        console.log(data);
    }



    render() {
        return(
            <div className={styles.container}>
                <Cards />
                <Chart />
                <CountryPicker />
            </div>
        );
    }
}

export default App;