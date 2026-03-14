import './App.css'
import {type ChangeEvent, type SyntheticEvent, useState} from "react";
import {refresh} from "./Kalkulator.ts";

function App() {

    const [textImie, setTextImie] = useState("")
    const [selectWypozy, setSelectWypozy] = useState("kajak")
    const [intSuwake, setIntSuwake] = useState("1")
    const [kapok, setKapok] = useState("off")
    const [opieka, setOpika] = useState("off")
    const [regulamin, setRegulamin] = useState("off")
    const [suma, setsuma] = useState<number>(refresh(selectWypozy, intSuwake, kapok, opieka))
    const [paymentMethod, setPaymentMethod] = useState("");
    const [disabled, setDisabled] = useState<boolean>(true)
    const [wiadomosc, setWiadomosc] = useState("")

    function handleImie(e: ChangeEvent<HTMLInputElement>) {
        setTextImie(e.currentTarget.value)
        if(e.currentTarget.value != "")
        {
            if(paymentMethod != "")
            {
                if(regulamin == "on")
                {
                    setDisabled(false)
                }
            }
        }
        else
        {
            setDisabled(true)
        }
    }
    function sprawdzCzyPatent(wybor: string) {
        if(wybor == "omega")
        {
            setWiadomosc("Potrzebny patent!")
        }
        else
        {
            setWiadomosc("")
        }
    }
    function handleWybor(e: ChangeEvent<HTMLSelectElement>) {
        setSelectWypozy(e.target.value)
        setsuma(refresh(e.currentTarget.value, intSuwake, kapok, opieka))
        sprawdzCzyPatent(e.currentTarget.value)
    }

    function handleSuwak(e: ChangeEvent<HTMLInputElement>) {
        setIntSuwake(e.currentTarget.value)
        setsuma(refresh(selectWypozy, e.currentTarget.value, kapok, opieka))
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

    function handleRegulamin() {
        let chwilowyRegulamin = regulamin
        if(regulamin == "off") {
            setRegulamin("on")
            chwilowyRegulamin = "on"
            if(textImie != "")
            {
                if(paymentMethod != "")
                {
                    if(chwilowyRegulamin == "on")
                    {
                        setDisabled(false)
                    }
                }
            }
        }
        else
        {
            setRegulamin("off")
            chwilowyRegulamin = "off"
            setDisabled(true)
        }
    }


    function handlePaymentChange(e: ChangeEvent<HTMLInputElement>) {
        setPaymentMethod(e.target.value);
        console.log(e.target.value)
        if(textImie != "")
        {
            if(e.currentTarget.value != "")
            {
                if(regulamin == "on")
                {
                    setDisabled(false)
                }
            }
        }
        else
        {
            setDisabled(true)
        }
    }

    function handleSubmit() {
        alert("Dziękujemy!")
    }

    return (
        <>
            <div>
                <h2>⚓Mazurska Przystań⚓</h2>
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
                    <text id={"1"}>{wiadomosc}</text>
                    <br></br>
                    <h1>Czas wypożyczenia(w godzinach): {intSuwake}</h1>
                    <input type="range" min="0" max="8" step="1" value={intSuwake}
                           onChange={handleSuwak} >
                    </input>
                    <br></br>
                    Opcjonalnie:
                    <br/>
                    <div id={"check"}>
                        <h1>Kapok dla dziecka:</h1>
                        <input type={"checkbox"} name={"kapok"} onChange={handleKapok} />
                    </div>
                    <div id={"check"}>
                        <h1>Opieka Instruktora:</h1>
                        <input type={"checkbox"} name={"instru"} onChange={handleOpieka} />
                    </div>
                    <div id={"check"}>
                        <h1>Zaakceptuj Regulamin:</h1>
                        <input type={"checkbox"} name={"regulamin"} onChange={handleRegulamin} />
                    </div>
                    <br/>
                    <div id="licz">Cena: {suma} zł
                    </div>
                    <br></br>
                    <button type="submit" disabled={disabled}>Wylicz Cenę</button>

                    <div>
                        <p>Wybierz formę płatności:</p>
                        <label>
                            <input
                                type="radio"
                                name="payment"
                                value="blik"
                                checked={paymentMethod === "blik"}
                                onChange={handlePaymentChange}
                            />
                            BLIK
                        </label>


                        <label style={{ marginLeft: "15px" }}>
                            <input
                                type="radio"
                                name="payment"
                                value="card"
                                checked={paymentMethod === "card"}
                                onChange={handlePaymentChange}
                            />
                            Karta
                        </label>

                        <label style={{ marginLeft: "15px" }}>
                            <input
                                type="radio"
                                name="payment"
                                value="cash"
                                checked={paymentMethod === "cash"}
                                onChange={handlePaymentChange}
                            />
                            Gotówka
                        </label>
                    </div>


                </form>
            </div>
        </>
    )
}

export default App
