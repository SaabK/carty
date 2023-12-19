export interface product {
    id: number;
    title: string;
    description: string;
    images: string[];
    thumbnail: string;
    price: number;
    rating: number;
}

export interface InfiniteScrollProps {
    getProducts: () => Promise<any>;
}

export interface LoadingProps {
    loading: boolean;
}
