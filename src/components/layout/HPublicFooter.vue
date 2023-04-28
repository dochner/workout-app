<script setup lang="ts">
import dayjs from 'dayjs'

const navigation = {
  support: [
    { name: 'Pricing', to: '/pricing' },
    { name: 'FAQs', to: '/faqs' },
  ],
  company: [
    // { name: 'About', to: '/about' },
    { name: 'Contact us', to: '/contact-us' },
  ],
  legal: [
    { name: 'Privacy policy', to: '/privacy-policy' },
    { name: 'Terms of use', to: '/terms-of-use' },
  ],
}

const currentDate = computed(() => dayjs().year())
</script>

<template>
  <footer
    aria-labelledby="footer-heading"
    class="column bg-white"
  >
    <h2
      id="footer-heading"
      class="sr-only"
    >
      Footer
    </h2>
    <div class="mx-auto md:offset-1 w-full px-4 py-12 md:w-col-10 lg:px-8 lg:py-16 sm:px-6">
      <div class="pb-8 xl:grid md:grid-cols-4 xl:gap-8">
        <div class="grid grid-cols-2 gap-8 xl:col-span-4">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <RouterLink
                class="row items-center space-x-sm"
                to="#"
              >
                <img
                  alt=""
                  class="h-12"
                  src="/favicon.svg"
                >
                <span class="from-primary-500 to-secondary-500 bg-gradient-to-b bg-clip-text font-display text-lg fw-bold text-transparent">
                  WorkoutApp
                </span>
              </RouterLink>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-sm font-semibold tracking-wider uppercase text-gray-400">
                Support
              </h3>
              <ul
                class="mt-4 space-y-4"
                role="list"
              >
                <li
                  v-for="item in navigation.support"
                  :key="item.name"
                >
                  <RouterLink
                    class="text-base text-gray-500 hover:text-gray-900"
                    :to="item.to"
                  >
                    {{ item.name }}
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold tracking-wider uppercase text-gray-400">
                Company
              </h3>
              <ul
                class="mt-4 space-y-4"
                role="list"
              >
                <li
                  v-for="item in navigation.company"
                  :key="item.name"
                >
                  <RouterLink
                    class="text-base text-gray-500 hover:text-gray-900"
                    :to="item.to"
                  >
                    {{ item.name }}
                  </RouterLink>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-sm font-semibold tracking-wider uppercase text-gray-400">
                Legal
              </h3>
              <ul
                class="mt-4 space-y-4"
                role="list"
              >
                <li
                  v-for="item in navigation.legal"
                  :key="item.name"
                >
                  <RouterLink
                    class="text-base text-gray-500 hover:text-gray-900"
                    :to="item.to"
                  >
                    {{ item.name }}
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
        <p class="mt-8 text-base text-gray-400 md:mt-0">
          &copy; {{ currentDate }} WorkoutApp. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
