<template>
  <section class="mx-auto max-w-7xl w-full flex flex-grow flex-col px-4 lg:px-8 sm:px-6">
    <div class="my-auto flex-shrink-0 py-16 sm:py-32">
      <p class="text-sm font-semibold tracking-wide uppercase text-primary-600">
        404 error
      </p>
      <h1 class="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
        Page not found
      </h1>
      <p class="mt-2 text-base text-gray-500">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div class="mt-6">
        <RouterLink
          class="text-base font-medium text-primary-600 hover:text-primary-500"
          to="/"
        >
          <span aria-hidden="true"> &larr;</span> Go back home
        </RouterLink>
      </div>
    </div>
  </section>
</template>
