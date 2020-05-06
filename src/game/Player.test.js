import ChangeListener from './ChangeListener';
import Players, { PROP_WEAPONS } from './Player';

test('Change listeners should get informed every time a change happened', () => {
  let callCounter = 0;
  let value = null;
  let name = null;

  function callback(v, n) {
    value = v;
    name = n;
    callCounter += 1;
  }
  const changeListener = new ChangeListener(callback);

  const player = Players[0];
  player.reset();
  player.addChangeListener(changeListener);
  player.setWeaponInInventory('P7', true);
  expect(callCounter).toBe(1);
  expect(value).toBeTruthy();
  expect(name).toBe(PROP_WEAPONS);

  player.removeChangeListener(changeListener);
  player.setWeaponInInventory('P7', false);
  expect(callCounter).toBe(1);
});

test('selectFirstWeapon should select the first weapon in inventory', () => {
  let callCounter = 0;
  function callback() {
    callCounter += 1;
  }
  const changeListener = new ChangeListener(callback);
  const player = Players[0];
  player.reset();
  player.setWeaponInInventory('AR-10', true);
  player.setWeaponInInventory('Panzerfaust 3', true);
  player.addChangeListener(changeListener);
  player.selectFirstWeapon();

  expect(callCounter).toBe(1);
  expect(player.getSelectedWeapon().name).toBe('AR-10');

  player.removeChangeListener(changeListener);
});

test('selectFirstWeapon should select the first grenade of no weapon is in inventory', () => {
  let callCounter = 0;
  function callback() {
    callCounter += 1;
  }
  const changeListener = new ChangeListener(callback);
  const player = Players[0];
  player.reset();
  player.setGrenadeCount('Stielhandgranate 24', 42);
  player.addChangeListener(changeListener);
  player.selectFirstWeapon();

  expect(callCounter).toBe(1);
  expect(player.getSelectedWeapon().name).toBe('Stielhandgranate 24');

  player.removeChangeListener(changeListener);
});

test('selectNextWeapon should iterate all weapons and grenades in inventory', () => {
  const player = Players[0];
  player.reset();
  player.setGrenadeCount('Stielhandgranate 24', 1);
  player.setWeaponInInventory('AR-10', true);
  player.setWeaponInInventory('Panzerfaust 3', true);

  player.selectFirstWeapon();
  expect(player.getSelectedWeapon().name).toBe('AR-10');
  player.selectNextWeapon();
  expect(player.getSelectedWeapon().name).toBe('Panzerfaust 3');
  player.selectNextWeapon();
  expect(player.getSelectedWeapon().name).toBe('Stielhandgranate 24');
  player.selectNextWeapon();
  expect(player.getSelectedWeapon().name).toBe('AR-10');
});

test('selectPreviousWeapon should iterate all weapons and grenades in inventory', () => {
  const player = Players[0];
  player.reset();
  player.setGrenadeCount('Stielhandgranate 24', 1);
  player.setWeaponInInventory('AR-10', true);
  player.setWeaponInInventory('Panzerfaust 3', true);

  player.selectFirstWeapon();
  expect(player.getSelectedWeapon().name).toBe('AR-10');
  player.selectPreviousWeapon();
  expect(player.getSelectedWeapon().name).toBe('Stielhandgranate 24');
  player.selectPreviousWeapon();
  expect(player.getSelectedWeapon().name).toBe('Panzerfaust 3');
  player.selectPreviousWeapon();
  expect(player.getSelectedWeapon().name).toBe('AR-10');
});
