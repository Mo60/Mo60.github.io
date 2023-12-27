<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
// const user = useUserStore()
// const name = ref(user.savedName)

const router = useRouter()
// function go() {
//   if (name.value)
//     router.push(`/hi/${encodeURIComponent(name.value)}`)
// }
function go_to_flight_tracker() {
  router.push('/flightTracker')
}

const { t } = useI18n()
</script>

<template>
  <div>
    <div text-4xl>
      <div i-skill-icons:devto-dark inline-block />
    </div>
    <p>
      <a rel="noreferrer" href="https://github.com/Mo60" target="_blank">
        <h1 text-4xl>Mo Khalil</h1>
      </a>
    </p>
    <p>
      Page's under construction
      <!-- <em text-sm opacity-75>{{ t('intro.desc') }}</em> -->
    </p>
    <a href="https://mo60.github.io/School_MS-frontend/"> vite project example</a>

    <div py-4 />

    <!-- <TheInput
      v-model="name"
      :placeholder="t('intro.whats-your-name')"
      autocomplete="false"
      @keydown.enter="go"
    /> -->
    <!-- <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label> -->
    <div>
      <button
        m-3 text-sm btn
        @click="go_to_flight_tracker"
      >
        Go to Flights Tracker
        <!-- {{ t('button.go') }} -->
      </button>
    </div>

    <!-- <div>
      <button
        m-3 text-sm btn
        :disabled="!name"
        @click="go"
      >
        {{ t('button.go') }}
      </button>
    </div> -->
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
