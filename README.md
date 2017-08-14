![image](https://cloud.githubusercontent.com/assets/22159102/21554484/9d542f5a-cdc4-11e6-8c4c-7730a9e9e2d1.png)

# JavaScript client-side Monkey patches for Prerender.cloud server-side rendering

This project includes the source and tests for the JavaScript injected into sites running on Prerender.cloud

## Ajax-Preload

service.prerender.cloud Caches the AJAX responses from the prerender phase and uses this monkey patch to include them in your HTML as a base64 encoded payload. This solves the "initial state" problem of server-side rendered apps. (where otherwise, there's a screen flash between the initial HTML payload and JavaScript repaint)

## Ajax-Bypass

Adds a header, `X-Prerendered` to all XHR requests that signals to your middleware to skip service.prerender.cloud and go straight to the origin. (XHR requests don't need to be prerendered because the client has already loaded the app, and most of the time, these payloads are JSON or XML and thus not prerenderable)

## Head DeDupe

Prevents the client from inserting duplicate children of the head tag if they already exist (because the server rendered them).
Examples: duplicate meta, script, link or style tags.

# Running the tests locally

`make start` (now view the results of the tests in your various browsers, e.g.: Chrome, Firefox, Safari, IE etc...)

* http://localhost:8888

# Building (what gets injected)

`make build`
