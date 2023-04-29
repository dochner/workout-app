<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const filters = [
  {
    id: 'specialties',
    name: 'Specialties',
    options: [
      { value: 'bodybuilding', label: 'Bodybuilding', checked: false, type: 'checkbox' },
      { value: 'slimming', label: 'Slimming', checked: false, type: 'checkbox' },
      {
        value: 'health-wellness',
        label: 'Health and Wellness',
        checked: true,
        type: 'checkbox',
      },
      { value: 'third-age', label: 'Third age', checked: false, type: 'checkbox' },
      { value: 'swimming', label: 'Swimming', checked: false, type: 'checkbox' },
      {
        value: 'fitness-training',
        label: 'Fitness Training',
        checked: false,
        type: 'checkbox',
      },
    ],
  },
  {
    id: 'attend',
    name: 'Attendance',
    options: [
      { value: 'male', label: 'Male', checked: false, type: 'radio' },
      { value: 'female', label: 'Female', checked: false, type: 'radio' },
      { value: 'all', label: 'All', checked: true, type: 'radio' },
    ],
  },
]

function classes(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const mobileFilterIsOpen = ref<boolean>(false)

const hide = () => mobileFilterIsOpen.value = false
const show = () => mobileFilterIsOpen.value = true

const personalsStore = usePersonalStore()

const { personals } = toRefs(personalsStore)

function handleFilters() {
  // handle Filters form
}
</script>

<template>
  <div class="w-full">
    <div>
      <TransitionRoot
        appear
        as="template"
        :show="mobileFilterIsOpen"
      >
        <Dialog
          as="div"
          class="relative z-40 lg:hidden"
          :show="mobileFilterIsOpen"
          @close="hide"
        >
          <TransitionChild
            as="template"
            enter="transition-opacity ease-linear duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-black/25" />
          </TransitionChild>

          <div class="fixed inset-0 z-40 flex">
            <TransitionChild
              as="template"
              enter="transition ease-linear duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100"
              leave="transition ease-linear duration-300"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel class="relative ml-auto h-full max-w-xs w-full flex flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div class="flex items-center justify-between px-4">
                  <h2 class="text-lg fw-medium text-gray-900">
                    Filters
                  </h2>
                  <button
                    class="h-10 w-10 flex items-center justify-center rounded-md bg-white p-2 text-gray-400 -mr-2"
                    @click="hide"
                  >
                    <span class="sr-only">Close menu</span>
                    <div class="i-bx-x h-6 w-6" />
                  </button>
                </div>

                <!-- Filters -->
                <form
                  class="border-t-border-gray-200 mt-4"
                  @submit.prevent="handleFilters"
                >
                  <span class="sr-only">Categories</span>
                  <Disclosure
                    v-for="(category, index) in filters"
                    :key="index"
                    v-slot="{ open }"
                    as="div"
                    class="border-t border-gray-200 px-4 py-6"
                  >
                    <h3 class="flow-root -mx-2 -my-3">
                      <DisclosureButton class="w-full flex items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span class="fw-medium text-gray-900">{{ category.name }}</span>

                        <span class="ml-6 flex items-center">
                          <div
                            class="h-5 w-5"
                            :class="open ? 'i-bx-minus' : 'i-bx-plus'"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel class="pt-6">
                      <div class="space-y-6">
                        <div
                          v-for="(option, optionIdx) in category.options"
                          :key="optionIdx"
                          class="flex items-center"
                        >
                          <input
                            :id="`filter-mobile-${category.id}-${optionIdx}`"
                            class="rounded-border-gray-300 h-4 w-4 text-primary-600 focus:ring-primary-500"
                            :default-checked="option.checked"
                            :default-value="option.value"
                            :name="category.id"
                            :type="option.type"
                          >

                          <label
                            class="ml-3 min-w-0 flex-1 text-gray-500"
                            :for="`filter-mobile-${category.id}-${optionIdx}`"
                          >
                            {{ option.label }}
                          </label>
                        </div>
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>
      <section class="mx-auto px-4 lg:px-8 sm:px-6">
        <div class="z-40 flex items-baseline justify-between border-b border-gray-200 bg-white pb-6 pt-8 lt-md:sticky lt-md:top-16 lt-md:w-screen lt-md:px-6 lt-md:shadow-lg lt-md:-mx-6">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900">
            Find your personal trainer
          </h1>

          <div class="flex items-center">
            <Menu
              as="div"
              class="relative inline-block text-left"
            >
              <MenuButton class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                Sort
                <div
                  aria-hidden="true"
                  class="i-bx-chevron-down ml-1 h-5 w-5 flex-shrink-0 text-gray-400 -mr-1 group-hover:text-gray-500"
                />
              </MenuButton>

              <Transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div class="py-1">
                    <MenuItem
                      v-for="option in sortOptions"
                      :key="option.name"
                      v-slot="{ active }"
                    >
                      <a
                        :class="classes(
                          option.current
                            ? 'font-medium text-gray-900'
                            : 'text-gray-500',
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm',
                        )"
                        :href="option.href"
                      >
                        {{ option.name }}
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Transition>
            </Menu>

            <button
              class="ml-5 p-2 text-gray-400 -m-2 sm:ml-7 hover:text-gray-500"
              type="button"
            >
              <span class="sr-only">View grid</span>
              <div
                aria-hidden="true"
                class="i-bx-grid-alt h-5 w-5"
              />
            </button>
            <button
              class="ml-4 p-2 text-gray-400 -m-2 sm:ml-6 lg:hidden hover:text-gray-500"
              type="button"
              @click="show"
            >
              <span class="sr-only">Filters</span>
              <div
                aria-hidden="true"
                class="i-bx-bxs-filter-alt h-5 w-5"
              />
            </button>
          </div>
        </div>

        <section
          aria-labelledby="personals-heading"
          class="pb-24 pt-6"
        >
          <h2
            id="personals-heading"
            class="sr-only"
          >
            Personals
          </h2>

          <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <!-- {/* Filters */} -->
            <form class="hidden lg:block">
              <h3 class="sr-only">
                Categories
              </h3>

              <Disclosure
                v-for="section in filters"
                :key="section.id"
                v-slot="{ open }"
                as="div"
                class="border-b border-gray-200 py-6"
              >
                <h3 class="flow-root -my-3">
                  <DisclosureButton class="w-full flex items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                    <span class="font-medium text-gray-900">
                      {{ section.name }}
                    </span>
                    <span class="ml-6 flex items-center">
                      <div
                        aria-hidden="true"
                        class="h-5 w-5"
                        :class="open ? 'i-bx-minus' : 'i-bx-plus'"
                      />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel class="pt-6">
                  <div class="space-y-4">
                    <div
                      v-for="(option, optionIdx) in section.options"
                      :key="option.value"
                      class="flex items-center"
                    >
                      <input
                        :id="`filter-${section.id}-${optionIdx}`"
                        class="h-4 w-4 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
                        :default-checked="option.checked"
                        :default-value="option.value"
                        :name="`${section.id}[]`"
                        :type="option.type"
                      >
                      <label
                        class="ml-3 text-sm text-gray-600"
                        :for="`filter-${section.id}-${optionIdx}`"
                      >
                        {{ option.label }}
                      </label>
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>
            </form>

            <!-- {/* Personal grid */} -->
            <div class="lg:col-span-3">
              <h2 class="text-xl font-bold text-gray-900">
                {{ personals?.length || 0 }} results
              </h2>
              <div
                v-if="personals?.length"
                class="grid grid-cols-1 mt-8 gap-y-12 lg:grid-cols-4 sm:grid-cols-2 sm:gap-x-6 xl:gap-x-8"
              >
                <RouterLink
                  v-for="personal in personals"
                  :key="personal.id"
                  class="group relative overflow-hidden rounded-lg shadow-1 transition-shadow hover:shadow-4"
                  :to="`/p/${personal.id}`"
                >
                  <HPersonalCardVertical :personal="personal" />
                </RouterLink>
              </div>

              <div v-else>
                <h1>Sorry, we cannoft find any presonal trainer yet</h1>
                <p>can you try a different filter?</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>
