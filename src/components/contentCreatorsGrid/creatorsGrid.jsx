import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../client";
import CreatorsCard from "../../components/contentCreators/creatorsCard";
import "./creatorsGrid.css";
import { useNavigate } from "react-router-dom";
export default function CreatorsGrid() {
  const [creators, setCreators] = useState([]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  });
  const fetchData = async () => {
    try {
      const { data, error } = await supabase.from("creators").select("*");
      if (error) {
        throw error;
      }
      setCreators(data);
    } catch (error) {
      console.error("Error fetching creators:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/Details/${id}`);
  };

  const handleDeleteCreator = (id) => {
    setCreators((prevCreators) =>
      prevCreators.filter((creator) => creator.id !== id)
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from("creators")
        .insert([formData]);
      if (error) {
        throw error;
      }

      // If successful, refresh the creators list by adding the new creator
      if (data && data[0]) {
        setCreators((prevCreators) => [...(prevCreators || []), data[0]]);
      }
      // Refetch the creators' data
      fetchData();

      // Optionally, clear the form after successful submission
      setFormData({ name: "", url: "", description: "", imageURL: "" });
    } catch (error) {
      console.error("Error adding creator:", error);
    }
  };

  return (
    <div className="container">
      <h2 className="title">Creatoverse</h2>
      <div className="creatorsGrid">
        {creators.map((creator) => (
          <CreatorsCard
            key={creator.id}
            creator={creator}
            onClick={() => handleCardClick(creator.id)}
            onDelete={handleDeleteCreator}
            imageURL={creator.imageURL}
          />
        ))}
      </div>
      <div className="addCreatorForm">
        <h2 className="title">Add New Creator</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="url"
            name="url"
            placeholder="URL"
            value={formData.url}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
          <input
            type="url"
            name="imageURL"
            placeholder="Image URL"
            value={formData.imageURL}
            onChange={handleInputChange}
          />
          <button type="submit">Add Creator</button>
        </form>
      </div>
    </div>
  );
}
