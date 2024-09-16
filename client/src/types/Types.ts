
export enum AccountTypes {
    MANUFACTURER = 'Manufacturer',
    BRAND = 'Brand',
    DISTRIBUTOR = 'Distributor',
    VENDOR = 'Vendor'
}

type ImageAvatarProps = {
    type: 'image';
    imageUrl: string;
    altText?: string;
    user_Name?: string;
}

type TextAvatarProps = {
    type: 'text';
    text: string;
    user_Name?: string;
}

export type AvatarProps = (ImageAvatarProps | TextAvatarProps) & {
    bgColor?: string;
    width: number;
    height: number;
};

export type Product = {
    image_Url: string[];
    product_Name: string[];
    product_Price: number[];
    product_Details: string[];
    account_Type: AccountTypes;
    avatar?: AvatarProps
}

export type PostTypes = {
    product?: Product[];
    video?: {
        caption?: string[];
        url: string[];
        account_Type: AccountTypes,
        avatar?: AvatarProps,
        details?: string[];
    }[];
    normal_Image?: {
        caption?: string[];
        url: string[];
        details?: string[];
    }[];
    GIF?: {
        caption?: string[];
        url: string[];
        details?: string[];
    }[];
}