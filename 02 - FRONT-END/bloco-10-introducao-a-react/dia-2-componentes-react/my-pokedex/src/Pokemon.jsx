import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.info;
    const { value, measurementUnit } = averageWeight;
    return (
      <section className='pokemon'>
        <div className="pokemon-info">
          <p>{name}</p>
          <p>{type}</p>
          <p>{`Average Weight: ${value} ${measurementUnit}`}</p>
        </div>
        <div className='pokemon-image'>
          <img src={image} alt={name} />
        </div>
      </section>
    );
  }
}

export default Pokemon;
