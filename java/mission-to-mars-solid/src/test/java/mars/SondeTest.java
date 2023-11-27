package mars;

import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class SondeTest {

	@Test
	void roverDoitEtreRecupere() {
		// Arrange
		Sonde sut = new Sonde();
		ModuleMartien2D perseverance = new Rover(Direction.NORD, new Position(4, 4, 0));

		// Act
		sut.preparerRecuperation(perseverance);

		// Assert
		assertTrue(perseverance.isPretPourRecuperation());
		assertEquals(new Position(4, 4, 0), perseverance.getPosition());
	}

	@Test
	void helicoptereDoitEtreRecupere() {
		// Arrange
		Sonde sut = new Sonde();
		ModuleMartien3D ingenuity = new Helicoptere(Direction.NORD, new Position(4, 4, 50));

		// Act
		sut.preparerRecuperation(ingenuity);

		// Assert
		assertTrue(ingenuity.isPretPourRecuperation());
		assertEquals(new Position(4, 4, 0), ingenuity.getPosition());
	}
}
