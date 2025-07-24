const username = "testuser_" + Date.now();
const password = "1234";

describe("Vault App E2E", () => {
    it("Registers, logs in, adds, edits and deletes a secret", () => {
        cy.visit("http://localhost:5173/login");

        // Switch to register
        cy.contains("Need an account? Register").click();

        // Fill register form
        cy.get('input[placeholder="Choose a username"]').type(username);
        cy.get('input[placeholder="Choose a password"]').type(password);
        cy.get('button[type="submit"]').contains("Register").click();

        // Switch to login
        cy.contains("Already registered? Login").click();

        // Login
        cy.get('input[placeholder="Username"]').type(username);
        cy.get('input[placeholder="Password"]').type(password);
        cy.get('button[type="submit"]').contains("Login").click();

        // Wait for redirect
        cy.url().should("include", "/");

        // Add secret
        cy.get('input[placeholder="Secret title"]').type("Test Secret");
        cy.get('input[placeholder="Secret value"]').type("secret-value");
        cy.get("button").contains("Add").click();
        cy.contains("Test Secret").should("exist");

        // Edit secret
        cy.get("button").contains("Edit").click();
        cy.get('input[placeholder="Title"]').clear().type("Updated Title");
        cy.get('input[placeholder="Value"]').clear().type("updated-value");
        cy.get("button").contains("Save").click();
        cy.contains("Updated Title").should("exist");

        // Delete secret
        cy.contains("Delete").click();
        cy.contains("Updated Title").should("not.exist");
    });
});
