import React from "react";
import { useGetPacksQuery } from "../../store/apiSlice";
import {
  Container,
  PackCard,
  Title,
  Description,
  Detail,
  Tag,
  PackCardFooter,
  Price,
  Button,
  ErrorMessage,
  Loader,
} from "./PackStyled";

const Packs = () => {
  const { data, error, isLoading } = useGetPacksQuery();
  console.log(data)

  if (isLoading) {
    return <Loader>Loading packs...</Loader>;
  }

  if (error) {
    return (
      <ErrorMessage>
        Error: {error.message || "Something went wrong!"}
      </ErrorMessage>
    );
  }

  if (!data || !Array.isArray(data.packs) || data.packs.length === 0) {
    return <ErrorMessage>No packs available at the moment.</ErrorMessage>;
  }

  return (
    <Container>
      {data.packs.map((pack) => (
        <PackCard key={pack._id} $backgroundImage={pack.coverImage}>
          <Title>{pack.title}</Title>
          <Description>{pack.description}</Description>
          <Detail>Price: ${pack.price}</Detail>
          <Detail>Discount: {pack.discount}%</Detail>
          <Detail>License: {pack.license}</Detail>
          <Detail>Downloads: {pack.downloadCount}</Detail>
          <div>
            {pack.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </div>
          <PackCardFooter>
            <Price>
              ${(pack.price - (pack.discount / 100) * pack.price).toFixed(2)}
            </Price>
            <Button>Download</Button>
          </PackCardFooter>
        </PackCard>
      ))}
    </Container>
  );
};

export default Packs;
