import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../client";
import { Link } from "react-router-dom";
import CreatorsCard from "../../components/contentCreators/creatorsCard";
import "./creatorDetailCard.css";

export default function CreatorDetailCard() {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

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
        setCreator(data);
      } catch (error) {
        console.error("Error fetching creator details:", error);
      }
    };

    fetchCreatorData();
  }, [id]);

  if (!creator) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>{creator.name}</h2>
      <div className="image-container">
        <img src={creator.imageURL} class="image-circle"></img>
      </div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ioaY1z2trx4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p>{creator.description}</p>
      <a href={creator.url} target="_blank" rel="noopener noreferrer">
        Follow on Social Media
      </a>
    </div>
  );
}
