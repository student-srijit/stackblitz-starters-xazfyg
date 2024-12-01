import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    productImage: {
      type: String,
    },
    Price: {
      type: Number,
      detault: 0,
    },
    Stock: {
      default: 0,
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    Owner: {
      type: mongoose.Schema.Types.ObjectId
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema);
