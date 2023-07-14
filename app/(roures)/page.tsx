import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

import Container from "@/components/ui/conteiner";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";

export const revalidate = 0;

export const HomePage = async () => {
    const products = await getProducts({ isFeatured: true });
    const billboard = await getBillboard(
        "88c0499b-4df1-4749-b5ca-b241f24296cb"
    );

    return (
        <Container>
            <div className='space-y-10 pb-10'>
                <Billboard data={billboard} />

                <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
                    <ProductList
                        title='Featured Products'
                        items={products}
                    ></ProductList>
                </div>
            </div>
        </Container>
    );
};

export default HomePage;
