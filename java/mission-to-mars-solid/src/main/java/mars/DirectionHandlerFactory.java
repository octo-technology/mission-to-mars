package mars;

import java.util.EnumMap;
import java.util.function.Function;

public class DirectionHandlerFactory implements Function<Direction, Mouvement2D> {

	private final EnumMap<Direction, Mouvement2D> handlers = new EnumMap<>(Direction.class);

	public DirectionHandlerFactory() {
		handlers.put(Direction.NORD, new MouvementNord2D());
		handlers.put(Direction.SUD, new MouvementSud2D());
		handlers.put(Direction.OUEST, new MouvementOuest2D());
		handlers.put(Direction.EST, new MouvementEst2D());
	}

	@Override
	public Mouvement2D apply(Direction direction) {
		return handlers.get(direction);
	}

}