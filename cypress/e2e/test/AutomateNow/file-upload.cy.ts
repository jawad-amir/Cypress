import { FileUpload } from "../../page/AutomateNow/file-upload.page";

const fileUpload = new FileUpload();

describe("Upload File", async () => {

    it("Cypress Test - Upload a File", async () => {
        fileUpload.navigateToSite()
        fileUpload.setInputFile()
        fileUpload.clickUploadFileButton()
    })
})