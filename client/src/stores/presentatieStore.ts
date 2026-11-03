import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// Presentatiemodus: loopt langs de designrequirements en de aanpassingen uit de
// gebruikerstest. Elke stap zegt waar in het Website-project het onderdeel staat;
// de betrokken componenten zetten zelf de juiste tab, fase en pagina. Wat
// uitgelicht wordt, staat in de markup als data-presentatie="<sleutel>".

export const DEMO_KLANT = 'Van Lier'

export interface PresentatieDoel {
  projectTab: 'structuur' | 'contentStructuur' | 'concurrenten'
  fase?: 1 | 2
  fase2View?: 'menu' | 'plattegrond' | 'indeling'
  /** Titel van de pagina die in Fase 2 geopend wordt. */
  pagina?: string
  targets: string[]
}

export interface PresentatieStap {
  id: string
  soort: 'requirement' | 'aanpassing'
  nummer?: number
  titel: string
  /** Requirement: hoe het in het prototype zit. */
  hoe?: string
  /** Requirement: getoetst in. Aanpassing: getoetst met. */
  getoetst: string
  /** Aanpassing: waar de aanpassing vandaan komt. */
  aanleiding?: string
  doel: PresentatieDoel
}

const VOORBEELDPAGINA = 'Bedrijfscatering'

export const STAPPEN: PresentatieStap[] = [
  {
    id: 'req-4', soort: 'requirement', nummer: 4,
    titel: 'Structuur vastleggen in hoofd- en subpagina’s',
    hoe: 'Slepen verandert de volgorde, naar rechts slepen maakt een subpagina',
    getoetst: 'Ronde 2 (Robert), ronde 4 taak 5 (Daan, Roel)',
    doel: { projectTab: 'structuur', fase: 2, fase2View: 'menu', targets: ['menu-structuur'] },
  },
  {
    id: 'req-5', soort: 'requirement', nummer: 5,
    titel: 'Per pagina het doel vastleggen',
    hoe: 'Doel kiezen: informeren, converteren of ondersteunen',
    getoetst: 'Ronde 4 taak 8 (Roel)',
    doel: { projectTab: 'structuur', fase: 2, fase2View: 'indeling', pagina: VOORBEELDPAGINA, targets: ['pagina-doel'] },
  },
  {
    id: 'req-6', soort: 'requirement', nummer: 6,
    titel: 'Per pagina de blokken vastleggen',
    hoe: 'Blokken toevoegen, veelgebruikte blokken met één klik, zichtbaar in de plattegrond',
    getoetst: 'Ronde 4 taak 5 (Daan, Roel)',
    doel: { projectTab: 'structuur', fase: 2, fase2View: 'indeling', pagina: VOORBEELDPAGINA, targets: ['blokken', 'blokken-snel'] },
  },
  {
    id: 'req-7', soort: 'requirement', nummer: 7,
    titel: 'Per pagina de zoekwoorden koppelen',
    hoe: 'Zoekwoord, metatitel en metadescription in het contentstructuurdocument',
    getoetst: 'Ronde 1 (Timo), ronde 4 taak 6 (Daan, Roel met hulp)',
    doel: { projectTab: 'contentStructuur', targets: ['kolom-zoektermen', 'kolom-metaTitel', 'kolom-metaDescription'] },
  },
  {
    id: 'req-8', soort: 'requirement', nummer: 8,
    titel: 'Per blok een naam of type',
    hoe: 'Naam en type per blok',
    getoetst: 'Ronde 4 taak 5 (Daan)',
    doel: { projectTab: 'structuur', fase: 2, fase2View: 'indeling', pagina: VOORBEELDPAGINA, targets: ['blok-naam-type'] },
  },
  {
    id: 'req-17', soort: 'requirement', nummer: 17,
    titel: 'Voorkomen dat hetzelfde onderwerp op meerdere pagina’s komt',
    hoe: 'Waarschuwing bij een dubbel zoekwoord',
    getoetst: 'Ronde 4 taak 5 (Roel)',
    doel: { projectTab: 'structuur', fase: 2, fase2View: 'indeling', pagina: VOORBEELDPAGINA, targets: ['waarschuwingen', 'zoekwoord-conflict', 'focus-zoekwoord'] },
  },
  {
    id: 'req-25', soort: 'requirement', nummer: 25,
    titel: 'Status per stuk content',
    hoe: 'Status per pagina voor schrijven en plaatsen',
    getoetst: 'Ronde 1 en ronde 4 (Suzanne)',
    doel: { projectTab: 'contentStructuur', targets: ['statusflow', 'kolom-status'] },
  },
  {
    id: 'req-37', soort: 'requirement', nummer: 37,
    titel: 'Herbruikbare blokken',
    hoe: 'Blok op herbruikbaar zetten, daarna staat het in een lijst op andere pagina’s',
    getoetst: 'Ronde 4 taak 9 (Roel)',
    doel: { projectTab: 'structuur', fase: 2, fase2View: 'indeling', pagina: VOORBEELDPAGINA, targets: ['herbruikbaar-maken', 'herbruikbaar-lijst'] },
  },
  {
    id: 'req-42', soort: 'requirement', nummer: 42,
    titel: 'Per pagina zien wat development moet bouwen',
    hoe: 'Nieuw bouwen of bestaand, en wat de pagina moet doen',
    getoetst: 'Gezien, niet als taak getoetst (Roel las het uit zichzelf voor bij taak 6)',
    doel: { projectTab: 'structuur', fase: 2, fase2View: 'indeling', pagina: VOORBEELDPAGINA, targets: ['bouwstatus', 'functionele-eisen'] },
  },
  {
    id: 'aanp-tabelkop', soort: 'aanpassing',
    titel: 'Tabelkop blijft staan tijdens het scrollen',
    aanleiding: 'Daan, taak 6 (thema E)',
    getoetst: 'Daan',
    doel: { projectTab: 'contentStructuur', targets: ['tabelkop'] },
  },
  {
    id: 'aanp-user-stories', soort: 'aanpassing',
    titel: 'Overal dezelfde naam: user stories',
    aanleiding: 'Daan, taak 5',
    getoetst: 'Daan en Roel',
    doel: { projectTab: 'structuur', fase: 1, targets: ['fase-stap-1', 'fase1-titel'] },
  },
  {
    id: 'aanp-concurrenten', soort: 'aanpassing',
    titel: 'Veld bij concurrenten hernoemen, melding "opgeslagen"',
    aanleiding: 'Daan en Roel, taak 4',
    getoetst: 'Roel',
    doel: { projectTab: 'concurrenten', targets: ['concurrent-naam', 'concurrent-opslaan'] },
  },
  {
    id: 'aanp-oude-url', soort: 'aanpassing',
    titel: 'Kolom oude URL in het contentstructuurdocument',
    aanleiding: 'Timo (ronde 1), Daan en Suzanne (thema B)',
    getoetst: 'Timo',
    doel: { projectTab: 'contentStructuur', targets: ['kolom-oudeUrl'] },
  },
  {
    id: 'aanp-status', soort: 'aanpassing',
    titel: 'Status pienterklaar en klantklaar, en per pagina wie controleert',
    aanleiding: 'Daan en Suzanne (thema D)',
    getoetst: 'Suzanne',
    doel: { projectTab: 'contentStructuur', targets: ['statusflow', 'kolom-status', 'kolom-klantControleur'] },
  },
]

export const usePresentatieStore = defineStore('presentatie', () => {
  const actief = ref(false)
  const index = ref(0)

  const stap = computed(() => (actief.value ? STAPPEN[index.value] : null))
  const doel = computed(() => stap.value?.doel ?? null)

  function start(vanaf = 0) {
    index.value = Math.max(0, Math.min(vanaf, STAPPEN.length - 1))
    actief.value = true
  }
  function stop() { actief.value = false }
  function volgende() { if (index.value < STAPPEN.length - 1) index.value++ }
  function vorige() { if (index.value > 0) index.value-- }
  function ga(i: number) { index.value = i }

  return { actief, index, stap, doel, stappen: STAPPEN, start, stop, volgende, vorige, ga }
})
