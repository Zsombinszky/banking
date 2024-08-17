import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://bc692c79a68ffb403e0f7a55f01cf58e@o4507792141385728.ingest.de.sentry.io/4507792143810640",

  integrations: [
    Sentry.replayIntegration(),
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});