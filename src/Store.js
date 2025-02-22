import { create } from "zustand";

export const GAME_STATES = {
	START: "start",
	HATCHING: "hatching",
	IDLE: "idle",
	EATING: "eating",
	GROWING: "growing",
	SLEEPING: "sleeping",
};

export const useStore = create((set) => ({
	currentState: GAME_STATES.START,

	// Scores
	scoreTotal: 0,
	foodScores: {
		candy: 0,
		tofu: 0,
		pizza: 0,
	},
	// Actions
	setState: (newState) => set(() => ({ currentState: newState })),
	feedFood: (foodType) =>
		set((state) => ({
			scoreTotal: state.scoreTotal + 1,
			foodScores: {
				...state.foodScores,
				[foodType]: state.foodScores[foodType] + 1,
			},
		})),
	reset: () =>
		set({
			currentState: GAME_STATES.START,
			scoreTotal: 0,
			foodScores: { candy: 0, tofu: 0, pizza: 0 },
		}),
}));
