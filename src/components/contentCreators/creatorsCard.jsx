import React from "react";
import "./creatorsCard.css";
import { supabase } from "../../client";
import { useNavigate } from "react-router-dom";
export default function CreatorsCard({ creator, onClick, onDelete, imageURL }) {
  const navigate = useNavigate();
  const handleEdit = (e) => {
    e.stopPropagation(); // To prevent the onClick event of the parent div from being triggered
    navigate(`/editCreator/${creator.id}`);
  };

  const handleDelete = async (e) => {
    e.stopPropagation();
    try {
      const { data, error } = await supabase
        .from("creators")
        .delete()
        .eq("id", creator.id);

      if (error) {
        throw error;
      }

      // Call the onDelete prop function to notify parent component
      if (onDelete) {
        onDelete(creator.id);
      }
    } catch (error) {
      console.error("Error deleting creator:", error);
    }
  };
  function firstSentence(str) {
    return str.split(".")[0] + (str.includes(".") ? "." : "");
  }

  return (
    <div className="creatorsCard" onClick={onClick}>
      <div
        className="card"
        style={{
          backgroundImage: `url(${imageURL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2>{creator.name}</h2>
        <p class="shortened-description">
          {firstSentence(creator.description)}
        </p>

        <div className="button-container">
          <button className="edit-btn" onClick={handleEdit}>
            Edit
          </button>
          <button className="delete-btn" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
