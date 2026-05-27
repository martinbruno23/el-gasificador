# Guía para actualizar el catálogo — El Gasificador

## Dónde trabajar

Todo se maneja desde la planilla de Google Sheets del catálogo.
El catálogo web se actualiza presionando el botón **📦 Catálogo → Publicar catálogo** en la barra superior de la planilla.

---

## Cómo editar un producto existente

1. Abrí la planilla de Google Sheets
2. Buscá la fila del producto que querés modificar
3. Hacé clic en la celda que querés cambiar y escribí el nuevo valor
4. Cuando termines todos los cambios, presioná **📦 Catálogo → Publicar catálogo**
5. En unos 30 segundos los cambios van a aparecer en el sitio web

---

## Cómo agregar un producto nuevo

Cada fila de la planilla es una variante de un producto. Si un producto tiene varias medidas, tiene una fila por cada medida.

**Columnas a completar:**

| Columna | Qué poner | Ejemplo |
|---|---|---|
| `categoria` | Nombre de la categoría (libre) | `Cocina` / `Estufas` / `Termotanque` |
| `nombre` | Nombre del producto | `Quemador auxiliar` |
| `descripcion` | Descripción corta (opcional) | `Acero esmaltado` |
| `foto_url` | URL de la foto (ver más abajo) | `=FOTO_URL("https://drive.google.com/...")` |
| `medida` | Medida o variante | `55mm` |
| `codigo` | Código interno del producto | `COC-003` |

**Pasos:**
1. Ir al final de la planilla o a la sección de la categoría correspondiente
2. Agregar una nueva fila con todos los datos
3. Si el producto tiene varias medidas, copiar la fila y cambiar solo `medida` y `codigo`
4. Publicar con **📦 Catálogo → Publicar catálogo**

---

## Cómo subir una foto

Las fotos se suben a Google Drive y se vinculan desde la planilla.

**Paso 1 — Subir la foto a Drive**
1. Abrí la carpeta de fotos del catálogo en Google Drive
2. Arrastrá la foto o usá el botón **+ Nuevo → Subir archivo**
3. Esperá a que termine de subir

**Paso 2 — Obtener el enlace**
1. Clic derecho sobre la foto → **Compartir**
2. En "Acceso general", seleccioná **Cualquier persona con el enlace**
3. Clic en **Copiar enlace**

**Paso 3 — Vincular la foto en la planilla**
1. En la columna `foto_url` de la fila del producto, escribí:
   ```
   =FOTO_URL("ACÁ PEGÁ EL ENLACE DE DRIVE")
   ```
   Ejemplo:
   ```
   =FOTO_URL("https://drive.google.com/file/d/1ABC123xyz/view?usp=sharing")
   ```
2. La celda va a mostrar automáticamente la URL correcta

**Paso 4 — Publicar**
Presioná **📦 Catálogo → Publicar catálogo**

---

## Cómo eliminar un producto

1. Seleccioná la fila completa del producto (clic en el número de fila)
2. Clic derecho → **Eliminar fila**
3. Si el producto tiene varias medidas, repetir para cada fila
4. Publicar con **📦 Catálogo → Publicar catálogo**

---

## Categorías

Las categorías se crean automáticamente a partir de lo que se escribe en la columna `categoria` de la planilla. No hay una lista fija — cualquier categoría nueva que aparezca en la planilla va a verse en el catálogo.

**Reglas importantes:**
- Todos los productos de una misma categoría deben tener exactamente el mismo texto (mismo uso de mayúsculas y tildes). Por ejemplo, si usás `Cocina`, no mezclar con `cocina` o `COCINA`.
- El orden de las categorías en el catálogo sigue el orden en que aparecen en la planilla.

**Para agregar una categoría nueva** (ej. `Estufas`): simplemente escribí ese nombre en la columna `categoria` de los productos correspondientes y publicá. La nueva sección aparece sola.

---

## Preguntas frecuentes

**¿Cuánto tarda en actualizarse el sitio?**
Aproximadamente 30 segundos después de presionar "Publicar catálogo".

**¿Puedo hacer varios cambios y publicar una sola vez?**
Sí. Hacé todos los cambios que necesites y publicá una sola vez al final.

**La foto no se ve en el catálogo, ¿qué hago?**
Verificá que el archivo en Drive esté compartido como "Cualquier persona con el enlace puede ver". Si está en privado, la imagen no va a cargar.

**¿Qué pasa si no publico?**
Los cambios quedan guardados en la planilla pero no aparecen en el sitio hasta que se publique.
