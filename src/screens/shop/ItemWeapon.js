import React from 'react';
import classNames from 'classnames';
import './ItemWeapon.css';

export default class ItemWeapon extends React.Component {

  render() {
    var imgClasses = classNames({
      'item-weapon-image': true,
      'compatible': (null !== this.props.selectedAmmunition) && 
                    (this.props.selectedAmmunition.name === this.props.weapon.ammo)
    });

    return (
      <div 
        className="item-weapon" 
        onMouseEnter={ this.handleMouseEnter }
        onMouseLeave={ this.handleMouseLeave }>
        <img className={ imgClasses } src={ this.props.weapon.image } alt=""></img>
      </div>
    );
  }

  handleMouseEnter = () => {
    this.props.onMouseEnter(this.props.weapon);
  }

  handleMouseLeave = () => {
    this.props.onMouseLeave();
  }

}