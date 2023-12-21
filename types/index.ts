export interface product {
    id: number;
    title: string;
    description: string;
    images: string[];
    thumbnail: string;
    price: number;
    rating: number;
    brand: string;
    category: string;
}

export interface InfiniteScrollProps {
    getProducts: () => Promise<any>;
}

export interface LoadingProps {
    loading: boolean;
}

export interface ProductPageProps {
    params: {
        id: string;
    };
}

export interface ImagesProps {
    images: string[];
}

export interface HeadingProps {
    text: string;
}
