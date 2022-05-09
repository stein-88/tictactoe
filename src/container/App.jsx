import React from 'react'
import {
	BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom'
import TicTacToe from '@components/TicTacToe'
import Footer from '@components/Footer'

const App = () => (
	<BrowserRouter>
		<Routes>
			<Route element={<TicTacToe />} path="/" />
			<Route element={<TicTacToe />} path="/tictactoe" />
			<Route element={<Navigate replace to="/" />} path="*" />
		</Routes>
		<Footer />
	</BrowserRouter>
)

export default App
