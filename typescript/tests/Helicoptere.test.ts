import { Direction } from '../src/Direction'
import { Helicoptere } from '../src/Helicoptere'
import { ModuleMartien3D } from '../src/ModuleMartien3D'
import { MouvementEst2D } from '../src/MouvementEst2D'
import { MouvementNord2D } from '../src/MouvementNord2D'
import { MouvementNordOuest2D } from '../src/MouvementNordOuest2D'
import { MouvementOuest2D } from '../src/MouvementOuest2D'
import { MouvementSud2D } from '../src/MouvementSud2D'
import { Position } from '../src/Position'

describe('Hélicoptère', () => {
  it('Initialisation de l’atterissage', () => {
    // WHEN
    const nord = new Direction(new MouvementNord2D());
    const helicoptere: ModuleMartien3D = new Helicoptere(nord, new Position(4, 4, 0));

    // THEN
    expect(new Position(4, 4, 0)).toStrictEqual(helicoptere.getPosition());
  })

  it('Doit avancer d’une case vers le nord si tourné vers le nord', () => {
    // GIVEN
    const nord = new Direction(new MouvementNord2D());
    const helicoptere: ModuleMartien3D = new Helicoptere(nord, new Position(4, 4, 1));

    // WHEN
    helicoptere.avancer();

    // THEN
    expect(new Position(4, 5, 1)).toStrictEqual(helicoptere.getPosition());
  })

  it('Doit avancer d’une case vers le sud si tourné vers le sud', () => {
    // GIVEN
    const sud = new Direction(new MouvementSud2D());
    const helicoptere: ModuleMartien3D = new Helicoptere(sud, new Position(4, 4, 1));

    // WHEN
    helicoptere.avancer();

    // THEN
    expect(new Position(4, 3, 1)).toStrictEqual(helicoptere.getPosition());
  })

  it('Doit avancer d’une case vers l’ouest si tourné vers l’ouest', () => {
    // GIVEN
    const ouest = new Direction(new MouvementOuest2D());
    const helicoptere: ModuleMartien3D = new Helicoptere(ouest, new Position(4, 4, 1));

    // WHEN
    helicoptere.avancer();

    // THEN
    expect(new Position(3, 4, 1)).toStrictEqual(helicoptere.getPosition());
  })

  it('Doit reculer d’une case vers le sud si tourné vers le nord', () => {
    // GIVEN
    const nord = new Direction(new MouvementNord2D());
    const helicoptere: ModuleMartien3D = new Helicoptere(nord, new Position(4, 4, 1));

    // WHEN
    helicoptere.reculer();

    // THEN
    expect(new Position(4, 3, 1)).toStrictEqual(helicoptere.getPosition());
  })

  it('Doit reculer d’une case vers le nord si tourné vers le sud', () => {
    // GIVEN
    const sud = new Direction(new MouvementSud2D());
    const helicoptere: ModuleMartien3D = new Helicoptere(sud, new Position(4, 4, 1));

    // WHEN
    helicoptere.reculer();

    // THEN
    expect(new Position(4, 5, 1)).toStrictEqual(helicoptere.getPosition());
  })

  it('Doit reculer d’une case vers l’est si tourné vers l’ouest', () => {
    // GIVEN
    const ouest = new Direction(new MouvementOuest2D());
    const helicoptere: ModuleMartien3D = new Helicoptere(ouest, new Position(4, 4, 1));

    // WHEN
    helicoptere.reculer();

    // THEN
    expect(new Position(5, 4, 1)).toStrictEqual(helicoptere.getPosition());
  })

  it('Doit reculer d’une case vers l’ouest si tourné vers l’est', () => {
    // GIVEN
    const est = new Direction(new MouvementEst2D());
    const helicoptere: ModuleMartien3D = new Helicoptere(est, new Position(4, 4, 1));

    // WHEN
    helicoptere.reculer();

    // THEN
    expect(new Position(3, 4, 1)).toStrictEqual(helicoptere.getPosition());
  })

  it('Doit avancer d’une case vers le nord ouest si tourné vers le nord ouest', () => {
    // GIVEN
    const nordOuest = new Direction(new MouvementNordOuest2D())
    const helicoptere: ModuleMartien3D = new Helicoptere(nordOuest, new Position(4, 4, 0))

    // WHEN
    helicoptere.avancer()

    // THEN
    expect(new Position(3, 5, 0)).toStrictEqual(helicoptere.getPosition())
  })

  it('Doit reculer d’une case vers le nord ouest si tourné vers le nord ouest', () => {
    // GIVEN
    const nordOuest = new Direction(new MouvementNordOuest2D())
    const helicoptere: ModuleMartien3D = new Helicoptere(nordOuest, new Position(4, 4, 0))

    // WHEN
    helicoptere.reculer()

    // THEN
    expect(new Position(5, 3, 0)).toStrictEqual(helicoptere.getPosition())
  })

  it('Doit monter d’une case vers le haut', () => {
    // GIVEN
    const nord = new Direction(new MouvementNord2D());
    const helicoptere: ModuleMartien3D = new Helicoptere(nord, new Position(4, 4, 0));

    // WHEN
    helicoptere.monter();

    // THEN
    expect(new Position(4, 4, 1)).toStrictEqual(helicoptere.getPosition());
  })

  it('Doit descendre d’une case vers le bas', () => {
    // GIVEN
    const sud = new Direction(new MouvementSud2D());
    const helicoptere: ModuleMartien3D = new Helicoptere(sud, new Position(4, 4, 3));

    // WHEN
    helicoptere.descendre();

    // THEN
    expect(new Position(4, 4, 2)).toStrictEqual(helicoptere.getPosition());
  })
})
