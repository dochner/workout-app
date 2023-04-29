<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
  layout: 'default',
})

const features = [
  {
    id: 1,
    name: 'Bodybuilding',
    icon: 'i-bx-bxs-bolt',
    description:
      'It\'s a fitness activity focused on weightlifting, nutrition, and muscle growth to create a toned, aesthetically pleasing physique.',
  },
  {
    id: 2,
    name: 'Slimming',
    icon: 'i-bx-star',
    description:
      'Weight loss process aimed at reducing body fat, improving body composition, and achieving a healthier physique.',
  },
  {
    id: 3,
    name: 'Health and Wellness',
    icon: 'i-bx-heart',
    description:
      'It involves lifestyle choices to achieve optimal physical, mental, and emotional well-being, prevent illness, and improve overall health.',
  },
  {
    id: 4,
    name: 'Fitness training',
    icon: 'i-bx-sun',
    description:
      'Is is a structured program to improve physical health, function, and wellness through exercise and physical activity',
  },
]

const personalsStore = usePersonalStore()

const personalsGrid = computed(() => personalsStore.personals.slice(0, 4))

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Sales Representant',
    image: '/images/personals/2.png',
    description:
      'WorkoutApp has completely transformed my fitness routine! With the help of my personal trainer, I\'ve been able to achieve my health and wellness goals and feel better than ever. The app is user-friendly and makes it easy to track my progress and stay on track. I highly recommend it to anyone looking to improve their fitness and overall well-being.',
  },
  {
    id: 2,
    name: 'David Smith',
    title: 'Frontend Developer',
    image: '/images/personals/1.png',
    description:
      'Before I started using WorkoutApp, I was struggling to stay motivated with my fitness routine. But with the help of my personal trainer, I\'ve been able to stay on track and make significant progress towards my goals. The app is a game-changer and I highly recommend it to anyone looking to take their fitness to the next level.',
  },
  {
    id: 3,
    name: 'Emily Davis',
    title: 'System Analyst',
    image: '/images/personals/4.png',
    description:
      'I\'ve been using WorkoutApp for several months now and it\'s been a complete game-changer for my fitness journey. With the help of my personal trainer, I\'ve been able to achieve my fitness goals and see real results. The app is easy to use and keeps me motivated and on track. I highly recommend it to anyone looking to improve their health and well-being.',
  },
]

const selected = ref(testimonials[1])
</script>

<template>
  <section class="relative px-6 lg:px-8">
    <div class="absolute inset-0 -z-10">
      <img
        class="h-full w-full object-cover"
        src="/hero.webp"
      >
      <div class="absolute inset-0 bg-primary-700 mix-blend-multiply" />
    </div>
    <div class="mx-auto max-w-2xl py-32 lg:py-56 sm:py-48">
      <div class="text-center">
        <h1 class="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Have an online training consultancy for you to achieve your goals!
        </h1>
        <p class="text-display mt-6 text-lg leading-8 text-white">
          Find your personal searching by name or specialization.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <HBtn
            color="primary"
            no-link-style
            to="/p"
          >
            Get started
          </HBtn>
          <RouterLink
            class="text-base font-semibold leading-7 text-white"
            to="/"
          >
            Learn more <span aria-hidden="true">→</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
  <!-- {/* Features Section */} -->
  <section class="overflow-hidden bg-light-50">
    <div class="relative mx-auto max-w-7xl px-4 py-12 lg:px-8 sm:px-6">
      <svg
        aria-hidden="true"
        class="absolute left-full top-0 transform lg:left-auto lg:right-full -translate-x-1/2 -translate-y-3/4 lg:translate-x-2/3 lg:translate-y-1/4"
        fill="none"
        height="784"
        viewBox="0 0 404 784"
        width="404"
      >
        <defs>
          <pattern
            id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
            height="20"
            patternUnits="userSpaceOnUse"
            width="20"
            x="0"
            y="0"
          >
            <rect
              class="text-gray-200"
              fill="currentColor"
              height="4"
              width="4"
              x="0"
              y="0"
            />
          </pattern>
        </defs>
        <rect
          fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
          height="784"
          width="404"
        />
      </svg>

      <div class="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div class="lg:col-span-1">
          <h2 class="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Looking for a specialty?
          </h2>
        </div>
        <dl class="mt-10 sm:grid lg:col-span-2 sm:grid-cols-2 lg:mt-0 sm:gap-x-8 sm:gap-y-10 space-y-10 sm:space-y-0">
          <div
            v-for="feature in features"
            :key="feature.name"
          >
            <dt>
              <div class="h-12 w-12 flex items-center justify-center rounded-md bg-primary-500 text-white">
                <div
                  aria-hidden="true"
                  class="h-6 w-6"
                  :class="feature.icon"
                />
              </div>
              <p class="mt-5 font-display text-lg font-medium leading-6 text-gray-900 underline underline-px underline-offset-2 underline-dashed">
                {{ feature.name }}
              </p>
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>

  <!-- {/* Personal Trainers */} -->
  <div class="relative bg-white">
    <div class="relative mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-24 sm:px-6">
      <div class="lg:grid lg:grid-cols-3 lg:gap-8 space-y-12 lg:space-y-0">
        <div class="space-y-5 sm:space-y-4">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Meet Our Dedicated Experts
          </h2>
          <p class="text-xl text-gray-500">
            Our expert team is ready to work with you to achieve your goals
          </p>

          <div class="lt-md:hidden">
            <RouterLink
              class="text-lg fw-semibold text-primary-500 underline underline-px underline-offset-2 underline-dashed"
              to="/"
            >
              See all
            </RouterLink>
          </div>
        </div>
        <div class="lg:col-span-2">
          <ul
            class="sm:grid sm:grid-cols-2 lg:gap-x-8 sm:gap-x-6 sm:gap-y-12 space-y-12 sm:space-y-0"
            role="list"
          >
            <li
              v-for="(person, index) in personalsGrid"
              :key="index"
              class="overflow-hidden rounded-lg bg-white shadow-1"
            >
              <RouterLink
                class="overflow-hidden rounded-lg shadow-lg"
                :to="`/p/${person.id}`"
              >
                <div class="group cursor-pointer space-y-4">
                  <div class="bg-gray-300">
                    <img
                      alt=""
                      class="w-full object-cover group-hover:opacity-75"
                      :src="person.image"
                    >
                  </div>
                  <div class="p-4 text-lg font-medium leading-6 space-y-1">
                    <h3>{{ person.fullName }}</h3>

                    <template v-if="Array.isArray(person.specialties)">
                      <span
                        v-for="specialty in person.specialties"
                        :key="specialty"
                        class="mr-3 text-sm text-secondary-600"
                      >
                        {{ specialty }}
                      </span>
                    </template>
                    <span
                      v-else
                      class="text-sm text-secondary-600"
                    >
                      {{ person.specialties }}
                    </span>

                    <p class="h-84px font-normal text-gray-500 !mt-md">
                      {{ person.shortDescription.slice(0, 120) }}...
                    </p>
                  </div>
                </div>
              </RouterLink>
            </li>
          </ul>
          <div class="mt-120px text-center md:hidden">
            <RouterLink
              class="text-lg fw-semibold text-primary-500 underline underline-px underline-offset-2 underline-dashed"
              to="/"
            >
              See all
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- {/* Testimonials */} -->
  <section class="bg-white py-12 lg:py-44">
    <div class="relative mx-auto max-w-7xl px-4 lg:px-8 sm:px-6">
      <div class="row justify-center space-x-md">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="cursor-pointer md:flex-shrink-0"
          @click="() => { selected = testimonials[index] }"
        >
          <img
            :class="`mx-auto h-16 w-16 rounded-full relative transition-all duration-300 opacity-50 ${
              testimonial.id === selected.id ? 'bottom-4 !opacity-100' : ''
            }`"
            :src="testimonial.image"
          >
        </div>
      </div>
      <div class="relative">
        <blockquote class="mt-10">
          <div class="mx-auto max-w-3xl text-center text-2xl leading-9 text-gray-900">
            <p>
              &ldquo;
              {{ selected.description }}
              &rdquo;
            </p>
          </div>
          <footer class="mt-8">
            <div class="md:flex md:items-center md:justify-center">
              <div class="mt-3 text-center">
                <p class="text-base font-medium text-gray-900">
                  {{ selected.name }}
                </p>

                <p class="text-base text-gray-500">
                  {{ selected.title }}
                </p>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  </section>

  <!-- {/* CTA */} -->
  <section class="relative bg-primary-900">
    <div class="h-56 md:absolute md:left-0 md:h-full md:w-1/2 sm:h-72">
      <img
        alt=""
        class="h-full w-full object-cover"
        src="/cta.webp"
      >
      <div class="absolute inset-0 bg-primary-500 mix-blend-multiply" />
    </div>

    <div class="relative mx-auto max-w-6xl px-4 py-12 lg:px-8 lg:py-40 sm:px-6">
      <div class="column justify-center md:ml-auto md:w-1/2 md:pl-10">
        <h2 class="font-display text-3xl font-semibold text-gray-300">
          Get started today with an online personal trainer
        </h2>

        <div class="mt-8">
          <div class="inline-flex rounded-md shadow">
            <RouterLink
              class="inline-flex items-center justify-center border border-transparent rounded-md bg-primary-500 px-5 py-3 text-base font-medium text-white hover:bg-primary-600"
              to="/register"
            >
              Sign up
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
