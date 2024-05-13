describe('Pruebas en Services', () => {
    it('should return the expected data when the API call is successful', async () => {
        // Arrange
        const expectedData = { id: 1, name: 'Product 1' };
        axios.get.mockResolvedValueOnce({ data: expectedData });
    
        // Act
        const productService = new ProductsService();
        const result = await productService.getProductos();
    
        // Assert
        expect(result).toEqual(expectedData);
        expect(axios.get).toHaveBeenCalledWith(process.env.BASE_URL, { headers: authHeader() });
      });
      it('should handle errors thrown by the axios library gracefully', async () => {
        // Arrange
        const errorMessage = 'Error fetching data';
        axios.get.mockRejectedValueOnce(new Error(errorMessage));
    
        // Act
        const productService = new ProductsService();
        const result = await productService.getProductos();
    
        // Assert
        expect(result).toBeUndefined();
        expect(axios.get).toHaveBeenCalledWith(process.env.BASE_URL, { headers: authHeader() });
      });

})



