import React from "react";
import { useGetProducersQuery } from "../../store/apiSlice";
import {
  ProducerListContainer,
  ProducerCard,
  ProducerName,
  ProducerEmail,
  ProducerBio,
  SocialLinks,
} from "./ProducerStyled";

const Producer = () => {
  const { data, error, isLoading } = useGetProducersQuery(); // Correctly call the hook

  if (isLoading) {
    return <div>Loading producers...</div>;
  }

  if (error) {
    return <div>Error fetching producers.</div>;
  }

  if (!data || !data.data || data.data.length === 0) {
    return <div>No producers found.</div>;
  }

  return (
    <ProducerListContainer>
      {data.data.map((producer) => (
        <ProducerCard
          key={producer._id}
          bgImage={
            producer.profilePicture || "https://via.placeholder.com/300x400"
          }>
          <ProducerName>{producer.username}</ProducerName>
          <ProducerEmail>{producer.email}</ProducerEmail>
          <ProducerBio>
            {producer.bio || "No bio available for this producer."}
          </ProducerBio>
          <SocialLinks>
            {producer.socialLinks.map((link) => (
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                key={link._id}>
                {link.platform}
              </a>
            ))}
          </SocialLinks>
        </ProducerCard>
      ))}
    </ProducerListContainer>
  );
};

export default Producer;
