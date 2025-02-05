import { validationResult } from "express-validator";
export { default as AuthValidator } from "./auth.validator.js";
export { default as PromotionPriceValidator } from "./promotion-price.validator.js";
export { default as CarValidator } from "./car.validator.js";
export { default as PromotionValidator } from "./promotion.validator.js";
export { default as BrandValidator } from "./brand.validator.js";
export const throwValidationErrors = (req, res, next) => {
	try {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		}

		next();
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
