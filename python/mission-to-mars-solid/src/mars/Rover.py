from src.mars.Direction import Direction
from src.mars.DirectionHandlerFactory import DirectionHandlerFactory
from src.mars.ModuleMartien2D import ModuleMartien2D
from src.mars.Position import Position


class Rover(ModuleMartien2D):
    def __init__(self, direction: Direction, position: Position):
        self._direction: Direction = direction
        self.position: Position = position
        self._pret_pour_recuperation: bool = False

    def get_position(self) -> Position:
        return self.position

    def is_pret_pour_recuperation(self) -> bool:
        return self._pret_pour_recuperation

    def avancer(self) -> None:
        self.position = self._direction.value.avancer(self.position)
        # self.position = DirectionHandlerFactory().apply(self._direction).avancer(self.position)

    def reculer(self) -> None:
        self.position = self._direction.value.reculer(self.position)
        # self.position = DirectionHandlerFactory().apply(self._direction).reculer(self.position)

    def activer_recuperation(self) -> None:
        self._pret_pour_recuperation = True
