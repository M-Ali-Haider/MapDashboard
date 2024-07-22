import UploadProfileDocumentSVG from "@/assets/uploadProfile";
import BoxWrapper from "@/components/Wrappers/boxWrapper";
import { uploadDocuments } from "@/utils/uploadDocuments";

const UploadDocuments = () => {
  return (
    <>
      <BoxWrapper styles={"min-w-[300px]"}>
        <div className="flex flex-col gap-6 p-2">
          {uploadDocuments.map((item, index) => {
            return (
              <div key={index} className="flex items-center gap-4">
                <button>
                  <UploadProfileDocumentSVG />
                </button>
                <div className="text-[17px]">Upload Your {item}</div>
              </div>
            );
          })}
        </div>
      </BoxWrapper>
    </>
  );
};

export default UploadDocuments;
