import { useEffect, useState } from "react"
import CardComp from "./components/CardComp"
import cards from "./data/cards.json"
import type { TCard, TCardList } from "./types/card.types"
import ModalComp from "./components/ModalComp"

const App = () => {
	const createGameCards = (): TCardList => {
		const pairs = cards.flatMap((card) => [
			{ ...card, id: card.id },
			{ ...card, id: card.id + 100 },
		])
		return pairs
	}

	// Shuffle cards
	const shuffleCards = (cards: TCardList): TCardList => {
		return cards.sort(() => Math.random() - 0.5)
	}

	const [gameCards, setGameCards] = useState<TCardList>(
		shuffleCards(createGameCards())

	)
	const [flippedCards, setFlippedCards] = useState<TCard["name"][]>([])

	const [moves, setMoves] = useState(0)

	const [matches, setMatches] = useState(0)

	const [gameOver, setGameOver] = useState(true)

	const handleCardClick = (clickedCard: TCard) => {
		if (clickedCard.matched) return
		if (flippedCards.length === 2) return

		setGameCards((prev) =>
			prev.map((card) =>
				card.id === clickedCard.id ? { ...card, flipped: !card.flipped } : card
			)
		)
		setFlippedCards((prev) => [...prev, clickedCard["name"]])
	}

	useEffect(() => {
		if (flippedCards.length === 2) {
			setMoves((prev) => prev + 1)
			const [firstCard, secondCard] = flippedCards
			if (firstCard === secondCard) {
				setMatches((prev) => prev + 1)
				setFlippedCards([]) 
				setGameCards((prev) =>
					prev.map((card) =>
						card.name === firstCard ? { ...card, matched: true } : card
					)
				)
			} else {
				setTimeout(() => {
					setGameCards((prev) =>
						prev.map((card) =>
							flippedCards.some((fc) => fc === card.name)
								? { ...card, flipped: false }
								: card
						)
					)
					setFlippedCards([]) 
				}, 1000)
			}
		}
		if (matches === gameCards.length / 2) {
			setGameOver(true)
		}
	}, [flippedCards])

	return (
		<div className="main_section">
			<h1>Memory Game</h1>
			<p>Moves: {moves}</p>
			<div className="card_container">
				{gameCards.map((card: TCard) => {
					return (
						<CardComp card={card} clickProp={handleCardClick} key={card.id} />
					)
				})}
			</div>
			<ModalComp showModal={gameOver} toggleModal={setGameOver} moves={moves} />
		</div>
	)
}

export default App