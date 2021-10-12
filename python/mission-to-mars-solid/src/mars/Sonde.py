from src.mars.ModuleMartien2D import ModuleMartien2D


class Sonde:

    def preparer_recuperation(self, module_martien: ModuleMartien2D) -> None:
        module_martien.activer_recuperation()
