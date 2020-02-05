import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://a989eb728e374842bb80282089f51064@sentry.io/2269800"
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};
