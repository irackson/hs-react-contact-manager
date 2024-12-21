# Ian Rackson's Contact Manager HubSpot UI Extension

## Relevant Docs

- [UI Customization SDK](https://developers.hubspot.com/docs/guides/crm/ui-extensions/sdk)
- [HubSpot CLI Commands](https://developers.hubspot.com/docs/guides/cms/tools/local-development-cli)
- [GitHub Examples](https://github.com/HubSpot/ui-extensions-examples)
- [GitHub Tailwind Example](https://github.com/HubSpot/cms-react/blob/main/examples/styling/styling-project/styling-app/postcss.config.mjs)
- [GitHub CMS-React Docs](https://github.hubspot.com/cms-react/#what-are-the-new-things)
- [Card Location Options](https://knowledge.hubspot.com/object-settings/customize-records)
- [Figma Design Kit](https://developers.hubspot.com/docs/reference/ui-components/figma-design-kit)
- [GraphiQL Playground in Portal](https://app.hubspot.com/graphiql/48631558)
- [Project in Portal](https://app.hubspot.com/developer-projects/48631558/project/hs-react-contact-manager)
- [Test Contact](https://app.hubspot.com/contacts/48631558/record/0-1/86494764070)

## Serverless Functions

- [HubSpot Serverless FunctionURL](https://app.hubspot.com/api/crm-extensibility/execution/internal/v3/action/function/5883972?portalId=48631558&clienttimeout=30000&hs_static_app=crm-records-ui&hs_static_app_version=1.69200)
- [Local Development Serverless Function URL](http://localhost:5173/api/crm-extensibility/execution/internal/v3/action/function/5883972)
  > Example POST request Body:

```json
{
  "appId": 5883972,
  "extensibleCardId": 100842670,
  "serverlessFunction": "myFunc",
  "location": "crm.record.tab",
  "parameters": {
    "text": "hello world"
  },
  "objectId": 86494764070,
  "objectTypeId": "0-1"
}
```

> Example Response

```json
{
  "logId": "n/a",
  "response": "This is coming from a serverless function! You entered: sup"
}
```
