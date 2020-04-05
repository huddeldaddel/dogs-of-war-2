import React from 'react';
import classNames from 'classnames';
import './ItemAmmunition.css';

export default class ItemAmmunition extends React.Component {
  
  render() {
    var imgClasses = classNames({
      'item-ammunition-image': true,
      'compatible': (null !== this.props.selectedWeapon) && 
                    (this.props.selectedWeapon.ammo === this.props.ammunition.name)
    });

    return (
      <div 
        className="item-ammunition" 
        onMouseEnter={ this.handleMouseEnter }
        onMouseLeave={ this.handleMouseLeave }>
        <img className={ imgClasses } src={ this.props.ammunition.image } alt=""></img>
      </div>
    );
  }

  handleMouseEnter = () => {
    this.props.onMouseEnter(this.props.ammunition);
  }

  handleMouseLeave = () => {
    this.props.onMouseLeave();
  }

}