<<<<<<< HEAD
# Front End Developer Portfolio

A modern, responsive portfolio website built with React and JavaScript. Features a beautiful design with smooth animations and a professional color palette.

## Features

- 🎨 Modern and beautiful UI design
- 📱 Fully responsive layout
- ⚡ Smooth animations and transitions
- 🎯 Clean and maintainable code
- 🌈 Professional color palette
- 🚀 Fast and optimized performance

## Sections

- **Hero**: Introduction with call-to-action buttons
- **About**: Personal information and statistics
- **Skills**: Technical skills with progress bars
- **Projects**: Showcase of featured projects
- **Contact**: Contact form and information
- **Footer**: Links and social media

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update the name and description
   - Modify social media links

2. **About Section** (`src/components/About.jsx`):
   - Update the about text
   - Modify statistics

3. **Skills Section** (`src/components/Skills.jsx`):
   - Add or remove skills
   - Adjust skill levels

4. **Projects Section** (`src/components/Projects.jsx`):
   - Add your projects
   - Update project details and links

5. **Contact Section** (`src/components/Contact.jsx`):
   - Update contact information
   - Configure EmailJS for form submission (see EmailJS Setup below)

### Color Palette

The color palette is defined in `src/index.css` using CSS variables. You can customize:

- `--primary-color`: Main brand color
- `--secondary-color`: Secondary accent color
- `--dark-bg`: Background color
- And more...

## EmailJS Setup

The contact form uses EmailJS to send emails. To enable email functionality:

1. **Create an EmailJS account** at [https://www.emailjs.com/](https://www.emailjs.com/)

2. **Set up an Email Service**:
   - Go to Email Services and add a new service (Gmail, Outlook, etc.)
   - Note down your Service ID

3. **Create an Email Template**:
   - Go to Email Templates and create a new template
   - Use these template variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
     - `{{to_email}}` - Recipient email (vishu05475@gmail.com)
   - Set the "To Email" field to: `vishu05475@gmail.com`
   - Note down your Template ID

4. **Get your Public Key**:
   - Go to Account → API Keys
   - Copy your Public Key

5. **Create a `.env` file** in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

6. **Replace the placeholder values** in `.env` with your actual EmailJS credentials

7. **Restart your development server** after creating the `.env` file

## Technologies Used

- React 18
- JavaScript (ES6+)
- CSS3 (Custom Properties, Flexbox, Grid)
- React Icons
- EmailJS (for contact form)
- Vite

## License

This project is open source and available for personal use.

=======
# Portfolio
>>>>>>> 822d661033cd192ccf098f2de37e45a01bb3242a
