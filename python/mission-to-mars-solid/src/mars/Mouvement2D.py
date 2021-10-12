import abc

from src.mars.Position import Position


class Mouvement2D(abc.ABC):

    @abc.abstractmethod
    def avancer(self, position: Position) -> Position:
        pass

    @abc.abstractmethod
    def reculer(self, position: Position) -> Position:
        pass
