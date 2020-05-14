import React from 'react';
import styles from './ItemAmmunition.module.css';
import InventoryController from '../../game/InventoryController';
import InventoryStatusbar from './InventoryStatusbar';

export default class ItemAmmunition extends React.Component {
  
  render() {
    const ammoName = this.props.ammunition.name;
    let imgClasses = styles.itemAmmunitionImage;
    if((null !== this.props.selectedWeapon) && (this.props.selectedWeapon.ammo === ammoName)) {
      imgClasses += ' ' + styles.compatible;
    }

    return (
      <div 
        className={ styles.itemAmmunition }
        onClick={ this.handleClick }
        onMouseEnter={ this.handleMouseEnter }
        onMouseLeave={ this.handleMouseLeave }>
        <img className={ imgClasses } src={ this.props.ammunition.image } alt="" />
        <InventoryStatusbar 
          current={ InventoryController.getAmmunitionCount(this.props.player, ammoName) }
          max={ this.props.ammunition.maxCount } />
      </div>
    );
  }

  handleClick = () => {
    InventoryController.buyAmmunition(this.props.player, this.props.ammunition.name);
  }

  handleMouseEnter = () => {
    this.props.onMouseEnter(this.props.ammunition);
  }

  handleMouseLeave = () => {
    this.props.onMouseLeave();
  }

}
