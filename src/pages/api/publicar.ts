import type { APIRoute } from 'astro'

export const prerender = false

const DEPLOY_HOOK = 'https://api.vercel.com/v1/integrations/deploy/prj_RZo590vPPDGoB3rUWSgJkVhhyKfL/AVVSxp9rJu'

export const POST: APIRoute = async () => {
  try {
    const res = await fetch(DEPLOY_HOOK, { method: 'POST' })
    const data = await res.json()
    return new Response(JSON.stringify({ ok: true, job: data.job?.id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (e) {
    return new Response(JSON.stringify({ ok: false }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
