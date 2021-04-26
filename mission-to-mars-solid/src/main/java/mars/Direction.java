package mars;

import lombok.Getter;

public enum Direction {

	NORD(new MouvementNord2D()),
	SUD(new MouvementSud2D()),
	OUEST(new MouvementOuest2D()),
	EST(new MouvementEst2D());

	@Getter
	private final Mouvement2D mouvement2D;
	
	Direction(Mouvement2D mouvement2D) {
		this.mouvement2D = mouvement2D;
	}

}