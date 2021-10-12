from src.mars.ModuleMartien3D import ModuleMartien3D
from src.mars.Helicoptere import Helicoptere
from src.mars.ModuleMartien2D import ModuleMartien2D


class Sonde:

    def preparer_recuperation(self, module_martien: ModuleMartien2D) -> None:
        module_martien.activer_recuperation()
