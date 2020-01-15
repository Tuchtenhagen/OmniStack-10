import React, {useState, useEffect} from 'react';
import api from './services/api';
import DevItem from './components/devItem';
import DevForm from './components/devForm';

import './global.css';
import './App.css';
import './sidebar.css';
import './main.css';
//componente: bloco isolado de HTML, CSS, e JS, o qual não interfere no restante da aplicação
//Propriedade: informações que um compenente PAI passa para o componente FILHO
//Estado:

function App() {
    
    const [devs, setDevs] = useState([]);
    

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //         const {latitude, longitude} = position.coords;

    //         setLatitude(latitude);
    //         setLongitude(longitude);
    //     },
    //     (err) => {
    //         console.log(err);
    //     },
    //     {
    //         timeout: 30000,
    //     })
    // }, []);


    useEffect(() => {
        async function loadDevs(){
            const response = await api.get('/devs');

            setDevs(response.data);

        }

        loadDevs();
    });

    async function handleAddDev(data) {


        const response = await api.post('/devs', data)

        

        setDevs([...devs, response.data]);

    }


    return ( 
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                < DevForm onSubmit={handleAddDev} />
            </aside>
            <main>

            <ul>
                {devs.map(dev => (
                    < DevItem key={dev._id} dev={dev}/>
                ))}
                
            </ul>

            </main>
        </div>
    );
}

export default App;