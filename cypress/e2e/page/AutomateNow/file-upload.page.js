export class FileUpload {

    element = {
        fileUploadInput: () => cy.get('#file-upload'),
        uploadButton: () => cy.get('#upload-btn')
    }

    navigateToSite() {
        cy.visit('https://practice-automation.com/file-upload/')
    }

    setInputFile() {
        this.element.fileUploadInput().selectFile('cypress/e2e/assets/test.jpeg')
    }

    clickUploadFileButton() {
        this.element.uploadButton().click()
    }
}