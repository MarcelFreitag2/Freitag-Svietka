import './App.css'
import {type ChangeEvent, type SyntheticEvent, useState} from "react";

function App() {

    const [textImie, setTextImie] = useState("")
    const [selectWypozy, setSelectWypozy] = useState("")
    const [intSuwake, setIntSuwake] = useState("")

    function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
        console.log("Submitting", event);
    }

    function handleImie(e: ChangeEvent<HTMLInputElement>) {
        setTextImie(e.currentTarget.value)
    }

    function handleWybor(e: ChangeEvent<HTMLSelectElement>) {
        setSelectWypozy(e.target.value)
    }

    function handleSuwak(e: ChangeEvent<HTMLInputElement>) {
        setIntSuwake(e.currentTarget.value)
    }

    function handleKapok(e: ChangeEvent<HTMLInputElement>) {
        console.log("handleSuwak", e);
    }

    function handleRegulamin(e: ChangeEvent<HTMLInputElement>) {
        console.log("handleSuwak", e);
    }


  return (
    <>
        <div>
            <h1>Mazurska Przystań</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value = {textImie}
                    onChange={handleImie}
                    placeholder={"Wprowadź imię"}
                />
                <br></br>
                <select
                    value = {selectWypozy}
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
                   value= {intSuwake}
                   onChange={handleSuwak}
                ></input>
                <text>{intSuwake}</text>

                <br></br>
                    Opcjonalnie:<br/>
                    Kapok dla dziecka:
                    <input type={"checkbox"} name={"kapok"} onChange={handleKapok} />
                    <br/>
                    Opieka Instruktora:
                    <input type={"checkbox"} name={"instru"} onChange={handleKapok} />
                <br></br>
                Zaakceptuj Regulamin:
                <input type={"checkbox"} name={"regulamin"} onChange={handleRegulamin}/>
                <br/>
            </form>
        </div>
    </>
  )
}

export default App
