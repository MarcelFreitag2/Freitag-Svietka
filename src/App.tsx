import './App.css'
import type {SyntheticEvent} from "react";
import './Logic.ts'
import {handleImie, handleKapok, handleRegulamin} from "./Logic.ts";
import { handleWybor } from "./Logic.ts";
import { handleSuwak } from "./Logic.ts";

function App() {

    function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    console.log("Submitting", event);
    }


  return (
    <>
        <div>
            <h1>⚓Mazurska Przystań⚓</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value = ""
                    onChange={handleImie}
                    placeholder={"Wprowadź imię"}
                />
                <br></br>
                <select
                    value = "Wypozyczenie"
                    onChange={handleWybor}
                >
                <option value="kajak">Kajak</option>
                <option value={"rowerwodny"}>Rower wodny</option>
                <option value={"omega"}>Flagowa Omega</option>
                </select>
                <br></br>
                Czas wypożyczenia(w godzinach):
                <input
                   type="range"
                   min="1"
                   max="8"
                   step="0.5"
                   value= ""
                   onChange={handleSuwak}
                ></input>
                <br></br>
                    Opcjonalnie:<br/>
                <br/>
                    Kapok dla dziecka:
                    <input type={"checkbox"} name={"kapok"} onChange={handleKapok} />
                    <br/>
                    Opieka Instruktora:
                    <input type={"checkbox"} name={"instru"} onChange={handleKapok} />
                <br></br>
                Zaakceptuj Regulamin:
                <input type={"checkbox"} name={"regulamin"} onChange={handleRegulamin}/>
                <br/>
                <button type="submit">Wylicz Cenę</button>
            </form>
        </div>
    </>
  )
}

export default App
