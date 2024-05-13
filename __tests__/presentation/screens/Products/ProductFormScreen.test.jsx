import React from "react";
import { render } from "react-dom";
import { ProductFormScreen } from "./ProductFormScreen";

describe('Product Form Screen', () => {

        // The form renders correctly with all input fields and buttons visible.
        it('should render the form with all input fields and buttons', () => {
      
            // Act
            render(<ProductFormScreen />, document.getElementById("root"));
      
            // Assert
            // Check if all input fields and buttons are rendered correctly
            expect(screen.getByText("ID")).toBeInTheDocument();
            expect(screen.getByText("Nombre")).toBeInTheDocument();
            expect(screen.getByText("Descripción")).toBeInTheDocument();
            expect(screen.getByText("Logo")).toBeInTheDocument();
            expect(screen.getByText("Fecha Liberación")).toBeInTheDocument();
            expect(screen.getByText("Fecha Revisión")).toBeInTheDocument();
            expect(screen.getByText("Enviar")).toBeInTheDocument();
            expect(screen.getByText("Reiniciar")).toBeInTheDocument();
          });

})