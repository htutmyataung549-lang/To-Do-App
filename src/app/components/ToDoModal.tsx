import { View, Text } from "react-native";
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@/components/ui/modal";

import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ToDoModal({ open, onClose }: Props) {
  return (
    <View>
      <Modal isOpen={open} onClose={onClose}>
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Text size="lg" className="font-bold">
              Add Todo
            </Text>
          </ModalHeader>
          <ModalBody>
            <Input>
              <InputField placeholder="Todo title..." />
            </Input>
            <Input className="mt-4">
              <InputField placeholder="Todo description..." />
            </Input>
          </ModalBody>
          <ModalFooter>
            <Button variant={"outline"} onPress={onClose}>
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button>
              <ButtonText>Save</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </View>
  );
}
