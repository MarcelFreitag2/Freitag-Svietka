export function refresh(wybor: string,czas: string, kapok: string, opieka: string): number
{
    const czass = parseInt(czas)

    if(wybor == 'kajak')
    {
        const suma = 20
        const prawdziwaSuma = sprawdzWyjatki(kapok, opieka, suma, czass)
        return prawdziwaSuma
    }
    else if(wybor == 'rowerwodny')
    {
        const suma = 35
        const prawdziwaSuma = sprawdzWyjatki(kapok, opieka, suma, czass)
        return prawdziwaSuma
    }
    else if(wybor == 'omega')
    {
        const suma = 150
        const prawdziwaSuma = sprawdzWyjatki(kapok, opieka, suma, czass)
        return prawdziwaSuma
    }
    else
    {
        console.warn("Bląd w kalkulatorze")
        return 0
    }
}

function sprawdzWyjatki(kapok: string, opieka: string, suma: number, czas: number): number
{
    if(opieka == "on")
    {
        suma = suma + 50
        suma = suma * czas
    }
    else
    {
        suma = suma * czas
    }
    if(kapok == "on")
    {
        suma = suma + 5
    }
    return suma
}