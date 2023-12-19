import '@mantine/dropzone/styles.css';
import { Group, Text, rem } from '@mantine/core';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import Icon from './ui-assets/Icon';

export function UploadFile(props: Partial<DropzoneProps>) {
  return (
    <Dropzone
      onDrop={(files) => console.log('accepted files', files)}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={5 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      {...props}
    >
      <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
        <Dropzone.Accept>
            <Icon name='document-upload' size={52}  color={'var(--mantine-color-blue-6)'}/>
        
        </Dropzone.Accept>
        <Dropzone.Reject>
        <Icon name='Close' size={52}  color={'var(--mantine-color-red-6)'}/>
        
       
        </Dropzone.Reject>
        <Dropzone.Idle>
        <Icon name='image' size={50}  color={'var(--mantine-color-dimmed)'}/>
        
        
        </Dropzone.Idle>

        <div>
          <Text size="xl" inline>
            Drag images here or click to select files
          </Text>
          <Text size="sm" c="dimmed" inline mt={7}>
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </div>
      </Group>
    </Dropzone>
  );
}