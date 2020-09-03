import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from "axios";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
    const [characterList, setCharacterList] = useState([])

    useEffect(loadCharacterList, [])

    function loadCharacterList() {
        Axios.get("https://swapi.dev/api/people/")
            .then(function (response) {
                setCharacterList(response.data.results)
            })
    }

    function getId({url}){
        return url.split("/")[5]
    }

    return (
        <div className="App">
            <Router>
                <nav>
                    <ul>
                        {
                            characterList.map(character => (
                                <li>
                                    {character.name}
                                </li>
                            ))}
                    </ul>
                </nav>
            </Router>
        </div>
    );
}

export default App;
