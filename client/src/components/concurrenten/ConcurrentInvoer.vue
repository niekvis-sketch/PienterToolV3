<template>
  <div class="pb-16">
    <!-- Lege staat -->
    <div v-if="store.concurrenten.length === 0" class="empty-state card p-12 text-center">
      <div class="empty-state-icon"><KIcon name="building" :size="22" /></div>
      <h3 class="text-sm font-semibold text-gray-700">Voeg je eerste concurrent toe</h3>
      <p class="text-xs text-gray-500 max-w-md mx-auto mb-4">
        Leg per concurrent vast welke pagina's en functionaliteit ze hebben. Weet Pienter de concurrenten nog niet?
        Zet dit als vraag uit bij de klant in Fase 1.
      </p>
      <button class="btn-primary btn-sm" @click="showAdd = true"><KIcon name="plus" :size="14" />Concurrent toevoegen</button>
    </div>

    <div v-else class="flex gap-5 items-start">
      <!-- Linker rail -->
      <aside class="w-60 shrink-0 space-y-2">
        <button class="btn-primary btn-sm w-full mb-1" @click="showAdd = true"><KIcon name="plus" :size="14" />Concurrent toevoegen</button>
        <button
          v-for="c in store.concurrenten"
          :key="c.id"
          class="w-full text-left px-3 py-2.5 rounded-lg border flex items-center gap-2.5 transition-colors"
          :class="store.geselecteerdeConcurrentId === c.id
            ? 'bg-pienter-600 text-white border-pienter-600'
            : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'"
          @click="store.geselecteerdeConcurrentId = c.id"
        >
          <img v-if="favicon(c.url)" :src="favicon(c.url)" alt="" class="w-4 h-4 rounded-sm shrink-0" @error="onFaviconError" />
          <KIcon v-else name="building" :size="16" class="shrink-0 opacity-70" />
          <span class="text-sm font-medium truncate flex-1">{{ c.naam }}</span>
          <span class="text-[11px] opacity-70 shrink-0">{{ c.paginas.length }}p · {{ c.functies.length }}f</span>
        </button>
      </aside>

      <!-- Rechter paneel -->
      <section v-if="sel" class="flex-1 min-w-0 space-y-5">
        <!-- Header -->
        <div class="card p-4">
          <div class="flex items-start justify-between gap-3">
            <div class="flex-1 min-w-0">
              <input
                :value="sel.naam"
                class="text-lg font-semibold text-gray-900 w-full bg-transparent border-0 border-b border-transparent hover:border-gray-200 focus:border-pienter-500 focus:outline-none px-0"
                @change="onConcurrentNaam(($event.target as HTMLInputElement).value)"
              />
              <a
                v-if="sel.url"
                :href="sel.url"
                target="_blank"
                rel="noopener"
                class="text-xs text-pienter-600 hover:underline break-all inline-flex items-center gap-1"
              >{{ sel.url }}<KIcon name="external" :size="12" /></a>
              <input
                :value="sel.notitie"
                placeholder="Notitie (optioneel)"
                class="text-sm text-gray-500 w-full bg-transparent border-0 focus:outline-none mt-1 px-0"
                @change="store.updateConcurrent(sel!.id, { notitie: ($event.target as HTMLInputElement).value })"
              />
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <button class="text-gray-400 hover:text-pienter-600 inline-flex" title="Bewerken" aria-label="Bewerken" @click="editConcurrent = sel"><KIcon name="edit" :size="16" /></button>
              <button class="text-gray-400 hover:text-red-500 inline-flex" title="Verwijderen" aria-label="Verwijderen" @click="confirmDelete = true"><KIcon name="trash" :size="16" /></button>
            </div>
          </div>
        </div>

        <!-- Pagina's -->
        <ConcurrentItemSectie
          ref="paginaSectie"
          titel="Pagina's"
          icon="file"
          met-url
          :items="sel.paginas"
          :labels="store.bestaandePaginaLabels"
          :quick-adds="quickPaginas"
          :bestaande-labels="paginaLabelsBij(sel)"
          placeholder="bijv. Diensten"
          @add="(naam, url) => store.addPagina(sel!.id, naam, url)"
          @update="(id, patch) => store.updatePagina(sel!.id, id, patch)"
          @delete="(id) => store.deletePagina(sel!.id, id)"
          @bulk="(namen) => store.bulkPaginas(sel!.id, namen)"
        />

        <!-- Functionaliteit -->
        <ConcurrentItemSectie
          ref="functieSectie"
          titel="Functionaliteit"
          icon="settings"
          :items="sel.functies"
          :labels="store.bestaandeFunctieLabels"
          :quick-adds="quickFuncties"
          :bestaande-labels="functieLabelsBij(sel)"
          placeholder="bijv. Offerte aanvragen online"
          @add="(naam) => store.addFunctie(sel!.id, naam)"
          @update="(id, patch) => store.updateFunctie(sel!.id, id, patch)"
          @delete="(id) => store.deleteFunctie(sel!.id, id)"
          @bulk="(namen) => store.bulkFuncties(sel!.id, namen)"
        />

        <!-- Toekomst-stub -->
        <div class="card p-3 bg-gray-50 border-dashed flex items-center justify-between">
          <span class="text-xs text-gray-500 inline-flex items-center gap-1.5"><KIcon name="sparkle" :size="14" />Binnenkort: pagina's en functies automatisch uit de URL halen.</span>
          <button class="btn-secondary btn-sm" disabled title="Nog niet beschikbaar — gebruik voor nu de plakken-import">Uit URL ophalen</button>
        </div>
      </section>
    </div>

    <!-- Opslaan, rechtsonder -->
    <div v-if="sel" class="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      <div
        v-if="saveMelding"
        role="status"
        class="px-3 py-2 rounded-lg text-sm shadow-md inline-flex items-center gap-1.5 border"
        :class="saveMelding.ok ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-700'"
      >
        <KIcon :name="saveMelding.ok ? 'checkCircle' : 'close'" :size="16" />{{ saveMelding.tekst }}
      </div>
      <button class="btn-primary shadow-md" :disabled="saving" @click="opslaan">
        <KIcon name="check" :size="16" />{{ saving ? 'Opslaan…' : 'Opslaan' }}
      </button>
    </div>

    <!-- Modals -->
    <ConcurrentModal
      v-if="showAdd"
      @close="showAdd = false"
      @submit="onAddConcurrent"
    />
    <ConcurrentModal
      v-if="editConcurrent"
      :concurrent="editConcurrent"
      @close="editConcurrent = null"
      @submit="onEditConcurrent"
    />

    <div v-if="confirmDelete" class="fixed inset-0 bg-black/30 flex items-center justify-center z-50" @click.self="confirmDelete = false">
      <div class="bg-white rounded-xl shadow-xl w-full max-w-sm p-6">
        <h3 class="text-lg font-bold mb-2">Concurrent verwijderen?</h3>
        <p class="text-sm text-gray-600 mb-4">
          Dit verwijdert <strong>{{ sel?.naam }}</strong> met al zijn pagina's en functies.
          Eerder doorgezette pagina's/vragen in Fase 1 en 2 blijven gewoon bestaan.
        </p>
        <div class="flex gap-3">
          <button class="btn-danger" @click="doDelete">Verwijderen</button>
          <button class="btn-secondary" @click="confirmDelete = false">Annuleren</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import KIcon from '../ui/KIcon.vue'
import { ref, computed, nextTick } from 'vue'
import { useConcurrentenStore } from '../../stores/concurrenten'
import type { Concurrent } from '@shared/types'
import { faviconUrl } from './urlUtils'
import ConcurrentModal from './ConcurrentModal.vue'
import ConcurrentItemSectie from './ConcurrentItemSectie.vue'

const store = useConcurrentenStore()

const showAdd = ref(false)
const editConcurrent = ref<Concurrent | null>(null)
const confirmDelete = ref(false)

const sel = computed(() => store.geselecteerdeConcurrent)

// Velden slaan op bij verlaten; de Opslaan-knop rondt openstaande invoer af,
// wacht tot alles bij de server is en bevestigt dat met een melding.
const paginaSectie = ref<InstanceType<typeof ConcurrentItemSectie> | null>(null)
const functieSectie = ref<InstanceType<typeof ConcurrentItemSectie> | null>(null)
const saving = ref(false)
const saveMelding = ref<{ ok: boolean; tekst: string } | null>(null)
let meldingTimer: ReturnType<typeof setTimeout> | null = null

async function opslaan() {
  saving.value = true
  ;(document.activeElement as HTMLElement | null)?.blur()
  paginaSectie.value?.commitPending()
  functieSectie.value?.commitPending()
  await nextTick()
  const ok = await store.wachtOpOpslaan()
  saving.value = false
  saveMelding.value = ok
    ? { ok: true, tekst: 'Opgeslagen' }
    : { ok: false, tekst: 'Opslaan is niet gelukt. Probeer het opnieuw.' }
  if (meldingTimer) clearTimeout(meldingTimer)
  meldingTimer = setTimeout(() => { saveMelding.value = null }, 3000)
}

const quickPaginas = ['Home', 'Diensten', 'Over ons', 'Cases', 'Contact', 'Blog', 'Vacatures']
const quickFuncties = ['Offerte aanvragen', 'Configurator', 'Klantportaal', 'Online afspraak', 'Live chat', 'Reviews-widget']

function favicon(url?: string) {
  return faviconUrl(url)
}
function onFaviconError(e: Event) {
  ;(e.target as HTMLImageElement).style.display = 'none'
}

function paginaLabelsBij(c: Concurrent) {
  return c.paginas.map(p => p.naam.trim().toLowerCase())
}
function functieLabelsBij(c: Concurrent) {
  return c.functies.map(f => f.naam.trim().toLowerCase())
}

async function onAddConcurrent(payload: { naam: string; url: string; notitie: string }) {
  await store.addConcurrent(payload.naam, payload.url, payload.notitie)
  showAdd.value = false
}
async function onEditConcurrent(payload: { naam: string; url: string; notitie: string }) {
  if (editConcurrent.value) await store.updateConcurrent(editConcurrent.value.id, payload)
  editConcurrent.value = null
}
function onConcurrentNaam(naam: string) {
  if (sel.value && naam.trim()) store.updateConcurrent(sel.value.id, { naam: naam.trim() })
}
async function doDelete() {
  if (sel.value) await store.deleteConcurrent(sel.value.id)
  confirmDelete.value = false
}
</script>
