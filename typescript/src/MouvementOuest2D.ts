import { Mouvement2D } from './Mouvement2D'
import { Position } from './Position'

export class MouvementOuest2D extends Mouvement2D {
  avancer(position: Position): Position {
    return new Position(position.x - 1, position.y, position.z);
  }

  reculer(position: Position): Position {
    return new Position(position.x + 1, position.y, position.z);
  }
}
