const main = async (context: {
  parameters: {
    text: string;
  };
}) => {
  const { text } = context.parameters;

  const response = `This is definitely coming from a serverless function! You entered: ${text}`;

  return response;
};

module.exports = {
  main,
};
