from src.mars.ModuleMartien3D import ModuleMartien3D
from src.mars.Helicoptere import Helicoptere
from src.mars.ModuleMartien2D import ModuleMartien2D


class Sonde:

    def preparer_recuperation(self, module_martien: ModuleMartien2D) -> None:
        if isinstance(module_martien, Helicoptere):
            self._poser_helicoptere(module_martien)
        module_martien.activer_recuperation()

    def _poser_helicoptere(self, module_martien: ModuleMartien3D) -> None:
        altitude = module_martien.get_position().z
        self._atterir(module_martien, altitude)

    def _atterir(self, module_martien: ModuleMartien3D, altitude: int) -> None:
        for i in range(altitude):
            module_martien.descendre()
