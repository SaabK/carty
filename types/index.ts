import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent } from "react";

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
    className?: string;
}

export interface productsState {
    products: product[];
    status: "idle" | "loading" | "success" | "failed";
    error: string | null;
}

export interface loadingState {
    progress: number;
}

export interface Socials {
    name: string;
    icon: ForwardRefExoticComponent<LucideProps>;
    href: string;
}
