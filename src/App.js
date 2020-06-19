import React from 'react';

import { Cards, Chart, CountryPicker } from './components';

import styles from './App.module.css'
// Goal of using index file in every component is that, we don't have to use the filename it will automatically catch the index file inside component folder
import { fetchData } from './api';
 
class App extends React.Component {
    state = {
        data: {}
    }
 async componentDidMount() {
        const data = await fetchData();
        this.setState({data: data});
        console.log(data);
    }



    render() {
        const { data } = this.state;
        return(
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker />
                <Chart />
                
            </div>
        );
    }
}

export default App;