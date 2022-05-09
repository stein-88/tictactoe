import { PLAYERS } from '@constants/config'

const [play1, play2] = PLAYERS
const schemastartgame = {
	titulo: 'Tic Tac Toe',
	btntitle: 'Start Game',
	players: [
		{
			play: 'Player One: ',
			strong: play1,
		},
		{
			play: 'Player Two: ',
			strong: play2,
		},
	],
}

export default schemastartgame
