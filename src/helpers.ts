import * as path from 'node:path'


export function dateiEndungenErstellen(inhalteOrdner: string[]) {

    const endungen = new Set()

    for (let i = 0; i < inhalteOrdner.length; i + 1) {
        const dateiName = inhalteOrdner[i] // Wir laden hier den aktuellen Dateinamen in die Variable
        const dateiEndung = path.extname(dateiName) // Wir finden die Dateiendung der eingegebenen Variable heraus
        console.log(dateiEndung)
        endungen.add(dateiEndung)
    }

    return endungen
    
}