import React, { useState, useEffect } from "react";
import {
  TreeContainer,
  StyledTree,
  StyledDiv,
} from "./MultiSelectFilterStyled";
import { useGetGenresListQuery } from "../../store/apiSlice";
import { useLocation, useNavigate } from "react-router";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function TreeWithCheckboxDemo() {
  const { data, error, isLoading } = useGetGenresListQuery();
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

    const selectedGenreIds = Object.keys(selectedGenres)
      .filter((key) => selectedGenres[key])
      .filter((key) => key !== "0");

    const newQueryParams = new URLSearchParams();
    selectedGenreIds.forEach((genreId) =>
      newQueryParams.append("genreId", genreId)
    );

    navigate({
      pathname: "/genres",
      search: `?${newQueryParams.toString()}`,
    });
  };

  if (isLoading) {
    return (
      <StyledDiv>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Skeleton />
        </SkeletonTheme>
      </StyledDiv>
    );
  }

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
