import React from 'react'

export const FeatureSection = () => {
  return (
    <section class="mb-32 mt-28 text-white text-center p-10">
    <div class="flex justify-center">
      <div class="text-center max-w-[700px]">
        <h2 class="text-3xl font-bold mb-6 text-center">
          Why<u class="text-blue-500 "> us?</u>
        </h2>
        <p class="text- mb-12">
        Welcome to Neural Claim System, (NCS). NCS is a global leading, AI/Machine Learning platform which categorizes glass damage. This patented process allows insurance carriers and glass vendors the ability to submit a series of photos through the platform which will disposition the damage and determine what type of work needs to be performed.
        </p>
      </div>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
      <div class="mb-12 lg:mb-0">
        <div class="p-4 bg-blue-600 rounded-full shadow-lg inline-block mb-6">
          <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
            </path>
          </svg>
        </div>
        <h5 class="text-lg font-bold mb-4">Glass Damage</h5>
        <p class="text-gray-200 ">
        Our AI uses ROLAGS, an ANSI standard develeoped by the industry, to validate windshield damage.

bullet point
Annotates damage location

bullet point
Identifies type of break(s)

bullet point
Measures size of break(s)

bullet point
Labels number of break(s)
        </p>
      </div>

      <div class="mb-12 lg:mb-0">
        <div class="p-4 bg-blue-600 rounded-full shadow-lg inline-block mb-6">
          <svg class="w-5 h-5 text-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z">
            </path>
          </svg>
        </div>
        <h5 class="text-lg font-bold mb-4">Claim Processing</h5>
        <p class="text-gray-200">
        Accurate loss reporting

bullet point
24/7 claim execution

bullet point
Validates and dispositions claim in minutes instead of hours or days

bullet point
Global glass claim handling
        </p>
      </div>

      <div class="mb-12 md:mb-0">
        <div class="p-4 bg-blue-600 rounded-full shadow-lg inline-block mb-6">
          <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path fill="currentColor"
              d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z">
            </path>
          </svg>
        </div>
        <h5 class="text-lg font-bold mb-4">Data Access</h5>
        <p class="text-gray-200">
        Access to claim information

bullet point
Interactive real time reporting

bullet point
Tiered access for insurance carriers and vehicle owners
        </p>
      </div>

      <div class="mb-12 md:mb-0">
        <div class="p-4 bg-blue-600 rounded-full shadow-lg inline-block mb-6">
          <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512">
            <path fill="currentColor"
              d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z">
            </path>
          </svg>
        </div>
        <h5 class="text-lg font-bold mb-4">Glass Features</h5>
        <p class="text-gray-200 ">
        We've integrated build sheet data so you can:

bullet point
Identify key safety features

bullet point
Achieve accurate part selection

bullet point
Validate ADAS calibration requirements
        </p>
      </div>
    </div>
  </section>
  )
}
