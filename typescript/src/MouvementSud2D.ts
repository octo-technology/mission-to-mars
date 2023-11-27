import { Mouvement2D } from './Mouvement2D'
import { Position } from './Position'

export class MouvementSud2D extends Mouvement2D {
  avancer(position: Position): Position {
    return new Position(position.x, position.y - 1, position.z);
  }

  reculer(position: Position): Position {
    return new Position(position.x, position.y + 1, position.z);
  }
}
