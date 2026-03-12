import './App.css'
import {type ChangeEvent, type SyntheticEvent, useState} from "react";
import './Kalkulator'
import {refresh} from "./Kalkulator.ts";

function App() {

    const [textImie, setTextImie] = useState("")
    const [selectWypozy, setSelectWypozy] = useState("kajak")
    const [intSuwake, setIntSuwake] = useState("5")
    const [kapok, setKapok] = useState("off")
    const [opieka, setOpika] = useState("off")
    const [suma, setsuma] = useState<number>(refresh(selectWypozy, intSuwake, kapok, opieka))

    function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
        console.log("Submitting", event);
    }

    function handleImie(e: ChangeEvent<HTMLInputElement>) {
        setTextImie(e.currentTarget.value)
    }

    function handleWybor(e: ChangeEvent<HTMLSelectElement>) {
        setSelectWypozy(e.target.value)
        const chwilowyWybor = e.currentTarget.value
        setsuma(refresh(chwilowyWybor, intSuwake, kapok, opieka))
    }

    function handleSuwak(e: ChangeEvent<HTMLInputElement>) {
        setIntSuwake(e.currentTarget.value)
        const chwilowySuwak = e.currentTarget.value
        setsuma(refresh(selectWypozy, chwilowySuwak, kapok, opieka))
    }

    function handleKapok() {
        let chwilowykapok = kapok
        if(kapok == "off")
        {
            setKapok("on")
            chwilowykapok = "on"
        }
        else
        {
            setKapok("off")
            chwilowykapok = "off"
        }
        setsuma(refresh(selectWypozy, intSuwake, chwilowykapok, opieka))
    }
    function handleOpieka()
    {
        let chwilowyOpieka = opieka
        if(opieka == "off") {
            setOpika("on")
            chwilowyOpieka = "on"
        }
        else
        {
            setOpika("off")
            chwilowyOpieka = "off"
        }
        setsuma(refresh(selectWypozy, intSuwake, kapok, chwilowyOpieka))
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
                <option value={"kajak"}>Kajak</option>
                <option value={"rowerwodny"}>Rower wodny</option>
                <option value={"omega"}>Flagowa Omega</option>
                </select>
                <br></br>
                Czas wypożyczenia(w godzinach):
                <input
                   type="range"
                   min="1"
                   max="8"
                   step="1"
                   value= {intSuwake}
                   onChange={handleSuwak}
                ></input>
                <text>{intSuwake}</text>

                <br></br>
                    Opcjonalnie:<br/>
                    Kapok dla dziecka:
                    <input type={"checkbox"} name={"kapok"} onChange={handleKapok}/>
                    <br/>
                    Opieka Instruktora:
                    <input type={"checkbox"} name={"instru"} onChange={handleOpieka} />
                <br></br>
                Zaakceptuj Regulamin:
                <input type={"checkbox"} name={"regulamin"} onChange={handleRegulamin}/>
                <br/>
            </form>
            {suma}
        </div>
    </>
  )
}

export default App
