# Tamagotchi Challenge for Three.js Journey

Menu-Gotchi was built for the Three.js Journey bi-monthly community challenge, and inspired some lovely 90s nostalgia. I modeled a Tamagotchi that looks like the one I had when I was a kid, at least the outside colours look like it, the creatures inside started out as 2D textures I drew and drew on AI generation for inspiration and creation. This was a fun experiment where you feed the tamagotchi different foods and get a surprise character based on the combination of foods you provide it.

The creature goes through three different lifecycles: hatching, growing and grown, where the final reveal is your resulting creature. There are three kinds of food you can feed your creature: candy, tofu, or pizza, and you control those with the tamagotchi buttons. There are a possible combination of:

# Technologies used

Three.js with React Three Fiber, Drei, Postprocessing, React Spring Animation Library, Zustand, Blender.

# Credits

Textures generated with Canva's AI magic components and the prompt "voxel style {CREATURE}" where the creature was for example the hatchling panda.

# ToDo List

First Implementation

- [x] Basic project set up
- [x] Deploy to Vercel
- [x] Set up Zustand states ("start", "hatching", "idle", "eating", "growing", "sleeping")
- [x] Set up food counters
- [x] Create LowPoly Tamagotchi Blender File
- [x] Load Model on
- [x] Implement click detection
- [x] remove egg texture and add small creature texture
- [x] Create Egg sprite texture or shader
- [x] On click change state to eating
- [x] Assign foods to each button
- [x] Set state to "grown"
- [x] Show new creature
- [x] Enable Reset, change state to hatching
      background
- [x] Handle switch between eating modes
- [x] Display message "Thank you for growing this creature"
- [x] Show Button to Grow another
- [x] Add animation to distort egg and give idea of it hatching
- [x] Assign final creature
- [x] On click set timer, increase scale of creature, near end timer decrease scale of creature change state to not eating
- [x] add floor
- [x] Add Favicon
- [x] Set up emojis of foods in side panel with score for each
- [x] Change background colour to signal end of game
- [x] Add bloom / postprocessing for final creature on screen
- [x] Fix clickability of buttons should be a timeout so user can't click again
- [x] Hide Leva
- [x] Add everything to Leva and explore options

Still to go

- [ ] Loading Screen
- [ ] Check loading for performances
- [ ] refactor for stages https://r3f.docs.pmnd.rs/advanced/pitfalls#%E2%9C%85-consider-using-visibility-instead to avoid mounting runtime
- [ ] Fix UI
- [ ] Add loading screen
- [ ] Make background look better - Studio finish from Examples
- [ ] Fix lighting
- [ ] Add sound effects when buttons are clicked
- [ ] Make mobile friendly
