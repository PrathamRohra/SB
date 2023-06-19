<template>
  <section
    id="contact-us"
    class="bg-cover bg-no-repeat h-screen w-screen mt-10 p-4"
  >
    <div class="flex flex-row justify-between">
      <img src="../../assets/Contact-Us-Graphic.svg" class="mt-40 w-[40vw]" />
      <div
        class="bg-white shadow-lg shadow-blue/20 rounded-md w-1/3 min-h-[50vh] mr-32"
      >
        <form
          class="p-14 text-xl"
          action="https://formsubmit.co/fe262bac81500884424cb3df8d4f17f9"
          method="POST"
          @submit="handleSubmit"
        >
          <h1 class="mb-10 font-bold">Send Us A Message</h1>
          <input
            class="border-b-[1px] mb-4 p-1 border-black w-full font-light text-sm focus:border-b-[1px] focus:border-blue focus:outline-none"
            placeholder="Your Email*"
            type="email"
            name="email"
            required
          />
          <input
            class="border-b-[1px] p-1 mb-4 border-black w-full font-light text-sm focus:border-b-[1px] focus:border-blue focus:outline-none"
            placeholder="Your Name*"
            type="text"
            name="name"
            required
          />
          <input
            class="border-b-[1px] p-1 mb-4 border-black w-full font-light text-sm focus:border-b-[1px] focus:border-blue focus:outline-none"
            placeholder="Your Phone Number*"
            type="tel"
            name="phone"
            required
          />
          <input
            class="border-b-[1px] p-1 mb-4 border-black w-full font-light text-sm focus:border-b-[1px] focus:border-blue focus:outline-none"
            placeholder="Subject"
            type="text"
            name="subject"
          />
          <textarea
            class="border-b-[1px] p-1 mb-4 border-black w-full font-light text-sm focus:border-b-[1px] focus:border-blue focus:outline-none resize-none h-32"
            placeholder="Your Message"
            type="text"
            name="message"
          />
          <div class="flex flex-row items-center space-x-2">
            <input
              type="checkbox"
              class="w-4 h-4 accent-emerald-600"
              required
            />
            <p class="text-xs">
              By sending this message, you confirm that you have read and agreed
              to our privacy-policy.
            </p>
          </div>
          <button
            class="text-white rounded-full w-52 h-12 mt-14 shadow-md shadow-gray-600/10 bg-blue outline outline-2 outline-blue hover:bg-blue/90 ease-in duration-300 flex justify-center items-center"
            type="submit"
          >
            Get Started
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactUs",
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      try {
        const form = e.target;

        const response = await fetch(form.action, {
          method: form.method,
          body: new FormData(form),
        });

        if (response.ok) {
          console.log("Form submitted");
        } else {
          console.log("Form submission failed");
        }
      } catch (error) {

        console.error(error);
      }
    },
  },
};
</script>
