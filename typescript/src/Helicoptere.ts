import { Direction } from './Direction'
import { ModuleMartien3D } from './ModuleMartien3D'
import { Position } from './Position'
import { Rover } from './Rover'

export class Helicoptere extends Rover implements ModuleMartien3D {
  constructor(override readonly direction: Direction, override readonly position: Position) {
    super(direction, position);
  }

  monter() {
    super._position = new Position(this._position.x, this._position.y, this._position.z + 1);
  }

  descendre() {
    super._position = new Position(this._position.x, this._position.y, this._position.z - 1);
  }

  override activerRecuperation() {
    this.atterir();
    super.activerRecuperation();
  }

  private atterir() {
    [...Array(this.getPosition().z)]
      .forEach(() => { this.descendre(); });
  }
}
