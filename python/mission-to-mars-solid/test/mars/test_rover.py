import pytest

from src.mars.Direction import Direction
from src.mars.ModuleMartien2D import ModuleMartien2D
from src.mars.Position import Position
from src.mars.Rover import Rover


class TestRover:
    sut: ModuleMartien2D

    def test_initialisation_atterissage(self):
        # Arrange
        sut = Rover(Direction.NORD, Position(4, 4, 0))

        # Assert
        assert Position(4, 4, 0) == sut.get_position()

    def test_doit_avancer_1_case_vers_nord_si_tourne_vers_le_nord(self):
        # Arrange
        sut = Rover(Direction.NORD, Position(4, 4, 0))

        # Act
        sut.avancer()

        # Assert
        assert Position(4, 5, 0) == sut.get_position()

    def test_doit_avancer_1_case_vers_sud_si_tourne_vers_le_sud(self):
        # Arrange
        sut = Rover(Direction.SUD, Position(4, 4, 0))

        # Act
        sut.avancer()

        # Assert
        assert Position(4, 3, 0) == sut.get_position()

    def test_doit_avancer_1_case_vers_ouest_si_tourne_vers_louest(self):
        # Arrange
        sut = Rover(Direction.OUEST, Position(4, 4, 0))

        # Act
        sut.avancer()

        # Assert
        assert Position(3, 4, 0) == sut.get_position()

    def test_doit_avancer_1_case_vers_est_si_tourne_vers_lest(self):
        # Arrange
        sut = Rover(Direction.EST, Position(4, 4, 0))

        # Act
        sut.avancer()

        # Assert
        assert Position(5, 4, 0) == sut.get_position()

    def test_doit_reculer_1_case_vers_sud_si_tourne_vers_le_nord(self):
        # Arrange
        sut = Rover(Direction.NORD, Position(4, 4, 0))

        # Act
        sut.reculer()

        # Assert
        assert Position(4, 3, 0) == sut.get_position()

    def test_doit_reculer_1_case_vers_nord_si_tourne_vers_le_sud(self):
        # Arrange
        sut = Rover(Direction.SUD, Position(4, 4, 0))

        # Act
        sut.reculer()

        # Assert
        assert Position(4, 5, 0) == sut.get_position()

    def test_doit_reculer_1_case_vers_est_si_tourne_vers_louest(self):
        # Arrange
        sut = Rover(Direction.OUEST, Position(4, 4, 0))

        # Act
        sut.reculer()

        # Assert
        assert Position(5, 4, 0) == sut.get_position()

    def test_doit_reculer_1_case_vers_ouest_si_tourne_vers_lest(self):
        # Arrange
        sut = Rover(Direction.EST, Position(4, 4, 0))

        # Act
        sut.reculer()

        # Assert
        assert Position(3, 4, 0) == sut.get_position()
