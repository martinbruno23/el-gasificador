# Catálogo Visual — El Gasificador

**Goal:** Construir el catálogo web estático con datos hardcodeados, publicado en Vercel, listo para reemplazar con Google Sheets.

**Architecture:** Astro SSG con Tailwind CSS. Los datos viven en un archivo JSON local que imita la estructura final de la Sheet. Una sola página con secciones: portada, sobre nosotros, índice de marcas y 4 categorías de productos. PDF via CSS de impresión.

**Tech Stack:** Astro 5, Tailwind CSS 4, TypeScript, Vercel

---

### Task 1: Inicializar proyecto Astro con Tailwind

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tailwind.config.mjs`
- Create: `tsconfig.json`

- [ ] **Step 1: Inicializar Astro**

Ejecutar dentro de `/Users/martinbruno/Proyectos/el-gasificador`:
```bash
npm create astro@latest . -- --template minimal --typescript strict --no-git --install
```

- [ ] **Step 2: Agregar integración Tailwind**

```bash
npx astro add tailwind --yes
```

- [ ] **Step 3: Verificar que el proyecto corre**

```bash
npm run dev
```
Expected: servidor en http://localhost:4321 sin errores

---

### Task 2: Configurar colores de marca en Tailwind

**Files:**
- Modify: `tailwind.config.mjs`
- Create: `src/styles/global.css`

- [ ] **Step 1: Configurar colores custom en tailwind.config.mjs**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary:   '#9F3737',
        secondary: '#AD4F4F',
        accent:    '#033059',
        neutral:   '#F2EAEA',
        'neutral-soft': '#DAE1E7',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 2: Crear src/styles/global.css**

```css
@import 'tailwindcss';

@layer base {
  body {
    @apply bg-white text-accent font-sans;
  }

  h1, h2, h3 {
    @apply font-semibold;
  }
}

@media print {
  .no-print { display: none !important; }
  .page-break { page-break-before: always; }
  body { font-size: 11pt; }
  @page { margin: 1.5cm; size: A4; }
}
```

- [ ] **Step 3: Importar global.css en el layout (se hará en Task 3)**

---

### Task 3: Crear datos seed (estructura idéntica a la futura Sheet)

**Files:**
- Create: `src/data/productos.json`

- [ ] **Step 1: Crear src/data/productos.json**

Cada objeto tiene exactamente los mismos campos que tendrá la Google Sheet:
`categoria | nombre | descripcion | foto_url | medida | codigo`

```json
[
  {
    "categoria": "Cocina",
    "nombre": "Asiento de válvula de gas",
    "descripcion": "Compatible con las principales marcas de cocinas a gas.",
    "foto_url": "/placeholder.jpg",
    "medida": "1/2\"",
    "codigo": "COC-001"
  },
  {
    "categoria": "Cocina",
    "nombre": "Asiento de válvula de gas",
    "descripcion": "Compatible con las principales marcas de cocinas a gas.",
    "foto_url": "/placeholder.jpg",
    "medida": "3/4\"",
    "codigo": "COC-002"
  },
  {
    "categoria": "Cocina",
    "nombre": "Quemador auxiliar",
    "descripcion": "",
    "foto_url": "/placeholder.jpg",
    "medida": "55mm",
    "codigo": "COC-003"
  },
  {
    "categoria": "Cocina",
    "nombre": "Quemador auxiliar",
    "descripcion": "",
    "foto_url": "/placeholder.jpg",
    "medida": "65mm",
    "codigo": "COC-004"
  },
  {
    "categoria": "Cocina",
    "nombre": "Quemador semi-rápido",
    "descripcion": "",
    "foto_url": "/placeholder.jpg",
    "medida": "75mm",
    "codigo": "COC-005"
  },
  {
    "categoria": "Cocina",
    "nombre": "Tapa de quemador",
    "descripcion": "Acero esmaltado.",
    "foto_url": "/placeholder.jpg",
    "medida": "55mm",
    "codigo": "COC-006"
  },
  {
    "categoria": "Cocina",
    "nombre": "Tapa de quemador",
    "descripcion": "Acero esmaltado.",
    "foto_url": "/placeholder.jpg",
    "medida": "65mm",
    "codigo": "COC-007"
  },
  {
    "categoria": "Cocina",
    "nombre": "Tapa de quemador",
    "descripcion": "Acero esmaltado.",
    "foto_url": "/placeholder.jpg",
    "medida": "75mm",
    "codigo": "COC-008"
  },
  {
    "categoria": "Cocina",
    "nombre": "Inyector de gas",
    "descripcion": "",
    "foto_url": "/placeholder.jpg",
    "medida": "0.70mm",
    "codigo": "COC-009"
  },
  {
    "categoria": "Cocina",
    "nombre": "Inyector de gas",
    "descripcion": "",
    "foto_url": "/placeholder.jpg",
    "medida": "0.85mm",
    "codigo": "COC-010"
  },
  {
    "categoria": "Cocina",
    "nombre": "Inyector de gas",
    "descripcion": "",
    "foto_url": "/placeholder.jpg",
    "medida": "1.00mm",
    "codigo": "COC-011"
  },
  {
    "categoria": "Cocina",
    "nombre": "Válvula de paso",
    "descripcion": "Para cocina con encendido eléctrico.",
    "foto_url": "/placeholder.jpg",
    "medida": "Universal",
    "codigo": "COC-012"
  },
  {
    "categoria": "Cocina",
    "nombre": "Electrodo de encendido",
    "descripcion": "",
    "foto_url": "/placeholder.jpg",
    "medida": "Universal",
    "codigo": "COC-013"
  },
  {
    "categoria": "Cocina",
    "nombre": "Termocupla cocina",
    "descripcion": "",
    "foto_url": "/placeholder.jpg",
    "medida": "400mm",
    "codigo": "COC-014"
  },
  {
    "categoria": "Cocina",
    "nombre": "Termocupla cocina",
    "descripcion": "",
    "foto_url": "/placeholder.jpg",
    "medida": "600mm",
    "codigo": "COC-015"
  },
  {
    "categoria": "Cocina",
    "nombre": "Rejilla de hierro fundido",
    "descripcion": "Fundición pesada, antideslizante.",
    "foto_url": "/placeholder.jpg",
    "medida": "300x300mm",
    "codigo": "COC-016"
  },
  {
    "categoria": "Termotanque",
    "nombre": "Termocupla termotanque",
    "descripcion": "",
    "foto_url": "/placeholder.jpg",
    "medida": "400mm",
    "codigo": "TER-001"
  },
  {
    "categoria": "Termotanque",
    "nombre": "Termocupla termotanque",
    "descripcion": "",
    "foto_url": "/placeholder.jpg",
    "medida": "600mm",
    "codigo": "TER-002"
  },
  {
    "categoria": "Termotanque",
    "nombre": "Termocupla termotanque",
    "descripcion": "",
    "foto_url": "/placeholder.jpg",
    "medida": "900mm",
    "codigo": "TER-003"
  },
  {
    "categoria": "Termotanque",
    "nombre": "Válvula de seguridad",
    "descripcion": "Descarga a 10 bar.",
    "foto_url": "/placeholder.jpg",
    "medida": "1/2\"",
    "codigo": "TER-004"
  },
  {
    "categoria": "Termotanque",
    "nombre": "Válvula de seguridad",
    "descripcion": "Descarga a 10 bar.",
    "foto_url": "/placeholder.jpg",
    "medida": "3/4\"",
    "codigo": "TER-005"
  },
  {
    "categoria": "Termotanque",
    "nombre": "Ánodo de magnesio",
    "descripcion": "Protección anticorrosión.",
    "foto_url": "/placeholder.jpg",
    "medida": "300mm",
    "codigo": "TER-006"
  },
  {
    "categoria": "Termotanque",
    "nombre": "Ánodo de magnesio",
    "descripcion": "Protección anticorrosión.",
    "foto_url": "/placeholder.jpg",
    "medida": "500mm",
    "codigo": "TER-007"
  },
  {
    "categoria": "Termotanque",
    "nombre": "Piloto completo",
    "descripcion": "Incluye termocupla y boquilla.",
    "foto_url": "/placeholder.jpg",
    "medida": "Universal",
    "codigo": "TER-008"
  },
  {
    "categoria": "Termotanque",
    "nombre": "Resistencia eléctrica",
    "descripcion": "Para modelos mixtos gas/eléctrico.",
    "foto_url": "/placeholder.jpg",
    "medida": "1500W",
    "codigo": "TER-009"
  },
  {
    "categoria": "Termotanque",
    "nombre": "Resistencia eléctrica",
    "descripcion": "Para modelos mixtos gas/eléctrico.",
    "foto_url": "/placeholder.jpg",
    "medida": "2000W",
    "codigo": "TER-010"
  },
  {
    "categoria": "Termotanque",
    "nombre": "Aireador de piloto",
    "descripcion": "",
    "foto_url": "/placeholder.jpg",
    "medida": "Universal",
    "codigo": "TER-011"
  },
  {
    "categoria": "Termotanque",
    "nombre": "Sello de tapa",
    "descripcion": "Goma de silicona resistente a altas temperaturas.",
    "foto_url": "/placeholder.jpg",
    "medida": "Universal",
    "codigo": "TER-012"
  },
  {
    "categoria": "Calefón",
    "nombre": "Termocupla calefón",
    "descripcion": "",
    "foto_url": "/placeholder.jpg",
    "medida": "400mm",
    "codigo": "CAL-001"
  },
  {
    "categoria": "Calefón",
    "nombre": "Termocupla calefón",
    "descripcion": "",
    "foto_url": "/placeholder.jpg",
    "medida": "600mm",
    "codigo": "CAL-002"
  },
  {
    "categoria": "Calefón",
    "nombre": "Electrodo de encendido calefón",
    "descripcion": "",
    "foto_url": "/placeholder.jpg",
    "medida": "Universal",
    "codigo": "CAL-003"
  },
  {
    "categoria": "Calefón",
    "nombre": "Piloto calefón",
    "descripcion": "Incluye portapiloto y boquilla.",
    "foto_url": "/placeholder.jpg",
    "medida": "Universal",
    "codigo": "CAL-004"
  },
  {
    "categoria": "Calefón",
    "nombre": "Membrana de agua",
    "descripcion": "Goma de alta durabilidad.",
    "foto_url": "/placeholder.jpg",
    "medida": "Universal",
    "codigo": "CAL-005"
  },
  {
    "categoria": "Calefón",
    "nombre": "Válvula de agua",
    "descripcion": "",
    "foto_url": "/placeholder.jpg",
    "medida": "1/2\"",
    "codigo": "CAL-006"
  },
  {
    "categoria": "Calefón",
    "nombre": "Válvula de agua",
    "descripcion": "",
    "foto_url": "/placeholder.jpg",
    "medida": "3/4\"",
    "codigo": "CAL-007"
  },
  {
    "categoria": "Calefón",
    "nombre": "Inyector de gas calefón",
    "descripcion": "",
    "foto_url": "/placeholder.jpg",
    "medida": "1.00mm",
    "codigo": "CAL-008"
  },
  {
    "categoria": "Calefón",
    "nombre": "Inyector de gas calefón",
    "descripcion": "",
    "foto_url": "/placeholder.jpg",
    "medida": "1.15mm",
    "codigo": "CAL-009"
  },
  {
    "categoria": "Calefón",
    "nombre": "Inyector de gas calefón",
    "descripcion": "",
    "foto_url": "/placeholder.jpg",
    "medida": "1.30mm",
    "codigo": "CAL-010"
  },
  {
    "categoria": "Calefón",
    "nombre": "Intercambiador de calor",
    "descripcion": "Cobre, compatible multimarca.",
    "foto_url": "/placeholder.jpg",
    "medida": "Universal",
    "codigo": "CAL-011"
  },
  {
    "categoria": "Calefón",
    "nombre": "Serpentina de cobre",
    "descripcion": "",
    "foto_url": "/placeholder.jpg",
    "medida": "12mm",
    "codigo": "CAL-012"
  },
  {
    "categoria": "Calefón",
    "nombre": "Serpentina de cobre",
    "descripcion": "",
    "foto_url": "/placeholder.jpg",
    "medida": "15mm",
    "codigo": "CAL-013"
  },
  {
    "categoria": "Calefón",
    "nombre": "Válvula reguladora de gas",
    "descripcion": "",
    "foto_url": "/placeholder.jpg",
    "medida": "Universal",
    "codigo": "CAL-014"
  },
  {
    "categoria": "Calefón",
    "nombre": "Juntas de goma surtidas",
    "descripcion": "Kit de 12 unidades, distintos diámetros.",
    "foto_url": "/placeholder.jpg",
    "medida": "Kit x12",
    "codigo": "CAL-015"
  },
  {
    "categoria": "Calefón",
    "nombre": "Filtro de agua",
    "descripcion": "Evita sedimentos en el intercambiador.",
    "foto_url": "/placeholder.jpg",
    "medida": "1/2\"",
    "codigo": "CAL-016"
  },
  {
    "categoria": "Calefón",
    "nombre": "Resorte de válvula",
    "descripcion": "",
    "foto_url": "/placeholder.jpg",
    "medida": "Universal",
    "codigo": "CAL-017"
  },
  {
    "categoria": "Calefón",
    "nombre": "Cable de encendido",
    "descripcion": "Alta tensión, resistente al calor.",
    "foto_url": "/placeholder.jpg",
    "medida": "400mm",
    "codigo": "CAL-018"
  },
  {
    "categoria": "Calefón",
    "nombre": "Cable de encendido",
    "descripcion": "Alta tensión, resistente al calor.",
    "foto_url": "/placeholder.jpg",
    "medida": "600mm",
    "codigo": "CAL-019"
  },
  {
    "categoria": "Calefón",
    "nombre": "Módulo de encendido electrónico",
    "descripcion": "Para calefones con encendido a pila.",
    "foto_url": "/placeholder.jpg",
    "medida": "Universal",
    "codigo": "CAL-020"
  },
  {
    "categoria": "Termocuplas",
    "nombre": "Termocupla universal tipo K",
    "descripcion": "Rosca M9x1",
    "foto_url": "/placeholder.jpg",
    "medida": "300mm",
    "codigo": "TC-001"
  },
  {
    "categoria": "Termocuplas",
    "nombre": "Termocupla universal tipo K",
    "descripcion": "Rosca M9x1",
    "foto_url": "/placeholder.jpg",
    "medida": "400mm",
    "codigo": "TC-002"
  },
  {
    "categoria": "Termocuplas",
    "nombre": "Termocupla universal tipo K",
    "descripcion": "Rosca M9x1",
    "foto_url": "/placeholder.jpg",
    "medida": "600mm",
    "codigo": "TC-003"
  },
  {
    "categoria": "Termocuplas",
    "nombre": "Termocupla universal tipo K",
    "descripcion": "Rosca M9x1",
    "foto_url": "/placeholder.jpg",
    "medida": "900mm",
    "codigo": "TC-004"
  },
  {
    "categoria": "Termocuplas",
    "nombre": "Termocupla con interruptor de seguridad",
    "descripcion": "Para válvulas de seguridad de bloqueo total.",
    "foto_url": "/placeholder.jpg",
    "medida": "400mm",
    "codigo": "TC-005"
  },
  {
    "categoria": "Termocuplas",
    "nombre": "Termocupla con interruptor de seguridad",
    "descripcion": "Para válvulas de seguridad de bloqueo total.",
    "foto_url": "/placeholder.jpg",
    "medida": "600mm",
    "codigo": "TC-006"
  },
  {
    "categoria": "Termocuplas",
    "nombre": "Termocupla de doble conexión",
    "descripcion": "Para artefactos con dos salidas de piloto.",
    "foto_url": "/placeholder.jpg",
    "medida": "600mm",
    "codigo": "TC-007"
  },
  {
    "categoria": "Termocuplas",
    "nombre": "Termocupla blindada",
    "descripcion": "Vaina de acero inoxidable, alta temperatura.",
    "foto_url": "/placeholder.jpg",
    "medida": "400mm",
    "codigo": "TC-008"
  },
  {
    "categoria": "Termocuplas",
    "nombre": "Termocupla blindada",
    "descripcion": "Vaina de acero inoxidable, alta temperatura.",
    "foto_url": "/placeholder.jpg",
    "medida": "600mm",
    "codigo": "TC-009"
  },
  {
    "categoria": "Termocuplas",
    "nombre": "Adaptador de rosca para termocupla",
    "descripcion": "Convierte M9x1 a M10x1.",
    "foto_url": "/placeholder.jpg",
    "medida": "M9→M10",
    "codigo": "TC-010"
  }
]
```

- [ ] **Step 2: Verificar que el JSON es válido**

```bash
node -e "require('./src/data/productos.json'); console.log('JSON válido')"
```
Expected: `JSON válido`

---

### Task 4: Crear Layout base

**Files:**
- Create: `src/layouts/Layout.astro`

- [ ] **Step 1: Crear src/layouts/Layout.astro**

```astro
---
import '../styles/global.css'

interface Props {
  title?: string
}

const { title = 'Catálogo — El Gasificador' } = Astro.props
---
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Catálogo de repuestos de gas — El Gasificador" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <title>{title}</title>
  </head>
  <body>
    <slot />
  </body>
</html>
```

---

### Task 5: Crear componente ProductCard

**Files:**
- Create: `src/components/ProductCard.astro`

- [ ] **Step 1: Definir tipo Producto en src/lib/types.ts**

```typescript
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
```

- [ ] **Step 2: Crear función de agrupación en src/lib/productos.ts**

```typescript
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
```

- [ ] **Step 3: Crear src/components/ProductCard.astro**

```astro
---
import type { ProductoAgrupado } from '../lib/types'

interface Props {
  producto: ProductoAgrupado
}

const { producto } = Astro.props
---

<div class="bg-white rounded-xl border border-neutral-soft overflow-hidden shadow-sm hover:shadow-md transition-shadow">
  <div class="aspect-square bg-neutral overflow-hidden">
    <img
      src={producto.foto_url}
      alt={producto.nombre}
      class="w-full h-full object-contain p-4"
      loading="lazy"
    />
  </div>

  <div class="p-4">
    <h3 class="font-semibold text-accent text-sm leading-tight mb-1">
      {producto.nombre}
    </h3>

    {producto.descripcion && (
      <p class="text-xs text-gray-500 mb-3">{producto.descripcion}</p>
    )}

    <div class="space-y-1">
      {producto.variantes.map((v) => (
        <div class="flex justify-between items-center text-xs">
          <span class="text-gray-600">{v.medida}</span>
          <span class="font-mono font-medium text-primary bg-neutral px-2 py-0.5 rounded">
            {v.codigo}
          </span>
        </div>
      ))}
    </div>
  </div>
</div>
```

---

### Task 6: Crear componente CategorySection

**Files:**
- Create: `src/components/CategorySection.astro`

- [ ] **Step 1: Crear src/components/CategorySection.astro**

```astro
---
import ProductCard from './ProductCard.astro'
import { agruparPorNombre } from '../lib/productos'
import type { Producto } from '../lib/types'

interface Props {
  categoria: string
  productos: Producto[]
  id: string
}

const { categoria, productos, id } = Astro.props
const agrupados = agruparPorNombre(productos)
---

<section id={id} class="mb-16 page-break">
  <div class="flex items-center gap-4 mb-8">
    <div class="h-1 w-10 bg-primary rounded-full"></div>
    <h2 class="text-2xl font-semibold text-accent">{categoria}</h2>
    <div class="flex-1 h-px bg-neutral-soft"></div>
    <span class="text-sm text-gray-400">{agrupados.length} productos</span>
  </div>

  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {agrupados.map((producto) => (
      <ProductCard producto={producto} />
    ))}
  </div>
</section>
```

---

### Task 7: Construir página principal index.astro

**Files:**
- Create: `src/pages/index.astro`
- Create: `public/placeholder.jpg` (imagen placeholder)

- [ ] **Step 1: Crear imagen placeholder**

```bash
curl -o public/placeholder.jpg "https://placehold.co/400x400/F2EAEA/9F3737?text=Foto"
```

- [ ] **Step 2: Crear src/pages/index.astro**

```astro
---
import Layout from '../layouts/Layout.astro'
import CategorySection from '../components/CategorySection.astro'
import productosData from '../data/productos.json'
import type { Producto } from '../lib/types'

const productos = productosData as Producto[]

const categorias = [
  { id: 'cocina',      label: 'Repuestos de Cocina' },
  { id: 'termotanque', label: 'Repuestos de Termotanque' },
  { id: 'calenon',     label: 'Repuestos de Calefón' },
  { id: 'termocuplas', label: 'Termocuplas' },
]

const productosPorCategoria = {
  cocina:      productos.filter(p => p.categoria === 'Cocina'),
  termotanque: productos.filter(p => p.categoria === 'Termotanque'),
  calenon:     productos.filter(p => p.categoria === 'Calefón'),
  termocuplas: productos.filter(p => p.categoria === 'Termocuplas'),
}
---

<Layout>
  <!-- HEADER / PORTADA -->
  <header class="bg-accent text-white py-12 px-6 no-print">
    <div class="max-w-5xl mx-auto flex items-center justify-between">
      <div>
        <div class="text-neutral-soft text-sm font-medium tracking-widest uppercase mb-2">
          Catálogo de productos
        </div>
        <h1 class="text-4xl font-bold">El Gasificador</h1>
        <p class="text-neutral-soft mt-2 text-lg">
          Especialistas en repuestos de gas
        </p>
      </div>
      <button
        onclick="window.print()"
        class="no-print flex items-center gap-2 bg-primary hover:bg-secondary text-white px-5 py-3 rounded-lg font-medium transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
        Descargar PDF
      </button>
    </div>
  </header>

  <!-- PORTADA PRINT -->
  <div class="hidden print:block text-center py-20 page-break">
    <h1 class="text-5xl font-bold text-accent mb-4">El Gasificador</h1>
    <p class="text-xl text-primary">Catálogo de repuestos de gas</p>
    <p class="text-gray-500 mt-6">Buenos Aires, Argentina</p>
  </div>

  <main class="max-w-5xl mx-auto px-6 py-12">

    <!-- SOBRE NOSOTROS -->
    <section class="mb-16">
      <div class="flex items-center gap-4 mb-8">
        <div class="h-1 w-10 bg-primary rounded-full"></div>
        <h2 class="text-2xl font-semibold text-accent">Quiénes somos</h2>
        <div class="flex-1 h-px bg-neutral-soft"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div>
          <h3 class="font-semibold text-accent mb-2">Nuestra historia</h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            El Gasificador nació hace más de 20 años con un objetivo claro: brindar
            soluciones reales al sector de instalación y mantenimiento de gas. Desde
            nuestros inicios, apostamos por la calidad y la especialización para
            convertirnos en el proveedor de confianza de gasistas, instaladores y
            técnicos de toda la región.
          </p>
        </div>

        <div>
          <h3 class="font-semibold text-accent mb-2">Especialización en el rubro</h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            Nos especializamos exclusivamente en repuestos para artefactos a gas:
            cocinas, calefones y termotanques. Esta focalización nos permite mantener
            un stock profundo, conocer cada pieza en detalle y asesorar a nuestros
            clientes con precisión técnica.
          </p>
        </div>

        <div class="md:col-span-2">
          <h3 class="font-semibold text-accent mb-3">Nuestros servicios</h3>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: '🔍', label: 'Asesoramiento técnico' },
              { icon: '🔧', label: 'Taller de reparación' },
              { icon: '✅', label: 'Garantía en todos los productos' },
              { icon: '🚚', label: 'Envíos a todo el país' },
            ].map(s => (
              <div class="bg-neutral rounded-lg p-3 text-center">
                <div class="text-2xl mb-1">{s.icon}</div>
                <div class="text-xs font-medium text-accent">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <!-- NAVEGACIÓN POR CATEGORÍAS -->
    <nav class="mb-12 no-print">
      <div class="flex flex-wrap gap-2">
        {categorias.map(c => (
          <a
            href={`#${c.id}`}
            class="px-4 py-2 bg-neutral text-accent text-sm font-medium rounded-full hover:bg-primary hover:text-white transition-colors"
          >
            {c.label}
          </a>
        ))}
      </div>
    </nav>

    <!-- CATEGORÍAS DE PRODUCTOS -->
    <CategorySection id="cocina"      categoria="Repuestos de Cocina"       productos={productosPorCategoria.cocina} />
    <CategorySection id="termotanque" categoria="Repuestos de Termotanque"  productos={productosPorCategoria.termotanque} />
    <CategorySection id="calenon"     categoria="Repuestos de Calefón"      productos={productosPorCategoria.calenon} />
    <CategorySection id="termocuplas" categoria="Termocuplas"               productos={productosPorCategoria.termocuplas} />

  </main>

  <!-- FOOTER -->
  <footer class="bg-accent text-neutral-soft py-8 px-6 mt-8 no-print">
    <div class="max-w-5xl mx-auto text-center text-sm">
      <p class="font-semibold text-white">El Gasificador</p>
      <p class="mt-1 opacity-75">Especialistas en repuestos de gas</p>
    </div>
  </footer>
</Layout>
```

- [ ] **Step 3: Verificar en browser**

```bash
npm run dev
```
Abrir http://localhost:4321 y verificar:
- Portada con header en color acento
- Sección "Quiénes somos"
- Navegación por categorías
- 4 secciones con grillas de productos
- Botón "Descargar PDF" visible

---

### Task 8: Verificar estilos y ajustes finales

- [ ] **Step 1: Verificar colores de marca**

En el browser confirmar:
- Header usa `#033059` (acento)
- Botón PDF usa `#9F3737` (primario)
- Fondos de cards usan `#F2EAEA` (neutro)
- Códigos de producto destacados en primario

- [ ] **Step 2: Verificar responsive en mobile**

En DevTools, simular iPhone 375px:
- Cards en grilla de 2 columnas
- Navegación en pills con wrap

- [ ] **Step 3: Verificar impresión/PDF**

`Ctrl+P` en el browser:
- Botones y nav se ocultan (clase `no-print`)
- Portada de print aparece centrada
- Saltos de página entre categorías

---

### Task 9: Build y deploy en Vercel

**Files:**
- Create: `vercel.json`

- [ ] **Step 1: Build de producción**

```bash
npm run build
```
Expected: `dist/` generado sin errores

- [ ] **Step 2: Crear vercel.json**

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro"
}
```

- [ ] **Step 3: Deploy a Vercel**

```bash
npx vercel --yes
```
Expected: URL pública del deploy

- [ ] **Step 4: Verificar URL pública**

Abrir la URL provista por Vercel y confirmar que el sitio carga correctamente en mobile y desktop.
