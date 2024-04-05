import * as fs from 'node:fs'
import * as path from 'node:path'
import { dateiEndungenErstellen } from './helpers'


// 1. Schritt: Inhalte des Ordners auflisten
const inhalteOrdner = fs.readdirSync('./input')
// console.log(inhalteOrdner)

// 2. Schritt: Dateitypen herausfinden

const endungen = dateiEndungenErstellen(inhalteOrdner)
console.log(endungen)

// 3. Schritt: Dateien nach Bedingungen sortieren
