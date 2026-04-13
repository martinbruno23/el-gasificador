/**
 * Google Apps Script — Botón "Publicar catálogo"
 *
 * Cómo instalarlo:
 * 1. En la Google Sheet, ir a Extensiones → Apps Script
 * 2. Borrar el contenido existente y pegar todo este código
 * 3. Guardar (Ctrl+S)
 * 4. Recargar la planilla — aparece el menú "Catálogo" en la barra
 */

const DEPLOY_HOOK_URL = 'https://api.vercel.com/v1/integrations/deploy/prj_RZo590vPPDGoB3rUWSgJkVhhyKfL/AVVSxp9rJu'

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
