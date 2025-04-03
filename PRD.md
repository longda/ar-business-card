# PRD: Augmented Reality (AR) Business Card

## Project Overview
Create a web-based augmented reality (AR) business card that users can interact with using their mobile devices or desktop browsers. The business card will display 3D elements and animations when viewed in AR, offering a modern and engaging way to share contact information. This project will be fully self-contained, requiring no backend services, authentication, or external API keys.

## Goals
1. Provide a creative and interactive AR experience for showcasing a business card.
2. Ensure the project is lightweight, responsive, and works seamlessly on modern browsers with WebXR support.
3. Use modern web technologies to build a self-contained, deployable application.
4. Make the application easy to host and share via GitHub or personal websites.

---

## Technology Stack
- **Frontend Framework**: Next.js
- **3D Library**: Three.js
- **AR Framework**: A-Frame (with WebXR support)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

---

## Features

### 1. Interactive AR Business Card
- Display a virtual business card in augmented reality with 3D elements such as:
  - A rotating logo or avatar.
  - Text fields for name, job title, and contact information.
  - Icons for website links, email, and social media profiles.
- Users can view the card in AR via their mobile device's camera or interact with it in a 3D environment on desktops.

### 2. QR Code Integration
- Generate a QR code that users can scan to access the AR business card directly on their mobile devices.

### 3. Animations
- Add subtle animations to enhance interactivity:
  - Rotating logo/avatar.
  - Pulsing effect on clickable icons (e.g., email, LinkedIn).
  - Smooth transitions when loading or interacting with elements.

### 4. Responsive Design
- Ensure the application works across devices:
  - Mobile: AR experience using WebXR.
  - Desktop: Interactive 3D view of the business card.

### 5. Customization Options
- Allow users to easily modify:
  - Name, title, and contact details.
  - Logo/avatar image.
  - Colors of the business card elements.

### 6. No Backend Dependency
- Store all data (e.g., contact details) in static JSON files or hardcoded into the app for simplicity and privacy.

---

## User Interface

### Main View
- **AR Mode**:
  - Displays the virtual business card in augmented reality.
  - Includes instructions for scanning the QR code or enabling camera permissions.
  
- **Desktop Mode**:
  - Displays the business card in an interactive 3D environment.
  - Allows users to rotate and zoom using mouse/touch gestures.

### Controls
- Camera toggle button to switch between AR view and standard view (if supported).
- Clickable icons for actions (e.g., open website, send email).

### QR Code Section
- A static QR code displayed at the bottom of the page with instructions for scanning it to open the AR experience on mobile.

---

## Technical Requirements

### Core Logic
1. **3D Scene Setup**
   - Use Three.js or A-Frame to create a virtual scene containing:
     - A flat rectangular "card" as the base.
     - Text elements for name, title, and contact details.
     - Icon models for links (e.g., LinkedIn, GitHub).
     - A logo/avatar as a central element.

2. **AR Functionality**
   - Use A-Frame's WebXR integration for AR support on mobile devices.
   - Ensure fallback compatibility for browsers that do not support WebXR by providing a standard interactive 3D view.

3. **QR Code Generation**
   - Use a static QR code image linking to the hosted application URL.

4. **Animation**
   - Use Three.js animations or A-Frame's animation components for:
     - Rotating logo/avatar.
     - Pulsing clickable icons.

5. **Data Management**
   - Store all business card data in a static JSON file:
     ```json
     {
       "name": "John Doe",
       "title": "Software Engineer",
       "contact": {
         "email": "johndoe@example.com",
         "phone": "+1234567890",
         "website": "https://johndoe.dev",
         "linkedin": "https://linkedin.com/in/johndoe"
       },
       "logo": "/assets/logo.png"
     }
     ```

6. **Responsive Design**
   - Use Tailwind CSS for styling and ensure layouts adapt across screen sizes.

---

## Development Milestones

### Phase 1: Project Setup
1. Initialize Next.js project with Tailwind CSS configuration.
2. Set up A-Frame for WebXR integration.
3. Configure basic routing for `/` (main page).

### Phase 2: Basic AR Scene
1. Create a simple A-Frame scene with:
   - A flat rectangular plane as the business card base.
   - Text elements for name/title/contact info.
   - Placeholder icons for links.

2. Add interactivity:
   - Clickable icons that open links in new tabs.

### Phase 3: Animations and Enhancements
1. Add animations using A-Frame's animation components or Three.js animation system:
   - Rotating logo/avatar.
   - Pulsing clickable icons.
2. Implement smooth transitions when loading elements into the scene.

### Phase 4: QR Code Integration
1. Generate a static QR code linking to the hosted app URL using an online generator or library like `qrcode.react`.
2. Display the QR code on the main page with instructions.

### Phase 5: Responsive Design
1. Optimize layouts for mobile devices using Tailwind CSS utilities.
2. Test touch gestures for interacting with the scene on mobile.

### Phase 6: Testing and Deployment
1. Test on various devices/browsers to ensure compatibility (especially WebXR support).
2. Deploy on Vercel with a custom subdomain if needed (e.g., `ar-business-card.vercel.app`).

---

## Deliverables

1. Fully functional web app hosted on Vercel or your personal website directory.
2. Public GitHub repository containing:
   - Source code with detailed comments.
   - Clear `README.md` explaining how to set up and use the app locally.
   - Screenshots of both desktop and AR experiences.

---

## Future Enhancements (Post-MVP)
1. Add support for additional AR markers (e.g., scan an image to load the business card).
2. Include more advanced animations (e.g., particles around the logo).
3. Allow users to download their own customizable version of the AR business card by editing JSON data directly in-app.
