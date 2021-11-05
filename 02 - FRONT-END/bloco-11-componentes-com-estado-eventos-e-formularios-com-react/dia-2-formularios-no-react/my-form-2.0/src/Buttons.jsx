import React from 'react';
import InsertedData from './InsertedData';

class Buttons extends React.Component {
  render() {
    const { handleSubmitClick, handleClearButton, data, displayMode } = this.props;

    return (
      <>
        <div className="buttons-container d-flex justify-content-center">
          <button className="btn btn-success" type="submit" onClick={handleSubmitClick}>Submit</button>
          <button className="btn btn-danger" type="button" onClick={handleClearButton}>Clear</button>
        </div>
        <InsertedData data={data} displayMode={displayMode} />
      </>
    );
  }
}
 
export default Buttons;