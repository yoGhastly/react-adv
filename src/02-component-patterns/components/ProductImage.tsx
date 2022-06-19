import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface Props {
	img?: string;
	className?: string;
	style?: React.CSSProperties;
}
export const ProductImage = ({ img, className, style }: Props) => {
	const { product } = useContext(ProductContext);
	let imgToShow = img || product.img || noImage;

	return (
		<img
			className={`${styles.productImg} ${className}`}
			style={style}
			src={imgToShow}
			alt="Product"
		/>
	);
};
