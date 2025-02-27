# Menu-Gotchi: A Three.js Journey

## What will you grow?

Try different food combinations of candy, tofu, and pizza to grow different creatures in this 3D virtual pet experience.

![Image Placeholder]()

[Live Demo](https://tamagotchi-challenge-fawn.vercel.app/)

## 📖 Overview

Menu-Gotchi was built for the Three.js Journey bi-monthly community challenge and inspired some 90s nostalgia. I used Blender to model a Tamagotchi that looks like the one I had when I was a kid; at least the outside colors look like it; the creatures inside started as 2D textures I drew and then used AI generation for inspiration and creation.

The creature goes through three lifecycles:

1. hatching
2. growing
3. fully-grown.

There are eight possible combinations of fully-grown creatures, which are calculated in the utils.js file.

## 📚 Libraries and technologies used

[Vite](https://vite.dev/) Build tool and Development server
[Vercel](https://vercel.com/) for deployment

This experience relied heavily on all the awesome libraries created by the [pmnd.rs collective](https://docs.pmnd.rs/)

1. [Three.js](https://threejs.org/) - 3D Library
2. [React Three Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction) - React renderer for Three JS
3. [Drei](https://drei.docs.pmnd.rs/getting-started/introduction) - R3F Helpers
4. [Postprocessing](https://react-postprocessing.docs.pmnd.rs/introduction) - Animations and Effects
5. [React Spring](https://www.react-spring.dev/) Animation Library 6.[Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction) State management library

### Modeling and Textures

[Blender](https://www.blender.org/) for 3D Modeling
[Canva](https://www.canva.com/) for Texture generation with "magic" components, where the AI was prompted with "voxel style {CREATURE}" or for example "voxel style panda" for the hatchling component in the "growing" stage.

## 🚀 How to use

With node and npm clone the repositository, from the project root run `npm install` followed by `npm run dev`

## 🐛 Known issues & Future improvements

- Not yet optimized for mobile devices
- Performance improvements are needed
- Loading experience is buggy
- UI enhancements are needed

📜 License
MIT © [Bianca Silva]
