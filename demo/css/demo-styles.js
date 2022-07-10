import { setDocumentCustomStyles, } from '@bbva-web-components/bbva-core-lit-helpers';
import { css, } from 'lit-element';

setDocumentCustomStyles(css`
  #iframeBody {
    margin: 0;
  }
  .container {
    margin-top:10px;
    text-align: center;
  }
  button {
    padding: 10px 18px;
  }
  input {
    padding: 10px 5px;
    margin-bottom: 10px;
  }
  textarea {
    margin: 10px 0px;
    width: 100%;
    min-height: 300px;

  }
`);
