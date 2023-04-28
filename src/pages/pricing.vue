<script setup lang="ts">
const plans = [
  {
    title: 'Quarterly',
    featured: false,
    description: 'All your essential business finances, taken care of.',
    price: 5,
    mainFeatures: [
      { id: 1, value: 'Personalized workouts by a personal trainer' },
      { id: 2, value: 'Direct chat with the personal trainer' },
      { id: 3, value: 'Load Control, and frequency' },
      { id: 4, value: 'Ask for help and changes whenever you need it' },
      { id: 5, value: 'Single payment via credit card or Pix' },
      { id: 6, value: '7 days warranty' },
      {
        id: 7,
        value: 'Cancellation with refund of the remaining months, discount rate only',
      },
    ],
  },
  {
    title: 'Monthly',
    featured: true,
    description: 'The best financial services for your thriving business.',
    price: 19,
    mainFeatures: [
      { id: 1, value: 'Personalized workouts by a personal trainer' },
      { id: 2, value: 'Direct chat with the personal trainer' },
      { id: 3, value: 'Load Control, and frequency' },
      { id: 4, value: 'Ask for help and changes whenever you need it' },
      { id: 5, value: 'Payment via credit card billed monthly' },
      { id: 6, value: '7 days warranty' },
      { id: 7, value: 'Cancellation without penalties or fees' },
    ],
  },
  {
    title: 'Semester',
    featured: false,
    description: 'Convenient features to take your business to the next level.',
    price: 12,
    mainFeatures: [
      { id: 1, value: 'Personalized workouts by a personal trainer' },
      { id: 2, value: 'Direct chat with the personal trainer' },
      { id: 3, value: 'Load Control, and frequency' },
      { id: 4, value: 'Ask for help and changes whenever you need it' },
      { id: 5, value: 'Single payment via credit card or Pix' },
      { id: 6, value: '7 days warranty' },
      {
        id: 7,
        value: 'Cancellation with refund of the remaining months, discount rate only',
      },
    ],
  },
]
const features = [
  {
    title: 'Personalized workouts by a personal trainer',
    tiers: [
      { title: 'quarterly', value: true },
      { title: 'monthly', featured: true, value: true },
      { title: 'semester', value: true },
    ],
  },
  {
    title: 'Direct chat with the personal trainer',
    tiers: [
      { title: 'quarterly', value: true },
      { title: 'monthly', featured: true, value: true },
      { title: 'semester', value: true },
    ],
  },
  {
    title: 'Ask for help and changes whenever you need it',
    tiers: [
      { title: 'quarterly', value: true },
      { title: 'monthly', featured: true, value: true },
      { title: 'semester', value: true },
    ],
  },
  {
    title: 'Payment',
    tiers: [
      { title: 'quarterly', value: 'Single payment via credit card or pix' },
      { title: 'monthly', featured: true, value: 'Billed monthly via credit card' },
      { title: 'semester', value: 'Single payment via credit card or pix' },
    ],
  },
  {
    title: '7 days warranty',
    tiers: [
      { title: 'quarterly', value: true },
      { title: 'monthly', featured: true, value: true },
      { title: 'semester', value: true },
    ],
  },
  {
    title: 'Cancellation',
    tiers: [
      {
        title: 'quarterly',
        value: 'with refund of the remaining months, discount rate only',
      },
      { title: 'monthly', featured: true, value: 'without penalties or fees' },
      { title: 'semester', value: 'refund of the remaining months, discount rate only' },
    ],
  },
]

const faqs = [
  {
    id: 1,
    question: 'Are the workouts set up by professionals?',
    answer:
      'All workouts are set up by physical education professionals, who will always prioritize your health and safety. We hate training assembly robots.',
  },
  {
    id: 2,
    question: 'How is the payment done?',
    answer:
      'Payment is via credit card, Pix option is available in some plans. paypal is the payment and billing gateway. Your data is in a safe and secure environment.',
  },

  {
    id: 3,
    question: 'If I want to cancel, is there a fee or penalty?',
    answer:
      'To cancel, just click Unsubscribe or contact us. There are no fees or fines in case of cancellation in the monthly plan, in the other plans, only the amount of the discount is discounted in the reimbursement.',
  },

  {
    id: 4,
    question: 'How can I contact my personal trainer?',
    answer:
      'The conversation with the personal trainer will be done through the platform. Your personal trainer will not always be online, but your answer will be answered as soon as possible.',
  },
]

function classes(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
</script>

<template>
  <section>
    <div>
      <div class="relative bg-primary-600">
        <!-- {/* Overlapping background */} -->
        <div
          aria-hidden="true"
          class="absolute bottom-0 hidden h-6 w-full lg:block"
        />

        <div class="relative mx-auto max-w-2xl px-4 pt-16 text-center lg:max-w-7xl lg:px-8 sm:px-6 sm:pt-32">
          <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            <span class="block lg:inline">Simple pricing,</span>
            <span class="block lg:inline"> no commitment.</span>
          </h1>
          <p class="mt-4 text-xl text-primary-100">
            Everything you need, nothing you don't. Pick a plan that best suits you.
          </p>
        </div>

        <h2 class="sr-only">
          Plans
        </h2>

        <!-- {/* Cards */} -->
        <div class="relative mx-auto mt-8 max-w-2xl px-4 pb-8 sm:mt-12 lg:max-w-7xl lg:px-8 sm:px-6 lg:pb-0">
          <!-- {/* Decorative background */} -->
          <div
            aria-hidden="true"
            class="absolute inset-0 bottom-6 left-8 right-8 top-4 hidden rounded-lg rounded-tr-lg bg-primary-700 lg:block"
          />

          <div class="relative lg:grid lg:grid-cols-3 space-y-6 lg:space-y-0">
            <div
              v-for="plan in plans"
              :key="plan.title"
              :class="classes(
                plan.featured
                  ? 'bg-white ring-2 ring-primary-700 shadow-md'
                  : 'bg-primary-700 lg:bg-transparent',
                'pt-6 px-6 pb-8 rounded-lg lg:px-8 lg:pt-12',
              )"
            >
              <div>
                <h3
                  :class="classes(
                    plan.featured ? 'text-primary-600' : 'text-white',
                    'text-sm font-semibold uppercase tracking-wide',
                  )"
                >
                  {{ plan.title }}
                </h3>
                <div class="flex flex-col items-start sm:flex-row lg:flex-col lg:items-start sm:items-center sm:justify-between">
                  <div class="mt-3 flex items-center">
                    <p
                      :class="classes(
                        plan.featured ? 'text-primary-600' : 'text-white',
                        'text-4xl font-extrabold tracking-tight',
                      )"
                    >
                      {{ plan.price }}$
                    </p>
                  </div>
                  <a
                    :class="classes(
                      plan.featured
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-white text-primary-600 hover:bg-primary-50',
                      'mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full',
                    )"
                    href="#"
                  >
                    Contract {{ plan.title }}
                  </a>
                </div>
              </div>
              <h4 class="sr-only">
                Features
              </h4>
              <ul
                :class="classes(
                  plan.featured
                    ? 'border-gray-200 divide-gray-200'
                    : 'border-primary-500 divide-primary-500 divide-opacity-75',
                  'mt-7 border-t divide-y lg:border-t-0',
                )"
                role="list"
              >
                <li
                  v-for="mainFeature in plan.mainFeatures"
                  :key="mainFeature.id"
                  class="flex items-center py-3"
                >
                  <div
                    aria-hidden="true"
                    class="i-bx-check"
                    :class="classes(
                      plan.featured ? 'text-primary-500' : 'text-primary-200',
                      'w-5 h-5 flex-shrink-0',
                    )"
                  />
                  <span
                    :class="classes(
                      plan.featured ? 'text-gray-600' : 'text-white',
                      'ml-4 text-sm font-medium',
                    )"
                  >
                    {{ mainFeature.value }}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- {/* Feature comparison */} -->
      <section
        aria-labelledby="mobile-comparison-heading"
        class="lg:hidden"
      >
        <h2
          id="mobile-comparison-heading"
          class="sr-only"
        >
          Feature comparison
        </h2>

        <div class="mx-auto mt-16 max-w-2xl px-4 space-y-16 sm:px-6">
          <div
            v-for="(plan, planIndex) in plans"
            :key="plan.title"
            class="border-t border-gray-200"
          >
            <div
              :class="classes(
                plan.featured ? 'border-primary-600' : 'border-transparent',
                '-mt-px pt-6 border-t-2 sm:w-1/2',
              )"
            >
              <h3
                :class="classes(
                  plan.featured ? 'text-primary-600' : 'text-gray-900',
                  'text-sm font-bold',
                )"
              >
                {{ plan.title }}
              </h3>
            </div>

            <div class="relative mt-6">
              <!-- {/* Fake card background */} -->
              <div
                aria-hidden="true"
                class="pointer-events-none absolute inset-0 hidden sm:block"
              >
                <div
                  :class="classes(
                    plan.featured ? 'shadow-md' : 'shadow',
                    'absolute right-0 w-1/2 h-full bg-white rounded-lg',
                  )"
                />
              </div>

              <div
                :class="classes(
                  plan.featured
                    ? 'ring-2 ring-primary-600 shadow-md'
                    : 'ring-1 ring-black ring-opacity-5 shadow',
                  'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none',
                )"
              >
                <dl class="divide-y divide-gray-200">
                  <div
                    v-for="feature in features"
                    :key="feature.title"
                    class="flex items-center justify-between py-3 sm:grid sm:grid-cols-2"
                  >
                    <dt class="pr-4 text-sm font-medium text-gray-600">
                      {{ feature.title }}
                    </dt>
                    <dd class="flex items-center justify-end sm:justify-center sm:px-4">
                      <span
                        v-if="typeof feature.tiers[planIndex].value === 'string'"
                        :class="classes(
                          feature.tiers[planIndex].featured
                            ? 'text-primary-600'
                            : 'text-gray-900',
                          'text-sm font-medium',
                        )"
                      >
                        {{ feature.tiers[planIndex].value }}
                      </span>
                      <template v-else>
                        <div
                          v-if="feature.tiers[planIndex].value === true"
                          aria-hidden="true"
                          class="i-bx-check mx-auto h-5 w-5 text-primary-600"
                        />
                        <div
                          v-else
                          aria-hidden="true"
                          class="i-bx-x mx-auto h-5 w-5 text-gray-400"
                        />

                        <span class="sr-only">
                          {{ feature.tiers[planIndex].value === true ? 'Yes' : 'No' }}
                        </span>
                      </template>
                    </dd>
                  </div>
                </dl>
              </div>

              <!-- {/* Fake card border */} -->
              <div
                aria-hidden="true"
                class="pointer-events-none absolute inset-0 hidden sm:block"
              >
                <div
                  :class="classes(
                    plan.featured
                      ? 'ring-2 ring-primary-600'
                      : 'ring-1 ring-black ring-opacity-5',
                    'absolute right-0 w-1/2 h-full rounded-lg',
                  )"
                />
              </div>
            </div>

            <div class="relative mt-6">
              <!-- {/* Fake card background */} -->
              <div
                aria-hidden="true"
                class="pointer-events-none absolute inset-0 hidden sm:block"
              >
                <div
                  :class="classes(
                    plan.featured ? 'shadow-md' : 'shadow',
                    'absolute right-0 w-1/2 h-full bg-white rounded-lg',
                  )"
                />
              </div>

              <!-- {/* Fake card border */} -->
              <div
                aria-hidden="true"
                class="pointer-events-none absolute inset-0 hidden sm:block"
              >
                <div
                  :class="classes(
                    plan.featured
                      ? 'ring-2 ring-primary-600'
                      : 'ring-1 ring-black ring-opacity-5',
                    'absolute right-0 w-1/2 h-full rounded-lg',
                  )"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="comparison-heading"
        class="hidden lg:block"
      >
        <h2
          id="comparison-heading"
          class="sr-only"
        >
          Feature comparison
        </h2>

        <div class="mx-auto mt-24 max-w-7xl px-8">
          <div class="w-full flex items-stretch border-t border-gray-200">
            <div class="w-1/4" />
            <div
              v-for="(plan, index) in plans"
              :key="plan.title"
              aria-hidden="true"
              :class="classes(
                index === plans.length - 1 ? '' : 'pr-4',
                '-mt-px pl-4 w-1/4',
              )"
            >
              <div
                :class="classes(
                  plan.featured ? 'border-primary-600' : 'border-transparent',
                  'py-6 border-t-2',
                )"
              >
                <p
                  :class="classes(
                    plan.featured ? 'text-primary-600' : 'text-gray-900',
                    'text-sm font-bold',
                  )"
                >
                  {{ plan.title }}
                </p>
              </div>
            </div>
          </div>

          <div class="relative">
            <!-- {/* Fake card backgrounds */} -->
            <div
              aria-hidden="true"
              class="pointer-events-none absolute inset-0 flex items-stretch"
            >
              <div class="w-1/4 pr-4" />
              <div class="w-1/4 px-4">
                <div class="h-full w-full rounded-lg bg-white shadow" />
              </div>
              <div class="w-1/4 px-4">
                <div class="h-full w-full rounded-lg bg-white shadow-md" />
              </div>
              <div class="w-1/4 pl-4">
                <div class="h-full w-full rounded-lg bg-white shadow" />
              </div>
            </div>

            <table class="relative w-full">
              <caption class="sr-only">
                Business feature comparison
              </caption>
              <thead>
                <tr class="text-left">
                  <th scope="col">
                    <span class="sr-only">Feature</span>
                  </th>
                  <th
                    v-for="plan in plans"
                    :key="plan.title"
                    scope="col"
                  >
                    <span class="sr-only">{{ plan.title }} plan</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr
                  v-for="feature in features"
                  :key="feature.title"
                >
                  <th
                    class="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600"
                    scope="row"
                  >
                    {{ feature.title }}
                  </th>
                  <td
                    v-for="(tier, index) in feature.tiers"
                    :key="tier.title"
                    :class="classes(
                      index === feature.tiers.length - 1 ? 'pl-4' : 'px-4',
                      'relative w-1/4 py-0 text-center',
                    )"
                  >
                    <span class="relative h-full w-full py-3">
                      <span
                        v-if="typeof tier.value === 'string'"
                        :class="classes(
                          tier.featured ? 'text-primary-600' : 'text-gray-900',
                          'text-sm font-medium',
                        )"
                      >
                        {{ tier.value }}
                      </span>
                      <template v-else>
                        <div
                          v-if="!!tier.value"
                          aria-hidden="true"
                          class="i-bx-check mx-auto h-5 w-5 text-primary-600"
                        />
                        <div
                          v-else
                          aria-hidden="true"
                          class="i-bx-x mx-auto h-5 w-5 text-gray-400"
                        />

                        <span class="sr-only">
                          {{ tier.value === true ? 'Yes' : 'No' }}
                        </span>
                      </template>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>

            <!-- {/* Fake card borders */} -->
            <div
              aria-hidden="true"
              class="pointer-events-none absolute inset-0 flex items-stretch"
            >
              <div class="w-1/4 pr-4" />
              <div class="w-1/4 px-4">
                <div class="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
              <div class="w-1/4 px-4">
                <div class="h-full w-full rounded-lg ring-2 ring-primary-600 ring-opacity-100" />
              </div>
            </div>
          </div>

          <div class="relative mt-6">
            <table class="relative w-full">
              <caption class="sr-only">
                Feature comparison
              </caption>
              <thead>
                <tr class="text-left">
                  <th scope="col">
                    <span class="sr-only">Feature</span>
                  </th>
                  <th
                    v-for="plan in plans"
                    :key="plan.title"
                    scope="col"
                  >
                    <span class="sr-only">{{ plan.title }} plan</span>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </section>
    </div>

    <!-- {/* FAQs */} -->
    <section
      aria-labelledby="faq-heading"
      class="mt-12 bg-gray-900"
    >
      <div class="mx-auto max-w-2xl px-4 py-16 lg:max-w-7xl lg:px-8 sm:px-6 sm:py-24">
        <div class="max-w-2xl lg:mx-auto lg:text-center">
          <h2
            id="faq-heading"
            class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
          >
            Frequently asked questions
          </h2>
        </div>
        <div class="mt-20">
          <dl class="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10 space-y-10 lg:space-y-0">
            <div
              v-for="faq in faqs"
              :key="faq.id"
            >
              <dt class="font-semibold text-white">
                {{ faq.question }}
              </dt>
              <dd class="mt-3 text-gray-400">
                {{ faq.answer }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  </section>
</template>
