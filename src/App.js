import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from "axios";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import characterPage from "./pages/characterPage";

function App() {
    const [characterList, setCharacterList] = useState([])
    //const [character, setCharacter] = useState(null)

    useEffect(loadCharacterList, [])

    function loadCharacterList() {
        Axios.get("https://swapi.dev/api/people/")
            .then(function (response) {
                setCharacterList(response.data.results)
            })
    }

    function getId(url) {
            return url.split("/")[5]
    }

    return (
        <div className="App">
            <Router>
                <nav>
                    <ul>
                        {characterList.map(character => (
                            <li>
                                <Link to={"/people/" + getId(character.url)}>
                                    {character.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Router>
        </div>
    );
}

export default App;
