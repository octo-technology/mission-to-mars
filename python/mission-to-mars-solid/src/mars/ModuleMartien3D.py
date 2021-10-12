import abc

from src.mars.ModuleMartien2D import ModuleMartien2D
from src.mars.Position import Position


class ModuleMartien3D(ModuleMartien2D):

    @abc.abstractmethod
    def monter(self) -> None:
        pass

    @abc.abstractmethod
    def descendre(self) -> None:
        pass
