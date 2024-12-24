import React, { useState, useEffect } from "react";
import { TreeContainer, StyledTree } from "./MultiSelectFilterStyled";
import { useGetGenresQuery } from "../../store/apiSlice";
import { useLocation, useNavigate } from "react-router";

export default function TreeWithCheckboxDemo() {
  const { data, error, isLoading } = useGetGenresQuery();
  const [treeData, setTreeData] = useState([]);
  const [selectedNodes, setSelectedNodes] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const getQueryParams = () => {
    const urlParams = new URLSearchParams(location.search);
    return urlParams.getAll("genre");
  };

  useEffect(() => {
    if (data && data.genres) {
      const genresTree = [
        {
          key: "0",
          label: "Genre",
          selectable: false,
          children: data.genres.map((genre) => ({
            key: genre._id,
            label: genre.name.charAt(0).toUpperCase() + genre.name.slice(1),
            checked: getQueryParams().includes(genre._id),
          })),
        },
      ];
      setTreeData(genresTree);
    }
  }, [data, location.search]);

  const handleSelectionChange = (e) => {
    const selectedGenres = e.value;
    setSelectedNodes(selectedGenres);

    const selectedGenreIds = Object.keys(selectedGenres).filter(
      (key) => selectedGenres[key]
    );

    // Modify the query parameters to reflect the selected genres
    const newQueryParams = new URLSearchParams();
    selectedGenreIds.forEach((genreId) =>
      newQueryParams.append("genre", genreId)
    );

    // Check if we're already on the genre page
    if (location.pathname !== "/genre") {
      // Navigate to genre page first and then update query parameters
      navigate({
        pathname: "/genre",
        search: `?${newQueryParams.toString()}`,
      });
    } else {
      // If we're already on the genre page, update the query parameters without reloading the page
      navigate({
        pathname: location.pathname,
        search: `?${newQueryParams.toString()}`,
      });
    }
  };

  if (isLoading) return <p>Loading genres...</p>;
  if (error) return <p>Error loading genres</p>;

  return (
    <TreeContainer>
      <StyledTree
        value={treeData}
        selectionMode="checkbox"
        selectionKeys={selectedNodes}
        onSelectionChange={handleSelectionChange}
      />
    </TreeContainer>
  );
}
