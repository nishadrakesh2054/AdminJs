import mongoose from 'mongoose';

const brandLogoSchema = new mongoose.Schema({
  brandName: {
    type: String,
    required: true,
  },
  logoImg: {
    type: String, 
    required: true,
  },
  brandLink: {
    type: String, // Link to the brand's website
    required: true,
  },
});

const BrandLogo = mongoose.model('BrandLogo', brandLogoSchema);

export default BrandLogo;
