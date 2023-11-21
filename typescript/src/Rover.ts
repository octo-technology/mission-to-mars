import { Direction } from './Direction'
import { ModuleMartien2D } from './ModuleMartien2D'
import { Position } from './Position'

export class Rover implements ModuleMartien2D {
  private pretPourRecuperation: boolean = false;
  private readonly _direction: Direction;
  protected _position: Position;

  constructor(readonly direction: Direction, readonly position: Position) {
    this._direction = direction;
    this._position = position;
  }

  avancer() {
    this._position = this._direction.mouvement2D.avancer(this._position);
  }

  reculer() {
    this._position = this._direction.mouvement2D.reculer(this._position);
  }

  activerRecuperation() {
    this.pretPourRecuperation = true;
  }

  getPosition(): Position {
    return this._position;
  }

  isPretPourRecuperation(): boolean {
    return this.pretPourRecuperation;
  }
}
