import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../../client";
import "./EditCreator.css";

export default function EditCreator() {
  const { id } = useParams(); // Getting the ID from the URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  });

  useEffect(() => {
    const fetchCreatorData = async () => {
      try {
        const { data, error } = await supabase
          .from("creators")
          .select("*")
          .eq("id", id)
          .single();
        if (error) {
          throw error;
        }
        setFormData(data);
      } catch (error) {
        console.error("Error fetching creator data:", error);
      }
    };

    fetchCreatorData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from("creators")
        .update(formData)
        .eq("id", id);
      if (error) {
        throw error;
      }
      navigate("/"); // Navigate back to the grid after successful edit
    } catch (error) {
      console.error("Error updating creator:", error);
    }
  };

  return (
    <div className="container-edit">
      <h2 className="title-edit">Edit Creator</h2>
      <form className="edit-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          className="edit-input"
          required
        />
        <input
          type="url"
          name="url"
          placeholder="URL"
          value={formData.url}
          onChange={handleInputChange}
          className="edit-input"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
          className="edit-textarea"
          required
        />
        <input
          type="url"
          name="imageURL"
          placeholder="Image URL"
          value={formData.imageURL}
          onChange={handleInputChange}
          className="edit-input"
        />
        <button type="submit" className="edit-button">
          Update Creator
        </button>
      </form>
    </div>
  );
}
