from src.mars.Mouvement2D import Mouvement2D
from src.mars.Position import Position


class MouvementOuest2D(Mouvement2D):

    def avancer(self, position: Position) -> Position:
        return Position(position.x - 1, position.y, position.z)

    def reculer(self, position: Position) -> Position:
        return Position(position.x + 1, position.y, position.z)
