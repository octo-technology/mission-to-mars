import { Direction } from './Direction'
import { Module } from './Module'
import { ModuleMartien3D } from './ModuleMartien3D'
import { Position } from './Position'

export class Helicoptere extends Module implements ModuleMartien3D {
  constructor(readonly direction: Direction, readonly position: Position) {
    super();
    super._direction = direction;
    super._position = position;
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
