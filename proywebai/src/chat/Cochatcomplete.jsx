import Asidechat from "./asidechat.jsx";
import Chatarea from "./Chatarea.jsx";

export default function Cochatcomplete() {
  return (
    <>
        <div className="flex-grow container mx-auto px-4 py-8 flex flex-col md:flex-row">
            <Asidechat />
            <Chatarea />
        </div>
    </>
  )
}
