<template>
  <TvHero :configHero="configHero">
    <template #title>
      <span style="color: #6a1b9a">Custom</span> Title with <em style="text-decoration: underline">Slots</em>
    </template>

    <template #description>
      <div style="background-color: #f3e5f5; padding: 10px; border-radius: 8px; color: #4a148c;">
        <strong>Look at this!</strong> I can render <code>HTML</code> inside the description slot.
        <ul>
          <li>Rich text</li>
          <li>Lists</li>
          <li>Links</li>
        </ul>
      </div>
    </template>

    <template #actions>
      <button style="background-color: #7b1fa2; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">
        Custom Button
      </button>
      <a href="#" style="margin-left: 10px; color: #7b1fa2;">Custom Link</a>
    </template>

    <template #image>
       <div style="border: 4px dashed #7b1fa2; padding: 20px; border-radius: 50%;">
          <img src="https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763663056/uqqtkgp1lg3xdplutpga.png" alt="TODOvue Logo" style="width: 150px">
       </div>
    </template>
  </TvHero>
</template>

<script setup>
import { TvHero } from "todovue-hero";
import "todovue-hero/style.css";
import "todovue-button/style.css";

const configHero = {
  title: "Original Title (Ignored)",
  description: "Original Description (Ignored)",
  button: "Original Button",
  image: "https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763663056/uqqtkgp1lg3xdplutpga.png",
  alt: "TODOvue Logo",
};
</script>
