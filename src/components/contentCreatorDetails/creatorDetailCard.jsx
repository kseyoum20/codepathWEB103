import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CreatorDetailCard() {
  const { id } = useParams();
  return (
    <div>
      {" "}
      <h1>this is Detail</h1>{" "}
    </div>
  );
}
