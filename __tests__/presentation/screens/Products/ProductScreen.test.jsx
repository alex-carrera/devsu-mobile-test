import React from "react";
import { render } from "react-dom";
import { ProductFormScreen } from "./ProductFormScreen";

describe('Product Screen', () => {

    // Renders the product information correctly.
    it('should render the product information correctly', () => {
        // Arrange
        const product = {
            id: 1,
            name: "Product 1",
            description: "This is a product",
            logo: "https://example.com/logo.png",
            data_release: new Date(),
            data_revision: new Date(),
        };

        // Act
        render(<ProductScreen product={product} />);

        // Assert
        expect(screen.getByText(`ID: ${product.id}`)).toBeInTheDocument();
        expect(screen.getByText("Nombre")).toBeInTheDocument();
        expect(screen.getByText(product.name)).toBeInTheDocument();
        expect(screen.getByText("Descripción")).toBeInTheDocument();
        expect(screen.getByText(product.description)).toBeInTheDocument();
        expect(screen.getByAltText("Product logo")).toHaveAttribute("src", product.logo);
        expect(screen.getByText("Fecha liberación")).toBeInTheDocument();
        expect(screen.getByText(product.data_release.toISOString().substring(0, 10))).toBeInTheDocument();
        expect(screen.getByText("Fecha revisión")).toBeInTheDocument();
        expect(screen.getByText(product.data_revision.toISOString().substring(0, 10))).toBeInTheDocument();
    });

    // The description text is truncated to three lines.
    it('should truncate the description text to three lines', () => {
        // Arrange
        const product = {
            id: 1,
            name: "Product 1",
            description: "This is a long description that should be truncated to three lines",
            logo: "https://example.com/logo.png",
            data_release: new Date(),
            data_revision: new Date(),
        };

        // Act
        render(<ProductScreen product={product} />);

        // Assert
        const descriptionText = screen.getByText(product.description);
        expect(descriptionText).toBeInTheDocument();
        expect(descriptionText).toHaveStyle({ maxHeight: "3em", overflow: "hidden" });
    });

})