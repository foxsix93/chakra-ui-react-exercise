import { useState } from "react";
import {
  Box,
  Image,
  Badge,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Button,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

function Task1(props) {
  const { property } = props;

  return (
    <Box
      marginX="auto"
      bgColor="blue.800"
      color="white"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      data-testid="box"
    >
      <Image src={property.imageUrl} alt={property.imageAlt} data-testid="image" />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.300"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon key={i} color={i < property.rating ? "teal.500" : "gray.300"} />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Task2(props) {
  const { properties } = props;

  return (
    <SimpleGrid columns={[1, 2, 4]} gap={14} data-testid="simple-grid">
      {properties.map((property, index) => (
        <Task1 key={index} property={property} />
      ))}
    </SimpleGrid>
  );
}

function Task3(props) {
  const { body, title } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} data-testid="open-modal-button">Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose} data-testid="modal">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader data-testid="modal-header">{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody data-testid="modal-body">{body}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose} data-testid="close-modal-button">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function Task1_1(props) {
  return <div>{props.name}</div>;
}

function Task1_2() {
  const [name, setName] = useState("Ganti namaku");

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => setName("Imam Assidiqqi")}>Change Name</button>
    </div>
  );
}

export { Task1, Task1_1, Task1_2, Task2, Task3 };
