export class Product {
    public ProductID: number | undefined;
    public ProductName = '';
    public Discontinued? = false;
    public UnitsInStock?: number = 0;
    public UnitPrice = 0;
    public Category = {
        CategoryID: 0,
        CategoryName: ''
    };
}