<script setup lang="js">
defineOptions({
  name: 'IndexPage',
})
const router = useRouter()
function go() {
}
const { t } = useI18n()
const date_string = new Date().toString().replace(/T/, ':').replace(/\.\w*/, '')
const flight1 = {}

function go_home() {
  router.push('/')
}
</script>

<template>
  <div>
    <div text-4xl>
      <div i-skill-icons:devto-dark inline-block />
    </div>
    <p>
      <a rel="noreferrer" href="https://github.com/Mo60" target="_blank">
        <h1 text-4xl> {{ date_string }} </h1>
      </a>
    </p>
    <p> flight tracking page</p>
    <p>
      Page's under construction
      <!-- <em text-sm opacity-75>{{ t('intro.desc') }}</em> -->
    </p>

    <div py-4 />

    <ul>
      <li>EK 211 DXB ETA: 16:00</li>
      <li>QR 713 DOH ETA: 16:30</li>
    </ul>
    <div>
      <button
        m-3 text-sm btn
        @click="go_home"
      >
        Home
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
