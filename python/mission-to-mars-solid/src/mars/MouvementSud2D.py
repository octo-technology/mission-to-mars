import abc

from src.mars.Mouvement2D import Mouvement2D
from src.mars.Position import Position


class MouvementSud2D(Mouvement2D):

    def avancer(self, position: Position) -> Position:
        return Position(position.x, position.y - 1, position.z)

    def reculer(self, position: Position) -> Position:
        return Position(position.x, position.y + 1, position.z)
