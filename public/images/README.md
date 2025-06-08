# Images Folder Organization

This folder contains all the images used on the Safari Paparazzi website.

## Folder Structure

- **`gallery/`** - Main photo gallery images (wildlife, landscapes, etc.)
- **`portfolio/`** - Portfolio showcase images
- **`team/`** - Team member photos and headshots
- **`logos/`** - Company logos, brand assets, and partner logos
- **`backgrounds/`** - Background images for sections and hero areas
- **`icons/`** - Icon images and small graphics

## Image Guidelines

### Recommended Formats
- **Photos**: JPG/JPEG for photographs
- **Graphics/Logos**: PNG for transparency, SVG for scalable graphics
- **Backgrounds**: JPG for large backgrounds, WebP for better compression

### Recommended Sizes
- **Gallery images**: 1920x1080px or higher
- **Portfolio images**: 1200x800px minimum
- **Team photos**: 400x400px (square) or 300x400px (portrait)
- **Logos**: SVG preferred, or PNG at 200x200px minimum
- **Background images**: 1920x1080px or higher

### File Naming Convention
Use descriptive, lowercase names with hyphens:
- `safari-sunset-landscape.jpg`
- `team-john-doe-headshot.jpg`
- `logo-safari-paparazzi-main.svg`

## Usage in Code
Images in this folder can be referenced in your Next.js components like:
```jsx
<Image src="/images/gallery/safari-sunset.jpg" alt="Safari sunset" />
```

## Upload Instructions
1. Choose the appropriate subfolder for your image type
2. Follow the naming convention above
3. Optimize images for web (compress if needed)
4. Update this README if you add new categories
