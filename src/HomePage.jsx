import ProductCard from "./ProductCard"

export default function HomePage() {
    return <div>
        <header className="bg-primary text-white text-center py-5">
            <div className="container">
                <h1 className="display-4">Welcome to E-Shop</h1>
                <p className="lead">Discover amazing products at unbeatable prices!</p>
                <a href="#" className="btn btn-light btn-lg">Shop Now</a>
            </div>
        </header>

        <main className="container my-5">
            <h2 className="text-center mb-4">Featured Products</h2>
            <div className="row">
                <div className="col-md-3 mb-4">
                    <ProductCard
                        name="ACME Screwdriver"
                        price={19.99}
                        imageUrl="https://picsum.photos/id/15/300/200"
                    />
                </div>
                <div className="col-md-3 mb-4">
                    <ProductCard
                        name="ACME Anvil"
                        price={199.99}
                        imageUrl="https://picsum.photos/id/16/300/200"

                    />
                </div>
                <div className="col-md-3 mb-4">
                    <ProductCard
                        name="ACME Rocket"
                        price={9999.99}
                        imageUrl="https://picsum.photos/id/17/300/200"
                    />
                </div>
                <div className="col-md-3 mb-4">
                    <ProductCard
                        name="ACME Spaceship"
                        price={19999.99}
                        imageUrl="https://picsum.photos/id/18/300/200"

                    />
                </div>
            </div>
        </main>

    </div>
}