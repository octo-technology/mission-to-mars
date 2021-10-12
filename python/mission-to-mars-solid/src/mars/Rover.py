from src.mars.Direction import Direction
from src.mars.ModuleMartien2D import ModuleMartien2D
from src.mars.Position import Position


class Rover(ModuleMartien2D):
    def __init__(self, direction: Direction, position: Position):
        super().__init__(direction, position)

    def activer_recuperation(self) -> None:
        self._pret_pour_recuperation = True
