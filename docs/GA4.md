# Google Analytics 4 (GA4)

4B Clinic uses a public runtime environment variable for GA4:

```
PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
```

The analytics component:
- sends one `page_view` event on each SvelteKit navigation;
- tracks `phone_click` for telephone links;
- tracks `appointment_click` for links to `/contact`;
- tracks `whatsapp_click` for WhatsApp links;
- does not send form field values or patient-entered text.

No analytics data is sent when `PUBLIC_GA4_MEASUREMENT_ID` is unset.
