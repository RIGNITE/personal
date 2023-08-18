<template>
    <header class="header-container">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <NuxtLink href="/" class="-m-1.5 p-1.5">
            <h1 class="header-gradient text-3xl text-gray- font-semibold">RK</h1>
          </NuxtLink>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup class="hidden lg:flex lg:gap-x-12">
          <Popover class="relative">
            <PopoverButton class="header-gradient header-item flex flex-row items-center gap-x-1 text-sm font-semibold leading-6">
              Experience
              <!-- <ChevronDownIcon class="h-5 w-5 flex-none" aria-hidden="true" /> -->
            </PopoverButton>
  
            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div class="p-4">
                  <div v-for="item in products" :key="item.name" class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                    <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <component :is="item.icon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                    </div>
                    <div class="flex-auto">
                      <NuxtLink :href="item.href" class="block font-semibold text-gray-900">
                        {{ item.name }}
                        <span class="absolute inset-0" />
                      </NuxtLink>
                      <p class="mt-1 text-gray-600">{{ item.description }}</p>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
  
          <NuxtLink href="/about" class="header-gradient header-item text-sm font-semibold leading-6">About Me</NuxtLink>
          <NuxtLink href="/projects" class="header-gradient header-item text-sm font-semibold leading-6">Projects</NuxtLink>
        </PopoverGroup>
      </nav>
      <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-10" />
        <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="/" class="-m-1.5 p-1.5">
              <h1 class="text-xl text-gray- font-semibold">RK</h1>
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                  <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                    Experience
                    <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
                  </DisclosureButton>
                </Disclosure>
                <NuxtLink href="/about" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50">About Me</NuxtLink>
                <NuxtLink href="/projects" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50">Projects</NuxtLink>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
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
  } from '@headlessui/vue'
  import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
  } from '@heroicons/vue/24/outline'
  import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
  
  const products = [
    { name: 'DIFF', description: 'Frontend Developer Intern', href: 'https://www.diffagency.com/', icon: ChartPieIcon },
    { name: 'Ubisoft', description: 'CRM Frontend Developer Intern', href: 'https://www.ubisoft.com/en-us/', icon: CursorArrowRaysIcon },
    { name: 'HRWize', description: 'Software Developer Intern', href: 'https://hrwize.com/', icon: FingerPrintIcon },
  ]
  
  const mobileMenuOpen = ref(false)

  const route = useRoute();

  watchEffect(() => {
    if(route.fullPath) {
      mobileMenuOpen.value = false
    }
  });
</script>

<style>
.header-gradient {
  color: black;
}

.header-gradient:hover {
  background: rgb(30,0,255);
  background: linear-gradient(342deg, rgba(30,0,255,1) 0%, rgba(222,163,68,1) 38%, rgba(209,64,71,1) 61%, rgba(9,9,121,1) 100%);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  transition: all 0.3s ease;
}

.header-item {
  display: block;
  font-size: 16px;
  text-decoration: none;
}

.header-item::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: rgb(30,0,255);
  background: linear-gradient(342deg, rgba(30,0,255,1) 0%, rgba(222,163,68,1) 38%, rgba(209,64,71,1) 61%, rgba(9,9,121,1) 100%);
  transition: width .3s;
}

.header-item:hover::after {
  width: 100%;
}

.header-container {
  
}

</style>