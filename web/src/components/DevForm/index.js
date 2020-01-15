import React, {useState, useEffect} from 'react';

function DevForm({ onSubmit }) {


    const [github_username, setGithubUserame] = useState(''); 
    const [techs, setTechs] = useState('');
    const [latitude, setLatitude] = useState(''); 
    const [longitude, setLongitude] = useState(''); 

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const {latitude, longitude} = position.coords;

            setLatitude(latitude);
            setLongitude(longitude);
        },
        (err) => {
            console.log(err);
        },
        {
            timeout: 30000,
        })
    }, []);


    async function handleSubmit(e) {
        e.preventDefault();

        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude,
        });

        setGithubUserame('');
        setTechs('');
    }

    return (
        <form onSubmit={handleSubmit}>
        <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" onChange={e => setGithubUserame(e.target.value)} required/>
        </div>

        <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" onChange={e => setTechs(e.target.value)} required/>
        </div>

        <div className="input-group">
            <div className="input-block">
                <label htmlFor="latitude">latitude</label>
                <input type="number" name="latitude" id="latitude" value={latitude} onChange={e => setLatitude(e.target.value)} required/>
            </div>

            <div className="input-block">
                <label htmlFor="Longitude">Longitude</label>
                <input type="number" name="Longitude" id="Longitude" value={longitude} onChange={e => setLongitude(e.target.value)} required/>
            </div>
        </div>

        
        <button type="submit" onClick={handleSubmit}>Salvar</button>
    </form>  
    );
}


export default DevForm;