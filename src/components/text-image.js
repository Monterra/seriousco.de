import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './text-image.less';

const bodyClass = 'active-image-modal';

const TextImage = ({src, alignment, alt, width}) => {
  const [active, setActive] = useState(false);

  function openModal() {
    document.body.classList.toggle(bodyClass);
    setActive(true);
  }

  function closeModal() {
    document.body.classList.toggle(bodyClass);
    setActive(false);
  }

  let maxImageHeight = 500;
  if (typeof window !== `undefined`) {
    maxImageHeight = window.innerHeight - 100;
  }

  const className = `text-image ${alignment}`;
  return (
    <>
      {active &&
        ReactDOM.createPortal(
          <div className="text-image-modal">
            <div onClick={closeModal} className="text-image-modal-backdrop"/>
            <div className="image-container">
              <button onClick={closeModal}>×</button>
              <img src={src} alt={alt} style={{maxHeight: maxImageHeight}}/>
              {alt && <div><div className="alt-text">{alt}</div></div>}
            </div>
          </div>,
          document.body
        )
      }
      <img src={src} alt={alt} className={className} width={width} onClick={openModal}/>
    </>
  );
};

TextImage.defaultProps = {
  alignment: `left`,
  width: '300'
};

TextImage.propTypes = {
  alignment: PropTypes.string,
  width: PropTypes.string,
  alt: PropTypes.string
};

export default TextImage;