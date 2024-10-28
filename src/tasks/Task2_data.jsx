const App = () => {
    const Task2_Data = [
      {
        imageUrl: "https://bit.ly/2Z4KKcF",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title: "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "$1,900.00",
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl: "https://bit.ly/2Z4KKcF",
        imageAlt: "Cozy apartment with great view",
        beds: 2,
        baths: 1,
        title: "Cozy apartment near the beach",
        formattedPrice: "$1,200.00",
        reviewCount: 20,
        rating: 5,
      },
    ];
  
    return (
      <Container maxW="container.xl" mx="auto">
        <Heading textAlign="center" my="10">
          Task 1
        </Heading>
        <LightMode>
          <Task1 property={Task2_Data[0]}></Task1>
        </LightMode>
        <Heading textAlign="center" my="10">
          Task 2
        </Heading>
        <LightMode>
          <Task2 properties={Task2_Data}></Task2>
        </LightMode>
        <Heading textAlign="center" my="10">
          Task 3
        </Heading>
        <Center>
          <Task3 title="Modal Title" body="This is the content of the modal." />
        </Center>
      </Container>
    );
  };
  