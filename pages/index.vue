<script setup lang="ts">
import { ref } from "vue";
const { locale, locales, setLocale } = useI18n();
const availableLocales = computed(() => {
  //@ts-ignore
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<template>
  <div>
    <div></div>
    <v-btn
      color="primary"
      class="font-weight-black"
      @click="setLocale(locale === 'en' ? 'la' : 'en')"
      >change</v-btn
    >
    {{ $t("hello") }}
  </div>
</template>
