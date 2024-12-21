# Student Attendance Management System

A modern, responsive web-based student attendance management system built with HTML, CSS, and JavaScript.

## Features

- **Modern UI/UX**
  - Responsive grid layout
  - Fixed navigation sidebar
  - Mobile-friendly design
  - Smooth transitions and animations

- **User Authentication**
  - Teacher login/registration
  - Remember me functionality
  - Secure password handling
  - Auto logout feature

- **Dashboard**
  - Welcome message with current date
  - Real-time statistics
  - Recent activity tracking
  - Quick access navigation
  - Today's attendance overview
  - Last updated records

- **Subject Management**
  - Add/Edit subjects
  - Assign classes
  - View subject details
  - Track subject attendance

- **Student Management**
  - Add/Edit students
  - Assign to subjects
  - View student details
  - Attendance history

- **Attendance**
  - Take attendance by subject
  - Mark multiple students
  - Add remarks
  - Real-time updates

- **Records**
  - View attendance history
  - Filter by date/subject
  - Export records
  - Detailed statistics

## Project Structure

```
student-attendance/
├── index.html          # Main login page
├── styles.css         # Global styles
├── css/               # Component styles
│   ├── login.css     # Login page styles
│   └── dashboard.css # Dashboard styles
├── js/               # JavaScript files
│   ├── auth.js      # Authentication logic
│   ├── dashboard.js # Dashboard functionality
│   ├── subjects.js  # Subject management
│   ├── students.js  # Student management
│   ├── attendance.js# Attendance taking
│   └── records.js   # Records viewing
└── pages/           # HTML pages
    ├── dashboard.html
    ├── subjects.html
    ├── students.html
    ├── attendance.html
    └── records.html
```

## Layout Structure

- **Navigation**
  - Fixed sidebar on desktop (280px width)
  - Top navigation on mobile
  - Collapsible menu for smaller screens
  - Quick access links with icons

- **Content Area**
  - Responsive grid system
  - Card-based layout
  - Flexible containers
  - Proper spacing and alignment

## Responsive Design

- **Desktop (>1024px)**
  - Side-by-side layout
  - Fixed navigation sidebar
  - Multi-column content grid

- **Tablet (768px - 1024px)**
  - Adjusted navigation width
  - Responsive grid adjustments
  - Optimized spacing

- **Mobile (<768px)**
  - Single column layout
  - Top navigation
  - Full-width cards
  - Touch-friendly buttons

## Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. Register a new teacher account
4. Login and start managing attendance

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Dependencies

- Font Awesome 6.0.0 (for icons)
- Modern browser with CSS Grid support

## Data Storage

Currently uses localStorage for data persistence. In a production environment, this should be replaced with a proper backend server.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## Future Improvements

- [ ] Add dark mode support
- [ ] Implement data export features
- [ ] Add more statistical visualizations
- [ ] Enhance mobile navigation
- [ ] Add offline support