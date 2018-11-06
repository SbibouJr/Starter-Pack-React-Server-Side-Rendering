/**
 * Html
 * This Html.js file acts as a template that we insert all our generated
 * application code into before sending it to the client as regular HTML.
 * Note we're returning a template string from this function.
 */
const Html = ({ body, scriptBundle, title = 'Title' }) => `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width , height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1"/>
    <link rel="stylesheet" type="text/css" href="style.css"/>
    <title>${title}</title>
  </head>
  <body>
    <div id="react-container">${body}</div>
    <script src="script/bundle.js"></script>
  </body>
</html>
`;

export default Html;
