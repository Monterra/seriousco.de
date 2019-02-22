import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Highlight from 'react-highlight';

import './code.less';

function copyToClipboard(html) {
  // Create container for the HTML
  const container = document.createElement('div');
  container.innerHTML = html;

  // Hide element
  container.style.position = 'fixed';
  container.style.pointerEvents = 'none';
  container.style.opacity = '0';

  // Mount the container to the DOM to make `contentWindow` available
  document.body.appendChild(container);

  // Select the element / text
  window.getSelection().removeAllRanges();
  const range = document.createRange();
  range.selectNode(container);
  window.getSelection().addRange(range);

  // Actually copy the text
  document.execCommand('copy');

  // Remove the container
  document.body.removeChild(container);
}

const Code = ({ language, children }) => {
  const [state, setState] = useState({
    hideTimeout: null,
    copied: false
  });

  let codeLines = children.split('\n').filter(s => !!s.trim());
  const intendation = codeLines[0].match(/^(\s*)/)[0].length;
  codeLines = codeLines.map(s => s.substr(intendation));
  const code = codeLines.join('<br>');

  function btnCopyClick() {
    clearTimeout(state.hideTimeout);
    copyToClipboard(code);
    setState({
      hideTimeout: setTimeout(() => setState({copied: false}), 1000),
      copied: true
    });
  }

  return (
    <pre className={`code-snippet ${state.copied ? 'copied': ''}`}>
      <div className="btn-copy" onClick={btnCopyClick} />
      <Highlight element="div" innerHTML={true}>
        {`<code class="language-${language} hljs">${code}</code>`}
      </Highlight>
    </pre>
  )
};

Code.defaultProps = {
  language: 'javascript'
};

Code.propTypes = {
  language: PropTypes.string
};

export default Code;