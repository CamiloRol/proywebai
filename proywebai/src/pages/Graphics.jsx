import Graphicscomp from "../components/Graphicscomp";
import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";
import FileUploader from "../components/Fileuploader";

export default function Graphics() {
  return (
    <>
      <Navbar />
      <FileUploader />
      <Graphicscomp />
      <Footer />
    </>
  )
}
