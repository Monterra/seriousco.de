import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './text-image.less';

const TextImage = ({src, alignment, alt, width}) => {
  const [active, setActive] = useState(false);

  function closeModal() {
    setActive(false);
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
              <img src={src} alt={alt}/>
              {alt && <div><div className="alt-text">{alt}</div></div>}
            </div>
          </div>,
          document.body
        )
      }
      <img src={src} alt={alt} className={className} width={width} onClick={() => setActive(true)}/>
    </>
  );
};

TextImage.defaultProps = {
  alignment: `left`,
  width: 300
};

TextImage.propTypes = {
  alignment: PropTypes.string,
  width: PropTypes.number,
  alt: PropTypes.string
};

export default TextImage;