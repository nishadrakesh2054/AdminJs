import BrandLogo from '../models/brandModel.js';

// Create a new brand logo
export const createBrandLogo = async (req, res) => {
  try {
    const { brandName,  brandLink } = req.body;
    // const logoImg=req.file.path;
    const newBrandLogo = new BrandLogo({ brandName,  logoImg: req.file.path, brandLink });
    const savedBrandLogo = await newBrandLogo.save();
    res.status(201).json({
        message: 'Brand logo created successfully',
        brandLogo: savedBrandLogo,
  
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating brand logo', error });
  }
};

// Get all brand logos
export const getBrandLogos = async (req, res) => {
  try {
    const brandLogos = await BrandLogo.find();
    res.status(200).json(brandLogos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching brand logos', error });
  }
};

// Update a brand logo
export const updateBrandLogo = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBrandLogo = await BrandLogo.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedBrandLogo);
  } catch (error) {
    res.status(500).json({ message: 'Error updating brand logo', error });
  }
};

// Delete a brand logo
export const deleteBrandLogo = async (req, res) => {
  const { id } = req.params;
  try {
    await BrandLogo.findByIdAndDelete(id);
    res.status(200).json({ message: 'Brand logo deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting brand logo', error });
  }
};
