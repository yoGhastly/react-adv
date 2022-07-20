import { useState } from 'react';
import { onChangeArgs, ProductInCart } from '../interfaces';

export const useShoppingCart = () => {
	const [shoppingCart, setShoppingCart] = useState<{
		[key: string]: ProductInCart;
	}>({});

	const onProductCountChange = ({ count, product }: onChangeArgs) => {
		console.log({ count });
		setShoppingCart((oldShoppingCart) => {
			if (count === 0) {
				const { [product.id]: toDelete, ...rest } = oldShoppingCart;
				return rest;
			}
			return {
				...oldShoppingCart,
				[product.id]: { ...product, count },
			};
		});
	};

	return {
		shoppingCart,
		onProductCountChange,
	};
};
