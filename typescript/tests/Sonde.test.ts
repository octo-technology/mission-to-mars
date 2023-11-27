import { Direction } from '../src/Direction'
import { Helicoptere } from '../src/Helicoptere'
import { ModuleMartien2D } from '../src/ModuleMartien2D'
import { ModuleMartien3D } from '../src/ModuleMartien3D'
import { MouvementNord2D } from '../src/MouvementNord2D'
import { Position } from '../src/Position'
import { Rover } from '../src/Rover'
import { Sonde } from '../src/Sonde'

describe('Sonde', () => {
  it('Le rover doit être récupéré', () => {
    // GIVEN
    const nord = new Direction(new MouvementNord2D());
    const perseverance: ModuleMartien2D = new Rover(nord, new Position(4, 4, 0));
    const sonde: Sonde = new Sonde();

    // WHEN
    sonde.preparerRecuperation(perseverance);

    // THEN
    expect(perseverance.isPretPourRecuperation()).toBeTruthy();
    expect(new Position(4, 4, 0)).toStrictEqual(perseverance.getPosition())
  })

  it('L’hélicoptère doit être récupéré', () => {
    // GIVEN
    const nord = new Direction(new MouvementNord2D());
    const ingenuity: ModuleMartien3D = new Helicoptere(nord, new Position(4, 4, 50));
    const sonde: Sonde = new Sonde();

    // WHEN
    sonde.preparerRecuperation(ingenuity);

    // THEN
    expect(ingenuity.isPretPourRecuperation()).toBeTruthy();
    expect(new Position(4, 4, 0)).toStrictEqual(ingenuity.getPosition())
  })
})
