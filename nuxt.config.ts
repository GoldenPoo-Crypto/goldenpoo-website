// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
        },
      ],
    },
  },
  compatibilityDate: '2024-11-01',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      brevoApiKey: process.env.NUXT_PUBLIC_BREVO_API_KEY,
    },
  },
  vue: {
		compilerOptions: {
			isCustomElement: (tag) => tag === 'iconify-icon',
		},
	},
});
