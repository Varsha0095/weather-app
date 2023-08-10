import React, {useState} from 'react';
import './style.css';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState({
        celsius: 10,
        name: 'London',
        humidity: 10,
    })
    const[name, setName] = useState('');
    
    
    const searchHandle = () => {
        if(name !== ""){
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=5d8c158388a6ddbf46054219deeedf1d&&units=metric`
        axios.get(apiURL)
        .then(res => {
            setData({...data, celsius: res.data.main.temp, name: res.data.name, humidity: res.data.main.humidity})
        })  
        .catch(err => console.log(err))
        }
    }

  return (
    <div className='container'>
        <div className='weather'>
            <div className='search'>
                <input type='text' placeholder='Enter City Name' onChange={e => setName(e.target.value)} />
                <button onClick={searchHandle}>Search</button>
            </div>
            <div className='winfo'>
                <h2>{data.celsius}°C</h2>
                <h3>{data.name}</h3>
                <div className='details'>
                    <div className='col'>
                        <p>{data.humidity}</p>
                        <p>Humidity</p>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Home
