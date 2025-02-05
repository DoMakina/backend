import { BrandService } from "../../services/index.js";
export default {
	getBrand: async (req, res) => {
		try {
			const brandId = req.params.id;
			const brand = await BrandService.getBrandById(brandId);
			if (!brand) {
				return res.status(404).json({ message: "Brand not found" });
			}
			return res.status(200).json(brand);
		} catch (error) {
			return res.status(500).json({ message: error.message });
		}
	},
	createBrand: async (req, res) => {
		try {
			const { name } = req.body;
			const iconUrl = req.iconUrl;
			if (!iconUrl) {
				return res.status(400).json({ message: "Icon is required" });
			}

			const newBrand = await BrandService.createBrand({
				name,
				iconUrl,
			});
			if (!newBrand) {
				return res
					.status(400)
					.json({ message: "Failed to create brand" });
			}
			return res.status(201).json(newBrand);
		} catch (error) {
			return res.status(500).json({ message: error.message });
		}
	},
	updateBrand: async (req, res) => {
		try {
			const brandId = req.params.id;
			const { name } = req.body;
			const iconUrl = req.iconUrl;

			const newBrand = await BrandService.updateBrand({
				brandId,
				name,
				iconUrl,
			});
			if (!newBrand) {
				return res.status(404).json({ message: "Brand not found" });
			}
			return res.status(200).json(newBrand);
		} catch (error) {
			return res.status(500).json({ message: error.message });
		}
	},
	deleteBrand: async (req, res) => {
		try {
			const brandId = req.params.id;
			const brand = await BrandService.deleteBrand(brandId);
			if (!brand) {
				return res.status(404).json({ message: "Brand not found" });
			}
			return res
				.status(200)
				.json({ message: "Brand deleted successfully" });
		} catch (error) {
			return res.status(500).json({ message: error.message });
		}
	},
	getAllBrands: async (req, res) => {
		try {
			const brands = await BrandService.getAllBrands();
			return res.status(200).json(brands);
		} catch (error) {
			return res.status(500).json({ message: error.message });
		}
	},
};
