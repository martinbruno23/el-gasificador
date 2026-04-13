import type { Producto, ProductoAgrupado } from './types'

export function agruparPorNombre(productos: Producto[]): ProductoAgrupado[] {
  const map = new Map<string, ProductoAgrupado>()

  for (const p of productos) {
    if (!map.has(p.nombre)) {
      map.set(p.nombre, {
        nombre: p.nombre,
        descripcion: p.descripcion,
        foto_url: p.foto_url,
        variantes: [],
      })
    }
    map.get(p.nombre)!.variantes.push({ medida: p.medida, codigo: p.codigo })
  }

  return Array.from(map.values())
}
