import enum

from src.mars.Mouvement2D import Mouvement2D
from src.mars.MouvementEst2D import MouvementEst2D
from src.mars.MouvementNord2D import MouvementNord2D
from src.mars.MouvementOuest2D import MouvementOuest2D
from src.mars.MouvementSud2D import MouvementSud2D


class Direction(enum.Enum):
    NORD = (MouvementNord2D())
    SUD = (MouvementSud2D())
    OUEST = (MouvementOuest2D())
    EST = (MouvementEst2D())

    def __init__(self, mouvement_2D: Mouvement2D):
        self.mouvement2D = mouvement_2D
