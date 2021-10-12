from src.mars.Direction import Direction
from src.mars.Mouvement2D import Mouvement2D
from src.mars.MouvementEst2D import MouvementEst2D
from src.mars.MouvementNord2D import MouvementNord2D
from src.mars.MouvementOuest2D import MouvementOuest2D
from src.mars.MouvementSud2D import MouvementSud2D


class DirectionHandlerFactory:
    def __init__(self):
        self.handlers = {
            Direction.NORD: MouvementNord2D(),
            Direction.SUD: MouvementSud2D(),
            Direction.EST: MouvementEst2D(),
            Direction.OUEST: MouvementOuest2D(),
        }

    def apply(self, direction: Direction) -> Mouvement2D:
        return self.handlers.get(direction)
