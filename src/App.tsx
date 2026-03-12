import './App.css'
import {type ChangeEvent, type SyntheticEvent, useState} from "react";
import './Logic.ts'
import {handleImie, handleKapok, handleRegulamin} from "./Logic.ts";
import { handleWybor } from "./Logic.ts";
import { handleSuwak } from "./Logic.ts";

function App() {

    function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
        console.log("Submitting", event);
    }
    function handlePaymentChange(e: ChangeEvent<HTMLInputElement>) {
        setPaymentMethod(e.target.value);
        console.log(e.target.value)
    }

    const [paymentMethod, setPaymentMethod] = useState("blik");

    return (
        <>
            <div>
                <h2>⚓Mazurska Przystań⚓</h2>
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
                    <h1>Czas wypożyczenia(w godzinach):</h1>
                    <input type="range" min="0" max="8" step="0.1" value="0.4"
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
                        <input type={"checkbox"} name={"instru"} onChange={handleKapok} />
                    </div>
                    <div id={"check"}>
                        <h1>Zaakceptuj Regulamin:</h1>
                        <input type={"checkbox"} name={"regulamin"} onChange={handleRegulamin} />
                    </div>
                    <br/>
                    <div id="licz">miejsce na automatyczne przelicznie
                        hffhfhfh fjjffj
                    </div>
                    <br></br>
                    <button type="submit">Wylicz Cenę</button>

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
