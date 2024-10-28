import { Box, Image, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

function Task1(props) {
  const { property } = props;

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      marginX="auto"
      bgColor="blue.800"
      color="white"
    >
      <Image src={property.imageUrl} alt={property.imageAlt} />

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

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as="span" color="gray.300" fontSize="sm">
            / wk
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? "teal.300" : "gray.300"} 
              />
            ))}
          <Box as="span" ml="2" color="gray.300" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Task1;
