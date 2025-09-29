import CardComp from "./components/CardComp"
import cards from "./data/cards.json"
import type { TCard, TCardList } from "./types/card.types"
import { useState } from "react"


const App = () => {


	const createGameCards = (): TCardList => {
		const pairs = cards.flatMap((card) => [
			{ ...card, id: card.id },
			{ ...card, id: card.id + 100 },
		])
		return pairs
	}

	const suffleCards = (card: TCardList): TCardList => {
		return card.sort(() => Math.random() - 0.5)
	}

	const [gameCards, setGameCards] = useState<TCardList>(createGameCards())
	console.log(gameCards)

	const handleCardClick = (clickedCard: TCard) => {
		// Flip the card
		setGameCards((prev) =>
			prev.map((card) =>
				card.id === clickedCard.id ? { ...card, flipped: !card.flipped} : card
			)
		)
	}

	return (
		<div className="main_section">
			<h1>Memory Game</h1>
			<div className="card_container">
				{gameCards.map((card: TCard) => {
					return <CardComp card={card} clickProp={() => {}} key={card.id} />
				})}
			</div>
		</div>
	)
}

export default App
