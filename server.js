var AssistantV1 = require('watson-developer-cloud/assistant/v1');
 
/*var assistant = new AssistantV1({
  username: 'apikey',
  password: '8ZRrIY9Cz-vNwYXTXGLweGKiB8TRXKwNiFXhkJTK-In-',
  url: 'https://gateway-fra.watsonplatform.net/assistant/api/v2/assistants/e2b54ca6-6a25-4ce1-be20-bdd2bf881b10/sessions',
  version: '2018-02-16'
});*/



var assistant = new AssistantV1({
  version: '2018-02-16',
  iam_apikey: '8ZRrIY9Cz-vNwYXTXGLweGKiB8TRXKwNiFXhkJTK-In-',
  url: 'https://gateway-fra.watsonplatform.net/assistant/api'
});
 
assistant.message(
  {
    input: { text: "Hello" },
    workspace_id: '4184b2bc-c24f-4e55-84ec-9c71d925d87f'
  },
  function(err, response) {
    if (err) {
      console.error(err);
    } else {
      console.log(JSON.stringify(response, null, 2));
    }
  }
);

//curl -u "apikey:{8ZRrIY9Cz-vNwYXTXGLweGKiB8TRXKwNiFXhkJTK-In-}" "{https://gateway-fra.watsonplatform.net/assistant/api/v2/assistants/e2b54ca6-6a25-4ce1-be20-bdd2bf881b10/sessions}/{GET}"

//curl -u apikey:8ZRrIY9Cz-vNwYXTXGLweGKiB8TRXKwNiFXhkJTK-In- https://gateway-fra.watsonplatform.net/assistant/api/v2/assistants/e2b54ca6-6a25-4ce1-be20-bdd2bf881b10/sessions/GET