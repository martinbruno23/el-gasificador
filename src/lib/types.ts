export interface Producto {
  categoria: string
  nombre: string
  descripcion: string
  foto_url: string
  medida: string
  codigo: string
}

export interface ProductoAgrupado {
  nombre: string
  descripcion: string
  foto_url: string
  variantes: { medida: string; codigo: string }[]
}
