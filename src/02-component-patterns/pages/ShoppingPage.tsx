import { ProductCard } from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />
			<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
				<ProductCard
					initialValues={{ count: 3, maxCount: 10 }}
					product={product}
					className="bg-dark text-white"
				>
					{({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
						<>
							<ProductCard.Image className="custom-image" />
							<ProductCard.Title className="text-white" />
							<ProductCard.Buttons className="custom-buttons" />
							<button onClick={reset}>Reset</button>
							<button onClick={() => increaseBy(-2)}>-2</button>
							{!isMaxCountReached && (
								<button onClick={() => increaseBy(2)}>+2</button>
							)}
							<span>
								{count} - {maxCount}
							</span>
						</>
					)}
				</ProductCard>
			</div>
		</div>
	);
};
