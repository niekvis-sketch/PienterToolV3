<template>
  <template v-if="store.actief && stap">
    <!-- Spotlight: dimt de pagina behalve de uitgelichte onderdelen. Klikken gaat erdoorheen. -->
    <svg class="fixed inset-0 w-full h-full pointer-events-none z-[60]" aria-hidden="true">
      <defs>
        <mask id="presentatie-mask">
          <rect width="100%" height="100%" fill="white" />
          <rect v-for="(r, i) in rects" :key="i" :x="r.x" :y="r.y" :width="r.w" :height="r.h" rx="10" fill="black" />
        </mask>
      </defs>
      <rect v-if="rects.length" width="100%" height="100%" fill="rgba(31, 29, 26, 0.32)" mask="url(#presentatie-mask)" />
    </svg>
    <div
      v-for="(r, i) in rects"
      :key="i"
      class="presentatie-ring fixed pointer-events-none z-[61] rounded-[10px]"
      :style="{ left: r.x + 'px', top: r.y + 'px', width: r.w + 'px', height: r.h + 'px' }"
    />

    <!-- Paneel -->
    <!-- Linksonder over de sidebar, zodat het de inhoud niet afdekt -->
    <section
      class="presentatie-paneel fixed bottom-2 left-2 z-[70] w-[240px] card shadow-lg"
      role="dialog"
      aria-label="Presentatie"
    >
      <div v-if="showOverzicht" class="max-h-[50vh] overflow-y-auto border-b border-gray-200 p-2">
        <template v-for="groep in groepen" :key="groep.soort">
          <p class="caps px-2 pt-2 pb-1">{{ groep.label }}</p>
          <button
            v-for="s in groep.stappen"
            :key="s.id"
            type="button"
            class="w-full text-left px-2 py-1.5 rounded-md text-[13px] flex items-start gap-2 hover:bg-gray-50"
            :class="{ 'bg-pienter-50 text-pienter-900 font-medium': s.id === stap.id }"
            @click="kies(s.id)"
          >
            <span class="mono text-gray-400 w-8 shrink-0">{{ s.nummer ?? '·' }}</span>
            <span class="flex-1">{{ s.titel }}</span>
          </button>
        </template>
      </div>

      <div class="p-4">
        <div class="flex items-center gap-2 mb-2">
          <span class="badge" :class="stap.soort === 'requirement' ? 'badge-primary' : 'badge-info'">
            {{ stap.soort === 'requirement' ? `Requirement ${stap.nummer}` : 'Aanpassing uit de test' }}
          </span>
          <span class="text-xs text-gray-400 ml-auto mono">{{ store.index + 1 }} / {{ store.stappen.length }}</span>
        </div>
        <h2 class="text-[15px] leading-snug font-semibold text-gray-900">{{ stap.titel }}</h2>

        <dl class="mt-3 space-y-2 text-[13px]">
          <div v-if="stap.hoe">
            <dt class="caps">In het prototype</dt>
            <dd class="text-gray-800 mt-0.5">{{ stap.hoe }}</dd>
          </div>
          <div v-if="stap.aanleiding">
            <dt class="caps">Aanleiding</dt>
            <dd class="text-gray-800 mt-0.5">{{ stap.aanleiding }}</dd>
          </div>
          <div>
            <dt class="caps">{{ stap.soort === 'requirement' ? 'Getoetst in' : 'Getoetst met' }}</dt>
            <dd class="text-gray-800 mt-0.5">{{ stap.getoetst }}</dd>
          </div>
        </dl>

        <p v-if="nietGevonden" class="mt-3 text-xs text-amber-700 flex items-start gap-1.5">
          <KIcon name="info" :size="14" class="mt-px shrink-0" />Dit onderdeel staat nu niet in beeld. Er zijn bijvoorbeeld nog geen gegevens voor deze klant.
        </p>

        <div class="mt-4 flex items-center gap-2">
          <button type="button" class="btn-secondary btn-sm btn-icon" :disabled="store.index === 0" aria-label="Vorige" @click="store.vorige()">
            <KIcon name="arrowL" :size="14" />
          </button>
          <button v-if="store.index < store.stappen.length - 1" type="button" class="btn-primary btn-sm flex-1" @click="store.volgende()">
            Volgende<KIcon name="arrowR" :size="14" />
          </button>
          <button v-else type="button" class="btn-primary btn-sm flex-1" @click="store.stop()">
            <KIcon name="check" :size="14" />Afronden
          </button>
        </div>
        <div class="mt-2 flex items-center justify-between">
          <button type="button" class="btn-ghost btn-sm" :aria-expanded="showOverzicht" @click="showOverzicht = !showOverzicht">
            <KIcon name="list" :size="14" />Overzicht
          </button>
          <button type="button" class="btn-ghost btn-sm" @click="store.stop()">
            <KIcon name="close" :size="14" />Stoppen
          </button>
        </div>
      </div>
    </section>
  </template>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import KIcon from './ui/KIcon.vue'
import { usePresentatieStore, DEMO_KLANT } from '../stores/presentatieStore'
import { useKlantenStore } from '../stores/klantenStore'

const store = usePresentatieStore()
const klantenStore = useKlantenStore()
const route = useRoute()
const router = useRouter()

const stap = computed(() => store.stap)
const showOverzicht = ref(false)

const groepen = computed(() => [
  { soort: 'requirement', label: 'Designrequirements', stappen: store.stappen.filter(s => s.soort === 'requirement') },
  { soort: 'aanpassing', label: 'Aanpassingen uit de test', stappen: store.stappen.filter(s => s.soort === 'aanpassing') },
])

function kies(id: string) {
  store.ga(store.stappen.findIndex(s => s.id === id))
  showOverzicht.value = false
}

// Alle stappen spelen in het Website-project. Sta je daar niet, dan gaat de
// presentatie naar de demoklant (of de eerste klant als die er niet is).
async function naarWebsite() {
  if (/^\/klanten\/[^/]+\/website/.test(route.path)) return
  if (klantenStore.klanten.length === 0) await klantenStore.fetchKlanten()
  const klant = klantenStore.klanten.find(k => k.naam === DEMO_KLANT) ?? klantenStore.klanten[0]
  if (klant) await router.push(`/klanten/${klant.id}/website`)
}

// ---------- Uitlichten ----------
interface Rect { x: number; y: number; w: number; h: number }
const PAD = 6
const rects = ref<Rect[]>([])
const nietGevonden = ref(false)
let timer: ReturnType<typeof setInterval> | null = null
let gestart = 0
let gescrolld = false
let vorigAantal = 0
let stabiel = 0

function zoekElementen(): HTMLElement[] {
  const targets = stap.value?.doel.targets ?? []
  return Array.from(document.querySelectorAll<HTMLElement>('[data-presentatie]')).filter(el =>
    (el.dataset.presentatie ?? '').split(' ').some(t => targets.includes(t)),
  )
}

function meet() {
  const els = zoekElementen()
  const zichtbaar = els
    .map(el => ({ el, r: el.getBoundingClientRect() }))
    .filter(({ r }) => r.width > 0 && r.height > 0)

  // Scrol pas als het aantal gevonden onderdelen even stabiel is: tab, fase en
  // pagina laden na elkaar, en dan schuift de opmaak nog.
  stabiel = zichtbaar.length === vorigAantal ? stabiel + 1 : 0
  vorigAantal = zichtbaar.length
  if (zichtbaar.length && !gescrolld && stabiel >= 3) {
    gescrolld = true
    scrollNaar(zichtbaar.map(z => z.el))
  }

  rects.value = zichtbaar.map(({ el, r }) => {
    // Een tabelkop staat voor de hele kolom: trek de markering door tot onderaan
    // het zichtbare deel van de tabel.
    let bottom = r.bottom
    const table = el.tagName === 'TH' ? el.closest('table') : null
    if (table) bottom = Math.min(table.getBoundingClientRect().bottom, table.parentElement!.getBoundingClientRect().bottom)
    return { x: r.left - PAD, y: r.top - PAD, w: r.width + PAD * 2, h: bottom - r.top + PAD * 2 }
  })
  nietGevonden.value = zichtbaar.length === 0 && Date.now() - gestart > 2500
}

// Breng alle uitgelichte onderdelen samen in beeld; passen ze niet, dan het eerste bovenaan.
function scrollNaar(els: HTMLElement[]) {
  // Eerst binnen eigen scrollvlakken, zoals de brede contenttabel.
  els[0].scrollIntoView({ block: 'nearest', inline: 'nearest' })
  const main = document.querySelector('main')
  if (!main) return
  const m = main.getBoundingClientRect()
  const rs = els.map(e => e.getBoundingClientRect())
  const top = Math.min(...rs.map(r => r.top))
  const bottom = Math.max(...rs.map(r => r.bottom))
  const delta = bottom - top <= m.height - 48
    ? (top + bottom) / 2 - (m.top + m.height / 2)
    : top - m.top - 24
  main.scrollBy({ top: delta, behavior: 'smooth' })
}

function stopMeten() {
  if (timer) clearInterval(timer)
  timer = null
  rects.value = []
}

watch(() => [store.actief, store.index] as const, async ([actief]) => {
  stopMeten()
  if (!actief) return
  gestart = Date.now()
  gescrolld = false
  vorigAantal = 0
  stabiel = 0
  nietGevonden.value = false
  await naarWebsite()
  // Elementen verschijnen pas als tab, fase en pagina zijn geladen; blijf meten
  // zodat de markering ook meebeweegt bij scrollen en inklappen.
  timer = setInterval(meet, 120)
}, { immediate: true })

// ---------- Toetsenbord ----------
function onKey(e: KeyboardEvent) {
  if (!store.actief) return
  const t = e.target as HTMLElement | null
  if (t && (t.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(t.tagName))) return
  if (e.key === 'ArrowRight') store.volgende()
  else if (e.key === 'ArrowLeft') store.vorige()
  else if (e.key === 'Escape') store.stop()
  else return
  e.preventDefault()
}
window.addEventListener('keydown', onKey)
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  stopMeten()
})
</script>

<style scoped>
.presentatie-ring {
  box-shadow: 0 0 0 3px var(--primary), 0 0 0 8px color-mix(in srgb, var(--primary) 25%, transparent);
  animation: presentatie-puls 1.6s ease-in-out infinite;
}
@keyframes presentatie-puls {
  0%, 100% { box-shadow: 0 0 0 3px var(--primary), 0 0 0 6px color-mix(in srgb, var(--primary) 30%, transparent); }
  50% { box-shadow: 0 0 0 3px var(--primary), 0 0 0 12px color-mix(in srgb, var(--primary) 0%, transparent); }
}
@media (prefers-reduced-motion: reduce) {
  .presentatie-ring { animation: none; }
}
</style>
