<script setup lang="ts">
import { Dialog, DialogPanel } from '@headlessui/vue'

const mobileMenuOpen = ref(false)

const navigation = [
  { name: 'Personal Trainers', to: '/p' },
  { name: 'Pricing', to: '/pricing' },
  { name: 'FAQs', to: '/faqs' },
  // { name: 'About', to: '/about' },
  { name: 'Contact us', to: '/contact-us' },
]
</script>

<template>
  <div class="isolate min-h-full w-full bg-white">
    <header class="sticky top-0 z-2000 h-16 w-full bg-white px-6 shadow-md lg:px-8">
      <!-- {/* Desktop Menu */} -->
      <nav
        aria-label="Global"
        class="h-full flex items-center justify-between"
      >
        <div class="flex lg:flex-1">
          <RouterLink to="/">
            <span class="sr-only">WorkoutApp</span>
            <img
              alt=""
              class="h-12"
              src="/favicon.svg"
            >
          </RouterLink>
        </div>
        <div class="flex lg:hidden">
          <button
            class="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 -m-2.5"
            type="button"
            @click="() => { mobileMenuOpen = !mobileMenuOpen }"
          >
            <span class="sr-only">Open main menu</span>
            <div
              aria-hidden="true"
              class="i-bx-menu h-6 w-6"
            />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <RouterLink
            v-for="item in navigation"
            :key="item.name"
            class="text-sm font-semibold leading-6 text-gray-900"
            :to="item.to"
          >
            {{ item.name }}
          </RouterLink>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <RouterLink
            class="text-sm font-semibold leading-6 text-gray-900"
            to="/login"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </RouterLink>
        </div>
      </nav>

      <!-- {/* Mobile Dialog */} -->
      <Dialog
        as="div"
        :open="mobileMenuOpen"
        @close="() => { mobileMenuOpen = false }"
      >
        <DialogPanel
          auto-focus
          class="fixed inset-0 z-10 overflow-y-auto bg-white px-8 py-3 lg:hidden"
        >
          <div class="flex items-center justify-between">
            <RouterLink
              class="p-1.5 -m-1.5"
              to="#"
            >
              <span class="sr-only">WorkoutApp</span>
              <img
                alt=""
                class="h-12"
                src="/favicon.svg"
              >
            </RouterLink>
            <button
              class="rounded-md p-2.5 text-gray-700 -m-2.5"
              type="button"
              @click="() => { mobileMenuOpen = false }"
            >
              <span class="sr-only">Close menu</span>
              <div
                aria-hidden="true"
                class="i-bx-x h-6 w-6"
              />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="py-6 space-y-2">
                <RouterLink
                  v-for="item in navigation"
                  :key="item.name"
                  class="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 -mx-3 hover:bg-gray-400/10"
                  :to="item.to"
                >
                  {{ item.name }}
                </RouterLink>
              </div>
              <div class="py-6">
                <RouterLink
                  class="block rounded-lg px-3 py-2.5 text-base font-semibold leading-6 text-gray-900 -mx-3 hover:bg-gray-400/10"
                  to="/login"
                >
                  Log in
                </RouterLink>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    <main class="pb-xl">
      <RouterView />
    </main>

    <HPublicFooter />
  </div>
</template>
