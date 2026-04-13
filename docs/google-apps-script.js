/**
 * Google Apps Script — Catálogo El Gasificador
 *
 * Funciones incluidas:
 *   1. Menú "📦 Catálogo" con botón "Publicar catálogo"
 *   2. Función FOTO_URL() para convertir links de Drive en URLs de imagen
 *
 * Cómo instalarlo:
 *   1. En la Google Sheet, ir a Extensiones → Apps Script
 *   2. Borrar el contenido existente y pegar todo este código
 *   3. Guardar (Ctrl+S)
 *   4. Recargar la planilla — aparece el menú "Catálogo" en la barra
 *
 * Cómo usar FOTO_URL():
 *   1. Subir la foto a Drive y hacer clic derecho → "Obtener enlace" → Copiar enlace
 *   2. En la columna foto_url de la Sheet, escribir: =FOTO_URL("URL_PEGADA_ACÁ")
 *   3. La celda va a mostrar la URL directa lista para usar
 */

const DEPLOY_HOOK_URL = 'https://api.vercel.com/v1/integrations/deploy/prj_RZo590vPPDGoB3rUWSgJkVhhyKfL/AVVSxp9rJu'

// ─── Menú ────────────────────────────────────────────────────────────────────

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('📦 Catálogo')
    .addItem('Publicar catálogo', 'publicarCatalogo')
    .addToUi()
}

function publicarCatalogo() {
  const ui = SpreadsheetApp.getUi()

  const confirmacion = ui.alert(
    'Publicar catálogo',
    '¿Publicar los cambios actuales en el sitio web?\n\nEl catálogo se actualiza en aproximadamente 30 segundos.',
    ui.ButtonSet.OK_CANCEL
  )

  if (confirmacion !== ui.Button.OK) return

  try {
    UrlFetchApp.fetch(DEPLOY_HOOK_URL, { method: 'post' })
    ui.alert(
      '✅ ¡Listo!',
      'El catálogo se está actualizando.\nEn unos 30 segundos los cambios van a estar en línea.',
      ui.ButtonSet.OK
    )
  } catch (e) {
    ui.alert(
      '❌ Error',
      'No se pudo conectar con el servidor. Verificá tu conexión a internet e intentá de nuevo.\n\nDetalle: ' + e.message,
      ui.ButtonSet.OK
    )
  }
}

// ─── Función FOTO_URL ─────────────────────────────────────────────────────────

/**
 * Convierte un link de Google Drive en una URL directa para usar como imagen.
 *
 * Uso en la Sheet: =FOTO_URL("https://drive.google.com/file/d/ABC123/view?usp=sharing")
 * Resultado:       https://drive.google.com/uc?export=view&id=ABC123
 *
 * IMPORTANTE: el archivo en Drive debe estar compartido como
 * "Cualquier persona con el enlace puede ver".
 *
 * @param {string} driveUrl - Link de Google Drive copiado desde "Obtener enlace"
 * @return {string} URL directa de la imagen
 * @customfunction
 */
function FOTO_URL(driveUrl) {
  if (!driveUrl) return ''

  // Formato: https://drive.google.com/file/d/FILE_ID/view...
  const match = String(driveUrl).match(/\/d\/([a-zA-Z0-9_-]+)/)
  if (!match) return '⚠️ URL de Drive no válida'

  const fileId = match[1]
  return 'https://drive.google.com/uc?export=view&id=' + fileId
}
