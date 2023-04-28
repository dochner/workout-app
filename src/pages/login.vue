<template>
  <div class="min-h-screen w-full flex bg-white">
    <div class="flex flex-1 flex-col justify-center px-4 py-12 lg:flex-none lg:px-20 sm:px-6 xl:px-24">
      <div class="mx-auto w-full sm:w-screen-xs">
        <div>
          <RouterLink to="/">
            <img
              alt="Workflow"
              class="mx-auto h-20 w-auto"
              src="/favicon.svg"
            >
          </RouterLink>
          <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p class="mt-2 text-sm text-gray-600">
            Or
            <RouterLink
              class="font-medium text-primary-600 hover:text-primary-500"
              to="/register"
            >
              create an account
            </RouterLink>
          </p>
        </div>

        <div class="mt-8">
          <div>
            <div>
              <p class="text-sm font-medium text-gray-700">
                Sign in with
              </p>

              <div class="grid mt-1 gap-3">
                <div>
                  <a
                    class="w-full inline-flex justify-center border border-gray-300 rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                    href="#"
                    title="Sign in with Google"
                  >
                    <span class="sr-only">Sign in with Google</span>

                    <div
                      alt=""
                      class="i-logos-google-icon h-6 w-6"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div class="relative mt-6">
              <div
                aria-hidden="true"
                class="absolute inset-0 flex items-center"
              >
                <div class="w-full border-t border-gray-300" />
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>
          </div>

          <div class="mt-6">
            <form
              class="space-y-6"
              @submit.prevent="() => {}"
            >
              <div>
                <label
                  class="block text-sm font-medium text-gray-700"
                  for="email"
                >
                  Email address
                </label>
                <div class="mt-1">
                  <input
                    id="email"
                    auto-complete="email"
                    class="block w-full appearance-none border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-primary-500 sm:text-sm focus:outline-none focus:ring-primary-500 placeholder-gray-400"
                    name="email"
                    required
                    type="email"
                  >
                </div>
              </div>

              <div class="space-y-1">
                <label
                  class="block text-sm font-medium text-gray-700"
                  for="password"
                >
                  Password
                </label>
                <div class="mt-1">
                  <input
                    id="password"
                    auto-complete="current-password"
                    class="block w-full appearance-none border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-primary-500 sm:text-sm focus:outline-none focus:ring-primary-500 placeholder-gray-400"
                    name="password"
                    required
                    type="password"
                  >
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input
                    id="remember-me"
                    class="h-4 w-4 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
                    name="remember-me"
                    type="checkbox"
                  >
                  <label
                    class="ml-2 block text-sm text-gray-900"
                    for="remember-me"
                  >
                    Remember me
                  </label>
                </div>

                <div class="text-sm">
                  <a
                    class="font-medium text-primary-600 hover:text-primary-500"
                    href="#"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  class="w-full flex justify-center border border-transparent rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  type="submit"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="relative relative hidden w-0 flex-1 md:block">
      <img
        alt=""
        class="absolute inset-0 h-full w-full object-cover object-center"
        src="https://images.unsplash.com/photo-1640622304931-7f9e856f787b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
      >
      <div class="absolute inset-0 bg-primary-700 text-white mix-blend-multiply" />
      <div class="absolute top-3/4 w-full text-center font-display text-white">
        <h2 class="text-3xl fw-bold md:text-5xl">
          Custom workouts
        </h2>
        <p>To better fit in your routine, as you need.</p>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: auth
</route>
