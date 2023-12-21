import "@mantine/dropzone/styles.css";
import { Group, Text, rem } from "@mantine/core";
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import Icon from "./ui-assets/Icon";
import Image from "next/image";

export function UploadFile({
  handleUpload,
  fileUrls,
}: {
  handleUpload: any;
  fileUrls: File[];
}) {
  return (
    <Dropzone
      onDrop={(files) => {
        handleUpload(files);
        console.log("accepted files", files);
      }}
      onReject={(files) => console.log("rejected files", files)}
      maxSize={5 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      multiple
      radius={24}
      classNames={{ root: "!bg-[#FDEED9]" }}
    >
      <Group
        justify="center"
        gap="xl"
        mih={220}
        style={{ pointerEvents: "none" }}
      >
        {fileUrls.length ? (
          fileUrls.map((img, index) => (
            <div key={img?.name + index} className="relative w-20 h-20 ">
              <Image
                src={
                  img.type == "image/png" ||
                  img.type == "image/JPEG" ||
                  img.type == "image/jpg" ||
                  img.type == "image/jpeg" ||
                  img.type == "image/*"
                    ? URL.createObjectURL(img)
                    : "/default_upload_img.jpg"
                }
                fill
                alt={img?.name}
                className="object-contain object-center rounded-xl"
              />{" "}
            </div>
          ))
        ) : (
          <Icon
            name="document-upload"
            size={50}
            color={"var(--mantine-color-dimmed)"}
          />
        )}
      </Group>
    </Dropzone>
  );
}
