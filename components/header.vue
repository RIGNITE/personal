<template>
    <header class="header-container">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <NuxtLink href="/" class="-m-1.5 p-1.5">
            <h1 class="text-gradient text-3xl font-semibold">RK</h1>
          </NuxtLink>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup class="hidden lg:flex lg:gap-x-12">
          <NuxtLink href="/about" class="text-gradient underline-gradient text-base font-semibold leading-6">About Me</NuxtLink>
          <NuxtLink href="/projects" class="text-gradient underline-gradient text-base font-semibold leading-6">Projects</NuxtLink>
        </PopoverGroup>
      </nav>
      <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-10" />
        <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="/" class="-m-1.5 p-1.5">
              <h1 class="text-3xl font-semibold">RK</h1>
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <NuxtLink href="/about" class="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 hover:bg-gray-50">About Me</NuxtLink>
                <NuxtLink href="/projects" class="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 hover:bg-gray-50">Projects</NuxtLink>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
  } from '@headlessui/vue';
  import {
    Bars3Icon,
    XMarkIcon,
  } from '@heroicons/vue/24/outline';

  
  const mobileMenuOpen = ref(false)

  const route = useRoute();

  watchEffect(() => {
    if(route.fullPath) {
      mobileMenuOpen.value = false
    }
  });
</script>

<style>
@import "../assets/main.css";

.header-container {
  
}

</style>