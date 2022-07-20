import { createContext, ReactElement } from 'react';
import { useProduct, useProductArgs } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';
import styles from '../styles/styles.module.css';

export interface Props {
	product: Product;
	children?: ReactElement | ReactElement[];
	className?: string;
	style?: React.CSSProperties;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
	product,
	children,
	className,
	style,
	onChange,
	value,
}: Props) => {
	const { counter, increaseBy } = useProduct({
		product,
		onChange,
		value,
	} as useProductArgs);

	return (
		<Provider value={{ counter, increaseBy, product }}>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children}
			</div>
		</Provider>
	);
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
