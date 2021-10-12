import abc

from src.mars.Direction import Direction
from src.mars.Position import Position


class ModuleMartien2D(abc.ABC):
    def __init__(self, direction: Direction, position: Position) -> None:
        self._direction: Direction = direction
        self.position: Position = position
        self._pret_pour_recuperation: bool = False

    def get_position(self) -> Position:
        return self.position

    def is_pret_pour_recuperation(self) -> bool:
        return self._pret_pour_recuperation

    def avancer(self) -> None:
        self.position = self._direction.mouvement2D.avancer(self.position)
        # self.position = DirectionHandlerFactory().apply(self._direction).avancer(self.position)

    def reculer(self) -> None:
        self.position = self._direction.mouvement2D.reculer(self.position)
        # self.position = DirectionHandlerFactory().apply(self._direction).reculer(self.position)

    @abc.abstractmethod
    def activer_recuperation(self) -> None:
        pass
