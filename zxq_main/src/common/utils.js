
export function $(expr, con) {
	return typeof expr === "string"? (con || document).querySelector(expr) : expr || null;
}