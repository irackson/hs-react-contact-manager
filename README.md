# Ian Rackson's Contact Manager HubSpot UI Extension

## Project Prompt

**Objective:**
Build a simple Contact Manager application in Hubspot with the following features:

- **Add Contacts:** Users can add new contacts with email, name and status.
- **Update Contacts:** Users can update contact information.
- **Delete Contacts:** Users can delete contacts.
- **Contact Filtering:** Add filters to view all contacts or contacts by status.

**Requirements:**

**Frontend:**

- Use Hubspot CMS React library to build a react application on the Hubspot CMS [Hubspot CMS React](https://github.hubspot.com/cms-react/)
- Build a responsive UI (CSS is optional but encouraged).

**Backend:**

- **Fullstack developer candidates:** Use the Hubspot GraphQL API via serverless functions to interact with the contacts object.
- **Frontend developer candidates:** Use local storage to mock the backend of the application.

**Testing Skills:**

- Write a function to validate the form (e.g., ensure the title is not empty).
- Add basic error handling for API calls.

**Evaluation Criteria:**

**Code Quality:**

- Clean, readable, and maintainable code.
- Proper use of React best practices.
- Version control - commit early and often.

**Functionality:**

- Application meets all the listed requirements.

**Creativity:**

- Bonus for adding extra features.

**Testing:**

- Bonus for including unit tests.

**Instructions for Submission:**

- Create a Hubspot Developer Account [Hubspot Developer Account](https://developers.hubspot.com/cms)
- Complete the implementation based on the requirements.
- Share your solution via GitHub.

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

## TODOs / Improvements

- Make use of [onCrmPropertiesUpdate](https://developers.hubspot.com/docs/guides/crm/ui-extensions/sample-extensions/overview#contact-duplicator)
