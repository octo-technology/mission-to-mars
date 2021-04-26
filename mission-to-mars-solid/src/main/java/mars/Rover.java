package mars;

import lombok.Getter;

public class Rover implements ModuleMartien2D {

	private Direction direction;
	@Getter
	protected Position position;
	@Getter
	private boolean pretPourRecuperation = false;
	
	public Rover(Direction direction, Position position) {
		this.direction = direction;
		this.position = position;
	}

	public void avancer() {
		position = direction.getMouvement2D().avancer(position);
		//position = new DirectionHandlerFactory().apply(direction).avancer(position);
	}

	public void reculer() {
		position = direction.getMouvement2D().reculer(position);
		//position = new DirectionHandlerFactory().apply(direction).reculer(position);
	}

	public void activerRecuperation() {
		pretPourRecuperation = true;
	}

}