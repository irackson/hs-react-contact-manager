export const main = async (context: { parameters: { text: string } }) => {
  const { text } = context.parameters;

  const response = `fTxhis is definitely coming from a serverless function! You entered: ${
    text as string
  }`;

  return response;
};
