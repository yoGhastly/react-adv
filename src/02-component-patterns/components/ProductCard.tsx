import { createContext, ReactElement } from 'react';
import { useProduct, useProductArgs } from '../hooks/useProduct';
import {
	ProductContextProps,
	Product,
	onChangeArgs,
	InitialValues,
	ProductCardHandlers,
} from '../interfaces/';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';
import styles from '../styles/styles.module.css';

export interface Props {
	product: Product;
	//children?: ReactElement | ReactElement[];
	children: (args: ProductCardHandlers) => JSX.Element;
	className?: string;
	style?: React.CSSProperties;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
	initialValues?: InitialValues;
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
	initialValues,
}: Props) => {
	const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
		useProduct({
			product,
			onChange,
			value,
			initialValues,
		} as useProductArgs);

	return (
		<Provider value={{ counter, increaseBy, product, maxCount }}>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children({
					count: counter,
					isMaxCountReached,
					maxCount: initialValues?.maxCount,
					product,
					increaseBy,
					reset,
				})}
			</div>
		</Provider>
	);
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
