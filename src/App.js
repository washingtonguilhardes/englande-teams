import React, { useState, useRef } from 'react';
import api from './api';
import './App.css';
import apiLigas from './ligas.json';
import Time from './Time';
import Liga from './Liga';
function App() {

  const filterRef = useRef();
  const [times, setTimes] = useState([]);
  const [timesFiltrados, setTimesFiltrados] = useState([]);
  const [ligas] = useState(apiLigas);
  const [liga, setLiga] = useState({});
  const [carregando, setCarregando] = useState(false);


  // async function fetchTimes(ligaId) {
  //   const result = await api.get(`/v2/teams/league/${ligaId}`)
  //   console.log(result);
  //   setTimes(result.data.api.teams)
  //   setTimesFiltrados(result.data.api.teams)
  //   // setTimeout(()=> {

  //   //   setState(result.data.api.predictions[0]);
  //   // }, 5000)

  // }
  async function fetchTimes(ligaId) {
    setCarregando(true);
    const result = await api.get(`/v2/teams/league/${ligaId}`)
    console.log(result);
    setTimes(result.data.api.teams)
    setTimesFiltrados(result.data.api.teams)
    setTimeout(() => setCarregando(false), 3000)

  }


  function filtrarTimes(value) {
    if (filterRef.current) {
      clearTimeout(filterRef.current);
    }
    filterRef.current = setTimeout(() => {
      filterRef.current = null;
      setTimesFiltrados(times.filter(({ name }) => ((new RegExp(`^${value}`, 'ig')).test(name))))
    }, 500)
  }

  return (
    <div className="App" >
      <header className="App-header">
        <div style={{ minWidth: '800px' }}>
          {liga.league_id ? <Liga liga={liga} onRemove={() => { setLiga([]); setTimes([]) }} /> : <h1>
            <select
              value={liga.league_id}
              onChange={(e) => {
                e.persist();
                const league_id = Number(e.target.value);
                const ligaSelecionada = ligas.find((_liga) => _liga.league_id === league_id)
                console.log(league_id);
                setLiga(ligaSelecionada || {});
                fetchTimes(league_id)
              }}
              defaultValue={"default"}
              style={{
                backgroundColor: 'rgba(0,0,0,.3)',
                color: '#fff',
                padding: '8px',
                fontSize: '32px',
                width: '100%',
                border: 0,
                borderRadius: '4px'
              }}
            >
              <option disabled value={"default"} >Escolhas uma liga...</option>
              {ligas.map((ligaPraSelecionar) => {
                return <option value={ligaPraSelecionar.league_id} key={ligaPraSelecionar.league_id}>
                  {ligaPraSelecionar.name}
                </option>
              })}

            </select>
          </h1>}
          <input
            style={{
              height: '48px',
              fontSize: '32px',
              border: '0',
              background: 'rgba(0,0,0,.3)',
              color: '#fff',
              padding: '0 8px',
              borderRadius: '4px',
              width: '98%',
              marginBottom: '16px',

            }}
            onChange={(e) => filtrarTimes(e.target.value)}
            placeholder={"Pesquisar..."}
          />

          <div style={{ maxHeight: '500px', height: '500px', overflow: 'auto' }}>
            {!Boolean(timesFiltrados.length) && !carregando && <div style={{ color: 'rgba(0,0,0,0.2)' }}>
              Nenhum time
          </div>}
            {carregando && <div style={{ color: 'rgba(0,0,0,0.2)' }}>Carregando os times...</div>}

            {!carregando && timesFiltrados.map((team) => <Time time={team} key={team.team_id} />)}
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
