import React, { useState } from "react";
import styled from "styled-components";
import { useUploadPacksMutation } from "../../store/apiSlice";

// Styled Components
const UploadPackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #1e1e2f, #3a3a5e);
  color: white;
  font-family: "Poppins", sans-serif;
  padding: 20px;
`;

const Form = styled.form`
  background: rgba(0, 0, 0, 0.5);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 16px;
  outline: none;
  width: 100%;
  transition: background 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const Button = styled.button`
  padding: 12px;
  background-color: #ff9800;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #e68900;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const RemoveButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  padding: 8px 12px;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #cc0000;
  }
`;

const ContentField = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const FileInputLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const ErrorText = styled.p`
  color: #ff4d4d;
  font-size: 14px;
  margin: 0;
`;
const Typography = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: bold;
  text-align: center;
  color: white;
`;

const UploadPack = () => {
  const [uploadPacks, { isLoading }] = useUploadPacksMutation();
  const [errors, setErrors] = useState({});
  const [packData, setPackData] = useState({
    title: "",
    description: "",
    price: "",
    discount: "",
    tags: "",
    license: "",
    file: null,
    coverImage: null,
    contents: [{ type: "", name: "" }],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setPackData({
      ...packData,
      [name]: files ? files[0] : value,
    });
  };

  const handleContentChange = (index, field, value) => {
    const newContents = [...packData.contents];
    newContents[index][field] = value;
    setPackData({ ...packData, contents: newContents });
  };

  const addContentField = () => {
    setPackData({
      ...packData,
      contents: [...packData.contents, { type: "", name: "" }],
    });
  };

  const removeContentField = (index) => {
    const newContents = packData.contents.filter((_, i) => i !== index);
    setPackData({ ...packData, contents: newContents });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let validationErrors = {};
    if (!packData.title) validationErrors.title = "Title is required";
    if (!packData.price) validationErrors.price = "Price is required";
    if (!packData.file) validationErrors.file = "File is required";
    if (!packData.coverImage)
      validationErrors.coverImage = "Cover Image is required";
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    const formData = new FormData();
    formData.append("title", packData.title);
    formData.append("description", packData.description);
    formData.append("price", packData.price);
    formData.append("discount", packData.discount);
    formData.append("tags", packData.tags);
    formData.append("license", packData.license);
    formData.append("file", packData.file);
    formData.append("pack-cover", packData.coverImage);
    formData.append("contents", JSON.stringify(packData.contents));

    try {
      await uploadPacks(formData).unwrap();
      alert("Pack uploaded successfully!");
      setPackData({
        title: "",
        description: "",
        price: "",
        discount: "",
        tags: "",
        license: "",
        file: null,
        coverImage: null,
        contents: [{ type: "", name: "" }],
      });
    } catch (error) {
      alert("Failed to upload pack.");
    }
  };

  return (
    <UploadPackContainer>
      <Typography
        variant="h1"
        style={{ fontSize: "2.5rem", marginBottom: "20px" }}
      >
        Upload Your Pack
      </Typography>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="title"
          placeholder="Pack Title"
          value={packData.title}
          onChange={handleChange}
          required
        />
        {errors.title && <ErrorText>{errors.title}</ErrorText>}

        <Input
          type="text"
          name="description"
          placeholder="Description"
          value={packData.description}
          onChange={handleChange}
          required
        />

        <Input
          type="number"
          name="price"
          placeholder="Price ($)"
          value={packData.price}
          onChange={handleChange}
          required
        />
        {errors.price && <ErrorText>{errors.price}</ErrorText>}

        <Input
          type="number"
          name="discount"
          placeholder="Discount (%)"
          value={packData.discount}
          onChange={handleChange}
        />

        <Input
          type="text"
          name="tags"
          placeholder="Tags (comma-separated)"
          value={packData.tags}
          onChange={handleChange}
        />

        <Input
          type="text"
          name="license"
          placeholder="License"
          value={packData.license}
          onChange={handleChange}
          required
        />

        <Typography
          variant="h3"
          style={{ fontSize: "1.5rem", marginBottom: "10px" }}
        >
          Pack Contents
        </Typography>
        {packData.contents.map((content, index) => (
          <ContentField key={index}>
            <Input
              type="text"
              placeholder="Type"
              value={content.type}
              onChange={(e) =>
                handleContentChange(index, "type", e.target.value)
              }
              required
            />
            <Input
              type="text"
              placeholder="Name"
              value={content.name}
              onChange={(e) =>
                handleContentChange(index, "name", e.target.value)
              }
              required
            />
            {packData.contents.length > 1 && (
              <RemoveButton
                type="button"
                onClick={() => removeContentField(index)}
              >
                Remove
              </RemoveButton>
            )}
          </ContentField>
        ))}
        <Button type="button" onClick={addContentField}>
          + Add More
        </Button>

        <FileInputLabel>
          Select File
          <Input
            type="file"
            name="file"
            style={{ display: "none" }}
            onChange={handleChange}
            required
          />
        </FileInputLabel>
        {errors.file && <ErrorText>{errors.file}</ErrorText>}

        <FileInputLabel>
          Select Cover Image
          <Input
            type="file"
            name="coverImage"
            style={{ display: "none" }}
            onChange={handleChange}
            required
          />
        </FileInputLabel>
        {errors.coverImage && <ErrorText>{errors.coverImage}</ErrorText>}

        <Button type="submit" disabled={isLoading}>
          {isLoading ? <CircularProgress size={24} /> : "Upload Pack"}
        </Button>
      </Form>
    </UploadPackContainer>
  );
};

export default UploadPack;
