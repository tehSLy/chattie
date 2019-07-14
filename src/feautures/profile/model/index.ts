import { createStore } from "effector";
import { User } from "~/types/User";

export const $currentUser = createStore<User>({
	id: "0", name: "Developer"
});
