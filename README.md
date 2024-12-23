# Ian Rackson's Contact Manager HubSpot UI Extension

## Project Prompt

### Objective

Build a simple Contact Manager application in Hubspot with the following features:

- [x] **Add Contacts:** Users can add new contacts with email, name and status.
- [x] **Update Contacts:** Users can update contact information.
- [x] **Delete Contacts:** Users can delete contacts.
- [x] **Contact Filtering:** Add filters to view all contacts or contacts by status.

### Requirements

#### Frontend

- [x] Use Hubspot CMS React library to build a react application on the Hubspot CMS [Hubspot CMS React](https://github.hubspot.com/cms-react/)
- [x] Build a responsive UI (CSS is optional but encouraged).

#### Backend

- [x] **Fullstack developer candidates:** Use the Hubspot GraphQL API via serverless functions to interact with the contacts object.
- [ ] **Frontend developer candidates:** Use local storage to mock the backend of the application.

#### Testing Skills

- [ ] Write a function to validate the form (e.g., ensure the title is not empty).
      _not needed, since I used the `CrmPropertyList` component in place of a form_
- [x] Add basic error handling for API calls.

### Evaluation Criteria

#### Code Quality

- [x] Clean, readable, and maintainable code.
- [x] Proper use of React best practices.
- [x] Version control - commit early and often.

#### Functionality

- [x] Application meets all the listed requirements.

#### Creativity

- [x] Bonus for adding extra features.
      _'View' button opens contact using `CrmActionButton`_

#### Testing

- [x] Bonus for including unit tests.
      _see `src/app/app.functions/serverless_src/fetchContacts.ts` for an example_
      _typescript also helps_

### Instructions for Submission

- [x] Create a Hubspot Developer Account [Hubspot Developer Account](https://developers.hubspot.com/cms)
      _[Rackson_Test_Portal_A8](https://app.hubspot.com/contacts/48631558/record/0-1/86494764070)_
      _[Project in Portal](https://app.hubspot.com/developer-projects/48631558/project/hs-react-contact-manager)_
- [x] Complete the implementation based on the requirements.
- [x] Share your solution via GitHub.
      [see project on GitHub](https://github.com/irackson/hs-react-contact-manager)

## Relevant Docs

- [UI Customization SDK](https://developers.hubspot.com/docs/guides/crm/ui-extensions/sdk)
- [HubSpot CLI Commands](https://developers.hubspot.com/docs/guides/cms/tools/local-development-cli)
- [GitHub Examples](https://github.com/HubSpot/ui-extensions-examples)
- [GitHub CMS-React Docs](https://github.hubspot.com/cms-react/#what-are-the-new-things)
- [Card Location Options](https://knowledge.hubspot.com/object-settings/customize-records)
- [Figma Design Kit](https://developers.hubspot.com/docs/reference/ui-components/figma-design-kit)
- [GraphiQL Playground in Portal](https://app.hubspot.com/graphiql/48631558)
