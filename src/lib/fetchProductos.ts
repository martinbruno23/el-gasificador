import type { Producto } from './types'
import productosLocal from '../data/productos.json'

const SHEETS_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQdyK4NPUpEfM2e7jBy94vnGVeAWzZJQeHaDZCQ4C2-fQMogB7IlhYvztjwoYiA1sB1sLc_ZXIbDEa7/pub?gid=1691354079&single=true&output=csv'

function parseCSVLine(line: string): string[] {
  const result: string[] = []
  let current = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const char = line[i]
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"'
        i++
      } else {
        inQuotes = !inQuotes
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current)
      current = ''
    } else {
      current += char
    }
  }
  result.push(current)
  return result
}

function parseCSV(csv: string): Producto[] {
  const lines = csv.trim().split('\n')
  if (lines.length < 2) return []

  const headers = parseCSVLine(lines[0])

  return lines
    .slice(1)
    .map(line => {
      const values = parseCSVLine(line)
      const obj: Record<string, string> = {}
      headers.forEach((h, i) => {
        obj[h.trim()] = (values[i] ?? '').trim()
      })
      return obj as unknown as Producto
    })
    .filter(p => p.categoria && p.nombre)
}

export async function fetchProductos(): Promise<Producto[]> {
  try {
    const res = await fetch(SHEETS_URL)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const csv = await res.text()
    const productos = parseCSV(csv)
    console.log(`[sheets] ${productos.length} productos cargados desde Google Sheets`)
    return productos
  } catch (e) {
    console.warn('[sheets] Error al obtener la Sheet, usando datos locales:', e)
    return productosLocal as Producto[]
  }
}
