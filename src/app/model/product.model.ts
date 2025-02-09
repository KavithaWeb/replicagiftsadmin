export class Product {
    _id?: string;
    title!: string;
    description!: string;
    price!: number;
    discount!: number;
    userImage!: boolean;
    image!: string;
    category!: any;
    additionalInfo!: [{
        title: '',
        description: ''
    }];

    availablePrintSize!: [{
        _id?: any,
        width: 0,
        height: 1,
        // price?: number
    }];

    totalrating?: number;

    availablePrintType!: any[];
    amount?: number;
    frame?: string | File;
    // reviews?:/ [{ rating: number, user: any, comment: string }]
}