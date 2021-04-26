package mars;

import java.util.stream.IntStream;

public class Sonde {

	public void preparerRecuperation(ModuleMartien2D moduleMartien) {
		if (moduleMartien instanceof Helicoptere) {
			poserModule((Helicoptere) moduleMartien);
		}
		moduleMartien.activerRecuperation();
	}

	private void poserModule(ModuleMartien3D moduleMartien) {
		int altitude = moduleMartien.getPosition().getZ();
		atterir(moduleMartien, altitude);
	}

	private void atterir(ModuleMartien3D moduleMartien, int altitude) {
		IntStream.range(0, altitude)
			.forEach((i -> moduleMartien.descendre()));
	}

}