import { Direction } from './Direction'
import { Position } from './Position'

export abstract class Module {
  protected pretPourRecuperation = false;
  protected _position: Position;
  protected _direction: Direction;

  avancer() {
    this._position = this._direction.mouvement2D.avancer(this._position);
  }

  reculer() {
    this._position = this._direction.mouvement2D.reculer(this._position);
  }

  getPosition(): Position {
    return this._position;
  }

  isPretPourRecuperation(): boolean {
    return this.pretPourRecuperation;
  }

  activerRecuperation() {
    this.pretPourRecuperation = true;
  }
}
