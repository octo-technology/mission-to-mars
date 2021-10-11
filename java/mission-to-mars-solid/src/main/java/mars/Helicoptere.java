package mars;

public class Helicoptere extends Rover implements ModuleMartien3D {

	public Helicoptere(Direction direction, Position position) {
		super(direction, position);
	}

	@Override
	public void monter() {
		position = new Position(position.getX(), position.getX(), position.getZ() + 1);
	}

	@Override
	public void descendre() {
		position = new Position(position.getX(), position.getX(), position.getZ() - 1);
	}

}