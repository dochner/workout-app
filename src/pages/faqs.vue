<script setup lang="ts">
const faqs = [
  {
    question: 'How do I register and create my profile?',
    answer: `
      <p>Before making a purchase, it is necessary to register and fill in the Profile data.</p>
      <p>
        To register, simply click on: <a href="/register">Sign up</a>
      </p>
      <ul>
        <li>Enter your email and create a 6-digit password.</li>
        <li>A confirmation email will be sent to you.</li>
        <li>After validating the email, log in with the email and password you created.</li>
        <li>
          Fill in all the Profile data
          and after that, you can hire your online personal trainer in the "explore" tab.
        </li>
      </ul>
    `,
  },
  {
    question: 'How do I hire an online personal trainer?',
    answer: `
      <p>After creating your profile, you can hire your online personal trainer.</p>
      <p>
        On the <a href="/p">personals page</a>
        you can filter the personal who is most aligned with your goal.
        See the information, ask questions if necessary, and when you choose, just click on HIRE.
      </p>
    `,
  },
  {
    question: 'I hired my online personal trainer, now what?',
    answer: `
      <p>After hiring, your online personal trainer will be informed.</p>
      <p>They will have 24 hours on business days to get in touch and/or set up your workout.</p>
      <p>
        If after this period your personal trainer has not responded,
        please <a href="/contact-us">contact us</a>.
      </p>
    `,
  },
  {
    question: 'How do I download the platform?',
    answer: `
      <p>
        The Workout Wizard is a PWA (Progressive Web Apps).
        If your cell phone is Android, simply click on <strong>"Add Workout Wizard App to Home Screen"</strong>.
      </p>
      <p>
        If the cell phone is iOS, open the <i>Safari</i>.
        Then, touch the share button - icon with a rectangle and an arrow pointing up.
        In the share menu, touch <strong>"Home Screen"</strong>.
        Click on <strong>Add</strong> and you're done!
        <br />
        <a href="/">See here for details</a>.
      </p>
    `,
  },
  {
    question: 'Is my card data secure?',
    answer: `
      <p>
        Your card data will be with the stored in payment system <a href="https://www.paypal.com/" rel="noreferrer" target="_blank">Paypal</a>.
        No information from your card will be saved or accessible to us.
      </p>
    `,
  },
  {
    question: 'Did the payment fail, how to update?',
    answer: `
      <p>
        If there was an error in your payment, the system will inform you to change your
        card. You will have 7 days to make the exchange and, after that period, the
        cancellation will be made automatically.
      </p>`,
  },
  {
    question: 'How to cancel the service?',
    answer: `
      <p>
        To cancel the service simply click on 'Unsubscribe' on the home screen.
      </p>
      <p>
        Please note that if the cancellation occurs after 7 consecutive days
        from the date of subscription, the amount already paid for the monthly fee will not be refunded.
        However, your workouts and information will be available until the end of the monthly period.
      </p>
    `,
  },
  {
    question:
      'What happens if the online personal trainer does not fulfill the promises?',
    answer: `
      <p>
        If your online personal trainer is no longer offering the service
        or has not started the service, you can Unsubscribe
        and/or contact us <a href="/contact-us">here</a> to analyze the situation.
      </p>
    `,
  },
  {
    question: 'If I want to cancel, is there a fee or penalty??',
    answer: `
      <p> There's no fee or penalty. The payment is recurring but you can cancel whenever you want. </p>
    `,
  },
  {
    question: 'Which information gonna be available for the personal trainer?',
    answer: `
      <p>
        Only important informations to set-up the workout plan.
        None of the contact information or identification will be available for the personal trainer.
      </p>
    `,
  },
  {
    question: 'Are my personal information safe?',
    answer: `
      <p>
        We aim to keep all user data secure by using SSL certificate. Personal information is only kept in our administrative database for billing purposes or personal contact between Workout Wizard and the User.
        No personal contact information is seen by other users.
      </p>
    `,
  },
  {
    question: 'Did I cancel the service, will my data be deleted?',
    answer: `
      <p>
        When you cancel your personal trainer service, your data will be saved in our
        database. If you want to hire a new personal trainer in the future, he or she will
        have access to your previous information and workout plans. If you want to delete
        your data from our database, you can request it through{' '}
        <a href="/contact-us">our contact us page</a>.
      </p>
    `,
  },
  {
    question: 'Where can I see the Terms of Use and Privacy Policy?',
    answer: `
      <p>
        We always strive for transparency and good information.
      </p>
      <p>
        See <a href="/terms-of-use">Student Terms of Use</a>
        <br />
        View our <a href="/privacy-policy">Privacy Policy</a>
      </p>
    `,
  },
]
</script>

<template>
  <div class="mx-auto max-w-7xl px-4 py-16 divide-y-2 divide-gray-200 lg:px-8 sm:px-6 sm:py-24">
    <h2 class="text-3xl font-extrabold text-gray-900">
      Frequently asked questions
    </h2>
    <div class="mt-6 pt-10">
      <dl class="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 space-y-10 md:space-y-0">
        <div
          v-for="faq in faqs"
          :key="faq.question"
        >
          <dt class="text-lg font-medium leading-6 text-gray-900">
            {{ faq.question }}
          </dt>
          <dd class="mt-2 text-base text-gray-500">
            <div
              v-if="faq.answer.includes('<p>')"
              class="text-base text-gray-500"
              v-html="faq.answer"
            />
            <p
              v-else
              class="text-base text-gray-500"
            >
              {{ faq.answer }}
            </p>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>
