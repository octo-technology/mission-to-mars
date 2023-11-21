import { Direction } from '../src/Direction'
import { ModuleMartien2D } from '../src/ModuleMartien2D'
import { MouvementEst2D } from '../src/MouvementEst2D'
import { MouvementNord2D } from '../src/MouvementNord2D'
import { MouvementNordOuest2D } from '../src/MouvementNordOuest2D'
import { MouvementOuest2D } from '../src/MouvementOuest2D'
import { MouvementSud2D } from '../src/MouvementSud2D'
import { Position } from '../src/Position'
import { Rover } from '../src/Rover'

describe('Rover', () => {
  it('Initialisation de l’atterissage', () => {
    // WHEN
    const nord = new Direction(new MouvementNord2D())
    const rover: ModuleMartien2D = new Rover(nord, new Position(4, 4, 0))

    // THEN
    expect(new Position(4, 4, 0)).toStrictEqual(rover.getPosition())
  })

  it('Doit avancer d’une case vers le nord si tourné vers le nord', () => {
    // GIVEN
    const nord = new Direction(new MouvementNord2D())
    const rover: ModuleMartien2D = new Rover(nord, new Position(4, 4, 0))

    // WHEN
    rover.avancer()

    // THEN
    expect(new Position(4, 5, 0)).toStrictEqual(rover.getPosition())
  })

  it('Doit avancer d’une case vers le sud si tourné vers le sud', () => {
    // GIVEN
    const sud = new Direction(new MouvementSud2D())
    const rover: ModuleMartien2D = new Rover(sud, new Position(4, 4, 0))

    // WHEN
    rover.avancer()

    // THEN
    expect(new Position(4, 3, 0)).toStrictEqual(rover.getPosition())
  })

  it('Doit avancer d’une case vers l’ouest si tourné vers l’ouest', () => {
    // GIVEN
    const ouest = new Direction(new MouvementOuest2D())
    const rover: ModuleMartien2D = new Rover(ouest, new Position(4, 4, 0))

    // WHEN
    rover.avancer()

    // THEN
    expect(new Position(3, 4, 0)).toStrictEqual(rover.getPosition())
  })

  it('Doit avancer d’une case vers l’est si tourné vers l’est', () => {
    // GIVEN
    const est = new Direction(new MouvementEst2D())
    const rover: ModuleMartien2D = new Rover(est, new Position(4, 4, 0))

    // WHEN
    rover.avancer()

    // THEN
    expect(new Position(5, 4, 0)).toStrictEqual(rover.getPosition())
  })

  it('Doit reculer d’une case vers le sud si tourné vers le nord', () => {
    // GIVEN
    const nord = new Direction(new MouvementNord2D())
    const rover: ModuleMartien2D = new Rover(nord, new Position(4, 4, 0))

    // WHEN
    rover.reculer()

    // THEN
    expect(new Position(4, 3, 0)).toStrictEqual(rover.getPosition())
  })

  it('Doit reculer d’une case vers le nord si tourné vers le sud', () => {
    // GIVEN
    const sud = new Direction(new MouvementSud2D())
    const rover: ModuleMartien2D = new Rover(sud, new Position(4, 4, 0))

    // WHEN
    rover.reculer()

    // THEN
    expect(new Position(4, 5, 0)).toStrictEqual(rover.getPosition())
  })

  it('Doit reculer d’une case vers l’est si tourné vers l’ouest', () => {
    // GIVEN
    const ouest = new Direction(new MouvementOuest2D())
    const rover: ModuleMartien2D = new Rover(ouest, new Position(4, 4, 0))

    // WHEN
    rover.reculer()

    // THEN
    expect(new Position(5, 4, 0)).toStrictEqual(rover.getPosition())
  })

  it('Doit reculer d’une case vers l’ouest si tourné vers l’est', () => {
    // GIVEN
    const est = new Direction(new MouvementEst2D())
    const rover: ModuleMartien2D = new Rover(est, new Position(4, 4, 0))

    // WHEN
    rover.reculer()

    // THEN
    expect(new Position(3, 4, 0)).toStrictEqual(rover.getPosition())
  })

  it('Doit avancer d’une case vers le nord ouest si tourné vers le nord ouest', () => {
    // GIVEN
    const nordOuest = new Direction(new MouvementNordOuest2D())
    const rover: ModuleMartien2D = new Rover(nordOuest, new Position(4, 4, 0))

    // WHEN
    rover.avancer()

    // THEN
    expect(new Position(3, 5, 0)).toStrictEqual(rover.getPosition())
  })

  it('Doit reculer d’une case vers le nord ouest si tourné vers le nord ouest', () => {
    // GIVEN
    const nordOuest = new Direction(new MouvementNordOuest2D())
    const rover: ModuleMartien2D = new Rover(nordOuest, new Position(4, 4, 0))

    // WHEN
    rover.reculer()

    // THEN
    expect(new Position(5, 3, 0)).toStrictEqual(rover.getPosition())
  })
})
