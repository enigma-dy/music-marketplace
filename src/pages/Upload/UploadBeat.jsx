import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  useCreateTrackMutation,
  useGetGenresListQuery,
  useCreateGenreMutation,
} from "../../store/apiSlice";

const UploadBeatPage = () => {
  const [createTrack, { isLoading: isUploading }] = useCreateTrackMutation();
  const {
    data: genresResponse,
    isLoading: isGenresLoading,
    refetch,
  } = useGetGenresListQuery();
  const [createGenre, { isLoading: isCreatingGenre }] =
    useCreateGenreMutation();

  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    description: "",
    price: "",
    previewUrl: "",
    tags: "",
    license: "non-exclusive", // Default to a valid license
    file: null,
    coverImage: null,
  });

  const [newGenre, setNewGenre] = useState("");

  const genres = genresResponse?.genres || [];

  useEffect(() => {
    refetch();
  }, [refetch]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleCreateGenre = async () => {
    if (!newGenre) return alert("Please enter a genre name");
    try {
      await createGenre({ name: newGenre }).unwrap();
      alert("Genre created successfully!");
      setNewGenre("");
      refetch();
    } catch (error) {
      alert("Failed to create genre: " + error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      await createTrack(data).unwrap();
      alert("Track uploaded successfully!");
    } catch (error) {
      alert("Failed to upload track: " + error.message);
    }
  };

  return (
    <PageContainer>
      <FormContainer>
        <Title>Upload Your Beat</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />

          <GenreWrapper>
            <Select
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              required
            >
              <option value="">Select Genre</option>
              {isGenresLoading ? (
                <option disabled>Loading genres...</option>
              ) : (
                genres.map((genre) => (
                  <option key={genre._id} value={genre._id}>
                    {genre.name}
                  </option>
                ))
              )}
            </Select>
            <CreateGenreWrapper>
              <Input
                type="text"
                placeholder="New Genre"
                value={newGenre}
                onChange={(e) => setNewGenre(e.target.value)}
              />
              <Button
                type="button"
                onClick={handleCreateGenre}
                disabled={isCreatingGenre}
              >
                {isCreatingGenre ? "Creating..." : "Create Genre"}
              </Button>
            </CreateGenreWrapper>
          </GenreWrapper>

          <TextArea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            required
          />
          <Input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            required
          />
          <Input
            type="text"
            name="previewUrl"
            value={formData.previewUrl}
            onChange={handleChange}
            placeholder="Preview URL"
          />
          <Input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="Tags (comma separated)"
          />

          {/* License Selection (Fix) */}
          <Select
            name="license"
            value={formData.license}
            onChange={handleChange}
            required
          >
            <option value="">Select License</option>
            <option value="exclusive">Exclusive</option>
            <option value="non-exclusive">Non-Exclusive</option>
          </Select>

          <FileInputWrapper>
            <Label>Upload Beat (Audio File)</Label>
            <FileInput
              type="file"
              name="file"
              onChange={handleChange}
              accept="audio/*"
              required
            />
          </FileInputWrapper>

          <FileInputWrapper>
            <Label>Upload Cover Image</Label>
            <FileInput
              type="file"
              name="coverImage"
              onChange={handleChange}
              accept="image/*"
              required
            />
          </FileInputWrapper>

          <SubmitButton type="submit" disabled={isUploading}>
            {isUploading ? "Uploading..." : "Upload Beat"}
          </SubmitButton>
        </Form>
      </FormContainer>
    </PageContainer>
  );
};

export default UploadBeatPage;

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #f7fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const FormContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 500px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #2d3748;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 1rem;
  color: #4a5568;

  &:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.2);
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 1rem;
  color: #4a5568;
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.2);
  }
`;

const FileInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: bold;
  color: #4a5568;
`;

const FileInput = styled.input`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 1rem;
  color: #4a5568;

  &:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.2);
  }
`;

const SubmitButton = styled.button`
  padding: 0.75rem;
  background-color: #3182ce;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2c5282;
  }

  &:disabled {
    background-color: #a0aec0;
    cursor: not-allowed;
  }
`;

const GenreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 1rem;
  color: #4a5568;

  &:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.2);
  }
`;

const CreateGenreWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #38a169;
  color: white;
  font-size: 0.875rem;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2f855a;
  }

  &:disabled {
    background-color: #a0aec0;
    cursor: not-allowed;
  }
`;
