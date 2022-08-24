import React from 'react';

const radioSelector = ( {input: { name,value,onChange }, props}) => {
  return (
    <div {...props} className='radio-options' >
      <input
        id='happy'
        name={name}
        type="radio"
        value='happy'
        checked={value === 'happy'}
        onChange={onChange}/>
      <label htmlFor='happy'><i className="hvr-shrink em em-blush"></i></label>
      <input
        id='love'
        name={name}
        type="radio"
        value='love'
        checked={value === 'love'}
        onChange={onChange}/>
      <label htmlFor='love'><i className="hvr-shrink em em-heart_eyes"></i></label>
      <input
        id='sad'
        name={name}
        type="radio"
        value='sad'
        checked={value === 'sad'}
        onChange={onChange}/>
      <label htmlFor='sad'><i className="hvr-shrink em em-cold_sweat"></i></label>
      <input
        id='annoyed'
        name={name}
        type="radio"
        value='annoyed'
        checked={value === 'annoyed'}
        onChange={onChange}/>
      <label htmlFor='annoyed'><i className="hvr-shrink em em-unamused"></i></label>
      <input
        id='angry'
        name={name}
        type="radio"
        value='angry'
        checked={value === 'angry'}
        onChange={onChange}/>
      <label htmlFor='angry'><i className="hvr-shrink em em-angry"></i></label>
    </div>
  );
}

export default radioSelector;