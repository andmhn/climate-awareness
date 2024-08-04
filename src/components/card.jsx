import './card.css'

export default function Card(props) {
  const {text, imgHeight, imgSrc, alt, title} = props;
  return (
    <div className="card">
      ﻿<div>
        <img height={imgHeight} src={imgSrc} alt={alt}/>
      </div>
      ﻿<div>
        {title && <h4>{title}</h4>}
        <div>﻿
        ﻿  {text}
        </div>
      ﻿</div>
    </div>
  );
}

export function TextTitleBox(props) {
  const {text, title} = props;
  return (
    <div className="card">
      ﻿<div>
        {title && <h4>{title}</h4>}
        <div>﻿
        ﻿  {text}
        </div>
      ﻿</div>
    </div>
  );
}

export function TextBox(text) {
  return (
    <div className="card">
      <div>﻿
      ﻿  {text}
      </div>
    </div>
  );
}
