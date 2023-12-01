import { Direction } from './Direction'
import { Module } from './Module'
import { ModuleMartien2D } from './ModuleMartien2D'
import { Position } from './Position'

export class Rover extends Module implements ModuleMartien2D {
  constructor(readonly direction: Direction, readonly position: Position) {
    super();
    super._direction = direction;
    super._position = position;
  }
}
