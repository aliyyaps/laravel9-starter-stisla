/// <reference types="cypress" />
import "cypress-file-upload";

describe("nama fitur", () => {

    it("nama aksi", () => {
        // visit
        cy.visit("/admin/admin");

        // do something

        // assert
        cy.get(".fw-bold").contains("Admin / Daftar");
        cy.get(".add-new").should("have.text", "Tambah Admin");
        cy.get("tbody > :nth-child(1) > :nth-child(5)").should(
            "have.text",
            "Super Admin"
        );
        cy.get("#offcanvasAddUser").should("have.css", "visibility", "hidden");
    });
});