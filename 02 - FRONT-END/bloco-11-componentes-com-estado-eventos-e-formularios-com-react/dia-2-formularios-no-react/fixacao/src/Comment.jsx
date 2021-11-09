import React from 'react';

class Comment extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    let error = undefined;
    if (value.length > 120) error = 'Limite de 120 caracteres atingido!!';

    return (
      <div>
        <label htmlFor="comment">Diga algo</label>
        <textarea id="comment" name="comment" rows="4" cols="25" value={value} onChange={handleChange} />
        <span className="errorSpan">{error ? error : ''}</span>
      </div>
    );
  }
}
 
export default Comment;
