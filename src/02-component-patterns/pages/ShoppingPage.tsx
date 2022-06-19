import {
	ProductButtons,
	ProductCard,
	ProductImage,
	ProductTitle,
} from '../components';
import '../styles/custom-styles.css';

const product = {
	id: '1',
	title: 'Coffe Mug - Card',
	img: './coffee-mug.png',
};

export const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />
			<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
				<ProductCard product={product} className="bg-dark text-white">
					<ProductCard.Image className="custom-image" />
					<ProductCard.Title title={'Hola xd'} className="text-white" />
					<ProductCard.Buttons className="custom-buttons" />
				</ProductCard>

				<ProductCard product={product} className="bg-dark">
					<ProductImage className="custom-image" />
					<ProductTitle title={''} className="text-white" />
					<ProductButtons className="custom-buttons" />
				</ProductCard>

				<ProductCard
					product={product}
					style={{
						backgroundColor: '#f1f1f1',
					}}
				>
					<ProductImage
						style={{
							borderRadius: '20px',
							padding: '10px',
							width: 'calc(100% - 20px)',
						}}
					/>
					<ProductTitle style={{ fontWeight: 'bold' }} />
					<ProductButtons style={{ display: 'flex', justifyContent: 'end' }} />
				</ProductCard>
			</div>
		</div>
	);
};
